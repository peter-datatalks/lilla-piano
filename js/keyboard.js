// On-screen piano: rendering, multi-touch with glissando, computer keys, highlight states.
import { isBlack, noteName, pc } from './music.js';

// Computer keys -> semitone offset from the C at or below the lowest key.
const COMPUTER_KEYS = { a: 0, w: 1, s: 2, e: 3, d: 4, f: 5, t: 6, g: 7, y: 8, h: 9, u: 10, j: 11,
  k: 12, o: 13, l: 14, p: 15, 'ö': 16, ';': 16, 'ä': 17, "'": 17 };

export class Keyboard {
  constructor(el, { onDown, onUp }) {
    this.el = el;
    this.inner = document.createElement('div');
    this.inner.className = 'keys';
    el.append(this.inner);
    this.onDown = onDown;
    this.onUp = onUp;
    this.keys = new Map();
    this.downCount = new Map();
    this.pointers = new Map(); // pointerId -> midi
    this.lo = 60;
    this.hi = 72;

    el.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      const m = this.keyAt(e.clientX, e.clientY);
      this.pointers.set(e.pointerId, m);
      if (m != null) this.press(m, `p${e.pointerId}`);
    });
    el.addEventListener('pointermove', (e) => {
      if (!this.pointers.has(e.pointerId)) return;
      const m = this.keyAt(e.clientX, e.clientY);
      const old = this.pointers.get(e.pointerId);
      if (m === old) return;
      if (old != null) this.lift(old, `p${e.pointerId}`);
      this.pointers.set(e.pointerId, m);
      if (m != null) this.press(m, `p${e.pointerId}`);
    });
    const end = (e) => {
      if (!this.pointers.has(e.pointerId)) return;
      const m = this.pointers.get(e.pointerId);
      this.pointers.delete(e.pointerId);
      if (m != null) this.lift(m, `p${e.pointerId}`);
    };
    ['pointerup', 'pointercancel', 'pointerleave'].forEach((t) => el.addEventListener(t, end));
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    el.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });

    const typing = (e) => e.target.closest?.('input, textarea, [contenteditable]');
    window.addEventListener('keydown', (e) => {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey || typing(e)) return;
      const off = COMPUTER_KEYS[e.key.toLowerCase()];
      if (off == null) return;
      const m = this.lo - pc(this.lo) + off;
      if (m < this.lo || m > this.hi) return;
      this.press(m, `k${e.key.toLowerCase()}`);
    });
    window.addEventListener('keyup', (e) => {
      const off = COMPUTER_KEYS[e.key.toLowerCase()];
      if (off == null) return;
      const m = this.lo - pc(this.lo) + off;
      if (this.keys.has(m)) this.lift(m, `k${e.key.toLowerCase()}`);
    });
  }

  keyAt(x, y) {
    const k = document.elementFromPoint(x, y)?.closest('.key');
    return k && this.el.contains(k) ? Number(k.dataset.midi) : null;
  }

  press(m, src) {
    this.setDown(m, 1);
    this.onDown(m, src);
  }

  lift(m, src) {
    this.setDown(m, -1);
    this.onUp(m, src);
  }

  setDown(m, delta) {
    const n = Math.max(0, (this.downCount.get(m) || 0) + delta);
    this.downCount.set(m, n);
    this.keys.get(m)?.classList.toggle('down', n > 0);
  }

  setRange(lo, hi, force = false) {
    if (!force && lo === this.lo && hi === this.hi && this.keys.size) return;
    this.lo = lo;
    this.hi = hi;
    this.inner.innerHTML = '';
    this.keys.clear();
    this.downCount.clear();
    let whites = 0;
    for (let m = lo; m <= hi; m++) if (!isBlack(m)) whites++;
    const ww = 100 / whites;
    let wi = -1;
    for (let m = lo; m <= hi; m++) {
      const k = document.createElement('div');
      k.dataset.midi = m;
      k.style.setProperty('--kc', `var(--c${pc(m)})`);
      if (isBlack(m)) {
        const bw = ww * 0.6;
        k.className = 'key black';
        k.style.left = `${(wi + 1) * ww - bw / 2}%`;
        k.style.width = `${bw}%`;
      } else {
        wi++;
        k.className = 'key white';
        const pad = document.createElement('span');
        pad.className = 'pad';
        pad.textContent = noteName(m);
        k.append(pad);
      }
      const badge = document.createElement('span');
      badge.className = 'hand-badge';
      k.append(badge);
      this.inner.append(k);
      this.keys.set(m, k);
    }
    this.el.dataset.whites = whites;
  }

  // Horizontal position of a key relative to `refEl`, in CSS px.
  keySpan(m, refEl) {
    const k = this.keys.get(m);
    if (!k) return null;
    const r = k.getBoundingClientRect();
    const ref = refEl.getBoundingClientRect();
    return { x: r.left - ref.left, w: r.width, black: isBlack(m) };
  }

  setGuided(on) { this.el.classList.toggle('guided', on); }

  // Re-render (e.g. after the note-name language changed).
  relabel() { this.setRange(this.lo, this.hi, true); }

  // showHands: { L: 'L', R: 'R' } badge labels, or null to hide hand badges.
  setTargets(notes, showHands) {
    for (const k of this.keys.values()) {
      k.classList.remove('target', 'hit', 'hand-L', 'hand-R');
      k.querySelector('.hand-badge').textContent = '';
    }
    for (const n of notes) {
      const k = this.keys.get(n.midi);
      if (!k) continue;
      k.classList.add('target', `hand-${n.hand}`);
      if (showHands) k.querySelector('.hand-badge').textContent = showHands[n.hand];
    }
  }

  markHit(m) { this.keys.get(m)?.classList.add('hit'); }

  nudge(notes) {
    for (const n of notes) {
      const k = this.keys.get(n.midi);
      if (!k) continue;
      k.classList.remove('wiggle');
      void k.offsetWidth; // restart the animation
      k.classList.add('wiggle');
    }
  }

  setPlaying(m, on) { this.keys.get(m)?.classList.toggle('playing', on); }

  clearPlaying() { for (const k of this.keys.values()) k.classList.remove('playing'); }
}
