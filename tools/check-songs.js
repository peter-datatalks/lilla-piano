// Checks every song: bar lengths, pickup, chord count vs bars, themes, and that it builds.
// Run in the browser console on the dev server:
//   (await import('/tools/check-songs.js')).checkSongs()
import { SONGS } from '../js/songs.js';
import { buildSong, noteName, parseDur } from '../js/music.js';

const beats = (bar) => bar.split(/\s+/).filter(Boolean)
  .reduce((t, tok) => t + (tok.includes(':') ? parseDur(tok.split(':')[1]) : 1), 0);
const label = (m) => `${noteName(m)}${Math.floor(m / 12) - 1}`;

export function checkSongs() {
  const lines = [];
  let problems = 0;
  const ids = new Set();
  for (const song of SONGS) {
    const issues = [];
    if (ids.has(song.id)) issues.push('duplicate id');
    ids.add(song.id);
    const bars = song.melody.split('|').map((b) => b.trim()).filter(Boolean);
    const pickup = song.pickup || 0;
    const full = pickup ? bars.slice(1) : bars;
    if (pickup && Math.abs(beats(bars[0]) - pickup) > 1e-4) issues.push(`pickup has ${beats(bars[0])} beats, expected ${pickup}`);
    full.forEach((b, i) => {
      const s = beats(b);
      const last = i === full.length - 1;
      if (Math.abs(s - song.beatsPerBar) > 1e-4 && !(last && Math.abs(s + pickup - song.beatsPerBar) < 1e-4)) {
        issues.push(`bar ${i + 1} has ${s} beats`);
      }
    });
    const chords = (song.chords || '').split(/\s+/).filter((x) => x && x !== '|').length;
    if (song.chords && chords !== full.length) issues.push(`${chords} chords for ${full.length} bars`);
    if (!song.themes?.length) issues.push('no themes');
    if (!song.country) issues.push('no country');
    if (!song.titleEn) issues.push('no titleEn');
    if (!['easy', 'medium', 'hard'].includes(song.level)) issues.push(`bad level ${song.level}`);
    let range = '';
    try { const b1 = buildSong(song, 'one'); const b2 = buildSong(song, 'two'); const b3 = buildSong(song, 'chords'); range = `1 hand ${label(b1.lo)}–${label(b1.hi)}, 2 hands ${label(b2.lo)}–${label(b2.hi)}, chords ${label(b3.lo)}–${label(b3.hi)}`; } catch (e) { issues.push(e.message); }
    problems += issues.length;
    lines.push(`${issues.length ? '✗' : '✓'} ${song.country}/${song.title} [${song.level}, ${full.length} bars, ${range}]${issues.map((x) => `\n    ${x}`).join('')}`);
  }
  lines.push(problems ? `${problems} problem(s)` : `All ${SONGS.length} songs OK`);
  return lines.join('\n');
}
