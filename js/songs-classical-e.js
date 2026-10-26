// Classical themes – Early Romantic: Schubert, Mendelssohn, Schumann, Chopin, Liszt, Rossini, Paganini, Weber, the Strauss family, Offenbach.
// Same format as songs-classical-a.js (composer shown on cards and searchable).
// Melodies are taken from public-domain editions; each entry names its source.
// Most were converted mechanically from the MIDI files that Mutopia renders from its LilyPond sources (exact, unquantised
// note values), checked against the LilyPond text for spelling, grace notes and voices, then transposed as stated.
// Only the top voice (melody) is kept; grace notes are left out and trills/turns become their main note.
// MU = https://www.mutopiaproject.org/ftp/   WP = an English Wikipedia article's LilyPond <score> example.
// OS = OpenScore Lieder corpus, https://github.com/OpenScore/Lieder (CC0), scores/<path>.

export const SONGS_CLASSICAL_E = [
  // Prélude Op. 28 No. 15 "Raindrop" (Chopin, 1839) — Original D-flat major, 4/4 - moved down a semitone to C.
  //  Bars 1–8 (the theme and its answer). The 7-note run at the end of bar 4 is kept as a septuplet (1/7 beat each);
  //  its D natural becomes C#. The grace note in bar 4 is dropped; the upbeat "c8 df" at the end of bar 8 is replaced by a rest.
  //  Source: MU + 'ChopinFF/O28/Chop-28-15/' (LilyPond sec1.ly + MIDI). Chords from its left hand. Public domain. Confidence: high.
  {
    id: 'chopin-raindrop-prelude',
    country: 'pl',
    themes: ['classical'],
    title: 'Prélude „Deszczowe”',
    titleEn: 'Raindrop Prelude',
    composer: 'Chopin',
    aka: ['Op. 28 No. 15', 'Raindrop', 'Prelude in D-flat major', 'Regentropfen-Prélude'],
    emoji: '🌧️',
    level: 'medium',
    bpm: 60,
    beatsPerBar: 4,
    melody: `E5:0.75 C5:0.25 G4:2 A4 | B4:3 C5 | D5:0.75 E5:0.25 F5:2 E5 |
             E5:1.5 D5:0.5 C5 D5:1/7 E5:1/7 D5:1/7 C#5:1/7 D5:1/7 E5:1/7 F5:1/7 |
             E5:0.75 C5:0.25 G4:2 A4 | B4:3 C5 | D5:0.75 E5:0.25 F5:2 E5 | E5:1.5 D5:0.5 C5 R:1`,
    chords: 'C G G G.C C G G G.C',
  },
  // Prélude Op. 28 No. 7 (Chopin, 1839) — Original A major, 3/4 with a quarter pickup - moved down a major sixth to C
  //  (so the top C#6 becomes E5). The whole prelude: pickup + 16 bars. Top voice; in bar 5 the tune passes to the inner
  //  voice (A#–B, here C#–D). The acciaccatura in bar 15 is dropped; last bar shortened to balance the pickup.
  //  Source: MU + 'ChopinFF/O28/Chop-28-7/' (LilyPond + MIDI). Chords from its left hand. Public domain. Confidence: high.
  {
    id: 'chopin-prelude-a-major',
    country: 'pl',
    themes: ['classical'],
    title: 'Prélude A-dur',
    titleEn: 'Prelude in A Major',
    composer: 'Chopin',
    aka: ['Op. 28 No. 7', 'Prelude No. 7', 'Andantino'],
    emoji: '🌼',
    level: 'easy',
    bpm: 72,
    beatsPerBar: 3,
    pickup: 1,
    melody: `G3 |
             E4:0.75 F4:0.25 D4 D4 | D4:2 A4 | F#4:0.75 G4:0.25 C5 C5 | C5:2 E4 |
             C#4:0.75 D4:0.25 F4 F4 | F4:2 B3 | B3:0.75 C4:0.25 E4 E4 | E4:2 G3 |
             E4:0.75 F4:0.25 D4 D4 | D4:2 A4 | F#4:0.75 G4:0.25 E5 E5 | E5:2 E4 |
             E4:0.75 F4:0.25 A4 A4 | A4:2 B3 | D4:0.75 C4:0.25 C5 C5 | C5:2`,
    chords: 'G G C C G G C C G G C A Dm G C C',
  },
  // Valse Op. 64 No. 1 "Minute Waltz" (Chopin, 1847) — Original D-flat major, 3/4 - moved down a tritone to G so the
  //  spinning figure sits at C#4–E5. Bars 1–20 (the whole first strain, which closes on the dominant). Prall trills
  //  in bars 10, 12, 18, 20 become their main note; the last eighth of bar 20 (E natural, leading on) is merged into the A.
  //  Source: MU + 'ChopinFF/O64/chopin_valse_op64_no1/' (LilyPond sec1.ly + MIDI). Chords from its left hand.
  //  Public domain. Confidence: high.
  {
    id: 'chopin-minute-waltz',
    country: 'pl',
    themes: ['classical'],
    title: 'Walc „Minutowy”',
    titleEn: 'Minute Waltz',
    composer: 'Chopin',
    aka: ['Op. 64 No. 1', 'Valse du petit chien', 'Waltz in D-flat major', 'Minutenwalzer'],
    emoji: '🐶',
    level: 'hard',
    bpm: 150,
    beatsPerBar: 3,
    melody: `D4 C#4:0.5 D4:0.5 F#4:0.5 E4:0.5 | C#4:0.5 D4:0.5 E4:0.5 D4:0.5 F#4:0.5 E4:0.5 |
             C#4:0.5 D4:0.5 F#4:0.5 E4:0.5 C#4:0.5 D4:0.5 | F#4:0.5 E4:0.5 C#4:0.5 D4:0.5 F#4:0.5 E4:0.5 |
             C#4:0.5 D4:0.5 F#4:0.5 E4:0.5 C#4:0.5 D4:0.5 | F#4:0.5 E4:0.5 C#4:0.5 D4:0.5 F#4:0.5 E4:0.5 |
             C#4:0.5 D4:0.5 F#4:0.5 E4:0.5 C#4:0.5 D4:0.5 | E4:0.5 F#4:0.5 G4:0.5 A4:0.5 B4:0.5 C5:0.5 |
             E5:1.5 D5:0.5 C5:0.5 B4:0.5 | B4:0.5 A4:0.5 A4:0.5 G#4:0.5 A4 |
             E5:1.5 D5:0.5 C5:0.5 B4:0.5 | B4:0.5 A4:0.5 G#4:0.5 A4:0.5 B4:0.5 E4:0.5 |
             C#4:0.5 D4:0.5 F#4:0.5 E4:0.5 C#4:0.5 D4:0.5 | F#4:0.5 E4:0.5 C#4:0.5 D4:0.5 F#4:0.5 E4:0.5 |
             C#4:0.5 D4:0.5 F#4:0.5 E4:0.5 C#4:0.5 D4:0.5 | E4:0.5 F#4:0.5 G4:0.5 A4:0.5 B4:0.5 C5:0.5 |
             E5:1.5 D5:0.5 C5:0.5 B4:0.5 | B4:0.5 A4:0.5 A4:0.5 G#4:0.5 A4 |
             E5:1.5 D5:0.5 C5:0.5 B4:0.5 | A4:0.5 B4:0.5 A4:0.5 G#4:0.5 A4`,
    chords: 'G G G G G G G G D D D D G G G G D D D D',
  },
  // Ständchen "Leise flehen meine Lieder", Schwanengesang D 957 No. 4 (Schubert, 1828) — voice part.
  //  Original D minor, 3/4 - moved down a fourth to A minor (A3–D5). Bars 5–8, 11–14 and 17–28 of the song: the two bars of
  //  piano echo after each of the first two phrases (9–10, 15–16) are left out.
  //  Source: OS 'Schubert,_Franz/Schwanengesang,_D.957/04_Ständchen/lc5004835.mxl' (MusicXML; converted mechanically).
  //  Chords from its piano part. Public domain. Confidence: high (single source).
  {
    id: 'schubert-standchen',
    country: 'at',
    themes: ['classical'],
    title: 'Ständchen',
    titleEn: 'Serenade (Schubert)',
    composer: 'Schubert',
    aka: ['Leise flehen meine Lieder', 'D 957 No. 4', 'Schwanengesang', 'Serenade', 'Szerenád'],
    emoji: '🌙',
    level: 'medium',
    bpm: 66,
    beatsPerBar: 3,
    melody: `E4:1/3 F4:1/3 E4:1/3 A4:1.5 E4:0.5 | D4:1/3 E4:1/3 D4:1/3 A4 D4:0.5 R:0.5 | E4:1.5 D4:0.5 D4:1/3 C4:1/3 B3:1/3 | C4:2 R:1 |
             E4:1/3 F4:1/3 E4:1/3 C5:1.5 E4:0.5 | D4:1/3 E4:1/3 D4:1/3 B4:1.5 A4:0.5 | G4:1.5 F4:0.5 F4:1/3 E4:1/3 D4:1/3 | E4:2 R:1 |
             E4:0.75 G#4:0.25 C5:1.5 B4:0.5 | A4:0.75 E4:0.25 C4:1.5 A3:0.5 | F4:1/3 E4:1/3 F4:1/3 A4:1.5 F4:0.5 | E4:3 |
             D4:1/3 C#4:1/3 D4:1/3 F4:1.5 D4:0.5 | C4:3 |
             E4:0.75 G#4:0.25 C5:1.5 B4:0.5 | A4:0.75 E4:0.25 C#4:1.5 A3:0.5 | F#4:1/3 E#4:1/3 F#4:1/3 A4:1.5 F#4:0.5 | E4:3 |
             B4:1/3 A#4:1/3 B4:1/3 D5:1.5 G#4:0.5 | A4:3`,
    chords: 'Am Dm E Am Am Dm G C E Am F C G C E A D A E A',
  },
  // Valse Op. 64 No. 2 (Chopin, 1847) — Original C-sharp minor, 3/4 with a quarter pickup - moved up a minor third to
  //  E minor (B3–G5). The opening theme: pickup + bars 1–8, then bars 25–32 (bars 17–24 repeat 1–8 note for note, so
  //  this is the theme with its second, closing ending). The G# tied from bar 25 into 26 (here B, bar 9→10) is written
  //  as note + rest. Last bar shortened to balance the pickup.
  //  Source: Chopin First Editions (Fryderyk Chopin Institute, CC BY 4.0), https://github.com/pl-wnifc/humdrum-chopin-first-editions
  //  kern/064_2-1-BR-002.krn (Humdrum **kern; converted mechanically). Chords from its left hand. Public domain music.
  //  Confidence: high (single source).
  {
    id: 'chopin-waltz-c-sharp-minor',
    country: 'pl',
    themes: ['classical'],
    title: 'Walc cis-moll',
    titleEn: 'Waltz in C-sharp Minor',
    composer: 'Chopin',
    aka: ['Op. 64 No. 2', 'Valse', 'Walzer cis-Moll'],
    emoji: '🍂',
    level: 'medium',
    bpm: 132,
    beatsPerBar: 3,
    pickup: 1,
    melody: `B4 |
             G5:3 | F#5:3 | R:0.5 B4:0.5 C5:0.5 R:0.25 B4:0.25 F#5 | R:0.5 B4:0.5 C5:0.5 R:0.25 B4:0.25 E5 |
             E5:3 | D#5:3 | R:0.5 G4:0.5 A4:0.5 R:0.25 G4:0.25 D5 | R:0.5 G4:0.5 A4:0.5 R:0.25 G4:0.25 C5 |
             C5:2 B4 | R:0.5 C#5:0.5 C#5:0.5 D5:0.5 D5:0.5 D#5:0.5 | F#5:2 E5 | E5:0.5 A4:0.5 A4:0.5 B4:0.5 B4:0.5 C5:0.5 |
             E5:2 D5 | D5:0.5 C5:0.5 B4:0.5 A4:0.5 G4:0.5 A4:0.5 | A#4:0.5 B4:0.5 B3:0.5 G4:0.5 G4:0.5 F#4:0.5 | E4 R:1`,
    chords: 'Em B B Em C B G C B E A D G Am B Em',
  },
  // Valse Op. 69 No. 1 "L'adieu" (Chopin, 1835; published 1855) — Original A-flat major, 3/4 with an eighth-pair pickup -
  //  moved down a minor sixth to C (F#3–D5). Bars 1–16 (the first theme). The C tied from bar 8 into 9 is written as note + rest;
  //  the quintuplet turn in bar 11 is kept (1/5 beat each). Last bar shortened to balance the pickup.
  //  Source: Chopin First Editions (Fryderyk Chopin Institute, CC BY 4.0), https://github.com/pl-wnifc/humdrum-chopin-first-editions
  //  kern/069-1a-Sam-001.krn (first edition, Schlesinger 1855; converted mechanically). Chords from its left hand.
  //  Public domain music. Confidence: high (single source).
  {
    id: 'chopin-waltz-op69-1',
    country: 'pl',
    themes: ['classical'],
    title: 'Walc As-dur „Pożegnalny”',
    titleEn: 'Farewell Waltz',
    composer: 'Chopin',
    aka: ['Op. 69 No. 1', "L'adieu", 'Waltz in A-flat major', 'Abschiedswalzer'],
    emoji: '👋',
    level: 'hard',
    bpm: 100,
    beatsPerBar: 3,
    pickup: 1,
    melody: `G4:0.5 F#4:0.5 |
             F4:1/3 G4:1/3 F4:1/3 E4:0.5 F4:0.5 A4:0.5 G4:0.5 | F4:2 E4 | R:1 C#4:0.5 D4:0.5 E4:1/3 G4:1/3 F4:1/3 | E4:2 D4 |
             D4:1.5 C4:0.5 C4:1/3 B3:1/3 A3:1/3 | A3:2 G3 | R:1 B4:0.5 A4:0.5 G4:0.5 F4:0.5 | D#4:2 E4 |
             R:0.5 F4:0.5 D5:0.5 C5:0.5 A4:0.5 F4:0.5 | F4:2 E4 |
             C#4:1/5 D4:1/5 C4:1/5 B#3:1/5 C4:1/5 E4:1/3 G4:1/3 A4:1/3 Bb4:0.75 C4:0.25 | E4:2 D4 |
             D4:1.5 C4:0.5 C4:1/3 B3:1/3 A3:1/3 | A3:2 G3 | G3:1/3 A3:1/3 G3:1/3 F#3:0.5 G3:0.5 F4:0.5 E4:0.5 | C4:2`,
    chords: 'F E A Dm D C G C F E C Dm D C G C',
  },
  // Marche funèbre, Piano Sonata No. 2 Op. 35, 3rd movement (Chopin, 1837/1839) — Original B-flat minor, 4/4 - moved up a
  //  major third to D minor (D4–D5). Bars 3–10 (the theme over the tolling bass). The first edition writes bar 4 as
  //  "c8. bb16 bb8. bb16 bb2" (some later editions have an A in the second dotted pair).
  //  Source: Chopin First Editions (Fryderyk Chopin Institute, CC BY 4.0), https://github.com/pl-wnifc/humdrum-chopin-first-editions
  //  kern/035-1b-BH-003.krn (converted mechanically). The left hand alternates B-flat minor and G-flat chords;
  //  simplified to the tonic. Public domain music. Confidence: high.
  {
    id: 'chopin-funeral-march',
    country: 'pl',
    themes: ['classical'],
    title: 'Marsz żałobny',
    titleEn: 'Funeral March',
    composer: 'Chopin',
    aka: ['Piano Sonata No. 2', 'Op. 35', 'Marche funèbre', 'Trauermarsch'],
    emoji: '🕯️',
    level: 'easy',
    bpm: 60,
    beatsPerBar: 4,
    melody: `D4 D4:0.75 D4:0.25 D4 F4:0.75 E4:0.25 | E4:0.75 D4:0.25 D4:0.75 D4:0.25 D4:2 |
             F4 F4:0.75 F4:0.25 F4 A4:0.75 G4:0.25 | G4:0.75 F4:0.25 F4:0.75 F4:0.25 F4:2 |
             D5:0.75 C5:0.25 Bb4:0.75 A4:0.25 A4 F4 | D5:0.75 C5:0.25 Bb4:0.75 A4:0.25 A4 F4 |
             D4 D4:0.75 D4:0.25 D4 F4:0.75 E4:0.25 | E4:0.75 D4:0.25 D4:0.75 D4:0.25 D4:2`,
    chords: 'Dm Dm Dm Dm Dm Dm Dm Dm',
  },
  // Étude Op. 10 No. 3 "Tristesse" (Chopin, 1832) — Original E major, 2/4 with an eighth pickup - moved down a major third
  //  to C (G3–E5). Top voice of the right hand, pickup + bars 1–21 (the whole opening section, up to its cadence).
  //  Notes tied over a bar line are written as note + rest (bars 1–3, 4–5, 7–8, 9–13); the grace note in bars 7–8 is dropped.
  //  Last bar shortened to balance the pickup.
  //  Source: Chopin First Editions (Fryderyk Chopin Institute, CC BY 4.0), https://github.com/pl-wnifc/humdrum-chopin-first-editions
  //  kern/010_1-6-1b-KI-003.krn (converted mechanically, upper voice only). Chords from its left hand.
  //  Public domain music. Confidence: high (single source).
  {
    id: 'chopin-tristesse',
    country: 'pl',
    themes: ['classical'],
    title: 'Etiuda E-dur „Tristesse”',
    titleEn: 'Tristesse (Étude in E Major)',
    composer: 'Chopin',
    aka: ['Op. 10 No. 3', 'Tristesse', 'Étude in E major', 'So deep is the night'],
    emoji: '🌫️',
    level: 'hard',
    bpm: 50,
    beatsPerBar: 2,
    pickup: 0.5,
    melody: `G3:0.5 |
             C4:0.5 B3:0.25 C4:0.25 D4 | R:0.25 E4:0.25 E4:0.25 D4:0.25 E4 | R:0.25 F4:0.25 F4:0.25 E4:0.25 A4:0.75 G4:0.25 |
             F4:0.25 E4:0.25 B3:0.25 C4:0.25 D4 | R:0.25 E4:0.25 E4:0.25 D4:0.25 C4 |
             E4:0.25 F4:0.25 D4:0.25 E4:0.25 F4:0.25 G4:0.25 E4:0.25 F4:0.25 | A4:0.5 D4 E4:0.25 D4:0.25 | R:0.5 E4:0.25 D4:0.25 G4 |
             E4:0.5 B3:0.25 C4:0.25 D4 | R:0.25 E4:0.25 E4:0.25 D4:0.25 E4 | R:0.25 F4:0.25 F4:0.25 E4:0.25 A4:0.75 G4:0.25 |
             F4:0.25 E4:0.25 B3:0.25 C4:0.25 D4 | R:0.25 E4:0.25 E4:0.25 D4:0.25 C4 |
             G4:0.25 A4:0.25 A4:0.25 G4:0.25 F4:0.25 G4:0.25 E4:0.25 F4:0.25 |
             B4:0.25 C5:0.25 C5:0.25 B4:0.25 A4:0.25 B4:0.25 G#4:0.25 A4:0.25 |
             C5:0.25 D5:0.25 B4:0.25 C5:0.25 D5:0.25 E5:0.25 C5:0.25 D5:0.25 |
             E5:1.25 D5:0.25 C5:0.25 A4:0.25 | B4 C5:0.25 B4:0.25 A4:0.25 E4:0.25 | G4 A4:0.25 G4:0.25 F4:0.25 C4:0.25 | E4:2 | C4:1.5`,
    chords: 'C.G G.C C.G C.G G.C C.F Dm.G D.G C.G G.C C.G C.G G.C C.F E.Am D C G.Am Em.F C C',
  },
  // Moment musical No. 3 "Air russe", D 780 (Schubert, 1823) — Original F minor, 2/4 - moved down a minor sixth to A minor
  //  (B3–D5). Bars 3–10 (the theme, after the two bars of left-hand introduction) and 19–26 (the answer in the relative
  //  major, here C). Grace notes and appoggiaturas dropped; top note of the right-hand chords. Bars 11–18 repeat 3–10.
  //  Source: MU + 'SchubertF/D780/MomentsNo3/' (LilyPond + MIDI). Chords from its left hand. Public domain. Confidence: high.
  {
    id: 'schubert-moment-musical-3',
    country: 'at',
    themes: ['classical'],
    title: 'Moment musical Nr. 3',
    titleEn: 'Moment Musical No. 3',
    composer: 'Schubert',
    aka: ['D 780 No. 3', 'Op. 94 No. 3', 'Air russe', 'Moments musicaux'],
    emoji: '🪆',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 2,
    melody: `C4:0.5 C4:0.25 D4:0.25 C4:0.5 B3:0.5 | E4 E4 | C4:0.5 C4:0.25 D4:0.25 C4:0.5 E4:0.5 | A4 A4 |
             A4:0.5 A4:0.25 Bb4:0.25 A4:0.5 A4:0.5 | A4:0.5 D5:0.25 R:0.25 A4 |
             E4:0.25 D4:0.25 C4:0.25 D4:0.25 E4:0.25 F4:0.25 E4:0.25 G#4:0.25 | A4 A4 |
             E4 E4 | E4:0.25 F4:0.25 G4:0.25 F4:0.25 F4:0.75 E4:0.25 | D4:0.5 D4:0.5 E4:0.25 D4:0.25 C4:0.25 D4:0.25 | D4 E4 |
             C5 C5 | B4:0.25 A4:0.25 G#4:0.25 A4:0.25 A4 | A4:0.25 G4:0.25 G4 G4:0.5 | G4 G4`,
    chords: 'Am Am Am Am F.A Dm.Am E Am C G G C C F G C',
  },
  // Caprice No. 24, Op. 1 (Paganini, c. 1817) — the Tema. Original A minor, 2/4 - moved down a fifth to D minor (A3–Eb5).
  //  Bars 1–4 written out twice (the repeat), then bars 5–12. The last eighth, an octave drop (a,8), is left out.
  //  In bar 11 the edition has f (here Bb3) a sixth below the line before it; kept as printed.
  //  Source: MU + 'PaganiniN/O1/Caprice_24/' (LilyPond + MIDI). Unaccompanied violin: chords are the implied harmony.
  //  Public domain. Confidence: medium-high (single source).
  {
    id: 'paganini-caprice-24',
    country: 'it',
    themes: ['classical'],
    title: 'Capriccio n. 24',
    titleEn: 'Caprice No. 24',
    composer: 'Paganini',
    aka: ['Op. 1 No. 24', '24 Caprices', 'Tema con variazioni', 'Caprice in A minor'],
    emoji: '🎻',
    level: 'medium',
    bpm: 84,
    beatsPerBar: 2,
    melody: `D4:0.5 R:0.25 D4:0.25 D4:0.25 F4:0.25 E4:0.25 D4:0.25 | A4:0.5 R:0.25 A3:0.25 A3:0.25 C#4:0.25 B3:0.25 A3:0.25 |
             D4:0.5 R:0.25 D4:0.25 D4:0.25 F4:0.25 E4:0.25 D4:0.25 | A4 A3:0.5 R:0.5 |
             D4:0.5 R:0.25 D4:0.25 D4:0.25 F4:0.25 E4:0.25 D4:0.25 | A4:0.5 R:0.25 A3:0.25 A3:0.25 C#4:0.25 B3:0.25 A3:0.25 |
             D4:0.5 R:0.25 D4:0.25 D4:0.25 F4:0.25 E4:0.25 D4:0.25 | A4 A3:0.5 R:0.5 |
             D5:0.5 R:0.25 D5:0.25 D5:0.25 Eb5:0.25 D5:0.25 C5:0.25 | Bb4:0.5 R:0.25 G4:0.25 G4:0.25 Bb4:0.25 A4:0.25 G4:0.25 |
             C5:0.5 R:0.25 C5:0.25 C5:0.25 D5:0.25 C5:0.25 Bb4:0.25 | A4:0.5 R:0.25 F4:0.25 F4:0.25 A4:0.25 G4:0.25 F4:0.25 |
             Bb4:0.5 R:0.25 E4:0.25 E4:0.25 G4:0.25 F4:0.25 E4:0.25 | A4:0.5 R:0.25 D4:0.25 D4:0.25 F4:0.25 E4:0.25 D4:0.25 |
             Bb3:0.5 R:0.25 G#4:0.25 A3:0.25 A4:0.25 G4:0.25 E4:0.25 | D4 R:1`,
    chords: 'Dm A Dm A Dm A Dm A D Gm C F Bb Dm A Dm',
  },
  // Melodie, Album für die Jugend Op. 68 No. 1 (Schumann, 1848) — Original C major, 4/4 - moved down an octave (G3–A4).
  //  Bars 1–16 (the whole piece without its repeat). Top voice.
  //  Source: MU + 'SchumannR/O68/schumann-op68-01-melodie/' (LilyPond + MIDI). Chords from its left hand.
  //  Public domain. Confidence: high.
  {
    id: 'schumann-melodie',
    country: 'de',
    themes: ['classical', 'children'],
    title: 'Melodie',
    titleEn: 'Melody (Album for the Young)',
    composer: 'Schumann',
    aka: ['Op. 68 No. 1', 'Album für die Jugend', 'Album for the Young', 'Mélodie'],
    emoji: '🎼',
    level: 'easy',
    bpm: 84,
    beatsPerBar: 4,
    melody: `E4 D4 C4 B3 | A3:0.5 C4:0.5 B3:0.5 D4:0.5 C4 G3 | G4 F4 E4 C4 | B3 A3 G3 R:1 |
             E4 D4 C4 B3 | A3:0.5 C4:0.5 B3:0.5 D4:0.5 C4 G3 | G4 F4 E4 C4 | B3 A3 G3 R:1 |
             D4 C4 B3 R:1 | F4 E4 D4 R:1 | A4 G4 F4 E4 | D4:0.5 F4:0.5 E4:0.5 G4:0.5 F4:0.5 C4:0.5 B3:0.5 D4:0.5 |
             E4 D4 C4 B3 | A3:0.5 C4:0.5 B3:0.5 D4:0.5 C4 G3 | A4 G4 F4 E4 | D4:0.5 F4:0.5 B3:0.5 D4:0.5 C4 R:1`,
    chords: 'C Dm.C G.C D.G C Dm.C G.C D.G C.G C.G C.F G C Dm.C F.C G.C',
  },
  // Wilder Reiter, Album für die Jugend Op. 68 No. 8 (Schumann, 1848) — Original A minor, 6/8 with an eighth pickup.
  //  Bars 1–8 (the A-minor theme; the middle section has the tune in the left hand). Last bar shortened to balance the pickup.
  //  Source: MU + 'SchumannR/O68/schumann-op68-08-cavalier-sauvage/' (LilyPond + MIDI). Chords from its left hand.
  //  Public domain. Confidence: high.
  {
    id: 'schumann-wilder-reiter',
    country: 'de',
    themes: ['classical', 'children'],
    title: 'Wilder Reiter',
    titleEn: 'The Wild Horseman',
    composer: 'Schumann',
    aka: ['Op. 68 No. 8', 'Album für die Jugend', 'Wild Rider', 'Cavalier sauvage'],
    emoji: '🐎',
    level: 'easy',
    bpm: 200,
    beatsPerBar: 6,
    pickup: 1,
    melody: `E4 |
             A4 E4 A4 C5 A4 C5 | E5 C5 F5 E5 C5 A4 | B4 G#4 C5 B4 G#4 E4 | A4 E4 C5 B4 R:1 E4 |
             A4 E4 A4 C5 A4 C5 | E5 C5 F5 E5 C5 A4 | B4 G#4 C5 B4 G#4 E4 | A4 E4 G#4 A4 R:1`,
    chords: 'Am Am E Am.E Am Am E Am',
  },
  // Soldatenmarsch, Album für die Jugend Op. 68 No. 2 (Schumann, 1848) — Original G major, 2/4. Bars 1–8 (the opening
  //  strain; staccato quarters written as eighth + eighth rest, as in the edition). The middle part passes the tune to the left hand.
  //  Source: MU + 'SchumannR/O68/schumann-op68-02-marche-militaire/' (LilyPond + MIDI). Chords from its left hand.
  //  Public domain. Confidence: high.
  {
    id: 'schumann-soldatenmarsch',
    country: 'de',
    themes: ['classical', 'children'],
    title: 'Soldatenmarsch',
    titleEn: "Soldiers' March",
    composer: 'Schumann',
    aka: ['Op. 68 No. 2', 'Album für die Jugend', 'Marche militaire', 'Soldiers March'],
    emoji: '💂',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `B4:0.75 C5:0.25 D5:0.5 R:0.5 | E5:0.5 R:0.5 D5:0.5 R:0.5 | C5:0.5 R:0.5 B4:0.5 R:0.5 | A4:0.5 R:0.5 G4:0.5 R:0.5 |
             B4:0.75 C5:0.25 D5:0.5 R:0.5 | E5:0.5 R:0.5 D5:0.5 R:0.5 | G5:0.5 R:0.5 F#5:0.5 R:0.5 | E5:0.5 R:0.5 D5:0.5 R:0.5`,
    chords: 'G C D.G D.G G C A D',
  },
  // Von fremden Ländern und Menschen, Kinderszenen Op. 15 No. 1 (Schumann, 1838) — Original G major, 2/4 (F#4–G5).
  //  The tune (the upper voice over the triplet accompaniment), bars 1–22: the whole piece without repeats.
  //  Source: MU + 'SchumannR/O15/SchumannOp15No01/' (LilyPond "viola" voice + MIDI). Chords from its bass line.
  //  Public domain. Confidence: high.
  {
    id: 'schumann-von-fremden-landern',
    country: 'de',
    themes: ['classical', 'children'],
    title: 'Von fremden Ländern und Menschen',
    titleEn: 'Of Foreign Lands and Peoples',
    composer: 'Schumann',
    aka: ['Kinderszenen', 'Op. 15 No. 1', 'Scenes from Childhood', 'About Strange Lands and People'],
    emoji: '🗺️',
    level: 'easy',
    bpm: 66,
    beatsPerBar: 2,
    melody: `B4 G5 | F#5:0.75 E5:0.25 D5 | B4 G5 | F#5:0.75 E5:0.25 D5 | B4 G5 | E5:0.75 D5:0.25 C5 | A4 D5 | B4:2 |
             B4 C5 | A4 B4 | G4 A4 | F#4 G4 | E4 F#4 | G4:0.75 A4:0.25 B4:0.75 C5:0.25 |
             D5 G5 | F#5:0.75 E5:0.25 D5 | B4 G5 | F#5:0.75 E5:0.25 D5 | B4 G5 | E5:0.75 D5:0.25 C5 | A4 D5 | B4:2`,
    chords: 'G D G D G C D G Em.Am D.G C.D B.G C D G D G D G C D G',
  },
  // Die Forelle, D 550 (Schubert, 1817) — voice part, first stanza (eighth pickup + bars 1–20). Original D-flat major, 2/4 -
  //  moved down a semitone to C (F#4–F5). Strophic: where the stanzas differ in rhythm (bars 2 and 5), the first stanza is used.
  //  Source: MU + 'SchubertF/D550/forelle/' (LilyPond melody.ly + MIDI). Cross-check: OS 'Schubert,_Franz/_/Die_Forelle,_Op.32,_D550d'
  //  (MusicXML) — same pitches; it underlays a later stanza in bars 2 and 5. Chords from the OS piano part.
  //  Last bar shortened to balance the pickup. Public domain. Confidence: high.
  {
    id: 'schubert-die-forelle',
    country: 'at',
    themes: ['classical', 'children'],
    title: 'Die Forelle',
    titleEn: 'The Trout',
    composer: 'Schubert',
    aka: ['D 550', 'Op. 32', 'The Trout', 'In einem Bächlein helle', 'A pisztráng'],
    emoji: '🐟',
    level: 'medium',
    bpm: 80,
    beatsPerBar: 2,
    pickup: 0.5,
    melody: `G4:0.5 |
             C5:0.5 C5:0.5 E5:0.5 E5:0.5 | C5 G4:0.5 G4:0.5 | G4:0.75 G4:0.25 D5:0.25 C5:0.25 B4:0.25 A4:0.25 | G4 R:0.5 G4:0.5 |
             C5:0.5 C5:0.5 E5:0.5 E5:0.5 | C5 G4:0.5 C5:0.5 | B4:0.5 A4:0.25 B4:0.25 C5:0.5 F#4:0.5 | G4 R:0.5 G4:0.5 |
             B4:0.5 B4:0.5 C5:0.25 B4:0.25 A4:0.25 B4:0.25 | C5 G4:0.5 C5:0.5 | B4:0.5 B4:0.5 B4:0.25 F5:0.25 D5:0.25 B4:0.25 | C5:1.5 C5:0.5 |
             A4:0.5 A4:0.5 A4:0.5 C5:0.5 | C5 G4:0.5 G4:0.5 | G4:0.75 G4:0.25 D5:0.5 B4:0.5 | C5:1.5 C5:0.5 |
             B4:0.25 A4:0.25 A4:0.5 A4:0.25 C5:0.25 B4:0.25 D5:0.25 | C5 G4:0.5 G4:0.5 | G4:0.75 G4:0.25 D5:0.5 B4:0.5 | C5 R:0.5`,
    chords: 'C C G G C C D G G C G C F C G C F C G C',
  },
  // Der Lindenbaum, Winterreise D 911 No. 5 (Schubert, 1827) — voice part, bars 9–24 with the eighth pickup (the first
  //  stanza, "Am Brunnen vor dem Tore"). Original E major, 3/4 - moved down a major third to C (C4–C5).
  //  Last bar shortened to balance the pickup.
  //  Source: OS 'Schubert,_Franz/Winterreise,_D.911/05_Der_Lindenbaum/lc5016466.mxl' (MusicXML; converted mechanically).
  //  Cross-check: music21 corpus 'schubert/Lindenbaum.xml' — identical. Chords from the OS piano part.
  //  Public domain. Confidence: high.
  {
    id: 'schubert-der-lindenbaum',
    country: 'at',
    themes: ['classical'],
    title: 'Der Lindenbaum',
    titleEn: 'The Linden Tree',
    composer: 'Schubert',
    aka: ['Am Brunnen vor dem Tore', 'Winterreise', 'D 911 No. 5', 'The Lime Tree'],
    emoji: '🌳',
    level: 'easy',
    bpm: 72,
    beatsPerBar: 3,
    pickup: 0.5,
    melody: `G4:0.5 |
             G4:1.5 E4:0.5 E4:0.5 E4:0.5 | E4 C4 R:0.5 C4:0.5 | D4:1.5 E4:0.5 F4:1/3 E4:1/3 D4:1/3 | C4:2 R:0.5 G4:0.5 |
             G4:1.5 E4:0.5 E4:0.5 E4:0.5 | E4 C4 R:0.5 C4:0.5 | D4:1.5 E4:0.5 F4:1/3 E4:1/3 D4:1/3 | C4:2 R:0.5 C4:0.5 |
             D4:1.5 D4:0.5 D4:0.5 D4:0.5 | E4:0.75 F4:0.25 G4:1.5 G4:0.5 | A4:1.5 G4:0.5 E4:0.5 C4:0.5 | D4:2 R:0.5 D4:0.5 |
             D4:1.5 D4:0.5 D4:0.5 D4:0.5 | E4:0.75 F4:0.25 G4 R:0.5 G4:0.5 | C5 G4:0.5 E4:0.5 F4:0.75 D4:0.25 | C4:2 R:0.5`,
    chords: 'C C G C.G C C G C D.G C F.C G D.G C C.G C',
  },
  // Wiegenlied "Schlafe, schlafe, holder süßer Knabe", D 498 (Schubert, 1816) — voice part, bars 1–8 (one stanza).
  //  Original A-flat major, 4/4 - moved down a minor sixth to C (G3–G4). The grace note in bar 6 is dropped.
  //  Source: MU + 'SchubertF/D498/schubert_wiegen_lied/' (LilyPond + MIDI). Chords from its piano part.
  //  Public domain. Confidence: high (single source).
  {
    id: 'schubert-wiegenlied',
    country: 'at',
    themes: ['classical', 'lullaby'],
    title: 'Wiegenlied',
    titleEn: "Schubert's Lullaby",
    composer: 'Schubert',
    aka: ['D 498', 'Schlafe, schlafe, holder süßer Knabe', 'Cradle Song', 'Op. 98 No. 2'],
    emoji: '👶',
    level: 'easy',
    bpm: 60,
    beatsPerBar: 4,
    melody: `E4 G4 D4:0.75 E4:0.25 F4 | E4:0.5 E4:0.5 D4:0.25 C4:0.25 B3:0.25 C4:0.25 D4 G3 |
             E4 G4 D4:0.75 E4:0.25 F4 | E4:0.5 E4:0.5 D4:0.25 E4:0.25 F4:0.25 D4:0.25 C4 R:1 |
             D4:1.5 D4:0.5 E4:0.75 D4:0.25 C4 | G4 F4:0.5 E4:0.5 D4 G3 |
             E4 G4 D4:0.75 E4:0.25 F4 | E4:0.5 E4:0.5 D4:0.25 E4:0.25 F4:0.25 D4:0.25 C4 R:1`,
    chords: 'C.G C.G C.G C G.C C.G C.G C',
  },
  // Forellenquintett (Piano Quintet in A, D 667), 4th movement: the Thema (Andantino) — the song "Die Forelle" as a string theme.
  //  Original D major, 2/4 with an eighth pickup - moved down a tone to C (F#4–E5). First violin, pickup + bars 1–8
  //  (the first half of the theme, ending on the dominant). Grace notes dropped; last bar shortened to balance the pickup.
  //  Source: WP 'Trout Quintet' (LilyPond score of the Thema, strings). Chords from its lower parts.
  //  Public domain. Confidence: medium-high (single source).
  {
    id: 'schubert-trout-quintet',
    country: 'at',
    themes: ['classical'],
    title: 'Forellenquintett',
    titleEn: 'Trout Quintet (Theme)',
    composer: 'Schubert',
    aka: ['D 667', 'Piano Quintet in A major', 'Trout Quintet', 'Andantino'],
    emoji: '🐠',
    level: 'medium',
    bpm: 66,
    beatsPerBar: 2,
    pickup: 0.5,
    melody: `G4:0.5 |
             C5:0.75 C5:0.25 E5:0.5 E5:0.5 | C5 G4 | G4:0.875 G4:0.125 D5:0.375 C5:0.125 B4:0.375 A4:0.125 | G4:1.5 G4:0.5 |
             C5:0.75 C5:0.25 E5:0.5 E5:0.5 | C5 G4:0.5 C5:0.5 | B4:0.5 A4:0.375 B4:0.125 C5:0.5 F#4:0.5 | G4:1.5`,
    chords: 'C C G G C C D.G G',
  },
  // Symphony No. 8 "Unfinished", D 759, 1st movement — the second theme (cellos, bars 44–53). Original G major, 3/4 -
  //  moved up an octave (D4–B4). The Wikipedia excerpt stops on the G of bar 53, which closes the line here.
  //  Source: WP 'Symphony No. 8 (Schubert)' (LilyPond score of the second theme). The excerpt has no accompaniment:
  //  chords are the implied harmony. Public domain. Confidence: medium (single source, excerpt).
  {
    id: 'schubert-unfinished-symphony',
    country: 'at',
    themes: ['classical'],
    title: 'Unvollendete',
    titleEn: 'Unfinished Symphony (Theme)',
    composer: 'Schubert',
    aka: ['Symphony No. 8', 'D 759', 'Unfinished Symphony', 'Sinfonie h-Moll'],
    emoji: '🎻',
    level: 'easy',
    bpm: 96,
    beatsPerBar: 3,
    melody: `G4 D4:1.5 G4:0.5 | F#4:0.75 G4:0.25 A4:1.5 G4:0.5 | F#4:0.75 G4:0.25 A4:0.5 D4:0.5 E4:0.5 F#4:0.5 | G4 D4:2 |
             G4 D4:1.5 G4:0.5 | G#4:0.75 A4:0.25 B4:1.5 A4:0.5 | G#4:0.75 A4:0.25 B4:0.5 E4:0.5 F#4:0.5 G#4:0.5 | A4 E4:1.5 G#4:0.5 |
             A4 D4 E4:0.5 F#4:0.5 | G4 R:2`,
    chords: 'G D D G G E E Am D G',
  },
  // Violin Concerto in E minor, Op. 64 (Mendelssohn, 1844), 1st movement — the solo violin's opening theme,
  //  half-bar pickup + bars 1–8. Original E minor, 2/2 (counted here in quarters) - moved down an octave and a fifth to
  //  A minor (C4–C5). The Wikipedia excerpt ends on the D# (here G#) of bar 8.
  //  Source: WP 'Violin Concerto (Mendelssohn)' (LilyPond score of the opening theme). No accompaniment in the excerpt:
  //  chords are the implied harmony. Public domain. Confidence: medium-high (single source).
  {
    id: 'mendelssohn-violin-concerto',
    country: 'de',
    themes: ['classical'],
    title: 'Violinkonzert e-Moll',
    titleEn: 'Violin Concerto in E Minor',
    composer: 'Mendelssohn',
    aka: ['Op. 64', 'MWV O 14', 'Allegro molto appassionato', 'E minor concerto'],
    emoji: '🎻',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 4,
    pickup: 2,
    melody: `E4:1.5 E4:0.5 |
             E4:2 C4 A4 | A4:2 E4 C5 | B4 A4 F4 A4 | E4:3 E4 |
             F4 E4:0.5 D4:0.5 D4 D4 | A4:3 E4 | F4 E4:0.5 D4:0.5 D4 D4 | G#4:2`,
    chords: 'Am Am Dm Am Dm Am Dm E',
  },
  // Impromptu in B-flat, D 935 No. 3 (Op. 142 No. 3) (Schubert, 1827) — the Thema, which Schubert also used in his
  //  "Rosamunde" music. Original B-flat major, 2/2 (counted here in quarters) - moved up a tone and down an octave to C (G3–A4).
  //  Bars 1–8. Bars 5–8 are doubled an octave higher in the original; here they stay at the pitch of bars 1–4.
  //  Grace notes dropped; top voice.
  //  Source: MU + 'SchubertF/D935/SchubertF-D935-3-Impromptu/' (LilyPond + MIDI). Chords from its left hand.
  //  Public domain. Confidence: high.
  {
    id: 'schubert-rosamunde-impromptu',
    country: 'at',
    themes: ['classical'],
    title: 'Impromptu B-Dur (Rosamunde-Thema)',
    titleEn: 'Rosamunde Theme (Impromptu in B-flat)',
    composer: 'Schubert',
    aka: ['D 935 No. 3', 'Op. 142 No. 3', 'Rosamunde', 'Impromptu in B-flat major'],
    emoji: '🌹',
    level: 'easy',
    bpm: 80,
    beatsPerBar: 4,
    melody: `E4 E4:0.5 E4:0.5 C4 C4 | B3 B3:0.5 B3:0.5 F4:2 | E4 E4:0.5 E4:0.5 E4:0.5 A3:0.25 R:0.25 A3 |
             D4:0.5 C#4:0.25 D4:0.25 C#4:0.25 D4:0.25 E4:0.25 D4:0.25 G3:2 |
             E4 E4:0.5 E4:0.5 C4 C4 | B3 B3:0.5 B3:0.5 F4:2 | E4 E4:0.5 E4:0.5 A4 A4 | D4:1.5 G4:0.5 C4:2`,
    chords: 'C G C.Dm D.G C G C.D G.C',
  },
  // Marche militaire No. 1 in D, D 733 No. 1 (Schubert, c. 1818, piano duet) — the main theme, Primo part. Original D major,
  //  2/4 - moved to C: bars 1–8 down an octave and a tone (G3–C5), bars 9–16 (which the original plays an octave higher
  //  still) down two octaves and a tone (C4–B4). The upbeat sixteenths after bar 16 are left out.
  //  Source: MU + 'SchubertF/D733/SchubertF-D733-1-TroisMarches/' (LilyPond + MIDI, Primo upper staff).
  //  Chords from the Secondo. Public domain. Confidence: high.
  {
    id: 'schubert-marche-militaire',
    country: 'at',
    themes: ['classical', 'children'],
    title: 'Marche militaire Nr. 1',
    titleEn: 'Marche Militaire',
    composer: 'Schubert',
    aka: ['D 733 No. 1', 'Op. 51 No. 1', 'Military March', 'Trois marches militaires'],
    emoji: '🥁',
    level: 'medium',
    bpm: 112,
    beatsPerBar: 2,
    melody: `G4 F4:0.5 E4:0.5 | D4 E4:0.5 D4:0.5 | C4 D4:0.5 E4:0.5 | G3:0.75 A3:0.25 G3:0.5 R:0.5 |
             G4 F4:0.5 E4:0.5 | A4 G4:0.5 E4:0.5 | F4:0.5 G4:0.25 F4:0.25 E4:0.5 F4:0.25 E4:0.25 |
             D4:0.25 D4:0.25 E4:0.25 F4:0.25 G4:0.25 A4:0.25 B4:0.25 C5:0.25 |
             D4:0.5 D4:0.25 D4:0.25 C4:0.5 D4:0.5 | E4:0.5 F4:0.5 G4 | D4:0.5 E4:0.5 F4 | E4:0.5 D4:0.5 C4 |
             D4:0.5 D4:0.25 D4:0.25 C4:0.5 D4:0.5 | E4:0.5 F4:0.5 G4 | F#4:0.5 G4:0.5 A4:0.75 B4:0.25 | G4 R:1`,
    chords: 'C G C G C A Dm Dm G C G C G C D G',
  },
  // Consolation No. 3, S. 172 (Liszt, 1850) — Original D-flat major, 4/4 - moved down an octave and a semitone to C (A3–C5).
  //  The tune of bars 3 (last beat) – 11: its first two phrases. The upbeat at the end of bar 11 is left out; the last bar is
  //  shortened to balance the pickup.
  //  Source: MU + 'LisztF/S.172/liszt-consolation-no3/' (LilyPond + MIDI). The bass holds a D-flat (here C) pedal; chords simplified.
  //  Public domain. Confidence: medium-high (single source).
  {
    id: 'liszt-consolation-3',
    country: 'hu',
    themes: ['classical', 'lullaby'],
    title: 'Consolation No. 3',
    titleEn: 'Consolation No. 3',
    composer: 'Liszt',
    aka: ['S. 172 No. 3', 'Consolations', 'Lento placido', 'Vigasztalás'],
    emoji: '🕊️',
    level: 'medium',
    bpm: 60,
    beatsPerBar: 4,
    pickup: 1,
    melody: `E4 |
             E4:2 A3:0.5 B3:0.5 C4:0.5 E4:0.5 | E4:2.5 D4:0.5 E4:0.5 D4:0.5 | C4:3.25 E4:0.25 C4:0.25 A4:0.25 | G4 R:2 E4 |
             E4:2 A3:0.5 B3:0.5 C4:0.5 E4:0.5 | E4:2.5 D#4:0.5 G4:0.5 F#4:0.5 | E4:3.25 G4:0.25 E4:0.25 C5:0.25 | B4 R:2`,
    chords: 'C C C C C C.B Em Em',
  },
  // Unter Donner und Blitz, Polka schnell Op. 324 (Johann Strauss II, 1868) — the polka's first strain, bars 5–20
  //  (after the 4-bar introduction). Original G major, 2/4 - moved down a fifth to C (B3–F5). Top notes of the right-hand chords.
  //  The two sixteenths leading back at the end of bar 20 are replaced by a rest.
  //  Source: MU + 'StraussJJ/O324/blitz/' (piano edition; LilyPond + MIDI). Chords from its left hand.
  //  Public domain. Confidence: high.
  {
    id: 'strauss-thunder-and-lightning',
    country: 'at',
    themes: ['classical'],
    title: 'Unter Donner und Blitz',
    titleEn: 'Thunder and Lightning Polka',
    composer: 'J. Strauss II',
    aka: ['Op. 324', 'Thunder and Lightning', 'Polka schnell', 'Johann Strauss II'],
    emoji: '⚡',
    level: 'medium',
    bpm: 120,
    beatsPerBar: 2,
    melody: `F4 B3 | F4 B3 | A4:0.5 R:0.25 A4:0.25 A4:0.5 R:0.25 A4:0.25 | A4:1.5 B4:0.25 A4:0.25 |
             E4 C4 | E4 C4 | A4:0.5 R:0.25 A4:0.25 A4:0.5 R:0.25 A4:0.25 | A4:1.5 B4:0.25 A4:0.25 |
             F4 B4 | B4 F5 | B4:0.5 R:0.25 B4:0.25 B4:0.5 R:0.25 B4:0.25 | B4:1.25 A4:0.25 G4:0.25 F4:0.25 |
             E4 C5 | C5 E5 | C5:0.5 R:0.25 C5:0.25 C5:0.5 R:0.25 C5:0.25 | C5:1.5 R:0.5`,
    chords: 'G G G G C C Am Am G G G G C C C C',
  },
  // Venetianisches Gondellied, Lieder ohne Worte Op. 19 No. 6 (Mendelssohn, 1830) — Original G minor, 6/8 - moved down a
  //  fourth to D minor (A3–E5). The song tune from its upbeat (end of bar 7) to bar 17. The upbeat at the end of bar 17
  //  is left out; the last bar is shortened to balance the pickup.
  //  Source: MU + 'Mendelssohn-BartholdyF/O19/Lieder-ohne-Worte-Venetianisches-Gondellied-Op19-No6/' (LilyPond + MIDI).
  //  Chords from its left hand. Public domain. Confidence: high.
  {
    id: 'mendelssohn-venetian-boat-song',
    country: 'de',
    themes: ['classical', 'lullaby'],
    title: 'Venetianisches Gondellied',
    titleEn: 'Venetian Boat Song',
    composer: 'Mendelssohn',
    aka: ['Op. 19 No. 6', 'Lieder ohne Worte', 'Songs without Words', 'Gondola Song'],
    emoji: '🛶',
    level: 'medium',
    bpm: 150,
    beatsPerBar: 6,
    pickup: 1,
    melody: `A4 |
             G4:2 F4 E4:2 G4 | F4:2 E4 D4:2 A3 | Bb3:2 Bb3 Bb3:0.5 C4:0.5 D4 Bb3 | A3:5 A4 |
             G4:2 F4 E4:2 G4 | F4:2 E4 D4 D4 E4 | F4 G#4 A4 C5 B4 A4 | E5:2 C5 A4 R:1 E4 |
             F4 G#4 A4 C5 B4 A4 | A4:4 R:1`,
    chords: 'A Dm Gm Dm A Dm E Am E Am',
  },
];
