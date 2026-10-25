// Turkish children's songs, lullabies (ninniler) and folk songs (türküler). Same format as the
// other song files: { id, country: 'tr', themes, title (Turkish), titleEn, emoji, level, bpm,
// beatsPerBar, pickup?, melody, chords }. Only traditional / public-domain melodies, each with a
// source comment. Makam microtones are rounded to the nearest piano key (noted per song).
//
// Most türküler come from the SymbTr corpus (MTG, Universitat Pompeu Fabra; machine-readable
// transcriptions of TRT / Turkish art- and folk-music notation, github.com/MTG/SymbTr). They were
// converted mechanically from the SymbTr .txt files: pitch from the Koma53 column
// (53-comma octave -> nearest equal-tempered semitone), durations from the Offset column. Only the
// sung verse + refrain is kept (instrumental aranağme / saz interludes are dropped unless noted).
// SymbTr spells pitches in Turkish written notation; "original" below means that written pitch.
// The Turkish bakiye / küçük mücennep accidentals (#4, b4, b5 = 90-113 cents) are treated as
// ordinary sharps and flats; true microtones (1-3 komas, e.g. the segâh note Si b1) are listed.
// Aksak / curcuna metres are counted in eighths (beatsPerBar = eighths per bar, bpm >= 150).

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

  // ---------------------------------------------------------------- ninniler (lullabies)

  // Dere Dibi Saz Olur (Ninni) — Original hicaz on A (A B♭ C# D E), 2/4 (yürüksofyan) - moved down a fourth to hicaz on E
  //   (E F G# A B: one black key, G#). Verse "Dere dibi saz olur / Gül açılır yaz olur" + "Hû hû yavrum ninni" refrain.
  //   Source: SymbTr hicaz--ninni--yuruksofyan--dere_dibi-- (https://github.com/MTG/SymbTr, txt), bars 1-22
  //   Public domain: Anonymous traditional ninni (no composer in SymbTr). No microtones (hicaz accidentals = ordinary sharp/flat).
  //   Confidence: single source.
  {
    id: 'dere-dibi-ninni',
    country: 'tr',
    themes: ['lullaby'],
    title: 'Dere Dibi Saz Olur (Ninni)',
    titleEn: 'Reeds Grow by the Stream (Lullaby)',
    emoji: '🌷',
    level: 'easy',
    bpm: 72,
    beatsPerBar: 2,
    melody: `D4:0.5 E4:0.5 E4:0.5 E4:0.5 | E4:0.5 E4:0.5 E4:0.5 D4:0.5 | G#4:0.5 A4:0.5 B4:0.5 G#4:0.5 | A4 R |
             G#4:0.5 A4:0.5 G#4:0.5 F4:0.5 | E4:0.5 D4:0.5 E4:0.5 F4:0.5 | G#4:1.5 A4:0.5 | G#4:0.5 F4:0.5 F4 |
             G#4:0.5 A4:0.5 G#4:0.5 F4:0.5 | E4:0.5 D4:0.5 E4:0.5 F4:0.5 | G#4:1.5 F4:0.5 | F4 R |
             D4:0.5 D4:0.5 E4:0.5 E4:0.5 | F4:0.5 E4:0.5 A4 | G#4:0.5 F4:0.5 F4:0.5 E4:0.5 | E4 R |
             F4:1.5 E4:0.5 | F4:1.5 E4:0.5 | B4:0.5 A4:0.5 A4:0.5 G#4:0.5 | A4:0.5 G#4:0.5 F4:0.5 E4:0.5 |
             E4:2 | E4 R`,
    chords: 'E E E Am E Dm E E E Dm E Dm Dm Dm E E Dm Dm E E E E',
  },
  // Dağda Tavşanlar Uyur (Ninni) — Original hicaz on A, 4/4 - moved down a fourth to hicaz on E (black key: G#).
  //   "Dağda tavşanlar uyur, evde koşanlar uyur, benim yavrum uyumaz, uyusun da büyüsün ninni" (first strophe, bars 1-8).
  //   Source: SymbTr hicaz--ninni--sofyan--dagda_tavsanlar--tanburi_cemil_bey (https://github.com/MTG/SymbTr, txt)
  //   Public domain: Credited in SymbTr to Tanburi Cemil Bey (1871-1916), dead for over 70 years. No microtones.
  //   Confidence: single source; many sixteenth-note ornaments kept as written.
  {
    id: 'dagda-tavsanlar-uyur',
    country: 'tr',
    themes: ['lullaby', 'animals'],
    title: 'Dağda Tavşanlar Uyur (Ninni)',
    titleEn: 'The Hares Sleep on the Mountain (Lullaby)',
    emoji: '🐇',
    level: 'hard',
    bpm: 66,
    beatsPerBar: 4,
    melody: `D4:0.5 D4:0.5 E4:0.5 E4:0.5 E4:0.25 G#4:0.25 F4:0.25 E4:0.25 E4:0.5 R:0.5 |
             A4:0.5 G#4:0.25 A4:0.25 C5:0.25 B4:0.25 A4:0.25 G#4:0.25 A4:1.5 R:0.5 |
             G#4:0.5 A4:0.5 B4:0.5 C5:0.25 E5:0.25 D5:0.25 C5:0.25 B4:0.25 A4:0.25 G#4:0.25 F4:0.25 E4:0.25 F4:0.25 |
             G#4 B4:0.25 A4:0.25 G#4:0.25 F4:0.25 E4:1.5 R:0.5 |
             A4:0.25 B4:0.25 A4:0.25 B4:0.25 G#4:0.25 A4:0.25 F4:0.25 G#4:0.25 E4 F4 |
             G#4 A4:0.25 B4:0.25 A4:0.25 G#4:0.25 F4:0.25 G#4:0.25 F4:0.25 E4:0.25 F4 |
             D4:0.5 D4:0.5 E4:0.5 E4:0.5 E4:0.5 F4:0.5 A4:0.5 G#4:0.5 |
             G#4:0.5 F4:0.25 G#4:0.25 F4:0.5 E4:0.5 E4:2`,
    chords: 'E Am E E E Dm Dm E',
  },

  // ---------------------------------------------------------------- türküler (folk songs)

  // Üsküdar'a Gider İken (Kâtibim) — Original G minor (nihavent, with F#), 2/4 - moved up a tone to A minor and down an octave
  //   (black key: G#). Sung part only (two verse lines, then the "Kâtibimin setiresi uzun" refrain), from SymbTr bars 9-23;
  //   the last bar is the tonic half note from the Wikimedia score (SymbTr continues into a saz fill there).
  //   Source: SymbTr nihavent--turku--nimsofyan--uskudara_gider-- (https://github.com/MTG/SymbTr, txt)
  //   Source: https://commons.wikimedia.org/wiki/File:Katibim.svg (LilyPond source on the file page)
  //   Public domain: Anonymous 19th-century Istanbul türkü ("composer and poet unknown").
  //   Confidence: high; both sources agree except that the Commons score has F# (here G#) in the second bar
  //   of each verse line where SymbTr has F (here G); this follows SymbTr. No microtones.
  {
    id: 'uskudara-gider-iken',
    country: 'tr',
    themes: ['everyday'],
    title: 'Üsküdar\'a Gider İken (Kâtibim)',
    titleEn: 'On the Way to Üsküdar',
    emoji: '⛴️',
    level: 'hard',
    bpm: 76,
    beatsPerBar: 2,
    melody: `A3:0.75 E4:0.25 E4:0.5 E4:0.5 | F4:0.25 E4:0.25 F4:0.25 G4:0.25 E4:0.5 E4:0.5 | D4:0.5 D4:0.25 D4:0.25 C4:0.5 D4:0.5 | E4:0.25 F4:0.25 E4:0.25 D4:0.25 C4:0.25 B3:0.25 A3:0.5 |
             A3:0.75 E4:0.25 E4:0.5 E4:0.5 | F4:0.25 E4:0.25 F4:0.25 G4:0.25 E4:0.5 E4:0.5 | D4:0.5 D4:0.25 D4:0.25 C4:0.5 D4:0.5 | E4:0.25 F4:0.25 E4:0.25 D4:0.25 C4:0.25 D4:0.25 E4:0.5 |
             A3:0.75 B3:0.25 C4:0.5 D4:0.5 | E4:0.25 F4:0.25 E4:0.25 D4:0.25 C4:0.25 B3:0.25 A3:0.5 | B3:0.25 D4:0.25 C4:0.25 B3:0.25 B3:0.25 A3:0.25 G#3:0.25 A3:0.25 | B3 R |
             A3:0.75 B3:0.25 C4:0.5 D4:0.5 | E4:0.25 F4:0.25 E4:0.25 D4:0.25 C4:0.25 B3:0.25 A3:0.5 | B3:0.25 D4:0.25 C4:0.25 B3:0.25 B3:0.25 A3:0.25 A3:0.25 G#3:0.25 | A3:2`,
    chords: 'Am Am Dm Am Am Am Dm E Am Am E E Am Am E Am',
  },
  // Çayeli'nden Öteye — Original hicaz on A, 7/8 (devr-i hindî, 3+2+2) - moved down a fourth to hicaz on E (black keys: G#, one C#).
  //   Verse + refrain once (SymbTr bars 1-16); the last bar keeps the source's two closing saz notes.
  //   Source: SymbTr hicaz--turku--devrihindi--cayelinden_oteye--rize (https://github.com/MTG/SymbTr, txt)
  //   Public domain: Anonymous Rize (Black Sea) türkü. No microtones. Confidence: single source.
  {
    id: 'cayelinden-oteye',
    country: 'tr',
    themes: ['celebrations', 'movement'],
    title: 'Çayeli\'nden Öteye',
    titleEn: 'Beyond Çayeli',
    emoji: '🧺',
    level: 'hard',
    bpm: 180,
    beatsPerBar: 7,
    melody: `C5 B4 C5 B4:2 A4:2 | B4:2 C5 C5 B4 A4 B4 | G#4:0.5 A4:1.5 A4 G#4:2 F4:2 | A4:2 A4 A4 G#4 F4 G#4 |
             F4:2 F4 E4:2 D4:0.5 C#4:0.5 D4 | F4:2 F4 E4:2 E4:2 | E4:2 E4 E4:2 E4:2 | E4:2 R E4:2 E4:2 |
             C5 B4 C5 B4:0.5 C5:0.5 B4 A4:2 | B4:0.5 C5:0.5 B4 C5 C5 B4 A4 B4 | A4:2 A4 G#4:2 F4:2 | A4:2 A4 A4 G#4 F4 G#4 |
             F4:2 F4 E4:2 D4:0.5 C#4:0.5 D4 | F4:2 F4 E4:2 E4:2 | E4:2 E4 E4:2 E4:2 | E4:2 R E4:2 E4:2`,
    chords: 'Am Am E E Dm E E E Am Am E E Dm E E E',
  },
  // Dere Geliyor Dere — Original hüseyni on A (A minor), 9/8 (evfer, 2+2+2+3) - no transposition.
  //   Two verse statements + the "Amanın aman" strophe (SymbTr bars 1-12).
  //   Source: SymbTr huseyni--turku--evfer--dere_geliyor-- (https://github.com/MTG/SymbTr, txt)
  //   Public domain: Anonymous traditional türkü. Rounded: segâh Si b1 (B a comma flat) -> B. Confidence: single source.
  {
    id: 'dere-geliyor-dere',
    country: 'tr',
    themes: ['celebrations'],
    title: 'Dere Geliyor Dere',
    titleEn: 'Here Comes the Stream',
    emoji: '🏞️',
    level: 'medium',
    bpm: 190,
    beatsPerBar: 9,
    melody: `D5 E5 E5 E5 E5:2 D5 C5:2 | E5 D5 D5:2 C5:1.5 D5:0.5 B4 A4:2 | A4 B4 C5 D5 D5:2 B4 C5:2 | B4 A4 A4:2 A4:5 |
             D5 E5 E5 E5 E5:2 D5 C5:2 | E5 D5 D5:2 C5:1.5 D5:0.5 B4 A4:2 | A4 B4 C5 D5 D5:2 B4 C5:2 | B4 A4 A4:2 A4:5 |
             D5 E5 E5:2 E5 E5 D5 C5:2 | E5 D5 D5:1.5 B4:0.5 C5 D5 B4 A4:2 | A4 B4 C5 D5 D5:2 B4 C5:2 | B4 A4 A4:2 A4:5`,
    chords: 'Am G G Am Am G G Am Am G G Am',
  },
  // Sarı Gelin — Original hüseyni on A (A minor with F#), 10/8 (curcuna, 3+2+2+3) - moved down an octave (black key: F#).
  //   Erzurum version, first strophe and refrain (SymbTr bars 1-13).
  //   Source: SymbTr huseyni--turku--curcuna--sari_gelin--erzurum (https://github.com/MTG/SymbTr, txt)
  //   Public domain: Anonymous traditional Erzurum türkü. Rounded: Si b1 -> B. Confidence: single source.
  {
    id: 'sari-gelin',
    country: 'tr',
    themes: ['everyday'],
    title: 'Sarı Gelin',
    titleEn: 'The Fair-Haired Bride',
    emoji: '👰',
    level: 'medium',
    bpm: 160,
    beatsPerBar: 10,
    melody: `R:2 A3 A3:2 A3:2 E4:3 | E4:2 D4:3 E4 D4 E4:3 | E4:2 E4 E4:1.5 D4:0.5 D4:1.5 C4:0.5 D4 E4 R | E4:2 F#4 D4:2 C4:1.5 B3:0.5 C4 D4 R |
             C4:2 D4 B3:2 A3:2 A3 C4 R | B3:2 C4 A3:2 A3:5 | R:2 C4 C4:2 D4:2 D4:3 | D4:2 C4:3 D4 C4 D4 E4:2 |
             E4 R C4 D4:2 E4:2 E4:3 | E4:2 E4 D4:2 D4:1.5 C4:0.5 D4 E4 R | E4:2 F#4 D4:2 C4:1.5 B3:0.5 C4 D4 R | C4:2 D4 B3:2 A3:2 A3 C4 R |
             B3:2 C4 A3:2 A3:5`,
    chords: 'Am Am Am D Am Am G G Am Am D Am Am',
  },
  // Hey Onbeşli — Original hüseyni on A, 4/4 - moved down an octave (black key: F#). Verse + refrain (SymbTr bars 9-20).
  //   Source: SymbTr huseyni--turku--sofyan--hey_onbesli--tokat (https://github.com/MTG/SymbTr, txt)
  //   Public domain: Anonymous Tokat türkü (about the soldiers born in 1915). Rounded: Si b1 -> B. Confidence: single source.
  {
    id: 'hey-onbesli',
    country: 'tr',
    themes: ['everyday'],
    title: 'Hey Onbeşli',
    titleEn: 'Hey, Boys Born in \'15',
    emoji: '🛤️',
    level: 'hard',
    bpm: 88,
    beatsPerBar: 4,
    melody: `R:0.5 C4:0.25 D4:0.25 E4:0.5 E4:0.5 E4:0.5 D4:0.5 E4 | R:0.5 C4:0.25 D4:0.25 E4:0.5 E4:0.5 E4:0.5 D4:0.5 E4:0.5 R:0.5 |
             R:0.5 C4:0.25 D4:0.25 E4:0.5 E4:0.5 E4:0.5 D4:0.5 E4 | R:0.5 C4:0.25 D4:0.25 E4:0.5 E4:0.5 E4:0.5 D4:0.5 E4:0.5 R:0.5 |
             G4:0.5 G4:0.25 F#4:0.25 G4:0.25 F#4:0.25 G4:0.25 E4:0.25 E4:0.25 E4:0.5 D4:0.25 E4:0.5 D4:0.25 C4:0.25 |
             D4:0.5 D4:0.25 D4:0.25 D4:0.5 D4:0.5 D4:0.375 E4:0.125 C4:0.25 E4:0.25 D4:0.5 R:0.5 |
             D4:0.5 D4:0.25 B3:0.25 C4:0.5 B3:0.25 A3:0.25 A3:0.5 A3:0.25 G3:0.25 A3:0.5 B3:0.25 A3:0.25 |
             A3:0.125 D4:0.125 C4:0.25 D4:0.25 B3:0.25 C4:0.5 B3:0.25 A3:0.25 A3 A3 |
             D4:0.5 D4:0.25 B3:0.25 C4:0.5 B3:0.25 A3:0.25 A3:0.5 A3:0.25 G3:0.25 A3:0.5 B3:0.25 A3:0.25 |
             C4:0.5 D4:0.25 B3:0.25 C4:0.5 B3:0.25 A3:0.25 A3:0.75 A3:0.25 A3 |
             D4:0.5 D4:0.25 B3:0.25 C4:0.5 B3:0.25 A3:0.25 A3:0.5 A3:0.25 G3:0.25 A3:0.25 A3:0.25 B3:0.25 A3:0.25 |
             A3:0.125 D4:0.125 C4:0.25 D4:0.25 B3:0.25 C4:0.125 D4:0.125 C4:0.25 B3:0.25 A3:0.25 A3:0.75 A3:0.25 A3`,
    chords: 'Am Am Am Am G G Dm Am Dm Am Dm Am',
  },
  // Gesi Bağları — Original beyâtî on A (A minor), sung lines in 6/4 (the source alternates 2/4 saz bars with 6/4 sung bars)
  //   - no transposition. Sung bars only (SymbTr bars 7, 8, 9, 12, 13), saz bars and the opening "Of" call dropped.
  //   One sixteenth-note triplet (E-D-E) is written as a single E sixteenth.
  //   Source: SymbTr beyati--turku--nimsofyan--gesi_baglarinda--kayseri (https://github.com/MTG/SymbTr, txt)
  //   Public domain: Anonymous Kayseri türkü. Rounded: Si b1 -> B. Confidence: single source.
  {
    id: 'gesi-baglari',
    country: 'tr',
    themes: ['everyday'],
    title: 'Gesi Bağları',
    titleEn: 'The Vineyards of Gesi',
    emoji: '🍇',
    level: 'hard',
    bpm: 80,
    beatsPerBar: 6,
    melody: `E5:0.5 E5:0.25 E5:0.25 E5:0.5 E5:0.5 E5:0.5 E5:0.5 E5:0.25 E5:0.5 D5:0.25 D5:0.25 E5:0.5 D5:0.25 E5:0.25 C5:0.25 D5:0.5 |
             C5:0.5 C5:0.25 D5:0.25 D5:0.75 C5:0.25 C5:0.25 D5:0.25 E5:0.25 D5:0.25 E5:0.25 C5:0.25 D5:0.5 B4:0.25 C5:0.5 B4:0.25 A4 |
             R:0.5 B4:0.25 D5:0.25 C5:0.25 D5:0.25 B4:0.5 C5:0.5 B4:0.25 A4:0.25 B4:0.5 A4:0.5 A4:1.5 R:0.5 |
             C5:0.5 C5:0.25 D5:0.25 D5:0.75 C5:0.25 C5:0.25 D5:0.25 E5:0.25 D5:0.25 E5:0.25 C5:0.25 D5:0.5 B4:0.25 C5:0.5 B4:0.25 A4 |
             R:0.5 B4:0.25 D5:0.25 C5:0.25 D5:0.25 B4:0.5 C5:0.5 B4:0.25 A4:0.25 B4:0.5 A4:0.5 A4:1.5 R:0.5`,
    chords: 'Am C.G G.Am C.G G.Am',
  },
  // Çayda Çıra — Original segâh on B (B C D E F# G A, written with Si b1 and Mi b1), 10/8 (curcuna) - moved down a fifth
  //   to E phrygian, all white keys. Verse + "Nanay" refrain, two strophes (SymbTr bars 9-24).
  //   Source: SymbTr segah--turku--curcuna--cayda_cira--elazig (https://github.com/MTG/SymbTr, txt)
  //   Public domain: Anonymous Elazığ türkü (halay). Rounded: Si b1 -> B (here E) and Mi b1 -> E (here A).
  //   Confidence: single source; segâh rounded to a plain phrygian scale, as usually played on piano.
  {
    id: 'cayda-cira',
    country: 'tr',
    themes: ['celebrations', 'movement'],
    title: 'Çayda Çıra',
    titleEn: 'Torchlight on the Stream',
    emoji: '🕯️',
    level: 'medium',
    bpm: 170,
    beatsPerBar: 10,
    melody: `E4:2 C4 G4:2 G4:2 G4:3 | A4:2 G4 A4 G4 G4:2 G4:3 | F4 G4 A4:2 G4 C5 B4 A4:2 G4 | G4:2 F4 F4:2 E4:5 |
             G4:2 F4 A4:2 F4 G4 E4 F4 D4 | D4:2 C4 F4 G4 E4:2 E4:2 R | G4:2 F4 A4 R F4 G4 E4 F4 D4 | D4:2 C4 F4 G4 E4:2 E4:3 |
             E4:2 C4 G4:2 G4:2 G4:3 | A4:2 G4 A4 G4 G4:2 G4:3 | F4 G4 A4:2 G4 C5 B4 A4:2 G4 | G4:2 F4 F4:2 E4:5 |
             G4:2 F4 A4:2 F4 G4 E4 F4 D4 | D4:2 C4 F4 G4 E4:2 E4:2 R | G4:2 F4 A4 R F4 G4 E4 F4 D4 | D4:2 C4 F4 G4 E4:2 E4:3`,
    chords: 'C C F Em Dm Em Dm Em C C F Em Dm Em Dm Em',
  },
  // Çemberimde Gül Oya — Original segâh on B, 9/8 (aksak, 2+2+2+3) - moved down a fifth to E phrygian, all white keys.
  //   Verse twice + refrain (SymbTr bars 9-17) and the closing bar (bar 25).
  //   Source: SymbTr segah--turku--aksak--cemberim_de--biga (https://github.com/MTG/SymbTr, txt)
  //   Public domain: Anonymous Biga (Çanakkale) türkü. Rounded: Si b1 -> B (here E), Mi b1 -> E (here A). Confidence: single source.
  {
    id: 'cemberimde-gul-oya',
    country: 'tr',
    themes: ['celebrations'],
    title: 'Çemberimde Gül Oya',
    titleEn: 'Rose Lace on My Headscarf',
    emoji: '🌹',
    level: 'medium',
    bpm: 170,
    beatsPerBar: 9,
    melody: `E4 E4 F4 G4:0.5 A4:0.5 G4:0.5 F4:0.5 F4:0.5 E4:0.5 E4:2 R | C5:1.5 C5:0.5 C5 C5 B4:2 B4:0.5 C5:0.5 A4 G4 | G4:8 R |
             E4 E4 F4 G4:0.5 A4:0.5 G4:0.5 F4:0.5 F4:0.5 E4:0.5 E4:2 R | C5:1.5 C5:0.5 C5 C5 B4:2 B4:0.5 C5:0.5 A4 G4 | G4:8 R |
             G4 G4 C5 C5 B4 A4 C5:0.5 B4:0.5 C5:2 | B4 B4 A4 G4 B4 B4 B4:0.5 C5:0.5 A4 G4 | A4:2 A4 C5 B4 A4 G4 F4 F4:0.5 E4:0.5 | E4:6 R:2 R`,
    chords: 'Em C C Em C C C G Am Em',
  },
  // Şu Dereler Şu Düzler — Original rast on G (G major), 4/4 - moved down a fifth to C major, all white keys.
  //   Two strophes with the "Bombili bili" refrain (SymbTr bars 5-16).
  //   Source: SymbTr rast--turku--sofyan--su_dereler--orta_anadolu (https://github.com/MTG/SymbTr, txt)
  //   Public domain: Anonymous Central Anatolian türkü. Rounded: rast segâh Si b1 -> B (here E). Confidence: single source.
  {
    id: 'su-dereler-su-duzler',
    country: 'tr',
    themes: ['everyday'],
    title: 'Şu Dereler Şu Düzler',
    titleEn: 'These Streams, These Plains',
    emoji: '🌾',
    level: 'hard',
    bpm: 84,
    beatsPerBar: 4,
    melody: `R:0.5 E4:0.25 F4:0.25 G4:0.25 G4:0.75 G4:0.25 G4:0.75 G4:0.5 F4:0.5 | A4:0.5 A4:0.5 G4:0.5 G4:0.25 E4:0.25 F4 E4 |
             G4:0.5 G4:0.25 E4:0.25 F4:0.5 F4:0.25 E4:0.25 E4:0.75 D4:0.25 D4:0.5 D4:0.25 C4:0.25 |
             E4:0.5 E4:0.25 D4:0.25 D4:0.25 C4:0.25 D4:0.25 B3:0.25 C4 E4:0.25 F4:0.25 G4:0.5 |
             E4:0.5 E4:0.25 D4:0.25 D4:0.25 C4:0.25 D4:0.25 B3:0.25 C4:0.75 F4:0.25 E4:0.25 F4:0.25 G4:0.5 |
             R:0.5 E4:0.25 F4:0.25 G4:0.25 G4:0.75 G4:0.25 G4:0.75 G4:0.5 F4:0.5 | A4:0.5 A4:0.5 G4:0.5 G4:0.25 E4:0.25 F4 E4 |
             G4:0.5 G4:0.25 E4:0.25 F4:0.5 F4:0.25 E4:0.25 E4:0.75 D4:0.25 D4:0.5 D4:0.25 C4:0.25 |
             E4:0.5 E4:0.25 D4:0.25 D4:0.25 C4:0.25 D4:0.25 B3:0.25 C4 E4:0.25 F4:0.25 G4:0.5 |
             E4:0.5 E4:0.25 D4:0.25 D4:0.25 C4:0.25 D4:0.25 B3:0.25 C4 R |
             E4:0.5 E4:0.25 D4:0.25 D4:0.25 C4:0.25 D4:0.25 B3:0.25 C4 E4:0.25 F4:0.25 G4:0.5 |
             E4:0.5 E4:0.25 D4:0.25 D4:0.25 C4:0.25 D4:0.25 B3:0.25 C4 R`,
    chords: 'C F.C G.C G.C G.C C F.C G.C G.C G.C G.C G.C',
  },
  // Entarisi Ala Benziyor — Original hicaz on A, 9/8 (raksaksağı) - moved down a fourth to hicaz on E (black key: G#).
  //   Two strophes, each line repeated as in the source (SymbTr bars 9-24).
  //   Source: SymbTr hicaz--turku--raksaksagi--entarisi_ala--istanbul (https://github.com/MTG/SymbTr, txt)
  //   Public domain: Anonymous Istanbul türkü. No microtones. Confidence: single source.
  {
    id: 'entarisi-ala-benziyor',
    country: 'tr',
    themes: ['celebrations'],
    title: 'Entarisi Ala Benziyor',
    titleEn: 'Her Dress Looks Crimson',
    emoji: '👗',
    level: 'medium',
    bpm: 180,
    beatsPerBar: 9,
    melody: `E4:2 A4:2 G#4 A4:2 R:2 | G#4 A4 B4:2 C5 B4 A4 G#4 F4 | E4:2 A4:2 G#4 A4:2 R:2 | G#4 A4 B4:2 C5 B4 A4 G#4 F4 |
             B4 A4 G#4:2 E4 F4:3 E4 | B4 A4 G#4:1.5 F4:0.5 F4:0.5 E4:0.5 E4:2 R:2 | B4 A4 G#4:2 E4 F4:3 E4 | B4 A4 G#4:1.5 F4:0.5 F4:0.5 E4:0.5 E4:2 R:2 |
             E4:2 A4:2 G#4 A4:2 R:2 | G#4 A4 B4:2 C5 B4 A4 G#4 F4 | E4:2 A4:2 G#4 A4:2 R:2 | G#4 A4 B4:2 C5 B4 A4 G#4 F4 |
             B4 A4 G#4:2 E4 F4:2 F4 E4 | B4 A4 G#4:1.5 F4:0.5 F4:0.5 E4:0.5 E4:2 R:2 | B4 A4 G#4:2 F4 F4:2 F4 E4 | B4 A4 G#4:1.5 F4:0.5 F4:0.5 E4:0.5 E4:2 R:2`,
    chords: 'Am E Am E Dm E Dm E Am E Am E Dm E Dm E',
  },
  // Horozumun Tüyleri — Original hicaz on A (upper part with G#), 9/8 (evfer) - moved down a fourth to hicaz on E
  //   (black keys: G#, D#). Two strophes with the "gıt gıt gıdak" hen refrain (SymbTr bars 9-22).
  //   Source: SymbTr hicaz--turku--evfer--horozumun_tuyleri--istanbul (https://github.com/MTG/SymbTr, txt)
  //   Public domain: Anonymous Istanbul türkü. No microtones. Confidence: single source.
  {
    id: 'horozumun-tuyleri',
    country: 'tr',
    themes: ['animals', 'celebrations'],
    title: 'Horozumun Tüyleri',
    titleEn: 'My Rooster\'s Feathers',
    emoji: '🐓',
    level: 'medium',
    bpm: 190,
    beatsPerBar: 9,
    melody: `G#4 A4 B4 B4 C5 B4 C5 D#5:2 | C5 B4 A4 C5 B4:2 C5 D#5:2 | G#4 A4 B4 B4 C5 B4 C5 D#5:2 | C5 B4 A4 C5 B4:5 |
             G#4 A4 G#4 F4 E4 F4 G#4:2 B4 | A4:2 G#4 F4 E4:2 B4 B4:2 | G#4 A4 G#4 F4 E4 F4 G#4:2 B4 | A4:2 G#4 F4 E4:5 |
             G#4 A4 B4 B4 B4 B4 E5:3 | G#4 A4 B4 B4 B4 B4 E5:3 | G#4 A4 G#4 F4 E4 F4 G#4:2 B4 | A4:2 G#4 F4 E4:2 B4 B4:2 |
             G#4 A4 G#4 F4 E4 F4 G#4:2 B4 | A4:2 G#4 F4 E4:5`,
    chords: 'E Am E E E Dm E E E E E Dm E E',
  },
  // Allı Turnam — Original tâhir on A (A dorian: A B C D E F# G), 8/16 (müsemmen) written as 2/4 - moved down an octave
  //   (black key: F#). Sung lines "Allı turnam bizim ele varırsan ... Gülüm gülüm, kırıldı kolum" (SymbTr bars 11-23).
  //   Source: SymbTr tahir--turku--musemmen_ii--alli_durnam--kirikkale-keskin (https://github.com/MTG/SymbTr, txt)
  //   Public domain: Anonymous Keskin (Kırıkkale) türkü. Rounded: Si b1 -> B. Confidence: single source; 32nd-note ornaments kept.
  {
    id: 'alli-turnam',
    country: 'tr',
    themes: ['animals'],
    title: 'Allı Turnam',
    titleEn: 'My Red-Feathered Crane',
    emoji: '🪶',
    level: 'hard',
    bpm: 66,
    beatsPerBar: 2,
    melody: `R:0.5 F#4:0.25 G4:0.25 A4:0.5 C5:0.125 B4:0.125 A4:0.25 | A4:0.5 B4:0.375 A4:0.125 A4:0.25 A4:0.75 |
             A4:0.5 C5:0.125 B4:0.125 A4:0.25 A4:0.25 G4:0.125 F#4:0.125 G4:0.125 F#4:0.125 G4:0.25 |
             R:0.5 F#4:0.25 G4:0.25 A4:0.5 C5:0.125 B4:0.125 A4:0.25 | A4:0.5 B4:0.375 A4:0.125 A4:0.25 A4:0.75 |
             A4:0.5 C5:0.125 B4:0.125 A4:0.25 A4:0.25 G4:0.125 F#4:0.125 G4:0.125 F#4:0.125 G4:0.25 |
             R:0.5 F#4:0.25 G4:0.25 A4:0.5 C5:0.125 B4:0.125 A4:0.25 | A4:0.375 G4:0.125 A4:0.25 F#4:0.25 G4:0.25 E4:0.25 E4:0.25 D4:0.25 |
             D4:0.25 D4:0.25 G4:0.25 D4:0.25 D4 | R:0.5 D4:0.25 D4:0.125 C4:0.125 D4:0.25 C4:0.5 B3:0.25 |
             C4:0.5 D4:0.25 C4:0.25 D4:0.25 B3:0.5 A3:0.25 | A3:0.5 C4:0.125 B3:0.125 A3:0.25 A3:0.25 A3:0.25 C4:0.375 B3:0.125 |
             B3:0.375 A3:0.125 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.5`,
    chords: 'D Am G D Am G D D G G Am Am Am',
  },
  // Yağmur Yağar Taş Üstüne — Original hüseyni on A (with F#), 7/8 (devr-i turan) - moved down an octave (black key: F#).
  //   Verse + "Vay dili dili" refrain (SymbTr bars 17-30).
  //   Source: SymbTr huseyni--turku--devrituran--yagmur_yagar-- (https://github.com/MTG/SymbTr, txt)
  //   Public domain: Anonymous traditional türkü. Rounded: Si b1 -> B. Confidence: single source.
  {
    id: 'yagmur-yagar-tas-ustune',
    country: 'tr',
    themes: ['everyday'],
    title: 'Yağmur Yağar Taş Üstüne',
    titleEn: 'Rain Falls on the Stones',
    emoji: '🌧️',
    level: 'medium',
    bpm: 180,
    beatsPerBar: 7,
    melody: `A3:2 G4 F#4 G4 G4 F#4 | G4 F#4 E4:2 E4 E4 D4 | E4 F#4 G4 F#4 G4 G4 F#4 | G4 F#4 E4:2 E4 E4 D4 |
             E4 F#4 G4 F#4 G4 G4 F#4 | G4 F#4 E4:2 E4 E4 D4 | C4 D4 E4 E4 E4 E4:2 | D4:2 G4 F#4 G4 E4 D4 |
             D4:2 E4 D4 E4 C4:2 | B3 C4 D4 C4 D4 B3:2 | A3:2 C4 B3 C4 B3 A3 | G3:2 C4 B3 D4 B3 A3 |
             A3:7 | A3:7`,
    chords: 'G Em G Em G Em C G C G Am G Am Am',
  },
  // Fidayda — Original kürdî-flavoured ferahnümâ on D (D Eb F G A Bb C), 4/4 - moved up a tone to E phrygian, all white keys.
  //   The "Fidayda da Ankaralım" refrain (SymbTr bars 43-50); the short saz runs in bars 2 and 4 are kept.
  //   Source: SymbTr ferahnuma--turku--sofyan--fidayda--ankara (https://github.com/MTG/SymbTr, txt)
  //   Public domain: Anonymous Ankara türkü. No microtones in these bars. Confidence: single source; verse part (with F#) not used.
  {
    id: 'fidayda',
    country: 'tr',
    themes: ['celebrations'],
    title: 'Fidayda',
    titleEn: 'Fidayda (Ankara Dance Song)',
    emoji: '💃',
    level: 'hard',
    bpm: 80,
    beatsPerBar: 4,
    melody: `B4:0.25 B4:0.5 C5:0.25 B4:0.5 A4:0.5 A4:0.25 G4:0.5 A4:0.25 G4:0.5 F4:0.25 E4:0.25 |
             G4:0.5 A4:0.25 G4:0.25 F4:0.5 F4:0.25 E4:0.25 E4:0.5 E4:0.125 F4:0.125 E4:0.125 F4:0.125 G4:0.125 A4:0.125 G4:0.125 A4:0.125 B4:0.5 |
             B4:0.75 B4:0.25 B4:0.5 A4:0.5 A4:0.25 A4:0.25 G4:0.25 A4:0.25 G4:0.5 F4:0.25 E4:0.25 |
             G4:0.5 A4:0.25 G4:0.25 F4:0.5 F4:0.25 E4:0.25 E4:0.5 D4:0.125 E4:0.125 F4:0.125 G4:0.125 E4:0.125 F4:0.125 G4:0.125 A4:0.125 F4:0.125 G4:0.125 A4:0.125 B4:0.125 |
             B4:0.5 C5:0.5 B4:0.5 A4:0.5 A4:0.25 G4:0.5 A4:0.25 G4:0.5 F4:0.5 |
             G4:0.5 A4:0.25 G4:0.25 F4:0.5 F4:0.25 E4:0.25 E4:0.5 F4:0.5 G4:0.5 A4:0.5 |
             B4:0.5 B4:0.5 B4:0.5 A4:0.5 A4:0.5 G4:0.25 A4:0.25 G4:0.5 F4:0.5 |
             G4:0.5 A4:0.25 G4:0.25 F4:0.5 F4:0.25 E4:0.25 E4:1.5 R:0.5`,
    chords: 'Am Dm.Em Am Dm.Em Am Dm.Em Am Dm.Em',
  },
];
