// Hungarian folk and children's songs. Same format as the Swedish songs in songs.js:
// { id, country: 'hu', themes, title (Hungarian), titleEn, emoji, level, bpm, beatsPerBar,
//   pickup?, melody, chords }. Only traditional / public-domain melodies, each with a source comment.
// Melodies were converted mechanically from the LilyPond source of the scores (no hand copying),
// then transposed to C major / A minor (or G mixolydian), so every tune stays on the white keys.
// Kodály and Bartók arrangements are NOT used, only the traditional tunes they collected.

export const SONGS_HU = [
  // Boci, boci tarka — Original C major, 2/4 - no transposition. All three sources agree note for note.
  //   Source: https://hu.wikipedia.org/wiki/Boci,_boci_tarka (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=BociBociTarka (LilyPond)
  //   Source: https://www.mamalisa.com/?t=es&p=2952 (MIDI)
  //   Public domain: Anonymous children's song of unknown (said to be Swabian/German) origin; no known composer.
  {
    id: 'boci-boci-tarka',
    country: 'hu',
    themes: ['children'],
    title: 'Boci, boci tarka',
    titleEn: 'Spotted Little Calf',
    emoji: '🐄',
    level: 'easy',
    bpm: 104,
    beatsPerBar: 2,
    melody: `C4:0.5 E4:0.5 C4:0.5 E4:0.5 | G4 G4 | C4:0.5 E4:0.5 C4:0.5 E4:0.5 | G4 G4 |
             C5:0.5 B4:0.5 A4:0.5 G4:0.5 | F4 A4 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 C4`,
    chords: 'C C C C C F G C',
  },
  // Csíp, csíp, csóka — Original C (so-la-mi pentatonic), 2/4 - no transposition. Both sources agree.
  //   Source: https://hu.wikipedia.org/wiki/Csíp,_csíp,_csóka (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=CsipCsipCsoka (LilyPond)
  //   Public domain: Traditional Hungarian children's game song.
  {
    id: 'csip-csip-csoka',
    country: 'hu',
    themes: ['children'],
    title: 'Csíp, csíp, csóka',
    titleEn: 'Pinch, Pinch, Jackdaw',
    emoji: '🐦',
    level: 'easy',
    bpm: 108,
    beatsPerBar: 2,
    melody: `G4 A4 | G4 E4 | G4 A4 | G4 E4 |
             G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 G4:0.5 E4:0.5 C4:0.5 | G4:0.5 G4:0.5 E4 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 |
             G4 E4 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 E4`,
    chords: 'C C C C C C C C C C C',
  },
  // Süss fel, nap! — Original C, 2/4 - no transposition. dalok.theisz.hu (SussFelNap) has a different, flatter variant; this follows Wikipedia.
  //   Source: https://hu.wikipedia.org/wiki/Süss_fel,_nap! (LilyPond score)
  //   Public domain: Traditional Hungarian children's song.
  {
    id: 'suss-fel-nap',
    country: 'hu',
    themes: ['children'],
    title: 'Süss fel, nap!',
    titleEn: 'Shine Out, Sun!',
    emoji: '☀️',
    level: 'easy',
    bpm: 96,
    beatsPerBar: 2,
    melody: `G4 A4 | G4 R:1 | G4 A4 | G4 R:1 |
             G4:0.5 A4:0.5 G4:0.5 F4:0.5 | E4:0.5 D4:0.5 E4:0.5 F4:0.5 | E4 D4 | C4 R:1`,
    chords: 'C C C C C C C.G C',
  },
  // Erdő, erdő, erdő — Original D mixolydian, 4/4 - moved down a fifth to G mixolydian (white keys only, ends on G). Mama Lisa's MIDI has the same pitches with a few simplified rhythms.
  //   Source: https://hu.wikipedia.org/wiki/Erdő,_erdő,_erdő (LilyPond score, Bartók's 1914 Jobbágytelke collection)
  //   Source: https://www.mamalisa.com/?t=es&p=6690 (MIDI)
  //   Public domain: Traditional folk song collected by Bartók in 1914 (the tune, not his arrangement).
  {
    id: 'erdo-erdo-erdo',
    country: 'hu',
    themes: ['children'],
    title: 'Erdő, erdő, erdő',
    titleEn: 'Forest, Forest, Forest',
    emoji: '🌲',
    level: 'hard',
    bpm: 112,
    beatsPerBar: 4,
    melody: `G3 C4 B3 C4 | D4:2 G4:2 |
             F4:0.5 E4:0.5 D4:0.5 E4:0.5 D4:0.5 C4:1.5 | G3:2 G3 R:1 |
             G3:0.5 C4:1.5 B3:0.5 C4:1.5 | D4:2 G4:2 |
             F4:0.5 E4:0.5 D4:0.5 E4:0.5 D4:0.5 C4:1.5 | G3:2 G3 R:1 |
             G4 G4 A4 F4 | E4:0.5 D4:0.5 E4:0.5 F4:0.5 A4 G4 |
             C4:0.5 C4:1.5 D4:0.5 D4:1.5 | E4:0.5 D4:0.5 C4:0.5 B3:0.5 A3 G3 |
             G3 C4 B3:0.5 C4:1.5 | D4:2 G4:2 |
             F4:0.5 E4:0.5 D4:0.5 E4:0.5 D4:0.5 C4:1.5 | G3:2 G3 R:1`,
    chords: 'G G F.C G G G F.C G G.F C F.G C.G G G F.C G',
  },
  // Lánc, lánc, eszterlánc — Original C, 2/4 - no transposition. Uses the second (best-known) Wikipedia variant; Mama Lisa's MIDI matches but drops one repeated "Marika" bar.
  //   Source: https://hu.wikipedia.org/wiki/Lánc,_lánc,_eszterlánc ("Másik változat" LilyPond score, MNT I. 298)
  //   Source: https://www.mamalisa.com/?t=es&p=336 (MIDI)
  //   Public domain: Traditional children's game song (text printed 1792, in Kiss Áron's 1891 collection).
  {
    id: 'lanc-lanc-eszterlanc',
    country: 'hu',
    themes: ['children'],
    title: 'Lánc, lánc, eszterlánc',
    titleEn: 'Chain, Chain, Daisy Chain',
    emoji: '🔗',
    level: 'medium',
    bpm: 112,
    beatsPerBar: 2,
    melody: `G4 A4 | G4:0.5 G4:0.5 E4 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 E4:0.5 R:0.5 |
             G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | E4:0.5 D4:0.5 E4:0.5 D4:0.5 | C4 C4:0.5 R:0.5 |
             G4 G4:0.5 G4:0.5 | G4:0.5 C5:0.5 G4 | G4:0.5 C5:0.5 G4 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 |
             C4:0.5 C5:0.5 G4 | G4:0.5 C5:0.5 G4 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 C4:0.5 R:0.5`,
    chords: 'C C C C C G G C C C C G C C G C',
  },
  // Ég a gyertya, ég — Original C, notated 4/4 in eighths - written here as 2/4. Mama Lisa's MIDI is the same tune a tone higher.
  //   Source: https://hu.wikipedia.org/wiki/Ég_a_gyertya,_ég (LilyPond score)
  //   Source: https://www.mamalisa.com/?t=es&p=329 (MIDI, in D)
  //   Public domain: Traditional Hungarian circle-game song.
  {
    id: 'eg-a-gyertya',
    country: 'hu',
    themes: ['children'],
    title: 'Ég a gyertya, ég',
    titleEn: 'The Candle Is Burning',
    emoji: '🕯️',
    level: 'easy',
    bpm: 92,
    beatsPerBar: 2,
    melody: `G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 R:1 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 R:1 |
             G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4 R:1`,
    chords: 'C C C C C G C.G C',
  },
  // Tavaszi szél vizet áraszt — Original D minor (no B-flat), 4/4 - moved up a fifth to A minor. Both sources agree.
  //   Source: https://hu.wikipedia.org/wiki/Tavaszi_szél_vizet_áraszt (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=TavasziSzel (LilyPond)
  //   Public domain: Traditional Hungarian folk song.
  {
    id: 'tavaszi-szel',
    country: 'hu',
    themes: ['children'],
    title: 'Tavaszi szél vizet áraszt',
    titleEn: 'The Spring Wind Floods the Waters',
    emoji: '🌬️',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 4,
    melody: `C5 D5 E5:0.5 E5:1.5 | D5 D5:0.5 E5:0.5 C5 D5 |
             E5:0.5 E5:1.5 D5 D5:0.5 E5:0.5 | C5:2 G4:2 |
             C5 D5 E5:0.5 E5:1.5 | D5 D5:0.5 E5:0.5 C5:0.5 B4:0.5 A4 |
             D5:0.5 D5 E5:0.5 C5 B4 | A4:2 A4:2`,
    chords: 'C G C.G C C Dm.Am G.Em Am',
  },
  // Kis kece lányom — Original D minor, 2/4 - moved up a fifth to A minor. Both sources agree.
  //   Source: https://hu.wikipedia.org/wiki/Kis_kece_lányom (LilyPond score; Bartók, Felsőireg 1907, MNT I. 1117)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=KisKeceLanyom (LilyPond)
  //   Public domain: Traditional folk song collected by Bartók in 1907 (the tune, not his or Kodály's arrangements).
  {
    id: 'kis-kece-lanyom',
    country: 'hu',
    themes: ['children'],
    title: 'Kis kece lányom',
    titleEn: 'My Little Graceful Girl',
    emoji: '👧',
    level: 'medium',
    bpm: 84,
    beatsPerBar: 2,
    melody: `A4 E5:0.5 E5:0.5 | E5 D5 | E5 C5:0.5 C5:0.5 | B4 A4 |
             A4 E5:0.5 E5:0.5 | E5 D5 | E5 C5:0.5 C5:0.5 | B4 A4 |
             A4:0.5 B4:0.5 C5:0.5 C5:0.5 | D5:0.5 C5:0.5 B4:0.5 C5:0.5 | B4 B4 | B4 B4 |
             A4:0.5 B4:0.5 C5:0.5 C5:0.5 | D5:0.5 C5:0.5 B4:0.5 C5:0.5 | A4 A4 | A4 A4`,
    chords: 'Am Am.G Am Em.Am Am Am.G Am Em.Am Am Dm Em Em Am Dm Am Am',
  },
  // Cifra palota — Original D minor, 2/4 - moved up a fifth to A minor. Both sources agree.
  //   Source: https://hu.wikipedia.org/wiki/Cifra_palota,_zöld_az_ablaka (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=CifraPalota (LilyPond)
  //   Public domain: Traditional Hungarian folk song.
  {
    id: 'cifra-palota',
    country: 'hu',
    themes: ['children'],
    title: 'Cifra palota',
    titleEn: 'Fancy Palace',
    emoji: '🏰',
    level: 'easy',
    bpm: 88,
    beatsPerBar: 2,
    melody: `E5 E5 | E5:0.5 C5:0.5 G4 | C5:0.5 C5:0.5 D5:0.5 D5:0.5 | E5 R:1 |
             E5:0.5 E5:0.5 E5:0.5 E5:0.5 | E5:0.5 C5:0.5 B4:0.5 A4:0.5 | C5:0.5 C5:0.5 B4:0.5 B4:0.5 | A4 R:1`,
    chords: 'Am C C.G Am Am Am F.E Am',
  },
  // Bújj, bújj, zöld ág — Original C, 2/4 - no transposition. Both sources agree.
  //   Source: https://hu.wikipedia.org/wiki/Bújj,_bújj,_zöld_ág (second LilyPond score, "rajta, rajta" variant)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=BujjBujjZoldAg (LilyPond)
  //   Public domain: Traditional Hungarian game song.
  {
    id: 'bujj-bujj-zold-ag',
    country: 'hu',
    themes: ['children'],
    title: 'Bújj, bújj, zöld ág',
    titleEn: 'Creep Through, Green Branch',
    emoji: '🌿',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 2,
    melody: `G4 A4 | G4 E4 | G4 G4:0.5 A4:0.5 | G4 E4 |
             G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | E4:0.5 D4:0.5 E4:0.5 D4:0.5 | C4 C4 |
             G4 A4 | G4 E4 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 E4 |
             G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 E4 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 C4`,
    chords: 'C C C C C G G C C C C C C C G C',
  },
  // Mennyből az angyal — Original F major, 2/4 - moved down a fourth to C. Both sources agree (theisz writes 4/4).
  //   Source: https://hu.wikipedia.org/wiki/Mennyből_az_angyal (LilyPond score; Vikár 1910, MNT II. 395)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=MennybolAzAngyal (LilyPond, Gimesi collection 1844)
  //   Public domain: Traditional church folk hymn; text attributed to Szentmihályi Mihály (18th c.).
  {
    id: 'mennybol-az-angyal',
    country: 'hu',
    themes: ['christmas'],
    title: 'Mennyből az angyal',
    titleEn: 'The Angel from Heaven',
    emoji: '👼',
    level: 'medium',
    bpm: 80,
    beatsPerBar: 2,
    melody: `C4 C4:0.5 B3:0.5 | C4 G3 | E4 E4:0.5 D4:0.5 | E4 C4 |
             E4 A4 | G4:2 | E4 A4 | G4:2 |
             G4 G4:0.5 A4:0.5 | G4 E4 | F4 F4:0.5 G4:0.5 | F4 D4 |
             E4 D4 | C4:2 | E4 D4 | C4:2`,
    chords: 'C C C C C.F C C.F C C C F Dm C.G C C.G C',
  },
  // Kiskarácsony, nagykarácsony — Original F major, 3/4 - moved down a fourth to C. Both sources agree (theisz writes it in G).
  //   Source: https://hu.wikipedia.org/wiki/Kiskarácsony,_nagykarácsony (LilyPond score; Kodály, Palotás 1922, MNT II. 562)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=KiskaracsonyNagykaracsony (LilyPond, in G)
  //   Public domain: Traditional nativity-play song collected by Kodály in 1922 (the tune only).
  {
    id: 'kiskaracsony-nagykaracsony',
    country: 'hu',
    themes: ['christmas'],
    title: 'Kiskarácsony, nagykarácsony',
    titleEn: 'Little Christmas, Big Christmas',
    emoji: '🍞',
    level: 'easy',
    bpm: 96,
    beatsPerBar: 3,
    melody: `C4:0.5 G3:0.5 C4 E4 | D4:0.5 C4:0.5 D4 D4 | C4:0.5 G3:0.5 C4 E4 | D4:0.5 C4:0.5 D4 D4 |
             E4:0.5 F4:0.5 G4 C4 | F4:0.5 E4:0.5 D4 D4 | E4:0.5 F4:0.5 G4 C4 | E4:0.5 D4:0.5 C4 C4`,
    chords: 'C G C G C G C C',
  },
  // Pásztorok, keljünk fel — Original F major, 2/4 - moved down a fourth to C; repeats written out. Theisz uses the Wikipedia "1" variant in bars 7-12; this follows the main Wikipedia line.
  //   Source: https://hu.wikipedia.org/wiki/Pásztorok,_keljünk_fel (LilyPond score; Péczely, Kiskomárom 1925, MNT II. 446)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=PasztorokKeljunkFel (LilyPond)
  //   Public domain: Traditional Baroque-era nativity song.
  {
    id: 'pasztorok-keljunk-fel',
    country: 'hu',
    themes: ['christmas'],
    title: 'Pásztorok, keljünk fel',
    titleEn: 'Shepherds, Let Us Rise',
    emoji: '🐑',
    level: 'medium',
    bpm: 88,
    beatsPerBar: 2,
    melody: `G4 E4:0.5 C4:0.5 | D4 B3 | C4 R:1 | G4 E4:0.5 C4:0.5 |
             D4 B3 | C4 R:1 | E4:0.5 F4:0.5 G4:0.5 A4:0.5 | G4 F4 |
             E4 R:1 | E4:0.5 F4:0.5 G4:0.5 A4:0.5 | G4 F4 | E4 R:1 |
             C4 A4 | G4 R:1 | C4 A4 | G4 R:1 |
             G4:0.5 A4:0.5 G4:0.5 F4:0.5 | E4:0.5 D4:0.5 E4:0.5 F4:0.5 | E4 D4 | C4 R:1 |
             G4:0.5 A4:0.5 G4:0.5 F4:0.5 | E4:0.5 D4:0.5 E4:0.5 F4:0.5 | E4 D4 | C4 R:1`,
    chords: 'C G C C G C C.F G C C.F G C F C F C C.F C C.G C C.F C C.G C',
  },
  // Pásztorok, pásztorok örvendezve — Original C major - no transposition. Wikipedia writes 2/4, theisz 4/4; the notes agree.
  //   Source: https://hu.wikipedia.org/wiki/Pásztorok,_pásztorok_örvendezve (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=PasztorokPasztorok (LilyPond, Zsasskovszky Énektár 1855)
  //   Public domain: Tune by the Zsasskovszky brothers (d. 1882 and 1887), text by Tárkányi Béla (d. 1886).
  {
    id: 'pasztorok-orvendezve',
    country: 'hu',
    themes: ['christmas'],
    title: 'Pásztorok, pásztorok örvendezve',
    titleEn: 'Shepherds, Shepherds, Rejoicing',
    emoji: '🌟',
    level: 'medium',
    bpm: 84,
    beatsPerBar: 2,
    melody: `C4 E4:0.5 G4:0.5 | C4 E4:0.5 G4:0.5 | F4:0.5 E4:0.5 D4 | C4 R:1 |
             G4 B4:0.5 D5:0.5 | G4 B4:0.5 D5:0.5 | C5:0.5 B4:0.5 A4 | G4 R:1 |
             C5 B4:0.5 A4:0.5 | G4 F4:0.5 E4:0.5 | G4:0.5 F4:0.5 E4 | D4 R:1 |
             C4 E4:0.5 G4:0.5 | C4 E4:0.5 G4:0.5 | F4:0.5 E4:0.5 D4 | C4 R:1`,
    chords: 'C C G C G G Am G Am C C G C C G C',
  },
  // A kis Jézus megszületett — Original F major, 4/4 - moved down a fourth to C; repeats written out. Single source.
  //   Source: https://hu.wikipedia.org/wiki/A_kis_Jézus_megszületett (LilyPond score; Volly, Pereg 1930)
  //   Public domain: Traditional; the tune has been known since the 1500s (used by Tinódi).
  {
    id: 'kis-jezus-megszuletett',
    country: 'hu',
    themes: ['christmas'],
    title: 'A kis Jézus megszületett',
    titleEn: 'Little Jesus Is Born',
    emoji: '👶',
    level: 'medium',
    bpm: 76,
    beatsPerBar: 4,
    melody: `C4:0.5 B3:0.5 C4:0.5 G3:0.5 C4:0.5 B3:0.5 C4:0.5 G3:0.5 | E4 F4:0.5 E4:0.5 D4 R:1 |
             C4:0.5 B3:0.5 C4:0.5 G3:0.5 C4:0.5 B3:0.5 C4:0.5 G3:0.5 | E4 F4:0.5 E4:0.5 D4 R:1 |
             G4:0.5 G4:0.5 E4:0.5 E4:0.5 G4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 E4 D4 R:1 |
             G4:0.5 G4:0.5 E4:0.5 E4:0.5 G4:0.5 F4:0.5 E4:0.5 D4:0.5 | E4 D4 C4 R:1`,
    chords: 'C C.G C C.G C.G C.G C.G C',
  },
];
