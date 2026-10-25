// Sheet music view: a scrolling staff (ColorNote style). Notes move right to left past a
// playhead; noteheads are coloured like the keys and named underneath.
// Same interface as Cascade: set `beat` (song position at the playhead) and `current`
// (guided step, -1 = none), then call draw().
import { noteColor, noteName, isBlack, pc, countsEighths } from './music.js';

const LETTER_OF_PC = [0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6]; // C C# D D# E F F# G G# A A# B -> C..B index
const NOTE_VALUES = [4, 3, 2, 1.5, 1, 0.75, 0.5, 0.25]; // in quarter notes (dotted values included)
const INK = '#4a3a2c';

// Diatonic step number: C4 = 28, D4 = 29 ... (octave * 7 + letter)
const dia = (m) => (Math.floor(m / 12) - 1) * 7 + LETTER_OF_PC[pc(m)];

// Split a length (in quarters) into drawable note values, tied together.
function splitValue(q) {
  const parts = [];
  let left = q;
  while (left > 0.124) {
    const v = NOTE_VALUES.find((n) => n <= left + 1e-6) || 0.25;
    parts.push(v);
    left -= v;
  }
  return parts;
}

export class SheetView {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.song = null;
    this.built = null;
    this.beat = 0;
    this.current = -1;
  }

  setSong(song, built) {
    this.song = song;
    this.built = built;
    this.unit = countsEighths(song) ? 8 : 4; // beat = eighth (6/8, 9/8…) or quarter
    this.grand = built.events.some((e) => e.hand === 'L');
  }

  resize() {
    const r = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.w = r.width;
    this.h = r.height;
    this.canvas.width = Math.round(r.width * dpr);
    this.canvas.height = Math.round(r.height * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  draw() {
    const { ctx, w, h, built, song } = this;
    if (!w || !h) return;
    ctx.clearRect(0, 0, w, h);
    if (!built) return;

    const grand = this.grand;
    const g = grand ? Math.max(6, Math.min(12, h / 21)) : Math.max(7, Math.min(15, h / 12));
    const yT = grand ? (h - 12 * g) / 2 : (h - 4 * g) / 2 - g * 0.6;
    const yB = yT + 8 * g;
    const toQ = 4 / this.unit; // beats -> quarter notes
    const minQ = Math.min(...built.events.map((e) => e.dur * toQ), 1);
    const ppq = Math.max(Math.min(130, w / 8), (2.8 * g) / minQ); // pixels per quarter note
    const ppb = ppq * toQ; // pixels per beat
    const clefW = g * 6.2;
    const playX = Math.max(clefW + 3 * g, w * 0.3);
    const xAt = (t) => playX + (t - this.beat) * ppb;
    const staves = grand ? [yT, yB] : [yT];
    const bottom = grand ? yB + 4 * g : yT + 4 * g;

    // staff lines
    ctx.strokeStyle = 'rgba(74,58,44,0.55)';
    ctx.lineWidth = 1;
    for (const y0 of staves) {
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(4, y0 + i * g);
        ctx.lineTo(w - 4, y0 + i * g);
        ctx.stroke();
      }
    }

    // playhead
    ctx.fillStyle = 'rgba(246,194,28,0.28)';
    roundRect(ctx, playX - g * 0.95, yT - 2.4 * g, g * 1.9, bottom - yT + 4.8 * g, g * 0.9);
    ctx.fill();

    // everything that scrolls is clipped to the right of the clef
    ctx.save();
    ctx.beginPath();
    ctx.rect(clefW, 0, w - clefW, h);
    ctx.clip();

    // bar lines
    ctx.strokeStyle = 'rgba(74,58,44,0.6)';
    const pickup = song.pickup || 0;
    for (let t = pickup || song.beatsPerBar; t < built.length - 1e-6; t += song.beatsPerBar) {
      const x = xAt(t) - g * 1.9;
      if (x < clefW || x > w) continue;
      ctx.beginPath();
      ctx.moveTo(x, yT);
      ctx.lineTo(x, bottom);
      ctx.stroke();
    }
    const endX = xAt(built.length) - g * 1.2;
    if (endX > clefW && endX < w) {
      ctx.fillStyle = INK;
      ctx.fillRect(endX, yT, 1.2, bottom - yT);
      ctx.fillRect(endX + 3, yT, 3.5, bottom - yT);
    }

    // rests (melody voice)
    for (const r of built.rests || []) {
      const x = xAt(r.time) + g * 0.3;
      if (x < clefW - 20 || x > w + 20) continue;
      this.drawRest(x, yT, g, r.dur * toQ);
    }

    // notes, grouped into chords (same time, same hand)
    const playing = this.current < 0;
    const groups = new Map();
    for (const ev of built.events) {
      const key = `${ev.time}|${ev.hand}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(ev);
    }
    for (const evs of groups.values()) {
      const ev = evs[0];
      const x0 = xAt(ev.time);
      if (x0 < clefW - ppb * ev.dur - 30 || x0 > w + 30) continue;
      const isCurrent = playing
        ? this.beat >= ev.time - 0.02 && this.beat < ev.time + ev.dur - 0.02
        : ev.step === this.current;
      const isDone = !playing && ev.step < this.current;
      const bass = ev.hand === 'L';
      const y0 = bass ? yB : yT;
      ctx.save();
      ctx.globalAlpha = isDone ? 0.35 : 1;
      let t = ev.time;
      let prev = null;
      for (const q of splitValue(ev.dur * toQ)) {
        const x = xAt(t);
        const hl = isCurrent && t === ev.time;
        let heads;
        if (evs.length === 1) {
          heads = [this.drawNote(x, ev, q, g, y0, bass, hl)];
        } else {
          heads = evs.map((e) => this.drawNote(x, e, q, g, y0, bass, hl, true));
          this.drawChordStem(x, heads, q, g, bass);
        }
        if (prev) heads.forEach((h, i) => this.drawTie(prev[i], h, g));
        prev = heads;
        t += q / toQ;
      }
      // label: chord symbol for chords, otherwise the note name
      // (melody above the staff when there are two hands, otherwise below)
      const label = evs.length > 1 && ev.chord ? ev.chord : noteName(ev.midi);
      ctx.fillStyle = evs.length > 1 ? INK : noteColor(ev.midi);
      ctx.font = `800 ${Math.round(g * (isCurrent ? 1.55 : 1.3))}px "Baloo 2", Nunito, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const labelY = bass ? yB + 4 * g + 3.4 * g : grand ? yT - 3 * g : yT + 4 * g + 3.6 * g;
      ctx.fillText(label, x0, labelY);
      ctx.restore();
    }
    ctx.restore();

    // clef and time signature (fixed on the left)
    ctx.fillStyle = 'rgba(250,246,236,0.94)';
    ctx.fillRect(0, 0, clefW, h);
    ctx.fillStyle = INK;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.font = `${Math.round(g * 6.4)}px "Apple Symbols", "Noto Music", "Segoe UI Symbol", serif`;
    ctx.fillText('\u{1D11E}', g * 0.4, yT + 4 * g + g * 1.05);
    if (grand) {
      ctx.font = `${Math.round(g * 3.4)}px "Apple Symbols", "Noto Music", "Segoe UI Symbol", serif`;
      ctx.fillText('\u{1D122}', g * 0.6, yB + 2.95 * g);
    }
    ctx.font = `800 ${Math.round(g * 2.1)}px "Baloo 2", Nunito, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const y0 of staves) {
      ctx.fillText(String(song.beatsPerBar), g * 4.9, y0 + g * 1.05);
      ctx.fillText(String(this.unit), g * 4.9, y0 + g * 3.05);
    }
    ctx.fillRect(clefW - 1, yT, 1.4, bottom - yT);
  }

  // Draws one notehead (+ stem, flags, dot, sharp, ledger lines). Returns head geometry for ties.
  drawNote(x, ev, q, g, y0, bass, highlight, noStem = false) {
    const { ctx } = this;
    const d = dia(ev.midi);
    const ref = bass ? 18 : 30; // bottom line: G2 (bass) / E4 (treble)
    const y = y0 + 4 * g - ((d - ref) * g) / 2;
    const color = noteColor(ev.midi);
    const s = highlight ? 1.25 : 1;
    const rx = g * 0.68 * s;
    const ry = g * 0.5 * s;

    // ledger lines
    ctx.strokeStyle = INK;
    ctx.lineWidth = 1.2;
    const low = bass ? 16 : 28;
    const high = bass ? 28 : 40;
    for (let L = low; L >= d; L -= 2) this.ledger(x, y0 + 4 * g - ((L - ref) * g) / 2, rx);
    for (let L = high; L <= d; L += 2) this.ledger(x, y0 + 4 * g - ((L - ref) * g) / 2, rx);

    if (highlight) {
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = 16;
    }
    // head
    const hollow = q >= 2;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, -0.35, 0, Math.PI * 2);
    if (hollow) {
      ctx.fillStyle = '#fffdf6';
      ctx.fill();
      ctx.lineWidth = g * 0.32;
      ctx.strokeStyle = color;
      ctx.stroke();
    } else {
      ctx.fillStyle = color;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(0,0,0,0.25)';
      ctx.stroke();
    }
    if (highlight) ctx.restore();

    // sharp
    if (isBlack(ev.midi)) {
      ctx.fillStyle = INK;
      ctx.font = `700 ${Math.round(g * 1.9)}px "Apple Symbols", "Segoe UI Symbol", serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('♯', x - rx - g * 0.75, y);
    }

    // stem + flags
    if (q < 4 && !noStem) {
      const up = d < (bass ? 22 : 34);
      this.drawStem(up ? x + rx - 0.8 : x - rx + 0.8, y, up ? y - g * 3.4 : y + g * 3.4, up, q, g);
    }

    // dot for dotted values
    if ([3, 1.5, 0.75].some((v) => Math.abs(v - q) < 1e-6)) {
      const onLine = (d - ref) % 2 === 0;
      ctx.fillStyle = INK;
      ctx.beginPath();
      ctx.arc(x + rx + g * 0.55, onLine ? y - g / 2 : y, g * 0.17, 0, Math.PI * 2);
      ctx.fill();
    }
    return { x, y, rx, d, below: d >= (bass ? 22 : 34) };
  }

  // One stem (with flags) from y1 to y2.
  drawStem(sx, y1, y2, up, q, g) {
    const { ctx } = this;
    ctx.strokeStyle = INK;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(sx, y1);
    ctx.lineTo(sx, y2);
    ctx.stroke();
    const flags = q <= 0.25 + 1e-6 ? 2 : q <= 0.75 + 1e-6 ? 1 : 0;
    ctx.fillStyle = INK;
    for (let i = 0; i < flags; i++) {
      const fy = up ? y2 + i * g * 0.9 : y2 - i * g * 0.9;
      const dir = up ? 1 : -1;
      ctx.beginPath();
      ctx.moveTo(sx, fy);
      ctx.bezierCurveTo(sx + g * 0.2, fy + dir * g * 1.0, sx + g * 1.5, fy + dir * g * 1.2, sx + g * 0.9, fy + dir * g * 2.4);
      ctx.bezierCurveTo(sx + g * 1.2, fy + dir * g * 1.5, sx + g * 0.4, fy + dir * g * 1.3, sx, fy + dir * g * 1.0);
      ctx.fill();
    }
  }

  // Shared stem for a chord: runs through all heads and on past the outermost one.
  drawChordStem(x, heads, q, g, bass) {
    if (q >= 4) return;
    const avg = heads.reduce((t, h) => t + h.d, 0) / heads.length;
    const up = avg < (bass ? 22 : 34);
    const ys = heads.map((h) => h.y);
    const top = Math.min(...ys);
    const low = Math.max(...ys);
    const rx = heads[0].rx;
    if (up) this.drawStem(x + rx - 0.8, low, top - g * 3.4, true, q, g);
    else this.drawStem(x - rx + 0.8, top, low + g * 3.4, false, q, g);
  }

  ledger(x, y, rx) {
    const { ctx } = this;
    ctx.beginPath();
    ctx.moveTo(x - rx * 1.6, y);
    ctx.lineTo(x + rx * 1.6, y);
    ctx.stroke();
  }

  drawTie(a, b, g) {
    const { ctx } = this;
    const dir = a.below ? -1 : 1; // curve away from the stems
    const y = a.y + dir * g * 0.8;
    ctx.strokeStyle = INK;
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(a.x + a.rx * 0.6, y);
    ctx.quadraticCurveTo((a.x + b.x) / 2, y + dir * g * 1.1, b.x - b.rx * 0.6, b.y + dir * g * 0.8);
    ctx.stroke();
  }

  drawRest(x, yT, g, q) {
    const { ctx } = this;
    ctx.fillStyle = INK;
    ctx.strokeStyle = INK;
    if (q >= 4 - 1e-6) { ctx.fillRect(x - g * 0.6, yT + g, g * 1.2, g * 0.5); return; }
    if (q >= 2 - 1e-6) { ctx.fillRect(x - g * 0.6, yT + 1.5 * g, g * 1.2, g * 0.5); return; }
    if (q >= 1 - 1e-6) { // quarter rest: zig-zag
      ctx.lineWidth = g * 0.32;
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(x - g * 0.3, yT + g * 0.8);
      ctx.lineTo(x + g * 0.35, yT + g * 1.6);
      ctx.lineTo(x - g * 0.3, yT + g * 2.3);
      ctx.lineTo(x + g * 0.35, yT + g * 3.0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x - g * 0.05, yT + g * 3.35, g * 0.32, -0.5, Math.PI);
      ctx.stroke();
      return;
    }
    // eighth (one dot) / sixteenth (two dots) rest
    const n = q <= 0.25 + 1e-6 ? 2 : 1;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(x + g * 0.5, yT + 1.5 * g);
    ctx.lineTo(x - g * 0.1, yT + 3.2 * g);
    ctx.stroke();
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.arc(x - g * 0.15 + i * g * 0.25, yT + 1.6 * g + i * g, g * 0.28, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
