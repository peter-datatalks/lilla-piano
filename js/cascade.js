// Cascade view: coloured note bars fall onto the keys they belong to.
// `beat` is the song position (in beats) that sits exactly on the keyboard edge.
import { noteColor, noteName } from './music.js';

export class Cascade {
  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.kb = keyboard;
    this.built = null;
    this.beat = 0;
    this.current = -1; // guided step index (-1 = none)
  }

  resize() {
    const r = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.w = r.width;
    this.h = r.height;
    this.canvas.width = Math.round(r.width * dpr);
    this.canvas.height = Math.round(r.height * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.spans = null; // key positions are re-measured on the next draw
  }

  measure() {
    this.spans = new Map();
    for (let m = this.kb.lo; m <= this.kb.hi; m++) {
      const s = this.kb.keySpan(m, this.canvas);
      if (s) this.spans.set(m, s);
    }
  }

  draw() {
    const { ctx, w, h, built } = this;
    if (!w || !h) return;
    if (!this.spans) this.measure();
    ctx.clearRect(0, 0, w, h);

    // lane guides at every C
    ctx.fillStyle = 'rgba(90,64,40,0.08)';
    for (const [m, s] of this.spans) if (m % 12 === 0) ctx.fillRect(s.x, 0, 1, h);

    if (!built) return;
    const ppb = Math.max(36, Math.min(110, h / 4.5)); // pixels per beat
    const fontSize = Math.max(11, Math.min(18, ppb * 0.22));
    ctx.font = `900 ${fontSize}px Nunito, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';

    for (const ev of built.events) {
      const bottom = h - (ev.time - this.beat) * ppb;
      const top = bottom - ev.dur * ppb + 4;
      if (top > h || bottom < 0) continue;
      const s = this.spans.get(ev.midi);
      if (!s) continue;
      const pad = s.black ? s.w * 0.06 : s.w * 0.14;
      const x = s.x + pad;
      const bw = s.w - pad * 2;
      const isCurrent = ev.step === this.current;
      const isDone = this.current >= 0 && ev.step < this.current;

      ctx.save();
      ctx.globalAlpha = isDone ? 0.25 : 1;
      if (isCurrent) {
        ctx.shadowColor = noteColor(ev.midi);
        ctx.shadowBlur = 22;
      }
      ctx.fillStyle = noteColor(ev.midi);
      roundRect(ctx, x, top, bw, Math.max(bottom - top, 8), Math.min(12, bw / 2));
      ctx.fill();
      ctx.shadowBlur = 0;
      if (ev.hand === 'L') { // left hand: white dashed outline
        ctx.setLineDash([5, 4]);
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = 'rgba(255,255,255,0.9)';
        ctx.stroke();
        ctx.setLineDash([]);
      }
      if (bottom - top > fontSize + 6) {
        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        ctx.fillText(noteName(ev.midi), x + bw / 2, bottom - 4);
      }
      ctx.restore();
    }

    // glowing hit line on the keyboard edge
    const g = ctx.createLinearGradient(0, h - 14, 0, h);
    g.addColorStop(0, 'rgba(246,194,28,0)');
    g.addColorStop(1, 'rgba(246,194,28,0.45)');
    ctx.fillStyle = g;
    ctx.fillRect(0, h - 14, w, 14);
  }
}

function roundRect(ctx, x, y, w, h, r) {
  r = Math.min(r, h / 2, w / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
