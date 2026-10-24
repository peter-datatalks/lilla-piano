// Hand-drawn SVG instrument icons (64×64), flat and colourful so small children recognise them.

const C = {
  wood: '#b5651d', woodDark: '#7a3e12', woodLight: '#d98c3f', woodRed: '#a0402a',
  gold: '#f2b632', goldDark: '#c98a12', goldLight: '#ffe08a',
  silver: '#cfd8dc', silverDark: '#78909c', silverLight: '#f5f7f8',
  ebony: '#2b2f36', ebonyLight: '#4a515c',
  copper: '#c4693a', copperDark: '#8f4524', skin: '#f5ecd7',
};

const svg = (body) => `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${body}</svg>`;

/* ---------- string family ---------- */

// Figure-eight body in a 20×32 box, origin at top-left.
const BODY = 'M10 0C4 0 1 3 1 8c0 3 3 4 3 6s-4 4-4 9c0 6 4 9 10 9s10-3 10-9c0-5-4-7-4-9s3-3 3-9c0-5-3-8-9-8z';

function bowed({ color, neck = 15, endpin = 0 }) {
  return `
    ${endpin ? `<rect x="9.4" y="31" width="1.2" height="${endpin}" fill="${C.silverDark}"/>` : ''}
    <path d="${BODY}" fill="${color}"/>
    <path d="${BODY}" fill="none" stroke="${C.woodDark}" stroke-width="0.8"/>
    <rect x="8.6" y="${-neck}" width="2.8" height="${neck + 20}" rx="1.2" fill="${C.ebony}"/>
    <circle cx="10" cy="${-neck - 1.5}" r="2.6" fill="${C.woodDark}"/>
    <path d="M6 12c-1 2 1 4 0 6M14 12c1 2-1 4 0 6" stroke="${C.ebony}" stroke-width="0.9" fill="none"/>
    <rect x="6.5" y="17.6" width="7" height="1.2" rx="0.5" fill="${C.woodLight}"/>
    <path d="M8.2 23h3.6l-0.6 7h-2.4z" fill="${C.ebony}"/>
    <path d="M9.3 ${-neck}V23M10.7 ${-neck}V23" stroke="${C.silverLight}" stroke-width="0.3"/>`;
}

const bow = (x1, y1, x2, y2) => `
  <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.woodDark}" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="${x1 + 1.5}" y1="${y1 + 1.5}" x2="${x2 + 1.2}" y2="${y2 + 1.2}" stroke="${C.silverLight}" stroke-width="0.8"/>
  <rect x="${x2 - 2}" y="${y2 - 2}" width="5" height="3.4" rx="1" fill="${C.ebony}" transform="rotate(${Math.atan2(y2 - y1, x2 - x1) * 57.3} ${x2} ${y2})"/>`;

const violin = (color = C.wood) => svg(`
  <g transform="translate(22 22) rotate(-22) scale(1.05)">${bowed({ color, neck: 14 })}</g>
  ${bow(8, 58, 58, 22)}`);

/* ---------- woodwinds ---------- */

const keysAlong = (x1, y1, x2, y2, n, r = 1.3, fill = C.silverLight) => {
  let out = '';
  for (let i = 1; i <= n; i++) {
    const t = i / (n + 1);
    out += `<circle cx="${x1 + (x2 - x1) * t}" cy="${y1 + (y2 - y1) * t}" r="${r}" fill="${fill}" stroke="${C.silverDark}" stroke-width="0.5"/>`;
  }
  return out;
};

/* ---------- saxophones ---------- */

