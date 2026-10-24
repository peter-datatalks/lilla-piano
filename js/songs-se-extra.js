// More Swedish children's songs. Same format as songs.js:
// { id, country: 'se', themes, title, titleEn, emoji, level, bpm, beatsPerBar, pickup?, melody, chords }.
// Only traditional / public-domain melodies, each with a source comment.
// Most are Alice Tegnér's own melodies (1856–1943, public domain since 2014), read from the first
// editions of "Sjung med oss, Mamma!" (1892–1899) scanned on Wikimedia Commons. Melodies are
// transposed to C major so they stay on the white keys where the tune allows.

const C = 'https://commons.wikimedia.org/wiki/File:';

export const SONGS_SE_EXTRA = [
  // Ro, ro, barnet ("Vaggvisa") — Alice Tegnér, Sjung med oss, Mamma! I (1892) no. 15, p. 24–25.
  //   Source: C + 'Sjung_med_oss_Mamma_1_Alice_Tegner_1892.pdf' (page 24–25)
  //   Original D major, 2/4 — moved down a tone to C. Public domain: Tegnér d. 1943.
  {
    id: 'ro-ro-barnet',
    country: 'se',
    themes: ['lullaby', 'animals'],
    title: 'Ro, ro, barnet',
    titleEn: 'Hush, Hush, Little Child',
    emoji: '🐱',
    level: 'easy',
    bpm: 72,
    beatsPerBar: 2,
    melody: `G4 A4 | G4 E4 | G4:0.5 G4:0.5 A4:0.5 A4:0.25 A4:0.25 | G4 E4 |
             F4 F4 | E4:0.5 G4:0.5 G4 | D4:0.5 E4:0.5 F4:0.5 E4:0.25 D4:0.25 | C4:0.5 C4:0.5 C4`,
    chords: 'C C C C G C G C',
  },
  // Rida ranka — Alice Tegnér, Sjung med oss, Mamma! II (1893) no. 1, p. 3. First section only
  // ("Rida, rida ranka … till en liten pi'a"); the print continues with further verses on pp. 4–7.
  //   Source: C + 'Sjung_med_oss_Mamma_2_Alice_Tegner_1893.pdf' (page 3)
  //   Original G major, 4/4 — moved down a fifth to C. Public domain: Tegnér d. 1943 (rhyme traditional).
  {
    id: 'rida-ranka',
    country: 'se',
    themes: ['movement', 'animals'],
    title: 'Rida, rida ranka',
    titleEn: 'Ride, Ride a Cock-Horse',
    emoji: '🐴',
    level: 'easy',
    bpm: 112,
    beatsPerBar: 4,
    melody: `G3 A3:0.5 B3:0.5 G3 A3:0.5 B3:0.5 | C4:2 C4 R:1 | C4 D4:0.5 E4:0.5 C4 E4:0.5 F4:0.5 | G4:2 G4 R:1 |
             A4:2 A4 A4 | G4:2 G4 R:1 | G3 B3 D4 E4 | C4:2 C4:2 |
             G3 A3:0.5 B3:0.5 G3 A3:0.5 B3:0.5 | C4:2 C4 R:1`,
    chords: 'C C Am G F C G C C C',
  },
  // Baka kaka — Alice Tegnér, Sjung med oss, Mamma! II (1893) no. 3, p. 9.
  //   Source: C + 'Sjung_med_oss_Mamma_2_Alice_Tegner_1893.pdf' (page 9)
  //   Original C major, 4/4 — no transposition. Public domain: Tegnér d. 1943.
  {
    id: 'baka-kaka',
    country: 'se',
    themes: ['everyday', 'children'],
    title: 'Baka, baka kaka',
    titleEn: 'Bake, Bake a Cake',
    emoji: '🎂',
    level: 'easy',
    bpm: 108,
    beatsPerBar: 4,
    melody: `E4 E4 E4 E4 | F4:2 F4:2 | G4 G4:0.5 G4:0.5 G4 G4 | A4:2 A4:2 |
             C5 C5 B4 A4 | B4 C5 D5:2 | A4 A4 G4 F4 | E4 F4 G4:2 |
             E4 E4 E4 G4 | F4:2 F4:2 | G4 A4 B4 D5 | C5:2 C5 R:1`,
    chords: 'C G C F Dm G F C C Dm G C',
  },
  // Katten och svansen — Alice Tegnér, Sjung med oss, Mamma! II (1893) no. 5, p. 12–13.
  //   Source: C + 'Sjung_med_oss_Mamma_2_Alice_Tegner_1893.pdf' (pages 12–13)
  //   Original G major, 3/4 — moved down a fifth to C. Public domain: Tegnér d. 1943.
  {
    id: 'katten-och-svansen',
    country: 'se',
    themes: ['animals', 'children'],
    title: 'Katten och svansen',
    titleEn: 'The Cat and Its Tail',
    emoji: '🐈',
    level: 'medium',
    bpm: 132,
    beatsPerBar: 3,
    melody: `G3:0.5 G3:0.5 G3 G3:0.5 G3:0.5 | A3:0.5 A3:0.5 A3 R:1 | B3 B3:0.5 B3:0.5 C4:0.5 D4:0.5 | E4 E4 R:1 |
             G4 G3:0.5 G3:0.5 G3:0.5 G3:0.5 | A3 A3:0.5 A3:0.5 A3 | F4 B3:0.5 B3:0.5 B3:0.5 B3:0.5 | C4 C4 R:1 |
             G4:0.5 F4:0.5 E4 R:1 | E4:0.5 D4:0.5 C4 R:1 | C4:0.5 B3:0.5 A3 A3 | A3:0.5 G3:0.5 F3 R:1 |
             F3:0.5 A3:0.5 G3 G3:0.5 G3:0.5 | G3:0.5 C4:0.5 E4 R:1 | G4:0.5 F4:0.5 D4 B3:0.5 A3:0.5 | G3:0.5 C4:0.5 C4 R:1`,
    chords: 'C F G C C F G C C Am Am F G C G C',
  },
  // Blåsippor — Alice Tegnér, Sjung med oss, Mamma! III (1895) no. 10, p. 16 (words: Alfaro).
  //   Source: C + '10_Blåsippor_Sjung_med_oss_Mamma_3.pdf'
  //   Original E-flat major, 4/4 — moved down to C (keeps Tegnér's raised notes F# and G#).
  //   Public domain: Tegnér d. 1943.
  {
    id: 'blasippor',
    country: 'se',
    themes: ['celebrations', 'children'],
    title: 'Blåsippor',
    titleEn: 'Blue Anemones',
    emoji: '🌸',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 4,
    melody: `G4 F#4:0.5 A4:0.5 G4 E4 | D4 D4:0.5 D4:0.5 D4 R:1 | F4 E4:0.5 G4:0.5 F4 C4:0.5 D4:0.5 | E4 E4:0.5 D4:0.5 E4 R:1 |
             E4 D4:0.5 C4:0.5 A4 G#4:0.5 A4:0.5 | C5 B4:0.5 A4:0.5 G4 R:1 | A4 G4:0.5 F4:0.5 A3 B3:0.5 B3:0.5 | C4 C4:0.5 C4:0.5 C4 R:1`,
    chords: 'C Dm G C C.Am F.G F.G C',
  },
  // Ute blåser sommarvind — Alice Tegnér, Sjung med oss, Mamma! IV (1897) no. 9, p. 14–15
  // (words after Samuel Hedborn, d. 1849). The closing piano bars are left out.
  //   Source: C + 'Sjung_med_oss_Mamma_4_Alice_Tegner_1897.pdf' (pages 14–15)
  //   Original C major, 4/4 — no transposition (one B-flat in bar 7). Public domain: Tegnér d. 1943.
  {
    id: 'ute-blaser-sommarvind',
    country: 'se',
    themes: ['lullaby', 'celebrations'],
    title: 'Ute blåser sommarvind',
    titleEn: 'The Summer Wind Blows',
    emoji: '🌬️',
    level: 'medium',
    bpm: 96,
    beatsPerBar: 4,
    melody: `E4:1.5 G4:0.5 E4 G4 | A4 D4 D4:2 | E4:1.5 G4:0.5 E4 G4 | B4 E4 E4:2 |
             A4:1.5 G4:0.5 A4 C5:0.5 E5:0.5 | D5:1.5 B4:0.5 G4 R:1 | G4:1.5 F4:0.5 E4:0.5 G4:0.5 A#4:0.5 D5:0.5 | C5:1.5 A4:0.5 F4 R:1 |
             F4:1.5 G4:0.5 F4 D4 | G4:2 C5 R:1 | D4 G4 E4:1.5 D4:0.5 | C4:2 C4 R:1`,
    chords: 'C Dm C G.C F G C F Dm C G C',
  },
  // Gäspus, Nickus och Jon Blund — Alice Tegnér, Sjung med oss, Mamma! V (1899) no. 6, p. 10–11.
  //   Source: C + 'Sjung_med_oss_Mamma_5_Alice_Tegner_1899.pdf' (pages 10–11)
  //   Original C major, 4/4 with a one-beat pickup — no transposition. Public domain: Tegnér d. 1943.
  {
    id: 'gaspus-nickus-jon-blund',
    country: 'se',
    themes: ['lullaby'],
    title: 'Gäspus, Nickus och Jon Blund',
    titleEn: 'Yawny, Nodder and the Sandman',
    emoji: '😴',
    level: 'medium',
    bpm: 80,
    beatsPerBar: 4,
    pickup: 1,
    melody: `C4:0.5 D4:0.5 |
             E4 E4 E4 G4 | F4:1.5 D4:0.5 E4 C4:0.5 D4:0.5 | E4 E4 E4 G4 | F4:1.5 D4:0.5 E4 R:0.5 G4:0.5 |
             C5:1.5 D5:0.5 C5 G4 | F4:2 E4 C4:0.5 D4:0.5 | E4 E4 A4 A4 | D4:1.5 E4:0.5 D4 R:0.5 D4:0.5 |
             E4 E4 B4 A4 | G4:1.5 A4:0.5 G4 G4 | D4:1.5 F4:0.5 E4 G4 | D4:1.5 F4:0.5 E4 R:0.5 G4:0.5 |
             C5:1.5 A4:0.5 G4 E4 | D4:2 C4`,
    chords: 'C G.C C G.C C G.C Am G C.Em G G.C G.C C G.C',
  },
  // Kring julgranen ("Nu så är det jul igen") — Alice Tegnér, Sjung med oss, Mamma! V (1899) no. 2, p. 6.
  //   Source: C + 'Sjung_med_oss_Mamma_5_Alice_Tegner_1899.pdf' (page 6)
  //   Original G major, 3/4 ("i hambotakt") — moved down a fifth to C. Public domain: Tegnér d. 1943.
  {
    id: 'kring-julgranen',
    country: 'se',
    themes: ['christmas', 'movement'],
    title: 'Kring julgranen',
    titleEn: 'Around the Christmas Tree',
    emoji: '🎄',
    level: 'medium',
    bpm: 120,
    beatsPerBar: 3,
    melody: `E4:1.5 D4:0.5 C4:0.5 E4:0.5 | G3 G3 G3 | A3 A3 C4 | G3:2 G3 |
             D4:1.5 E4:0.5 D4:0.5 E4:0.5 | D4 G4 B3 | A3 D4 D4 | G3:2 R:1 |
             A3:1.5 G3:0.5 F3:0.5 A3:0.5 | G3 C4 E4 | D4 G3 G3 | G4:2 G4 |
             D4:1.5 C4:0.5 B3:0.5 D4:0.5 | G3 C4 E4 | D4 G3 G4 | C4:2 R:1`,
    chords: 'C C F C G G D G G C F C G C F.G C',
  },
  // Den blomstertid nu kommer — Swedish hymn tune (1697 hymnal), here as printed by Alice Tegnér in
  // Sjung med oss, Mamma! III (1895) p. 34, with the repeat written out.
  //   Source: C + 'Den_blomstertid_nu_kommer_Sjung_med_oss_Mamma_3.pdf'
  //   Cross-check: C + 'Den_blomstertid_nu_kommer.png' (hymnal, 4/4, same pitches)
  //   Original F major, 2/4 with a half-beat pickup — moved down a fourth to C. Public domain: 1697.
  {
    id: 'den-blomstertid',
    country: 'se',
    themes: ['celebrations', 'midsummer'],
    title: 'Den blomstertid nu kommer',
    titleEn: 'The Time of Flowers Is Coming',
    emoji: '🌼',
    level: 'medium',
    bpm: 80,
    beatsPerBar: 2,
    pickup: 0.5,
    melody: `E4:0.5 |
             E4:0.5 D4:0.5 C4:0.5 B3:0.5 | C4 C4:0.5 E4:0.5 | G4:0.5 G4:0.5 F4:0.75 E4:0.25 | E4:1.5 E4:0.5 |
             E4:0.5 D4:0.5 C4:0.5 B3:0.5 | C4 C4:0.5 E4:0.5 | G4:0.5 G4:0.5 F4:0.75 E4:0.25 | E4:1.5 G4:0.5 |
             A4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4 D4:0.5 E4:0.5 | F4:0.5 F4:0.5 E4:0.75 D4:0.25 | D4:1.5 D4:0.5 |
             E4:0.5 D4:0.5 C4:0.5 B3:0.5 | A3 A3:0.5 G3:0.5 | A3:0.5 C4:0.5 C4:0.75 B3:0.25 | C4:1.5`,
    chords: 'C.G C C.G C C.G C C.G C F.C G F.G G C.G F.C F.G C',
  },
  // Ja, må han leva — traditional Swedish birthday song (tune known from the 18th century).
  //   Source: C + 'Ja_må_han_leva.png' (version A, the one sung today; CC0 engraving)
  //   Original E-flat major, 4/4 — moved down to C. Public domain: traditional.
  {
    id: 'ja-ma-han-leva',
    country: 'se',
    themes: ['celebrations'],
    title: 'Ja, må han leva',
    titleEn: 'Yes, May He Live',
    emoji: '🎉',
    level: 'medium',
    bpm: 108,
    beatsPerBar: 4,
    melody: `C4 C4:0.75 C4:0.25 C4 G3 | E4 E4:0.75 E4:0.25 E4 C4 | G4 G4:0.75 G4:0.25 A4:0.5 G4:0.5 F4:0.5 E4:0.5 | E4 D4:0.75 D4:0.25 D4 R:1 |
             F4 F4:0.75 E4:0.25 D4 D4 | E4 E4:0.75 D4:0.25 C4 C4 | D4 D4:0.75 D4:0.25 C4:0.5 B3:0.5 A3:0.5 B3:0.5 | C4 E4:0.75 G4:0.25 C4:2`,
    chords: 'C C C G G C G C',
  },
  // Alla fåglar kommit re'n — Swedish version of "Alle Vögel sind schon da"; the tune is an
  // 18th-century German folk melody (composer unknown, first printed with these words in 1844).
  //   Source: https://de.wikipedia.org/wiki/Alle_Vögel_sind_schon_da (LilyPond score, converted by script)
  //   Original D major, 4/4 — moved down a tone to C. Public domain: traditional.
  {
    id: 'alla-faglar',
    country: 'se',
    themes: ['animals', 'celebrations'],
    title: "Alla fåglar kommit re'n",
    titleEn: 'All the Birds Are Back',
    emoji: '🐦',
    level: 'easy',
    bpm: 112,
    beatsPerBar: 4,
    melody: `C4:1.5 E4:0.5 G4 C5 | A4 C5:0.5 A4:0.5 G4:2 | F4:1.5 G4:0.5 E4 C4 | D4:2 C4 R:1 |
             G4 G4 F4 F4 | E4 G4:0.5 E4:0.5 D4:2 | G4 G4 F4 F4 | E4 G4:0.5 E4:0.5 D4:2 |
             C4:1.5 E4:0.5 G4 C5 | A4 C5:0.5 A4:0.5 G4:2 | F4:1.5 G4:0.5 E4 C4 | D4:2 C4 R:1`,
    chords: 'C F.C G.C G.C C.G C.G C.G C.G C F.C G.C G.C',
  },
  // Så går vi runt om ett enebärssnår — Swedish ring dance to the traditional tune of
  // "Here We Go Round the Mulberry Bush".
  //   Source: https://en.wikipedia.org/wiki/Here_We_Go_Round_the_Mulberry_Bush (LilyPond score)
  //   Original G major, 6/8 — moved down a fifth to C; counted in eighths. Public domain: traditional.
  {
    id: 'enebarssnar',
    country: 'se',
    themes: ['movement', 'christmas'],
    title: 'Så går vi runt om ett enebärssnår',
    titleEn: 'Here We Go Round the Juniper Bush',
    emoji: '🌲',
    level: 'easy',
    bpm: 200, // eighth notes (6/8)
    beatsPerBar: 6,
    melody: `C4 C4 C4 C4:2 E4 | G4:2 E4 C4:2 C4 | D4:2 D4 D4:2 C4 | B3:2 A3 G3:3 |
             C4 C4 C4 C4:2 E4 | G4:2 E4 C4:2 C4 | D4:2 D4 G3:2 G3 | C4:3 C4:3`,
    chords: 'C C G G C C G C',
  },
];
