// Ukrainian folk and children's songs. Same format as the other song files:
// { id, country: 'ua', themes, title (Ukrainian), titleEn, emoji, level, bpm, beatsPerBar,
//   pickup?, melody, chords }. Only traditional / public-domain melodies, each with a source comment.
// MIDI files were converted mechanically (tools: a small MIDI-to-token script); score images
// (Mama Lisa's World, Wikimedia Commons, nashe.com.ua) were read note by note and, where a
// second source existed, compared bar by bar. Everything is transposed to C major / A minor
// (or D dorian), so the tunes stay on the white keys apart from the odd raised leading tone.
// Modern / copyrighted children's songs are deliberately left out.

export const SONGS_UA = [
  // Два півники — Original F major, 2/4 - transposed down a fourth to C major. MIDI and score agree note for note.
  //   Source: https://www.mamalisa.com/?t=es&p=4895 (score image + MIDI dva_pivnyky.mid)
  //   Public domain: Traditional Ukrainian children's song (folk rhyme-song, no known author).
  //   Confidence: high (MIDI converted mechanically, matches the printed score).
  {
    id: 'dva-pivnyky',
    country: 'ua',
    themes: ['children', 'animals'],
    title: 'Два півники',
    titleEn: 'Two Little Roosters',
    emoji: '🐓',
    level: 'easy',
    bpm: 112,
    beatsPerBar: 2,
    melody: `E4:0.5 G4:0.5 G4:0.5 G4:0.5 | E4:0.5 G4:0.5 G4:0.5 G4:0.5 | A4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4 C4 |
             E4:0.5 G4:0.5 G4:0.5 G4:0.5 | E4:0.5 G4:0.5 G4:0.5 G4:0.5 | A4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4 C4 |
             A4 A4:0.5 A4:0.5 | G4 G4:0.5 A4:0.5 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 C4 |
             A4:0.5 A4:0.5 A4:0.5 A4:0.5 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 C4`,
    chords: 'C C F.C G.C C C F.C G.C F C C.G C F C C.G C',
  },
  // Котику сіренький — Lullaby. Original F minor (Mama Lisa, nashe.com.ua) / A minor (Commons), 4/4 - written in A minor.
  //   Source: https://commons.wikimedia.org/wiki/File:Котику_сіренький.GIF (score, PD-UA-exempt)
  //   Source: https://www.mamalisa.com/?t=es&p=1062 (score image + MIDI chat_gris.mid, F minor)
  //   Source: https://nashe.com.ua/song/11404/notes (score, F minor)
  //   Public domain: Traditional Ukrainian lullaby ("слова і музика народні").
  //   Confidence: high. All three agree on bars 1-10. Last bar: Mama Lisa and Commons use the 16th + dotted-8th
  //   "A-a" figure (used here); nashe has even eighths. The last note is Db in F minor (Mama Lisa, nashe) = F5 here;
  //   Commons has E5.
  {
    id: 'kotyku-sirenkyi',
    country: 'ua',
    themes: ['lullaby', 'animals'],
    title: 'Котику сіренький',
    titleEn: 'Little Grey Kitty',
    emoji: '🐈',
    level: 'medium',
    bpm: 72,
    beatsPerBar: 4,
    melody: `E4:0.5 A4:0.5 B4:0.5 D5:0.25 C5:0.25 B4 A4 | E4:0.5 A4:0.5 B4:0.5 D5:0.25 C5:0.25 B4 A4 |
             D5:0.5 D5:0.5 D5:0.5 C5:0.5 B4 A4 | D5:0.5 D5:0.5 D5:0.5 C5:0.5 B4 A4 |
             E4:0.5 A4:0.5 B4:0.5 D5:0.25 C5:0.25 B4 A4 | E4:0.5 A4:0.5 B4:0.5 D5:0.25 C5:0.25 B4 A4 |
             D5:0.5 D5:0.5 D5:0.5 C5:0.5 B4 A4 | D5:0.5 D5:0.5 D5:0.5 C5:0.5 B4 A4 |
             E4:0.5 A4:0.5 B4:0.5 D5:0.25 C5:0.25 B4:0.25 A4:0.25 B4:0.5 A4 |
             E4:0.5 A4:0.5 B4:0.5 D5:0.25 C5:0.25 B4:0.25 A4:0.25 B4:0.5 A4 |
             C5:0.25 A4:0.75 C5:0.25 A4:0.75 C5:0.25 A4:0.75 F5:0.5 R:0.5`,
    chords: 'Am Am Dm.Am Dm.Am Am Am Dm.Am Dm.Am Am Am Am.Dm',
  },
  // Подоляночка (Десь тут була подоляночка) — Spring circle game. Original G minor, 4/4 - moved down a minor seventh to A minor.
  //   Source: https://nashe.com.ua/song/12974/notes (score)
  //   Public domain: Traditional Ukrainian веснянка / children's ring game.
  //   Confidence: medium (one notated source found; no second notation to compare).
  {
    id: 'podolianochka',
    country: 'ua',
    themes: ['children', 'movement', 'celebrations'],
    title: 'Подоляночка',
    titleEn: 'Podolianochka (Spring Ring Game)',
    emoji: '💃',
    level: 'medium',
    bpm: 96,
    beatsPerBar: 4,
    melody: `A3:0.5 C4:0.5 E4 E4 E4 | D4:0.5 E4:0.5 F4 E4 E4 | A3:0.5 C4:0.5 E4 E4 E4 | D4:0.5 E4:0.5 F4 E4 E4 |
             D4 C4:0.5 B3:0.5 A3 C4 | D4 C4:0.5 B3:0.5 A3 C4 | D4:0.5 D4:0.5 C4:0.5 B3:0.5 A3 C4 |
             D4:0.5 D4:0.5 C4:0.5 B3:0.5 A3 C4 | D4:0.5 D4:0.5 C4:0.5 B3:0.5 A3 A3`,
    chords: 'Am Dm.Am Am Dm.Am G.Am G.Am G.Am G.Am G.Am',
  },
  // А ми просо сіяли — Spring game song. Original G minor, 4/4 - moved down a minor seventh to A minor.
  //   Source: https://commons.wikimedia.org/wiki/File:А_ми_просо_сіяли.GIF (score, PD-UA-exempt)
  //   Source: https://commons.wikimedia.org/wiki/File:A_my_proso_seyali.mid (MIDI, F# minor, CC0 setting by P. Gerloff)
  //   Public domain: Traditional Ukrainian spring (веснянка) game song.
  //   Confidence: high - the MIDI melody voice matches the score note for note (12 bars).
  //   nashe.com.ua/song/12971 has a different 2/4 variant, not used.
  {
    id: 'a-my-proso-siialy',
    country: 'ua',
    themes: ['celebrations', 'movement', 'children'],
    title: 'А ми просо сіяли',
    titleEn: 'We Have Sown the Millet',
    emoji: '🌾',
    level: 'easy',
    bpm: 132,
    beatsPerBar: 4,
    melody: `A3 E4 C4 E4 | F4:2 E4 D4 | C4 D4 E4:2 | A3 E4 C4 E4 | F4:2 E4 D4 | A3 A3 A3 R:1 |
             A3 C4 A3 C4 | D4:2 C4 B3 | A3 B3 C4:2 | A3 C4 A3 C4 | D4:2 C4 B3 | A3 A3 A3 R:1`,
    chords: 'Am Dm.Am C Am Dm.Am Am Am Dm.E Am Am Dm.E Am',
  },
  // А вже весна — Spring song. Original D major, 3/4 - moved down a tone to C major. Ends on the dominant, as printed.
  //   Source: https://commons.wikimedia.org/wiki/File:А_вже_весна.GIF (score, PD-UA-exempt)
  //   Source: https://nashe.com.ua/song/12966/notes (score)
  //   Public domain: Traditional Ukrainian веснянка.
  //   Confidence: high. Both agree; in bar 5 Commons dots the first eighth (D. C#16), nashe has even eighths (used here).
  {
    id: 'a-vzhe-vesna',
    country: 'ua',
    themes: ['celebrations'],
    title: 'А вже весна',
    titleEn: 'Spring Is Here Already',
    emoji: '🌷',
    level: 'medium',
    bpm: 108,
    beatsPerBar: 3,
    melody: `G4 C5 G4:0.5 G4:0.5 | A4 G4:0.5 F4:0.5 E4:0.5 D4:0.5 |
             C4:0.5 E4:0.5 D4:0.5 E4:0.5 G4:0.25 F4:0.25 E4:0.25 D4:0.25 |
             C4:0.5 E4:0.5 D4:0.5 E4:0.5 G4:0.25 F4:0.25 E4:0.25 D4:0.25 |
             G4 C5:0.5 B4:0.5 A4:0.5 B4:0.5 | A4 G4 R:1`,
    chords: 'C F.G C.G C.G C.G G',
  },
  // Ой весна, весна, що ти принесла — Spring song. Original A minor, 3/4 - no transposition.
  //   Source: https://nashe.com.ua/song/15870/notes (score)
  //   Public domain: Traditional Ukrainian веснянка.
  //   Confidence: medium (one notated source; the grace note in bar 1 is left out).
  {
    id: 'oi-vesna-vesna',
    country: 'ua',
    themes: ['celebrations'],
    title: 'Ой весна, весна',
    titleEn: 'Oh Spring, Spring',
    emoji: '🌱',
    level: 'easy',
    bpm: 76,
    beatsPerBar: 3,
    melody: `C4:0.5 E4:0.5 E4:0.5 E4:0.5 D4 | E4:0.5 E4:0.25 D4:0.25 C4:0.5 B3:0.5 A3 |
             C4:0.5 B3 C4:0.5 D4 | E4:0.5 E4:0.25 D4:0.25 C4:0.5 B3:0.5 A3`,
    chords: 'C Am G Am',
  },
  // Вийди, вийди, сонечко (Весняночка) — Spring call to the sun. Original F major, 4/4 - moved down a fourth to C major.
  //   Source: https://www.mamalisa.com/?t=es&p=1058 (MIDI showupsun.mid, text "Вийди, вийди, сонечко")
  //   Public domain: Traditional Ukrainian children's веснянка (заклички to the sun).
  //   Confidence: medium (MIDI only, converted mechanically; it fits the 7-syllable lines of the text).
  {
    id: 'vyidy-vyidy-sonechko',
    country: 'ua',
    themes: ['children', 'celebrations'],
    title: 'Вийди, вийди, сонечко',
    titleEn: 'Come Out, Little Sun',
    emoji: '☀️',
    level: 'easy',
    bpm: 112,
    beatsPerBar: 4,
    melody: `E4 E4 D4 F4 | E4:2 C4 C4 | E4 E4 D4 F4 | E4:2 C4 C4 |
             E4 E4 D4 F4 | E4:2 C4 C4 | D4 D4 G3 G3 | C4:2 C4 C4`,
    chords: 'C.G C C.G C C.G C G C',
  },
  // Іди, іди, дощику — Children's rain call. Original F major, 4/4 - moved down a fourth to C major.
  //   Source: https://nashe.com.ua/song/12982/notes (score)
  //   Public domain: Traditional Ukrainian children's закличка.
  //   Confidence: medium (one notated source).
  {
    id: 'idy-idy-doshchyku',
    country: 'ua',
    themes: ['children', 'everyday'],
    title: 'Іди, іди, дощику',
    titleEn: 'Come, Come, Little Rain',
    emoji: '🌧️',
    level: 'easy',
    bpm: 132,
    beatsPerBar: 4,
    melody: `G4:0.5 G4:0.5 G4:0.5 A4:0.5 G4 E4:0.5 C4:0.5 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 C4 G3:0.5 G3:0.5 |
             G4 G4 G4 G4 | E4 D4 C4 G3 | G4 G4 G4 G4 | D4:0.5 F4:0.5 E4:0.5 D4:0.5 C4 G3 |
             E4:0.5 E4:0.5 D4:0.5 D4:0.5 C4 G3:0.5 G3:0.5 | C4:0.5 C4:0.5 D4:0.5 D4:0.5 C4 C4:0.5 C4:0.5`,
    chords: 'C G.C C C C G.C G.C G.C',
  },
  // Ой ти, кицю, кицю — Lullaby / animal song. Original G minor (dorian start on D), 4/4 - up a tone to A minor.
  //   Repeats are not written out (18 bars as printed).
  //   Source: https://nashe.com.ua/song/8887/notes (score)
  //   Public domain: Traditional Ukrainian lullaby.
  //   Confidence: medium (one notated source).
  {
    id: 'oi-ty-kytsiu-kytsiu',
    country: 'ua',
    themes: ['lullaby', 'animals'],
    title: 'Ой ти, кицю, кицю',
    titleEn: 'Oh You Kitty, Kitty',
    emoji: '🐱',
    level: 'easy',
    bpm: 88,
    beatsPerBar: 4,
    melody: `E4 A4 B4 C5 | B4 C5:0.5 B4:0.5 A4:2 | E4 A4 B4 C5 | B4 C5:0.5 B4:0.5 A4:2 |
             E4 A4 B4 C5 | B4 C5:0.5 B4:0.5 A4 A4 | E4 A4 B4 C5 | B4 C5:0.5 B4:0.5 A4:2 |
             E4 A4 B4 C5 | B4 C5:0.5 B4:0.5 A4:2 | E4 A4 B4 C5 | B4 C5:0.5 B4:0.5 A4:2 |
             E4 A4 B4 C5 | B4 C5:0.5 B4:0.5 A4:2 | E4 A4 B4 C5 | B4 C5:0.5 B4:0.5 A4:2 |
             E4 A4 B4 C5 | B4 C5:0.5 B4:0.5 A4:2`,
    chords: 'Am Em.Am Am Em.Am Am Em.Am Am Em.Am Am Em.Am Am Em.Am Am Em.Am Am Em.Am Am Em.Am',
  },
  // Ой ну, коте, коточок — Lullaby. Original on G-A-B (no key signature), 6/8 - no transposition (counted in eighths).
  //   Source: https://nashe.com.ua/song/15453/notes (score)
  //   Public domain: Traditional Ukrainian lullaby.
  //   Confidence: medium (one notated source; repeats not written out).
  {
    id: 'oi-nu-kote-kotochok',
    country: 'ua',
    themes: ['lullaby', 'animals'],
    title: 'Ой ну, коте, коточок',
    titleEn: 'Hush, Little Tomcat',
    emoji: '😺',
    level: 'easy',
    bpm: 150, // counted in eighth notes (6/8)
    beatsPerBar: 6,
    melody: `G4:1 B4:2 A4:1 G4:2 | B4:1 A4:2 G4:2 R:1 | G4:1 B4:2 A4:1 G4:2 | B4:1 A4:2 G4:2 R:1 |
             G4:1 B4:2 A4:1 G4:2 | B4:1 A4:2 A4:1 A4:1 R:1 | G4:1 B4:2 A4:1 G4:2 | B4:1 A4:2 A4:1 A4:1 R:1`,
    chords: 'G G G G G Am G Am',
  },
  // А-а, люлі (налетіли гулі) — Lullaby. Original D dorian (no key signature, ends on D), 2/4 - no transposition.
  //   Source: https://nashe.com.ua/song/11409/notes (score)
  //   Public domain: Traditional Ukrainian lullaby.
  //   Confidence: medium (one full score; Commons "А люлі, люлі.GIF" has a related 4-bar tune on G-E-G-F-E-D).
  {
    id: 'a-a-liuli',
    country: 'ua',
    themes: ['lullaby', 'animals'],
    title: 'А-а, люлі, налетіли гулі',
    titleEn: 'Hush-a-bye, the Doves Have Come',
    emoji: '🕊️',
    level: 'medium',
    bpm: 80,
    beatsPerBar: 2,
    melody: `F4:0.5 D4:0.5 F4:0.5 D4:0.5 | G4 G4:0.25 F4:0.25 D4:0.5 | F4:0.5 F4:0.5 F4:0.5 F4:0.5 | G4 G4:0.5 R:0.5 |
             F4:0.5 F4:0.5 F4:0.5 E4:0.25 D4:0.25 | D4 G4 | F4:0.5 F4:0.5 F4:0.5 E4:0.25 D4:0.25 | D4 E4 |
             D4:0.5 F4:0.5 E4:0.5 D4:0.5 | F4:0.5 F4:0.5 F4 | D4:0.5 F4:0.5 E4:0.5 D4:0.5 | F4:0.5 F4:0.5 F4 |
             G4:0.5 G4:0.5 A4:0.5 D4:0.5 | F4:0.5 F4:0.5 F4 | E4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4:0.5 D4:0.5 D4:0.5 R:0.5 |
             G4:0.5 G4:0.5 G4:0.5 D4:0.5 | F4:0.5 F4:0.5 F4 | E4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4:0.5 D4:0.5 D4`,
    chords: 'Dm G.Dm F G F.Dm Dm.G F.Dm Dm.C Dm.C F Dm.C F C.Dm F C Dm C.Dm F C Dm',
  },
  // Люлі, люлі, Василечку — Lullaby. Original D dorian (no key signature, ends on D), 4/4 - no transposition.
  //   Source: https://nashe.com.ua/song/15449/notes (score)
  //   Public domain: Traditional Ukrainian lullaby.
  //   Confidence: medium (one notated source; the grace note in bars 2 and 6 is left out).
  {
    id: 'liuli-vasylechku',
    country: 'ua',
    themes: ['lullaby'],
    title: 'Люлі, люлі, Василечку',
    titleEn: 'Lullaby, Little Vasyl',
    emoji: '🌙',
    level: 'medium',
    bpm: 84,
    beatsPerBar: 4,
    melody: `F4 A4 G4 F4:0.5 E4:0.25 D4:0.25 | F4 E4 D4 D4 | F4 A4 G4 F4:0.5 E4:0.25 D4:0.25 | F4 G4:0.5 F4:0.25 E4:0.25 D4 D4:0.5 R:0.5 |
             F4 F4 G4 G4:0.5 F4:0.25 E4:0.25 | F4 E4 D4 D4 | A3 D4 E4 F4 | E4:0.5 D4:0.5 E4 D4 D4 |
             A3 D4 E4 F4 | E4:0.5 D4:0.5 E4 D4 D4:0.5 R:0.5 | G4 G4 G4 G4:0.5 F4:0.25 E4:0.25 |
             F4 G4 A4 A4:0.5 G4:0.25 F4:0.25 | F4 F4:0.5 E4:0.25 D4:0.25 G4 D4 | F4 E4 D4 D4:0.5 R:0.5`,
    chords: 'Dm C.Dm Dm C.Dm F.C C.Dm Dm C.Dm Dm C.Dm C F Dm.G C.Dm',
  },
  // Ой спи, дитя, без сповиття — Lullaby. Original C (no key signature), 2/4 with a 16th pickup - no transposition.
  //   Source: https://nashe.com.ua/song/15466/notes (score)
  //   Public domain: Traditional Ukrainian lullaby.
  //   Confidence: medium (one notated source).
  {
    id: 'oi-spy-dytia',
    country: 'ua',
    themes: ['lullaby'],
    title: 'Ой спи, дитя',
    titleEn: 'Oh Sleep, My Child',
    emoji: '👶',
    level: 'medium',
    bpm: 60,
    beatsPerBar: 2,
    pickup: 0.25,
    melody: `E4:0.25 |
             F4:0.75 G4:0.25 F4:0.75 E4:0.25 | E4:0.5 D4:0.25 C4:0.25 C4:0.75 E4:0.25 |
             F4:0.75 G4:0.25 F4:0.75 E4:0.25 | E4:0.5 D4:0.25 C4:0.25 C4:0.75 E4:0.25 |
             F4:0.75 G4:0.25 F4:0.75 E4:0.25 | E4:0.5 D4:0.25 C4:0.25 C4:0.75 C4:0.25 |
             D4:0.75 C4:0.25 D4:0.75 E4:0.25 | E4:0.5 D4:0.25 C4:0.25 C4:0.75 C4:0.25 |
             D4:0.75 C4:0.25 D4:0.75 E4:0.25 | E4:0.5 D4:0.25 C4:0.25 C4:0.75 C4:0.25 |
             B3:0.75 A3:0.25 C4:0.75 E4:0.25 | E4:0.5 D4:0.25 C4:0.25 C4:0.75`,
    chords: 'F C F C F C G.C C G.C C G.C C',
  },
  // Грицю, Грицю, до роботи — Humorous children's song. Original E-flat major, 2/4 - moved down a minor third to C major.
  //   Source: https://nashe.com.ua/song/5648/notes (score)
  //   Public domain: Traditional Ukrainian folk song.
  //   Confidence: medium (one notated source; the fermata in bar 6 is ignored).
  {
    id: 'hrytsiu-do-roboty',
    country: 'ua',
    themes: ['children', 'everyday'],
    title: 'Грицю, Грицю, до роботи',
    titleEn: 'Hryts, Hryts, Get to Work',
    emoji: '👢',
    level: 'easy',
    bpm: 132,
    beatsPerBar: 2,
    melody: `E4:0.5 G4:0.5 E4:0.5 G4:0.5 | F4:0.5 A4:0.5 A4:0.5 A4:0.5 | D4:0.5 E4:0.5 F4:0.5 F4:0.5 | E4:0.5 F4:0.5 G4:0.5 G4:0.5 |
             E4:0.5 G4:0.5 E4:0.5 G4:0.5 | F4:0.5 A4:0.5 D5:0.5 C5:0.5 | B4:0.5 A4:0.5 G4:0.5 F4:0.5 | E4:0.5 D4:0.5 C4:0.5 C4:0.5`,
    chords: 'C F Dm C C F G C',
  },
  // Ой за гаєм, гаєм — Folk song. Original C major, 2/4 - no transposition. Score and MIDI agree (MIDI writes out the repeat).
  //   Source: https://www.mamalisa.com/?t=es&p=7119 (score image + MIDI oy_za_haem_haem.mid)
  //   Public domain: Traditional Ukrainian folk song.
  //   Confidence: high for the notes (MIDI converted mechanically), single site.
  {
    id: 'oi-za-haiem-haiem',
    country: 'ua',
    themes: ['everyday'],
    title: 'Ой за гаєм, гаєм',
    titleEn: 'Beyond the Grove',
    emoji: '🌳',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `C4:0.5 D4:0.5 E4:0.5 D4:0.5 | G4 C5 | A4:0.5 A4:0.5 C5:0.5 A4:0.5 | G4 E4 |
             F4:0.5 F4:0.5 A4:0.5 F4:0.5 | E4:0.5 E4:0.5 G4:0.5 E4:0.5 | D4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 C4 |
             F4:0.5 F4:0.5 A4:0.5 F4:0.5 | E4:0.5 E4:0.5 G4:0.5 E4:0.5 | D4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 C4`,
    chords: 'C C F C F C G C F C G C',
  },
  // Ой сивая та і зозуленька — Щедрівка. Original G minor, 2/4 - up a tone to A minor (G# = raised leading tone).
  //   Source: https://nashe.com.ua/song/11052/notes (score)
  //   Source: https://commons.wikimedia.org/wiki/File:Ой_сивая_та_і_зозуленька.svg (score + MusicXML, typeset from the nashe score)
  //   Public domain: Traditional Ukrainian щедрівка.
  //   Confidence: medium-high (the two agree, but Commons was copied from nashe, so not independent).
  {
    id: 'oi-syvaia-zozulenka',
    country: 'ua',
    themes: ['christmas', 'animals'],
    title: 'Ой сивая та і зозуленька',
    titleEn: 'Oh, the Grey Little Cuckoo',
    emoji: '🐦',
    level: 'medium',
    bpm: 72,
    beatsPerBar: 2,
    melody: `A4:0.5 E5:0.5 E5:0.5 E5:0.5 | D5:0.25 C5:0.25 B4:0.25 A4:0.25 G#4:0.5 E4:0.5 |
             A4:0.75 B4:0.25 C5:0.5 B4:0.5 | A4:0.75 B4:0.25 C5:0.5 B4:0.5 | A4:0.75 B4:0.25 C5:0.5 B4:0.5 |
             A4:0.5 B4:0.5 A4:0.75 A4:0.25`,
    chords: 'Am Dm.E Am Am.E Am.E Am',
  },
  // Щедрик, щедрик, щедрівочка — Children's щедрівка (not Leontovych's tune). Original F major, 3/4 - down a fourth to C major.
  //   Source: https://nashe.com.ua/song/4754/notes (score)
  //   Public domain: Traditional Ukrainian щедрівка.
  //   Confidence: medium (one notated source; the final eighth is kept as printed).
  {
    id: 'shchedryk-shchedrivochka',
    country: 'ua',
    themes: ['christmas', 'children'],
    title: 'Щедрик, щедрик, щедрівочка',
    titleEn: 'Shchedryk, Little New Year Song',
    emoji: '🐦',
    level: 'medium',
    bpm: 80,
    beatsPerBar: 3,
    melody: `G3:0.5 E4:0.5 D4 D4:0.5 C4:0.5 | E4:0.5 F4:0.5 E4:0.5 D4:0.25 C4:0.25 D4 |
             F4:0.75 D4:0.25 E4:0.5 C4:0.5 D4:0.75 C4:0.25 | D4:0.5 E4:0.5 C4:1.5 C4:0.5`,
    chords: 'C G F.G C',
  },
  // Щедрик — Leontovych's soprano line (the famous "Carol of the Bells" tune built on the traditional 4-note щедрівка motif).
  //   Original G minor, 3/4 - moved down a minor seventh to A minor (the rising runs use F# and G#, as in G melodic minor).
  //   One pass through: 16 ostinato bars, 8 bars on the fifth, 4 + 4 bars, 4 ostinato bars, then the second ending.
  //   Source: https://www.mamalisa.com/?t=es&p=3301 (score image + MIDI shchedryk_mlw.mid, top voice)
  //   Source: https://commons.wikimedia.org/wiki/File:Щедрик.pdf (Leontovych, choral score)
  //   Public domain: Melody traditional; arrangement by Mykola Leontovych (died 1921).
  //   Confidence: high (MIDI top voice converted mechanically and matches the score).
  {
    id: 'shchedryk',
    country: 'ua',
    themes: ['christmas'],
    title: 'Щедрик',
    aka: ['Carol of the Bells'],
    titleEn: 'Shchedryk (Carol of the Bells)',
    emoji: '🔔',
    level: 'hard',
    bpm: 120,
    beatsPerBar: 3,
    melody: `C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 |
             C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 |
             C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 |
             C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 |
             E4 D4:0.5 E4:0.5 C4 | E4 D4:0.5 E4:0.5 C4 | E4 D4:0.5 E4:0.5 C4 | E4 D4:0.5 E4:0.5 C4 |
             E4 D4:0.5 E4:0.5 C4 | E4 D4:0.5 E4:0.5 C4 | E4 D4:0.5 E4:0.5 C4 | E4 D4:0.5 E4:0.5 C4 |
             A4 A4:0.5 A4:0.5 G4:0.5 F4:0.5 | E4 E4:0.5 E4:0.5 D4:0.5 C4:0.5 | D4 D4:0.5 D4:0.5 E4:0.5 D4:0.5 | A3 A3:0.5 A3:0.5 A3 |
             E3:0.5 F#3:0.5 G#3:0.5 A3:0.5 B3:0.5 C4:0.5 | D4:0.5 E4:0.5 D4 C4 |
             E3:0.5 F#3:0.5 G#3:0.5 A3:0.5 B3:0.5 C4:0.5 | D4:0.5 E4:0.5 D4 C4 |
             C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 | C4 B3:0.5 C4:0.5 A3 |
             A3:3 | A3:3 | A3:3 | E4 D4:0.5 E4:0.5 A3`,
    chords: `Am Am Am Am Am Am Am Am Am Am Am Am Am Am Am Am
             Am Am Am Am Am Am Am Am Dm Am Dm Am E Am E Am Am Am Am Am Am Am Am E.Am`,
  },
  // Добрий вечір тобі — Christmas carol (колядка). Original D minor / F, 2/4 - moved down a fourth (ends on C).
  //   Source: https://commons.wikimedia.org/wiki/File:Добрий_вечір_тобі.png (score, PD-UA-exempt; top voice)
  //   Source: https://www.mamalisa.com/?t=es&p=7278 (score image)
  //   Public domain: Traditional Ukrainian колядка.
  //   Confidence: high (both scores agree; the lower second voice and its C# are left out).
  {
    id: 'dobryi-vechir-tobi',
    country: 'ua',
    themes: ['christmas'],
    title: 'Добрий вечір тобі',
    titleEn: 'Good Evening to You, Master',
    emoji: '⭐',
    level: 'medium',
    bpm: 76,
    beatsPerBar: 2,
    melody: `A3:0.5 A3:0.5 G3:0.5 G3:0.5 | C4:0.5 B3:0.25 A3:0.25 G3 | D4:0.5 E4:0.5 F4:0.5 D4:0.5 | E4:0.5 D4:0.5 C4:0.5 B3:0.5 |
             C4 D4 | E4:2 | D4:0.5 E4:0.5 F4:0.5 D4:0.5 | E4:0.5 D4:0.5 C4:0.5 B3:0.5 | C4 D4 | E4:2 | D4:0.5 C4:0.5 B3 | C4:2`,
    chords: 'Am.G C.G Dm Am.E Am.G C Dm Am.E Am.G C G C',
  },
  // Нова радість стала — Christmas carol (колядка). Original D minor, 3/4 - moved down a fourth to A minor.
  //   Source: https://nashe.com.ua/song/15799/notes (score, top voice)
  //   Cross-check: https://nashe.com.ua/song/11015/notes and https://commons.wikimedia.org/wiki/File:Nova_radist_stala.mid
  //   (CC0 setting by P. Gerloff) both open with the same "D D D F E D | C# D" phrase; the second line varies between versions.
  //   Mama Lisa's version (p=7279) differs and was not used.
  //   Public domain: Traditional Ukrainian колядка.
  //   Confidence: medium (many regional variants; fermatas ignored).
  {
    id: 'nova-radist-stala',
    country: 'ua',
    themes: ['christmas'],
    title: 'Нова радість стала',
    titleEn: 'A New Joy Has Come',
    emoji: '🌟',
    level: 'medium',
    bpm: 72,
    beatsPerBar: 3,
    melody: `A3:0.5 A3:0.5 A3:0.5 C4:0.5 B3:0.5 A3:0.5 | G#3 A3:2 | E4:0.5 E4:0.5 E4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4 E4:2 |
             E4:0.5 D4:0.5 E4 D4:0.5 F4:0.5 | E4:0.25 D4:0.25 C4:0.25 B3:0.25 C4:0.5 D4:0.25 C4:0.25 B3 |
             E4:0.5 E4:0.5 F4:0.5 E4:0.5 D4:0.5 C4:0.5 | B3 A3:2`,
    chords: 'Am E.Am Am G.C C.G Am.E Am.Dm E.Am',
  },
  // Бог ся рождає — Christmas carol (колядка). Original F major, 2/2 (written here in 4 quarter beats) - down a fourth to C major.
  //   Top voice only; the repeats of bars 1-4 and 5-8 are not written out.
  //   Source: https://commons.wikimedia.org/wiki/File:Бог_ся_рождає-1.svg (score)
  //   Source: https://nashe.com.ua/song/4785/notes (score)
  //   Public domain: Traditional Ukrainian (Galician) колядка, 18th-19th c.
  //   Confidence: high (both scores agree; bars 10 and 12 have the chromatic B natural -> F# after transposition).
  {
    id: 'boh-sia-rozhdaie',
    country: 'ua',
    themes: ['christmas'],
    title: 'Бог ся рождає',
    titleEn: 'God Is Born',
    emoji: '👼',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 4,
    melody: `G4:2 G4 A4:0.5 G4:0.5 | F4:2 G4:2 | E4 E4 G4 E4 | D4:2 D4 R:1 |
             E4 E4 E4 E4 | F4 F4 F4 R:1 | D4 D4 D4 D4 | E4 E4 E4 R:1 |
             E4 F4 G4 A4 | G4 F#4 G4 F4 | E4 F4 G4 A4 | G4 F#4 G4 F4 |
             E4:2 F4:2 | E4:2 F4:2 | G4 A4 G4 F4 | E4:3 R:1`,
    chords: 'C G.C C G C G G C C.F G C.F G C.G C.G C.G C',
  },
  // Го-го-го, коза — New Year (Маланка) goat-procession song. Original C major, 3/4 - no transposition. Ends on D (repeat).
  //   Source: https://commons.wikimedia.org/wiki/File:Го-го-го_коза.GIF (score, PD-UA-exempt)
  //   Public domain: Traditional Ukrainian New Year song (водіння кози).
  //   Confidence: medium (one notated source).
  {
    id: 'ho-ho-ho-koza',
    country: 'ua',
    themes: ['christmas', 'animals', 'movement'],
    title: 'Го-го-го, коза',
    titleEn: 'Go-Go-Go, Goat',
    emoji: '🐐',
    level: 'easy',
    bpm: 132,
    beatsPerBar: 3,
    melody: `G4:0.5 G4:0.5 G4:0.5 F4:0.5 E4 | G4:0.5 G4:0.5 G4:0.5 F4:0.5 E4 | G4:0.5 G4:0.5 G4:0.5 F4:0.5 E4 |
             C4:0.5 C4:0.5 F4:0.5 E4:0.5 D4 | C4:0.5 C4:0.5 F4:0.5 E4:0.5 D4 | C4:0.5 C4:0.5 F4:0.5 E4:0.5 D4 |
             C4:0.5 C4:0.5 F4:0.5 E4:0.5 D4`,
    chords: 'C C C C.G C.G C.G G',
  },
];
