// Classical themes – Opera and late Romantic: Verdi, Puccini, Bizet, Gounod, Wagner, Delibes, Massenet, Mascagni, Leoncavallo, Brahms, Bruch, Mahler.
// Same format as songs-classical-a.js (composer shown on cards and searchable).
// Melodies are taken from public-domain editions; each entry names its source.
// Pieces from Mutopia were converted mechanically from the MIDI/LilyPond files; pieces from archive.org were read
// note for note from scans of original-era vocal/piano scores. Only the top voice (melody) is kept; grace notes are left out,
// trills become their main note. Notes tied across a bar line are written as a note plus a rest (mentioned where it happens).
// MU = https://www.mutopiaproject.org/ftp/   IA = https://archive.org/details/

export const SONGS_CLASSICAL_F = [
  // Habanera "L'amour est un oiseau rebelle" (Carmen, Act 1) — Carmen's vocal line, the first verse (pickup + 16 bars).
  //  Original D minor, 2/4 - kept in D minor (range D4–D5). Triplet-16th turns kept as 1/6-beat notes.
  //  Ends on "plaît" at the change to D major (last bar shortened to balance the pickup).
  //  Source: IA 'carmenoperainfou00bize' (G. Schirmer vocal score, 1895), pp. 44–45.
  //  Cross-check: https://en.wikipedia.org/wiki/Habanera_(aria) (LilyPond score, bars 1–4) — identical.
  //  Chords simplified (the bass is a D pedal throughout). Public domain (Bizet d. 1875). Confidence: high.
  {
    id: 'bizet-habanera',
    country: 'fr',
    themes: ['classical'],
    title: "L'amour est un oiseau rebelle",
    titleEn: 'Habanera',
    composer: 'Bizet',
    aka: ['Habanera', 'Carmen', 'Love Is a Rebellious Bird'],
    emoji: '🌹',
    level: 'hard',
    bpm: 72,
    beatsPerBar: 2,
    pickup: 1,
    melody: `D5:0.5 C#5:0.5 |
             C5:1/3 C5:1/3 C5:1/3 B4:0.5 Bb4:0.5 | A4:0.75 A4:0.25 G#4:0.5 G4:0.5 | F4:1/6 G4:1/6 F4:1/6 E4:0.25 F4:0.25 G4:0.5 F4:0.5 | E4:0.5 R:0.5 D5:0.5 C#5:0.5 |
             C5:1/3 C5:1/3 C5:1/3 B4:0.5 Bb4:0.5 | A4:0.5 R:0.25 A4:0.25 G4:0.5 F4:0.5 | E4:1/6 F4:1/6 E4:1/6 D4:0.25 E4:0.25 F4:0.5 E4:0.5 | D4 D5:0.5 C#5:0.5 |
             C5:1/3 C5:1/3 C5:1/3 B4:0.5 Bb4:0.5 | A4:0.5 R:0.25 A4:0.25 G#4:0.5 G4:0.5 | F4:1/6 G4:1/6 F4:1/6 E4:0.25 F4:0.25 G4:0.5 F4:0.5 | E4 D5:0.5 C#5:0.5 |
             C5:1/3 C5:1/3 C5:1/3 B4:0.5 Bb4:0.5 | A4:0.5 R:0.25 A4:0.25 G4:0.5 F4:0.5 | E4:1/6 F4:1/6 E4:1/6 D4:0.25 E4:0.25 F4:0.5 E4:0.5 | D4`,
    chords: 'Dm Dm A Dm Dm Dm A Dm Dm Dm A Dm Dm Dm A D',
  },
  // Ave Maria (Méditation sur le 1er prélude de Bach) — Gounod's melody over Bach's Prelude in C, BWV 846.
  //  Source edition is in F major, 4/4 (violin) - moved down a fourth to C, which puts it over Bach's own key.
  //  Bars 5–23 of the score (the melody enters after 4 bars of prelude), up to the first cadence on "Ave Maria … gratia plena".
  //  Source: MU + 'GounodC/AveMaria/AveMaria.mid' (Heugel edition, 1856; converted mechanically).
  //  Chords follow Bach's prelude (BWV 846, bars 1–19), simplified. Public domain (Gounod d. 1893). Confidence: high.
  {
    id: 'gounod-ave-maria',
    country: 'fr',
    themes: ['classical', 'lullaby'],
    title: 'Ave Maria',
    titleEn: 'Ave Maria (Bach–Gounod)',
    composer: 'Gounod',
    aka: ['Bach–Gounod', 'Bach/Gounod Ave Maria', 'Méditation sur le premier prélude de Bach'],
    emoji: '🕊️',
    level: 'medium',
    bpm: 66,
    beatsPerBar: 4,
    melody: `E4:4 | F4:3 R:0.5 F4:0.5 | G4:3 D4 | E4:2 E4:0.5 R:1.5 |
             A4:2 A4:0.5 A3:0.5 B3:0.5 C4:0.5 | D4:1.5 E4:0.5 D4 R | G4:2 G4:0.5 G3:0.5 A3:0.5 B3:0.5 | C4:1.5 D4:0.5 C4 R |
             C5:2 C5:0.5 C4:0.5 D4:0.5 E4:0.5 | F#4:1.5 E4:0.5 D4 A3 | B3:2 R D4 | E4:2 E4:0.5 E4:0.5 F4:0.5 G4:0.5 |
             A4:1.75 A3:0.25 A3 R | D4:2 D4:0.5 D4:0.5 E4:0.5 F4:0.5 | G4:2 G3 R | C4:2 C4:0.5 C4:0.5 D4:0.5 E4:0.5 |
             F4:2 F4:0.5 F4:0.5 G4:0.5 A4:0.5 | B4:1.5 A4:0.5 G4 D4 | E4:2 E4:0.5 R:1.5`,
    chords: 'C Dm G C Am D G C Am D G A Dm Dm C F Dm G C',
  },
  // La donna è mobile (Rigoletto, Act 3) — the Duke's canzone, bars 1–16 of the vocal line (the verse, sung twice).
  //  Original B major, 3/8 - moved down a major seventh to C (G3–G4). Counted in eighths (beatsPerBar 3).
  //  Grace notes dropped. The verse ends on the dominant, as in the score (the refrain follows).
  //  Source: IA 'rigolettooperain00verd' (G. Schirmer vocal score, 1902), pp. 173–174.
  //  Chords simplified from the piano part. Public domain (Verdi d. 1901). Confidence: high.
  {
    id: 'verdi-la-donna-e-mobile',
    country: 'it',
    themes: ['classical'],
    title: 'La donna è mobile',
    titleEn: 'Woman Is Fickle',
    composer: 'Verdi',
    aka: ['Rigoletto', 'La donna e mobile'],
    emoji: '🪶',
    level: 'medium',
    bpm: 160,
    beatsPerBar: 3,
    melody: `E4 E4 E4 | G4:0.75 F4:0.25 D4:2 | D4 D4 D4 | F4:0.75 E4:0.25 C4:2 |
             E4 D4 C4 | C4:0.75 B3:0.25 B3:2 | D4 C4 A3 | A3:0.75 G3:0.25 G3:2 |
             E4 E4 E4 | G4:0.75 F4:0.25 D4:2 | D4 D4 D4 | F4:0.75 E4:0.25 C4:2 |
             E4 D4 C4 | C4:0.75 B3:0.25 B3:2 | D4 C4 A3 | A3:0.75 G3:0.25 G3:2`,
    chords: 'C C G G G G G C C C G G G G G C',
  },
  // Prelude to Carmen — the opening "Allegro giocoso" (the bullfight march), bars 1–16, top voice of the piano reduction.
  //  Original A major, 2/4 - kept in A major, moved down an octave (D4–F#5). Trills become their main note.
  //  Source: MU + 'BizetG/prelude/prelude.ly' (G. Schirmer, 1895; converted mechanically). Chords from its left hand.
  //  Public domain (Bizet d. 1875). Confidence: high.
  {
    id: 'bizet-carmen-prelude',
    country: 'fr',
    themes: ['classical'],
    title: 'Carmen – Prélude',
    titleEn: 'Prelude to Carmen',
    composer: 'Bizet',
    aka: ['Carmen Overture', 'Les Toréadors'],
    emoji: '🐂',
    level: 'hard',
    bpm: 112,
    beatsPerBar: 2,
    melody: `A4:0.5 A4:0.25 A4:0.25 A4:0.25 E4:0.25 D4:0.25 E4:0.25 | A4:0.5 A4:0.25 A4:0.25 A4:0.25 B4:0.25 C#5:0.25 B4:0.25 | A4:0.5 A4:0.25 A4:0.25 B4:0.25 A4:0.25 G#4:0.25 A4:0.25 | B4:2 |
             D5:0.5 D5:0.25 D5:0.25 D5:0.25 A4:0.25 G4:0.25 A4:0.25 | D5:0.5 D5:0.25 D5:0.25 D5:0.25 E5:0.25 F#5:0.25 E5:0.25 | D5:0.5 D5:0.25 C#5:0.25 B4:0.5 B4:0.25 A4:0.25 | G#4:2 |
             A4:0.5 A4:0.25 A4:0.25 A4:0.25 E4:0.25 D4:0.25 E4:0.25 | A4:0.5 A4:0.25 A4:0.25 A4:0.25 B4:0.25 C#5:0.25 B4:0.25 | A4:0.5 A4:0.25 A4:0.25 B4:0.25 A4:0.25 G#4:0.25 A4:0.25 | B4:2 |
             E5:0.5 E5:0.25 E5:0.25 E5:0.25 D5:0.25 C5:0.25 D5:0.25 | E5:0.5 E5:0.25 E5:0.25 E5:0.25 D5:0.25 C5:0.25 D5:0.25 | E5:0.5 E4:0.25 F#4:0.25 G#4:0.5 E4:0.25 C#5:0.25 | B4 A4:0.5 R:0.5`,
    chords: 'A A A E D D E E A A A E C C E E.A',
  },
  // Walzer As-Dur, Op. 39 No. 15 — the famous "little waltz", bars 9–30 (theme, middle phrase, return and close).
  //  Original A-flat major, 3/4 - moved down a minor sixth to C. Bars 1–8 are the same as 9–16 and are left out.
  //  The last bar's upbeat to the next strain is replaced by a rest.
  //  Source: MU + 'BrahmsJ/O39/waltz-op39-15/waltz-op39-15.mid' (ed. R. Joseffy; converted mechanically). Chords from its left hand.
  //  Public domain (Brahms d. 1897). Confidence: high.
  {
    id: 'brahms-waltz-op39-15',
    country: 'de',
    themes: ['classical', 'lullaby'],
    title: 'Walzer As-Dur, Op. 39 Nr. 15',
    titleEn: 'Waltz in A-flat, Op. 39 No. 15',
    composer: 'Brahms',
    aka: ['Brahms Waltz', 'Op. 39 No. 15', 'Little Waltz'],
    emoji: '💃',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 3,
    melody: `E4:1.5 C4:0.5 C4:0.5 E4:0.5 | E4:1.5 C4:0.5 C4:0.5 E4:0.5 | F4:0.5 G4:0.25 F4:0.25 E4 D4 | E4:1.5 C4:0.5 C4:0.5 G4:0.5 |
             A4:1.5 E4:0.5 E4:0.5 G4:0.5 | A4:1.5 E4:0.5 E4:0.5 G4:0.5 | B4:0.5 A4:0.5 G4 F#4 | G4:1.5 E4:0.5 E4:0.5 G4:0.5 |
             G4:1.5 D4:0.5 D4:0.5 G4:0.5 | G4:1.5 E4:0.5 E4:0.5 G4:0.5 | C5:1.5 G4:0.5 G4:0.5 C5:0.5 | C5:1.5 A4:0.5 A4:0.5 C5:0.5 |
             D5:1.5 A4:0.5 A4:0.5 C5:0.5 | C5:0.5 B4:0.5 A4 G4 |
             E4:1.5 C4:0.5 C4:0.5 E4:0.5 | E4:1.5 C4:0.5 C4:0.5 E4:0.5 | F4:0.5 G4:0.25 F4:0.25 E4 D4 | E4:1.5 C4:0.5 C4:0.5 G4:0.5 |
             A4:1.5 E4:0.5 E4:0.5 G4:0.5 | A4:1.5 E4:0.5 E4:0.5 G4:0.5 | C5:0.5 G4:0.5 F4 D4 | C4 R:2`,
    chords: 'C C F C Am Am G Em G C C F D G C C F C Am Am G C',
  },
  // Intermezzo A-Dur, Op. 118 No. 2 — the opening theme, pickup + bars 1–16 (top voice).
  //  Original A major, 3/4 - moved down a major sixth to C (F#3–C5). Ends on the dominant, as the first period does.
  //  Source: MU + 'BrahmsJ/O118/intermezzo/intermezzo.ly' (N. Simrock, 1892; converted mechanically). Chords from its left hand.
  //  Public domain (Brahms d. 1897). Confidence: high.
  {
    id: 'brahms-intermezzo-op118-2',
    country: 'de',
    themes: ['classical', 'lullaby'],
    title: 'Intermezzo A-Dur, Op. 118 Nr. 2',
    titleEn: 'Intermezzo in A Major, Op. 118 No. 2',
    composer: 'Brahms',
    aka: ['Op. 118 No. 2', 'Brahms Intermezzo'],
    emoji: '🌙',
    level: 'medium',
    bpm: 72,
    beatsPerBar: 3,
    pickup: 1,
    melody: `E4:0.5 D4:0.5 |
             F4:2 E4:0.5 D4:0.5 | C5:2 C4:0.75 D4:0.25 | D4:0.75 G4:0.25 G4 F4 | C4 B3 E4:0.5 D4:0.5 |
             F4:2 E4:0.5 D4:0.5 | C5:2 E4:0.75 F#4:0.25 | F#4:0.75 G4:0.25 G4 A3 | C4 B3 E4:0.5 D4:0.5 |
             F4:2 E4:0.5 D4:0.5 | C5:2 C4:0.75 D4:0.25 | D4:0.75 G4:0.25 G4 F4 | C4 B3 E4:0.5 D4:0.5 |
             F4:2 E4:0.5 D4:0.5 | C5:2 E4:0.75 F#4:0.25 | F#4:0.75 G4:0.25 G4 F#3:0.5 C4:0.5 | C4 B3`,
    chords: 'F F Dm.G G F F D G F F Dm.G G F F D G',
  },
  // Treulich geführt / Brautchor (Lohengrin, Act 3) — "Here Comes the Bride": soprano part of the chorus, bars 1–16 after the intro.
  //  Original B-flat major, 2/4 - moved up a tone to C (G4–G5).
  //  Source: IA 'lohengrin00wagn_0' (G. Schirmer vocal score, 1914), pp. 257–258.
  //  Cross-check: IA 'wagnersoperalohe00wagnuoft' (Ditson libretto with the principal airs, 1890), p. 22 — same tune (top voice).
  //  Chords simplified from the piano part. Public domain (Wagner d. 1883). Confidence: high.
  {
    id: 'wagner-bridal-chorus',
    country: 'de',
    themes: ['classical'],
    title: 'Treulich geführt',
    titleEn: 'Bridal Chorus',
    composer: 'Wagner',
    aka: ['Here Comes the Bride', 'Bridal Chorus', 'Brautchor', 'Lohengrin', 'Wedding March'],
    emoji: '👰',
    level: 'easy',
    bpm: 72,
    beatsPerBar: 2,
    melody: `G4 C5:0.75 C5:0.25 | C5:1.5 R:0.5 | G4 D5:0.75 B4:0.25 | C5:1.5 R:0.5 |
             G4 C5:0.75 F5:0.25 | F5 E5:0.5 R:0.25 D5:0.25 | C5 B4:0.75 C5:0.25 | D5:1.5 R:0.5 |
             G4 C5:0.75 C5:0.25 | C5:1.5 R:0.5 | G4 D5:0.75 B4:0.25 | C5:1.5 R:0.5 |
             G4 C5:0.75 E5:0.25 | G5 E5:0.75 C5:0.25 | A4 D5:0.75 E5:0.25 | C5:1.5 R:0.5`,
    chords: 'C C G C C F C.G G C C G C C C F.G C',
  },
  // Sous le dôme épais (Lakmé, Act 1, "Flower Duet") — Mallika's line, which carries the famous tune, bars 1–8 of the 6/8 section.
  //  Original B major, 6/8 - moved up a semitone to C (G4–F5). Counted in eighths (beatsPerBar 6).
  //  Source: IA 'lakmopraen3actes00deli' (Heugel vocal score, 1883), pp. 22–23.
  //  Cross-check: https://en.wikipedia.org/wiki/Flower_Duet (LilyPond score, bars 1–4 of both voices) — identical.
  //  Chords simplified. Public domain (Delibes d. 1891). Confidence: high.
  {
    id: 'delibes-flower-duet',
    country: 'fr',
    themes: ['classical', 'lullaby'],
    title: 'Sous le dôme épais',
    titleEn: 'Flower Duet',
    composer: 'Delibes',
    aka: ['Flower Duet', 'Lakmé', 'Duo des fleurs', 'Dôme épais le jasmin'],
    emoji: '🌸',
    level: 'hard',
    bpm: 150,
    beatsPerBar: 6,
    melody: `R C5:0.5 B4:0.5 C5:0.5 B4:0.5 A4 B4:0.5 C5:0.5 D5 | R C5:0.5 B4:0.5 C5:0.5 B4:0.5 A4 B4:0.5 C5:0.5 D5 |
             R C5:0.5 D5:0.5 C5:0.5 D5:0.5 E5:0.5 F5:0.5 E5:0.5 D5:0.5 C5:0.5 B4:0.5 | A4:0.5 B4:0.5 A4:0.5 B4:0.5 A4:0.5 B4:0.5 G4:3 |
             R C5:0.5 B4:0.5 C5:0.5 B4:0.5 A4 B4:0.5 C5:0.5 D5 | R C5:0.5 B4:0.5 C5:0.5 B4:0.5 A4 B4:0.5 C5:0.5 D5 |
             R C5:0.5 D5:0.5 C5:0.5 D5:0.5 E5:0.5 F5:0.5 E5:0.5 D5:0.5 C5:0.5 B4:0.5 | A4:0.5 B4:0.5 A4:0.5 B4:0.5 A4:0.5 B4:0.5 C5:3`,
    chords: 'C C F G C C F C',
  },
  // Coro a bocca chiusa (Madama Butterfly, Act 2, "Humming Chorus") — soprano line, the first 17 bars of the humming.
  //  Original B-flat major, 4/4 - moved down a minor seventh to C (G3–A4).
  //  The long notes are tied over the bar lines in the score; each tie is written as the note plus a rest.
  //  Source: IA 'madambutterflyja00pucc2' (G. Ricordi vocal score, English edition, 1906), pp. 227–228.
  //  Chords simplified from the piano part. Public domain (Puccini d. 1924). Confidence: high.
  {
    id: 'puccini-humming-chorus',
    country: 'it',
    themes: ['classical', 'lullaby'],
    title: 'Coro a bocca chiusa',
    titleEn: 'Humming Chorus',
    composer: 'Puccini',
    aka: ['Humming Chorus', 'Madama Butterfly', 'Madame Butterfly'],
    emoji: '🌙',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 4,
    melody: `C4:4 | R:3 D4 | E4:4 | R:3 D4:0.5 C4:0.5 | D4:4 | R:3 C4:0.5 B3:0.5 | C4:4 | R:4 |
             G4:4 | R:2 A4:1.5 F4:0.5 | G4:4 | R:2 A4:1.5 F4:0.5 | E4:4 | R:2 C4:1.5 A3:0.5 | D4:4 | R:3 G3:0.5 B3:0.5 | C4:4`,
    chords: 'C C C C G G C C G G G G Am Am G G C',
  },
  // Farandole (L'Arlésienne Suite No. 2) — the opening march theme ("Marche des Rois", the old Provençal carol), first violins, pickup + 8 bars.
  //  Original D minor, 4/4 - moved down a fourth to A minor (E4–F5). The last bar is shortened to balance the pickup.
  //  Source: https://en.wikipedia.org/wiki/L%27Arl%C3%A9sienne_(Bizet) (LilyPond score of the Farandole theme; converted by hand).
  //  Only one notated source found; chords simplified. Public domain (Bizet d. 1875). Confidence: medium-high.
  {
    id: 'bizet-farandole',
    country: 'fr',
    themes: ['classical', 'christmas'],
    title: 'Farandole',
    titleEn: "Farandole (L'Arlésienne)",
    composer: 'Bizet',
    aka: ["L'Arlésienne", 'March of the Kings', 'Marche des Rois'],
    emoji: '👑',
    level: 'medium',
    bpm: 104,
    beatsPerBar: 4,
    pickup: 2,
    melody: `A4 E4 |
             A4:1.75 B4:0.25 C5:0.75 B4:0.25 C5:0.75 A4:0.25 | E5 R:0.5 C5:0.5 D5 E5 | F5:0.5 E5:0.5 D5:0.5 C5:0.5 B4 E5 | D5:0.5 C5:0.5 B4:0.5 C5:0.5 A4 E4 |
             A4:1.75 B4:0.25 C5:0.75 B4:0.25 C5:0.75 A4:0.25 | E5 R:0.5 C5:0.5 D5 E5 | F5:0.5 E5:0.5 D5:0.5 C5:0.5 C5 B4 | A4:1.5 R:0.5`,
    chords: 'Am Am Dm.E E.Am Am Am Dm.E Am',
  },
  // Symphony No. 1, 3rd movement (Feierlich und gemessen) — "Bruder Martin" (Frère Jacques) in a minor key, the canon tune, bars 3–10.
  //  Original D minor, 4/4 (solo double bass, then bassoon) - moved up a fifth to A minor (E4–F5).
  //  Source: https://en.wikipedia.org/wiki/Symphony_No._1_(Mahler) (LilyPond score of the theme).
  //  Cross-check: IA 'imslp-no1-mahler-gustav' (Universal Edition full score, p. 78, bassoon at rehearsal 2) — identical.
  //  The timpani play D–A throughout, so the chord stays on the tonic. Public domain (Mahler d. 1911). Confidence: high.
  {
    id: 'mahler-bruder-martin',
    country: 'at',
    themes: ['classical', 'children'],
    title: 'Bruder Martin (Sinfonie Nr. 1)',
    titleEn: 'Frère Jacques in Minor (Symphony No. 1)',
    composer: 'Mahler',
    aka: ['Frère Jacques', 'Bruder Jakob', 'Are You Sleeping', 'Mahler Symphony No. 1', 'Titan'],
    emoji: '🔔',
    level: 'easy',
    bpm: 66,
    beatsPerBar: 4,
    melody: `A4 B4 C5:0.5 B4:0.5 A4 | A4 B4 C5:0.5 B4:0.5 A4 | C5 D5 E5:2 | C5 D5 E5:2 |
             E5:0.75 F5:0.25 E5:0.5 D5:0.5 C5:0.5 B4:0.5 A4 | E5:0.75 F5:0.25 E5:0.5 D5:0.5 C5:0.5 B4:0.5 A4 | E5 E4 A4:2 | E5 E4 A4:2`,
    chords: 'Am Am Am Am Am Am Am Am',
  },
  // Abendsegen "Abends, will ich schlafen gehn" (Hänsel und Gretel, Act 2, "Evening Prayer") — Gretel's line, the whole prayer (21 bars).
  //  Original D major, 4/4 - moved down a tone to C (C4–F5). Hänsel sings the same words in parallel a third or sixth lower.
  //  Source: IA 'hnselundgretelmrhum1894p' (B. Schott's Söhne vocal score, 1894), pp. 76–77.
  //  Chords simplified from the piano part. Public domain (Humperdinck d. 1921). Confidence: high.
  {
    id: 'humperdinck-abendsegen',
    country: 'de',
    themes: ['classical', 'lullaby', 'children'],
    title: 'Abends, will ich schlafen gehn',
    titleEn: 'Evening Prayer',
    composer: 'Humperdinck',
    aka: ['Abendsegen', 'Hänsel und Gretel', 'Hansel and Gretel', 'Children\'s Prayer', 'When at Night I Go to Sleep'],
    emoji: '😇',
    level: 'medium',
    bpm: 63,
    beatsPerBar: 4,
    melody: `C4 E4 E4 G4 | A4 G4 G4:2 | C5 G4 G4 E4 | E4 D4:0.5 C4:0.5 D4:1.5 R:0.5 | F4 F4 E4 E4 | D4:2 C4 R |
             G4 G4 G4 F4 | F4:1.5 E4:0.5 D4 R | Ab4 Ab4 G4:1.5 A4:0.5 | Bb4:2 A4 R | C5 C5 B4:1.5 C5:0.5 | D5:2 C5 R |
             F4 A4 A4 C5 | C5:2 G4 R | G4 Bb4 Bb4 D5 | D5:2 A4 R | A4 C5 C5 E5 | E5 D5 C5 F#4 | G4 A4 B4 C5 | F5:2 E5:1.5 D5:0.5 | C5:2 R:2`,
    chords: 'C F C G Dm.C G.C C G Fm.F C G G.C F C Gm Dm Am D G G C',
  },
  // "O du mein holder Abendstern" (Tannhäuser, Act 3, "Song to the Evening Star") — Wolfram's romance, the first 12 bars.
  //  Original G major, 6/8 (baritone) - moved up an octave and a fourth to C (E4–G5). Counted in eighths (beatsPerBar 6).
  //  Source: IA 'tannhuserundders00wagn' (Edition Peters vocal score, ed. 1914), p. 229.
  //  Cross-check: IA 'toeveningstarodu00wagn' (instrumental transcription, 1904), p. 4 — same notes an octave higher.
  //  Chords simplified. Public domain (Wagner d. 1883). Confidence: high.
  {
    id: 'wagner-evening-star',
    country: 'de',
    themes: ['classical', 'lullaby'],
    title: 'O du mein holder Abendstern',
    titleEn: 'Song to the Evening Star',
    composer: 'Wagner',
    aka: ['Evening Star', 'Lied an den Abendstern', 'Tannhäuser', 'Tannhauser'],
    emoji: '⭐',
    level: 'medium',
    bpm: 150,
    beatsPerBar: 6,
    melody: `C5:3 G5:2 F#5 | F5:3 F5:2 E5 | Eb5:3 Eb5:2 D5 | C5:6 |
             C5:3 B4:2 C5 | E5:3 E5:2 C5 | G4:3 G4:2 F4 | E4:6 |
             R:3 C5:3 | F5:2 F5 F5:2 E5 | Eb5:3 Eb5:2 D5 | C5:6`,
    chords: 'C Dm Cm C C Em G C C F Cm C',
  },
  // Pilgerchor "Beglückt darf nun dich, o Heimat" (Tannhäuser, Act 3, "Pilgrims' Chorus") — top voice (1st tenors), pickup + 16 bars.
  //  Original E-flat major, 3/4 - moved down a minor third to C (D4–D5). The last bar is shortened to balance the pickup.
  //  Source: IA 'tannhuserundders00wagn' (Edition Peters vocal score, ed. 1914), p. 218.
  //  Only one notated source found; a few inner chord notes make the top line slightly uncertain in bars 6 and 9.
  //  Chords simplified from the piano part. Public domain (Wagner d. 1883). Confidence: medium-high.
  {
    id: 'wagner-pilgrims-chorus',
    country: 'de',
    themes: ['classical'],
    title: 'Pilgerchor',
    titleEn: "Pilgrims' Chorus",
    composer: 'Wagner',
    aka: ['Beglückt darf nun dich, o Heimat', 'Tannhäuser', 'Tannhauser', 'Pilgrims Chorus'],
    emoji: '🚶',
    level: 'medium',
    bpm: 60,
    beatsPerBar: 3,
    pickup: 1,
    melody: `G4 |
             C5:2 G4 | E4:2 E4:1/3 F4:1/3 G4:1/3 | G4 A4 G4 | G4 F4 A4 | D5:2 C5 | B4:2 F4:1/3 G4:1/3 A4:1/3 | C5 A4 G4:0.75 E4:0.25 | E4 D4 G4:0.75 A4:0.25 |
             A4 G4 A4 | A4:2 G4:0.75 A4:0.25 | A4 G4 A4 | A4:2 A4 | G4 F4 G4:1/3 A4:1/3 B4:1/3 | C5 B4 A4 | Bb4 A4:1.5 G4:0.5 | G4:2`,
    chords: 'C C C F D G C C.G F F F D G Am Gm C',
  },
  // Ungarischer Tanz Nr. 5 (piano solo version, Allegro) — the main theme, bars 1–12 (top voice).
  //  Original F-sharp minor, 2/4 - moved up a minor third to A minor (A3–E5). Bars 9–12 are written in octaves in the score;
  //  the lower notes of the octaves are used. The trill-like turn in bar 7 is kept as written (16ths).
  //  Source: IA 'brahmshungariand0256unse' (G. Schirmer, 1893, Brahms's own piano-solo arrangement), p. 20.
  //  Pitches checked with a notehead/staff-line detector on the scan. Theme based on a csárdás by Béla Kéler (d. 1882).
  //  Chords simplified from the left hand. Public domain (Brahms d. 1897). Confidence: high.
  {
    id: 'brahms-hungarian-dance-5',
    country: 'de',
    themes: ['classical'],
    title: 'Ungarischer Tanz Nr. 5',
    titleEn: 'Hungarian Dance No. 5',
    composer: 'Brahms',
    aka: ['Hungarian Dance No. 5', 'Ungarische Tänze', 'Brahms Hungarian Dance', 'Csárdás'],
    emoji: '💃',
    level: 'hard',
    bpm: 100,
    beatsPerBar: 2,
    melody: `E4:1.5 A4:0.5 | C5:1.5 A4:0.5 | G#4:1.5 A4:0.25 B4:0.25 | A4:2 |
             F4:0.5 R:1 G4:0.25 A4:0.25 | E4:0.5 R:1.5 | D4:0.25 C4:0.25 C4:0.25 B3:0.25 B3:0.75 E4:0.25 | A3:2 |
             E4:1.5 A4:0.25 C5:0.25 | E5:1.5 C5:0.5 | B4:1.5 C5:0.25 D5:0.25 | C5:2`,
    chords: 'Am Am E Am E E Dm.E Am Am Am E Am',
  },
  // Ungarischer Tanz Nr. 6 (piano solo version, Vivace) — the opening theme, upbeat + bars 2–10 (top voice of the thirds).
  //  Original D-flat major, 2/4 - moved down a semitone to C (F4–C5). The opening chord is left out; mordents become the main note.
  //  The upbeat is tied into the next bar (and bars 5–6, 9–10 likewise); each tie is written as the note plus a rest.
  //  The last bar is shortened to balance the upbeat; the phrase ends on the dominant before the forte section.
  //  Source: IA 'brahmshungariand0256unse' (G. Schirmer, 1893, Brahms's own piano-solo arrangement), p. 24.
  //  Pitches checked with a notehead/staff-line detector on the scan. Chords simplified. Public domain (Brahms d. 1897). Confidence: high.
  {
    id: 'brahms-hungarian-dance-6',
    country: 'de',
    themes: ['classical'],
    title: 'Ungarischer Tanz Nr. 6',
    titleEn: 'Hungarian Dance No. 6',
    composer: 'Brahms',
    aka: ['Hungarian Dance No. 6', 'Ungarische Tänze', 'Brahms Hungarian Dance'],
    emoji: '🎻',
    level: 'medium',
    bpm: 112,
    beatsPerBar: 2,
    pickup: 1,
    melody: `G4 |
             R:0.5 G4:0.5 F#4:0.5 G4:0.5 | A4 G4 | C5 G4 | B4 A4 | R:0.5 A4:0.5 G#4:0.5 A4:0.5 | Bb4 A4 | G4 F4 | A4 G4 | R:0.5 G4:0.5`,
    chords: 'C F C G G G G F G',
  },
  // Gaudeamus igitur — the old student song that Brahms quotes as the grand finale of his Academic Festival Overture, Op. 80 (1880).
  //  Soprano part of the traditional four-part setting, B-flat major, 3/4 - moved up a tone to C (G4–G5).
  //  The first strain (bars 1–4) is repeated in the source; it is written once here. The final tied note is shortened to its first bar.
  //  Source: https://en.wikipedia.org/wiki/Gaudeamus_igitur (LilyPond score, SATB; converted by hand). Chords from its bass part.
  //  Not checked against Brahms's orchestral score (there the tune is in C, with his own harmony). Public domain. Confidence: medium-high.
  {
    id: 'brahms-gaudeamus-igitur',
    country: 'de',
    themes: ['classical'],
    title: 'Gaudeamus igitur',
    titleEn: 'Gaudeamus igitur (Academic Festival Overture)',
    composer: 'Brahms',
    aka: ['Academic Festival Overture', 'Akademische Festouvertüre', 'Op. 80', 'student song'],
    emoji: '🎓',
    level: 'medium',
    bpm: 96,
    beatsPerBar: 3,
    melody: `C5:0.75 G4:0.25 G4 C5 | A4:0.75 A4:0.25 A4:2 | B4:0.75 C5:0.25 D5 B4 | C5:0.5 E5:0.5 C5:2 |
             B4:0.75 C5:0.25 D5 D5 | E5:0.5 C5:0.5 D5 D5 | B4:0.75 C5:0.25 D5 D5 | E5:0.5 C5:0.5 D5 D5 |
             C5:0.75 B4:0.25 A4:0.5 F5:0.5 E5:0.5 D5:0.5 | E5 D5 C5 | C5:0.75 B4:0.25 A4:0.5 F5:0.5 E5:0.5 D5:0.5 | G5 B4 C5`,
    chords: 'C F G C G C.G G C.G C.F G.Am C.F G.C',
  },
];
