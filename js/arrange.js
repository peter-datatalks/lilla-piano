// "Make a song": turns a free-play recording into a song the app can play, with chords.
// Runs on the device using basic music theory (no server, no AI model):
//   1. melody   - notes pressed together count as one; the top note is the tune
//   2. tempo    - find the beat that puts the most notes on a simple grid of eighths
//   3. rhythm   - snap every note to that grid; long pauses become (short) rests
//   4. metre    - 4/4 or 3/4, whichever puts the long notes on the first beat of a bar
//   5. key      - move the tune to C major or A minor (the fewest black keys) and a
//                 comfortable octave, like every song in the library
//   6. ending   - a tune that stops "in the air" gets a last bar on the home note
//   7. chords   - one or two chords per bar from the key's family, chosen by which chord
//                 shares the most melody notes and by how chords like to follow each other
// The result has the same shape as the songs in songs.js (melody + chords strings).

const GRID = 0.5; // shortest note: an eighth
const MAJOR = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88]; // Krumhansl key profiles
const MINOR = [6.33, 2.68, 3.52, 5.38, 2.6, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17];
const NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const BLACK = [1, 3, 6, 8, 10];
const pcOf = (m) => ((m % 12) + 12) % 12;
const noteStr = (m) => `${NAMES[pcOf(m)]}${Math.floor(m / 12) - 1}`;
const snap = (x) => Math.max(GRID, Math.round(x / GRID) * GRID);

// Chords of each key: token, chord tones, and its role (for how chords follow each other).
const KEYS = {
  major: { tonic: 0, chords: [
    ['C', [0, 4, 7], 'I'], ['Dm', [2, 5, 9], 'ii'], ['Em', [4, 7, 11], 'iii'],
    ['F', [5, 9, 0], 'IV'], ['G', [7, 11, 2], 'V'], ['Am', [9, 0, 4], 'vi']] },
  minor: { tonic: 9, chords: [
    ['Am', [9, 0, 4], 'I'], ['Dm', [2, 5, 9], 'IV'], ['E', [4, 8, 11], 'V'],
    ['F', [5, 9, 0], 'VI'], ['C', [0, 4, 7], 'III'], ['G', [7, 11, 2], 'VII']] },
};
// How well chord B follows chord A (by role); anything not listed is neutral.
const FLOW = {
  'I>IV': 0.3, 'I>V': 0.3, 'I>vi': 0.15, 'I>ii': 0.1, 'I>VI': 0.15,
  'IV>V': 0.35, 'IV>I': 0.25, 'IV>ii': 0.1, 'ii>V': 0.35, 'vi>IV': 0.25, 'vi>ii': 0.2,
  'iii>vi': 0.2, 'iii>IV': 0.15, 'V>I': 0.45, 'V>vi': 0.15, 'V>IV': -0.25,
  'VI>V': 0.25, 'VI>IV': 0.15, 'III>VI': 0.2, 'VII>III': 0.2, 'VII>I': 0.15,
};
const STAY = 0.45; // wish to keep the same chord (young players like calm harmony)
const MID_BAR_CHANGE = -0.15; // changing chord in the middle of a bar costs a little more
const COLOUR = { ii: -0.25, iii: -0.35, vi: -0.15, III: -0.2, VI: -0.1, VII: -0.3 }; // keep it simple: I IV V first

/** One note per moment: notes pressed within 70 ms of each other are a chord; keep the top one. */
function melodyOf(notes) {
  const sorted = [...notes].sort((a, b) => a.t - b.t);
  const out = [];
  for (const n of sorted) {
    const last = out[out.length - 1];
    if (last && n.t - last.t < 70) {
      if (n.m > last.m) { last.m = n.m; last.d = n.d; }
    } else out.push({ ...n });
  }
  return out;
}

/** Seconds per beat: the grid that fits the gaps between notes best, near a walking tempo. */
function findBeat(onsets) {
  const gaps = [];
  for (let i = 1; i < onsets.length; i++) gaps.push(Math.min(onsets[i] - onsets[i - 1], 2400));
  if (gaps.length < 2) return 0.6;
  let best = 0.6, bestCost = Infinity;
  for (let spb = 0.3; spb <= 1.2; spb += 0.005) {
    let cost = 0;
    for (const g of gaps) {
      const x = g / 1000 / spb;
      const q = snap(x);
      cost += Math.abs(x - q) / Math.max(1, q) + (q % 1 ? 0.08 : 0) + (x < GRID * 0.7 ? 0.3 : 0);
    }
    cost = cost / gaps.length + 0.12 * Math.abs(Math.log2(spb / 0.6));
    if (cost < bestCost) { bestCost = cost; best = spb; }
  }
  return best;
}

