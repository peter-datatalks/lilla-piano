// Turkish children's songs. Same format as the other song files: { id, country: 'tr', themes,
// title (Turkish), titleEn, emoji, level, bpm, beatsPerBar, pickup?, melody, chords }.
// Only traditional / public-domain melodies, each with a source comment.
//
// The türküler and ninniler that were converted from the SymbTr corpus were removed (Oct 2026):
// SymbTr is CC BY-NC-SA (non-commercial), which does not fit a paid app. See LICENSES-AUDIT.md
// for clean sources to re-transcribe them from.

export const SONGS_TR = [
  // ---------------------------------------------------------------- children's songs

  // Tembel Çocuk — Original F major, 2/4 - moved down a fourth to C major. Mama Lisa's score and MIDI agree.
  //   Source: https://www.mamalisa.com/?t=es&p=940 (score image + MIDI frerejacque.mid, repeats written out)
  //   Public domain: Turkish words sung to the traditional French tune "Frère Jacques" (18th century).
  {
    id: 'tembel-cocuk',
    country: 'tr',
    themes: ['children', 'everyday'],
    title: 'Tembel Çocuk',
    titleEn: 'Lazy Child (Frère Jacques)',
    emoji: '⏰',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `C4 D4 | E4 C4 | C4 D4 | E4 C4 |
             E4 F4 | G4:2 | E4 F4 | G4:2 |
             G4:0.75 A4:0.25 G4:0.5 F4:0.5 | E4 C4 | G4:0.75 A4:0.25 G4:0.5 F4:0.5 | E4 C4 |
             C4 G3 | C4:2 | C4 G3 | C4:2`,
    chords: 'C C C C C C C C C C C C C.G C C.G C',
  },
  // Daha Dün Annemizin — Original C major, 4/4 - no transposition. The Wikipedia LilyPond score and Mama Lisa's MIDI give the same notes.
  //   Source: https://www.mamalisa.com/?t=es&p=1197 (Turkish text; says it is sung to "Twinkle, Twinkle, Little Star")
  //   Source: https://en.wikipedia.org/wiki/Twinkle,_Twinkle,_Little_Star (LilyPond score)
  //   Source: https://www.mamalisa.com/midi/twinkle.mid (MIDI)
  //   Public domain: Melody is the 18th-century French tune "Ah! vous dirai-je, maman". (The Turkish school
  //   lyrics are a later text; only the public-domain melody is used here.)
  {
    id: 'daha-dun-annemizin',
    country: 'tr',
    themes: ['children', 'everyday'],
    title: 'Daha Dün Annemizin',
    titleEn: 'Just Yesterday in Our Mother\'s Arms',
    emoji: '🎒',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 4,
    melody: `C4 C4 G4 G4 | A4 A4 G4:2 | F4 F4 E4 E4 | D4 D4 C4:2 |
             G4 G4 F4 F4 | E4 E4 D4:2 | G4 G4 F4 F4 | E4 E4 D4:2 |
             C4 C4 G4 G4 | A4 A4 G4:2 | F4 F4 E4 E4 | D4 D4 C4:2`,
    chords: 'C F.C F.C G.C C.F C.G C.F C.G C F.C F.C G.C',
  },
  // Yağ Satarım Bal Satarım — Original C (fa-sol-la chant), 2/4 - no transposition. Mama Lisa's score image and MIDI agree note for note.
  //   Source: https://www.mamalisa.com/?t=es&p=4169 (score image + MIDI yag_satarim.mid)
  //   Public domain: Traditional Turkish children's circle game song ("drop the handkerchief"); no known composer.
  {
    id: 'yag-satarim-bal-satarim',
    country: 'tr',
    themes: ['children', 'movement'],
    title: 'Yağ Satarım Bal Satarım',
    titleEn: 'I Sell Butter, I Sell Honey',
    emoji: '🍯',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `A4:0.5 A4:0.25 A4:0.25 G4 | A4:0.5 A4:0.25 A4:0.25 G4 | F4:0.5 G4:0.5 F4:0.5 G4:0.5 | A4:0.5 A4:0.25 A4:0.25 G4 |
             F4:0.5 G4:0.5 F4:0.5 G4:0.5 | A4:0.5 A4:0.5 G4 | F4:0.5 G4:0.5 F4:0.5 G4:0.5 | A4:0.5 A4:0.5 G4 |
             A4:0.5 A4:0.25 A4:0.25 G4 | A4:0.5 A4:0.25 A4:0.25 G4 | F4:0.5 F4:0.25 G4:0.25 F4:0.5 F4:0.25 G4:0.25 | A4:0.25 A4:0.25 A4:0.25 A4:0.25 G4`,
    chords: 'F.C F.C F.G F.C F.G F.C F.G F.C F.C F.C F.G F.C',
  },
];
