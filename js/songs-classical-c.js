// Classical themes – Baroque: Bach, Handel, Vivaldi, Purcell and contemporaries.
// Same format as songs-classical-a.js (composer shown on cards and searchable).
// Melodies are taken from public-domain editions; each entry names its source.
// Most were converted mechanically from the MIDI or LilyPond files of the Mutopia Project (top voice only, durations
// as notated), then transposed as stated. Chords are simplified from the composer's own bass and inner parts.
// Notes tied across a bar line are written as a note plus a rest (mentioned where it happens).
// MU = https://www.mutopiaproject.org/ftp/

export const SONGS_CLASSICAL_C = [
  // Toccata und Fuge d-Moll, BWV 565 — the opening of the Toccata (bars 1–3): the famous mordent-and-run motif, its echo,
  //  the run again, then the diminished chord resolving to the tonic.
  //  Original D minor, 4/4 - moved down a fourth to A minor. The third statement of the run (bar 2) sounds an octave lower
  //  in the original (left hand); here it is played at the octave of the second statement so it stays on the keyboard.
  //  The chord at the end of bar 2 is tied into bar 3 (written as a rest). Mordents dropped; fermatas ignored.
  //  Source: MU + 'BachJS/BWV565/ToccataFugue/ToccataFugue.mid' (converted mechanically).
  //  Cross-check: https://en.wikipedia.org/wiki/Toccata_and_Fugue_in_D_minor,_BWV_565 (LilyPond score of bars 1–3) — identical.
  //  Chords from the pedal and the left hand. Public domain (Bach d. 1750; attribution sometimes questioned). Confidence: high.
  {
    id: 'bach-toccata-d-minor',
    country: 'de',
    themes: ['classical'],
    title: 'Toccata und Fuge d-Moll',
    titleEn: 'Toccata and Fugue in D Minor',
    composer: 'J. S. Bach',
    aka: ['BWV 565', 'Toccata in D minor', 'Toccata'],
    emoji: '🎹',
    level: 'hard',
    bpm: 50,
    beatsPerBar: 4,
    melody: `E5:0.5 R:0.125 D5:0.0625 C5:0.0625 B4:0.0625 A4:0.0625 G#4:0.125 A4:0.25 R:0.75 E4:0.5 R:0.125 B3:0.125 C4:0.125 G#3:0.125 A3:0.25 R:0.75 |
             E4:0.5 R:0.125 D4:0.0625 C4:0.0625 B3:0.0625 A3:0.0625 G#3:0.125 A3:0.25 R:0.75 R:1 B3 |
             R:1 A3 R:2`,
    chords: 'Am Am.E Am',
  },
  // Schafe können sicher weiden (Sheep May Safely Graze), aria from the Hunting Cantata BWV 208 — soprano, bars 5–14
  //  (its first two phrases, "Schafe können sicher weiden, wo ein guter Hirte wacht").
  //  Original B-flat major, 4/4 - moved down a seventh to C. Trill dropped.
  //  Source: MU + 'BachJS/BWV208/Sheep/Sheep.mid' (Breitkopf & Härtel 1881; converted mechanically).
  //  Cross-check: https://en.wikipedia.org/wiki/Sheep_May_Safely_Graze (LilyPond score of bars 5–8) — identical.
  //  Chords from the continuo and the two recorders. Public domain. Confidence: high.
  {
    id: 'bach-sheep-may-safely-graze',
    country: 'de',
    themes: ['classical', 'lullaby'],
    title: 'Schafe können sicher weiden',
    titleEn: 'Sheep May Safely Graze',
    composer: 'J. S. Bach',
    aka: ['BWV 208', 'Hunting Cantata', 'Jagdkantate', 'Sheep May Safely Graze'],
    emoji: '🐑',
    level: 'medium',
    bpm: 66,
    beatsPerBar: 4,
    melody: `C4 E4:0.5 D4:0.5 D4:1.5 E4:0.5 | F4 A4:0.5 G4:0.5 E4 D4:0.5 C4:0.5 | E4:0.5 C4:0.5 B3:0.5 A3:0.5 D4:1.5 E4:0.5 | B3 A3:0.5 G3:0.5 G3:2 |
             G3 Bb3:0.5 A3:0.5 A3:1.5 B3:0.5 | C4 E4:0.5 D4:0.5 B3 A3:0.5 G3:0.5 | G4 A4:0.5 G4:0.5 G4:0.5 E4:0.5 D4:0.5 C4:0.5 | G4 A4:0.5 G4:0.5 G4:0.5 E4:0.5 D4:0.5 C4:0.5 |
             F4:1.5 G4:0.5 E4:0.5 D4:0.5 C4:0.5 D4:0.5 | B3:1.5 C4:0.5 C4:2`,
    chords: 'C G.C Am.Dm G C.F Dm.G C C Dm.C G.C',
  },
  // Jesus bleibet meine Freude (Jesu, Joy of Man's Desiring), chorale from Herz und Mund und Tat und Leben, BWV 147, no. 10 —
  //  the famous triplet melody of Violin I (with the oboe), bars 1–9: the whole opening ritornello up to the choir's entry.
  //  Original G major, 9/8 (strings in 9/8 against the choir's 3/4) - moved down a fifth to C; counted in eighths.
  //  Source: Bach-Gesellschaft edition, vol. 30 (1884), p. 229 — scan at https://archive.org/details/bach-gesellschaft-ausgabe
  //  ('BGA Band 30.pdf'), read note by note. No machine-readable public-domain source was found for a cross-check.
  //  Chords from the continuo of the same page. Public domain. Confidence: medium-high.
  {
    id: 'bach-jesu-joy',
    country: 'de',
    themes: ['classical', 'christmas'],
    title: 'Jesus bleibet meine Freude',
    titleEn: "Jesu, Joy of Man's Desiring",
    composer: 'J. S. Bach',
    aka: ['BWV 147', 'Herz und Mund und Tat und Leben', "Jesu, Joy of Man's Desiring", 'Jesus bleibet meine Freude'],
    emoji: '😊',
    level: 'medium',
    bpm: 168,
    beatsPerBar: 9,
    melody: `R C4 D4 E4 G4 F4 F4 A4 G4 | G4 C5 B4 C5 G4 E4 C4 D4 E4 | F4 G4 A4 G4 F4 E4 D4 E4 C4 | B3 C4 D4 G3 B3 D4 F4 E4 D4 |
             E4 C4 D4 E4 G4 F4 F4 A4 G4 | G4 C5 B4 C5 G4 E4 C4 D4 E4 | A3 G4 F4 E4 D4 C4 G3 C4 B3 | C4 E4 G4 C5 G4 E4 C4 E4 G4 | C5:3 R:6`,
    chords: 'C C.Am Dm.F G C.F C.G F.G C C',
  },
  // Bourrée e-Moll (Lute Suite in E minor, BWV 996, 5th movement) — top voice, upbeat and bars 1–8 (the first strain).
  //  Original E minor, 2/2 (counted here in quarters, 4 per bar) - moved up a fourth to A minor.
  //  Where the upper voice pauses for a moment (bars 4 and 7) the bass notes are left out and written as rests.
  //  Source: MU + 'BachJS/BWV996/bourree/bourree.mid' (Denkmäler alter Lautenkunst, Wolfenbüttel 1921; converted mechanically).
  //  Only one notated source used; chords from its bass. Public domain. Confidence: high.
  {
    id: 'bach-bourree-e-minor',
    country: 'de',
    themes: ['classical'],
    title: 'Bourrée e-Moll',
    titleEn: 'Bourrée in E Minor',
    composer: 'J. S. Bach',
    aka: ['BWV 996', 'Lute Suite in E minor', 'Bourrée'],
    emoji: '🪕',
    level: 'medium',
    bpm: 120,
    beatsPerBar: 4,
    pickup: 1,
    melody: `A4:0.5 B4:0.5 | C5 B4:0.5 A4:0.5 G#4 A4:0.5 B4:0.5 | E4 F#4:0.5 G#4:0.5 A4 G4:0.5 F4:0.5 | E4 D4:0.5 C4:0.5 B3 C4:0.5 D4:0.5 | E4:0.5 D4:0.5 C4:0.5 B3:0.5 A3:0.5 R:0.5 A4:0.5 B4:0.5 |
             C5 B4:0.5 A4:0.5 G#4 A4:0.5 B4:0.5 | E4 F#4:0.5 G#4:0.5 A4 G4:0.5 F4:0.5 | E4 D4:0.5 C4:0.5 B3 R:0.5 C4:0.5 | C4:3`,
    chords: 'Am.E E.Dm C.G C.Am Am.E E.Dm C.G C',
  },
  // Menuett g-Moll, BWV Anh. 115 — from the 1725 Notebook for Anna Magdalena Bach (now attributed to Christian Petzold),
  //  the companion of the famous Minuet in G. Bars 1–16 (the first strain, ending in the relative major).
  //  Original G minor, 3/4 - moved up a tone (and down an octave) to A minor.
  //  Source: MU + 'BachJS/BWVAnh115/anna-magdalena-05/anna-magdalena-05.mid' (converted mechanically).
  //  Only one notated source used; chords from its left hand. Public domain. Confidence: high.
  {
    id: 'bach-minuet-g-minor',
    country: 'de',
    themes: ['classical'],
    title: 'Menuett g-Moll',
    titleEn: 'Minuet in G Minor',
    composer: 'J. S. Bach',
    aka: ['BWV Anh. 115', 'Petzold', 'Anna Magdalena Notebook', 'Minuet in G minor'],
    emoji: '💃',
    level: 'easy',
    bpm: 120,
    beatsPerBar: 3,
    melody: `C5 B4 A4 | B4 E4 E4 | A4 A3:0.5 B3:0.5 C4:0.5 D4:0.5 | E4:3 | F4 G4:0.5 F4:0.5 E4:0.5 D4:0.5 | E4 F4:0.5 E4:0.5 D4:0.5 C4:0.5 | D4 E4:0.5 D4:0.5 C4:0.5 D4:0.5 | B3:3 |
             C5 B4 A4 | B4 E4 E4 | A4 A3:0.5 B3:0.5 C4:0.5 D4:0.5 | E4:3 | G4 A4:0.5 G4:0.5 F4:0.5 E4:0.5 | F4 G4:0.5 F4:0.5 E4:0.5 D4:0.5 | E4 A4 D4 | C4:3`,
    chords: 'Am E F E F C G E Am E F E A Dm Am.G C',
  },
  // Polonaise g-Moll, BWV Anh. 119 — from the 1725 Notebook for Anna Magdalena Bach. Bars 1–10 (the first strain).
  //  Original G minor, 3/4 - moved up a tone to A minor.
  //  Source: MU + 'BachJS/BWVAnh119/BWV-119/BWV-119.mid' (converted mechanically).
  //  Only one notated source used; chords from its left hand. Range C4–A5. Public domain. Confidence: high.
  {
    id: 'bach-polonaise-g-minor',
    country: 'de',
    themes: ['classical'],
    title: 'Polonaise g-Moll',
    titleEn: 'Polonaise in G Minor',
    composer: 'J. S. Bach',
    aka: ['BWV Anh. 119', 'Anna Magdalena Notebook', 'Polonaise'],
    emoji: '👑',
    level: 'medium',
    bpm: 80,
    beatsPerBar: 3,
    melody: `A4:0.75 B4:0.25 C5 D5 | B4:0.5 B4:0.25 C5:0.25 D5:2 | C5:0.5 C5:0.25 D5:0.25 E5:0.5 A5:0.5 D5:0.5 A5:0.5 | C5:0.5 B4:0.25 C5:0.25 A4:2 |
             C5:0.75 D5:0.25 E5 G5 | E5:0.5 D5:0.25 C5:0.25 B4:0.25 C5:0.25 D5:0.25 B4:0.25 G4 | G5:0.5 E5:0.5 C5:0.5 G5:0.5 A5:0.25 G5:0.25 F5:0.25 E5:0.25 |
             F5:0.5 D5:0.5 B4:0.5 F5:0.5 G5:0.25 F5:0.25 E5:0.25 D5:0.25 | E5:0.5 D5:0.25 E5:0.25 F5:0.5 E5:0.5 D5:0.5 C5:0.5 | B4:0.25 C5:0.25 D5:0.25 B4:0.25 C5 C4`,
    chords: 'Am.D D Am.D Am Am.Em C.G C G Am.Dm G.C',
  },
  // Gavotte (French Suite No. 5 in G major, BWV 816) — top voice, upbeat and bars 1–8 (the first strain).
  //  Original G major, 2/2 (counted here in quarters) - moved down a fifth to C.
  //  Source: MU + 'BachJS/BWV816/french-suite-5/french-suite-5-gavotte.mid' (converted mechanically).
  //  Only one notated source used; chords from its left hand. Public domain. Confidence: high.
  {
    id: 'bach-gavotte-french-suite-5',
    country: 'de',
    themes: ['classical'],
    title: 'Gavotte (Französische Suite Nr. 5)',
    titleEn: 'Gavotte from French Suite No. 5',
    composer: 'J. S. Bach',
    aka: ['BWV 816', 'French Suite No. 5', 'Gavotte'],
    emoji: '🩰',
    level: 'medium',
    bpm: 120,
    beatsPerBar: 4,
    pickup: 2,
    melody: `E5 C5 | G4 A4:0.5 B4:0.5 C5 A4 | E4:2 A4 F4 | D4 E4:0.5 F4:0.5 G4:0.5 E4:0.5 F4:0.5 D4:0.5 | F4:0.5 E4:0.5 D4:0.5 C4:0.5 E5 C5 |
             A4 A4:0.5 B4:0.5 C5 A4 | F#4 G4:0.5 A4:0.5 B4:0.5 G4:0.5 C5:0.5 A4:0.5 | B4:0.5 G4:0.5 D5 C5:0.5 B4:0.5 A4:0.5 B4:0.5 | G4:2`,
    chords: 'G.Am Em.F G C D.Am D.G G G',
  },
  // Invention Nr. 1 C-Dur, BWV 772 — right hand, bars 1–7 (the theme, its answer and the run to the cadence in G),
  //  ending on the first note of bar 7.
  //  Original C major, 4/4 - no transposition. Range C4–A5. The mordent in bar 6 is written out as in the source.
  //  Source: MU + 'BachJS/BWV772/bach-invention-01/bach-invention-01.mid' (converted mechanically).
  //  Only one notated source used; chords from the left hand. Public domain. Confidence: high.
  {
    id: 'bach-invention-1',
    country: 'de',
    themes: ['classical'],
    title: 'Invention Nr. 1 C-Dur',
    titleEn: 'Invention No. 1 in C Major',
    composer: 'J. S. Bach',
    aka: ['BWV 772', 'Two-Part Invention No. 1', 'Inventio 1'],
    emoji: '🧩',
    level: 'hard',
    bpm: 72,
    beatsPerBar: 4,
    melody: `R:0.25 C4:0.25 D4:0.25 E4:0.25 F4:0.25 D4:0.25 E4:0.25 C4:0.25 G4:0.5 C5:0.5 B4:0.5 C5:0.5 |
             D5:0.25 G4:0.25 A4:0.25 B4:0.25 C5:0.25 A4:0.25 B4:0.25 G4:0.25 D5:0.5 G5:0.5 F5:0.5 G5:0.5 |
             E5:0.25 A5:0.25 G5:0.25 F5:0.25 E5:0.25 G5:0.25 F5:0.25 A5:0.25 G5:0.25 F5:0.25 E5:0.25 D5:0.25 C5:0.25 E5:0.25 D5:0.25 F5:0.25 |
             E5:0.25 D5:0.25 C5:0.25 B4:0.25 A4:0.25 C5:0.25 B4:0.25 D5:0.25 C5:0.25 B4:0.25 A4:0.25 G4:0.25 F#4:0.25 A4:0.25 G4:0.25 B4:0.25 |
             A4:0.5 D4:0.5 C5:0.75 D5:0.25 B4:0.25 A4:0.25 G4:0.25 F#4:0.25 E4:0.25 G4:0.25 F#4:0.25 A4:0.25 |
             G4:0.25 B4:0.25 A4:0.25 C5:0.25 B4:0.25 D5:0.25 C5:0.25 E5:0.25 D5:0.25 B4:0.125 C5:0.125 D5:0.25 G5:0.25 B4:0.5 A4:0.25 G4:0.25 | G4:0.5 R:3.5`,
    chords: 'C G Am C.Am D.G Em.G G',
  },
  // Arioso (slow movement of the Harpsichord Concerto in F minor, BWV 1056; also the Sinfonia of Cantata BWV 156) —
  //  the melody, bars 1–7, ending on the half-close in the dominant.
  //  The source is Sam Franko's arrangement for cello and piano (G. Schirmer, 1915), in G major; only Bach's melody line is used.
  //  Moved up a fourth from G to C. Played by the cello in the source; ornaments are written out as there.
  //  Source: MU + 'BachJS/BWV1056/arioso/arioso.mid' (converted mechanically). Only one notated source used;
  //  chords from the piano part. Public domain. Confidence: medium-high.
  {
    id: 'bach-arioso',
    country: 'de',
    themes: ['classical'],
    title: 'Arioso',
    titleEn: 'Arioso',
    composer: 'J. S. Bach',
    aka: ['BWV 1056', 'BWV 156', 'Ich steh mit einem Fuß im Grabe', 'Largo'],
    emoji: '🕊️',
    level: 'hard',
    bpm: 50,
    beatsPerBar: 4,
    melody: `E4:1.25 F4:0.25 G4:0.25 A4:0.25 D4:1.25 E4:0.25 F4:0.25 G4:0.25 | C4:0.5 C5:0.25 A4:0.25 F4:1.25 D5:0.25 B4:0.25 G4:0.25 F4:0.5 E4:0.25 G4:0.25 |
             E4:0.5 D4:0.25 C4:0.25 R C5:1.25 A4:0.25 B4:0.25 C5:0.25 | D4:1.25 F#4:0.25 A4:0.25 C5:0.25 B4:1.25 G4:0.25 E4:0.25 D4:0.25 |
             C4:1.25 E4:0.25 G4:0.25 B4:0.25 A4:1.25 F#4:0.25 D4:0.25 C4:0.25 | B3:0.25 C4:0.25 F#4:0.25 G4:0.25 G4:1.25 A4:0.25 C5:0.25 E5:0.25 F#4:0.75 G4:0.25 | G4:1.5 R:0.5 G4:1.5 R:0.5`,
    chords: 'C.G F.G C.Am D.G C.D G G',
  },
  // Siciliano (Flute Sonata in E-flat major, BWV 1031, 2nd movement; authorship sometimes given to C. P. E. Bach) —
  //  flute melody, bars 1–8.
  //  Original G minor, 6/8 (counted in eighths) - moved up a tone and down an octave to A minor.
  //  Source: MU + 'BachJS/BWV1031/bach_siciliano_bmv_1031/bach_siciliano_bmv_1031.mid' (flute part after the
  //  Bach-Gesellschaft edition; converted mechanically). Only one notated source used; chords from the accompaniment. Confidence: high.
  {
    id: 'bach-siciliano',
    country: 'de',
    themes: ['classical', 'lullaby'],
    title: 'Siciliano',
    titleEn: 'Siciliano',
    composer: 'J. S. Bach',
    aka: ['BWV 1031', 'Flute Sonata in E-flat', 'Siciliana'],
    emoji: '🌊',
    level: 'medium',
    bpm: 150,
    beatsPerBar: 6,
    melody: `E4:1.5 F4:0.5 E4 E4 A4 F4 | D4:6 | D4:1.5 E4:0.5 D4 D4 B4 D4 | D4:0.5 C4 B3:0.5 A3 R:3 |
             C4 E4 F4:2 B4 F4 | F4 E4 R G4 C5 G4 | R A4 G4:2 F4 E4 | D4:0.5 G4:0.5 B4:0.5 D5:0.5 C5:0.5 E5:0.5 D5:0.5 C5:0.5 B4:0.5 A4:0.5 G4:0.5 F4:0.5`,
    chords: 'Am Dm E Am Am.E C F G',
  },
  // Wachet auf, ruft uns die Stimme — Philipp Nicolai's chorale tune (1599) in Bach's setting that closes Cantata BWV 140
  //  ("Gloria sei dir gesungen"); the same tune is the cantus firmus of the famous organ chorale BWV 645.
  //  Soprano, the whole tune once (bars 1–17; the repeat of the first part is not written out). The short bar before the
  //  repeat and the upbeat after it (bars 8 and 8a in the source) are joined into one bar.
  //  Original E-flat major, 4/4 - moved down a minor third to C.
  //  Source: music21 corpus 'bach/bwv140.7.mxl' (https://github.com/cuthbertLab/music21, BSD; converted mechanically).
  //  Cross-check: https://en.wikipedia.org/wiki/Wachet_auf,_ruft_uns_die_Stimme (LilyPond score of BWV 140/7, in longer
  //  note values) — same pitches; there the line ends get extra rests. Chords from Bach's alto, tenor and bass. Public domain. Confidence: high.
  {
    id: 'bach-wachet-auf',
    country: 'de',
    themes: ['classical', 'christmas'],
    title: 'Wachet auf, ruft uns die Stimme',
    titleEn: 'Sleepers, Wake',
    composer: 'J. S. Bach',
    aka: ['BWV 140', 'BWV 645', 'Nicolai', 'Sleepers, Wake!', 'Wake, Awake'],
    emoji: '⏰',
    level: 'easy',
    bpm: 84,
    beatsPerBar: 4,
    melody: `C4 E4 G4:1.5 G4:0.5 | G4 G4 A4:2 | G4:2 R G4 | C5 G4 C5:0.5 D5:0.5 E5 | D5 C5 B4 A4 | G4:2 R G4 | C5 G4 A4 E4 | F4:0.5 E4:0.5 D4 C4 G4 |
             G4:1.5 F4:0.5 E4 D4 | C4:2 R G4 | G4:1.5 F4:0.5 E4 D4 | C4:2 R D4 | E4 F4 E4 G4 | A4 B4 C5 C5:0.5 D5:0.5 | E5 D5 C5 G4 | C5 G4 A4 E4 | F4:0.5 E4:0.5 D4 C4:2`,
    chords: 'C C.D G C D.G G.C C.Am G.C C.Em Am.Em G.C C.G C E.Am Em.Am C.F G.C',
  },
  // O Haupt voll Blut und Wunden (O Sacred Head, Now Wounded) — Hassler's tune in Bach's setting from the St Matthew Passion
  //  (BWV 244, no. 54). Soprano, upbeat and bars 1–12 (first part once, without its repeat). The bar endings with fermatas
  //  and the upbeats after them (bars 4/4a and 8/8a in the source) are joined into whole bars.
  //  Original D minor, 4/4 - moved down a fourth to A minor.
  //  Source: music21 corpus 'bach/bwv244.54.mxl' (BSD; converted mechanically).
  //  Cross-check: https://en.wikipedia.org/wiki/O_Sacred_Head,_Now_Wounded (LilyPond score of BWV 244/54) — identical.
  //  Chords from Bach's lower voices. Public domain. Confidence: high.
  {
    id: 'bach-o-haupt-voll-blut',
    country: 'de',
    themes: ['classical'],
    title: 'O Haupt voll Blut und Wunden',
    titleEn: 'O Sacred Head, Now Wounded',
    composer: 'J. S. Bach',
    aka: ['BWV 244', 'St Matthew Passion', 'Matthäus-Passion', 'Passion Chorale', 'Hassler'],
    emoji: '✝️',
    level: 'easy',
    bpm: 60,
    beatsPerBar: 4,
    pickup: 1,
    melody: `E4 | A4 G4 F4 E4 | D4:2 E4 B4 | C5 C5 B4:0.5 A4:0.5 B4 | A4:3 C5 | B4:0.5 A4:0.5 G4 A4 B4 | C5:2 C5 G4 |
             A4 G4 F4:0.5 E4:0.5 F4 | E4:3 C5 | B4:0.5 C5:0.5 D5 C5 B4 | A4:2 B4 E4 | F4 E4 D4 G4 | E4:3`,
    chords: 'Am.C G.C Am.E Am G.F F.C A.Dm A G.C D.G Dm.G C',
  },
  // Lascia ch'io pianga (Rinaldo, HWV 7, Act 2) — Almirena's aria, voice part, bars 13–26 (the main theme and its answer).
  //  The source is in D major (the opera has it in F), 3/4 - moved down a tone to C.
  //  Source: music21 corpus 'handel/rinaldo/Lascia_chio_pianga.mxl' (BSD; converted mechanically).
  //  Only one notated source found; chords from its piano part. Public domain (Handel d. 1759). Confidence: medium-high.
  {
    id: 'handel-lascia-chio-pianga',
    country: 'de',
    themes: ['classical'],
    title: "Lascia ch'io pianga",
    titleEn: "Lascia ch'io pianga",
    composer: 'Handel',
    aka: ['Rinaldo', 'HWV 7', 'Let me weep', 'Händel'],
    emoji: '🌹',
    level: 'medium',
    bpm: 60,
    beatsPerBar: 3,
    melody: `E4 E4 R:0.5 E4:0.5 | F4 F4 R | D4 G4:1.5 F4:0.5 | F4 E4 R | A4 A4 B4:1/3 C5:1/3 D5:1/3 | G4 G4 R:0.5 C5:0.5 | E4:0.75 D4:0.25 E4 D4:0.75 C4:0.25 | C4:3 |
             E4 C5:1.5 A4:0.5 | F#4 F#4 R | A4 D5:1.5 B4:0.5 | G4:0.5 F#4:0.5 G4 R:0.5 C5:0.5 | B4:0.75 A4:0.25 B4 A4:0.75 G4:0.25 | G4:3`,
    chords: 'C Dm G C F.G C C.G C Am D D.G C.D D G',
  },
  // Aria (Goldberg Variations, BWV 988) — the melody of the theme, bars 1–8.
  //  Original G major, 3/4 - moved down a fifth to C. Mordents, trills and appoggiaturas become their main notes;
  //  the small written-out turns (bars 4 and 7) are kept as notated.
  //  Source: https://en.wikipedia.org/wiki/Goldberg_Variations (LilyPond score of bars 1–8; converted by hand, note for note).
  //  Cross-check: MU + 'BachJS/BWV988/bwv-988-aria/bwv-988-aria.mid' — same notes. Chords from Bach's bass (the ground of
  //  the variations, also given in the article). Public domain. Confidence: high.
  {
    id: 'bach-goldberg-aria',
    country: 'de',
    themes: ['classical', 'lullaby'],
    title: 'Aria (Goldberg-Variationen)',
    titleEn: 'Goldberg Variations: Aria',
    composer: 'J. S. Bach',
    aka: ['BWV 988', 'Goldberg Variations', 'Aria'],
    emoji: '🌙',
    level: 'hard',
    bpm: 60,
    beatsPerBar: 3,
    melody: `C5 C5 D5:0.75 E5:0.25 | D5:0.5 B4:0.5 G4:2 | C4 C4:1.5 B3:0.25 C4:0.25 | D4:0.125 C4:0.125 B3:0.25 C4:0.125 B3:0.125 A3:0.25 G3:2 |
             G4 G4 A4:0.75 Bb4:0.25 | A4:0.5 F4:0.5 D4:1.5 B4:0.5 | C5:0.125 B4:0.375 D5:0.125 C5:0.375 B4:0.125 A4:0.375 G4:0.125 F4:0.375 D5:0.75 F4:0.25 | E4:0.125 C4:0.375 B3:0.5 C4:2`,
    chords: 'C G Am G C F G C',
  },
  // Concerto for Two Violins in D minor, BWV 1043, 1st movement (Vivace) — the fugal theme: second violins, bars 1–4,
  //  then its answer in the first violins, bars 5–8 (the line follows the instrument that has the theme).
  //  Original D minor, 4/4 - moved down a fourth to A minor. The excerpt stops where the third entry begins.
  //  Source: MU + 'BachJS/BWV1043/concerto-in-d-minor/score.mid' (converted mechanically).
  //  Cross-check: https://en.wikipedia.org/wiki/Concerto_for_Two_Violins_(Bach) (LilyPond score of bars 1–4) — identical.
  //  Chords from the viola and continuo. Public domain. Confidence: high.
  {
    id: 'bach-double-violin-concerto',
    country: 'de',
    themes: ['classical'],
    title: 'Doppelkonzert d-Moll',
    titleEn: 'Concerto for Two Violins',
    composer: 'J. S. Bach',
    aka: ['BWV 1043', 'Double Violin Concerto', 'Double Concerto', 'Vivace'],
    emoji: '🎻',
    level: 'hard',
    bpm: 84,
    beatsPerBar: 4,
    melody: `A3:0.25 B3:0.25 C4:0.25 D4:0.25 E4:0.5 A4:0.5 G#4:0.5 E4:0.5 B3:0.5 D4:0.5 | C#4:0.5 A3:0.5 G4:1.5 F#4:0.25 E4:0.25 F#4:0.5 D4:0.5 |
             B3:0.5 D4:0.5 F4:0.5 A3:0.5 G#3:0.5 E4:0.5 A3:0.5 D4:0.5 | C4 B3 A3:0.25 G#3:0.25 A3:0.25 B3:0.25 C#4:0.25 D#4:0.25 E4:0.25 F#4:0.25 |
             E4:0.25 F#4:0.25 G4:0.25 A4:0.25 B4:0.5 E5:0.5 D#5:0.5 B4:0.5 F#4:0.5 A4:0.5 | G#4:0.5 E4:0.5 D5:1.5 C#5:0.25 B4:0.25 C#5:0.5 A4:0.5 |
             F#4:0.5 A4:0.5 C5:0.5 E4:0.5 D#4:0.5 B4:0.5 E4:0.5 A4:0.5 | G4 F#4 E4:0.25 D#4:0.25 E4:0.25 F#4:0.25 G4:0.25 A4:0.25 B4:0.25 C5:0.25`,
    chords: 'Am.E A.D Dm E.A Em.B E.A Am.Em Em',
  },
  // L'estate (Summer, The Four Seasons, Op. 8 No. 2, RV 315), 3rd movement (Presto, the summer storm) — top line of the
  //  violins, bars 1–11: the octave-and-tremolo opening twice, the falling run, and the tremolo again.
  //  Original G minor, 3/4 - moved up a tone to A minor.
  //  Source: MU + 'VivaldiA/O8/summer/summer-score-2.mid' (converted mechanically).
  //  Only one notated source used; chords from the viola and cello. Public domain (Vivaldi d. 1741). Confidence: high.
  {
    id: 'vivaldi-summer-presto',
    country: 'it',
    themes: ['classical'],
    title: "L'estate – Presto",
    titleEn: 'Summer (Presto)',
    composer: 'Vivaldi',
    aka: ['The Four Seasons', 'Le quattro stagioni', 'RV 315', 'Op. 8 No. 2', 'Summer', 'Storm'],
    emoji: '⛈️',
    level: 'hard',
    bpm: 132,
    beatsPerBar: 3,
    melody: `A4:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 | G4:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 |
             F4:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 | E4:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.5 R:0.5 | R:3 |
             E5:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 | D5:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 |
             C5:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 | B4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.25 E4:0.5 R:0.5 |
             R:0.25 E5:0.25 D5:0.25 C5:0.25 B4:0.25 A4:0.25 G#4:0.25 F#4:0.25 E4:0.25 D4:0.25 C4:0.25 B3:0.25 | A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25 A3:0.25`,
    chords: 'Am Am Am Am Am E E E E E Am',
  },
  // L'autunno (Autumn, The Four Seasons, Op. 8 No. 3, RV 293), 1st movement (Allegro, the peasants' dance) — top line of
  //  the violins, bars 1–6: the opening phrase loud, then its quiet echo an octave lower.
  //  Original F major, 4/4 - moved down a fourth to C.
  //  Source: MU + 'VivaldiA/O8/autumn/autumn-score.mid' (converted mechanically).
  //  Only one notated source used; chords from the viola and cello. Public domain. Confidence: high.
  {
    id: 'vivaldi-autumn',
    country: 'it',
    themes: ['classical'],
    title: "L'autunno",
    titleEn: 'Autumn',
    composer: 'Vivaldi',
    aka: ['The Four Seasons', 'Le quattro stagioni', 'RV 293', 'Op. 8 No. 3', 'Autumn'],
    emoji: '🍂',
    level: 'easy',
    bpm: 112,
    beatsPerBar: 4,
    melody: `E5:0.5 E5:0.5 E5:0.5 F5:0.5 E5 E5:0.5 F5:0.5 | E5:0.5 E5:0.5 E5:0.5 E5:0.5 F5 E5:0.5 F5:0.5 | E5:0.5 D5:0.25 E5:0.25 F5:0.5 E5:0.5 D5 R |
             E4:0.5 E4:0.5 E4:0.5 F4:0.5 E4 E4:0.5 F4:0.5 | E4:0.5 E4:0.5 E4:0.5 F4:0.5 E4 E4:0.5 F4:0.5 | E4:0.5 D4:0.25 E4:0.25 F4:0.5 E4:0.5 D4 R`,
    chords: 'C C F.G C C F.G',
  },
  // La Réjouissance (Music for the Royal Fireworks, HWV 351, 4th movement) — the trumpet tune, upbeat and bars 1–8
  //  (the first strain, ending in the dominant).
  //  Original D major, 4/4 - moved down a ninth (a tone and an octave) to C. The final eighth rest is left out to balance the upbeat.
  //  Source: MU + 'HandelGF/BWV351/LaRej/LaRej.mid' — a trumpet-and-organ edition whose trumpet part is Handel's first
  //  trumpet line (converted mechanically). Only one notated source used; chords from its organ part. Public domain. Confidence: medium-high.
  {
    id: 'handel-la-rejouissance',
    country: 'de',
    themes: ['classical', 'celebrations'],
    title: 'La Réjouissance',
    titleEn: 'Royal Fireworks: La Réjouissance',
    composer: 'Handel',
    aka: ['Music for the Royal Fireworks', 'Feuerwerksmusik', 'HWV 351', 'Händel', 'Fireworks'],
    emoji: '🎆',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 4,
    pickup: 0.5,
    melody: `G3:0.5 | C4:0.5 C4:0.5 C4:0.5 C4:0.5 C4:0.25 D4:0.25 E4:0.25 D4:0.25 C4:0.5 C4:0.25 D4:0.25 | E4:0.5 E4:0.5 E4:0.5 E4:0.5 E4:0.25 F4:0.25 G4:0.25 F4:0.25 E4:0.5 E4:0.25 F4:0.25 |
             G4:0.5 G4:0.5 G4:0.5 G4:0.5 G4:1.5 C5:0.5 | G4:0.5 E4:0.5 R:0.5 C5:0.5 G4:0.5 E4:0.5 R:0.5 G4:0.5 | G4:0.5 A4:0.25 G4:0.25 F4:0.5 E4:0.5 D4:1.5 G4:0.5 |
             G4:0.5 A4:0.25 G4:0.25 F4:0.5 E4:0.5 D4:0.75 E4:0.25 D4:0.75 E4:0.25 | D4:0.25 E4:0.25 D4:0.25 E4:0.25 D4:0.25 E4:0.25 D4:0.25 E4:0.25 D4:1.5 D4:0.5 |
             E4:0.25 F#4:0.25 G4:0.25 A4:0.25 F#4:0.75 G4:0.25 G4:1.5`,
    chords: 'C C C C C.G C.G G D.G',
  },
  // Pifa (Pastoral Symphony, Messiah, HWV 56, no. 13) — the shepherds' music before the Christmas story; first violins,
  //  bars 1–11 (the whole first section).
  //  Original C major, 12/8 (counted in eighths) - moved down an octave. The note tied from bar 9 into bar 10 is written as a rest.
  //  Source: MU + 'HandelGF/HWV56/Messiah/Messiah-13.mid' (converted mechanically).
  //  Only one notated source used; chords from the bass and inner parts (a long C pedal at first). Public domain. Confidence: high.
  {
    id: 'handel-pifa',
    country: 'de',
    themes: ['classical', 'christmas'],
    title: 'Pifa (Pastoral Symphony)',
    titleEn: 'Pastoral Symphony',
    composer: 'Handel',
    aka: ['Messiah', 'HWV 56', 'Pifa', 'Pastoral Symphony', 'Händel'],
    emoji: '🐑',
    level: 'medium',
    bpm: 150,
    beatsPerBar: 12,
    melody: `C4:2 D4 E4:2 F4 G4:3 A4:3 | G4:1.5 F4:0.5 E4 F4:3 E4:3 F4:0.5 G4:0.5 A4:2 | G4:1.5 F4:0.5 E4 F4:3 E4:5 D4 | E4:1.5 F4:0.5 G4 F4:1.5 G4:0.5 E4 D4:3 G4:2 D4 |
             E4:2 D4 E4:1.5 D4:0.5 C4 D4:3 E4:0.5 F4:0.5 G4:2 | E4:2 D4:0.25 E4:0.25 F4:0.5 E4:3 D4:2 G3 G4:3 | G4:3 F4:3 F4:1.5 E4:0.5 D4 E4:2 C4 | D4:2 C4 D4:2 E4 F4:2 C4 F4:3 |
             F4:3 E4:1.5 D4:0.5 E4 D4:2 G3 G4:3 | R:1.5 F4:0.5 E4 F4:1.5 E4:0.5 D4 C4:3 F4:0.5 G4:0.5 A4:2 | G4:1.5 F4:0.5 E4 E4:2 D4 C4:6`,
    chords: 'C C C C.G G G F.Dm Bb.F C.G G.C C',
  },
  // Prélude (Cello Suite No. 1 in G major, BWV 1007) — the broken-chord opening, bars 1–4.
  //  Original G major, 4/4, for cello - moved up two octaves and a fourth to C so it lies in the middle of the keyboard.
  //  Source: MU + 'BachJS/BWV1007/bwv1007/bwv1007.mid' (converted mechanically).
  //  Only one notated source used; the chords are the harmonies Bach spells out in the arpeggios. Public domain. Confidence: high.
  {
    id: 'bach-cello-suite-1-prelude',
    country: 'de',
    themes: ['classical'],
    title: 'Prélude (Cellosuite Nr. 1)',
    titleEn: 'Cello Suite No. 1: Prelude',
    composer: 'J. S. Bach',
    aka: ['BWV 1007', 'Cello Suite No. 1', 'Prelude', 'Suite für Violoncello'],
    emoji: '🎻',
    level: 'medium',
    bpm: 66,
    beatsPerBar: 4,
    melody: `C4:0.25 G4:0.25 E5:0.25 D5:0.25 E5:0.25 G4:0.25 E5:0.25 G4:0.25 C4:0.25 G4:0.25 E5:0.25 D5:0.25 E5:0.25 G4:0.25 E5:0.25 G4:0.25 |
             C4:0.25 A4:0.25 F5:0.25 E5:0.25 F5:0.25 A4:0.25 F5:0.25 A4:0.25 C4:0.25 A4:0.25 F5:0.25 E5:0.25 F5:0.25 A4:0.25 F5:0.25 A4:0.25 |
             C4:0.25 B4:0.25 F5:0.25 E5:0.25 F5:0.25 B4:0.25 F5:0.25 B4:0.25 C4:0.25 B4:0.25 F5:0.25 E5:0.25 F5:0.25 B4:0.25 F5:0.25 B4:0.25 |
             C4:0.25 C5:0.25 E5:0.25 D5:0.25 E5:0.25 C5:0.25 E5:0.25 C5:0.25 C4:0.25 C5:0.25 E5:0.25 D5:0.25 E5:0.25 C5:0.25 E5:0.25 B4:0.25`,
    chords: 'C F G C',
  },
];