/** Snap to beats. Returns [{ m, time, dur }] with rests left as gaps. */
function quantize(mel, spb) {
  const t0 = mel[0].t;
  const out = [];
  let time = 0;
  mel.forEach((n, i) => {
    if (i > 0) {
      const gap = (n.t - mel[i - 1].t) / 1000 / spb;
      time = out[i - 1].time + Math.min(snap(gap), 4); // a long pause shrinks to at most 4 beats
    }
    out.push({ m: n.m, time, held: n.d == null ? 1 : n.d / 1000 / spb });
    if (i > 0) out[i - 1].ioi = time - out[i - 1].time;
  });
  out.forEach((n, i) => {
    const next = out[i + 1];
    const room = next ? next.time - n.time : Math.max(1, snap(n.held));
    // legato unless the child clearly paused (let go more than two beats before the next note)
    n.ioi ||= room;
    n.dur = room - n.held > 2 && n.held < room * 0.5 ? Math.min(room, snap(n.held)) : room;
  });
  return { notes: out, t0 };
}

/** 4/4 unless the tune clearly swings in three: long notes on first beats, none across bar lines. */
function chooseMetre(notes) {
  // judged on the time from each note to the next (ioi), so short, bouncy presses count as long notes
  const fit = (bpb) => notes.reduce((s, n) => {
    const pos = n.time % bpb;
    const crosses = Math.floor(n.time / bpb + 1e-6) !== Math.floor((n.time + n.ioi) / bpb - 1e-6);
    if (crosses) return s - n.ioi;
    if (Math.abs(pos) < 1e-6) return s + n.ioi;
    if (bpb === 4 && Math.abs(pos - 2) < 1e-6 && n.ioi >= 2) return s + 0.5 * n.ioi; // half note on beat 3
    return s;
  }, 0);
  const threeish = notes.some((n) => Math.abs(n.ioi - 3) < 1e-6 || Math.abs(n.ioi - 1.5) < 1e-6);
  return threeish && fit(3) > fit(4) * 1.1 ? 3 : 4;
}

const pearson = (a, b) => {
  const ma = a.reduce((x, y) => x + y) / 12, mb = b.reduce((x, y) => x + y) / 12;
  let num = 0, da = 0, db = 0;
  for (let i = 0; i < 12; i++) { num += (a[i] - ma) * (b[i] - mb); da += (a[i] - ma) ** 2; db += (b[i] - mb) ** 2; }
  return da && db ? num / Math.sqrt(da * db) : 0;
};

/** Shift to C major / A minor (fewest black keys, then the best key fit) and a comfortable octave. */
function chooseKey(notes) {
  const w = new Array(12).fill(0);
  for (const n of notes) w[pcOf(n.m)] += n.dur;
  const total = w.reduce((x, y) => x + y);
  const blackAt = (s) => BLACK.reduce((t, p) => t + w[pcOf(p - s)], 0);
  const fewest = Math.min(...Array.from({ length: 12 }, (_, s) => blackAt(s)));
  let best = null;
  for (let s = -5; s <= 6; s++) {
    if (blackAt(s) > fewest + 0.05 * total) continue;
    const shifted = w.map((_, p) => w[pcOf(p - s)]);
    const first = pcOf(notes[0].m + s), last = pcOf(notes[notes.length - 1].m + s);
    for (const [mode, profile, tonic] of [['major', MAJOR, 0], ['minor', MINOR, 9]]) {
      const rotated = profile.map((_, i) => profile[pcOf(i - tonic)]);
      const r = pearson(shifted, rotated) + (last === tonic ? 0.3 : 0) + (first === tonic ? 0.05 : 0)
        - (blackAt(s) - fewest) / total - Math.abs(s) * 0.002 + (mode === 'major' ? 0.05 : 0);
      if (!best || r > best.r) best = { r, s, mode };
    }
  }
  const { s: shift, mode } = best;
  // octave: centre the tune near G4/A4, never below F3
  const mids = notes.map((n) => n.m + shift);
  const centre = (Math.min(...mids) + Math.max(...mids)) / 2;
  let oct = Math.round((68 - centre) / 12) * 12;
  while (Math.min(...mids) + oct < 53) oct += 12;
  while (Math.max(...mids) + oct > 88) oct -= 12;
  return { shift: shift + oct, mode };
}

/** Cut notes at bar lines (the rest of a cut note becomes a rest) and close the last bar. */
function toBars(notes, bpb) {
  const bars = [];
  for (const n of notes) {
    const bar = Math.floor(n.time / bpb + 1e-6);
    const end = Math.min(n.time + n.dur, (bar + 1) * bpb);
    (bars[bar] ||= []).push({ m: n.m, time: n.time, dur: end - n.time });
  }
  for (let i = 0; i < bars.length; i++) bars[i] ||= [];
  const lastBar = bars[bars.length - 1];
  const last = lastBar[lastBar.length - 1];
  last.dur = (bars.length) * bpb - last.time; // hold the last note to the end of its bar
  return bars;
}

function melodyString(bars, bpb) {
  return bars.map((evs, i) => {
    const toks = [];
    let t = i * bpb;
    for (const e of evs) {
      if (e.time - t > 1e-6) toks.push(`R:${+(e.time - t).toFixed(3)}`);
      toks.push(e.dur === 1 ? noteStr(e.m) : `${noteStr(e.m)}:${+e.dur.toFixed(3)}`);
      t = e.time + e.dur;
    }
    if ((i + 1) * bpb - t > 1e-6) toks.push(`R:${+((i + 1) * bpb - t).toFixed(3)}`);
    return toks.join(' ');
  }).join(' | ');
}

