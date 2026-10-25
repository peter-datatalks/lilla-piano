// Christmas songs from around the world (German, Austrian, Swedish and Hungarian Christmas songs).
// Same format as the other song files, plus optional `aka`: alternative titles used by search.
// Only traditional / public-domain melodies, each with a source comment.
// Melodies with a LilyPond <score> on Wikipedia were converted mechanically from the LilyPond source
// (relative pitches, durations, ties) and then transposed; the others were read note by note from the
// printed score / MIDI named in the comment. Notes tied across a bar line are written as two notes
// (the app cannot hold a note over a bar line); this is mentioned where it happens.

const W = 'https://commons.wikimedia.org/wiki/File:';

export const SONGS_XMAS_EU = [
  // ───────────────────────────── Austria ─────────────────────────────
  // Stille Nacht, heilige Nacht — "Contemporary" version, 6/8, already in C (score is \transpose c d) - no transposition.
  //   Source: https://en.wikipedia.org/wiki/Silent_Night ("Contemporary" LilyPond score)
  //   Source: https://de.wikipedia.org/wiki/Stille_Nacht,_heilige_Nacht (LilyPond score, D major, same tune except a D# passing note in bar 3)
  //   Cross-check: the existing 'csendes-ej' (hu.wikipedia score) has the same pitches in 3/4.
  //   Top note F5 is one step above the usual range.
  //   Public domain: Franz Xaver Gruber (d. 1863), text Joseph Mohr (d. 1848). Confidence: high.
  {
    id: 'stille-nacht',
    country: 'at',
    themes: ['christmas', 'lullaby'],
    title: 'Stille Nacht, heilige Nacht',
    titleEn: 'Silent Night',
    aka: ['Silent Night', 'Stilla natt'],
    emoji: '🌟',
    level: 'medium',
    bpm: 150,
    beatsPerBar: 6,
    melody: `G4:1.5 A4:0.5 G4 E4:3 | G4:1.5 A4:0.5 G4 E4:3 | D5:2 D5 B4:3 | C5:2 C5 G4:3 |
             A4:2 A4 C5:1.5 B4:0.5 A4 | G4:1.5 A4:0.5 G4 E4:3 | A4:2 A4 C5:1.5 B4:0.5 A4 | G4:1.5 A4:0.5 G4 E4:3 |
             D5:2 D5 F5:1.5 D5:0.5 B4 | C5:3 E5:2 R:1 | C5:1.5 G4:0.5 E4 G4:1.5 F4:0.5 D4 | C4:5 R:1`,
    chords: 'C C G C F C F C G C C.G C',
  },

  // ───────────────────────────── Germany ─────────────────────────────
  // O Tannenbaum — Original G major, 3/4 with an eighth pickup - moved down a fifth to C. A part + B part + D.C. written out.
  //   Source: https://de.wikipedia.org/wiki/O_Tannenbaum (LilyPond score, with chord names)
  //   Source: W + 'O_Tannenbaum.mid' (Peter Gerloff melody setting) — same pitches; it dots the third note
  //   ("g4. a8" instead of "g4 a4"); the Wikipedia rhythm is kept.
  //   Public domain: Traditional folk tune ("Lauriger Horatius"), text Ernst Anschütz (1824). Confidence: high.
  {
    id: 'o-tannenbaum',
    country: 'de',
    themes: ['christmas', 'children'],
    title: 'O Tannenbaum',
    titleEn: 'O Christmas Tree',
    aka: ['O Christmas Tree', 'Ó, szép fenyő'],
    emoji: '🎄',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 3,
    pickup: 0.5,
    melody: `G3:0.5 |
             C4:0.75 C4:0.25 C4 D4 | E4:0.75 E4:0.25 E4:1.5 E4:0.5 | D4:0.5 E4:0.5 F4 B3 | D4 C4 R:0.5 G4:0.5 |
             G4:0.5 E4:0.5 A4:1.5 G4:0.5 | G4:0.5 F4:0.5 F4:1.5 F4:0.5 | F4:0.5 D4:0.5 G4:1.5 F4:0.5 | F4:0.5 E4:0.5 E4 R:0.5 G3:0.5 |
             C4:0.75 C4:0.25 C4 D4 | E4:0.75 E4:0.25 E4:1.5 E4:0.5 | D4:0.5 E4:0.5 F4 B3 | D4 C4 R:0.5`,
    chords: 'C.G C Dm.G G.C C.F G G C C.G C Dm.G G.C',
  },
  // O du fröhliche — Original C major, 2/2 (written here as 4/4) - no transposition. Repeat of the first line written out.
  //   Source: https://de.wikipedia.org/wiki/O_du_fröhliche (LilyPond score)
  //   Source: W + 'O_du_fröhliche.mid' (Peter Gerloff melody setting, D major) — same tune.
  //   Public domain: Melody "O sanctissima" (Sicilian, printed 1792), text Johannes Daniel Falk. Confidence: high.
  {
    id: 'o-du-frohliche',
    country: 'de',
    themes: ['christmas'],
    title: 'O du fröhliche',
    titleEn: 'O, How Joyfully',
    emoji: '🔔',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 4,
    melody: `G4:2 A4:2 | G4:1.5 F4:0.5 E4 F4 | G4:2 A4:2 | G4:1.5 F4:0.5 E4 F4 |
             G4:2 G4:2 | A4:2 B4 C5 | B4:2 A4:2 | G4:4 |
             D4:1.5 E4:0.5 D4 E4 | F4:1.5 G4:0.5 F4:2 | E4:1.5 F4:0.5 E4 F4 | G4:1.5 A4:0.5 G4:2 |
             C5 B4 A4 G4 | C5 A4 G4 F4 | E4:2 D4:2 | C4:4`,
    chords: 'C.F C.G C.F C.G C F.C G C G G C C C.Am F.C C.G C',
  },
  // Alle Jahre wieder — Original D major, 4/4 - moved down a tone to C.
  //   Source: https://de.wikipedia.org/wiki/Alle_Jahre_wieder (LilyPond score)
  //   Source: W + 'Alle_Jahre_wieder.mid' (Peter Gerloff melody setting) — identical.
  //   Public domain: Friedrich Silcher (d. 1860), text Wilhelm Hey. Confidence: high.
  {
    id: 'alle-jahre-wieder',
    country: 'de',
    themes: ['christmas', 'children'],
    title: 'Alle Jahre wieder',
    titleEn: 'Every Year Again',
    emoji: '👼',
    level: 'easy',
    bpm: 90,
    beatsPerBar: 4,
    melody: `G4:1.5 A4:0.5 G4 F4 | E4:2 D4:2 | C4 D4:0.5 E4:0.5 F4 E4 | D4:3 R:1 |
             E4 G4 A4 G4 | C5:2 B4 A4 | G4 F4:0.5 E4:0.5 F4 G4 | E4:3 R:1`,
    chords: 'C C.G C.F G C F.G C.G C',
  },
  // Kling, Glöckchen, klingelingeling — Original F major, 2/4 - moved down a fourth to C (B-flat -> F, B natural -> F#).
  //   Source: https://de.wikipedia.org/wiki/Kling,_Glöckchen,_klingelingeling (LilyPond score; German note names b/h)
  //   Source: W + 'Kling,_Glöckchen,_klingelingeling.mid' (Peter Gerloff melody setting, note values doubled) — identical.
  //   Public domain: Anonymous melody, printed without composer in 1862; text Karl Enslin (d. 1875). Confidence: high.
  {
    id: 'kling-glockchen',
    country: 'de',
    themes: ['christmas', 'children'],
    title: 'Kling, Glöckchen, klingelingeling',
    titleEn: 'Ring, Little Bell',
    emoji: '🔔',
    level: 'medium',
    bpm: 88,
    beatsPerBar: 2,
    melody: `G4 E4:0.5 F4:0.5 | G4:0.25 A4:0.25 G4:0.25 A4:0.25 G4 | F4 D4:0.5 G4:0.5 | E4:2 |
             D4:0.5 D4:0.5 E4:0.5 C4:0.5 | E4 D4 | F4:0.5 F4:0.5 G4:0.5 D4:0.5 | F4 E4 |
             D4:0.5 D4:0.5 E4:0.5 F#4:0.5 | G4 D4 | E4:0.5 A4:0.5 G4:0.5 F#4:0.5 | A4 G4 |
             G4 E4:0.5 F4:0.5 | G4:0.25 A4:0.25 G4:0.25 A4:0.25 G4 | F4 D4:0.5 G4:0.5 | E4:2`,
    chords: 'C C G C G.C C.G G G.C G.D G C.D D.G C C G C',
  },
  // Leise rieselt der Schnee — Original G major, 6/8 - moved down a fifth to C.
  //   Source: https://de.wikipedia.org/wiki/Leise_rieselt_der_Schnee (LilyPond score)
  //   Source: W + 'Leise_rieselt_der_Schnee.mid' (Peter Gerloff melody setting) — identical.
  //   Public domain: Eduard Ebel (d. 1929), words and music. Confidence: high.
  {
    id: 'leise-rieselt-der-schnee',
    country: 'de',
    themes: ['christmas', 'children'],
    title: 'Leise rieselt der Schnee',
    titleEn: 'Softly Falls the Snow',
    emoji: '❄️',
    level: 'easy',
    bpm: 160,
    beatsPerBar: 6,
    melody: `E4:2 E4 D4 E4 D4 | C4:5 R:1 | C4:2 A3 C4 B3 A3 | G3:5 R:1 |
             D4 C#4 D4 F4 E4 D4 | C4:5 R:1 | D4:1.5 A3:0.5 A3 B3 A3 B3 | C4:5 R:1`,
    chords: 'C C Am G G C G C',
  },
  // Ihr Kinderlein, kommet — Original D major, 2/4 with an eighth pickup - moved down a tone to C.
  //   Source: https://de.wikipedia.org/wiki/Ihr_Kinderlein,_kommet (LilyPond score, Schulz/Eickhoff version)
  //   Source: https://en.wikipedia.org/wiki/Ihr_Kinderlein,_kommet (LilyPond score) — identical (same score).
  //   Public domain: Johann Abraham Peter Schulz (d. 1800), text Christoph von Schmid (c. 1810). Confidence: high.
  {
    id: 'ihr-kinderlein-kommet',
    country: 'de',
    themes: ['christmas', 'children'],
    title: 'Ihr Kinderlein, kommet',
    titleEn: 'O Come, Little Children',
    emoji: '👶',
    level: 'easy',
    bpm: 96,
    beatsPerBar: 2,
    pickup: 0.5,
    melody: `G4:0.5 |
             G4 E4:0.5 G4:0.5 | G4 E4:0.5 G4:0.5 | F4 D4:0.5 F4:0.5 | E4 R:0.5 G4:0.5 |
             G4 E4:0.5 G4:0.5 | G4 E4:0.5 G4:0.5 | F4 D4:0.5 F4:0.5 | E4 R:0.5 E4:0.5 |
             D4 D4:0.5 D4:0.5 | F4 F4:0.5 F4:0.5 | E4 E4:0.5 E4:0.5 | A4 R:0.5 A4:0.5 |
             G4 G4:0.5 G4:0.5 | C5 G4:0.5 E4:0.5 | F4 D4:0.5 B3:0.5 | C4:1.5`,
    chords: 'C C G C C C G C G G C F C C G C',
  },
  // Morgen, Kinder, wird's was geben — Original G major, 2/4 - moved down a fifth to C. Melody by Carl Gottlieb Hering (1809),
  // the first of the three versions on the Wikipedia page.
  //   Source: https://de.wikipedia.org/wiki/Morgen,_Kinder,_wird’s_was_geben (LilyPond score, "Melodie von Carl Gottlieb Hering")
  //   Source: W + "Morgen,_Kinder,_wird's_was_geben.mid" (Peter Gerloff melody setting, F major, note values doubled) — identical.
  //   Public domain: Carl Gottlieb Hering (d. 1853), text after Splittegarb (1795). Confidence: high.
  {
    id: 'morgen-kinder',
    country: 'de',
    themes: ['christmas', 'children'],
    title: 'Morgen, Kinder, wird’s was geben',
    titleEn: 'Tomorrow, Children, Something’s Coming',
    emoji: '🎁',
    level: 'medium',
    bpm: 84,
    beatsPerBar: 2,
    melody: `C4:0.5 G3:0.5 A3:0.5 G3:0.5 | A3:0.25 C4:0.25 B3:0.25 D4:0.25 C4:0.5 G3:0.5 | E4:0.5 E4:0.25 F4:0.25 G4:0.5 E4:0.5 | F4:0.5 E4:0.5 D4 |
             C4:0.5 G3:0.5 A3:0.5 G3:0.5 | A3:0.25 C4:0.25 B3:0.25 D4:0.25 C4:0.5 G3:0.5 | E4:0.5 E4:0.25 F4:0.25 G4:0.5 E4:0.5 | F4:0.5 E4:0.5 D4 |
             F4:0.5 F4:0.5 A4:0.5 A4:0.5 | D4:0.5 D4:0.5 G4 | C4:0.5 C4:0.5 F4:0.5 F4:0.5 | E4:0.25 D4:0.25 C4:0.25 B3:0.25 C4`,
    chords: 'C G.C C G C G.C C G F G C.F G.C',
  },
  // Morgen kommt der Weihnachtsmann — Original D major, 4/4 - moved down a tone to C. Repeat of the middle line written out.
  //   Source: https://de.wikipedia.org/wiki/Morgen_kommt_der_Weihnachtsmann (LilyPond score, with chord names)
  //   Source: W + 'Morgen_kommt_der_Weihnachtsmann.mid' (Peter Gerloff melody setting) — identical.
  //   Public domain: French folk tune "Ah ! vous dirai-je, maman" (18th c.), text Hoffmann von Fallersleben (d. 1874). Confidence: high.
  {
    id: 'morgen-kommt-der-weihnachtsmann',
    country: 'de',
    themes: ['christmas', 'children'],
    title: 'Morgen kommt der Weihnachtsmann',
    titleEn: 'Tomorrow Santa Claus Comes',
    aka: ['Ah vous dirai-je maman'],
    emoji: '🎅',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 4,
    melody: `C4 C4 G4 G4 | A4 A4 G4:2 | F4 F4 E4 E4 | D4:2 C4:2 |
             G4 G4 F4 F4 | E4 E4 D4:2 | G4 G4 F4 F4 | E4 E4 D4:2 |
             C4 C4 G4 G4 | A4 A4 G4:2 | F4 F4 E4 E4 | D4:2 C4:2`,
    chords: 'C F.C F.C G.C C.F C.G C.F C.G C F.C F.C G.C',
  },
  // Süßer die Glocken nie klingen — Original F major, 6/8 - moved down a fourth to C. Repeated line written out.
  //   Source: https://de.wikipedia.org/wiki/Süßer_die_Glocken_nie_klingen (LilyPond score, main "soprano" voice)
  //   Source: W + 'Süßer_die_Glocken_nie_klingen.mid' (Peter Gerloff melody setting, E-flat) — same tune, but it follows the
  //   page's alternative voice in the repeated line ("g g g a a a | c bes g a") and leaves out the passing note in bar 2.
  //   Public domain: Folk tune "Seht, wie die Sonne dort sinket" (Thuringia 1841), text Friedrich Wilhelm Kritzinger (d. 1890).
  //   Confidence: medium-high (two printed variants of the repeated line exist).
  {
    id: 'susser-die-glocken',
    country: 'de',
    themes: ['christmas'],
    title: 'Süßer die Glocken nie klingen',
    titleEn: 'Sweeter the Bells Never Sound',
    emoji: '🔔',
    level: 'medium',
    bpm: 150,
    beatsPerBar: 6,
    melody: `E4:1.5 E4:0.5 E4 E4 D4 E4 | G4:2 F4 D4:3 | D4:1.5 D4:0.5 D4 D4 C4 D4 | E4:5 R:1 |
             G4:1.5 G4:0.5 G4 G4 E4 C4 | C5:2 A4 A4:3 | G4:1.5 A4:0.5 G4 G4 F4 D4 | C4:5 R:1 |
             D4:1.5 D4:0.5 F4 E4 E4 G4 | G4:1.5 F4:0.5 E4 D4:3 | D4:1.5 D4:0.5 F4 E4 E4 G4 | G4:1.5 F4:0.5 E4 D4:3 |
             G4:1.5 F4:0.5 E4 E4 D4 C4 | C5:3 A4:3 | G4:1.5 A4:0.5 G4 G4 F4 D4 | C4:5 R:1`,
    chords: 'C G G C C F G C G.C C.G G.C C.G C F G C',
  },
  // Lasst uns froh und munter sein — Original C major, 4/4 - no transposition.
  //   Source: https://de.wikipedia.org/wiki/Lasst_uns_froh_und_munter_sein (LilyPond score)
  //   Public domain: Traditional (19th century, probably Hunsrück). Confidence: single source.
  {
    id: 'lasst-uns-froh',
    country: 'de',
    themes: ['christmas', 'children'],
    title: 'Lasst uns froh und munter sein',
    titleEn: 'Let Us Be Glad and Merry',
    emoji: '🍬',
    level: 'easy',
    bpm: 120,
    beatsPerBar: 4,
    melody: `G4 G4 G4:0.5 A4:0.5 G4:0.5 F4:0.5 | E4 E4 E4 R:1 | F4 F4 F4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4 D4 D4 R:1 |
             C4 D4 E4 F4 | G4:0.5 A4:0.5 G4:0.5 A4:0.5 G4 R:1 | C5 G4 G4:0.5 A4:0.5 G4:0.5 F4:0.5 | E4 D4 G4 R:1 |
             C5 G4 G4:0.5 A4:0.5 G4:0.5 F4:0.5 | E4 D4 C4 R:1`,
    chords: 'C C G G C C C.G C.G C.G C',
  },
  // Es ist ein Ros entsprungen — Original F major, 4/4 with a half-note pickup - moved down a fourth to C.
  // Soprano of Praetorius' setting; repeat written out. The syncopated note tied over the bar line
  // ("a4 g~ | g f2") is played again at the start of the next bar.
  //   Source: https://de.wikipedia.org/wiki/Es_ist_ein_Ros_entsprungen (LilyPond score, Praetorius setting)
  //   Source: W + 'Es_ist_ein_Ros_entsprungen.mid' (Peter Gerloff melody setting, E-flat) — same pitches and rhythm.
  //   Public domain: Melody 16th century, setting Michael Praetorius (d. 1621). Confidence: high.
  {
    id: 'es-ist-ein-ros',
    country: 'de',
    themes: ['christmas'],
    title: 'Es ist ein Ros entsprungen',
    titleEn: 'Lo, How a Rose E’er Blooming',
    aka: ['Det är en ros utsprungen', 'Lo, How a Rose'],
    emoji: '🌹',
    level: 'medium',
    bpm: 90,
    beatsPerBar: 4,
    pickup: 2,
    melody: `G4:2 |
             G4 G4 A4 G4 | G4:2 E4:2 | F4:2 E4 D4 | D4 C4:2 B3 | C4:2 G4:2 |
             G4 G4 A4 G4 | G4:2 E4:2 | F4:2 E4 D4 | D4 C4:2 B3 | C4:2 R:1 E4 |
             D4 B3 C4 A3 | G3:2 R:1 G4 | G4 G4 A4 G4 | G4:2 E4:2 | F4:2 E4 D4 | D4 C4:2 B3 | C4:2`,
    chords: 'C.F C.Am F.C G C C.F C.Am F.C G C G.Am G C.F C.Am F.C G C',
  },
  // Kommet, ihr Hirten — Original F major, 3/4 - moved down a fourth to C. Top line of the two-voice part; repeat written out.
  //   Source: https://de.wikipedia.org/wiki/Kommet,_ihr_Hirten (LilyPond score)
  //   Source: W + 'Kommet,_ihr_Hirten.mid' (Peter Gerloff melody setting) — identical.
  //   Public domain: Bohemian folk carol "Nesem vám noviny" (printed 1847), German text Carl Riedel. Confidence: high.
  {
    id: 'kommet-ihr-hirten',
    country: 'de',
    themes: ['christmas'],
    title: 'Kommet, ihr Hirten',
    titleEn: 'Come, You Shepherds',
    emoji: '🐑',
    level: 'medium',
    bpm: 104,
    beatsPerBar: 3,
    melody: `G4 G4:0.5 E4:0.5 A4:0.5 F4:0.5 | G4 G4:0.5 E4:0.5 A4:0.5 F4:0.5 | G4 E4:0.5 G4:0.5 D4:0.5 E4:0.5 | C4:3 |
             G4 G4:0.5 E4:0.5 A4:0.5 F4:0.5 | G4 G4:0.5 E4:0.5 A4:0.5 F4:0.5 | G4 E4:0.5 G4:0.5 D4:0.5 E4:0.5 | C4:3 |
             C4 E4:0.5 C4:0.5 E4:0.5 G4:0.5 | C4 E4:0.5 C4:0.5 D4:0.5 G3:0.5 | C4 E4:0.5 C4:0.5 E4:0.5 G4:0.5 | C4 E4:0.5 C4:0.5 D4:0.5 G3:0.5 |
             G4 E4:0.5 G4:0.5 D4:0.5 E4:0.5 | C4:2 R:1`,
    chords: 'C.F C.F C.G C C.F C.F C.G C C C.G C C.G C.G C',
  },

  // ───────────────────────────── Sweden ─────────────────────────────
  // Staffan var en stalledräng — Original E minor, 2/4 - moved down a fifth to A minor (lowest note E3).
  // The final note, tied into an extra bar, is shortened to one beat. In bar 5 the second note is printed without
  // a flag; it is read as an eighth so that the bar adds up.
  //   Source: Knut Brodin, "Julens visor", no. 16 "Staffan var en stalledräng", p. 44 — scan by Svenskt visarkiv:
  //           http://carkiv.musikverk.se/www/epublikationer/brodin_knut_staffansvisor_ur_julens_visor.pdf (page 9)
  //   Public domain: Traditional Swedish Staffan song (Västergötland melody). Confidence: single source.
  {
    id: 'staffan-var-en-stalledrang',
    country: 'se',
    themes: ['christmas', 'lucia'],
    title: 'Staffan var en stalledräng',
    titleEn: 'Staffan Was a Stable Boy',
    aka: ['Staffansvisan'],
    emoji: '🐴',
    level: 'medium',
    bpm: 92,
    beatsPerBar: 2,
    melody: `A3:0.75 A3:0.25 A3:0.5 G#3:0.5 | A3:0.75 E4:0.25 E4:0.5 R:0.25 E4:0.25 | A4:0.5 E4:0.5 E4:0.5 E4:0.5 | D4 B3:0.5 C4:0.5 |
             D4:0.5 E4:0.5 C4:0.5 C4:0.5 | B3:0.5 B3:0.5 G#3:0.5 A3:0.5 | B3:0.5 C4:0.5 A3:0.5 A3:0.5 | G#3 E3 |
             E3:0.5 E3:0.5 C4:0.75 C4:0.25 | B3:0.75 G#3:0.25 A3:0.5 E4:0.25 F4:0.25 | E4:0.75 D4:0.25 C4:0.5 B3:0.5 |
             A3:0.75 B3:0.25 C4:0.5 D4:0.5 | B3 A3`,
    chords: 'Am Am Am G.C Dm.Am E E.Am E Am E.Am Am.E Am.Dm E.Am',
  },
  // Jul, jul, strålande jul — Original D major, 6/8 - moved down a tone to C. The final D (held with a fermata) is written as a dotted quarter.
  //   Source: W + 'Jul,_jul,_strålande_jul.mid' (Peter Gerloff melody setting, CC0)
  //   Public domain: Gustaf Nordqvist (d. 1949), text Edvard Evers. Confidence: single source.
  {
    id: 'jul-jul-stralande-jul',
    country: 'se',
    themes: ['christmas'],
    title: 'Jul, jul, strålande jul',
    titleEn: 'Christmas, Radiant Christmas',
    emoji: '✨',
    level: 'medium',
    bpm: 150,
    beatsPerBar: 6,
    melody: `E4:3 D4:3 | E4:1.5 F4:0.5 G4 D4:3 | E4 F4 G4 G4:2 F4 | F4:3 E4:3 |
             A4:1.5 A4:0.5 A4 G4 D4 G4 | A4:1.5 B4:0.5 A4 G4:3 | F4:1.5 F4:0.5 F4 E4 B3 E4 | F4:1.5 G4:0.5 F4 E4:3 |
             C4:1.5 C4:0.5 C4 G4:1.5 G4:0.5 G4 | E4:2 E4 C4:3 | D4:1.5 C4:0.5 D4 E4:1.5 D4:0.5 C4 | D4:1.5 C4:0.5 D4 E4:3 |
             E4:3 D4:3 | E4:1.5 F4:0.5 G4 D4:3 | E4 F4 G4 G4:2 F4 | D4:3 C4:3`,
    chords: 'C C C.G G.C F.G F.C Dm.Em Dm.Em C C G.C G.C C C C.G G.C',
  },
  // Raska fötter springa tripp, tripp, tripp — Original F major, 3/4 - moved down a fourth to C.
  //   Source: W + 'Raska_fötter_springa_tripp,_tripp,_tripp.jpg' (engraved score)
  //   Source: W + 'Raska_fötter_springa_tripp,_tripp,_tripp.mid' (Peter Gerloff melody setting) — identical.
  //   Public domain: Emmy Köhler (d. 1925), text Sigrid Sköldberg-Pettersson (d. 1941); published 1901. Confidence: high.
  {
    id: 'raska-fotter',
    country: 'se',
    themes: ['christmas', 'children'],
    title: 'Raska fötter springa tripp, tripp, tripp',
    titleEn: 'Quick Feet Run Trip, Trip, Trip',
    emoji: '👣',
    level: 'medium',
    bpm: 120,
    beatsPerBar: 3,
    melody: `G4:0.5 E4:0.5 C4:0.5 G3:0.5 C4:0.5 E4:0.5 | D4 A3 A3 | F4:0.5 D4:0.5 B3:0.5 G3:0.5 B3:0.5 A4:0.5 | G4 E4 E4 |
             G4:0.5 A4:0.5 G4:0.5 F4:0.5 E4:0.5 D4:0.5 | E4:2 R:1 | E4:0.5 F4:0.5 E4:0.5 D4:0.5 C4:0.5 B3:0.5 | A3:2 R:1 |
             B3:0.5 D4:0.5 A4 B3 | C4 C4 R:1`,
    chords: 'C G G C G C C.G Am G C',
  },
  // Bereden väg för Herran — Original G major, 6/4 with a quarter pickup - moved down a fifth to C and written in 3/4.
  // The 6/4 source has short (half-length) bars at the line ends; the long note before each new line is shortened
  // from three beats to two so the next pickup fits, and the last note is two beats. Repeat written out.
  //   Source: https://www.ccel.org/cceh/0008/x000808.htm (Christian Classics Ethereal Hymnary, tune "Messiah (Swedish)" /
  //           "Bereden väg för Herran": PDF score and MIDI; soprano line)
  //   Public domain: Swedish melody, printed in Then Swenska Psalmboken 1697; text Frans Michael Franzén (1812).
  //   Confidence: medium (single source, line-end lengths simplified).
  {
    id: 'bereden-vag',
    country: 'se',
    themes: ['christmas'],
    title: 'Bereden väg för Herran',
    titleEn: 'Prepare the Way for the Lord',
    aka: ['Prepare the Royal Highway', 'Prepare the Way, O Zion'],
    emoji: '🕯️',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 3,
    pickup: 1,
    melody: `C4 |
             C4:2 C4 | C4:2 A3 | G3:3 | G3:2 G3 | A3:2 C4 | C4:2 B3 | C4:2 C4 |
             C4:2 C4 | C4:2 A3 | G3:3 | G3:2 G3 | A3:2 C4 | C4:2 B3 | C4:2 E4 |
             E4:2 E4 | G4:2 E4 | D4:3 | D4:2 D4 | D4:2 D4 | D4:1.5 C4:0.5 B3 | A3:2 C4 | B3:2 A3 |
             G3:2 C4 | C4:1.5 D4:0.5 E4:0.5 F4:0.5 | G4:3 | G4:2 E4 | E4:2 E4 | D4:1.5 C4:0.5 D4 | C4:2`,
    chords: 'C C.F G G F.C C.G C C C.F G G F.C C.G C C C D G D G Am E.Am G.C C G G.E Am G C',
  },

  // ───────────────────────────── Hungary ─────────────────────────────
  // Fel nagy örömre — Original C major, 4/4 - no transposition.
  //   Source: https://hu.wikipedia.org/wiki/Fel_nagy_örömre (LilyPond score)
  //   Public domain: Words and music Gárdonyi Géza (1882; d. 1922). Confidence: single source.
  {
    id: 'fel-nagy-oromre',
    country: 'hu',
    themes: ['christmas'],
    title: 'Fel nagy örömre',
    titleEn: 'Rise Up in Great Joy',
    emoji: '⭐',
    level: 'easy',
    bpm: 90,
    beatsPerBar: 4,
    melody: `G4 E4:0.5 G4:0.5 C5 D5 | E5 B4:0.5 D5:0.5 C5:2 | C5 D5:0.5 A4:0.5 D5 C5 | B4 A4:0.5 A4:0.5 G4:2 |
             G4 E4:0.5 G4:0.5 C5 D5 | E5 B4:0.5 D5:0.5 C5:2 | C5 D5:0.5 A4:0.5 D5 C5 | B4 A4:0.5 A4:0.5 G4:2 |
             G4 G4:0.5 G4:0.5 A4 A4 | B4 B4:0.5 A4:0.5 G4:2 | G4 E4:0.5 G4:0.5 E5 C5 | D5 A4:0.5 B4:0.5 C5:2`,
    chords: 'C.G Em.C F.Dm G C.G Em.C F.Dm G C.F G.C C G.C',
  },
  // Dicsőség mennyben az Istennek — Original C major, 2/4 - no transposition. Both repeats written out.
  //   Source: https://hu.wikipedia.org/wiki/Dicsőség_mennyben_az_Istennek (LilyPond score)
  //   Public domain: Hungarian church folk hymn, printed in Tárkányi–Zsasskovszky, Katholikus Egyházi Énektár (1855).
  //   Confidence: single source.
  {
    id: 'dicsoseg-mennyben',
    country: 'hu',
    themes: ['christmas'],
    title: 'Dicsőség mennyben az Istennek',
    titleEn: 'Glory to God in Heaven',
    emoji: '👼',
    level: 'easy',
    bpm: 80,
    beatsPerBar: 2,
    melody: `C4 A4 | G4:2 | E4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4 C4 |
             C4 A4 | G4:2 | E4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4 C4 |
             E4:0.5 G4:0.5 G4:0.5 G4:0.5 | D4:0.5 F4:0.5 E4 | E4:0.5 G4:0.5 G4:0.5 G4:0.5 | D4:0.5 F4:0.5 E4 |
             C4 A4 | G4:2 | C5 B4 | C5:2 | E4 D4 | C4:2`,
    chords: 'C.F C C G.C C.F C C G.C C G.C C G.C C.F C C.G C C.G C',
  },
  // Ó, gyönyörű szép, titokzatos éj — Original D major, 2/4 - moved down a tone to C. Repeat written out.
  //   Source: https://hu.wikipedia.org/wiki/Ó,_gyönyörű_szép_titokzatos_éj (LilyPond score)
  //   Public domain: Melody from the Gimesi manuscript collection (1844), traditional. Confidence: single source.
  {
    id: 'o-gyonyoru-szep',
    country: 'hu',
    themes: ['christmas'],
    title: 'Ó, gyönyörű szép, titokzatos éj',
    titleEn: 'O Beautiful, Mysterious Night',
    emoji: '🌙',
    level: 'easy',
    bpm: 76,
    beatsPerBar: 2,
    melody: `C4 E4:0.5 F4:0.5 | G4 A4 | G4:0.5 G4:0.5 F4:0.5 F4:0.5 | E4 R:1 |
             C4 E4:0.5 F4:0.5 | G4 A4 | G4:0.5 G4:0.5 F4:0.5 F4:0.5 | E4 R:1 |
             E4:0.5 E4:0.5 D4:0.5 D4:0.5 | G4:0.5 G4:0.5 F4 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 | G4:0.5 G4:0.5 F4 |
             E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4 C4`,
    chords: 'C C.F C.G C C C.F C.G C C.G C.G C.G C.G C.G C',
  },
];
