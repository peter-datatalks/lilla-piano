// Classical themes (Baroque and Classical era: Bach, Handel, Vivaldi, Pachelbel, Mozart, Haydn, Beethoven).
// Same format as the other song files, plus `composer` (shown on the card and searchable).
// Melodies are taken from public-domain editions of the original scores.
// Most were converted mechanically from LilyPond sources on the Mutopia Project or Wikipedia (relative pitches,
// durations, ties), then transposed as stated. Only the top voice (melody) is kept; chords and grace notes are left out,
// trills become their main note. Notes tied across a bar line are written as a note plus a rest (mentioned where it happens).
// MU = https://www.mutopiaproject.org/ftp/

export const SONGS_CLASSICAL_A = [
  // Menuett G-Dur, BWV Anh. 114 — from the 1725 Notebook for Anna Magdalena Bach; now attributed to Christian Petzold.
  //  Original G major, 3/4 - moved down a fifth to C. Bars 1–16 (the whole first strain, with its own cadence); mordents dropped.
  //  Source: MU + 'BachJS/BWVAnh114/anna-magdalena-04/anna-magdalena-04.ly' (Bach-Gesellschaft edition; converted mechanically).
  //  Cross-check: https://en.wikipedia.org/wiki/Minuets_in_G_major_and_G_minor (LilyPond score, bars 1–8) — identical.
  //  Chords from the Mutopia left hand. Public domain (Petzold d. 1733). Confidence: high.
  {
    id: 'minuet-in-g-petzold',
    country: 'de',
    themes: ['classical'],
    title: 'Menuett G-Dur',
    titleEn: 'Minuet in G Major',
    composer: 'Petzold',
    aka: ['BWV Anh. 114', 'J. S. Bach', 'Minuet in G', 'Anna Magdalena Notebook'],
    emoji: '💃',
    level: 'medium',
    bpm: 110,
    beatsPerBar: 3,
    melody: `G4 C4:0.5 D4:0.5 E4:0.5 F4:0.5 | G4 C4 C4 | A4 F4:0.5 G4:0.5 A4:0.5 B4:0.5 | C5 C4 C4 |
             F4 G4:0.5 F4:0.5 E4:0.5 D4:0.5 | E4 F4:0.5 E4:0.5 D4:0.5 C4:0.5 | B3 C4:0.5 D4:0.5 E4:0.5 C4:0.5 | D4:3 |
             G4 C4:0.5 D4:0.5 E4:0.5 F4:0.5 | G4 C4 C4 | A4 F4:0.5 G4:0.5 A4:0.5 B4:0.5 | C5 C4 C4 |
             F4 G4:0.5 F4:0.5 E4:0.5 D4:0.5 | E4 F4:0.5 E4:0.5 D4:0.5 C4:0.5 | D4 E4:0.5 D4:0.5 C4:0.5 B3:0.5 | C4:3`,
    chords: 'C C F C Dm C G G C C F C Dm.G C F.G C',
  },
  // Musette D-Dur, BWV Anh. 126 — anonymous piece from the 1725 Notebook for Anna Magdalena Bach, traditionally listed under Bach.
  //  Original D major, 2/4 - moved down a tone to C. Bars 1–8 (the first strain, with its two-octave leaps); the busier second strain is left out.
  //  Source: MU + 'BachJS/BWVAnh126/anna-magdalena-22/anna-magdalena-22.ly' (converted mechanically).
  //  Only one notated source found; chords from its left hand (D pedal). Range C4–G5. Public domain. Confidence: medium-high.
  {
    id: 'musette-in-d',
    country: 'de',
    themes: ['classical'],
    title: 'Musette D-Dur',
    titleEn: 'Musette in D Major',
    composer: 'J. S. Bach',
    aka: ['BWV Anh. 126', 'Anna Magdalena Notebook', 'Musette'],
    emoji: '🐑',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 2,
    melody: `G5 F5:0.25 E5:0.25 D5:0.25 C5:0.25 | G5 F5:0.25 E5:0.25 D5:0.25 C5:0.25 | E4:0.25 F4:0.25 G4:0.5 F4:0.5 E4:0.5 | D4:0.5 G4:0.5 E4:0.5 C4:0.5 |
             G5 F5:0.25 E5:0.25 D5:0.25 C5:0.25 | G5 F5:0.25 E5:0.25 D5:0.25 C5:0.25 | E4:0.25 F4:0.25 G4:0.5 F4:0.5 E4:0.5 | D4:0.5 G4:0.5 C4`,
    chords: 'C C C G.C C C C G.C',
  },
  // Air (Orchestral Suite No. 3, BWV 1068, 2nd movement) — first violin, bars 1–6 (first strain with first-time bar).
  //  Original D major, 4/4 - moved down a ninth (an octave plus a tone) to C so it fits G3–G4. Acciaccaturas dropped.
  //  The opening F#, tied over into bar 2, is written as a whole note followed by an eighth rest.
  //  Source: MU + 'BachJS/BWV1068/bach-air/bach-air-lys/bach-air-notes.ly' (Bach-Gesellschaft; converted mechanically). Chords from its continuo.
  //  Ends on the dominant (G), as the first strain does. Public domain (Bach d. 1750). Confidence: high.
  {
    id: 'bach-air',
    country: 'de',
    themes: ['classical'],
    title: 'Air',
    titleEn: 'Air on the G String',
    composer: 'J. S. Bach',
    aka: ['BWV 1068', 'Air on the G String', 'Orchestral Suite No. 3'],
    emoji: '🎻',
    level: 'hard',
    bpm: 50,
    beatsPerBar: 4,
    melody: `E4:4 | R:0.5 A4:0.25 F4:0.25 D4:0.25 C4:0.25 B3:0.25 C4:0.25 B3 G3 | G4:2.25 E4:0.25 Bb3:0.25 A3:0.25 D4:0.25 C#4:0.25 G4:0.25 F4:0.25 | F4:2.25 D4:0.25 A3:0.25 G3:0.25 C4:0.25 B3:0.25 F4:0.25 E4:0.25 |
             E4:1.5 F#4:0.25 G4:0.25 C4:0.5 C4:0.125 D4:0.125 E4:0.5 D4:0.25 D4:0.25 C4:0.25 | B3:0.25 A3:0.25 A3:0.125 B3:0.125 C4:0.75 B3:0.25 A3:0.25 G3:2`,
    chords: 'C.Am F.G C.A Dm.G C.D D.G',
  },
  // Hallelujah (Messiah, HWV 56) — soprano part, bars 4–14 ("Hallelujah" ×2, then "For the Lord God omnipotent reigneth").
  //  Original D major, 4/4 - moved down a tone to C. Bar 14's upbeat to the next phrase ("r8 e16 e") is replaced by a rest.
  //  Source: MU + 'HandelGF/hallelujah/hallelujah-lys/soprano.ly' (converted mechanically); chords from the cello/bass parts in the same set.
  //  Only one notated source used. Public domain (Handel d. 1759). Confidence: high.
  {
    id: 'hallelujah-handel',
    country: 'de',
    themes: ['classical', 'christmas'],
    title: 'Hallelujah',
    titleEn: 'Hallelujah Chorus',
    composer: 'Handel',
    aka: ['Messiah', 'HWV 56', 'Hallelujah Chorus'],
    emoji: '🙌',
    level: 'medium',
    bpm: 84,
    beatsPerBar: 4,
    melody: `C5:1.5 G4:0.5 A4:0.5 G4:0.5 R:1 | C5:1.5 G4:0.5 A4:0.5 G4:0.5 R:0.5 C5:0.25 C5:0.25 | C5:0.5 C5:0.5 R:0.5 C5:0.25 C5:0.25 C5:0.5 C5:0.5 R:0.5 C5:0.5 | B4:0.5 C5 B4:0.5 C5 R:1 |
             D5:1.5 G4:0.5 E5:0.5 D5:0.5 R:1 | D5:1.5 G4:0.5 E5:0.5 D5:0.5 R:0.5 D5:0.25 D5:0.25 | E5:0.5 D5:0.5 R:0.5 D5:0.25 D5:0.25 E5:0.5 D5:0.5 R:0.5 D5:0.5 | E5:0.5 D5:0.5 C5 B4 R:1 |
             G4:2 A4 B4 | C5:0.5 C4:0.5 C5:1.5 C5:0.5 B4 | A4:2 G4 R:1`,
    chords: 'C.F C.F F G.C G.C G.C C C.G G C.G D.G',
  },
  // Kanon in D — first violin, bars 3–10 (its first entry over the ground bass), plus the first note of bar 11 as a final whole note.
  //  Original D major, 4/4 - moved down a tone to C. Trill on the last C# dropped.
  //  Source: https://en.wikipedia.org/wiki/Pachelbel's_Canon (LilyPond score of bars 1–10, with chord names I–V–vi–iii–IV–I–IV–V)
  //  Cross-check: MU + 'PachelbelJ/Canon_per_3_Violini_e_Basso/Canon_per_3_Violini_e_Basso-lys/violin_common.ily' (from IMSLP) — identical.
  //  Public domain (Pachelbel d. 1706). Confidence: high.
  {
    id: 'pachelbel-canon',
    country: 'de',
    themes: ['classical'],
    title: 'Kanon in D',
    titleEn: 'Canon in D',
    composer: 'Pachelbel',
    aka: ['Canon in D', "Pachelbel's Canon", 'Canon per 3 violini e basso'],
    emoji: '🌸',
    level: 'medium',
    bpm: 60,
    beatsPerBar: 4,
    melody: `E5 D5 C5 B4 | A4 G4 A4 B4 | C5 B4 A4 G4 | F4 E4 F4 D4 |
             C4:0.5 E4:0.5 G4:0.5 F4:0.5 E4:0.5 C4:0.5 E4:0.5 D4:0.5 | C4:0.5 A3:0.5 C4:0.5 G4:0.5 F4:0.5 A4:0.5 G4:0.5 F4:0.5 | E4:0.5 C4:0.5 D4:0.5 B4:0.5 C5:0.5 E5:0.5 G5:0.5 G4:0.5 | A4:0.5 F4:0.5 G4:0.5 E4:0.5 C4:0.5 C5:0.5 C5:0.75 B4:0.25 |
             C5:4`,
    chords: 'C.G Am.Em F.C F.G C.G Am.Em F.C F.G C',
  },
  // La primavera (The Four Seasons, Op. 8 No. 1, RV 269), 1st movement — first violin, eighth-note upbeat + bars 1–13 (the opening ritornello).
  //  Original E major, 4/4 - moved down a major tenth (octave + major third) to C. Trills dropped. Last bar shortened to balance the upbeat.
  //  Source: MU + 'VivaldiA/O8/spring/spring-lys/spring1a.ly' (Violino primo; converted mechanically); chords from spring1d.ly (cello).
  //  Only one notated source used. Public domain (Vivaldi d. 1741). Confidence: high.
  {
    id: 'vivaldi-spring',
    country: 'it',
    themes: ['classical'],
    title: 'La primavera',
    titleEn: 'Spring',
    composer: 'Vivaldi',
    aka: ['The Four Seasons', 'Le quattro stagioni', 'RV 269', 'Op. 8 No. 1'],
    emoji: '🌷',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 4,
    pickup: 0.5,
    melody: `C4:0.5 |
             E4:0.5 E4:0.5 E4:0.5 D4:0.25 C4:0.25 G4:1.5 G4:0.25 F4:0.25 | E4:0.5 E4:0.5 E4:0.5 D4:0.25 C4:0.25 G4:1.5 G4:0.25 F4:0.25 | E4:0.5 F4:0.25 G4:0.25 F4:0.5 E4:0.5 D4:0.5 B3:0.5 G3:0.5 C4:0.5 | E4:0.5 E4:0.5 E4:0.5 D4:0.25 C4:0.25 G4:1.5 G4:0.25 F4:0.25 |
             E4:0.5 E4:0.5 E4:0.5 D4:0.25 C4:0.25 G4:1.5 G4:0.25 F4:0.25 | E4:0.5 F4:0.25 G4:0.25 F4:0.5 E4:0.5 D4 R:0.5 C4:0.5 | G4:0.5 F4:0.25 E4:0.25 F4:0.5 G4:0.5 A4:0.5 G4 C4:0.5 | G4:0.5 F4:0.25 E4:0.25 F4:0.5 G4:0.5 A4:0.5 G4 C4:0.5 |
             A4:0.5 G4 F4:0.5 E4:0.5 D4:0.25 C4:0.25 D4 | C4 R:0.5 C4:0.5 G4:0.5 F4:0.25 E4:0.25 F4:0.5 G4:0.5 | A4:0.5 G4 C4:0.5 G4:0.5 F4:0.25 E4:0.25 F4:0.5 G4:0.5 | A4:0.5 G4 C4:0.5 A4:0.5 G4 F4:0.5 |
             E4:0.5 D4:0.25 C4:0.25 D4 C4 R:0.5`,
    chords: 'C C C.G C C C.G C C C.G C C C G.C',
  },
  // L'inverno (The Four Seasons, Op. 8 No. 4, RV 297), 2nd movement Largo — solo violin, bars 1–8 (first half, cadence in the dominant).
  //  Original E-flat major, 4/4 - moved down a minor tenth (octave + minor third) to C; lowest note F#3.
  //  The long notes tied inside a bar (bars 5–6) are written as single notes.
  //  Source: MU + 'VivaldiA/O8/winter/winter-lys/winter2.ly' (Violino principale; converted mechanically); chords from winter2d.ly (cello) and winter2f.ly (figures).
  //  Public domain. Confidence: high.
  {
    id: 'vivaldi-winter-largo',
    country: 'it',
    themes: ['classical'],
    title: "L'inverno",
    titleEn: 'Winter (Largo)',
    composer: 'Vivaldi',
    aka: ['The Four Seasons', 'Le quattro stagioni', 'RV 297', 'Op. 8 No. 4', 'Largo'],
    emoji: '❄️',
    level: 'hard',
    bpm: 56,
    beatsPerBar: 4,
    melody: `C4:0.5 G4:0.25 F4:0.25 E4:0.5 D4:0.25 C4:0.25 D4:0.5 G3:0.5 R:0.5 G3:0.5 | F4:0.25 E4:0.25 D4:0.25 C4:0.25 B3:0.5 F4:0.5 F4:0.5 E4:0.5 R:0.5 E4:0.5 | D4:0.5 E4:0.25 F4:0.25 G4:0.5 A4:0.25 B4:0.25 C4:0.5 D4:0.25 E4:0.25 F4:0.5 G4:0.25 A4:0.25 | B3:0.5 C4:0.25 D4:0.25 E4:0.5 F4:0.25 G4:0.25 A3:0.5 B3:0.25 C4:0.25 D4:0.5 E4:0.25 C4:0.25 |
             B3:1.25 G3:0.25 F#3:0.25 G3:0.25 D4:1.25 G3:0.25 F#3:0.25 G3:0.25 | E4:1.25 G3:0.25 F#3:0.25 G3:0.25 F#4:1.25 D4:0.25 C4:0.25 D4:0.25 | G4:0.5 G3:0.5 R:0.5 G4:0.5 G4:0.25 F4:0.25 E4:0.25 D4:0.25 C4:0.25 B3:0.25 A3:0.25 G3:0.25 | A3:1.5 G3:0.5 G3 R:1`,
    chords: 'C.G G.C G.Am G.D G C.D G.D D.G',
  },
  // Minuetto (String Quintet in E major, Op. 11 No. 5, G. 275) — first violin, quarter upbeat + bars 1–8 (first strain).
  //  Original A major, 3/4 - moved down a major sixth to C. Grace notes and the trill on bar 7 dropped.
  //  Source: https://en.wikipedia.org/wiki/String_Quintet_No._5_(Boccherini) (LilyPond score; same score on de.wikipedia "Quintett E-Dur, op. 11, 5").
  //  Chords from that score's pizzicato bass. Only one independent notated source. Public domain (Boccherini d. 1805). Confidence: medium-high.
  {
    id: 'boccherini-minuet',
    country: 'it',
    themes: ['classical'],
    title: 'Minuetto',
    titleEn: 'Minuet',
    composer: 'Boccherini',
    aka: ['Boccherini Minuet', 'String Quintet Op. 11 No. 5', 'G. 275'],
    emoji: '🎀',
    level: 'hard',
    bpm: 96,
    beatsPerBar: 3,
    pickup: 1,
    melody: `C5:0.25 B4:0.25 C5:0.25 D5:0.25 |
             C5:0.5 C4 E4 G4:0.5 | G4:0.5 F4:0.5 F4 F4:0.25 E4:0.25 F4:0.25 G4:0.25 | F4:0.5 G3 D4 F4:0.5 | F4:0.5 E4:0.5 E4 C5:0.75 A4:0.25 |
             G4:0.5 F#4:0.5 F#4:0.5 F#4:0.5 C5:0.75 A4:0.25 | G4:0.5 F#4:0.5 F#4:0.5 F#4:0.5 C5:0.75 A4:0.25 | B4:0.5 G4:0.5 E4:0.5 C5:0.5 A4 | G4 G3:0.5 R:0.5`,
    chords: 'C G G C D D C.D G',
  },
  // Ah vous dirai-je, maman (12 Variations, K. 265) — Mozart's theme, bars 1–24 written out without repeats.
  //  Original C major, 2/4 - moved down an octave (C4–A4). The trill in bar 15 and the dotted figures in bars 7/15/23 kept as written (trill -> main note).
  //  Source: MU + 'MozartWA/KV265/guitar-duo-complete/guitar-duo-complete-lys/guitar-duo-complete.ly' ("themaA", melody voice of the theme; ed. after Porro, Paris; IMSLP104399).
  //  The same tune is in the app as 'Blinka lilla stjärna'; this is Mozart's own version. Chords from the edition's bass voice ("themaC").
  //  Public domain (Mozart d. 1791). Confidence: medium (one notated source, a guitar edition; melody voice untouched).
  {
    id: 'mozart-ah-vous-dirai-je',
    country: 'at',
    themes: ['classical', 'children'],
    title: 'Ah vous dirai-je, maman',
    titleEn: 'Twinkle Variations (Theme)',
    composer: 'Mozart',
    aka: ['K. 265', 'Twinkle, Twinkle, Little Star', 'Blinka lilla stjärna', '12 Variations'],
    emoji: '⭐',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `C4 C4 | G4 G4 | A4 A4 | G4 G4 |
             F4 F4 | E4 E4 | D4 D4:0.75 E4:0.25 | C4:2 |
             G4 G4 | F4 F4 | E4 E4 | D4 D4 |
             G4 G4 | F4 F4 | E4 E4:0.75 F4:0.25 | E4 D4 |
             C4 C4 | G4 G4 | A4 A4 | G4 G4 |
             F4 F4 | E4 E4 | D4 D4:0.75 E4:0.25 | C4:2`,
    chords: 'C C F C G C.Am F.G C C.G G C G C G C.G C.G C C F C G C.Am F.G C',
  },
  // Eine kleine Nachtmusik (Serenade No. 13, K. 525), 1st movement — first violin, bars 1–10 (opening fanfare + "rocket" theme).
  //  Original G major, 4/4 - moved down a twelfth (octave + fifth) to C. Opening chords reduced to the top note; trills, appoggiaturas dropped.
  //  Source: MU + 'MozartWA/KV525/eine-kleine-nachtmusik-mvt1/eine-kleine-nachtmusik-mvt1-lys/violin1.ly' (converted mechanically); chords from cello.ly.
  //  Cross-check: https://en.wikipedia.org/wiki/Eine_kleine_Nachtmusik (LilyPond incipit) — same opening. Public domain. Confidence: high.
  {
    id: 'eine-kleine-nachtmusik',
    country: 'at',
    themes: ['classical'],
    title: 'Eine kleine Nachtmusik',
    titleEn: 'A Little Night Music',
    composer: 'Mozart',
    aka: ['K. 525', 'Serenade No. 13'],
    emoji: '🌙',
    level: 'medium',
    bpm: 110,
    beatsPerBar: 4,
    melody: `C4 R:0.5 G3:0.5 C4 R:0.5 G3:0.5 | C4:0.5 G3:0.5 C4:0.5 E4:0.5 G4 R:1 | F4 R:0.5 D4:0.5 F4 R:0.5 D4:0.5 | F4:0.5 D4:0.5 B3:0.5 D4:0.5 G3 R:1 |
             C4:0.5 R:0.5 C4:1.5 E4:0.5 D4:0.5 C4:0.5 | C4:0.5 B3:0.5 B3:1.5 D4:0.5 F4:0.5 B3:0.5 | D4:0.5 C4:0.5 C4:1.5 E4:0.5 D4:0.5 C4:0.5 | C4:0.5 B3:0.5 B3:1.5 D4:0.5 F4:0.5 B3:0.5 |
             C4:0.5 C4:0.5 B3:0.5 A3:0.25 B3:0.25 C4:0.5 C4:0.5 D4:0.5 C4:0.25 D4:0.25 | E4:0.5 E4:0.5 F4:0.5 E4:0.25 F4:0.25 G4 R:1`,
    chords: 'C C G G C G C G C.G C',
  },
  // Alla Turca (Piano Sonata No. 11, K. 331, 3rd movement) — right hand top line: upbeat + bars 1–8 (theme) and the theme's return that ends the first section.
  //  Original A minor, 2/4 - moved down an octave (G#3–C5). The C major middle phrase between them is left out. Grace notes dropped; the final trill is a plain B.
  //  Source: MU + 'MozartWA/KV331/KV331_3_RondoAllaTurca/KV331_3_RondoAllaTurca-lys/KV331_3_RondoAllaTurcaNotes.ly' ("righta" + "rightaa"; converted mechanically); chords from "lefta"/"leftaa".
  //  Public domain. Confidence: high.
  {
    id: 'rondo-alla-turca',
    country: 'at',
    themes: ['classical'],
    title: 'Alla Turca',
    titleEn: 'Turkish March',
    composer: 'Mozart',
    aka: ['Rondo alla Turca', 'K. 331', 'Turkish Rondo', 'Piano Sonata No. 11'],
    emoji: '🥁',
    level: 'hard',
    bpm: 112,
    beatsPerBar: 2,
    pickup: 1,
    melody: `B3:0.25 A3:0.25 G#3:0.25 A3:0.25 |
             C4:0.5 R:0.5 D4:0.25 C4:0.25 B3:0.25 C4:0.25 | E4:0.5 R:0.5 F4:0.25 E4:0.25 D#4:0.25 E4:0.25 | B4:0.25 A4:0.25 G#4:0.25 A4:0.25 B4:0.25 A4:0.25 G#4:0.25 A4:0.25 | C5 A4:0.5 C5:0.5 |
             B4:0.5 A4:0.5 G4:0.5 A4:0.5 | B4:0.5 A4:0.5 G4:0.5 A4:0.5 | B4:0.5 A4:0.5 G4:0.5 F#4:0.5 | E4 B3:0.25 A3:0.25 G#3:0.25 A3:0.25 |
             C4:0.5 R:0.5 D4:0.25 C4:0.25 B3:0.25 C4:0.25 | E4:0.5 R:0.5 F4:0.25 E4:0.25 D#4:0.25 E4:0.25 | B4:0.25 A4:0.25 G#4:0.25 A4:0.25 B4:0.25 A4:0.25 G#4:0.25 A4:0.25 | C5 A4:0.5 B4:0.5 |
             C5:0.5 B4:0.5 A4:0.5 G#4:0.5 | A4:0.5 E4:0.5 F4:0.5 D4:0.5 | C4 B3 | A3`,
    chords: 'Am Am Am Am Em Em Em.B E Am Am Am F Am.E Am.Dm Am.E Am',
  },
  // Sonata facile (Piano Sonata in C, K. 545), 1st movement — right hand, bars 1–4 (the theme; the scale runs that follow are left out).
  //  Original C major, 4/4 - moved down an octave. Trill in bar 4 -> main note.
  //  Source: MU + 'MozartWA/KV545/K545-1/K545-1.ly' (from IMSLP; converted mechanically); chords from its Alberti bass.
  //  Cross-check: https://en.wikipedia.org/wiki/Piano_Sonata_No._16_(Mozart) (LilyPond incipit) — same. Public domain. Confidence: high.
  {
    id: 'mozart-sonata-facile',
    country: 'at',
    themes: ['classical'],
    title: 'Sonata facile',
    titleEn: 'Piano Sonata in C (K. 545)',
    composer: 'Mozart',
    aka: ['K. 545', 'Piano Sonata No. 16', 'Sonata semplice'],
    emoji: '🎹',
    level: 'medium',
    bpm: 96,
    beatsPerBar: 4,
    melody: `C4:2 E4 G4 | B3:1.5 C4:0.25 D4:0.25 C4 R:1 | A4:2 G4 C5 | G4 F4:0.5 E4:0.25 F4:0.25 E4 R:1`,
    chords: 'C G.C F.C G.C',
  },
  // Menuett F-Dur, K. 2 (Mozart aged 6, January 1762) — bars 1–16 and the final four bars 21–24 (bars 17–20 are the same melody with a deceptive cadence).
  //  Original F major, 3/4 - moved down a fourth to C. The bar-7 triplet is written as three thirds of a beat.
  //  Source: MU + 'MozartWA/KV2/menuet_k2/menuet_k2.ly' (Breitkopf & Härtel Mozart-Ausgabe, plate W.A.M. 2.4; converted mechanically); chords from its bass.
  //  Only one notated source used. Public domain. Confidence: high.
  {
    id: 'mozart-minuet-k2',
    country: 'at',
    themes: ['classical'],
    title: 'Menuett F-Dur',
    titleEn: 'Minuet in F (K. 2)',
    composer: 'Mozart',
    aka: ['K. 2', 'Minuet in F'],
    emoji: '👑',
    level: 'medium',
    bpm: 104,
    beatsPerBar: 3,
    melody: `C5:0.5 E5:0.5 G4 G4 | A4:0.5 C5:0.5 F4 F4 | E4:0.5 G4:0.5 C4 B3 | B3:2 C4 |
             G3:0.5 B3:0.5 D4 D4 | G3:0.5 C4:0.5 E4 E4 | G3:0.3333333 B3:0.3333333 D4:0.3333334 F4 E4 | E4:2 D4 |
             G4:0.5 Bb4:0.5 E4 E4 | F4:0.5 A4:0.5 D4 D4 | E4:0.5 G4:0.5 C#4 C#4 | C#4:2 D4 |
             F4:0.5 A4:0.5 D4 D4 | E4:0.5 G4:0.5 C4 C4 | D4:0.5 F4:0.5 B3 B3 | B3:2 C4 |
             C5:0.5 E5:0.5 G4 G4 | A4:0.5 C5:0.5 F4 F4 | E4:0.5 G4:0.5 C4 B3 | B3:2 C4`,
    chords: 'C F C.G G.C G C G.C G A Dm Em.A D G C Dm.G G.C C F C.G G.C',
  },
  // Schlafe, mein Prinzchen, schlaf ein ("Mozart's Lullaby") — long credited to Mozart (K. 350), then to Bernhard Flies; now thought to be by
  //  Johann Friedrich Anton Fleischmann. Labelled 'Flies' here as the usual attribution.
  //  Original D major, 6/8 - moved down a tone to C. Whole song (bars 1–18; the piano postlude is left out). Counted in eighths.
  //  Source: https://en.wikipedia.org/wiki/Schlafe,_mein_Prinzchen,_schlaf_ein (LilyPond score, Friedlaender edition)
  //  Cross-check: https://de.wikipedia.org/wiki/Schlafe,_mein_Prinzchen,_schlaf_ein (LilyPond score) — identical. Chords from the score's piano part.
  //  Public domain (text Gotter d. 1797, music before 1800). Confidence: high.
  {
    id: 'schlafe-mein-prinzchen',
    country: 'de',
    themes: ['classical', 'lullaby'],
    title: 'Schlafe, mein Prinzchen',
    titleEn: "Mozart's Lullaby",
    composer: 'Flies',
    aka: ['Wiegenlied', 'K. 350', 'Mozart', 'Fleischmann', 'Sleep, My Little Prince'],
    emoji: '🤴',
    level: 'easy',
    bpm: 156,
    beatsPerBar: 6,
    melody: `E4 F4 E4 D4 C4 D4 | C4:2 R:4 | C4 F4 F4 F4 G4 A4 | G4:2 R:4 |
             D4 C#4 D4 D4 C#4 D4 | F4:2 R:4 | E4 E4 E4 F4 E4 F4 | G4:2 R:4 |
             A4 A4 A4 A4 G#4 A4 | C5:2 R:4 | G4 G4 G4 G4 F#4 G4 | C5:2 R:4 |
             F4 G4 F4 E4 F4 G4 | D4:2 R:4 | E4 F4 E4 D4 C4 D4 | C4:2 R:3 E4 |
             G4:3.5 F#4:0.5 F4:0.5 E4:0.5 F4:0.5 D4:0.5 | C4:2 R:4`,
    chords: 'C.G C F C G G C C F F C C G.C G C.G C G C',
  },
  // Symphony No. 94 "Surprise", 2nd movement (Andante) — theme, bars 1–16 including the fortissimo "surprise" chord (top note G5).
  //  Original C major, 2/4 - no transposition.
  //  Source: https://en.wikipedia.org/wiki/Symphony_No._94_(Haydn) (LilyPond score of bars 1–16).
  //  Only one notated source found; chords are the plain tonic/dominant harmony of the theme. Public domain (Haydn d. 1809). Confidence: medium-high.
  {
    id: 'haydn-surprise',
    country: 'at',
    themes: ['classical', 'children'],
    title: 'Sinfonie mit dem Paukenschlag',
    titleEn: 'Surprise Symphony',
    composer: 'Haydn',
    aka: ['Symphony No. 94', 'Hob. I:94', 'Surprise', 'Paukenschlag'],
    emoji: '😲',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `C4:0.5 C4:0.5 E4:0.5 E4:0.5 | G4:0.5 G4:0.5 E4 | F4:0.5 F4:0.5 D4:0.5 D4:0.5 | B3:0.5 B3:0.5 G3 |
             C4:0.5 C4:0.5 E4:0.5 E4:0.5 | G4:0.5 G4:0.5 E4 | C5:0.5 C5:0.5 F#4:0.5 F#4:0.5 | G4 G3:0.5 R:0.5 |
             C4:0.5 C4:0.5 E4:0.5 E4:0.5 | G4:0.5 G4:0.5 E4 | F4:0.5 F4:0.5 D4:0.5 D4:0.5 | B3:0.5 B3:0.5 G3 |
             C4:0.5 C4:0.5 E4:0.5 E4:0.5 | G4:0.5 G4:0.5 E4 | C5:0.5 C5:0.5 F#4:0.5 F#4:0.5 | G4:0.5 R:0.5 G5`,
    chords: 'C C G G C C C.D G C C G G C C C.D G',
  },
  // Gott erhalte Franz den Kaiser (Emperor's Hymn, 1797) — the tune later used for "Das Lied der Deutschen", the German national anthem.
  //  Original G major, 4/4 with a half-bar upbeat - moved down a fifth to C. Whole hymn with the repeats written out (A A B C C).
  //  Source: https://en.wikipedia.org/wiki/Gott_erhalte_Franz_den_Kaiser (LilyPond score)
  //  Cross-check: MU + 'HaydnFJ/Deutschlandlied/Deutschlandlied.ly' (C. F. Peters, 1915, SATB) — identical melody; chords from its bass.
  //  Public domain. Confidence: high.
  {
    id: 'gott-erhalte-franz-den-kaiser',
    country: 'at',
    themes: ['classical'],
    title: 'Gott erhalte Franz den Kaiser',
    titleEn: "Emperor's Hymn",
    composer: 'Haydn',
    aka: ['Kaiserhymne', 'Emperor Hymn', 'Austria', 'Das Lied der Deutschen', 'Deutschlandlied', 'Hob. XXVIa:43'],
    emoji: '👑',
    level: 'medium',
    bpm: 76,
    beatsPerBar: 4,
    pickup: 2,
    melody: `C4:1.5 D4:0.5 |
             E4 D4 F4 E4 | D4:0.5 B3:0.5 C4 A4 G4 | F4 E4 D4 E4:0.5 C4:0.5 | G4:2 C4:1.5 D4:0.5 |
             E4 D4 F4 E4 | D4:0.5 B3:0.5 C4 A4 G4 | F4 E4 D4 E4:0.5 C4:0.5 | G4:2 D4 E4 |
             D4:0.5 B3:0.5 G3 F4 E4 | D4:0.5 B3:0.5 G3 G4 F4 | E4:1.5 E4:0.5 F#4 F#4:0.5 G4:0.5 | G4:2 C5:1.5 B4:0.5 |
             B4:0.5 A4:0.5 G4 A4:1.5 G4:0.5 | G4:0.5 F4:0.5 E4 D4:1.5 E4:0.25 F4:0.25 | G4:0.5 A4:0.5 F4:0.5 D4:0.5 C4 D4:0.5 C4:0.5 | C4:2 C5:1.5 B4:0.5 |
             B4:0.5 A4:0.5 G4 A4:1.5 G4:0.5 | G4:0.5 F4:0.5 E4 D4:1.5 E4:0.25 F4:0.25 | G4:0.5 A4:0.5 F4:0.5 D4:0.5 C4 D4:0.5 C4:0.5 | C4:2`,
    chords: 'C.G G.F G.D G.C C.G G.F G.D G G G.C A.D G.C G.F C.G C.G C G.F C.G C.G C',
  },
  // Ode an die Freude (Symphony No. 9, Op. 125, finale) — the 16-bar theme, with Beethoven's syncopated entry in bar 12.
  //  Written in G major in the source, 4/4 - moved down a fifth to C (the symphony has it in D). The B tied from bar 12 into bar 13
  //  is written as a quarter in bar 12 and a quarter rest at the start of bar 13.
  //  Source: https://en.wikipedia.org/wiki/Ode_to_Joy (LilyPond score)
  //  Cross-check: MU + 'BeethovenLv/ode/ode.ly' (hymn setting) — same notes except the hymn evens out bar 12; chords from its bass.
  //  Public domain (Beethoven d. 1827). Confidence: high.
  {
    id: 'ode-an-die-freude',
    country: 'de',
    themes: ['classical', 'children'],
    title: 'Ode an die Freude',
    titleEn: 'Ode to Joy',
    composer: 'Beethoven',
    aka: ['Symphony No. 9', 'Op. 125', 'Freude, schöner Götterfunken'],
    emoji: '😊',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 4,
    melody: `E4 E4 F4 G4 | G4 F4 E4 D4 | C4 C4 D4 E4 | E4:1.5 D4:0.5 D4:2 |
             E4 E4 F4 G4 | G4 F4 E4 D4 | C4 C4 D4 E4 | D4:1.5 C4:0.5 C4:2 |
             D4 D4 E4 C4 | D4 E4:0.5 F4:0.5 E4 C4 | D4 E4:0.5 F4:0.5 E4 D4 | C4 D4 G3 E4 |
             R:1 E4 F4 G4 | G4 F4 E4 D4 | C4 C4 D4 E4 | D4:1.5 C4:0.5 C4:2`,
    chords: 'C Am.G C.G G C Am.G C.G G.C G G G.E Am.G C Am.F F.G G.C',
  },
  // Für Elise (Bagatelle WoO 59) — A section: sixteenth upbeat + bars 1–8 with the first-time ending.
  //  Original A minor, 3/8 - no transposition. Counted in eighths (3/8).
  //  Source: MU + 'BeethovenLv/WoO59/fur_Elise_WoO59/fur_Elise_WoO59.ly' (Breitkopf & Härtel 1888; converted mechanically)
  //  Cross-check: https://en.wikipedia.org/wiki/Für_Elise (LilyPond score, bars 1–5) — identical. Chords from the left hand.
  //  Public domain. Confidence: high.
  {
    id: 'fur-elise',
    country: 'de',
    themes: ['classical'],
    title: 'Für Elise',
    titleEn: 'Für Elise',
    composer: 'Beethoven',
    aka: ['WoO 59', 'Bagatelle No. 25', 'Fur Elise'],
    emoji: '🌹',
    level: 'medium',
    bpm: 160,
    beatsPerBar: 3,
    pickup: 1,
    melody: `E5:0.5 D#5:0.5 |
             E5:0.5 D#5:0.5 E5:0.5 B4:0.5 D5:0.5 C5:0.5 | A4 R:0.5 C4:0.5 E4:0.5 A4:0.5 | B4 R:0.5 E4:0.5 G#4:0.5 B4:0.5 | C5 R:0.5 E4:0.5 E5:0.5 D#5:0.5 |
             E5:0.5 D#5:0.5 E5:0.5 B4:0.5 D5:0.5 C5:0.5 | A4 R:0.5 C4:0.5 E4:0.5 A4:0.5 | B4 R:0.5 E4:0.5 C5:0.5 B4:0.5 | A4:2`,
    chords: 'E Am E Am E Am E Am',
  },
  // Mondscheinsonate (Piano Sonata No. 14, Op. 27 No. 2), 1st movement — the melody (top voice) of bars 5–15, starting on its upbeat in bar 5.
  //  Original C-sharp minor, 2/2 (counted here in quarters) - moved down a major third to A minor. The triplet accompaniment is not included,
  //  so bars 9–10 are mostly rests. Last bar shortened to balance the upbeat.
  //  Source: MU + 'BeethovenLv/O27/moonlight/moonlight-lys/moonlight1-a4.ly' (Berners 1908; "topmain" voice, converted mechanically); chords from "bottom".
  //  Cross-check: https://en.wikipedia.org/wiki/Piano_Sonata_No._14_(Beethoven) (LilyPond score of the opening) — same. Public domain. Confidence: high.
  {
    id: 'moonlight-sonata',
    country: 'de',
    themes: ['classical'],
    title: 'Mondscheinsonate',
    titleEn: 'Moonlight Sonata',
    composer: 'Beethoven',
    aka: ['Op. 27 No. 2', 'Piano Sonata No. 14', 'Sonata quasi una fantasia'],
    emoji: '🌕',
    level: 'medium',
    bpm: 56,
    beatsPerBar: 4,
    pickup: 1,
    melody: `E4:0.75 E4:0.25 |
             E4:3 E4:0.75 E4:0.25 | E4:2 F4:2 | E4:2 D4 G4 | C4 R:3 |
             R:3 Eb4:0.75 Eb4:0.25 | Eb4:3 Eb4:0.75 Eb4:0.25 | Eb4:3 D4 | D4:2 Eb4 C4 |
             D4:2 D4:2 | G3 R:2`,
    chords: 'E Am.Dm G C Cm Eb Ab.D Gm D G',
  },
  // 5. Sinfonie (Op. 67), 1st movement — the opening motif, bars 1–4 (first violins).
  //  Original C minor, 2/4 - no transposition. Bar 5 (the D tied on under a fermata) is left out; the D in bar 4 ends the piece.
  //  Source: MU + 'BeethovenLv/O67/Symphony5_1/Symphony5_1-lys/violinoone.ly'
  //  Cross-check: https://en.wikipedia.org/wiki/Symphony_No._5_(Beethoven) (LilyPond score of bars 1–5) — identical.
  //  Public domain. Confidence: high.
  {
    id: 'beethoven-5-opening',
    country: 'de',
    themes: ['classical'],
    title: '5. Sinfonie',
    titleEn: 'Symphony No. 5',
    composer: 'Beethoven',
    aka: ['Op. 67', 'Schicksalssinfonie', 'Fate Symphony', 'Symphony No. 5'],
    emoji: '🚪',
    level: 'easy',
    bpm: 108,
    beatsPerBar: 2,
    melody: `R:0.5 G4:0.5 G4:0.5 G4:0.5 | Eb4:2 | R:0.5 F4:0.5 F4:0.5 F4:0.5 | D4:2`,
    chords: 'Cm Cm G G',
  },
  // Tambourin (Pièces de clavecin, 1724) — right hand, half-bar upbeat + bars 1–8 (first strain).
  //  Original E minor, 2/2 (counted here in quarters) - moved down a fifth to A minor. Pralltriller (short trills) dropped.
  //  Source: MU + 'RameauJP/tambourin/tambourin.ly' (Durand 1895; Catalan note names, converted mechanically); chords from its E–B drone bass.
  //  Only one notated source used. Public domain (Rameau d. 1764). Confidence: high.
  {
    id: 'rameau-tambourin',
    country: 'fr',
    themes: ['classical'],
    title: 'Tambourin',
    titleEn: 'Tambourin',
    composer: 'Rameau',
    aka: ['Pièces de clavecin'],
    emoji: '🪘',
    level: 'medium',
    bpm: 120,
    beatsPerBar: 4,
    pickup: 2,
    melody: `A3:0.5 B3:0.5 C4:0.5 B3:0.5 |
             A3 E4 E4 D4 | C4 B3 A3:0.5 B3:0.5 C4:0.5 D4:0.5 | E4 A4 G#4 A4 | B4:2 A3:0.5 B3:0.5 C4:0.5 B3:0.5 |
             A3 E4 E4 D4 | C4 B3 A3:0.5 B3:0.5 C4:0.5 D4:0.5 | E4 A4 G#4:0.5 A4:0.5 B4:0.5 G#4:0.5 | A4:2`,
    chords: 'Am.E Am Am.E E.Am Am.E Am Am.E Am',
  },
];