/** Pick chords: Viterbi over half bars (4/4) or bars (3/4). */
function chooseChords(bars, bpb, mode) {
  const key = KEYS[mode];
  const segLen = bpb === 4 ? 2 : 3;
  const per = bpb / segLen;
  const segs = [];
  bars.forEach((evs, b) => {
    for (let k = 0; k < per; k++) {
      const s0 = b * bpb + k * segLen;
      segs.push({ s0, s1: s0 + segLen, notes: [] });
    }
  });
  const all = bars.flat();
  for (const seg of segs) {
    for (const e of all) {
      const ov = Math.min(seg.s1, e.time + e.dur) - Math.max(seg.s0, e.time);
      if (ov > 1e-6) seg.notes.push({ pc: pcOf(e.m), ov, strong: Math.abs(e.time - seg.s0) < 1e-6 || (e.time < seg.s0) });
    }
  }
  const fit = (seg, ch) => seg.notes.reduce((t, n) => {
    const w = n.ov * (n.strong ? 1.6 : 1);
    return t + (ch[1].includes(n.pc) ? w : -0.7 * w) + (n.strong && n.pc === ch[1][0] ? 0.15 : 0);
  }, 0) + (COLOUR[ch[2]] || 0);
  const N = segs.length;
  const C = key.chords;
  let score = C.map((ch, j) => fit(segs[0], ch) + (j === 0 ? 1.2 : 0));
  const back = [];
  for (let i = 1; i < N; i++) {
    const end = i >= N - per, beforeEnd = i === N - per - 1; // the last bar is home; the beat before it, V
    const midBar = i % per !== 0;
    const next = C.map((ch, j) => {
      let bestK = 0, best = -Infinity;
      C.forEach((pr, k) => {
        const v = score[k] + (k === j ? STAY : (FLOW[`${pr[2]}>${ch[2]}`] || 0) + (midBar ? MID_BAR_CHANGE : 0));
        if (v > best) { best = v; bestK = k; }
      });
      back[i] ||= [];
      back[i][j] = bestK;
      return best + fit(segs[i], ch) + (end && j === 0 ? 3 : 0) + (beforeEnd && ch[2] === 'V' ? 0.5 : 0);
    });
    score = next;
  }
  let j = score.indexOf(Math.max(...score));
  const path = [j];
  for (let i = N - 1; i > 0; i--) { j = back[i][j]; path.unshift(j); }
  const out = [];
  for (let b = 0; b < bars.length; b++) {
    const toks = path.slice(b * per, b * per + per).map((x) => C[x][0]);
    out.push(toks.every((x) => x === toks[0]) ? toks[0] : toks.join('.'));
  }
  return out.join(' ');
}

/**
 * tune: { id, name, emoji, notes: [{ m: midi, t: ms from start, d: ms held }] }
 * Returns a song object (same fields as songs.js), or null when there is nothing to arrange.
 */
export function arrangeTune(tune) {
  const mel = melodyOf(tune.notes || []);
  if (mel.length < 2) return null;
  const spb = findBeat(mel.map((n) => n.t));
  let { notes } = quantize(mel, spb);
  const bpb = chooseMetre(notes);
  const { shift, mode } = chooseKey(notes);
  notes = notes.map((n) => ({ ...n, m: n.m + shift }));

  // ending: land on the home note (C or A) if the tune stopped somewhere else
  const tonic = KEYS[mode].tonic;
  const last = notes[notes.length - 1];
  let addedEnding = false;
  if (pcOf(last.m) !== tonic) {
    const up = last.m + pcOf(tonic - last.m), down = up - 12;
    const home = last.m - down <= up - last.m ? down : up;
    const barEnd = (Math.floor(last.time / bpb + 1e-6) + 1) * bpb;
    last.dur = Math.max(GRID, Math.min(last.dur, barEnd - last.time));
    notes.push({ m: home, time: last.time + last.dur <= barEnd - GRID ? last.time + last.dur : barEnd, dur: bpb });
    addedEnding = true;
  }
  const bars = toBars(notes, bpb).slice(0, 64);

  const melody = melodyString(bars, bpb);
  const chords = chooseChords(bars, bpb, mode);
  const flat = bars.flat();
  const midis = flat.map((e) => e.m);
  const range = Math.max(...midis) - Math.min(...midis);
  const eighths = flat.filter((e) => e.dur < 1).length / flat.length;
  const level = eighths < 0.15 && range <= 9 ? 'easy' : eighths > 0.4 || range > 14 ? 'hard' : 'medium';
  const bpm = Math.max(60, Math.min(140, Math.round(60 / spb)));
  return {
    id: `tune-${tune.id}`, mine: true, tuneId: tune.id,
    country: 'mine', themes: ['mine'],
    title: tune.name, titleEn: tune.name, emoji: tune.emoji || '🎵',
    level, bpm, beatsPerBar: bpb, melody, chords,
    key: mode === 'major' ? 'C' : 'Am', addedEnding,
  };
}