function curvedSax({ scale = 1, crook = 'plain' }) {
  const neck = {
    plain: `<path d="M15 6 Q14 12 22 14" stroke="${C.goldDark}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
    bump: `<path d="M13 7 Q12 3 17 5 Q20 7 18 10 Q17 13 22 14" stroke="${C.goldDark}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
    loop: `<path d="M22 14 Q14 14 14 9 Q14 4 19 4 Q23 4 22 8 Q21 11 15 9" stroke="${C.goldDark}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
  }[crook];
  const mouth = { plain: [13.6, 3.6], bump: [11.6, 4], loop: [13, 7] }[crook];
  return `<g transform="translate(32 32) scale(${scale}) translate(-32 -32)">
    ${neck}
    <rect x="${mouth[0]}" y="${mouth[1]}" width="3" height="4.5" rx="1" fill="${C.ebony}" transform="rotate(-20 ${mouth[0]} ${mouth[1]})"/>
    <path d="M20 13 L26 13 L32 46 Q34 54 41 53 Q46 52 46 44 L46 36 L52 36 L52 45 Q52 60 40 60 Q27 60 25 47 Z" fill="${C.gold}"/>
    <path d="M44 34 L54 34 L58 22 L40 22 Z" fill="${C.gold}"/>
    <ellipse cx="49" cy="22" rx="9" ry="2.6" fill="${C.goldDark}"/>
    <ellipse cx="49" cy="22" rx="7" ry="1.6" fill="#5c3d07"/>
    <path d="M23 17 L28 44" stroke="${C.goldLight}" stroke-width="1.3" fill="none"/>
    ${keysAlong(24, 15, 29, 46, 5, 1.6, C.goldLight)}
    <circle cx="48" cy="40" r="1.6" fill="${C.goldLight}" stroke="${C.goldDark}" stroke-width="0.5"/>
  </g>`;
}

/* ---------- percussion ---------- */

const mallet = (x1, y1, x2, y2, head = '#e53935', r = 3) => `
  <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C.woodLight}" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="${x2}" cy="${y2}" r="${r}" fill="${head}"/>`;

function barInstrument(colors) {
  const n = colors.length;
  let bars = '';
  for (let i = 0; i < n; i++) {
    const x = 7 + i * (50 / n);
    const h = 36 - i * 2.4;
    const y = 40 - h / 2;
    bars += `<rect x="${x}" y="${y}" width="${50 / n - 1.6}" height="${h}" rx="1.6" fill="${colors[i]}"/>
      <circle cx="${x + (50 / n - 1.6) / 2}" cy="${y + 4}" r="0.9" fill="rgba(0,0,0,.35)"/>
      <circle cx="${x + (50 / n - 1.6) / 2}" cy="${y + h - 4}" r="0.9" fill="rgba(0,0,0,.35)"/>`;
  }
  return `
    <path d="M5 26 L59 30 M5 54 L59 50" stroke="${C.woodDark}" stroke-width="3" stroke-linecap="round"/>
    ${bars}
    ${mallet(40, 62, 50, 10)}${mallet(54, 62, 60, 14)}`;
}

/* ---------- the icons ---------- */

export const ICONS = {
  piano: svg(`
    <path d="M6 24 L34 6 L37 9 L12 26 Z" fill="${C.ebonyLight}"/>
    <path d="M6 26 H44 Q58 26 58 36 V40 H6 Z" fill="${C.ebony}"/>
    <rect x="4" y="38" width="56" height="5" rx="1.5" fill="#1d2025"/>
    <rect x="4" y="30" width="16" height="7" rx="1" fill="#fff"/>
    <path d="M8 30v4.5M12 30v4.5M16 30v4.5" stroke="${C.ebony}" stroke-width="1.6"/>
    <rect x="9" y="43" width="3.4" height="15" rx="1" fill="${C.ebony}"/>
    <rect x="51" y="43" width="3.4" height="15" rx="1" fill="${C.ebony}"/>
    <rect x="28" y="43" width="2" height="10" fill="${C.goldDark}"/>
    <rect x="25" y="52" width="8" height="2.2" rx="1" fill="${C.goldDark}"/>`),

  jazz: svg(`
    <path d="M14 38 L50 60 M50 38 L14 60" stroke="#546e7a" stroke-width="3.4" stroke-linecap="round"/>
    <rect x="3" y="20" width="58" height="19" rx="3.5" fill="#c62828"/>
    <rect x="3" y="20" width="58" height="5" rx="2.5" fill="#212121"/>
    <rect x="6" y="27" width="52" height="9" rx="1" fill="#fff"/>
    ${[9, 13, 21, 25, 29, 37, 41, 49, 53].map((x) => `<rect x="${x}" y="27" width="2.6" height="5.5" fill="#212121"/>`).join('')}
    ${[1, 2, 3].map((i) => `<circle cx="${8 + i * 6}" cy="22.5" r="1.2" fill="#e0e0e0"/>`).join('')}`),

  organ: svg(`
    ${[[6, 30], [13, 22], [20, 15], [27, 8], [34, 15], [41, 22], [48, 30]].map(([x, top]) => `
      <rect x="${x}" y="${top}" width="6.4" height="${46 - top}" rx="3.2" fill="${C.silver}"/>
      <rect x="${x + 4.2}" y="${top}" width="1.4" height="${46 - top}" rx="0.7" fill="${C.silverLight}"/>
      <path d="M${x + 1.4} ${top + (46 - top) * 0.62} h3.6 l-1.8 3z" fill="${C.ebony}"/>`).join('')}
    <rect x="3" y="44" width="58" height="17" rx="2" fill="${C.woodDark}"/>
    <rect x="7" y="48" width="50" height="5" rx="1" fill="#fff"/>
    ${[11, 15, 23, 27, 31, 39, 43, 51].map((x) => `<rect x="${x}" y="48" width="2.2" height="3" fill="${C.ebony}"/>`).join('')}
    <rect x="3" y="56" width="58" height="2" fill="${C.wood}"/>`),

  celesta: svg(`
    <path d="M52 4 l1.6 4 4 1.6 -4 1.6 -1.6 4 -1.6 -4 -4 -1.6 4 -1.6z" fill="#fdd835"/>
    <path d="M10 8 l1.1 2.8 2.8 1.1 -2.8 1.1 -1.1 2.8 -1.1 -2.8 -2.8 -1.1 2.8 -1.1z" fill="#fdd835"/>
    <rect x="12" y="16" width="40" height="22" rx="3" fill="${C.woodRed}"/>
    <rect x="16" y="20" width="32" height="11" rx="2" fill="#7b2e1f"/>
    <path d="M22 25.5h20" stroke="${C.goldLight}" stroke-width="1.4"/>
    <rect x="8" y="37" width="48" height="8" rx="1.5" fill="#fff" stroke="${C.woodRed}" stroke-width="1.4"/>
    ${[13, 17, 25, 29, 33, 41, 45].map((x) => `<rect x="${x}" y="37.7" width="2.4" height="4.4" fill="${C.ebony}"/>`).join('')}
    <rect x="12" y="45" width="4" height="15" rx="1" fill="${C.woodRed}"/>
    <rect x="48" y="45" width="4" height="15" rx="1" fill="${C.woodRed}"/>`),

  violin: violin(),
  viola: svg(`
    <g transform="translate(20 21) rotate(-18) scale(1.15)">${bowed({ color: C.woodRed, neck: 13 })}</g>
    ${bow(6, 60, 58, 28)}`),
  cello: svg(`
    <g transform="translate(19.5 13) scale(1.25)">${bowed({ color: C.wood, neck: 9, endpin: 6 })}</g>
    ${bow(4, 34, 60, 50)}`),
  contrabass: svg(`
    <g transform="translate(20 15) scale(1.2 1.38)">${bowed({ color: C.woodDark, neck: 9, endpin: 5 })}</g>`),
  strings: svg(`
    <g transform="translate(36 22) scale(0.9 1.05)">${bowed({ color: C.woodDark, neck: 14, endpin: 4 })}</g>
    <g transform="translate(20 30) rotate(-12) scale(0.78)">${bowed({ color: C.woodRed, neck: 14 })}</g>
    <g transform="translate(6 36) rotate(-24) scale(0.66)">${bowed({ color: C.wood, neck: 14 })}</g>`),
  pizzicato: svg(`
    <g transform="translate(18 23) scale(1.12)">${bowed({ color: C.wood, neck: 13 })}</g>
    <path d="M44 20 l7 -4 M45 27 h9 M44 34 l7 4" stroke="#fb8c00" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M52 50 v-10 l6 -2 v10" stroke="${C.ebony}" stroke-width="1.6" fill="none"/>
    <circle cx="50.5" cy="50.5" r="2.4" fill="${C.ebony}"/><circle cx="56.5" cy="48.5" r="2.4" fill="${C.ebony}"/>`),
  harp: svg(`
    ${(() => {
      let s = '';
      for (let x = 17; x <= 47; x += 3.4) {
        const t = (x - 12) / 40;
        const top = (1 - t) ** 2 * 9 + 2 * (1 - t) * t * 0 + t * t * 13;
        const bottom = 58 - ((x - 18) * 44) / 32;
        if (bottom > top + 2) s += `<line x1="${x}" y1="${top + 1}" x2="${x}" y2="${bottom}" stroke="${(Math.round((x - 17) / 3.4) % 7 === 0) ? '#e53935' : '#eee'}" stroke-width="0.8"/>`;
      }
      return s;
    })()}
    <path d="M18 60 L52 14" stroke="${C.wood}" stroke-width="6" stroke-linecap="round"/>
    <path d="M12 9 Q32 -2 53 13" stroke="${C.gold}" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <rect x="9.5" y="9" width="5" height="49" rx="2.5" fill="${C.gold}"/>
    <circle cx="12" cy="7" r="3.6" fill="${C.goldDark}"/>
    <rect x="7" y="57" width="16" height="4" rx="1.5" fill="${C.goldDark}"/>`),

  piccolo: svg(`
    <g transform="rotate(-20 32 32)">
      <rect x="12" y="29" width="40" height="6" rx="3" fill="${C.silver}"/>
      <rect x="12" y="29" width="40" height="2" rx="1" fill="${C.silverLight}"/>
      <ellipse cx="18" cy="30.5" rx="2.4" ry="1.2" fill="${C.ebony}"/>
      ${keysAlong(22, 32, 52, 32, 6, 1.5)}
    </g>
    <path d="M10 14 l1.4 3.4 3.4 1.4 -3.4 1.4 -1.4 3.4 -1.4 -3.4 -3.4 -1.4 3.4 -1.4z" fill="#90caf9"/>`),
  flute: svg(`
    <g transform="rotate(-32 32 32)">
      <rect x="-1" y="29" width="66" height="6" rx="3" fill="${C.silver}"/>
      <rect x="-1" y="29" width="66" height="2" rx="1" fill="${C.silverLight}"/>
      <rect x="5" y="26.6" width="6" height="3" rx="1.5" fill="${C.silverDark}"/>
      <ellipse cx="8" cy="30.5" rx="2" ry="1" fill="${C.ebony}"/>
      ${keysAlong(16, 32, 60, 32, 9, 1.6)}
    </g>`),
  oboe: svg(`
    <path d="M31 2 h2 l0.6 8 h-3.2z" fill="#d7b98e"/>
    <rect x="30.4" y="9" width="3.2" height="2.4" fill="#8d6e63"/>
    <path d="M29.5 11 h5 l1.6 41 h-8.2 z" fill="${C.ebony}"/>
    <path d="M27.9 52 h8.2 l2.6 9 h-13.4 z" fill="${C.ebony}"/>
    <path d="M31 13 v38" stroke="${C.ebonyLight}" stroke-width="1"/>
    ${keysAlong(32, 12, 32, 52, 8, 1.4)}
    <path d="M34.5 18 h3 M35 30 h3 M35.5 42 h3" stroke="${C.silver}" stroke-width="1.4" stroke-linecap="round"/>`),
  english_horn: svg(`
    <path d="M30 13 Q30 5 24 3" stroke="${C.silverDark}" stroke-width="1.6" fill="none"/>
    <path d="M22 0.5 l3.6 2 -1.6 3 -3.4 -2z" fill="#d7b98e"/>
    <path d="M28.6 12 h5 l1.4 37 h-7.8z" fill="${C.woodDark}"/>
    <path d="M31.1 49 m-7 4 a7 6.4 0 1 0 14 0 a7 6.4 0 1 0 -14 0" fill="${C.woodDark}"/>
    <ellipse cx="31.1" cy="59" rx="3.4" ry="1.2" fill="#3e1f08"/>
    <path d="M30 14 v34" stroke="${C.woodLight}" stroke-width="1"/>
    ${keysAlong(31, 13, 31.5, 49, 7, 1.4)}`),
  clarinet: svg(`
    <path d="M30 2 h4 l-0.6 7 h-2.8z" fill="${C.ebony}"/>
    <rect x="29.4" y="8" width="5.2" height="2.6" fill="${C.silver}"/>
    <rect x="28.8" y="10.6" width="6.4" height="6" rx="1" fill="${C.ebony}"/>
    <rect x="29.3" y="16.6" width="5.4" height="34" fill="${C.ebony}"/>
    <path d="M29.3 50 h5.4 l6 12 h-17.4z" fill="${C.ebony}"/>
    <rect x="28.6" y="16" width="6.8" height="1.4" fill="${C.silver}"/>
    <rect x="28.6" y="33" width="6.8" height="1.4" fill="${C.silver}"/>
    <rect x="28.6" y="49.6" width="6.8" height="1.4" fill="${C.silver}"/>
    ${keysAlong(32, 17, 32, 50, 7, 1.4)}
    <path d="M35 22 h3 M35 40 h3" stroke="${C.silver}" stroke-width="1.4" stroke-linecap="round"/>`),
  bassoon: svg(`
    <path d="M26 20 Q14 18 14 10 Q14 6 18 6" stroke="${C.silver}" stroke-width="2" fill="none"/>
    <path d="M17 3.5 l3.4 1.4 -1.2 3 -3.4 -1.4z" fill="#d7b98e"/>
    <rect x="26" y="16" width="7" height="44" rx="2" fill="${C.woodRed}"/>
    <rect x="33" y="4" width="9" height="56" rx="2.5" fill="${C.woodRed}"/>
    <rect x="32" y="2" width="11" height="4" rx="1.4" fill="${C.ebony}"/>
    <rect x="25" y="54" width="18" height="7" rx="3" fill="${C.silverDark}"/>
    <path d="M36 8 v44" stroke="#c0654d" stroke-width="1.2"/>
    ${keysAlong(29.5, 18, 29.5, 52, 5, 1.3)}
    ${keysAlong(40, 8, 40, 52, 4, 1.3)}`),

  trumpet: svg(`
    <path d="M6 30 H40" stroke="${C.gold}" stroke-width="3.4"/>
    <path d="M18 30 Q14 30 14 36 Q14 42 20 42 H40 Q44 42 44 36" stroke="${C.gold}" stroke-width="3" fill="none"/>
    <path d="M40 27.5 L52 22 Q56 20 60 16 V44 Q56 40 52 38 L40 32.5 Z" fill="${C.gold}"/>
    <ellipse cx="60" cy="30" rx="2.6" ry="14" fill="${C.goldDark}"/>
    <rect x="3" y="27.6" width="5" height="4.8" rx="1.4" fill="${C.goldDark}"/>
    ${[22, 28, 34].map((x) => `
      <rect x="${x}" y="22" width="4.4" height="17" rx="1" fill="${C.goldDark}"/>
      <rect x="${x - 0.6}" y="18" width="5.6" height="3" rx="1.4" fill="${C.goldLight}"/>
      <rect x="${x + 1.2}" y="14" width="2" height="4" fill="${C.goldDark}"/>`).join('')}
    <path d="M10 29 H40" stroke="${C.goldLight}" stroke-width="1"/>`),
  horn: svg(`
    <circle cx="27" cy="30" r="18" stroke="${C.gold}" stroke-width="5" fill="none"/>
    <circle cx="27" cy="30" r="10.5" stroke="${C.goldDark}" stroke-width="3" fill="none"/>
    <circle cx="27" cy="30" r="18" stroke="${C.goldLight}" stroke-width="1" fill="none" stroke-dasharray="20 93"/>
    <path d="M38 42 Q46 50 46 52 L62 40 Q54 40 44 34 Z" fill="${C.gold}"/>
    <ellipse cx="55" cy="47.5" rx="9" ry="3" transform="rotate(-37 55 47.5)" fill="${C.goldDark}"/>
    ${[[23, 24], [29, 24], [35, 27]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="${C.goldLight}" stroke="${C.goldDark}" stroke-width="0.8"/>`).join('')}
    <path d="M10 22 L4 18" stroke="${C.goldDark}" stroke-width="2.4" stroke-linecap="round"/>`),
  trombone: svg(`
    <path d="M24 22 H8 Q4 22 4 30 Q4 38 8 38 H58 Q61 38 61 41 Q61 44 58 44 H22" stroke="${C.gold}" stroke-width="2.6" fill="none"/>
    <path d="M24 20 L40 18 Q48 16 54 9 V35 Q48 28 40 26 L24 24 Z" fill="${C.gold}"/>
    <ellipse cx="54" cy="22" rx="2.4" ry="13" fill="${C.goldDark}"/>
    <path d="M30 38 V44 M44 38 V44" stroke="${C.goldDark}" stroke-width="2"/>
    <rect x="18" y="41.6" width="5" height="4.6" rx="1.4" fill="${C.goldDark}"/>
    <path d="M6 37 H58" stroke="${C.goldLight}" stroke-width="0.9"/>`),
  tuba: svg(`
    <path d="M18 14 L46 14 L42 26 L42 46 Q42 60 30 60 Q18 60 18 46 L18 30 Q18 24 22 22 Z" fill="${C.gold}"/>
    <ellipse cx="32" cy="12" rx="16" ry="5" fill="${C.goldDark}"/>
    <ellipse cx="32" cy="12" rx="12.5" ry="3" fill="#5c3d07"/>
    <path d="M22 30 V50 Q22 56 30 56" stroke="${C.goldLight}" stroke-width="1.6" fill="none"/>
    ${[44, 48.5, 53, 57.5].map((x) => `
      <rect x="${x - 2}" y="30" width="4" height="13" rx="1" fill="${C.goldDark}"/>
      <rect x="${x - 2.6}" y="27" width="5.2" height="3" rx="1.4" fill="${C.goldLight}"/>`).join('')}
    <path d="M42 36 H60 M42 44 H58" stroke="${C.gold}" stroke-width="2.4"/>
    <path d="M18 34 Q8 34 8 26 L8 20" stroke="${C.gold}" stroke-width="2.4" fill="none"/>
    <rect x="5.6" y="15" width="5" height="5" rx="1.4" fill="${C.goldDark}"/>`),

  timpani: svg(`
    <path d="M18 50 L12 62 M46 50 L52 62 M32 54 V62" stroke="${C.silverDark}" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M6 30 H58 C58 48 46 56 32 56 C18 56 6 48 6 30 Z" fill="${C.copper}"/>
    <path d="M12 34 C14 44 22 50 30 51" stroke="#e49a6c" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse cx="32" cy="30" rx="27" ry="7" fill="${C.silverDark}"/>
    <ellipse cx="32" cy="29" rx="25" ry="5.6" fill="${C.skin}"/>
    ${[10, 20, 32, 44, 54].map((x) => `<rect x="${x - 1}" y="33" width="2" height="6" fill="${C.silverDark}"/>`).join('')}
    ${mallet(22, 2, 34, 22, '#f5f5f5', 3.4)}${mallet(52, 2, 42, 22, '#f5f5f5', 3.4)}`),
  glock: svg(`
    <rect x="3" y="20" width="58" height="40" rx="4" fill="#8e2a2a"/>
    ${barInstrument(['#eceff1', '#cfd8dc', '#eceff1', '#cfd8dc', '#eceff1', '#cfd8dc', '#eceff1', '#cfd8dc'])}`),
  xylophone: svg(barInstrument(['#e53935', '#fb8c00', '#fdd835', '#43a047', '#00acc1', '#1e88e5', '#8e24aa'])),
  bells: svg(`
    <rect x="4" y="5" width="56" height="4" rx="2" fill="${C.ebonyLight}"/>
    <path d="M7 9 V60 M57 9 V60 M2 60 H12 M52 60 H62" stroke="${C.ebonyLight}" stroke-width="3" stroke-linecap="round"/>
    ${[44, 40, 36, 32, 28].map((len, i) => {
      const x = 15 + i * 8;
      return `<line x1="${x + 2.4}" y1="9" x2="${x + 2.4}" y2="12" stroke="${C.ebony}" stroke-width="1"/>
        <rect x="${x}" y="12" width="4.8" height="${len}" rx="1" fill="${C.gold}"/>
        <rect x="${x + 0.8}" y="12" width="1.2" height="${len}" fill="${C.goldLight}"/>
        <rect x="${x - 0.4}" y="12" width="5.6" height="3" rx="1" fill="${C.goldDark}"/>`;
    }).join('')}
    <path d="M60 26 L48 42" stroke="${C.woodLight}" stroke-width="2" stroke-linecap="round"/>
    <rect x="44" y="40" width="9" height="5" rx="2" transform="rotate(-53 48 42)" fill="${C.ebony}"/>`),

  soprano_sax: svg(`
    <path d="M11 3 l4 2 -2 3.6 -4 -2z" fill="${C.ebony}"/>
    <path d="M14 7 L18 6 L48 50 L42 54 Z" fill="${C.gold}"/>
    <path d="M40 52 Q44 60 52 61 L58 52 Q52 50 50 46 Z" fill="${C.gold}"/>
    <ellipse cx="55" cy="56.5" rx="6.6" ry="2.4" transform="rotate(-56 55 56.5)" fill="${C.goldDark}"/>
    <path d="M17 9 L45 50" stroke="${C.goldLight}" stroke-width="1.2"/>
    ${keysAlong(16, 8, 46, 52, 7, 1.6, C.goldLight)}`),
  alto_sax: svg(curvedSax({ scale: 0.92 })),
  tenor_sax: svg(curvedSax({ scale: 1, crook: 'bump' })),
  baritone_sax: svg(curvedSax({ scale: 1.04, crook: 'loop' })),
};

export const iconFor = (id) => ICONS[id] || ICONS.piano;
