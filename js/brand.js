// Lilla Piano logo: the Lilla Lingua moose, with its language bubble swapped for a piano
// bubble, plus a wordmark in the same letter colours (a music note dots the "i" in Piano).
import { t } from './i18n.js';

const PIANO_BUBBLE = `<svg class="brand-bubble" viewBox="0 0 40 40" aria-hidden="true">
  <path d="M8 27 L2 38 L15 32 Z" fill="#1d9bf0"/>
  <circle cx="22" cy="19" r="17" fill="#1d9bf0"/>
  <rect x="9.5" y="11" width="25" height="16" rx="3.5" fill="#fff"/>
  <path d="M15.75 11v16M22 11v16M28.25 11v16" stroke="#1d9bf0" stroke-width="1.2"/>
  <rect x="13.9" y="11" width="3.7" height="9" rx="1" fill="#12306b"/>
  <rect x="20.15" y="11" width="3.7" height="9" rx="1" fill="#12306b"/>
  <rect x="26.4" y="11" width="3.7" height="9" rx="1" fill="#12306b"/>
</svg>`;

const SPARKS = `<svg class="brand-sparks" viewBox="0 0 24 22" aria-hidden="true">
  <path d="M3 19 L1.5 11 M9 15.5 L12.5 5 M15 19.5 L22.5 13.5" stroke="#f6c21c" stroke-width="3.2" stroke-linecap="round"/>
</svg>`;

const NOTE_DOT = `<svg class="note-dot" viewBox="0 0 20 20" aria-hidden="true">
  <ellipse cx="7" cy="15" rx="5.2" ry="4.2" transform="rotate(-20 7 15)" fill="#f6c21c"/>
  <rect x="10.4" y="1.5" width="2.6" height="14" rx="1" fill="#f6c21c"/>
  <path d="M13 1.5 Q19 4 17 10 Q16.5 6 13 6 Z" fill="#f6c21c"/>
</svg>`;

const LILLA = [['L', '#f4614d'], ['i', '#f6c21c'], ['l', '#22b3a6'], ['l', '#1fa89a'], ['a', '#f2577d']]
  .map(([ch, c]) => `<span style="color:${c}">${ch}</span>`).join('');

// "ı" is a dotless i; the music note sits where the dot would be.
const PIANO = `<span class="pianot">P<span class="dotless">ı${NOTE_DOT}</span>ano</span>`;

export function brandMark() {
  return `<div class="brand-mark"><img src="assets/moose.png" alt="" draggable="false">${SPARKS}${PIANO_BUBBLE}</div>`;
}

export function brandHTML() {
  return `<div class="brand" role="img" aria-label="Lilla Piano – ${t('tagline')}">
    ${brandMark()}
    <div class="brand-text">
      <div class="brand-name">${LILLA} ${PIANO}</div>
      <div class="brand-tag">${t('tagline')}</div>
    </div>
  </div>`;
}

export function brandMini() {
  return `<img src="assets/moose.png" alt="Lilla Piano" draggable="false">${PIANO_BUBBLE}`;
}
