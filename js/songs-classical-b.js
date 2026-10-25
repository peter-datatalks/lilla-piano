// Classical themes (Romantic era: Schubert, Brahms, Strauss, Tchaikovsky, Grieg, Dvořák, Chopin and others).
// Same format as the other song files, plus `composer` (shown on the card and searchable).
// Melodies are taken from public-domain editions of the original scores.
// Most themes were converted mechanically from Mutopia Project LilyPond/MIDI files (pitches and durations
// read from the MIDI, checked against the LilyPond source), then transposed. Only the top melody line is kept.
// Grace notes, trills and acciaccaturas become the main note. Notes tied across a bar line are written as
// the note plus a rest in the next bar (the app cannot hold a note over a bar line); this is mentioned where it happens.

const MUT = 'https://www.mutopiaproject.org/ftp/';

export const SONGS_CLASSICAL_B = [
  // ───────────────────────────── Austria ─────────────────────────────
  // Heidenröslein, D 257 (Schubert, 1815) — Original G major, 2/4 - moved down a fifth to C. Voice part, bars 1-14 (whole strophe).
  //   Source: MUT + 'SchubertF/D257/SchubertF-D257-Heidenroeslein/' (LilyPond + MIDI, Breitkopf & Härtel 1884-97 edition)
  //   Note: the en.wikipedia "Heidenröslein" score is Werner's 1829 folk setting (a different tune), so it was not used.
  //   Chords from the piano part (bass + right-hand chords). Public domain: Schubert d. 1828. Confidence: high.
  {
    id: 'schubert-heidenroslein',
    country: 'at',
    themes: ['classical'],
    title: 'Heidenröslein',
    titleEn: 'Little Heath Rose',
    composer: 'Schubert',
    aka: ['D 257', 'Sah ein Knab ein Röslein stehn', 'Heath Rose'],
    emoji: '🌹',
    level: 'medium',
    bpm: 72,
    beatsPerBar: 2,
    melody: `E4:0.5 E4:0.5 E4:0.5 E4:0.5 | G4:0.25 F4:0.25 F4:0.25 E4:0.25 D4 | D4:0.5 D4:0.5 E4:0.5 F4:0.5 | G4 C5:0.5 R:0.5 |
             E4:0.5 E4:0.5 E4:0.5 E4:0.5 | G4:0.25 F#4:0.25 F#4:0.25 E4:0.25 D4 | G4:0.5 G4:0.5 A4:0.75 G4:0.25 | F#4:0.25 G4:0.25 A4:0.25 B4:0.25 G4 |
             G4:0.25 B4:0.25 A4:0.25 G4:0.25 F#4:0.25 E4:0.25 D#4:0.25 E4:0.25 | C5:0.75 F#4:0.25 G4 |
             D4:0.5 D4:0.5 E4:0.5 F4:0.5 | G4:0.5 A4:0.25 B4:0.25 C5 | A4:0.5 C5:0.5 F4:0.5 A4:0.5 | C4:0.5 E4:0.25 D4:0.25 C4`,
    chords: 'C Dm G C C D G.Am D.Em G.Am D.G G C F G.C',
  },
  // Ave Maria (Ellens dritter Gesang), D 839 (Schubert, 1825) — Original B-flat major, 4/4 - moved up a tone to C.
  //   Bars 3-4 ("Ave Maria! Jungfrau mild") + bars 13-14 (the closing "Ave Maria!") of the voice part; the ornate middle
  //   (bars 5-12, full of sextuplets and 32nd-note triplets the app cannot show) is left out. Grace notes dropped.
  //   Source: MUT + 'SchubertF/D839/SchubertF-D839_AveMaria/' (LilyPond + MIDI, C.F. Peters edition)
  //   Public domain: Schubert d. 1828. Confidence: high for the notes, chords simplified (medium).
  {
    id: 'schubert-ave-maria',
    country: 'at',
    themes: ['classical'],
    title: 'Ave Maria',
    titleEn: 'Ave Maria',
    composer: 'Schubert',
    aka: ['Ellens dritter Gesang', 'D 839', 'Op. 52 No. 6'],
    emoji: '🕊️',
    level: 'medium',
    bpm: 56,
    beatsPerBar: 4,
    melody: `C5:1.5 B4:0.25 C5:0.25 E5:1.75 D5:0.25 | C5 R:1 D5 C5:0.25 B4:0.25 A4:0.25 B4:0.25 |
             C5:1.5 B4:0.25 C5:0.25 E5:1.75 D5:0.25 | C5 R:3`,
    chords: 'C G.Dm C C',
  },
  // An der schönen blauen Donau, Op. 314 (Johann Strauss II, 1867) — main waltz theme (Waltz No. 1, 32 bars + pickup).
  //   Original D major; the Mutopia piano reduction is in C; moved down a further fourth to G so the two-octave tune fits
  //   (F#3-G5). 3/4 with a one-beat pickup. Where the score doubles the melody in thirds, the upper note is used.
  //   Notes tied over the bar line (bars 26-27 and 28-29) are written as note + rest.
  //   Source: MUT + 'StraussJJ/O314/blue_danube/' (LilyPond + MIDI, main theme, from Christian Mondrup / Werner Icking archive)
  //   Chords follow the left hand of that edition. Public domain: Strauss d. 1899. Confidence: high (single source).
  {
    id: 'blue-danube',
    country: 'at',
    themes: ['classical'],
    title: 'An der schönen blauen Donau',
    titleEn: 'The Blue Danube',
    composer: 'Strauss',
    aka: ['The Blue Danube', 'Op. 314', 'Johann Strauss II', 'Kék Duna keringő', 'An der schönen blauen Donau'],
    emoji: '🌊',
    level: 'medium',
    bpm: 132,
    beatsPerBar: 3,
    pickup: 1,
    melody: `G3 |
             G3 B3 D4 | D4:2 D5 | D5:2 B4 | B4:2 G3 | G3 B3 D4 | D4:2 D5 | D5:2 C5 | C5:2 F#3 |
             F#3 A3 E4 | E4:2 E5 | E5:2 C5 | C5:2 F#3 | F#3 A3 E4 | E4:2 E5 | E5:2 B4 | B4:2 G3 |
             G3 B3 D4 | G4:2 G5 | G5:2 D5 | D5:2 G3 | G3 B3 D4 | G4:2 G5 | G5:2 E5 | E5:2 A3 |
             A3 C4 E4 | E4:3 | R:1 C#4 D4 | B4:3 | R:1 G4 B3 | B3:2 A3 | E4:2 D4 | G3:1.5 G4:0.5 G4 | G4:2`,
    chords: 'G G G G G D D D D D D D D G G G G G G G G Am Am Am Am D D G G C D G G',
  },

  // ───────────────────────────── Germany ─────────────────────────────
  // Wiegenlied "Guten Abend, gut' Nacht", Op. 49 No. 4 (Brahms, 1868) — Original E-flat major, 3/4, pickup - moved down a minor third to C.
  //   Source: https://en.wikipedia.org/wiki/Wiegenlied_(Brahms) (LilyPond score of the voice part, E-flat)
  //   Cross-check: MUT + 'BrahmsJ/LullabyBrahms-C/' (recorder arrangement in C) — same pitches; it holds bar 2 ("d2")
  //   where the original has a quarter + rest. Appoggiatura and after-grace notes dropped.
  //   Public domain: Brahms d. 1897. Confidence: high.
  {
    id: 'brahms-wiegenlied',
    country: 'de',
    themes: ['classical', 'lullaby'],
    title: 'Wiegenlied',
    titleEn: "Brahms' Lullaby",
    composer: 'Brahms',
    aka: ['Guten Abend, gut’ Nacht', 'Op. 49 No. 4', 'Lullaby', 'Cradle Song', 'Bölcsődal'],
    emoji: '🌙',
    level: 'easy',
    bpm: 80,
    beatsPerBar: 3,
    pickup: 1,
    melody: `E4:0.5 E4:0.5 |
             G4:1.5 E4:0.5 E4 | G4 R:1 E4:0.5 G4:0.5 | C5 B4:1.5 A4:0.5 | A4 G4 D4:0.5 E4:0.5 |
             F4 D4 D4:0.5 E4:0.5 | F4 R:1 D4:0.5 F4:0.5 | B4:0.5 A4:0.5 G4 B4 | C5 R:1 C4:0.5 C4:0.5 |
             C5:2 A4:0.5 F4:0.5 | G4:2 E4:0.5 C4:0.5 | F4 G4 A4 | G4:2 C4:0.5 C4:0.5 |
             C5:2 A4:0.5 F4:0.5 | G4:2 E4:0.5 C4:0.5 | F4 E4 D4 | C4:2`,
    chords: 'C C C Dm.G Dm.G Dm.G G C F C Dm.G C F C Dm.G C',
  },
  // Hochzeitsmarsch, from A Midsummer Night's Dream, Op. 61 (Mendelssohn, 1842) — main theme, 8 bars. Original C major, 4/4 -
  //   no transposition, but moved down an octave (the score has it at C5-C6). Trill on C becomes plain C; grace notes dropped;
  //   staccato quarters written as quarters. Bars 1-6 of the theme as in the organ score; bars 7-8 = the first ending.
  //   Source: MUT + 'Mendelssohn-BartholdyF/O61/Sommernachtstraum-wedding-march/' (Théodore Dubois' organ transcription,
  //   Durand plate D.&F. 9516; LilyPond + MIDI)
  //   Public domain: Mendelssohn d. 1847. Confidence: medium-high (single source, a transcription).
  {
    id: 'mendelssohn-wedding-march',
    country: 'de',
    themes: ['classical'],
    title: 'Hochzeitsmarsch',
    titleEn: 'Wedding March',
    composer: 'Mendelssohn',
    aka: ['Wedding March', 'A Midsummer Night’s Dream', 'Ein Sommernachtstraum', 'Op. 61', 'Nászinduló'],
    emoji: '💍',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 4,
    melody: `C5:2 B4:1.5 F#4:0.5 | A4 G4 F4 D4 | C4:2 D4 G3:0.75 D4:0.25 | E4 R:1.5 C4:0.5 E4:0.5 G4:0.5 |
             C5:2 B4:1.5 F#4:0.5 | A4 G4 F4 D4 | C4:2 E4 D4:0.75 E4:0.25 | D4:2 C4 R:1`,
    chords: 'Am.B Em.Dm C.G C Am.B Em.Dm C.G G.C',
  },
  // Fröhlicher Landmann, von der Arbeit zurückkehrend, Op. 68 No. 10 (Schumann, 1848) — Original F major, 4/4 with an
  //   eighth-note pickup - moved to C (down a fourth, then up an octave). The melody is in the left hand in the original.
  //   Bars 1-14 (A A B A'); the repeat of B A' is left out. Final bar shortened to balance the pickup.
  //   Source: MUT + 'SchumannR/O68/schumann-op68-10-gai-laboureur/' (LilyPond + MIDI, Peters edition)
  //   Public domain: Schumann d. 1856. Confidence: high.
  {
    id: 'happy-farmer',
    country: 'de',
    themes: ['classical', 'children'],
    title: 'Fröhlicher Landmann',
    titleEn: 'The Happy Farmer',
    composer: 'Schumann',
    aka: ['The Happy Farmer', 'Album für die Jugend', 'Album for the Young', 'Op. 68 No. 10', 'Le gai laboureur'],
    emoji: '🚜',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 4,
    pickup: 0.5,
    melody: `G3:0.5 |
             C4:1.5 E4:0.5 G4:1.5 C4:0.5 | F4:0.5 A4:0.5 C5:0.5 A4:0.5 G4:1.5 E4:0.5 | F4:0.5 D4:0.5 G3:0.5 F4:0.5 E4:0.5 C4:0.5 G3:0.5 E4:0.5 | B3 A3 G3 R:0.5 G3:0.5 |
             C4:1.5 E4:0.5 G4:1.5 C4:0.5 | F4:0.5 A4:0.5 C5:0.5 A4:0.5 G4:1.5 E4:0.5 | F4:0.5 D4:0.5 G3:0.5 F4:0.5 E4:0.5 C4:0.5 G3:0.5 E4:0.5 | B3 A3 G3 R:0.5 G3:0.5 |
             D4:1.5 C4:0.5 B3:1.5 G3:0.5 | D4:0.5 C4:0.5 B3:0.5 A3:0.5 B3:1.5 G3:0.5 |
             C4:1.5 E4:0.5 G4:1.5 C4:0.5 | F4:0.5 A4:0.5 C5:0.5 A4:0.5 G4:1.5 E4:0.5 | F4:0.5 D4:0.5 G3:0.5 F4:0.5 E4:0.5 C4:0.5 G3:0.5 E4:0.5 | D4 B3 C4 R:0.5`,
    chords: 'C F.C G.C G.C C F.C G.C G.C G G C F.C G.C G.C',
  },
  // Träumerei, Kinderszenen Op. 15 No. 7 (Schumann, 1838) — Original F major, 4/4 with a quarter pickup - moved down a fourth to C.
  //   Top voice, bars 1-8 (first period, ends on the dominant). Acciaccatura in bar 8 dropped; last bar shortened to balance the pickup.
  //   Source: MUT + 'SchumannR/O15/SchumannOp15No07/' (LilyPond + MIDI, "Leichte Stücke", 1900)
  //   Public domain: Schumann d. 1856. Confidence: high for the melody, chords simplified.
  {
    id: 'traumerei',
    country: 'de',
    themes: ['classical'],
    title: 'Träumerei',
    titleEn: 'Dreaming',
    composer: 'Schumann',
    aka: ['Kinderszenen', 'Scenes from Childhood', 'Op. 15 No. 7', 'Reverie'],
    emoji: '💭',
    level: 'medium',
    bpm: 66,
    beatsPerBar: 4,
    pickup: 1,
    melody: `G3 |
             C4:2.5 B3:0.5 C4:0.5 E4:0.5 | G4:0.5 C5:0.5 C5:2 B4:0.5 A4:0.5 | G4:0.5 C5:0.5 D4:0.5 E4:0.5 F4:0.5 A4:0.5 C4:0.5 D4:0.5 | E4:0.5 G4:0.5 D4:2 G3 |
             C4:2.5 B3:0.5 C4:0.5 E4:0.5 | G4:0.5 E5:0.5 E5:1.5 D5:0.5 C5:0.5 B4:0.5 | C5:0.5 E5:0.5 A4:0.5 C5:0.5 B4:1.5 A#4:0.5 | A4 B4 G4`,
    chords: 'C F C.G C.G C E Dm.G D.G',
  },

  // ───────────────────────────── Russia ─────────────────────────────
  // Старинная французская песенка (Old French Song), Album for the Young Op. 39 No. 16 (Tchaikovsky, 1878) —
  //   Original G minor, 2/4 with an eighth pickup - moved up a tone to A minor. Whole piece, AABA (32 bars).
  //   Final bar shortened to balance the pickup.
  //   Source: MUT + 'TchaikovskyPI/O39/16OldFrenchSong/' (LilyPond + MIDI, Schirmer 1904)
  //   Public domain: Tchaikovsky d. 1893. Confidence: high.
  {
    id: 'old-french-song',
    country: 'ru',
    themes: ['classical'],
    title: 'Old French Song',
    titleEn: 'Old French Song',
    composer: 'Tchaikovsky',
    aka: ['Старинная французская песенка', 'Chanson française ancienne', 'Album for the Young', 'Op. 39 No. 16'],
    emoji: '🎻',
    level: 'medium',
    bpm: 80,
    beatsPerBar: 2,
    pickup: 0.5,
    melody: `E4:0.5 |
             A4:0.5 B4:0.5 C5:0.5 D5:0.5 | E5:1.5 E5:0.5 | D5:0.5 E5:0.5 F5:0.5 D5:0.5 | E5:1.5 E5:0.5 |
             D5:0.5 E5:0.5 F5:0.5 D5:0.5 | E5:0.5 F5:0.25 E5:0.25 D5:0.5 C5:0.5 | B4:1.75 A4:0.25 | A4:1.5 E4:0.5 |
             A4:0.5 B4:0.5 C5:0.5 D5:0.5 | E5:1.5 E5:0.5 | D5:0.5 E5:0.5 F5:0.5 D5:0.5 | E5:1.5 E5:0.5 |
             D5:0.5 E5:0.5 F5:0.5 D5:0.5 | E5:0.5 F5:0.25 E5:0.25 D5:0.5 C5:0.5 | B4:1.75 A4:0.25 | A4:2 |
             A4 A4:0.5 B4:0.5 | C5:1.5 C5:0.5 | D5 D5 | B4:1.5 B4:0.5 |
             E5:1.5 E5:0.5 | F5:0.5 G5:0.25 F5:0.25 E5:0.5 D5:0.5 | C5 B4:0.5 A4:0.5 | B4:1.5 E4:0.5 |
             A4:0.5 B4:0.5 C5:0.5 D5:0.5 | E5:1.5 E5:0.5 | D5:0.5 E5:0.5 F5:0.5 D5:0.5 | E5:1.5 E5:0.5 |
             D5:0.5 E5:0.5 F5:0.5 D5:0.5 | E5:0.5 F5:0.25 E5:0.25 D5:0.5 C5:0.5 | B4:1.75 A4:0.25 | A4:1.5`,
    chords: 'Am Am Dm Am Dm Am E Am Am Am Dm Am Dm Am E Am Dm Dm Dm E Am Dm Am E Am Am Dm Am Dm Am Dm.E Am',
  },
  // Марш деревянных солдатиков (March of the Wooden Soldiers), Album for the Young Op. 39 No. 5 (Tchaikovsky, 1878) —
  //   Original D major, 2/4 - moved down a tone to C. Bars 1-16 (first section); staccato eighths kept as eighth + rest as written.
  //   Source: MUT + 'TchaikovskyPI/O39/05MarchOfTheWoodenSoldiers/' (LilyPond + MIDI, Schirmer 1904)
  //   Public domain: Tchaikovsky d. 1893. Confidence: high.
  {
    id: 'march-of-the-wooden-soldiers',
    country: 'ru',
    themes: ['classical', 'children'],
    title: 'March of the Wooden Soldiers',
    titleEn: 'March of the Wooden Soldiers',
    composer: 'Tchaikovsky',
    aka: ['Марш деревянных солдатиков', 'Album for the Young', 'Op. 39 No. 5', 'Wooden Soldiers'],
    emoji: '💂',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 2,
    melody: `C5:0.5 R:0.5 C5:0.5 R:0.5 | A4:0.75 G#4:0.25 A4:0.5 R:0.25 B4:0.25 | C5:0.5 R:0.5 C5:0.5 R:0.5 | A4:0.75 G#4:0.25 A4:0.5 R:0.25 B4:0.25 |
             C5:0.5 R:0.5 D5:0.5 R:0.5 | E5:0.5 R:0.5 E5:0.5 R:0.5 | F5:0.5 R:0.25 E5:0.25 D5:0.5 R:0.25 C5:0.25 | D5:0.5 R:1.5 |
             C5:0.5 R:0.5 C5:0.5 R:0.5 | A4:0.75 G#4:0.25 A4:0.5 R:0.25 B4:0.25 | C5:0.5 R:0.5 C5:0.5 R:0.5 | A4:0.75 G#4:0.25 A4:0.5 R:0.25 B4:0.25 |
             C5:0.5 R:0.5 D5:0.5 R:0.5 | E5:0.5 R:0.5 E5:0.5 R:0.5 | D5:0.5 R:0.25 C5:0.25 B4:0.5 R:0.25 A4:0.25 | G4:0.5 R:1.5`,
    chords: 'C F C F C C G G C F C F C C D G',
  },

  // ───────────────────────────── Norway ─────────────────────────────
  // I Dovregubbens hall (In the Hall of the Mountain King), Peer Gynt Op. 23 / Suite No. 1 Op. 46 (Grieg, 1875) —
  //   Original B minor, 4/4 - moved down a tone to A minor. Main theme twice (bars 2-9 of the piano score). The second
  //   statement is an octave higher in the score; here both are in the same octave. Staccato eighths written as eighths.
  //   Source: MUT + 'GriegE/O46/Dans_l_antre_du_roi_de_la_montagne/' (LilyPond + MIDI, piano)
  //   Cross-check: https://en.wikipedia.org/wiki/In_the_Hall_of_the_Mountain_King (LilyPond score, orchestral) — same notes;
  //   it ends the phrase with a quarter + rest instead of the half note used here.
  //   Public domain: Grieg d. 1907. Confidence: high.
  {
    id: 'hall-of-the-mountain-king',
    country: 'no',
    themes: ['classical'],
    title: 'I Dovregubbens hall',
    titleEn: 'In the Hall of the Mountain King',
    composer: 'Grieg',
    aka: ['In the Hall of the Mountain King', 'Peer Gynt', 'Op. 46', 'Dans l’antre du roi de la montagne', 'A hegyi király csarnokában'],
    emoji: '👹',
    level: 'medium',
    bpm: 120,
    beatsPerBar: 4,
    melody: `A3:0.5 B3:0.5 C4:0.5 D4:0.5 E4:0.5 C4:0.5 E4 | D#4:0.5 B3:0.5 D#4 D4:0.5 A#3:0.5 D4 |
             A3:0.5 B3:0.5 C4:0.5 D4:0.5 E4:0.5 C4:0.5 E4:0.5 A4:0.5 | G4:0.5 E4:0.5 C4:0.5 E4:0.5 G4:2 |
             A3:0.5 B3:0.5 C4:0.5 D4:0.5 E4:0.5 C4:0.5 E4 | D#4:0.5 B3:0.5 D#4 D4:0.5 A#3:0.5 D4 |
             A3:0.5 B3:0.5 C4:0.5 D4:0.5 E4:0.5 C4:0.5 E4:0.5 A4:0.5 | G4:0.5 E4:0.5 C4:0.5 E4:0.5 G4:2`,
    chords: 'Am Am Am C Am Am Am C',
  },

  // ───────────────────────────── Poland ─────────────────────────────
  // Nocturne in E-flat major, Op. 9 No. 2 (Chopin, 1832) — opening theme, bars 1-4 + eighth pickup. 12/8 (counted in eighths).
  //   Original E-flat major - moved down a minor sixth to G major so it fits D4-F#5. Last bar shortened to balance the pickup.
  //   Source: MUT + 'ChopinFF/O9/chopin_nocturne_op9_n2/' (LilyPond + MIDI, G. Schirmer 1881)
  //   Public domain: Chopin d. 1849. Confidence: high.
  {
    id: 'chopin-nocturne-op9-2',
    country: 'pl',
    themes: ['classical'],
    title: 'Nocturne Op. 9 No. 2',
    titleEn: 'Nocturne in E-flat, Op. 9 No. 2',
    composer: 'Chopin',
    aka: ['Nokturn Es-dur', 'Nocturne', 'Op. 9 No. 2'],
    emoji: '🌌',
    level: 'hard',
    bpm: 150,
    beatsPerBar: 12,
    pickup: 1,
    melody: `D4 |
             B4:4 A4 B4 A4:3 G4:2 D4 | B4:2 E4 E5:2 B4 D5:3 C5:2 B4 | A4:3 B4:2 F#4 G4:3 E4:3 |
             D4 F#5 E5 D5:0.5 C5:0.5 B4:0.5 C5:0.5 E4:0.5 F#4:0.5 G4:3 R:2`,
    chords: 'G E.Am D.Em D.G',
  },
  // Prélude in E minor, Op. 28 No. 4 (Chopin, 1839) — Original E minor, 2/2 (written in quarters, 4 per bar) with a one-beat
  //   pickup - moved up a fourth to A minor. Melody bars 1-12 + the first note of bar 13 as the ending.
  //   The tied G# over bars 8-9 is written as note + rest. Acciaccatura in bar 11 dropped. The eighth-note triplet in bar 12
  //   (D-C-B, here G-F-E) is written as eighth + two sixteenths because the app has no triplets.
  //   Source: MUT + 'ChopinFF/O28/Chop-28-4/' (LilyPond + MIDI, Peters 1879)
  //   Public domain: Chopin d. 1849. Confidence: high (rhythm of one triplet approximated).
  {
    id: 'chopin-prelude-e-minor',
    country: 'pl',
    themes: ['classical'],
    title: 'Prélude Op. 28 No. 4',
    titleEn: 'Prelude in E minor',
    composer: 'Chopin',
    aka: ['Prelude in E minor', 'Preludium e-moll', 'Op. 28 No. 4'],
    emoji: '🌧️',
    level: 'medium',
    bpm: 60,
    beatsPerBar: 4,
    pickup: 1,
    melody: `E4:0.75 E5:0.25 |
             E5:3 F5 | E5:3 F5 | E5:3 F5 | E5:3 D#5 | D5:3 E5 | D5:3 E5 | D5:3 E5:0.75 D5:0.25 | D5:3 C#5 |
             R:1 D5:0.5 E5:0.5 G5:0.5 F5:0.5 A4:0.5 D5:0.5 | B4:3 D5 | B4:3 D5 |
             C5:0.5 B4:0.5 F4:0.5 E4:0.5 G#4:0.5 B4:0.5 G5:0.5 F5:0.25 E5:0.25 | E5:3`,
    chords: 'Am Dm E A F Dm.E G C F E E E Am',
  },

  // ───────────────────────────── France ─────────────────────────────
  // Gymnopédie No. 1 (Satie, 1888) — Original D major (key signature 2 sharps), 3/4 - moved down a tone to C (white keys only).
  //   Melody bars 5-9 and 13-19. The held notes tied over several bars (bars 9-12 and 19-21 of the original) are written
  //   once, the tied continuation bars and the repeated accompaniment bars 10-12 are left out.
  //   Source: MUT + 'SatieE/gymnopedie_1/' (LilyPond + MIDI, Dover edition)
  //   Cross-check: https://en.wikipedia.org/wiki/Gymnopédies (LilyPond score, bars 1-8) — same notes.
  //   Public domain: Satie d. 1925. Confidence: high.
  {
    id: 'gymnopedie-1',
    country: 'fr',
    themes: ['classical'],
    title: 'Gymnopédie No. 1',
    titleEn: 'Gymnopédie No. 1',
    composer: 'Satie',
    aka: ['Gymnopedie', 'Lent et douloureux'],
    emoji: '🌫️',
    level: 'easy',
    bpm: 72,
    beatsPerBar: 3,
    melody: `R:1 E5 G5 | F5 E5 B4 | A4 B4 C5 | G4:3 | E4:3 |
             R:1 E5 G5 | F5 E5 B4 | A4 B4 C5 | G4:3 | B4:3 | E5:3 | D4:3`,
    chords: 'F C F C F F C F C Em Am Dm',
  },
  // Chanson du Toréador "Toréador, en garde", Carmen (Bizet, 1875) — refrain as quoted in the Prelude to Act 1.
  //   In the Prelude it is in F major, 2/4 - moved down a fourth to C. 12 bars. Acciaccaturas dropped; notes tied into a rest
  //   ("a4~ a8 r") written as a dotted quarter.
  //   Source: MUT + 'BizetG/prelude/' (Carmen Prelude, piano score, Schirmer 1895; LilyPond + MIDI)
  //   Public domain: Bizet d. 1875. Confidence: high.
  {
    id: 'toreador-song',
    country: 'fr',
    themes: ['classical'],
    title: 'Toréador',
    titleEn: 'Toreador Song',
    composer: 'Bizet',
    aka: ['Toréador, en garde', 'Votre toast', 'Carmen', 'Toreador'],
    emoji: '🐂',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 2,
    melody: `G4 A4:0.75 G4:0.25 | E4 E4 | E4:0.75 D4:0.25 E4:0.75 F4:0.25 | E4:1.5 R:0.5 |
             F4 D4:0.75 G4:0.25 | E4:1.5 R:0.5 | C4 A3:0.75 D4:0.25 | G3:1.5 R:0.5 |
             D4:2 | D4:0.5 A4:0.5 G4:0.5 F4:0.5 | E4:0.5 D4:0.5 E4:0.5 F4:0.5 | E4:1.5 R:0.5`,
    chords: 'C C C C Dm.G C Am.D G Dm Dm Am Am',
  },

  // ───────────────────────────── Italy ─────────────────────────────
  // Brindisi "Libiamo ne' lieti calici", La traviata (Verdi, 1853) — Original B-flat major, 3/8 with an eighth pickup
  //   (counted in eighths) - moved up a tone to C. First vocal statement (19 bars). Appoggiaturas/acciaccaturas dropped.
  //   Notes tied over the bar line (bars 1-2, 5-6, 11-12, 15-16) are written as note + rest.
  //   Source: MUT + 'VerdiG/Traviata_02/' (piano transcription by N. Toledo, 1857-69; LilyPond + MIDI)
  //   Public domain: Verdi d. 1901. Confidence: high for the melody, medium for the chords (simplified to I and V).
  {
    id: 'brindisi-traviata',
    country: 'it',
    themes: ['classical'],
    title: 'Libiamo ne’ lieti calici',
    titleEn: 'Drinking Song (Brindisi)',
    composer: 'Verdi',
    aka: ['Brindisi', 'La traviata', 'Libiamo'],
    emoji: '🥂',
    level: 'medium',
    bpm: 180,
    beatsPerBar: 3,
    pickup: 1,
    melody: `G4 |
             E5:3 | R:1 G4 E5 | E5 G4 E5 | E5 D#5 E5 | G5:3 | R:1 F5 E5 |
             D5 D5:0.5 C#5:0.5 D5:0.5 E5:0.5 | D5 D5:0.5 C#5:0.5 D5:0.5 E5:0.5 | D5:2 C5 | G4 R:1 G4 |
             E5:3 | R:1 G4 E5 | E5 G4 E5 | E5 D#5 E5 | G5:3 | R:1 F5 E5 |
             D5 D5:0.5 C#5:0.5 D5:0.5 E5:0.5 | D5 D5:0.5 C#5:0.5 D5:0.5 E5:0.5 | C5:2`,
    chords: 'C C C C C C G G G.C C C C C C C C G G C',
  },

  // ───────────────────────────── United Kingdom ─────────────────────────────
  // I Vow to Thee, My Country (hymn tune "Thaxted", Holst 1921, from "Jupiter" in The Planets, 1916) — C major, 3/4 with an
  //   eighth-pair pickup - no transposition. Whole tune (24 bars); last bar shortened to balance the pickup.
  //   Source: MUT + 'HolstGT/Thaxted/' (LilyPond, Methodist Hymnbook 1933 no. 900; chords from its chord line)
  //   Cross-check: https://en.wikipedia.org/wiki/I_Vow_to_Thee,_My_Country (LilyPond score of the first line) — identical.
  //   Public domain: Holst d. 1934. Confidence: high.
  {
    id: 'i-vow-to-thee-my-country',
    country: 'gb',
    themes: ['classical'],
    title: 'I Vow to Thee, My Country',
    titleEn: 'I Vow to Thee, My Country',
    composer: 'Holst',
    aka: ['Thaxted', 'Jupiter', 'The Planets'],
    emoji: '🪐',
    level: 'medium',
    bpm: 90,
    beatsPerBar: 3,
    pickup: 1,
    melody: `E4:0.5 G4:0.5 |
             A4:1.5 C5:0.5 B4:0.75 G4:0.25 | C5:0.5 D5:0.5 C5 B4 | A4:0.5 B4:0.5 A4 G4 | E4:2 E4:0.5 G4:0.5 |
             A4:1.5 C5:0.5 B4:0.75 G4:0.25 | C5:0.5 D5:0.5 E5 E5 | E5:0.5 D5:0.5 C5 D5 | C5:2 G4:0.5 E4:0.5 |
             D4:1.5 D4:0.5 C4:0.5 E4:0.5 | D4 G4 G4:0.5 E4:0.5 | D4:1.5 D4:0.5 E4:0.5 G4:0.5 | A4:2 A4:0.5 B4:0.5 |
             C5:0.75 C5:0.25 B4 A4 | G4 C5 E4 | D4:0.5 C4:0.5 D4 E4 | G4:2 E4:0.5 G4:0.5 |
             A4:1.5 C5:0.5 B4:0.75 G4:0.25 | C5:0.5 D5:0.5 C5 B4 | A4:0.5 B4:0.5 A4 G4 | E4:2 E4:0.5 G4:0.5 |
             A4:1.5 C5:0.5 B4:0.75 G4:0.25 | C5:0.5 D5:0.5 E5 E5 | E5:0.5 D5:0.5 C5 D5 | C5:2`,
    chords: 'F.Dm C F.G Am.G F.Dm C F C G.Am G.C G.C F.Dm Am.F C F.Am G F.G C.Em F.G Am.G F.G C F.Dm C',
  },
];
