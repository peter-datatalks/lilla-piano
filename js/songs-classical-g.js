// Classical themes – Nationalist and Impressionist: Tchaikovsky, Dvořák, Grieg, Smetana, Rimsky-Korsakov, Borodin, Saint-Saëns, Fauré, Debussy, Satie, Ravel, Elgar, Rachmaninoff, Joplin, Albéniz.
// Same format as songs-classical-a.js (composer shown on cards and searchable).
// Melodies are taken from public-domain editions; each entry names its source.
// Mutopia pieces were converted mechanically from the MIDI files (pitches and durations, top voice only), checked against
// the LilyPond source, then transposed as stated. Scans were read by eye bar by bar. Grace notes and trills become the main note.
// Notes tied across a bar line are written as the note plus a rest in the next bar (mentioned where it happens).
// Every composer died more than 70 years ago and every work was published before 1930.
// MU = https://www.mutopiaproject.org/ftp/

export const SONGS_CLASSICAL_G = [
  // Vltava (Die Moldau, Má vlast No. 2, 1874; published 1880) — the river theme, 8 bars with upbeat.
  //  Original E minor, 6/8 - moved down a fifth to A minor (range E4–F5). Counted in eighths. The B tied inside bar 4 is one note.
  //  Source: LilyPond on https://en.wikipedia.org/wiki/Má_vlast (Vltava section). Only one notated source used. Chords simplified.
  //  Public domain (Smetana d. 1884). Confidence: high.
  {
    id: 'smetana-vltava',
    country: 'cz',
    themes: ['classical'],
    title: 'Vltava',
    titleEn: 'The Moldau',
    composer: 'Smetana',
    aka: ['Má vlast', 'My Country', 'Die Moldau', 'Moldau'],
    emoji: '🏞️',
    level: 'medium',
    bpm: 176,
    beatsPerBar: 6,
    pickup: 1,
    melody: `E4 |
             A4:2 B4 C5:2 D5 | E5:2 E5 E5:3 | F5:3 F5:3 | E5:5 E5 | D5:3 D5:2 D5 | C5:2 D5 C5:2 C5 | B4:3 B4:2 B4 | A4:2 R:3`,
    chords: 'Am Am F Am Dm C E Am',
  },
  // Шехеразада (Scheherazade, Op. 35, 1888), III "The Young Prince and the Young Princess" — violin theme, 8 bars with upbeat.
  //  Original G major, 6/8, kept. Counted in eighths. The grace notes in bar 7 are dropped; the B tied inside bar 2 is one note.
  //  Source: LilyPond on https://en.wikipedia.org/wiki/Scheherazade_(Rimsky-Korsakov) (third-movement theme).
  //  Only one notated source used. Chords simplified. Public domain (Rimsky-Korsakov d. 1908). Confidence: high.
  {
    id: 'rimsky-korsakov-scheherazade',
    country: 'ru',
    themes: ['classical'],
    title: 'Шехеразада',
    titleEn: 'Scheherazade (The Young Prince and Princess)',
    composer: 'Rimsky-Korsakov',
    aka: ['Scheherazade', 'Op. 35', 'The Young Prince and the Young Princess'],
    emoji: '👸',
    level: 'medium',
    bpm: 160,
    beatsPerBar: 6,
    pickup: 2,
    melody: `B4 C5 |
             D5:1.5 E5:0.5 D5 B4:1.5 A4:0.5 G4 | B4:4 B4 C5 | D5 E5:0.5 D5:0.5 E5:0.5 D5:0.5 C5:0.5 B4:0.5 C5:0.5 B4:0.5 A4:0.5 G4:0.5 | B4:3 E4 E4 G4 |
             A4:1.5 B4:0.5 A4 G4 F#4 G4 | E4:3 G4:2 F#4 | E4 F#4 G4 A4 G4:1.5 F#4:0.5 | G4:4`,
    chords: 'G G G Em Am.D Em Am.D G',
  },
  // Chanson de matin (Op. 15 No. 2, 1899) — the opening melody, 8 bars.
  //  Original G major, 2/4 - moved down a fifth to C. The long notes at the end of each half are tied over (note + rest bar).
  //  Source: LilyPond on https://en.wikipedia.org/wiki/Chanson_de_Matin. Only one notated source used. Chords simplified.
  //  Public domain (Elgar d. 1934; published 1899). Confidence: medium-high.
  {
    id: 'elgar-chanson-de-matin',
    country: 'gb',
    themes: ['classical'],
    title: 'Chanson de matin',
    titleEn: 'Morning Song',
    composer: 'Elgar',
    aka: ['Op. 15 No. 2', 'Chanson de Matin'],
    emoji: '🌄',
    level: 'easy',
    bpm: 80,
    beatsPerBar: 2,
    melody: `C5 C5 | C5:0.5 B4:0.5 A4:0.5 B4:0.25 C5:0.25 | G4:0.5 F4:0.5 D4 | R:2 |
             E5 E5 | E5:0.5 D5:0.5 C5:0.5 D5:0.25 E5:0.25 | C5:0.5 B4:0.5 G4 | R:2`,
    chords: 'C C G G C C G G',
  },
  // The Great Gate of Kiev (Pictures at an Exhibition, 1874; published 1886) — opening hymn, bars 1–8 (top voice of the chords).
  //  Original E-flat major, 2/2 - moved down a minor third to C; written in 4/4 (quarter = beat).
  //  Source: MU + 'MussorgskyM/pictures-at-an-exhibition/' (great-gate, LilyPond + MIDI, converted mechanically).
  //  Cross-check: https://en.wikipedia.org/wiki/Pictures_at_an_Exhibition (LilyPond, bars 1–8) — identical.
  //  Chords from the Mutopia left hand (simplified). Public domain (Mussorgsky d. 1881). Confidence: high.
  {
    id: 'mussorgsky-great-gate-of-kiev',
    country: 'ru',
    themes: ['classical'],
    title: 'Богатырские ворота',
    titleEn: 'The Great Gate of Kiev',
    composer: 'Mussorgsky',
    aka: ['Pictures at an Exhibition', 'The Bogatyr Gates', 'Great Gate of Kyiv'],
    emoji: '🏛️',
    level: 'easy',
    bpm: 112,
    beatsPerBar: 4,
    melody: `C5:4 | D5:4 | E5:2 C5 E5 | D5:2 G4:2 | E5 G5 D5 C5 | B4:2 G4:2 | E5 G5 D5 C5 | B4:2 G4:2`,
    chords: 'C G Am G C G.Em C G.Em',
  },
  // Largo (Symphony No. 9 "From the New World", Op. 95, 1893), 2nd movement — cor anglais solo, bars 7–18.
  //  Original D-flat major, 4/4 - moved down a semitone to C. Source: MU + 'DvorakA/O95/Sym9/' (Mvt2_Largo, LilyPond + MIDI,
  //  converted mechanically). Chords from the Mutopia string parts (simplified). Public domain (Dvořák d. 1904). Confidence: high.
  {
    id: 'dvorak-new-world-largo',
    country: 'cz',
    themes: ['classical', 'lullaby'],
    title: 'Largo (Z Nového světa)',
    titleEn: 'Largo (New World Symphony)',
    composer: 'Dvořák',
    aka: ['Going Home', 'From the New World', 'Symphony No. 9', 'Op. 95'],
    emoji: '🏡',
    level: 'easy',
    bpm: 56,
    beatsPerBar: 4,
    melody: `E4:0.75 G4:0.25 G4 E4:0.75 D4:0.25 C4 | D4:0.75 E4:0.25 G4:0.75 E4:0.25 D4:2 | E4:0.75 G4:0.25 G4 E4:0.75 D4:0.25 C4 | D4:0.5 E4:0.5 D4:0.75 C4:0.25 C4:2 |
             A4:0.75 C5:0.25 C5 B4:0.5 G4:0.5 A4 | A4:0.5 C5:0.5 B4:0.5 G4:0.5 A4:2 | A4:0.75 C5:0.25 C5 B4:0.5 G4:0.5 A4 | A4:0.5 C5:0.5 B4:0.5 G4:0.5 A4:2 |
             E4:0.75 G4:0.25 G4 E4:0.5 D4:0.5 C4 | D4:0.75 E4:0.25 G4:0.75 E4:0.25 D4:2 | E4:0.75 G4:0.25 G4 C5:0.75 D5:0.25 E5 | D5:0.75 C5:0.25 D5:0.5 A4:0.5 C5:2`,
    chords: 'C G C G.C F F F F C G C F.C',
  },
  // Danse napolitaine (Swan Lake, Op. 20, Act III) — the cornet tune, 8 bars (its second statement, which ends on the tonic).
  //  Moved to C, 2/4. Source: MU + 'TchaikovskyPI/dansenapolitaine/' (a public-domain Mutopia setting for trumpet and piano;
  //  the trumpet line is Tchaikovsky's melody; converted mechanically). Chords from its piano part (simplified).
  //  Only one notated source used. Public domain (Tchaikovsky d. 1893). Confidence: medium-high.
  {
    id: 'tchaikovsky-neapolitan-dance',
    country: 'ru',
    themes: ['classical'],
    title: 'Неаполитанский танец',
    titleEn: 'Neapolitan Dance (Swan Lake)',
    composer: 'Tchaikovsky',
    aka: ['Swan Lake', 'Danse napolitaine', 'Op. 20'],
    emoji: '🎺',
    level: 'medium',
    bpm: 80,
    beatsPerBar: 2,
    melody: `R:0.5 G4:0.25 A4:0.25 C5:0.25 B4:0.25 A4:0.25 G4:0.25 | B4:0.5 R:0.5 B4 | B4:0.5 A4:0.25 B4:0.25 C5:0.25 B4:0.25 A4:0.25 B4:0.25 | A4:0.5 R:0.5 G4 |
             G4:0.5 G4:0.25 G4:0.25 A4:0.25 G4:0.25 F4:0.25 E4:0.25 | G4:0.5 R:0.5 F4 | F4:0.5 F4:0.25 F4:0.25 G4:0.25 F4:0.25 E4:0.25 D4:0.25 | C4:2`,
    chords: 'C Dm G C C G G C',
  },
  // Bryllupsdag på Troldhaugen (Wedding Day at Troldhaugen, Lyric Pieces Op. 65 No. 6, 1896) — main march theme, bars 3–10 with upbeat.
  //  Original D major, 4/4 - moved down a major third to B-flat (in C the arpeggio would climb to A5).
  //  Source: MU + 'GriegE/O65/troldhaugen/' (LilyPond + MIDI, converted mechanically). Chords from its left hand (simplified).
  //  Public domain (Grieg d. 1907). Confidence: high.
  {
    id: 'grieg-wedding-day-at-troldhaugen',
    country: 'no',
    themes: ['classical'],
    title: 'Bryllupsdag på Troldhaugen',
    titleEn: 'Wedding Day at Troldhaugen',
    composer: 'Grieg',
    aka: ['Lyric Pieces', 'Op. 65 No. 6', 'Wedding Day'],
    emoji: '💒',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 4,
    pickup: 0.5,
    melody: `F4:0.25 G4:0.25 |
             D4:0.5 F4:0.5 Bb4:0.5 D5:0.5 C5:0.5 Bb4:0.5 D4:0.5 F4:0.5 | G4 G4:0.75 G4:0.25 G4 D4:0.5 E4:0.5 | F4:0.5 G4:0.5 D4:0.5 E4:0.5 F4:0.5 G4:0.5 D4:0.5 E4:0.5 | F4 F4:0.75 F4:0.25 F4 R:0.5 A4:0.25 Bb4:0.25 |
             G4:0.5 Bb4:0.5 Eb5:0.5 G5:0.5 F5:0.5 Eb5:0.5 G4:0.5 Bb4:0.5 | D5 D5:0.75 D5:0.25 D5 G4:0.5 A4:0.5 | Bb4:0.5 C5:0.5 G4:0.5 A4:0.5 Bb4:0.5 C5:0.5 G4:0.5 A4:0.5 | Bb4 Bb4:0.75 Bb4:0.25 Bb4 R:0.5`,
    chords: 'Bb Bb Gm.C F Eb Cm F Bb',
  },
  // Anitras dans (Anitra's Dance, Peer Gynt Suite No. 1, Op. 46 No. 3) — first violins, bars 6–18 (upbeat and the whole first strain).
  //  Original A minor, 3/4 (Tempo di mazurka). Acciaccaturas dropped. Range B3–A5 (two high As in bars 2–3).
  //  Source: MU + 'GriegE/O46/03-anitrasdance/' (violiniI.ly, converted from the MIDI and corrected against the .ly where the
  //  MIDI shifts the grace notes). Chords from the Mutopia string parts (simplified). Public domain (Grieg d. 1907). Confidence: high.
  {
    id: 'grieg-anitras-dance',
    country: 'no',
    themes: ['classical'],
    title: 'Anitras dans',
    titleEn: "Anitra's Dance",
    composer: 'Grieg',
    aka: ['Peer Gynt', 'Op. 46 No. 3'],
    emoji: '💃',
    level: 'hard',
    bpm: 120,
    beatsPerBar: 3,
    pickup: 1,
    melody: `E4 |
             A4:0.5 G#4:0.5 A4:0.5 B4:0.5 C5:0.5 D5:0.5 | E5:0.5 A5:0.5 E5 D5:0.25 E5:0.25 D5:0.25 E5:0.25 | C5:0.5 A5:0.5 C5 B4:0.25 C5:0.25 B4:0.25 C5:0.25 | A4:2 R |
             A4:0.5 C5:0.5 A4 G4:0.25 A4:0.25 G4:0.25 A4:0.25 | F#4:0.5 C5:0.5 F#4:2 | F4:0.5 C5:0.5 F4 E4:0.25 F4:0.25 E4:0.25 F4:0.25 | D#4:0.5 B4:0.5 D#4:2 |
             B4:0.5 A#4:0.5 F#4:0.5 B4:0.5 A4:0.5 F4:0.5 | B4:0.5 G#4:0.5 E4:0.5 B4:0.5 G4:0.5 D#4:0.5 | B4:0.5 F#4:0.5 D4:0.5 B4:0.5 F4:0.5 Db4:0.5 | B4:0.5 E4:0.5 C4:0.5 B4:0.5 D#4:0.5 B3:0.5 |
             E4 R`,
    chords: 'Am Am Am Am Am D Dm B B B B B Em',
  },
  // Gymnopédie No. 3 (1888) — melody, bars 5–27 (the whole first section).
  //  Original A minor, 3/4 - moved down a fourth to E minor (range A3–E5). Tied long notes: bar 8 (D held into bar 9) and bar 16 → note + rest.
  //  Source: MU + 'SatieE/gymnopedie_3/' (LilyPond + MIDI, transcribed from the LilyPond 'top' voice). Chords from its left hand (simplified).
  //  Public domain (Satie d. 1925). Confidence: high.
  {
    id: 'satie-gymnopedie-3',
    country: 'fr',
    themes: ['classical', 'lullaby'],
    title: 'Gymnopédie No. 3',
    titleEn: 'Gymnopédie No. 3',
    composer: 'Satie',
    aka: ['Gymnopedie', 'Lent et grave'],
    emoji: '🌫️',
    level: 'easy',
    bpm: 72,
    beatsPerBar: 3,
    melody: `E5:3 | D5 C5 B4 | A4 B4 C5 | B4 A4 G4 | B4:3 | D5:2 D5 | A4:3 | R:3 | A4:3 |
             R G4 C5 | D5:2 E5 | A4 B4 C5 | F#4 E4 D4 | E4:3 | A3:3 | R:3 |
             B4:3 | C5 D5 C5 | B4 A4 B4 | R:3 | R A4 G4 | F#4 G4 F#4 | E4:3`,
    chords: 'Em Em Dm Am Em Bm D Am D Am Bm C Em Am C Bm G Bm G Bm G B Em',
  },
  // Gnossienne No. 1 (1890, published 1893) — the first theme (written without bar lines; Mutopia's 4/4 barring is used), 8 bars.
  //  Original F minor, kept. Grace notes dropped. Source: MU + 'SatieE/Gnossienne/no_1/' (LilyPond 'themeOneHigh', checked against the MIDI).
  //  Chords: the F-minor drone of the left hand. Public domain (Satie d. 1925). Confidence: high.
  {
    id: 'satie-gnossienne-1',
    country: 'fr',
    themes: ['classical'],
    title: 'Gnossienne No. 1',
    titleEn: 'Gnossienne No. 1',
    composer: 'Satie',
    aka: ['Gnossienne'],
    emoji: '🕯️',
    level: 'medium',
    bpm: 66,
    beatsPerBar: 4,
    melody: `R C5:0.5 Eb5:0.5 D5 C5 | B4:2 B4:2 | R C5:0.5 Eb5:0.5 D5 C5 | F5:2 F5:2 |
             R C5:0.5 Eb5:0.5 D5 C5 | B4:2 G4:2 | G4 G4:2.5 R:0.5 | G4 F4:3`,
    chords: 'Fm Fm Fm Fm Fm Fm C Fm',
  },
  // Lágrima (Prelude, c. 1891) — bars 1–8 (the major-key opening phrase), melody without the open-string accompaniment.
  //  Original E major, 3/4 - moved down a major third to C. Source: MU + 'TarregaF/lagrima-duo/' (guitar I of a duo setting of the
  //  Madrid: Ildefonso Alier edition, plate 5230 A; converted mechanically, the repeated open G is left out).
  //  Chords from guitar II (simplified). Public domain (Tárrega d. 1909). Confidence: medium-high.
  {
    id: 'tarrega-lagrima',
    country: 'es',
    themes: ['classical'],
    title: 'Lágrima',
    titleEn: 'Teardrop',
    composer: 'Tárrega',
    aka: ['Lagrima', 'Preludio'],
    emoji: '💧',
    level: 'easy',
    bpm: 80,
    beatsPerBar: 3,
    melody: `E4 F4 G4 | D4:3 | E4 F4 G4 | D4:3 |
             C5 B4 A4 | G4:0.5 E4:0.5 A3:0.5 C4:0.5 D4:0.5 F4:0.5 | E4:0.5 C4:0.5 A3:0.5 D4 B3:0.5 | C4:2 R`,
    chords: 'C G C G F Am G C',
  },
  // Recuerdos de la Alhambra (1896) — the tremolo melody, bars 1–20 (first period, ending on the dominant).
  //  Original A minor, 3/4. The repeated tremolo notes are written as one held note per bar (re-struck at each bar line).
  //  Source: MU + 'TarregaF/recuerdos/' (after the Orfeo Tracio edition; top voice read from the MIDI beat by beat).
  //  Chords from its bass line (simplified). Public domain (Tárrega d. 1909). Confidence: medium-high.
  {
    id: 'tarrega-recuerdos-de-la-alhambra',
    country: 'es',
    themes: ['classical'],
    title: 'Recuerdos de la Alhambra',
    titleEn: 'Memories of the Alhambra',
    composer: 'Tárrega',
    aka: ['Alhambra'],
    emoji: '🏰',
    level: 'medium',
    bpm: 72,
    beatsPerBar: 3,
    melody: `E4:2 D4 | C4:2 D4 | E4:3 | E4:2 F4 | G4:2 F4 | E4:2 F4 | G4:3 | G4:3 |
             C5:2 B4 | A4:2 B4 | B4 G#4:2 | G#4:3 | Bb4:2 A4 | G4:2 A4 | A4 F4:2 | F4:3 |
             E4:2 D4 | C4:2 D4 | D4 B3:2 | B3:3`,
    chords: 'Am Am Am Am C C C C F Dm E E A A Dm Dm Dm F E E',
  },
  // Morgenstemning (Morning Mood, Peer Gynt Suite No. 1, Op. 46 No. 1) — bars 1–8 (the flute theme and its answer).
  //  Original E major, 6/8 - moved down a major third to C; the first phrase (written an octave higher in the piano score) is
  //  brought down to the second phrase's octave. Counted in eighths. Grace notes dropped.
  //  Source: Grieg's own piano arrangement, G. Schirmer, New York 1900 (Schirmer's Library vol. 265), p. 3, scan at
  //  https://archive.org/details/31761045200615 (University of Toronto; read by eye).
  //  Only one notated source used. Chords simplified from the left hand. Public domain (Grieg d. 1907). Confidence: high.
  {
    id: 'grieg-morning-mood',
    country: 'no',
    themes: ['classical'],
    title: 'Morgenstemning',
    titleEn: 'Morning Mood',
    composer: 'Grieg',
    aka: ['Peer Gynt', 'Op. 46 No. 1', 'Morning', 'Morgenstimmung'],
    emoji: '🌅',
    level: 'easy',
    bpm: 168,
    beatsPerBar: 6,
    melody: `G4 E4 D4 C4 D4 E4 | G4 E4 D4 C4 D4:0.5 E4:0.5 D4:0.5 E4:0.5 | G4 E4 G4 A4 E4 A4 | B4 A4 G4 E4:2 R |
             G4 E4 D4 C4 D4 E4 | G4 E4 D4 C4 D4:0.5 E4:0.5 D4:0.5 E4:0.5 | G4 E4 G4 A4 E4 A4 | B4 G#4 F#4 E4:2 R`,
    chords: 'C C C G Em Em Am E',
  },
  // 1812 Overture (Op. 49, 1880) — "God Save the Tsar" (Боже, Царя храни!, A. Lvov 1833), the anthem Tchaikovsky quotes in the
  //  finale (bars 388ff., brass, at half speed). First strain, 8 bars, in the anthem's own rhythm.
  //  Melody from the Wikipedia LilyPond of the anthem (F major) - moved down a fourth to C:
  //  https://en.wikipedia.org/wiki/God_Save_the_Tsar! . Cross-check: Tenorposaune I part of Op. 49 (old German engraved parts,
  //  https://archive.org/details/imslp-overture-op49-tchaikovsky-pyotr), bars 388–398 — same notes and rhythm, doubled in length.
  //  Chords from the Wikipedia harmonisation (simplified). Public domain (Lvov d. 1870, Tchaikovsky d. 1893). Confidence: high (melody), medium (chords).
  {
    id: 'tchaikovsky-1812-overture',
    country: 'ru',
    themes: ['classical'],
    title: 'Торжественная увертюра «1812 год»',
    titleEn: '1812 Overture',
    composer: 'Tchaikovsky',
    aka: ['Op. 49', 'God Save the Tsar', 'Bozhe, Tsarya khrani', 'Lvov', 'The Year 1812'],
    emoji: '🎆',
    level: 'easy',
    bpm: 72,
    beatsPerBar: 4,
    melody: `G4:2 A4 A4 | G4:1.5 E4:0.5 C4:2 | C5:2 B4 A4 | G4:2 A4:2 |
             F4:2 G4 G4 | E4:2 E4 F#4 | G4:2 F#4:2 | E4:2 R:2`,
    chords: 'C C F C.A G C.Am Em.B E',
  },
  // Лебединое озеро (Swan Lake, Op. 20), Act II No. 10 "Scène" — the oboe theme, bars 1–8.
  //  Original B minor, 4/4 - moved down a tone to A minor (range F4–E5). The B tied inside bar 4 is written as one note.
  //  Source: Commons engraving of the oboe theme after Tchaikovsky's score (public domain):
  //  https://commons.wikimedia.org/wiki/File:Theme_lac_des_cygnes_hautbois.svg (read by eye).
  //  Only one notated source used. Chords simplified. Public domain (Tchaikovsky d. 1893; published 1877). Confidence: high.
  {
    id: 'tchaikovsky-swan-lake',
    country: 'ru',
    themes: ['classical', 'animals'],
    title: 'Лебединое озеро',
    titleEn: 'Swan Lake',
    composer: 'Tchaikovsky',
    aka: ['Op. 20', 'Scène', 'Swan theme', 'Le Lac des cygnes'],
    emoji: '🦢',
    level: 'medium',
    bpm: 80,
    beatsPerBar: 4,
    melody: `E5:2 A4:0.5 B4:0.5 C5:0.5 D5:0.5 | E5:1.5 C5:0.5 E5:1.5 C5:0.5 | E5:1.5 A4:0.5 C5:0.5 A4:0.5 F4:0.5 C5:0.5 | A4:2.5 D5:0.5 C5:0.5 B4:0.5 |
             E5:2 A4:0.5 B4:0.5 C5:0.5 D5:0.5 | E5:1.5 C5:0.5 E5:1.5 C5:0.5 | E5:1.5 A4:0.5 C5:0.5 A4:0.5 F4:0.5 C5:0.5 | A4:3 A4`,
    chords: 'Am C F Am Am C F Am',
  },
  // Le cygne (The Swan, The Carnival of the Animals, No. 13; written 1886, published 1922) — cello melody, bars 2–9 (first two phrases).
  //  Original G major (cello), 6/4 - here from a treble-clef copy in F, moved down a fourth to C (range A3–G5).
  //  The long notes tied into the next half bar are written as single notes; the tied end of bars 4 and 8 is note + rest.
  //  Source: LilyPond on https://commons.wikimedia.org/wiki/File:Cygne_saint_saens_fa_majeur.svg (public domain transcription of the score).
  //  Only one notated source used. Chords simplified. Public domain (Saint-Saëns d. 1921). Confidence: medium-high.
  {
    id: 'saint-saens-the-swan',
    country: 'fr',
    themes: ['classical', 'animals', 'lullaby'],
    title: 'Le cygne',
    titleEn: 'The Swan',
    composer: 'Saint-Saëns',
    aka: ['The Carnival of the Animals', 'Le Carnaval des animaux', 'Swan'],
    emoji: '🦢',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 6,
    melody: `C5 B4 E4 A4 G4 C4 | D4:2.5 E4:0.5 F4:2 R | A3:2 B3:0.5 C4:0.5 D4:0.5 E4:0.5 F4:0.5 G4:0.5 A4:0.5 B4:0.5 | E5:3.5 R:2.5 |
             C5 B4 E4 A4 G4 C4 | D#4:2.5 E4:0.5 F#4:2 R | B3:1.5 C#4:0.5 D#4:0.5 E4:0.5 F#4:0.5 G4:0.5 A4:0.5 B4:0.5 C#5:0.5 D#5:0.5 | G5:3.5 R:2.5`,
    chords: 'C G Am C C B B Em',
  },
  // Pie Jesu (Requiem, Op. 48, No. 4) — soprano solo, bars 2–7 and 11–16 (the two sung phrases; the 3-bar piano interlude
  //  in bars 8–10 is left out). Original B-flat major, 4/4 - moved up a tone to C (range G4–G5).
  //  Source: vocal score, Hamelle, Paris 1900 (piano reduction by Roger-Ducasse), Serenissima reprint, pp. 38–39:
  //  https://archive.org/details/RequiemOp.48-VocalScore (read by eye).
  //  Cross-check: https://en.wikipedia.org/wiki/Requiem_(Fauré) (LilyPond incipit, bars 2–3) — identical.
  //  Chords simplified from the piano reduction. Public domain (Fauré d. 1924). Confidence: high (melody), medium (chords).
  {
    id: 'faure-pie-jesu',
    country: 'fr',
    themes: ['classical', 'lullaby'],
    title: 'Pie Jesu',
    titleEn: 'Pie Jesu',
    composer: 'Fauré',
    aka: ['Requiem', 'Op. 48'],
    emoji: '🕯️',
    level: 'medium',
    bpm: 50,
    beatsPerBar: 4,
    melody: `C5:1.5 C5:0.5 F5:1.5 F5:0.5 | E5:1.5 D5:0.5 E5:2 | E5:0.5 G5:0.5 E5:0.5 D5:0.5 E5 C5 | D5:1.5 E5:0.5 F5:2 |
             E5:0.5 G5:0.5 E5:0.5 D5:0.5 E5 C5 | C5:1.5 B4:0.5 C5:1.5 R:0.5 |
             C5:1.5 C5:0.5 G5:1.5 G5:0.5 | G5:0.5 F#5:0.5 E5 F#5:2 | F#5:0.5 G5:0.5 E5:0.5 D5:0.5 E5 C5 | B4:1.5 C5:0.5 D5:2 |
             B4:0.5 D5:0.5 B4:0.5 A4:0.5 B4 G4 | G4:1.5 F#4:0.5 G4:2`,
    chords: 'C.F C.E Am G.F Am G.C C.F D D.Am G G G',
  },
  // Clair de lune (Suite bergamasque, L. 75, No. 3) — bars 1–8 (the opening theme), top voice.
  //  Original D-flat major, 9/8 - moved down a semitone to C. Counted in eighths. The dotted figures of bar 3 are kept.
  //  Source: MU + 'DebussyC/L75/debussy_Ste_Bergamesq_Clair/' (LilyPond + MIDI, converted mechanically).
  //  Cross-check: https://en.wikipedia.org/wiki/Suite_bergamasque (LilyPond, later bars) — same voicing style.
  //  Chords from the Mutopia left hand (simplified). Public domain (Debussy d. 1918; published 1905). Confidence: high (melody), medium (chords).
  {
    id: 'debussy-clair-de-lune',
    country: 'fr',
    themes: ['classical', 'lullaby'],
    title: 'Clair de lune',
    titleEn: 'Clair de Lune',
    composer: 'Debussy',
    aka: ['Moonlight', 'Suite bergamasque', 'L. 75'],
    emoji: '🌕',
    level: 'hard',
    bpm: 150,
    beatsPerBar: 9,
    melody: `R:2 G5:4 E5:3 | R D5 E5 D5:6 | R C5 D5 C5:1.5 E5:3 C5:1.5 | R B4 C5 B4:6 |
             F4 A4 B4 A4 D5 A4 G4 A4 G4 | D4 F4 G4 F4:3 E4:3 | C4 E4 F4 E4 A4 E4 D4 E4 D4 | A3 C4 D4 C4:3 B3:3`,
    chords: 'C Dm C G F.G Dm.E Am.F Am.G',
  },
  // The Entertainer (1902) — first strain (A), bars 5–20 after the 4-bar introduction, with its upbeat.
  //  Original C major, 2/4. Where the right hand doubles the tune in octaves, the lower octave is kept.
  //  The long C at the end of bars 1, 5 and 9 is tied into the next bar (written as note + rest).
  //  Source: MU + 'JoplinS/entertainer/' (LilyPond + MIDI, converted mechanically). Chords from its left hand (simplified).
  //  Public domain (Joplin d. 1917). Confidence: high.
  {
    id: 'joplin-the-entertainer',
    country: 'us',
    themes: ['classical'],
    title: 'The Entertainer',
    titleEn: 'The Entertainer',
    composer: 'Joplin',
    aka: ['Ragtime', 'The Sting'],
    emoji: '🎩',
    level: 'hard',
    bpm: 76,
    beatsPerBar: 2,
    pickup: 0.5,
    melody: `D4:0.25 D#4:0.25 |
             E4:0.25 C5:0.5 E4:0.25 C5:0.5 E4:0.25 C5:0.25 | R:1.25 C5:0.25 D5:0.25 D#5:0.25 | E5:0.25 C5:0.25 D5:0.25 E5:0.5 B4:0.25 D5:0.5 | C5:1.5 D4:0.25 D#4:0.25 |
             E4:0.25 C5:0.5 E4:0.25 C5:0.5 E4:0.25 C5:0.25 | R:1.5 A4:0.25 G4:0.25 | F#4:0.25 A4:0.25 C5:0.25 E5:0.5 D5:0.25 C5:0.25 A4:0.25 | D5:1.5 D4:0.25 D#4:0.25 |
             E4:0.25 C5:0.5 E4:0.25 C5:0.5 E4:0.25 C5:0.25 | R:1.25 C5:0.25 D5:0.25 D#5:0.25 | E5:0.25 C5:0.25 D5:0.25 E5:0.5 B4:0.25 D5:0.5 | C5:1.5 C5:0.25 D5:0.25 |
             E5:0.25 C5:0.25 D5:0.25 E5:0.5 C5:0.25 D5:0.25 C5:0.25 | E5:0.25 C5:0.25 D5:0.25 E5:0.5 C5:0.25 D5:0.25 C5:0.25 | E5:0.25 C5:0.25 D5:0.25 E5:0.5 B4:0.25 D5:0.5 | C5:1.5`,
    chords: 'C C G C C C D G C C G C F F C.G C',
  },
  // Après un rêve (Op. 7 No. 1, 1878) — voice, bars 2–15 (first two phrases, "Dans un sommeil que charmait ton image…").
  //  Original C minor, 3/4 - moved down a minor third to A minor. The triplets against the piano's duplets are kept (1/3 beats).
  //  Source: MU + 'FaureG/O7/apres/' (LilyPond + MIDI, converted mechanically and checked note by note against the .ly).
  //  Chords from the Mutopia piano part (simplified). Public domain (Fauré d. 1924). Confidence: high.
  {
    id: 'faure-apres-un-reve',
    country: 'fr',
    themes: ['classical'],
    title: 'Après un rêve',
    titleEn: 'After a Dream',
    composer: 'Fauré',
    aka: ['Op. 7 No. 1', 'Apres un reve'],
    emoji: '💭',
    level: 'hard',
    bpm: 60,
    beatsPerBar: 3,
    melody: `E4 A4 B4 | C5:4/3 B4:1/3 A4:1/3 C5:1/3 B4:1/3 A4:1/3 | A4:2 G4 | Bb4:0.5 D4:0.5 Bb4 A4:0.5 G#4:0.5 |
             A4:1.5 A4:0.5 G4:0.75 F4:0.25 | E4:4/3 F4:1/3 G4:1/3 F4:1/3 G4:1/3 A4:1/3 | E4:3 |
             E4 C4:2/3 D4:1/3 E4:2/3 F4:1/3 | G4:4/3 D4:1/3 D4:1/3 D4:1/3 C#4:1/3 D4:1/3 | F4:2 E4 | A4 A4:1.5 Ab4:0.5 |
             G4 C4 C4 | D4:4/3 Eb4:1/3 F4:1/3 Eb4:1/3 F4:1/3 G4:1/3 | G4:2 C4`,
    chords: 'Am D G C F E E Am Gm Gm Dm C G C',
  },
  // Pavane (Op. 50, 1887) — flute melody, bars 10–17 (the opening phrase as restated after the first period, with its full cadence).
  //  Original F-sharp minor, 4/4 - moved up a minor third to A minor (range E4–F5).
  //  Source: MU + 'FaureG/O50/GF_pavane50/' (flute part from Hamelle, Paris 1901; LilyPond + MIDI, converted mechanically).
  //  Chords from the Mutopia accompaniment (simplified). Public domain (Fauré d. 1924). Confidence: high.
  {
    id: 'faure-pavane',
    country: 'fr',
    themes: ['classical'],
    title: 'Pavane',
    titleEn: 'Pavane',
    composer: 'Fauré',
    aka: ['Op. 50'],
    emoji: '🦚',
    level: 'medium',
    bpm: 72,
    beatsPerBar: 4,
    melody: `A4:1.75 B4:0.25 C5:1.75 D5:0.25 | C5:0.5 B4:0.5 C5:0.5 A4:0.5 B4:1.75 C5:0.25 | B4:0.5 A4:0.5 B4:0.5 G4:0.5 A4:1.5 G#4:0.5 | E4:4 |
             C5:1.75 D5:0.25 E5:1.75 F5:0.25 | E5:0.5 D5:0.5 E5:0.5 C5:0.5 D5:1.75 E5:0.25 | C5:0.5 B4:0.5 C5:0.5 A4:0.5 A4 G#4 | A4:3 R`,
    chords: 'Am G F E C F.C Dm.E Am',
  },
  // Berceuse (Dolly Suite, Op. 56 No. 1, 1894) — top line, bars 19–34 (the theme's return and closing phrase).
  //  Original E major, 2/4 - moved down a major sixth to C. The second note of bars 1, 5, 13 and 15 is tied into the next bar (note + rest).
  //  Source: MU + 'FaureG/O56/faure_dolly_berceuse/' (adapted from Hamelle, Paris; LilyPond + MIDI, converted mechanically).
  //  Chords from the Mutopia accompaniment (over a C pedal; simplified). Public domain (Fauré d. 1924). Confidence: high.
  {
    id: 'faure-dolly-berceuse',
    country: 'fr',
    themes: ['classical', 'lullaby', 'children'],
    title: 'Berceuse (Dolly)',
    titleEn: 'Dolly Lullaby',
    composer: 'Fauré',
    aka: ['Dolly Suite', 'Op. 56', 'Berceuse'],
    emoji: '🧸',
    level: 'easy',
    bpm: 84,
    beatsPerBar: 2,
    melody: `G4 G4 | R:0.5 E4:0.5 F4:0.5 G4:0.5 | E4:0.5 C4:0.5 D4:0.5 E4:0.5 | C4 G3:0.5 R:0.5 |
             G4 G4 | R:0.5 E4:0.5 F4:0.5 G4:0.5 | E4:0.5 C4:0.5 C5:0.5 B4:0.5 | A4 G4:0.5 R:0.5 |
             C5 C5 | R:0.5 A4:0.5 G4:0.5 F4:0.5 | C5 C5 | R:0.5 A4:0.5 G4:0.5 F4:0.5 |
             G4 G4 | R:0.5 E4:0.5 D4:0.5 C4:0.5 | E4 D4 | C4:1.5 R:0.5`,
    chords: 'G C C C C C Am G C F C F G Am G C',
  },
  // Als die alte Mutter / Songs My Mother Taught Me (Gypsy Songs, Op. 55 No. 4, 1880) — voice, bars 9–24 (first verse).
  //  Original D major, voice in 2/4 over a 6/8 piano part - moved down a tone to C; written in 2/4.
  //  Source: MU + 'DvorakA/O55/dvorak-als-die-alte-mutter/' (LilyPond + MIDI, converted mechanically, checked against the .ly).
  //  Chords from the Mutopia piano part (simplified). Public domain (Dvořák d. 1904). Confidence: high.
  {
    id: 'dvorak-songs-my-mother-taught-me',
    country: 'cz',
    themes: ['classical'],
    title: 'Když mne stará matka',
    titleEn: 'Songs My Mother Taught Me',
    composer: 'Dvořák',
    aka: ['Als die alte Mutter', 'Gypsy Songs', 'Op. 55 No. 4'],
    emoji: '👵',
    level: 'easy',
    bpm: 60,
    beatsPerBar: 2,
    melody: `C5 B4:0.5 A4:0.5 | C5 B4:0.5 A4:0.5 | C5:0.5 F5 F4:0.5 | F4 R |
             B4 A4:0.5 G4:0.5 | B4 A4:0.5 G4:0.5 | B4:0.5 E5 E4:0.5 | E4 R |
             A4 A4 | B4:0.5 C5:0.5 D5:0.5 E5:0.5 | F5:1.5 B4:0.5 | B4:1.5 R:0.5 |
             C5:1.5 C5:0.5 | B4 A4 | G4:2 | G4 R`,
    chords: 'C Am Dm G G G C C Am G G E Am F C C',
  },
];
