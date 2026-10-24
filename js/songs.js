// Song library. Melody = right hand ("C4:2" = C4 for two beats, default one beat).
// chords = one token per bar (after the pickup); "F.C" splits a bar in two. Every song can be
// played with one hand (melody only) or two hands (left hand generated from the chords, see music.js).
// level = how hard the melody is (length, rhythm, black keys), independent of hands.
// country = where the song comes from ('se', 'hu'); title = original title, titleEn = English title.

import { SONGS_HU } from './songs-hu.js';
import { SONGS_SE_EXTRA } from './songs-se-extra.js';

export const LEVELS = ['easy', 'medium', 'hard'];
export const COUNTRIES = ['se', 'hu'];
export const THEMES = ['children', 'animals', 'movement', 'everyday', 'lullaby', 'celebrations', 'christmas', 'lucia', 'midsummer'];

const SONGS_SE = [
  {
    id: 'blinka',
    country: 'se',
    themes: ['children', 'lullaby'],
    title: 'Blinka lilla stjärna',
    titleEn: 'Twinkle, Twinkle, Little Star',
    emoji: '⭐',
    level: 'easy',
    bpm: 96,
    beatsPerBar: 4,
    melody: `C4 C4 G4 G4 | A4 A4 G4:2 | F4 F4 E4 E4 | D4 D4 C4:2 |
             G4 G4 F4 F4 | E4 E4 D4:2 | G4 G4 F4 F4 | E4 E4 D4:2 |
             C4 C4 G4 G4 | A4 A4 G4:2 | F4 F4 E4 E4 | D4 D4 C4:2`,
    chords: 'C F.C F.C G.C C.G C.G C.G C.G C F.C F.C G.C',
  },
  {
    id: 'broder-jakob',
    country: 'se',
    themes: ['children'],
    title: 'Broder Jakob',
    titleEn: 'Brother John',
    emoji: '🔔',
    level: 'easy',
    bpm: 104,
    beatsPerBar: 4,
    melody: `C4 D4 E4 C4 | C4 D4 E4 C4 | E4 F4 G4:2 | E4 F4 G4:2 |
             G4:0.5 A4:0.5 G4:0.5 F4:0.5 E4 C4 | G4:0.5 A4:0.5 G4:0.5 F4:0.5 E4 C4 |
             C4 G3 C4:2 | C4 G3 C4:2`,
    chords: 'C C C C C C C C',
  },
  {
    id: 'ro-ro',
    country: 'se',
    themes: ['children'],
    title: 'Ro, ro, ro din båt',
    titleEn: 'Row, Row, Row Your Boat',
    emoji: '🚣',
    level: 'easy',
    bpm: 200, // counted in eighth notes (6/8)
    beatsPerBar: 6,
    melody: `C4:3 C4:3 | C4:2 D4:1 E4:3 | E4:2 D4:1 E4:2 F4:1 | G4:6 |
             C5 C5 C5 G4 G4 G4 | E4 E4 E4 C4 C4 C4 | G4:2 F4:1 E4:2 D4:1 | C4:6`,
    chords: 'C C C C C C G C',
  },
  {
    id: 'imse-vimse',
    country: 'se',
    themes: ['children', 'animals', 'movement'],
    title: 'Imse vimse spindel',
    titleEn: 'Itsy Bitsy Spider',
    emoji: '🕷️',
    level: 'medium',
    bpm: 190, // eighth notes (6/8)
    beatsPerBar: 6,
    pickup: 1,
    melody: `G3:1 |
             C4:2 C4:1 C4:2 D4:1 | E4:2 E4:1 E4:2 D4:1 | C4:2 D4:1 E4:3 | C4:5 E4:1 |
             E4:2 F4:1 G4:3 | G4:2 F4:1 E4:2 F4:1 | G4:2 E4:3 C4:1 |
             C4:2 D4:1 E4:3 | E4:2 D4:1 C4:2 D4:1 | E4:2 C4:2 G3:1 G3:1 |
             C4:2 C4:1 C4:2 D4:1 | E4:2 E4:1 E4:2 D4:1 | C4:2 D4:1 E4:3 | C4:6`,
    chords: 'C C G C C F C C G C C C G C',
  },
  {
    id: 'hjulen',
    country: 'se',
    themes: ['children', 'everyday', 'movement'],
    title: 'Hjulen på bussen',
    titleEn: 'The Wheels on the Bus',
    emoji: '🚌',
    level: 'medium',
    bpm: 112,
    beatsPerBar: 4,
    pickup: 1,
    melody: `G3 |
             C4 C4:0.5 C4:0.5 C4 E4 | G4 E4 C4:2 | D4 B3 G3:2 | G4 E4 C4 G3 |
             C4 C4:0.5 C4:0.5 C4 E4 | G4 E4 C4:2 | D4:2 G3 G3 | C4:4`,
    chords: 'C C G C C C G C',
  },
  {
    id: 'per-olsson',
    country: 'se',
    themes: ['children', 'animals'],
    title: 'Per Olsson hade en bondgård',
    titleEn: 'Old MacDonald Had a Farm',
    emoji: '🐄',
    level: 'medium',
    bpm: 116,
    beatsPerBar: 4,
    melody: `C5 C5 C5 G4 | A4 A4 G4:2 | E5 E5 D5 D5 | C5:3 G4 |
             C5 C5 C5 G4 | A4 A4 G4:2 | E5 E5 D5 D5 | C5:3 G4:0.5 G4:0.5 |
             C5 C5 C5 G4:0.5 G4:0.5 | C5 C5 C5:2 |
             C5:0.5 C5:0.5 C5 C5:0.5 C5:0.5 C5 | C5:0.5 C5:0.5 C5:0.5 C5:0.5 C5:2 |
             C5 C5 C5 G4 | A4 A4 G4:2 | E5 E5 D5 D5 | C5:4`,
    chords: 'C F.C C.G C C F.C C.G C C C C C C F.C C.G C',
  },
  // ---------- Classics & midsommar ----------
  // Sources: Alice Tegnér, "Sjung med oss, Mamma!" vol. 1 (1892) and vol. 3 (1895) via
  // Svenskt visarkiv scans; Wikimedia Commons engravings (Björnen sover, Gubben Noach);
  // Små grodorna cross-checked against the Commons MIDI.
  {
    id: 'bjornen-sover',
    country: 'se',
    themes: ['children', 'animals', 'movement'],
    title: 'Björnen sover',
    titleEn: 'The Bear Is Sleeping',
    emoji: '🐻',
    level: 'easy',
    bpm: 92,
    beatsPerBar: 2,
    melody: `C4:0.5 C4:0.5 C4:0.5 E4:0.5 | D4:0.5 D4:0.5 D4:0.5 F4:0.5 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4 R:1 |
             E4:0.5 E4:0.5 E4:0.5 E4:0.5 | G4 F4 | D4:0.5 D4:0.5 D4:0.5 D4:0.5 | F4 E4 |
             C4:0.5 C4:0.5 C4:0.5 E4:0.5 | D4:0.5 D4:0.5 D4:0.5 F4:0.5 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4:2`,
    chords: 'C G C.G C C G G G.C C G C.G C',
  },
  {
    id: 'ba-ba-vita-lamm',
    country: 'se',
    themes: ['children', 'animals'],
    title: 'Bä, bä, vita lamm',
    titleEn: 'Baa, Baa, White Lamb',
    emoji: '🐑',
    level: 'easy',
    bpm: 96,
    beatsPerBar: 2,
    melody: `C4 G4 | E4:0.5 E4:0.5 C4 | D4:0.5 D4:0.5 G3:0.5 G3:0.5 | C4 R:1 |
             C4 G4 | E4:0.5 E4:0.5 C4 | D4:0.5 D4:0.5 G3:0.5 G3:0.5 | C4 R:1 |
             A4:0.5 F4:0.5 F4:0.5 F4:0.5 | G4:1.5 E4:0.5 | F4:0.5 D4:0.5 D4:0.5 D4:0.5 | E4:1.5 C4:0.5 |
             A4 F4 | G4 E4:0.5 E4:0.5 | F4:0.5 B3:0.5 B3:0.5 B3:0.5 | C4 R:1`,
    chords: 'C C G C C C G C F C Dm.G C F C G C',
  },
  {
    id: 'gubben-noak',
    country: 'se',
    themes: ['children', 'animals'],
    title: 'Gubben Noak',
    titleEn: 'Old Man Noah',
    emoji: '🚢',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 2,
    melody: `C4:0.5 C4:0.5 C4:0.5 E4:0.5 | D4:0.5 D4:0.5 D4:0.5 F4:0.5 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4 R:1 |
             E4:0.5 E4:0.5 E4:0.5 E4:0.5 | G4 F4:0.5 F4:0.5 | D4:0.5 D4:0.5 D4:0.5 D4:0.5 | F4 E4 |
             C4:0.5 C4:0.5 C4:0.5 E4:0.5 | D4:0.5 D4:0.5 D4:0.5 F4:0.5 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4:2`,
    chords: 'C G C.G C C G G G.C C G C.G C',
  },
  {
    id: 'mors-lilla-olle',
    country: 'se',
    themes: ['children', 'animals'],
    title: 'Mors lilla Olle',
    titleEn: "Mother's Little Olle",
    emoji: '🫐',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 4,
    melody: `C4 G3:0.5 G3:0.5 C4 G3:0.5 G3:0.5 | B3 A3 G3 R:1 | G3 C4:0.5 D4:0.5 E4 E4:0.5 A4:0.5 | G4 D4:0.5 D4:0.5 D4 R:1 |
             E4 E4:0.5 E4:0.5 E4 D4:0.5 E4:0.5 | F4 F4:0.5 E4:0.5 D4 R:1 | B3 B3:0.5 C4:0.5 D4 D4:0.5 E4:0.5 | C4 C4:0.5 G3:0.5 C4 R:1`,
    chords: 'C G C G C.A Dm.G G C',
  },
  {
    id: 'sockerbagare',
    country: 'se',
    themes: ['children', 'everyday'],
    title: 'En sockerbagare',
    titleEn: 'The Sugar Baker',
    emoji: '🧁',
    level: 'medium',
    bpm: 108,
    beatsPerBar: 3,
    pickup: 1.5,
    // "Sockerbagaren", Sjung med oss, Mamma! vol. 3 (1895), no. 3. Original key A major.
    melody: `C5:0.5 D5:0.5 E5:0.5 |
             C5:0.75 C5:0.25 C5:0.5 D5:0.5 C5:0.5 A4:0.5 | B4 B4:0.5 C5:0.5 B4:0.5 G4:0.5 |
             A4 A4:0.5 B4:0.5 A4:0.5 F4:0.5 | G4 G4:0.5 A4:0.5 G4:0.5 E4:0.5 |
             G4 G4:0.5 A4:0.5 C#5:0.5 E5:0.5 | F5 R:0.5 E5:0.5 D5:0.5 A4:0.5 |
             D5 D5:0.5 E5:0.5 D5:0.5 G4:0.5 | C5 R:0.5`,
    chords: 'C G G C A Dm G C',
  },
  {
    id: 'sma-grodorna',
    country: 'se',
    themes: ['midsummer', 'animals', 'movement'],
    title: 'Små grodorna',
    titleEn: 'The Little Frogs',
    emoji: '🐸',
    level: 'medium',
    bpm: 112,
    beatsPerBar: 2,
    pickup: 0.5,
    melody: `G4:0.5 |
             E4:0.75 E4:0.25 E4:0.5 G4:0.5 | E4:0.75 E4:0.25 E4:0.5 G4:0.5 | A4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4 R:0.5 F4:0.5 |
             D4:0.75 D4:0.25 D4:0.5 F4:0.5 | D4:0.75 D4:0.25 D4:0.5 F4:0.5 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 R:0.5 G4:0.5 |
             E4 E4:0.5 G4:0.5 | E4 E4:0.5 G4:0.5 | A4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4 R:0.5 F4:0.5 |
             D4 D4:0.5 F4:0.5 | D4 D4:0.5 F4:0.5 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 R:0.5 G4:0.5 |
             E4:0.5 E4:0.5 E4:0.5 G4:0.5 | E4:0.5 E4:0.5 E4:0.5 G4:0.5 | A4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4 R:0.5 F4:0.5 |
             D4:0.5 D4:0.5 D4:0.5 F4:0.5 | D4:0.5 D4:0.5 D4:0.5 F4:0.5 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 R:0.5`,
    chords: 'C C C G G G G C C C C G G G G C C C C G G G G C',
  },
  {
    id: 'ekorrn',
    country: 'se',
    themes: ['children', 'animals'],
    title: 'Ekorrn satt i granen',
    titleEn: 'The Squirrel in the Spruce',
    emoji: '🐿️',
    level: 'hard',
    bpm: 96,
    beatsPerBar: 4,
    melody: `C4:0.75 D4:0.25 E4:0.5 F4:0.5 G4 C5 | B4:0.75 A4:0.25 F4:0.5 A4:0.5 G4 E4 |
             D4:0.75 D4:0.25 E4:0.5 F#4:0.5 G4 B4 | C5:0.75 A4:0.25 E4:0.5 F#4:0.5 A4 G4 |
             F4:0.75 D4:0.25 A3:0.5 B3:0.5 C4:0.5 E4:0.5 G4 | F4:0.75 D4:0.25 A3:0.5 B3:0.5 C4:0.5 E4:0.5 G4:0.5 G4:0.25 A4:0.25 |
             G4:0.75 E4:0.25 C4:0.5 E4:0.5 D4 C4:0.5 R:0.5`,
    chords: 'C F.C G D.G G G.C C',
  },
  // ---------- Jul & Lucia ----------
  // Sources: Wikimedia Commons scores/MIDI (1899 first print of Nu tändas tusen juleljus,
  // Santa Lucia), Danish Wikisource (Nu är det jul igen), Mama Lisa's World scores + MIDI.
  // All melodies are traditional or by composers who died more than 70 years ago.
  {
    id: 'nu-ar-det-jul-igen',
    country: 'se',
    themes: ['christmas'],
    title: 'Nu är det jul igen',
    titleEn: "Now It's Christmas Again",
    emoji: '🎄',
    level: 'easy',
    bpm: 120,
    beatsPerBar: 3,
    melody: `C4:0.5 C4:0.5 C4:0.5 G3:0.5 E3:0.5 G3:0.5 | C4:0.5 C4:0.5 C4:0.5 G3:0.5 E3:0.5 G3:0.5 |
             C4:0.5 B3:0.5 C4:0.5 D4:0.5 E4:0.5 F4:0.5 | G4 G4:2 |
             F4:0.5 F4:0.5 A4:0.5 F4:0.5 F4 | E4:0.5 E4:0.5 G4:0.5 E4:0.5 E4:0.5 E4:0.5 |
             D4:0.5 E4:0.5 F4:0.5 D4:0.5 C4:0.5 B3:0.5 | D4 C4 R:1`,
    chords: 'C C C C F C G C',
  },
  {
    id: 'morsgrisar',
    country: 'se',
    themes: ['christmas', 'animals'],
    title: 'Morsgrisar är vi allihopa',
    titleEn: "We're All Mummy's Piglets",
    emoji: '🐷',
    level: 'easy',
    bpm: 110,
    beatsPerBar: 3,
    melody: `G4 G4:0.75 A4:0.25 G4:0.75 F4:0.25 | E4:0.75 F4:0.25 G4 E4 | D4:0.75 E4:0.25 F4 D4 | C4:0.75 D4:0.25 E4 C4 |
             G4 G4:0.75 A4:0.25 G4:0.75 F4:0.25 | E4:0.75 F4:0.25 G4 E4 | D4:0.75 E4:0.25 F4 D4 | G4 C4:2 |
             C5 G4:1.5 F4:0.5 | E4 C4:2 | C5 G4:1.5 F4:0.5 | E4 C4:2`,
    chords: 'C C G C C C G G.C C.G C C.G C',
  },
  {
    id: 'raven-raskar',
    country: 'se',
    themes: ['christmas', 'animals', 'movement'],
    title: 'Räven raskar över isen',
    titleEn: 'The Fox Runs Across the Ice',
    emoji: '🦊',
    level: 'medium',
    bpm: 120,
    beatsPerBar: 3,
    melody: `G4:0.5 F4:0.5 E4:0.5 D4:0.5 E4:0.5 F4:0.5 | A4 G4 R:1 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 E4:0.5 F4:0.5 | A4 G4 R:1 |
             G4:0.5 G4:0.5 C5:1.5 G4:0.5 | G4:0.5 G4:0.5 C5:1.5 G4:0.5 | G4:0.5 F4:0.5 E4 F4:0.5 D4:0.5 | D4 C4 R:0.5 G4:0.5 |
             G4:0.5 F4:0.5 E4 E4:0.5 E4:0.5 | D4:0.5 E4:0.5 F4:1.5 R:0.5 | F4:0.5 E4:0.5 D4 D4:0.5 D4:0.5 | C4:0.5 D4:0.5 E4 R:1 |
             G4:0.5 G4:0.5 C5:1.5 G4:0.5 | G4:0.5 G4:0.5 C5:1.5 G4:0.5 | G4:0.5 F4:0.5 E4 F4:0.5 D4:0.5 | D4 C4 R:1`,
    chords: 'C F.C C F.C C C C.G G.C C G G C C C C.G G.C',
  },
  {
    id: 'nu-tandas',
    country: 'se',
    themes: ['christmas'],
    title: 'Nu tändas tusen juleljus',
    titleEn: 'A Thousand Christmas Candles',
    emoji: '🌟',
    level: 'medium',
    bpm: 84,
    beatsPerBar: 4,
    pickup: 1,
    melody: `G3 |
             E4 E4 D4 D4 | C4 A3 G3:1.5 G3:0.5 | A3 A3 D4 B3 | G3:3 G3 |
             G4 G4 F4 F4 | E4 C4 A3:1.5 A3:0.5 | B3 B3 D4 D4 | C4:3`,
    chords: 'C.G F.G Dm.G G C.F C.D G C',
  },
  {
    id: 'lusse-lelle',
    country: 'se',
    themes: ['lucia'],
    title: 'Lusse lelle',
    titleEn: 'Lusse Lelle (Lucia Song)',
    emoji: '👑',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 3,
    pickup: 1,
    melody: `E4:0.5 D4:0.5 |
             C4 C4 E4:0.5 D4:0.5 | C4 C4 C4:0.5 E4:0.5 | G4:1.5 E4:0.5 A4:0.5 G4:0.5 | E4:2 E4:0.5 D4:0.5 |
             C4 C4 E4:0.5 D4:0.5 | C4 C4 C4:0.5 E4:0.5 | G4:1.5 E4:0.5 A4:0.5 G4:0.5 | E4:2 C4:0.5 E4:0.5 |
             G4:1.5 E4:0.5 A4:0.5 G4:0.5 | E4 C4 G3:0.5 C4:0.5 | E4:1.5 D4:0.5 F4:0.5 E4:0.5 | C4:2 C4:0.5 E4:0.5 |
             G4:1.5 E4:0.5 A4:0.5 G4:0.5 | E4 C4 G3:0.5 C4:0.5 | E4:1.5 D4:0.5 F4:0.5 E4:0.5 | C4:2`,
    chords: 'C C C.F C C C C.F C C.F C G C C.F C G C',
  },
  {
    id: 'sankta-lucia',
    country: 'se',
    themes: ['lucia'],
    title: 'Sankta Lucia',
    titleEn: 'Santa Lucia',
    emoji: '🕯️',
    level: 'hard',
    bpm: 96,
    beatsPerBar: 3,
    melody: `G4 G4:1.5 C5:0.5 | C5:0.5 B4:0.5 B4:2 | F4 F4:1.5 A4:0.5 | A4 G4:2 |
             E4 A4:1.5 G4:0.5 | G4:0.5 F#4:0.5 F4:2 | F4 E4 D4 | A4 G4:2 |
             E5 D5 C5 | B4:0.5 A4:0.5 D5:2 | D5 C5 A4 | F#4:0.5 G4:0.5 C5:2 |
             E5:0.5 C5:0.5 C5:0.5 G4:0.5 G4:0.5 E4:0.5 | F4:0.5 D5:0.5 D5:2 | D5 E5:1.5 D5:0.5 | D5 C5:2`,
    chords: 'C G G C A Dm G C C F G C C.A Dm G C',
  },
  {
    id: 'bjallerklang',
    country: 'se',
    themes: ['christmas'],
    title: 'Bjällerklang',
    titleEn: 'Jingle Bells',
    emoji: '🛷',
    level: 'medium',
    bpm: 120,
    beatsPerBar: 4,
    melody: `E4 E4 E4:2 | E4 E4 E4:2 | E4 G4 C4:1.5 D4:0.5 | E4:4 |
             F4 F4 F4:1.5 F4:0.5 | F4 E4 E4 E4:0.5 E4:0.5 | E4 D4 D4 E4 | D4:2 G4:2 |
             E4 E4 E4:2 | E4 E4 E4:2 | E4 G4 C4:1.5 D4:0.5 | E4:4 |
             F4 F4 F4:1.5 F4:0.5 | F4 E4 E4 E4:0.5 E4:0.5 | G4 G4 F4 D4 | C4:4`,
    chords: 'C C C C F C G G C C C C F C G C',
  },
];

export const SONGS = [...SONGS_SE, ...SONGS_SE_EXTRA, ...SONGS_HU];
