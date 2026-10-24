// National anthems (melody only). Both public domain.
// Same format as songs.js.

export const SONGS_ANTHEMS = [
  // Du gamla, du fria — traditional Västmanland folk melody (text Richard Dybeck, 1844).
  //   Source: https://sv.wikipedia.org/wiki/Du_gamla,_du_fria (LilyPond score with chords)
  //   Cross-check: https://en.wikipedia.org/wiki/Du_gamla,_du_fria (LilyPond score)
  //   Original G major, 4/4 with an eighth-note pickup — moved down a fifth to C.
  {
    id: 'du-gamla-du-fria',
    country: 'se',
    themes: ['anthems'],
    title: 'Du gamla, du fria',
    titleEn: 'Thou Ancient, Thou Free',
    emoji: '🇸🇪',
    level: 'medium',
    bpm: 76,
    beatsPerBar: 4,
    pickup: 0.5,
    melody: `E4:0.5 |
             E4 C4:0.5 C4:0.5 C4 D4:0.5 E4:0.5 | E4 D4:0.5 C4:0.5 B3 R:0.5 D4:0.5 |
             D4 B3:0.5 C4:0.5 D4:0.5 B3:0.5 E4:0.75 C4:0.25 | A3:2 G3 R:0.5 G3:0.5 |
             C4 C4:0.5 D4:0.5 B3 B3:0.5 C4:0.5 | A3:0.75 G3:0.25 A3:0.5 B3:0.5 G3 R:0.5 G3:0.5 |
             C4:0.75 B3:0.25 C4:0.5 D4:0.5 E4:0.5 C4:0.5 F4:0.5 E4:0.5 | D4:2 C4 R:0.5 G3:0.5 |
             C4:0.75 B3:0.25 C4:0.5 D4:0.5 E4:0.5 C4:0.5 F4:0.5 E4:0.5 | D4:2 C4 R:0.5`,
    chords: 'C D.G G.C D.G C.Em D.G C.F G.C C.F G.C',
  },
  // Himnusz (Isten, áldd meg a magyart) — music Ferenc Erkel 1844 (d. 1893), text Kölcsey (d. 1838).
  //   Source: https://en.wikipedia.org/wiki/Himnusz (LilyPond SATB score, from IMSLP)
  //   Cross-check: https://hu.wikipedia.org/wiki/Magyarország_himnusza (LilyPond melody)
  //   Original E-flat major, 4/4 — moved down a minor third to C. Chords simplified from the four parts.
  {
    id: 'himnusz',
    country: 'hu',
    themes: ['anthems'],
    title: 'Himnusz',
    titleEn: 'Hungarian National Anthem',
    emoji: '🇭🇺',
    level: 'hard',
    bpm: 60,
    beatsPerBar: 4,
    melody: `E4:1.5 F4:0.5 G4 C5 | G4 F4 E4:2 | A4 G4 F4 E4 | D4 E4 F4:2 |
             D4:1.5 E4:0.5 F4 D5 | F4 E4 D4:2 | G4 F4 E4 D4 | C4 D4 E4:2 |
             C5:1.5 B4:0.5 A4 G#4 | A4 B4 E4:2 | E5:1.5 D5:0.5 C5 B4 | C5 D5 G4:2 |
             F5:1.5 E5:0.5 D5 C5 | B4:1.5 A4:0.5 G4 F4 | E4 E4 D4 D4:0.5 E4:0.5 | C4:4`,
    chords: 'C G.C F.Dm A.Dm G.Dm C.G C.G C Am.E Am.E C.G C.G Dm G C.G C',
  },
];
