// Christmas songs from around the world (English, American and French carols).
// Same format as the other song files, plus optional `aka`: alternative titles used by search.
// Only traditional / public-domain melodies, each with a source comment.
// Melodies were converted mechanically from LilyPond scores or MIDI files (two tunes were transcribed
// by hand from page images), then transposed to C major / A minor.

export const SONGS_XMAS_EN = [
  // We Wish You a Merry Christmas — Original G major, 3/4 - moved down a fifth to C. Verse ("we wish you a merry Christmas" x3) plus refrain ("Good tidings we bring"), as in the source.
  //   Source: https://commons.wikimedia.org/wiki/File:We_Wish_You_A_Merry_Christmas.mid (melody track of Rabanus Flavus's setting, read mechanically from the MIDI)
  //   Public domain: Traditional English (West Country) carol, no known composer.
  //   Confidence: medium-high (single notated source; matches the standard tune, octave leap on "good tidings for Christmas" as in the source).
  {
    id: 'we-wish-you-a-merry-christmas',
    country: 'gb',
    themes: ['christmas', 'children'],
    title: 'We Wish You a Merry Christmas',
    titleEn: 'We Wish You a Merry Christmas',
    emoji: '🎄',
    level: 'easy',
    bpm: 120,
    beatsPerBar: 3,
    pickup: 1,
    melody: `G3 | C4 C4:0.5 D4:0.5 C4:0.5 B3:0.5 | A3 A3 A3 | D4 D4:0.5 E4:0.5 D4:0.5 C4:0.5 |
             B3 G3 B3 | E4 E4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 A3 G3:0.5 G3:0.5 | A3 D4 B3 |
             C4:2 G3 | C4 C4 C4 | B3:2 B3 | C4 B3 A3 |
             G3:2 D4 | E4 D4:0.5 D4:0.5 C4:0.5 C4:0.5 | G4 G3 G3:0.5 G3:0.5 | A3 D4 B3 |
             C4:2`,
    chords: 'C F D G E Am F.G C C G Am G C C F.G C',
  },
  // Deck the Halls — Original D major, 4/4 - moved down a tone to C. Phrase-end articulation gaps in the MIDI filled to full half notes.
  //   Source: https://commons.wikimedia.org/wiki/File:Deck_the_Halls.mid (melody track of Rabanus Flavus's setting, read mechanically from the MIDI)
  //   Public domain: Traditional Welsh melody "Nos Galan" (16th century); English words by Thomas Oliphant (d. 1873).
  //   Confidence: medium-high (single notated source; the tune is fixed and unambiguous).
  {
    id: 'deck-the-halls',
    country: 'gb',
    themes: ['christmas', 'children'],
    title: 'Deck the Halls',
    titleEn: 'Deck the Halls',
    aka: ['Nos Galan', 'Deck the Hall with Boughs of Holly'],
    emoji: '🎀',
    level: 'medium',
    bpm: 120,
    beatsPerBar: 4,
    melody: `G4:1.5 F4:0.5 E4 D4 | C4 D4 E4 C4 | D4:0.5 E4:0.5 F4:0.5 D4:0.5 E4:1.5 D4:0.5 | C4 B3 C4:2 |
             G4:1.5 F4:0.5 E4 D4 | C4 D4 E4 C4 | D4:0.5 E4:0.5 F4:0.5 D4:0.5 E4:1.5 D4:0.5 | C4 B3 C4:2 |
             D4:1.5 E4:0.5 F4 D4 | E4:1.5 F4:0.5 G4 D4 | E4:0.5 F4:0.5 G4 A4:0.5 B4:0.5 C5 | B4 A4 G4:2 |
             G4:1.5 F4:0.5 E4 D4 | C4 D4 E4 C4 | A4:0.5 A4:0.5 A4:0.5 A4:0.5 G4:1.5 F4:0.5 | E4 D4 C4:2`,
    chords: 'C C G.C G.C C C G.C G.C G C.G C.G G C C F.C G.C',
  },
  // Joy to the World — Tune ANTIOCH. Original D major, 2/4 - moved down a tone to C. The tie over the bar on "King" is written as a rest (no re-strike).
  //   Source: https://en.wikipedia.org/wiki/Joy_to_the_World (LilyPond score, after Lowell Mason, The Modern Psalmist 1839, No. 144)
  //   Chords from the SATB parts in the same score, simplified.
  //   Public domain: Lowell Mason (d. 1872), words Isaac Watts (d. 1748).
  //   Confidence: high (transcribed from Mason's 1839 print; matches the standard tune).
  {
    id: 'joy-to-the-world',
    country: 'us',
    themes: ['christmas'],
    title: 'Joy to the World',
    titleEn: 'Joy to the World',
    aka: ['Antioch'],
    emoji: '🌍',
    level: 'medium',
    bpm: 96,
    beatsPerBar: 2,
    melody: `C5 B4:0.75 A4:0.25 | G4:1.5 F4:0.5 | E4 D4 | C4:1.5 G4:0.5 |
             A4:1.5 A4:0.5 | B4:1.5 B4:0.5 | C5:2 | R:1.5 C5:0.5 |
             C5:0.5 B4:0.5 A4:0.5 G4:0.5 | G4:0.75 F4:0.25 E4:0.5 C5:0.5 | C5:0.5 B4:0.5 A4:0.5 G4:0.5 | G4:0.75 F4:0.25 E4:0.5 E4:0.5 |
             E4:0.5 E4:0.5 E4:0.5 E4:0.25 F4:0.25 | G4:1.5 F4:0.25 E4:0.25 | D4:0.5 D4:0.5 D4:0.5 D4:0.25 E4:0.25 | F4:1.5 E4:0.25 D4:0.25 |
             E4:0.5 C5 A4:0.5 | G4:0.75 F4:0.25 E4:0.5 F4:0.5 | E4 D4 | C4:2`,
    chords: 'C C G C F G C C C C C C C C G G C.F C G C',
  },
  // O Come, All Ye Faithful — Original G major, 4/4 - moved down a fifth to C.
  //   Source: https://en.wikipedia.org/wiki/O_Come,_All_Ye_Faithful (LilyPond score, soprano line)
  //   Chords from the score's organ setting, simplified; the unison refrain bars use standard harmony.
  //   Public domain: Attributed to John Francis Wade (d. 1786); English words Frederick Oakeley (d. 1880).
  //   Confidence: high.
  {
    id: 'o-come-all-ye-faithful',
    country: 'gb',
    themes: ['christmas'],
    title: 'O Come, All Ye Faithful',
    titleEn: 'O Come, All Ye Faithful',
    aka: ['Adeste Fideles'],
    emoji: '🙏',
    level: 'medium',
    bpm: 92,
    beatsPerBar: 4,
    pickup: 1,
    melody: `C4 | C4:2 G3 C4 | D4:2 G3:2 | E4 D4 E4 F4 |
             E4:2 D4 C4 | C4:2 B3 A3 | B3 C4 D4 E4 | B3:2 A3:1.5 G3:0.5 |
             G3:4 | G4:2 F4 E4 | F4:2 E4:2 | D4 E4 C4 D4 |
             B3:2 G3 C4 | C4 B3 C4 D4 | C4:2 G3 E4 | E4 D4 E4 F4 |
             E4:2 D4 E4 | F4 E4 D4 C4 | B3:2 C4 F4 | E4:2 D4:1.5 C4:0.5 |
             C4:4`,
    chords: 'C C.G C C.Am Am.G G.C D.G G C G.C G.F G C.G C C C G.Am G.C C.G C',
  },
  // Hark! The Herald Angels Sing — Tune MENDELSSOHN. Original F major, 4/4 - moved down a fourth to C.
  //   Source: https://en.wikipedia.org/wiki/Hark!_The_Herald_Angels_Sing (LilyPond score, after IMSLP full score)
  //   Source: https://commons.wikimedia.org/wiki/File:Hark!_The_Herald_Angels_Sing.mid (soprano matches note for note)
  //   Chords from the SATB parts, simplified.
  //   Public domain: Felix Mendelssohn (d. 1847), adapted by W. H. Cummings (d. 1915); words Charles Wesley (d. 1788).
  //   Confidence: high.
  {
    id: 'hark-the-herald-angels-sing',
    country: 'gb',
    themes: ['christmas'],
    title: 'Hark! The Herald Angels Sing',
    titleEn: 'Hark! The Herald Angels Sing',
    aka: ['Mendelssohn'],
    emoji: '📯',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 4,
    melody: `G3 C4 C4:1.5 B3:0.5 | C4 E4 E4 D4 | G4 G4 G4:1.5 F4:0.5 | E4 D4 E4:2 |
             G3 C4 C4:1.5 B3:0.5 | C4 E4 E4 D4 | G4 D4 D4:1.5 B3:0.5 | B3 A3 G3:2 |
             G4 G4 G4 C4 | F4 E4 E4 D4 | G4 G4 G4 C4 | F4 E4 E4 D4 |
             A4 A4 A4 G4 | F4 E4 F4:2 | D4 E4:0.5 F4:0.5 G4:1.5 C4:0.5 | C4 D4 E4:2 |
             A4:1.5 A4:0.5 A4 G4 | F4 E4 F4:2 | D4 E4:0.5 F4:0.5 G4:1.5 C4:0.5 | C4 D4 C4:2`,
    chords: 'C C.G C.F G.C C Am.D G D.G G.C C.G G.C C.G F F.Dm F.C G.C F F.Dm F.C G.C',
  },
  // The First Noel — Original D major, 3/4 - moved down a tone to C. Verse (two lines, same tune) plus refrain.
  //   Source: https://www.mutopiaproject.org/ftp/Traditional/first_noel/first_noel.ly (Mutopia, SATB hymn tune, 1833 arrangement)
  //   Source: https://commons.wikimedia.org/wiki/File:First_Nowell.mid (melody matches note for note)
  //   Chords from the SATB parts, simplified.
  //   Public domain: Traditional Cornish carol, published by Davies Gilbert (1823) and William Sandys (1833).
  //   Confidence: high.
  {
    id: 'the-first-noel',
    country: 'gb',
    themes: ['christmas'],
    title: 'The First Noel',
    titleEn: 'The First Noel',
    aka: ['The First Nowell'],
    emoji: '⭐',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 3,
    pickup: 1,
    melody: `E4:0.5 D4:0.5 | C4:1.5 D4:0.5 E4:0.5 F4:0.5 | G4:2 A4:0.5 B4:0.5 | C5 B4 A4 |
             G4:2 A4:0.5 B4:0.5 | C5 B4 A4 | G4 A4 B4 | C5 G4 F4 |
             E4:2 E4:0.5 D4:0.5 | C4:1.5 D4:0.5 E4:0.5 F4:0.5 | G4:2 A4:0.5 B4:0.5 | C5 B4 A4 |
             G4:2 A4:0.5 B4:0.5 | C5 B4 A4 | G4 A4 B4 | C5 G4 F4 |
             E4:2 E4:0.5 D4:0.5 | C4:1.5 D4:0.5 E4:0.5 F4:0.5 | G4:2 C5:0.5 B4:0.5 | A4:2 A4 |
             G4:2 G4 | C5 B4 A4 | G4 A4 B4 | C5 G4 F4 |
             E4:2`,
    chords: 'C.Am G C.F C.F C.Dm C.G F.G C.G C.Am G C.F C.F C.Dm C.G F.G C.G C Em F G.C Am C.G F.G C',
  },
  // Les anges dans nos campagnes — Tune GLORIA. Original F major, 4/4 - moved down a fourth to C. Verse repeat and "Gloria" refrain repeat written out.
  //   Source: https://en.wikipedia.org/wiki/Angels_We_Have_Heard_on_High (LilyPond score, arr. Edward Shippen Barnes)
  //   Source: https://commons.wikimedia.org/wiki/File:Les_anges_dans_nos_campagnes.mid (French setting: same tune, the verse has small text-driven rhythm differences; Gloria identical)
  //   Chords from the SATB parts, simplified.
  //   Public domain: Traditional French carol (18th century); English words James Chadwick (d. 1882).
  //   Confidence: high.
  {
    id: 'les-anges-dans-nos-campagnes',
    country: 'fr',
    themes: ['christmas'],
    title: 'Les anges dans nos campagnes',
    titleEn: 'Angels We Have Heard on High',
    aka: ['Angels We Have Heard on High', 'Gloria', 'Gloria in excelsis Deo'],
    emoji: '👼',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 4,
    melody: `E4 E4 E4 G4 | G4:1.5 F4:0.5 E4:2 | E4 D4 E4 G4 | E4:1.5 D4:0.5 C4:2 |
             E4 E4 E4 G4 | G4:1.5 F4:0.5 E4:2 | E4 D4 E4 G4 | E4:1.5 D4:0.5 C4:2 |
             G4:2 A4:0.5 G4:0.5 F4:0.5 E4:0.5 | F4:2 G4:0.5 F4:0.5 E4:0.5 D4:0.5 | E4:2 F4:0.5 E4:0.5 D4:0.5 C4:0.5 | D4:1.5 G3:0.5 G3:2 |
             C4 D4 E4 F4 | E4:2 D4:2 | G4:2 A4:0.5 G4:0.5 F4:0.5 E4:0.5 | F4:2 G4:0.5 F4:0.5 E4:0.5 D4:0.5 |
             E4:2 F4:0.5 E4:0.5 D4:0.5 C4:0.5 | D4:1.5 G3:0.5 G3:2 | C4 D4 E4 F4 | E4:2 D4:2 |
             C4:4`,
    chords: 'C G.C C G.C C G.C C G.C C.Am Dm.G C.F G C.F C.G C.Am Dm.G C.F G C.F C.G C',
  },
  // Minuit, chrétiens — Original (this edition) C major, 4/4 - no transposition. Voice part only, piano introduction/postlude bars dropped; the opening bar keeps its rests.
  //   Source: https://www.mutopiaproject.org/ftp/AdamA/minuit_chretiens/minuit_chretiens.ly (Mutopia, after Ed. Léon Grus; converted from the LilyPond voice part)
  //   Chords: simplified standard harmony (the source piano part is arpeggiated, not parsed).
  //   Public domain: Adolphe Adam (d. 1856); words Placide Cappeau (d. 1877).
  //   Confidence: medium-high for the melody (single source, mechanical conversion); chords are a simplification.
  {
    id: 'minuit-chretiens',
    country: 'fr',
    themes: ['christmas'],
    title: 'Minuit, chrétiens',
    titleEn: 'O Holy Night',
    aka: ['O Holy Night', 'Cantique de Noël'],
    emoji: '🌙',
    level: 'hard',
    bpm: 60,
    beatsPerBar: 4,
    melody: `R:1.75 E4:0.25 E4:1.75 G4:0.25 | G4:1.75 G4:0.25 A4:0.75 A4:0.25 F4:0.75 A4:0.25 | C5:2 G4:0.5 R:0.25 G4:0.25 E4:0.75 D4:0.25 | C4 E4:0.75 F4:0.25 G4 F4:0.75 D4:0.25 |
             C4:2 R:2 | R:2 E4 E4:0.75 E4:0.25 | G4:1.75 G4:0.25 A4:0.75 A4:0.25 F4:0.75 A4:0.25 | C5:2 G4:0.5 R:0.25 G4:0.25 F#4:0.75 E4:0.25 |
             B4 G4:0.75 A4:0.25 B4 C5:0.75 B4:0.25 | E4:2 R:1.75 G4:0.25 | G4 A4 D4 G4 | A4:0.75 G4:0.25 C5:0.75 E4:0.25 A4 G4:0.5 R:0.25 G4:0.25 |
             G4 A4 D4 G4 | A4:0.75 G4:0.25 C5:0.75 E4:0.25 G4:1.5 R:0.5 | C5:3 B4:0.75 A4:0.25 | B4:3.75 B4:0.25 |
             D5:2.75 A4:0.25 A4:0.75 A4:0.25 | C5:2 C5 R:0.75 C5:0.25 | E5:2 D5:1.75 G4:0.25 | C5:3 B4:0.75 A4:0.25 |
             G4:2.75 G4:0.25 A4:0.75 G4:0.25 | G4:3 R:0.75 C5:0.25 | D5:3.75 G4:0.25 | E5:3 D5 |
             C5:2 B4 C5:0.75 D5:0.25 | C5:2 R:2`,
    chords: 'C C.F C.G C.G C C C.F C.Em Em Em G F.C G F.C Am Em Dm Am C.G C.F C.G C G C.G C.G C',
  },
  // Away in a Manger — Tune CRADLE SONG (Kirkpatrick, 1895). Original F major, 3/4 - moved down a fourth to C.
  //   Source: https://en.wikipedia.org/wiki/Away_in_a_Manger (second LilyPond score, Kirkpatrick tune)
  //   Source: https://commons.wikimedia.org/wiki/File:Away_in_a_Manger_(Kirkpatrick_melody).mid (melody matches note for note)
  //   Public domain: William J. Kirkpatrick (d. 1921).
  //   Confidence: high.
  {
    id: 'away-in-a-manger',
    country: 'us',
    themes: ['christmas', 'children'],
    title: 'Away in a Manger',
    titleEn: 'Away in a Manger',
    aka: ['Cradle Song', 'Kirkpatrick'],
    emoji: '🌾',
    level: 'easy',
    bpm: 96,
    beatsPerBar: 3,
    pickup: 1,
    melody: `G3 | C4 C4 D4:0.5 E4:0.5 | C4 C4 E4:0.5 F4:0.5 | G4 G4 A4 |
             F4:2 D4:0.5 E4:0.5 | F4 F4 G4 | E4 E4 C4:0.5 E4:0.5 | D4 A3 C4 |
             B3:2 G3 | C4 C4 D4:0.5 E4:0.5 | C4 C4 E4:0.5 F4:0.5 | G4 G4 A4 |
             F4:2 D4:0.5 E4:0.5 | F4 F4 G4 | E4 E4 C4:0.5 E4:0.5 | D4 A3 B3 |
             C4:2`,
    chords: 'C C C.F F Dm.G C D G C C C.F F Dm.G C Dm.G C',
  },
  // God Rest Ye Merry, Gentlemen — Original E minor, 4/4 - moved down a fifth to A minor. Repeated first half written out.
  //   Source: https://en.wikipedia.org/wiki/God_Rest_Ye_Merry,_Gentlemen (LilyPond score)
  //   Source: https://commons.wikimedia.org/wiki/File:God_rest_you_merry,_Gentlemen.mid (melody matches note for note)
  //   Chords from the SATB parts, simplified.
  //   Public domain: Traditional English carol (printed c. 1760).
  //   Confidence: high.
  {
    id: 'god-rest-ye-merry-gentlemen',
    country: 'gb',
    themes: ['christmas'],
    title: 'God Rest Ye Merry, Gentlemen',
    titleEn: 'God Rest Ye Merry, Gentlemen',
    aka: ['God Rest You Merry, Gentlemen'],
    emoji: '🎩',
    level: 'medium',
    bpm: 112,
    beatsPerBar: 4,
    pickup: 1,
    melody: `A3 | A3 E4 E4 D4 | C4 B3 A3 G3 | A3 B3 C4 D4 |
             E4:3 A3 | A3 E4 E4 D4 | C4 B3 A3 G3 | A3 B3 C4 D4 |
             E4:3 E4 | F4 D4 E4 F4 | G4 A4 E4 D4 | C4 A3 B3 C4 |
             D4:2 C4 D4 | E4:2 F4 E4 | E4 D4 C4 B3 | A3:2 C4:0.5 B3:0.5 A3 |
             D4:2 C4 D4 | E4 F4 G4 A4 | E4 D4 C4 B3 | A3:3`,
    chords: 'Am Am.F F.Am E Am Am.F F.Am E Dm.F C Am.G G C.F C.E Am G C.F C.E Am',
  },
  // O Little Town of Bethlehem — Tune ST. LOUIS. Score written in G (sounding F) - moved to C. Keeps the D# the melody needs.
  //   Source: https://en.wikipedia.org/wiki/O_Little_Town_of_Bethlehem (LilyPond score of Redner's tune)
  //   Chords: simplified standard hymnal harmony (the score has melody only).
  //   Public domain: Lewis Redner (d. 1908); words Phillips Brooks (d. 1893).
  //   Confidence: medium-high (single notated source).
  {
    id: 'o-little-town-of-bethlehem',
    country: 'us',
    themes: ['christmas'],
    title: 'O Little Town of Bethlehem',
    titleEn: 'O Little Town of Bethlehem',
    aka: ['St. Louis'],
    emoji: '🏘️',
    level: 'medium',
    bpm: 84,
    beatsPerBar: 4,
    pickup: 1,
    melody: `E4 | E4 E4 D#4 E4 | G4 F4 A3 D4 | C4 B3:0.5 C4:0.5 D4 G3 |
             E4:3 E4 | E4 E4 A4 G4 | G4 F4 A3 D4 | C4 B3:0.5 C4:0.5 E4 D4 |
             C4:3 E4 | E4 E4 D4 C4 | B3:2 B3 B3 | A3 B3 C4 D4 |
             E4:3 E4 | E4 E4 D#4 E4 | G4 F4 A3 A4 | G4 C4 E4:1.5 D4:0.5 |
             C4:3`,
    chords: 'C F.Dm C.G C C.F F.Dm C.G C Am E F.G C C F.Dm C.G C',
  },
  // What Child Is This? — Tune GREENSLEEVES. Original E minor, 6/8 - moved down a fifth to A minor; counted in eighths. The repeated held A at "Mary" is merged.
  //   Source: https://commons.wikimedia.org/wiki/File:What_Child_is_this.mid (melody track of Rabanus Flavus's setting, read mechanically from the MIDI)
  //   Public domain: Traditional English tune (16th century); words William Chatterton Dix (d. 1898).
  //   Confidence: medium-high (single notated source; standard Greensleeves rhythm).
  {
    id: 'what-child-is-this',
    country: 'gb',
    themes: ['christmas'],
    title: 'What Child Is This?',
    titleEn: 'What Child Is This?',
    aka: ['Greensleeves'],
    emoji: '👶',
    level: 'medium',
    bpm: 160,
    beatsPerBar: 6,
    pickup: 1,
    melody: `A3 | C4:2 D4 E4:1.5 F4:0.5 E4 | D4:2 B3 G3:1.5 A3:0.5 B3 | C4:2 A3 A3:1.5 G#3:0.5 A3 |
             B3:3 E3:2 A3 | C4:2 D4 E4:1.5 F4:0.5 E4 | D4:2 B3 G3:1.5 A3:0.5 B3 | C4:1.5 B3:0.5 A3 G#3:1.5 F#3:0.5 G#3 |
             A3:5 R | G4:3 G4:1.5 F4:0.5 E4 | D4:2 B3 G3:1.5 A3:0.5 B3 | C4:2 A3 A3:1.5 G#3:0.5 A3 |
             B3:2 G#3 E3:2 R | G4:3 G4:1.5 F4:0.5 E4 | D4:2 B3 G3:1.5 A3:0.5 B3 | C4:1.5 B3:0.5 A3 G#3:1.5 F#3:0.5 G#3 |
             A3:5`,
    chords: 'Am G F E Am G Am.E Am C G F E C G Am.E Am',
  },
  // Ding Dong! Merrily on High — Tune: Branle de l'Official (Arbeau, Orchésographie 1589). Original B-flat major, 4/4 - moved down to C. Repeat written out.
  //   Source: https://en.wikipedia.org/wiki/Ding_Dong_Merrily_on_High (LilyPond score, arr. Charles Wood)
  //   Source: https://commons.wikimedia.org/wiki/File:Ding!_dong!_merrily_on_high.mid (melody matches)
  //   Chords from the SATB parts, simplified.
  //   Public domain: French dance tune (1589); words George Ratcliffe Woodward (d. 1934), arr. Charles Wood (d. 1926).
  //   Confidence: high.
  {
    id: 'ding-dong-merrily-on-high',
    country: 'fr',
    themes: ['christmas'],
    title: 'Ding Dong! Merrily on High',
    titleEn: 'Ding Dong! Merrily on High',
    aka: ["Branle de l'Official"],
    emoji: '🔔',
    level: 'medium',
    bpm: 120,
    beatsPerBar: 4,
    melody: `C4 C4 D4:0.5 C4:0.5 B3:0.5 A3:0.5 | G3:3 G3 | A3 C4 C4 B3 | C4:2 C4:2 |
             C4 C4 D4:0.5 C4:0.5 B3:0.5 A3:0.5 | G3:3 G3 | A3 C4 C4 B3 | C4:2 C4:2 |
             G4:1.5 F4:0.5 E4:0.5 F4:0.5 G4:0.5 E4:0.5 | F4:1.5 E4:0.5 D4:0.5 E4:0.5 F4:0.5 D4:0.5 | E4:1.5 D4:0.5 C4:0.5 D4:0.5 E4:0.5 C4:0.5 | D4:1.5 C4:0.5 B3:0.5 C4:0.5 D4:0.5 B3:0.5 |
             C4:1.5 B3:0.5 A3:0.5 B3:0.5 C4:0.5 A3:0.5 | B3:1.5 A3:0.5 G3 G3 | A3 C4 C4 B3 | C4:2 C4:2`,
    chords: 'C.Dm G F.G C C.Dm G F.G C C Dm C G Am G F.G C',
  },
  // In the Bleak Midwinter — Tune CRANHAM (Holst). Original F major, 4/4 - moved down a fourth to C. Verse 1 rhythm.
  //   Source: https://archive.org/details/theenglishhymnal00milfuoft (The English Hymnal 1906, No. 25, page scan; transcribed by hand)
  //   Source: https://en.wikipedia.org/wiki/In_the_Bleak_Midwinter (LilyPond incipit; first four bars match)
  //   Chords: simplified from the hymnal harmony.
  //   Public domain: Gustav Holst (d. 1934); words Christina Rossetti (d. 1894).
  //   Confidence: medium-high (hand transcription from a clear scan; the second source covers only the opening).
  {
    id: 'in-the-bleak-midwinter',
    country: 'gb',
    themes: ['christmas'],
    title: 'In the Bleak Midwinter',
    titleEn: 'In the Bleak Midwinter',
    aka: ['Cranham'],
    emoji: '❄️',
    level: 'easy',
    bpm: 84,
    beatsPerBar: 4,
    melody: `E4:1.5 F4:0.5 G4 E4 | D4:2 C4 R | D4:1.5 E4:0.5 D4 A3 | D4:3 R |
             E4:1.5 F4:0.5 G4 E4 | D4:2 C4 R | D4 E4 D4:1.5 C4:0.5 | C4:3 R |
             F4:1.5 E4:0.5 F4 G4 | A4 A4 G4 R | G4 E4 D4 C4 | B3:3 R |
             E4:1.5 F4:0.5 G4 E4 | D4:2 C4 R | D4 E4 D4:1.5 C4:0.5 | C4:4`,
    chords: 'C G.C Dm G C G.C Dm.G C F.C F.C C.Dm G C G.C Dm.G C',
  },
  // Good King Wenceslas — Tune TEMPUS ADEST FLORIDUM (Piae Cantiones 1582). Original G major, 4/4 - moved down a fifth to C.
  //   Source: https://commons.wikimedia.org/wiki/File:Good_King_Wenceslas.mid (melody track of Rabanus Flavus's setting, read mechanically from the MIDI)
  //   Public domain: Medieval spring carol (Piae Cantiones, 1582); words John Mason Neale (d. 1866).
  //   Confidence: medium-high (single notated source; standard tune).
  {
    id: 'good-king-wenceslas',
    country: 'gb',
    themes: ['christmas', 'children'],
    title: 'Good King Wenceslas',
    titleEn: 'Good King Wenceslas',
    aka: ['Tempus adest floridum'],
    emoji: '👑',
    level: 'easy',
    bpm: 112,
    beatsPerBar: 4,
    melody: `C4 C4 C4 D4 | C4 C4 G3:2 | A3 G3 A3 B3 | C4:2 C4:2 |
             C4 C4 C4 D4 | C4 C4 G3:2 | A3 G3 A3 B3 | C4:2 C4:2 |
             G4 F4 E4 D4 | E4 D4 C4:2 | A3 G3 A3 B3 | C4:2 C4:2 |
             G3 G3 A3 B3 | C4 C4 D4:2 | G4 F4 E4 D4 | C4:2 F4:2 |
             C4:4`,
    chords: 'C C F.G C C C F.G C C.G C F.G C C.G C.G C.G C.F C',
  },
  // The Holly and the Ivy — Original G major, 3/4 - moved down a fifth to C. Verse plus refrain ("The rising of the sun").
  //   Source: https://en.wikipedia.org/wiki/The_Holly_and_the_Ivy (LilyPond score, Cecil Sharp's tune)
  //   Source: https://commons.wikimedia.org/wiki/File:The_Holly_and_the_Ivy_(Cecil_James_Sharp_1911).mid (melody matches note for note)
  //   Public domain: Traditional English carol, collected by Cecil Sharp (d. 1924).
  //   Confidence: high.
  {
    id: 'the-holly-and-the-ivy',
    country: 'gb',
    themes: ['christmas'],
    title: 'The Holly and the Ivy',
    titleEn: 'The Holly and the Ivy',
    emoji: '🌿',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 3,
    pickup: 1,
    melody: `C4 | C4:0.5 C4:0.5 C4 A4 | G4 E4:1.5 C4:0.5 | C4:0.5 C4:0.5 C4 A4 |
             G4:2 G4:0.5 F4:0.5 | E4:0.5 D4:0.5 C4 E4:0.5 E4:0.5 | A3:0.5 A3:0.5 G3 C4:0.5 D4:0.5 | E4:0.5 F4:0.5 E4 D4 |
             C4:2 R:0.5 C4:0.5 | C4:0.5 C4:0.5 C4 A4 | G4 E4 C4:0.5 C4:0.5 | C4:0.5 C4:0.5 C4 A4 |
             G4:2 G4:0.5 F4:0.5 | E4:0.5 D4:0.5 C4 E4 | A3:0.5 A3:0.5 G3 C4:0.5 D4:0.5 | E4:0.5 F4:0.5 E4 D4 |
             C4:2`,
    chords: 'C.F C C.F G C F.C C.G C C.F C C.F G C F.C C.G C',
  },
  // I Saw Three Ships — Original A-flat major, 6/8 - moved down to C; counted in eighths. Both endings written out.
  //   Source: https://en.wikipedia.org/wiki/I_Saw_Three_Ships (LilyPond score)
  //   Source: https://commons.wikimedia.org/wiki/File:3_Ships.mid (melody matches note for note)
  //   Chords from the SATB parts, simplified.
  //   Public domain: Traditional English carol (17th century).
  //   Confidence: high.
  {
    id: 'i-saw-three-ships',
    country: 'gb',
    themes: ['christmas', 'children'],
    title: 'I Saw Three Ships',
    titleEn: 'I Saw Three Ships',
    emoji: '⛵',
    level: 'easy',
    bpm: 160,
    beatsPerBar: 6,
    pickup: 1,
    melody: `G3 | C4:2 C4 D4:2 E4 | G4:2 E4 D4:2 F4 | E4:2 C4 C4:2 E4 |
             D4:2 B3 G3:2 G3 | C4:2 C4 D4:2 E4 | G4:2 E4 D4:2 F4 | E4:2 C4 C4 D4 E4 |
             D4:3 C4:2`,
    chords: 'C C.G C G C C.G C G.C',
  },
  // Go Tell It on the Mountain — Original F major, 4/4 - moved down a fourth to C. Refrain, verse, refrain. Swung dotted rhythms rounded to dotted-eighth + sixteenth.
  //   Source: https://commons.wikimedia.org/wiki/File:Komm,_sag_es_allen_weiter.mid (Rabanus Flavus's setting of the "Go Tell It on the Mountain" melody, German hymnal EG 225; read mechanically from the MIDI)
  //   Public domain: African-American spiritual (19th century), published by John Wesley Work Jr. (d. 1925).
  //   Confidence: medium (single source, set to the German text; rhythm may differ slightly from English hymnals).
  {
    id: 'go-tell-it-on-the-mountain',
    country: 'us',
    themes: ['christmas'],
    title: 'Go Tell It on the Mountain',
    titleEn: 'Go Tell It on the Mountain',
    emoji: '⛰️',
    level: 'medium',
    bpm: 104,
    beatsPerBar: 4,
    melody: `E4:2 E4:0.75 D4:0.25 C4:0.75 A3:0.25 | G3:2 C4:2 | B3:0.5 D4 C4:0.5 D4 C4 | E4:0.5 D4:0.5 C4 A3:0.5 G3:1.5 |
             E4:2 E4:0.75 D4:0.25 C4:0.75 A3:0.25 | G3:2 C4 F4 | E4:0.5 E4:1.5 D4:0.75 C4:0.25 D4 | C4:2.5 R:0.5 C4 |
             E4 G4 G4:1.5 A4:0.5 | G4 E4:2 C4 | D4 D4 C4 D4 | E4:3 C4 |
             E4 G4 G4:1.5 A4:0.5 | G4 E4:2 C4 | D4 D4 C4 A3 | G3:2 F4:2 |
             E4:2 E4:0.75 D4:0.25 C4:0.75 A3:0.25 | G3:2 C4:2 | B3:0.5 D4 C4:0.5 D4 C4 | E4:0.5 D4:0.5 C4 A3:0.5 G3:1.5 |
             E4:2 E4:0.75 D4:0.25 C4:0.75 A3:0.25 | G3:2 C4 F4 | E4:0.5 E4:1.5 D4:0.75 C4:0.25 D4 | C4:4`,
    chords: 'C C G C.G C C C.G C C C G C C C D G C C G C.G C C C.G C',
  },
  // Once in Royal David's City — Tune IRBY. Original F major, 4/4 - moved down a fourth to C. Repeat written out.
  //   Source: https://en.wikipedia.org/wiki/Once_in_Royal_David's_City (LilyPond score, arr. A. H. Mann)
  //   Source: https://commons.wikimedia.org/wiki/File:Once_in_Royal_David's_City.mid (melody matches note for note)
  //   Chords from the organ parts, simplified.
  //   Public domain: Henry John Gauntlett (d. 1876); words Cecil Frances Alexander (d. 1895).
  //   Confidence: high.
  {
    id: 'once-in-royal-davids-city',
    country: 'gb',
    themes: ['christmas'],
    title: "Once in Royal David's City",
    titleEn: "Once in Royal David's City",
    aka: ['Irby'],
    emoji: '🏰',
    level: 'medium',
    bpm: 88,
    beatsPerBar: 4,
    pickup: 2,
    melody: `G3 B3 | C4:1.5 C4:0.5 C4:0.5 B3:0.5 C4:0.5 D4:0.5 | D4 C4 C4 E4 | G4:1.5 E4:0.5 E4:0.5 D4:0.5 C4:0.5 B3:0.5 |
             C4:2 G3 B3 | C4:1.5 C4:0.5 C4:0.5 B3:0.5 C4:0.5 D4:0.5 | D4 C4 C4 E4 | G4:1.5 E4:0.5 E4:0.5 D4:0.5 C4:0.5 B3:0.5 |
             C4:2 A4 A4 | G4:1.5 C4:0.5 F4 F4 | E4:2 A4 A4 | G4:1.5 E4:0.5 E4:0.5 D4:0.5 C4:0.5 B3:0.5 |
             C4:2`,
    chords: 'C G.C C.G C C G.C C.G C.F C.G C.F C.G C',
  },
  // While Shepherds Watched Their Flocks — Tune WINCHESTER OLD (Este's Psalter, 1592). Original F major, 4/4 - moved down a fourth to C.
  //   Source: https://commons.wikimedia.org/wiki/File:While_Shepherds_Watched_Their_Flocks_(Winchester_Old).mid (melody track of Rabanus Flavus's setting, read mechanically from the MIDI)
  //   Public domain: Tune from Thomas Este's Whole Booke of Psalmes (1592), attr. George Kirbye (d. 1634); words Nahum Tate (d. 1715).
  //   Confidence: medium (single source; some hymnals use a plainer half/quarter rhythm).
  {
    id: 'while-shepherds-watched',
    country: 'gb',
    themes: ['christmas'],
    title: 'While Shepherds Watched Their Flocks',
    titleEn: 'While Shepherds Watched Their Flocks',
    aka: ['Winchester Old'],
    emoji: '🐑',
    level: 'easy',
    bpm: 92,
    beatsPerBar: 4,
    pickup: 1,
    melody: `C4 | E4:1.5 E4:0.5 D4 C4 | F4 F4 E4 D4 | E4 G4 G4 F#4 |
             G4:3 E4 | A4:1.5 G4:0.5 F4 E4 | D4 C4 B3 E4 | D4 C4 C4 B3 |
             C4:3`,
    chords: 'C F.C C.D G F.C G Dm.G C',
  },
  // Coventry Carol — Original G minor, 3/4 - moved up a tone to A minor; keeps G# and the major-third ending (C#). Top voice of the chordal setting; the tie into bar 8 is written as a rest.
  //   Source: https://en.wikipedia.org/wiki/Coventry_Carol (LilyPond score)
  //   Source: https://commons.wikimedia.org/wiki/File:Coventry_Carol.mid (melody matches note for note)
  //   Chords from the score's lower staff, simplified.
  //   Public domain: 16th-century English carol (Pageant of the Shearmen and Tailors).
  //   Confidence: high.
  {
    id: 'coventry-carol',
    country: 'gb',
    themes: ['christmas'],
    title: 'Coventry Carol',
    titleEn: 'Coventry Carol',
    aka: ['Lully, Lulla, Thou Little Tiny Child'],
    emoji: '🕯️',
    level: 'medium',
    bpm: 72,
    beatsPerBar: 3,
    melody: `A4 A4 G#4 | A4:2 C5 | B4:2 A4 | G#4:3 |
             A4 B4 C5 | D5 B4:2 | A4:3 | R:2 E5 |
             D5:2 C5 | B4:2 C5 | B4:2 A4 | G#4:3 |
             A4 G#4 A4 | D5 B4:2 | C#5:3`,
    chords: 'Am Am.C G.Am E Am Dm.G Am Am G.C Em.Am Dm E Am Dm.E A',
  },
  // We Three Kings — Original E minor (refrain G major), 3/8 - moved down a fifth to A minor / C; counted in eighths. Repeats written out.
  //   Source: https://en.wikipedia.org/wiki/We_Three_Kings (LilyPond score)
  //   Source: https://commons.wikimedia.org/wiki/File:Three_Kings_of_Orient.mid (verse matches note for note)
  //   Chords from the chord names in the source score, simplified.
  //   Public domain: John Henry Hopkins Jr. (d. 1891).
  //   Confidence: high.
  {
    id: 'we-three-kings',
    country: 'us',
    themes: ['christmas'],
    title: 'We Three Kings',
    titleEn: 'We Three Kings of Orient Are',
    aka: ['Kings of Orient'],
    emoji: '🐫',
    level: 'medium',
    bpm: 150,
    beatsPerBar: 3,
    melody: `E4:2 D4 | C4:2 A3 | B3 C4 B3 | A3:2 R |
             E4:2 D4 | C4:2 A3 | B3 C4 B3 | A3:2 R |
             C4:2 C4 | D4:2 D4 | E4:2 E4 | G4 F4 E4 |
             D4 E4 D4 | C4:2 B3 | A3:2 R | B3:2 D4 |
             C4:2 C4 | C4:2 G3 | C4:2 A3 | C4:2 R |
             C4:2 C4 | C4:2 G3 | C4:2 A3 | C4:2 R |
             C4:2 C4 | D4:2 E4 | F4:2 E4 | D4:2 E4 |
             C4:2 C4 | C4:2 G3 | C4:2 A3 | C4:3`,
    chords: 'Am Am E Am Am Am E Am Am G C C Dm Am.E Am G C C F C C C F C Am G.C F.C G.C C.F C F C',
  },
  // The Twelve Days of Christmas — Austin melody, verse 5 ("Five gold rings"). Original F major, mixed 4/4 + 3/4 - moved down a fourth to C and rebarred in 2/4
  //     (so the 3/4 bars fit); "Rings" is held as a note plus rest, and the last note is shortened to two beats.
  //   Source: https://commons.wikimedia.org/wiki/File:12_days_melody.png (Wikipedia's engraving of Austin's 1909 melody; transcribed by hand)
  //   Public domain: Traditional English; melody arrangement Frederic Austin (d. 1952).
  //   Confidence: medium (single source, hand transcription; rebarred).
  {
    id: 'the-twelve-days-of-christmas',
    country: 'gb',
    themes: ['christmas'],
    title: 'The Twelve Days of Christmas',
    titleEn: 'The Twelve Days of Christmas',
    emoji: '🐦',
    level: 'medium',
    bpm: 110,
    beatsPerBar: 2,
    pickup: 1,
    melody: `G3:0.5 G3:0.5 | G3 C4:0.5 C4:0.5 | C4 B3:0.5 C4:0.5 | D4:0.5 E4:0.5 F4:0.5 D4:0.5 |
             E4:2 | G4:2 | A4:0.5 F#4:1.5 | G4:2 |
             R:2 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 F4 | A3 C4 |
             D4:0.5 C4:0.5 B3:0.5 A3:0.5 | G3 E4:0.5 F4:0.5 | G4 A4:0.5 F4:0.5 | E4:0.5 C4:0.5 D4 |
             C4:2`,
    chords: 'C C G C C D G G G C.F F G C C.F C.G C',
  },
  // Il est né, le divin Enfant — Original G major, 2/4 - moved down a fifth to C. Refrain, verse, refrain (D.C. al Fine written out).
  //   Source: https://en.wikipedia.org/wiki/Il_est_n%C3%A9,_le_divin_Enfant (LilyPond score)
  //   Source: https://commons.wikimedia.org/wiki/File:Il_est_n%C3%A9_le_divin_enfant.mid (melody matches)
  //   Chords from the chord names in the source score.
  //   Public domain: Traditional French carol (published 1862 by R. Grosjean).
  //   Confidence: high.
  {
    id: 'il-est-ne-le-divin-enfant',
    country: 'fr',
    themes: ['christmas', 'children'],
    title: 'Il est né, le divin Enfant',
    titleEn: 'He Is Born, the Holy Child',
    aka: ['He Is Born', 'Il est né'],
    emoji: '🎵',
    level: 'easy',
    bpm: 108,
    beatsPerBar: 2,
    melody: `G3 C4 | C4 E4:0.5 C4:0.5 | G3 C4 | C4:2 |
             C4 C4:0.5 D4:0.5 | E4 F4:0.5 E4:0.5 | D4 C4 | D4:0.5 B3:0.5 G3 |
             G3 C4 | C4 E4:0.5 C4:0.5 | G3 C4 | C4:2 |
             C4 D4 | E4 F4:0.5 E4:0.5 | D4 G4 | C4:2 |
             E4 F4 | G4 F4:0.5 E4:0.5 | F4 A4 | G4:2 |
             E4 F4 | G4 A4:0.5 G4:0.5 | F4 E4 | E4 D4 |
             E4 F4 | G4 F4:0.5 E4:0.5 | F4 A4 | G4:2 |
             E4 F4 | G4 A4:0.5 G4:0.5 | F4 E4 | D4:2 |
             G3 C4 | C4 E4:0.5 C4:0.5 | G3 C4 | C4:2 |
             C4 C4:0.5 D4:0.5 | E4 F4:0.5 E4:0.5 | D4 C4 | D4:0.5 B3:0.5 G3 |
             G3 C4 | C4 E4:0.5 C4:0.5 | G3 C4 | C4:2 |
             C4 D4 | E4 F4:0.5 E4:0.5 | D4 G4 | C4:2`,
    chords: 'C C C C C C G G C C C C C C G C C C G C C C C G C C G C C C G.C G C C C C C C G G C C C C C C G C',
  },
];
