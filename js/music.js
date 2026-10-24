// Note helpers and song building.

const PC = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

// Note names per UI language (Swedish calls B "H").
const NOTE_NAMES = {
  en: ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'],
  sv: ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'H'],
};
let names = NOTE_NAMES.en;
export function setNoteNames(lang) { names = NOTE_NAMES[lang] || NOTE_NAMES.en; }

// One colour per pitch class (boomwhacker-style rainbow).
export const NOTE_COLORS = [
  '#e53935', '#f4511e', '#fb8c00', '#f9a825', '#fdd835', '#43a047',
  '#7cb342', '#00acc1', '#26a69a', '#1e88e5', '#5e35b1', '#8e24aa',
];

export const pc = (m) => ((m % 12) + 12) % 12;
export const isBlack = (m) => [1, 3, 6, 8, 10].includes(pc(m));
export const noteName = (m) => names[pc(m)];
export const noteColor = (m) => NOTE_COLORS[pc(m)];

export function parseNote(s) {
  const m = /^([A-G])([#b]?)(-?\d)$/.exec(s);
  if (!m) throw new Error(`Bad note: ${s}`);
  const acc = m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0;
  return (Number(m[3]) + 1) * 12 + PC[m[1]] + acc;
}

// "C4 D4:0.5 R:1 | E4:2" -> events. Duration is in beats (default 1), R is a rest.
function parseMelody(str) {
  const events = [];
  let t = 0;
  for (const tok of str.split(/\s+/)) {
    if (!tok || tok === '|') continue;
    const [n, d] = tok.split(':');
    const dur = d ? parseFloat(d) : 1;
    if (n !== 'R') events.push({ time: t, dur, midi: parseNote(n), hand: 'R' });
    t += dur;
  }
  return events;
}

function chordRoot(tok) {
  const m = /^([A-G])([#b]?)/.exec(tok);
  return PC[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
}

// Left hand for the two-hand version, generated from one chord per bar ("C F.G" = two chords
// in a bar). Easy/medium melodies get one held root note per chord; hard melodies get a
// moving bass (root + fifth, or oom-pah-pah in 3/4).
function leftHand(song) {
  if (!song.chords) return [];
  const bpb = song.beatsPerBar;
  const bars = song.chords.split(/\s+/).filter((x) => x && x !== '|');
  const events = [];
  bars.forEach((bar, i) => {
    const start = (song.pickup || 0) + i * bpb;
    const segs = bar.split('.');
    const segLen = bpb / segs.length;
    segs.forEach((s, j) => {
      const root = 48 + chordRoot(s);
      const fifth = root + 7 > 59 ? root - 5 : root + 7;
      const st = start + j * segLen;
      if (song.level !== 'hard') {
        events.push({ time: st, dur: segLen, midi: root, hand: 'L' });
      } else if (segLen === 3) { // waltz: oom-pah-pah
        events.push({ time: st, dur: 1, midi: root, hand: 'L' });
        events.push({ time: st + 1, dur: 1, midi: fifth, hand: 'L' });
        events.push({ time: st + 2, dur: 1, midi: fifth, hand: 'L' });
      } else if (segLen >= 2) {
        events.push({ time: st, dur: segLen / 2, midi: root, hand: 'L' });
        events.push({ time: st + segLen / 2, dur: segLen / 2, midi: fifth, hand: 'L' });
      } else {
        events.push({ time: st, dur: segLen, midi: root, hand: 'L' });
      }
    });
  });
  // the short final bar after a pickup must not run past the melody
  const end = parseMelody(song.melody).reduce((t, e) => Math.max(t, e.time + e.dur), 0);
  return events.filter((e) => e.time < end - 1e-6).map((e) => ({ ...e, dur: Math.min(e.dur, end - e.time) }));
}

// Song -> { events, steps, length, lo, hi }. A step is every note that starts at the same time.
// hands: 'one' = melody only, 'two' = melody + generated left hand.
export function buildSong(song, hands = 'one') {
  const events = [...parseMelody(song.melody), ...(hands === 'two' ? leftHand(song) : [])].sort(
    (a, b) => a.time - b.time || a.midi - b.midi,
  );
  const steps = [];
  for (const ev of events) {
    const last = steps[steps.length - 1];
    if (last && Math.abs(last.time - ev.time) < 1e-6) last.notes.push(ev);
    else steps.push({ time: ev.time, notes: [ev] });
    ev.step = steps.length - 1;
  }
  const length = Math.max(...events.map((e) => e.time + e.dur));
  const midis = events.map((e) => e.midi);
  return { events, steps, length, lo: Math.min(...midis), hi: Math.max(...midis) };
}

// Expand a range so it starts and ends on white keys and has at least `minWhites` white keys.
export function fitRange(lo, hi, minWhites = 8) {
  if (isBlack(lo)) lo--;
  if (isBlack(hi)) hi++;
  const whites = () => { let n = 0; for (let m = lo; m <= hi; m++) if (!isBlack(m)) n++; return n; };
  let up = true;
  while (whites() < minWhites) {
    if (up) { hi++; if (isBlack(hi)) hi++; } else { lo--; if (isBlack(lo)) lo--; }
    up = !up;
  }
  return [lo, hi];
}
