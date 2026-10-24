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
  // Csiga-biga, gyere ki! — Original C (so-la-so-mi, Wikipedia marks the key as A minor), 2/4 - no transposition. Both sources agree note for note.
  //   Source: https://hu.wikipedia.org/wiki/Csigabiga,_gyere_ki (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=CsigaBigaGyereKi (LilyPond)
  //   Public domain: Traditional Hungarian children's song.
  {
    id: 'csiga-biga',
    country: 'hu',
    themes: ['children', 'animals'],
    title: 'Csiga-biga, gyere ki!',
    titleEn: 'Snail, Snail, Come Out!',
    emoji: '🐌',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 G4:0.5 E4 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 G4:0.5 E4 |
             G4 G4:0.5 A4:0.5 | G4 E4 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 C4`,
    chords: 'C C C C C C C C',
  },
  // A part alatt — Original C major, 2/4 - no transposition. Both sources agree note for note.
  //   Source: https://hu.wikipedia.org/wiki/A_part_alatt (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=APartAlatt (LilyPond)
  //   Public domain: Traditional; collected by Csaplár Benedek in Szeged around 1870.
  {
    id: 'a-part-alatt',
    country: 'hu',
    themes: ['children', 'animals'],
    title: 'A part alatt',
    titleEn: 'Down by the Riverbank',
    emoji: '🌾',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `C4:0.5 C4:0.5 A4 | G4 R:1 | C4:0.5 C4:0.5 A4 | G4 R:1 |
             F4 E4 | D4:0.5 C4:0.5 D4:0.5 E4:0.5 | F4 E4 | D4:0.5 C4:0.5 D4 |
             C4 R:1`,
    chords: 'F C F C F G F G C',
  },
  // Hinta, palinta — Original C (so-la-so-mi, Wikipedia marks the key as A minor), 2/4 - no transposition. Single source (theisz has a different "Hinta, palinta, szépen szól a pacsirta" tune).
  //   Source: https://hu.wikipedia.org/wiki/Hinta,_palinta (LilyPond score)
  //   Public domain: Traditional; in Kiss Áron's 1891 collection.
  {
    id: 'hinta-palinta',
    country: 'hu',
    themes: ['children', 'movement'],
    title: 'Hinta, palinta',
    titleEn: 'Swing, Swing',
    emoji: '🎠',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `G4 E4 | G4:0.5 G4:0.5 E4 | G4:0.5 G4:0.5 E4:0.5 E4:0.5 | G4:0.5 G4:0.5 E4:0.5 E4:0.5 |
             G4:0.5 G4:0.5 G4:0.5 G4:0.5 | G4 C4`,
    chords: 'C C C C C C',
  },
  // Én elmentem a vásárba — Original F major, 2/4 - moved down a fourth to C major. Single source; the closing repeat sign is not written out.
  //   Source: https://hu.wikipedia.org/wiki/Én_elmentem_a_vásárba_félpénzzel (LilyPond score)
  //   Public domain: Traditional; recorded by Vikár Béla.
  {
    id: 'en-elmentem-a-vasarba',
    country: 'hu',
    themes: ['children', 'animals', 'everyday'],
    title: 'Én elmentem a vásárba',
    titleEn: 'I Went to the Market',
    emoji: '🐔',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 2,
    melody: `C4:0.5 D4:0.5 E4:0.5 C4:0.5 | D4:0.5 D4:0.5 D4:0.5 C4:0.5 | E4 G3 | C4 R:1 |
             C4:0.5 D4:0.5 E4:0.5 C4:0.5 | D4:0.5 D4:0.5 D4:0.5 C4:0.5 | E4 G3 | C4 R:1 |
             C4:0.5 D4:0.5 E4:0.5 C4:0.5 | D4:0.5 B3:0.5 C4 | G4:0.75 G4:0.25 A4:0.5 E4:0.5 | F4:0.5 D4:0.5 E4:0.5 C4:0.5 |
             D4:0.5 D4:0.5 C4:0.5 B3:0.5 | D4 G3 | C4 R:1`,
    chords: 'C G C C C G C C C G C F G G C',
  },
  // Egy boszorka van — Original C major, 4/4 - no transposition. Theisz (2/4) has the same pitches; it holds two line endings as quarters where Wikipedia has eighth + rest.
  //   Source: https://hu.wikipedia.org/wiki/Egy_boszorka_van (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=EgyBoszorkaVan (LilyPond)
  //   Public domain: Traditional Hungarian children's song.
  {
    id: 'egy-boszorka-van',
    country: 'hu',
    themes: ['children'],
    title: 'Egy boszorka van',
    titleEn: 'There Is a Witch',
    emoji: '🧙',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 4,
    melody: `C4:0.5 D4:0.5 E4:0.5 D4:0.5 C4 R:1 | C4:0.5 D4:0.5 E4:0.5 D4:0.5 C4 R:1 |
             E4:0.5 E4:0.5 F4:0.5 F4:0.5 E4:0.5 E4:0.5 D4:0.5 R:0.5 | E4:0.5 D4:0.5 E4:0.5 F4:0.5 E4:0.5 E4:0.5 D4:0.5 R:0.5 |
             E4:0.5 D4:0.5 E4:0.5 F4:0.5 G4:0.5 F4:0.5 E4:0.5 D4:0.5 | E4:0.5 D4:0.5 E4:0.5 F4:0.5 G4:0.5 F4:0.5 E4:0.5 D4:0.5 |
             C4:0.5 D4:0.5 E4:0.5 D4:0.5 C4 R:1 | C4:0.5 D4:0.5 E4:0.5 D4:0.5 C4 R:1`,
    chords: 'C C C C C C C C',
  },
  // Katalinka, szállj el! — Original D major, 2/4 - moved down a tone to C major. Theisz has the same tune (in C) with a shorter text, so two of the repeated "Katalinka" bars are missing there; this follows Wikipedia.
  //   Source: https://hu.wikipedia.org/wiki/Katalinka,_szállj_el (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=KatalinkaSzalljEl (LilyPond)
  //   Public domain: Traditional; collected by Sztankó Béla.
  {
    id: 'katalinka-szallj-el',
    country: 'hu',
    themes: ['children', 'animals'],
    title: 'Katalinka, szállj el!',
    titleEn: 'Ladybird, Fly Away!',
    emoji: '🐞',
    level: 'easy',
    bpm: 104,
    beatsPerBar: 2,
    melody: `E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4 D4 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4 D4 |
             E4 D4:0.5 D4:0.5 | C4 D4 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4 D4 |
             E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4 D4 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4 D4 |
             E4:0.5 E4:0.5 G4:0.5 G4:0.5 | E4:0.5 E4:0.5 G4:0.5 G4:0.5 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4 C4`,
    chords: 'C C C C C C C C C C C C C C C C',
  },
  // Kis kacsa fürdik — Original D minor, 2/4 - moved down a fourth to A minor. Both sources agree note for note.
  //   Source: https://hu.wikipedia.org/wiki/Kis_kacsa_fürdik (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=KisKacsaFurdik (LilyPond)
  //   Public domain: Traditional (Wikipedia: Hungarian folk song in Kiss Áron's 1891 collection; theisz: Polish folk song).
  {
    id: 'kis-kacsa-furdik',
    country: 'hu',
    themes: ['children', 'animals'],
    title: 'Kis kacsa fürdik',
    titleEn: 'The Little Duck Is Bathing',
    emoji: '🦆',
    level: 'easy',
    bpm: 96,
    beatsPerBar: 2,
    melody: `A3 A3:0.5 A3:0.5 | E4 E4 | F4 E4:0.5 D4:0.5 | D4 D4 |
             E4 D4:0.5 C4:0.5 | C4 C4 | D4 C4:0.5 B3:0.5 | A3 A3`,
    chords: 'Am Am Dm Dm Am Am G Am',
  },
  // Cirmos cica, haj! — Original C major, 2/4 - no transposition. Single source (no Wikipedia page).
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=CirmosCicaHaj (LilyPond)
  //   Public domain: Traditional Hungarian children's song.
  {
    id: 'cirmos-cica-haj',
    country: 'hu',
    themes: ['children', 'animals'],
    title: 'Cirmos cica, haj!',
    titleEn: 'Tabby Cat, Shoo!',
    emoji: '🐈',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 R:1 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 R:1 |
             G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4 R:1`,
    chords: 'C C C C C C C C',
  },
  // Hopp, Juliska! — Original C major, 4/4 - no transposition. Single source; the volta repeat is written out.
  //   Source: https://hu.wikipedia.org/wiki/Hopp,_Juliska (LilyPond score)
  //   Public domain: Traditional; collected by Bartók (the tune, not his arrangement).
  {
    id: 'hopp-juliska',
    country: 'hu',
    themes: ['children', 'movement'],
    title: 'Hopp, Juliska!',
    titleEn: 'Hop, Juliska!',
    emoji: '💃',
    level: 'easy',
    bpm: 108,
    beatsPerBar: 4,
    melody: `C5 G4 G4 E4 | C5 G4 G4 E4 |
             F4 F4:0.5 G4:0.5 A4 G4 | D4 D4 D4 C4 |
             F4 F4:0.5 G4:0.5 A4 G4 | D4 D4 D4 C4`,
    chords: 'C C F G F C',
  },
  // Aki nem lép egyszerre — Original C major, 2/4 - no transposition. Single source; the volta repeat is written out.
  //   Source: https://hu.wikipedia.org/wiki/Aki_nem_lép_egyszerre (LilyPond score)
  //   Public domain: Traditional; collected by Kodály (the tune only).
  {
    id: 'aki-nem-lep-egyszerre',
    country: 'hu',
    themes: ['children', 'movement'],
    title: 'Aki nem lép egyszerre',
    titleEn: 'Whoever Doesn\'t March in Step',
    emoji: '🥁',
    level: 'easy',
    bpm: 108,
    beatsPerBar: 2,
    melody: `C4:0.5 C4:0.5 C4:0.5 E4:0.5 | G4:0.5 G4:0.5 G4 | G4:0.5 E4:0.5 E4:0.5 G4:0.5 | C4:0.5 C4:0.5 C4 |
             C4:0.5 C4:0.5 C4:0.5 E4:0.5 | G4:0.5 G4:0.5 G4 | G4:0.5 E4:0.5 E4:0.5 G4:0.5 | C4:0.5 C4:0.5 C4`,
    chords: 'C C C C C C C C',
  },
  // Elvesztettem zsebkendőmet — Original C major, 2/4 - no transposition. Single source; repeat with first/second ending written out.
  //   Source: https://hu.wikipedia.org/wiki/Elvesztettem_zsebkendőmet (LilyPond score)
  //   Public domain: Traditional circle-game song; collected by Osváth Albert.
  {
    id: 'elvesztettem-zsebkendomet',
    country: 'hu',
    themes: ['children', 'movement'],
    title: 'Elvesztettem zsebkendőmet',
    titleEn: 'I Lost My Handkerchief',
    emoji: '🎀',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `G4:0.5 E4:0.5 F4:0.5 D4:0.5 | E4:0.5 D4:0.5 E4:0.5 C4:0.5 | D4:0.5 F4:0.5 E4:0.5 D4:0.5 | G4 G4 |
             G4:0.5 E4:0.5 F4:0.5 D4:0.5 | E4:0.5 D4:0.5 E4:0.5 C4:0.5 | D4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 C4`,
    chords: 'C C Dm C C C Dm C',
  },
  // Gólya, gólya, gilice — Original F major, 2/4 - moved down a fourth to C major. Single source.
  //   Source: https://hu.wikipedia.org/wiki/Gólya,_gólya,_gilice (LilyPond score)
  //   Public domain: Traditional; collected by Sztankó Béla.
  {
    id: 'golya-golya-gilice',
    country: 'hu',
    themes: ['children', 'animals'],
    title: 'Gólya, gólya, gilice',
    titleEn: 'Stork, Stork, Turtledove',
    emoji: '🐦',
    level: 'easy',
    bpm: 96,
    beatsPerBar: 2,
    melody: `E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4:0.5 E4:0.5 C4 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4:0.5 E4:0.5 C4 |
             E4:0.5 E4:0.5 D4:0.5 E4:0.5 | F4:0.5 E4:0.5 D4 | E4:0.5 E4:0.5 D4:0.5 E4:0.5 | F4:0.5 E4:0.5 D4 |
             E4 D4 | E4 D4 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4 C4`,
    chords: 'C C C C C Dm C Dm C C C C',
  },
  // Pál, Kata, Péter, jó reggelt! — Original F major, 4/4 - moved down a fourth to C major. Single source.
  //   Source: https://hu.wikipedia.org/wiki/Pál,_Kata,_Péter,_jó_reggelt! (LilyPond score)
  //   Public domain: Traditional Hungarian song.
  {
    id: 'pal-kata-peter',
    country: 'hu',
    themes: ['children', 'everyday', 'animals'],
    title: 'Pál, Kata, Péter, jó reggelt!',
    titleEn: 'Paul, Kate, Peter, Good Morning!',
    emoji: '🐓',
    level: 'medium',
    bpm: 96,
    beatsPerBar: 4,
    melody: `C4 C4:0.5 D4:0.5 E4 C4 | D4 B3 C4 R:1 |
             E4 E4:0.5 F4:0.5 G4 E4 | F4 D4 E4 R:1 |
             G4:0.5 G4:0.5 G4:0.5 G4:0.5 G4 A4:0.5 G4:0.5 | F4 G4:0.5 F4:0.5 E4 R:1 |
             E4:0.5 E4:0.5 E4:0.5 E4:0.5 E4 F4:0.5 E4:0.5 | D4 G4 C4 R:1`,
    chords: 'C G.C C Dm.C C F.C C C',
  },
  // Sétálunk, sétálunk — Original C major, 2/4 - no transposition. Single source (no Wikipedia page).
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=SetalunkSetalunk (LilyPond)
  //   Public domain: Traditional Hungarian game song.
  {
    id: 'setalunk-setalunk',
    country: 'hu',
    themes: ['children', 'movement'],
    title: 'Sétálunk, sétálunk',
    titleEn: 'We Are Walking, Walking',
    emoji: '🚶',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `G4 G4:0.5 A4:0.5 | G4 G4:0.5 A4:0.5 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 |
             C4 R:1`,
    chords: 'C C C C C',
  },
  // Zsipp-zsupp, kenderzsupp — Original C (so-la-so-mi, Wikipedia marks the key as A minor), 2/4 - no transposition. Theisz has the same notes plus one extra closing G; this follows Wikipedia.
  //   Source: https://hu.wikipedia.org/wiki/Zsipp,_zsupp,_kenderzsupp (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=ZsipZsupKenderZsup (LilyPond)
  //   Public domain: Traditional; in Kiss Áron's 1891 collection.
  {
    id: 'zsipp-zsupp',
    country: 'hu',
    themes: ['children', 'movement'],
    title: 'Zsipp-zsupp, kenderzsupp',
    titleEn: 'Zsipp-Zsupp, Bundle of Hemp',
    emoji: '🌾',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `G4 E4 | G4:0.5 G4:0.5 E4 | G4:0.5 G4:0.5 E4:0.5 E4:0.5 | G4:0.5 G4:0.5 E4`,
    chords: 'C C C C',
  },
  // Tente, baba, tente — Original C major, 2/4 - no transposition. Single source (no Wikipedia page).
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=TenteBabaTente (LilyPond)
  //   Public domain: Traditional Hungarian lullaby.
  {
    id: 'tente-baba-tente',
    country: 'hu',
    themes: ['lullaby'],
    title: 'Tente, baba, tente',
    titleEn: 'Hush, Baby, Hush',
    emoji: '🌙',
    level: 'easy',
    bpm: 76,
    beatsPerBar: 2,
    melody: `G4:0.5 G4:0.5 E4:0.5 E4:0.5 | G4 E4 | G4:0.5 G4:0.5 E4:0.5 E4:0.5 | G4 E4 |
             G4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 G4 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 C4 |
             G4 E4:0.5 E4:0.5 | G4:0.5 G4:0.5 E4 | G4:0.5 G4:0.5 E4 | G4:0.5 G4:0.5 E4`,
    chords: 'C C C C C C C C C C C C',
  },
  // Hová mégy te, kis nyulacska? — Original C major, 2/4 - no transposition. Both sources agree note for note.
  //   Source: https://hu.wikipedia.org/wiki/Hová_mégy_te,_kis_nyulacska (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=HovaMegyTeKisNyulacska (LilyPond)
  //   Public domain: Traditional; collected by Kodály (the tune only).
  {
    id: 'hova-megy-te-kis-nyulacska',
    country: 'hu',
    themes: ['children', 'animals'],
    title: 'Hová mégy te, kis nyulacska?',
    titleEn: 'Where Are You Going, Little Bunny?',
    emoji: '🐇',
    level: 'easy',
    bpm: 104,
    beatsPerBar: 2,
    melody: `G4 G4 | F4 E4 | G4 G4 | F4 E4 |
             F4:0.5 E4:0.5 D4:0.5 E4:0.5 | C4 D4:0.5 E4:0.5 | F4:0.5 E4:0.5 D4:0.5 E4:0.5 | C4 D4:0.5 E4:0.5 |
             F4:0.5 E4:0.5 D4 | C4 R:1`,
    chords: 'C F C F Dm C Dm C Dm C',
  },
  // Megfogtam egy szúnyogot — Original D minor, 2/4 - moved up a fifth to A minor. Single source (no Wikipedia page).
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=MegfogtamEgySzunyogot (LilyPond)
  //   Public domain: Traditional Hungarian folk song.
  {
    id: 'megfogtam-egy-szunyogot',
    country: 'hu',
    themes: ['children', 'animals'],
    title: 'Megfogtam egy szúnyogot',
    titleEn: 'I Caught a Mosquito',
    emoji: '🦟',
    level: 'medium',
    bpm: 104,
    beatsPerBar: 2,
    melody: `A4:0.5 B4:0.5 C5:0.5 B4:0.5 | C5:0.5 B4:0.5 A4 | A4:0.5 B4:0.5 C5:0.5 B4:0.5 | A4 A4 |
             A4:0.5 B4:0.5 C5:0.5 B4:0.5 | C5:0.5 B4:0.5 A4 | A4:0.5 B4:0.5 C5:0.5 B4:0.5 | A4 A4 |
             E5:0.5 D5:0.5 C5:0.5 B4:0.5 | C5:0.5 B4:0.5 A4 | A4:0.5 B4:0.5 C5:0.5 D5:0.5 | E5 E5 |
             E5:0.5 D5:0.5 C5:0.5 B4:0.5 | C5:0.5 B4:0.5 A4 | A4:0.5 B4:0.5 C5:0.5 B4:0.5 | A4 A4`,
    chords: 'Am Am Am Am Am Am Am Am Am Am Am Am Am Am Am Am',
  },
  // A gúnárom elveszett — Original F major, 2/4 - moved down a fourth to C major. Single source.
  //   Source: https://hu.wikipedia.org/wiki/A_gúnárom_elveszett (LilyPond score)
  //   Public domain: Traditional; recorded by Vikár Béla in Szegvár in 1898.
  {
    id: 'a-gunarom-elveszett',
    country: 'hu',
    themes: ['animals'],
    title: 'A gúnárom elveszett',
    titleEn: 'My Gander Is Lost',
    emoji: '🦢',
    level: 'medium',
    bpm: 96,
    beatsPerBar: 2,
    melody: `G3:0.5 C4:0.5 B3:0.5 C4:0.5 | D4:0.5 E4:0.5 C4 | G3:0.5 C4:0.5 B3:0.5 C4:0.5 | D4:0.5 E4:0.5 C4 |
             F4:0.5 E4:0.5 D4:0.5 E4:0.5 | F4 G4 | D4 R:1 | D4:0.5 C4:0.5 B3:0.5 C4:0.5 |
             D4 E4 | C4 R:1`,
    chords: 'C C C C Dm F G G G C',
  },
  // Csicseriborsó, bab, lencse — Original C major, 2/4 - no transposition. Single source.
  //   Source: https://hu.wikipedia.org/wiki/Csicseriborsó,_bab,_lencse (LilyPond score)
  //   Public domain: Traditional; collected by Manga János.
  {
    id: 'csicseriborso',
    country: 'hu',
    themes: ['children', 'everyday'],
    title: 'Csicseriborsó, bab, lencse',
    titleEn: 'Chickpea, Bean, Lentil',
    emoji: '🌱',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `G4 G4:0.5 A4:0.5 | G4 E4 | G4 E4 | G4 R:1 |
             G4 G4:0.5 A4:0.5 | G4 E4 | G4 E4 | G4 R:1 |
             G4:0.5 A4:0.5 G4:0.5 F4:0.5 | E4 D4 | G4:0.5 A4:0.5 G4:0.5 F4:0.5 | E4 D4 |
             E4 D4 | C4 R:1`,
    chords: 'C C C C C C C C C C C C C C',
  },
  // Házasodik a tücsök — Written in E minor (the page displays it a tone lower, in D minor), 2/4 - moved down a fifth to A minor. Single source.
  //   Source: https://hu.wikipedia.org/wiki/Házasodik_a_tücsök (LilyPond score)
  //   Public domain: Traditional; collected by Bartók (the tune, not his arrangement).
  {
    id: 'hazasodik-a-tucsok',
    country: 'hu',
    themes: ['animals', 'celebrations'],
    title: 'Házasodik a tücsök',
    titleEn: 'The Cricket Is Getting Married',
    emoji: '🦗',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 2,
    melody: `A4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4:0.5 E4:0.5 C4 | D4:0.5 D4:0.5 D4:0.5 D4:0.5 | E4 E4 |
             A4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4:0.5 E4:0.5 C4 | A3:0.5 A3:0.5 G3:0.5 G3:0.5 | A3 A3 |
             G3:0.5 B3:0.5 G3:0.5 B3:0.5 | C4:0.5 C4:0.5 C4 | D4:0.5 D4:0.5 D4:0.5 D4:0.5 | E4 E4 |
             A4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4:0.5 E4:0.5 C4 | A3:0.5 A3:0.5 G3:0.5 G3:0.5 | A3 A3`,
    chords: 'Am Am Dm Am Am Am Am Am G Am Dm Am Am Am Am Am',
  },
  // Volt nekem egy kecském — Original D minor, 2/4 - moved down a fourth to A minor. Both sources agree note for note.
  //   Source: https://hu.wikipedia.org/wiki/Volt_nekem_egy_kecském (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=VoltNekemEgyKecskem (LilyPond)
  //   Public domain: Traditional; collected by Kodály (the tune only).
  {
    id: 'volt-nekem-egy-kecskem',
    country: 'hu',
    themes: ['children', 'animals'],
    title: 'Volt nekem egy kecském',
    titleEn: 'I Had a Little Goat',
    emoji: '🐐',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `A4:0.5 A4:0.5 A4:0.5 G4:0.5 | E4 D4 | G4:0.5 G4:0.5 G4:0.5 R:0.5 | A4:0.5 A4:0.5 A4:0.5 G4:0.5 |
             E4 D4 | E4:0.5 E4:0.5 E4:0.5 R:0.5 | D4:0.5 D4:0.5 D4:0.5 C4:0.5 | A3 G3 |
             C4:0.5 C4:0.5 C4:0.5 R:0.5 | D4:0.5 D4:0.5 D4:0.5 C4:0.5 | A3 G3 | A3:0.5 A3:0.5 A3:0.5 R:0.5`,
    chords: 'Am Am G Am Am Am Dm Am Am Dm Am Am',
  },
  // Mackó, mackó, ugorjál! — Original F major, 2/4 - moved down a fourth to C major. Single source (no Wikipedia page).
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=MackoMackoUgorjal (LilyPond)
  //   Public domain: Traditional Hungarian children's song.
  {
    id: 'macko-macko-ugorjal',
    country: 'hu',
    themes: ['children', 'animals', 'movement'],
    title: 'Mackó, mackó, ugorjál!',
    titleEn: 'Teddy Bear, Jump!',
    emoji: '🧸',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4:0.5 C4:0.5 D4 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 | C4:0.5 C4:0.5 D4 |
             E4 D4 | C4 D4 | E4 D4 | C4 R:1`,
    chords: 'C C C C C C C C',
  },
  // Ha én cica volnék — Original C major, 2/4 - no transposition. Single source (no Wikipedia page).
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=HaEnCicaVolnek (LilyPond)
  //   Public domain: Traditional Hungarian children's song.
  {
    id: 'ha-en-cica-volnek',
    country: 'hu',
    themes: ['children', 'animals'],
    title: 'Ha én cica volnék',
    titleEn: 'If I Were a Kitten',
    emoji: '🐱',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 E4 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 E4 |
             G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 F4:0.5 E4 | E4:0.5 D4:0.5 E4:0.5 D4:0.5 | C4:0.5 C4:0.5 C4`,
    chords: 'C C C C C C C C',
  },
  // Debrecenbe kéne menni — Original C major, 2/4 - no transposition. Both sources agree note for note.
  //   Source: https://hu.wikipedia.org/wiki/Debrecenbe_kéne_menni (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=DebrecenbeKeneMenni (LilyPond)
  //   Public domain: Traditional; recorded by Vikár Béla.
  {
    id: 'debrecenbe-kene-menni',
    country: 'hu',
    themes: ['children', 'animals', 'everyday'],
    title: 'Debrecenbe kéne menni',
    titleEn: 'We Should Go to Debrecen',
    emoji: '🦃',
    level: 'easy',
    bpm: 104,
    beatsPerBar: 2,
    melody: `G4:0.5 G4:0.5 G4:0.5 G4:0.5 | E4 G4 | C4 C4 | A4:0.5 A4:0.5 A4:0.5 A4:0.5 |
             F4 A4 | G4 G4 | C5:0.5 G4:0.5 C5:0.5 G4:0.5 | E4 G4 |
             C4 E4 | F4:0.5 D4:0.5 F4:0.5 D4:0.5 | B3 D4 | C4 C4`,
    chords: 'C C C F F C C C C Dm G C',
  },
  // Sárga csikó — Original C major, 3/4 - no transposition. Single source.
  //   Source: https://hu.wikipedia.org/wiki/Sárga_csikó,_csengő_rajta (LilyPond score)
  //   Public domain: Traditional; collected by Bartók (the tune, not his arrangement).
  {
    id: 'sarga-csiko',
    country: 'hu',
    themes: ['animals'],
    title: 'Sárga csikó',
    titleEn: 'Yellow Foal',
    emoji: '🐴',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 3,
    melody: `C4:0.5 E4:0.5 G4 G4 | G4:0.5 A4:0.5 G4 G4 | D4:0.5 E4:0.5 F4 F4 | E4:0.5 G4:0.5 E4 G4 |
             C4:0.5 E4:0.5 D4:1.5 F4:0.5 | E4:0.5 D4:0.5 C4 R:1`,
    chords: 'C C Dm C Dm C',
  },
  // Csön-csön gyűrű — Original C major, 2/4 - no transposition. Single source; the volta repeat is written out.
  //   Source: https://hu.wikipedia.org/wiki/Csön,_csön_gyűrű (LilyPond score)
  //   Public domain: Traditional ring-passing game song; collected by Sztankó Béla.
  {
    id: 'cson-cson-gyuru',
    country: 'hu',
    themes: ['children', 'movement'],
    title: 'Csön-csön gyűrű',
    titleEn: 'Ring, Ring, Little Ring',
    emoji: '💍',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `G4 A4 | G4 E4 | G4 A4 | G4 E4 |
             G4 A4 | G4 E4 | G4 A4 | G4 E4 |
             G4 E4:0.5 F4:0.5 | G4 E4:0.5 F4:0.5 | G4 E4 | G4 R:1`,
    chords: 'C C C C C C C C C C C C',
  },
  // Mit mos, mit mos Levél Katicája? — Original F major, 4/4 - moved down a fourth to C major. Single source; both volta repeats are written out.
  //   Source: https://hu.wikipedia.org/wiki/Mit_mos,_Levél_Katicája? (LilyPond score)
  //   Public domain: Traditional; in Kiss Áron's 1891 collection.
  {
    id: 'mit-mos-mit-mos',
    country: 'hu',
    themes: ['movement', 'everyday'],
    title: 'Mit mos, mit mos Levél Katicája?',
    titleEn: 'What Is Kati Levél Washing?',
    emoji: '🧼',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 4,
    melody: `G4 E4 G4 E4 | F4:0.5 E4:0.5 D4:0.5 E4:0.5 C4 G3 |
             G4 E4 G4 E4 | F4:0.5 E4:0.5 D4:0.5 E4:0.5 C4 G3 |
             C4 D4 E4 F4 | E4 D4 D4 C4 |
             C4 D4 E4 F4 | E4 D4 D4 C4 |
             G4:0.5 G4:0.5 G4:0.5 A4:0.5 G4:0.5 E4:0.5 E4:0.5 C4:0.5 | E4:0.5 E4:0.5 D4:0.5 D4:0.5 C4 C4`,
    chords: 'C C C C C C.G C C.G C C',
  },
  // Fehér liliomszál — Original D mixolydian, 2/4 - moved down a tone to C mixolydian. Single source (first of the page's scores); the three-time volta repeat is written out.
  //   Source: https://hu.wikipedia.org/wiki/Fehér_liliomszál,_ugorj_a_Dunába (LilyPond score)
  //   Public domain: Traditional game song; collected by Gerzanics Magdolna.
  {
    id: 'feher-liliomszal',
    country: 'hu',
    themes: ['children', 'movement'],
    title: 'Fehér liliomszál',
    titleEn: 'White Lily Stem',
    emoji: '🌸',
    level: 'easy',
    bpm: 104,
    beatsPerBar: 2,
    melody: `G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 E4 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 E4 |
             G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 E4 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 E4 |
             G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 E4 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 E4 |
             G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 | C4 C4`,
    chords: 'C C C C C C C C C C C C C C C C',
  },
  // Megy a gőzös — Original C major, 4/4 - no transposition. Single source.
  //   Source: https://hu.wikipedia.org/wiki/Megy_a_gőzös_Kanizsára (LilyPond score)
  //   Public domain: Traditional; collected by Kodály (the tune only).
  {
    id: 'megy-a-gozos',
    country: 'hu',
    themes: ['children', 'movement', 'everyday'],
    title: 'Megy a gőzös',
    titleEn: 'The Steam Train Is Going',
    emoji: '🚂',
    level: 'medium',
    bpm: 108,
    beatsPerBar: 4,
    melody: `C4:0.5 C4:0.5 E4:0.5 C4:0.5 G4:0.5 G4:0.5 A4:0.5 G4:0.5 | F4:0.5 E4:0.5 D4 C4 R:1 |
             C4:0.5 C4:0.5 E4:0.5 C4:0.5 G4:0.5 G4:0.5 A4:0.5 G4:0.5 | F4:0.5 E4:0.5 D4 C4 R:1 |
             F4:0.5 G4:0.5 A4 A4:2 | C5:0.5 B4:0.5 A4 G4 R:1 |
             C5:0.5 G4:0.5 E4:0.5 C4:0.5 G4:0.5 G4:0.5 A4:0.5 G4:0.5 | F4:0.5 E4:0.5 D4 C4 R:1`,
    chords: 'C Dm.C C Dm.C F F.C C C',
  },
  // Virágéknál ég a világ — Original F major, 2/4 - moved down a fourth to C major. Single source.
  //   Source: https://hu.wikipedia.org/wiki/Virágéknál_ég_a_világ (LilyPond score)
  //   Public domain: Traditional; collected by Ziegler Márta.
  {
    id: 'virageknal-eg-a-vilag',
    country: 'hu',
    themes: ['everyday'],
    title: 'Virágéknál ég a világ',
    titleEn: 'The Lights Are On at the Virágs\'',
    emoji: '🐸',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 2,
    melody: `C4:0.5 C4:0.5 C4:0.5 C4:0.5 | C4:0.5 D4:0.5 E4:0.5 C4:0.5 | D4:0.5 D4:0.5 D4:0.5 D4:0.5 | G4:0.5 F4:0.5 E4:0.5 D4:0.5 |
             C4:0.5 C4:0.5 G3 | C4:0.5 C4:0.5 G3 | A3:0.5 F4:0.5 E4:0.5 D4:0.5 | C4:0.5 C4:0.5 C4`,
    chords: 'C C G C C C Dm C',
  },
  // Kiment a ház az ablakon — Original C major, 2/4 - no transposition. Single source.
  //   Source: https://hu.wikipedia.org/wiki/Kiment_a_ház_az_ablakon (LilyPond score)
  //   Public domain: Traditional nonsense song; recorded by Vikár Béla.
  {
    id: 'kiment-a-haz-az-ablakon',
    country: 'hu',
    themes: ['children', 'everyday'],
    title: 'Kiment a ház az ablakon',
    titleEn: 'The House Went Out the Window',
    emoji: '🏠',
    level: 'easy',
    bpm: 100,
    beatsPerBar: 2,
    melody: `G4:0.5 G4:0.5 F4:0.5 E4:0.5 | G4:0.5 G4:0.5 A4 | G4 R:1 | G4:0.5 G4:0.5 F4:0.5 E4:0.5 |
             G4:0.5 G4:0.5 F4 | E4 R:1 | E4:0.5 E4:0.5 D4:0.5 C4:0.5 | E4:0.5 E4:0.5 F4 |
             E4 R:1 | E4:0.5 E4:0.5 D4:0.5 C4:0.5 | E4:0.5 E4:0.5 D4 | C4 R:1`,
    chords: 'C C C C C C C C C C C C',
  },
  // Hej, Vargáné káposztát főz — Written in C dorian (the page displays it a tone higher), 3/4 - moved up a tone to D dorian. Single source.
  //   Source: https://hu.wikipedia.org/wiki/Hej,_Vargáné_káposztát_főz (LilyPond score)
  //   Public domain: Traditional; collected by Bartók (the tune, not his arrangement).
  {
    id: 'hej-vargane',
    country: 'hu',
    themes: ['everyday'],
    title: 'Hej, Vargáné káposztát főz',
    titleEn: 'Mrs Varga Is Cooking Cabbage',
    emoji: '🥬',
    level: 'medium',
    bpm: 104,
    beatsPerBar: 3,
    melody: `D4:0.5 D4:0.5 D4 D4 | D5:0.5 A4:0.5 A4 A4 | A4:0.5 B4:0.5 C5 G4 | F4:0.5 E4:0.5 D4 D4 |
             F4:0.5 C4:0.5 F4 G4 | A4:0.5 A4:0.5 A4 A4 | D4:0.5 E4:0.5 F4 G4 | F4:0.5 E4:0.5 D4 D4`,
    chords: 'Dm Dm C Dm F Dm Dm Dm',
  },
  // Három szabólegények — Original G major, 2/4 - moved down a fifth to C major. Single source.
  //   Source: https://hu.wikipedia.org/wiki/Három_szabó_legények (LilyPond score)
  //   Public domain: Traditional; collected by Sándor Emma.
  {
    id: 'harom-szabolegenyek',
    country: 'hu',
    themes: ['everyday'],
    title: 'Három szabólegények',
    titleEn: 'Three Tailor Lads',
    emoji: '🧵',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 2,
    melody: `C4:0.5 C4:0.5 C4:0.5 D4:0.5 | C4:0.5 A3:0.5 G3 | D4:0.5 D4:0.5 D4:0.5 R:0.5 | D4:0.5 E4:0.5 F4:0.5 F4:0.5 |
             E4:0.5 F4:0.5 G4 | C4:0.5 C4:0.5 C4:0.5 R:0.5 | E4 G4 | C4 G3 |
             C4:0.5 C4:0.5 D4:0.5 D4:0.5 | E4:0.5 E4:0.5 F4:0.5 D4:0.5 | C4:0.5 C4:0.5 C4:0.5 G3:0.5 | C4:0.5 C4:0.5 C4:0.5 R:0.5`,
    chords: 'C C G Dm C C C C C C C C',
  },
  // Hej, Dunáról fúj a szél — Original D minor, 2/4 - moved down a fourth to A minor. Both sources agree note for note.
  //   Source: https://hu.wikipedia.org/wiki/Hej,_Dunáról_fúj_a_szél (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=HejDunarolFujASzel (LilyPond)
  //   Public domain: Traditional; collected by Bartók, Kodály and Vikár László (the tune only).
  {
    id: 'hej-dunarol-fuj-a-szel',
    country: 'hu',
    themes: ['everyday'],
    title: 'Hej, Dunáról fúj a szél',
    titleEn: 'Hey, the Wind Blows from the Danube',
    emoji: '🌬️',
    level: 'medium',
    bpm: 96,
    beatsPerBar: 2,
    melody: `A4:0.5 A4:0.5 G4:0.5 E4:0.5 | A4:0.5 A4:0.5 G4 | A4:0.5 A4:0.5 G4:0.5 E4:0.5 | A4:0.5 A4:0.5 G4 |
             A4:0.5 E4 D4:0.5 | E4:0.5 E4:0.5 E4 | D4:0.5 D4:0.5 C4:0.5 A3:0.5 | D4:0.5 D4:0.5 C4 |
             D4:0.5 D4:0.5 C4:0.5 A3:0.5 | D4:0.5 D4:0.5 C4 | D4:0.5 A3 G3:0.5 | A3:0.5 A3:0.5 A3`,
    chords: 'Am Am Am Am Am Am Dm Dm Dm Dm Dm Am',
  },
  // Aludj, baba, aludjál! — Original C major, 2/4 - no transposition. Single source (no Wikipedia page).
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=AludjBabaAludjal (LilyPond)
  //   Public domain: Traditional Hungarian lullaby.
  {
    id: 'aludj-baba-aludjal',
    country: 'hu',
    themes: ['lullaby'],
    title: 'Aludj, baba, aludjál!',
    titleEn: 'Sleep, Baby, Sleep',
    emoji: '💤',
    level: 'easy',
    bpm: 76,
    beatsPerBar: 2,
    melody: `G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 G4:0.5 E4 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4 E4 |
             G4:0.5 A4:0.5 G4:0.5 F4:0.5 | E4:0.5 E4:0.5 D4 | C4:0.5 D4:0.5 E4:0.5 D4:0.5 | C4 C4`,
    chords: 'C C C C C C C C',
  },
  // Csillagok, csillagok — Original A minor, 4/4 - no transposition. Same pitches in both; theisz ends each line with a half note + rest where Wikipedia has two half notes.
  //   Source: https://hu.wikipedia.org/wiki/Csillagok,_csillagok (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=CsillagokCsillagok (LilyPond)
  //   Public domain: Traditional; collected by Bartók (the tune, not his arrangement).
  {
    id: 'csillagok-csillagok',
    country: 'hu',
    themes: ['lullaby'],
    title: 'Csillagok, csillagok',
    titleEn: 'Stars, Stars',
    emoji: '✨',
    level: 'medium',
    bpm: 72,
    beatsPerBar: 4,
    melody: `A4:0.5 A4:0.5 B4:0.5 A4:0.5 E4:0.5 C4:1.5 | A4 G4 E4:0.5 D4:1.5 |
             A3:2 A3:2 | C5:0.5 B4:0.5 A4:0.5 B4:0.5 G4 G4 |
             A4:0.5 B4:1.5 C5:0.5 A4:1.5 | E4:2 E4:2 |
             C5:0.5 B4:0.5 A4:0.5 B4:0.5 G4:0.5 G4:1.5 | A4:1.5 B4:0.5 C5 A4 |
             E4:2 C4:2 | A4:0.5 A4:0.5 B4:0.5 A4:0.5 E4 C4 |
             A4:1.5 G4:0.5 E4:0.5 D4:1.5 | A3:2 A3:2`,
    chords: 'Am Dm Am G Am Am G Am Am Am Dm Am',
  },
  // Két szál pünkösdrózsa — Original D dorian, 2/4 - no transposition. Single source.
  //   Source: https://hu.wikipedia.org/wiki/Két_szál_pünkösdrózsa (LilyPond score)
  //   Public domain: Traditional Pentecost song; recorded by Vikár Béla.
  {
    id: 'ket-szal-punkosdrozsa',
    country: 'hu',
    themes: ['celebrations'],
    title: 'Két szál pünkösdrózsa',
    titleEn: 'Two Stems of Peony',
    emoji: '🌺',
    level: 'medium',
    bpm: 92,
    beatsPerBar: 2,
    melody: `D5 A4 | A4:0.5 B4:0.5 C5:0.5 A4:0.5 | D5 A4 | A4:0.5 B4:0.5 C5:0.5 A4:0.5 |
             G4 A4 | F4:0.5 F4:0.5 E4:0.5 D4:0.5 | G4:0.5 G4:0.5 F4:0.5 E4:0.5 | D4 D4`,
    chords: 'Dm Am Dm Am C Dm C Dm',
  },
  // Érik a szőlő — Original A minor, 2/4 - no transposition. Same pitches in both; theisz adds a 1/4 rest bar after each half, which is left out here.
  //   Source: https://hu.wikipedia.org/wiki/Érik_a_szőlő,_hajlik_a_vessző (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=ErikASzolo (LilyPond)
  //   Public domain: Traditional; collected by Bartók (the tune, not his arrangement).
  {
    id: 'erik-a-szolo',
    country: 'hu',
    themes: ['everyday'],
    title: 'Érik a szőlő',
    titleEn: 'The Grapes Are Ripening',
    emoji: '🍇',
    level: 'medium',
    bpm: 96,
    beatsPerBar: 2,
    melody: `D5 D5:0.5 A4:0.5 | D5 E5 | C5 C5:0.5 D5:0.5 | E5 D5 |
             C5:0.5 B4:0.5 A4 | A4:0.5 D5:0.5 A4 | G4 G4:0.5 D4:0.5 | G4 A4 |
             F4 F4:0.5 G4:0.5 | A4 G4 | F4:0.5 E4:0.5 D4 | D4:0.5 G4:0.5 D4`,
    chords: 'Dm Dm C C Am Dm G C Dm Dm Dm Dm',
  },
  // Hull a szilva a fáról — Original D minor, 2/4 - moved down a fourth to A minor. Both sources agree note for note.
  //   Source: https://hu.wikipedia.org/wiki/Hull_a_szilva_a_fáról (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=HullASzilvaAFarol (LilyPond)
  //   Public domain: Traditional; collected by Domokos Pál Péter.
  {
    id: 'hull-a-szilva-a-farol',
    country: 'hu',
    themes: ['everyday'],
    title: 'Hull a szilva a fáról',
    titleEn: 'Plums Are Falling from the Tree',
    emoji: '🌳',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 2,
    melody: `A3:0.5 A3:0.5 A4:0.5 A4:0.5 | G4:0.5 A4 A4:0.5 | D4:0.5 D4:0.5 G4:0.5 F4:0.5 | E4:0.5 E4 A3:0.5 |
             D4 G4:0.5 F4:0.5 | E4:0.5 D4:0.5 C4:0.5 G3:0.5 | C4:0.5 C4:0.5 D4:0.5 C4:0.5 | A3 A3:0.5 R:0.5`,
    chords: 'Am Am Dm Am Dm C Am Am',
  },
  // Esik az eső, hajlik a vessző — Original C major, 2/4 - no transposition. Single source (first score on the page).
  //   Source: https://hu.wikipedia.org/wiki/Esik_az_eső,_hajlik_a_vessző (LilyPond score)
  //   Public domain: Traditional; collected by Volly István.
  {
    id: 'esik-az-eso',
    country: 'hu',
    themes: ['children', 'everyday'],
    title: 'Esik az eső, hajlik a vessző',
    titleEn: 'Rain Is Falling, the Twig Is Bending',
    emoji: '🌧️',
    level: 'medium',
    bpm: 100,
    beatsPerBar: 2,
    melody: `G4 G4:0.5 A4:0.5 | G4 E4 | G4 G4:0.5 A4:0.5 | G4 E4 |
             G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 F4:0.5 E4:0.5 R:0.5 | E4:0.5 D4:0.5 E4:0.5 D4:0.5 | C4:0.5 C4:0.5 C4:0.5 R:0.5 |
             G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 G4:0.5 E4:0.5 R:0.5 | G4:0.5 G4:0.5 G4:0.5 A4:0.5 | G4:0.5 G4:0.5 E4:0.5 R:0.5 |
             E4:0.5 D4:0.5 E4:0.5 D4:0.5 | C4:0.5 C4:0.5 C4:0.5 R:0.5`,
    chords: 'C C C C C C C C C C C C C C',
  },
  // Hull a pelyhes fehér hó — Original D major, 4/4 - moved down a tone to C major. Both sources agree note for note (theisz writes 2/4).
  //   Source: https://hu.wikipedia.org/wiki/Hull_a_pelyhes_fehér_hó (LilyPond score)
  //   Source: https://dalok.theisz.hu/index.php?lang=hu&page=song&id=HullAPelyhes (LilyPond)
  //   Public domain: Tune: 18th-century French "Ah! vous dirai-je, maman" (public domain). Only the tune is used; the Hungarian text by Rossa Ernő is not.
  {
    id: 'hull-a-pelyhes',
    country: 'hu',
    themes: ['christmas', 'children'],
    title: 'Hull a pelyhes fehér hó',
    titleEn: 'Fluffy White Snow Is Falling',
    emoji: '❄️',
    level: 'easy',
    bpm: 96,
    beatsPerBar: 4,
    melody: `C4:0.5 C4:0.5 G4:0.5 G4:0.5 A4:0.5 A4:0.5 G4 | F4:0.5 F4:0.5 E4:0.5 E4:0.5 D4:0.5 D4:0.5 C4 |
             C4:0.5 C4:0.5 G4:0.5 G4:0.5 A4:0.5 A4:0.5 G4 | F4:0.5 F4:0.5 E4:0.5 E4:0.5 D4:0.5 D4:0.5 C4 |
             G4:0.5 G4:0.5 F4:0.5 F4:0.5 E4:0.5 E4:0.5 D4 | G4:0.5 G4:0.5 F4:0.5 F4:0.5 E4:0.5 E4:0.5 D4 |
             C4:0.5 C4:0.5 G4:0.5 G4:0.5 A4:0.5 A4:0.5 G4 | F4:0.5 F4:0.5 E4:0.5 E4:0.5 D4:0.5 D4:0.5 C4`,
    chords: 'C F C F C C C C',
  },
  // Csendes éj — Original Bb major, 3/4 - moved up a tone to C major. Single source; repeat written out. Top note F5 is one step above the usual range.
  //   Source: https://hu.wikipedia.org/wiki/Csendes_éj_(dal) (LilyPond score)
  //   Public domain: Franz Xaver Gruber (d. 1863), text Joseph Mohr (d. 1848).
  {
    id: 'csendes-ej',
    country: 'hu',
    themes: ['christmas', 'lullaby'],
    title: 'Csendes éj',
    titleEn: 'Silent Night',
    emoji: '🎄',
    level: 'medium',
    bpm: 84,
    beatsPerBar: 3,
    melody: `G4:1.5 A4:0.5 G4 | E4:3 | G4:1.5 A4:0.5 G4 | E4:3 |
             D5:2 D5 | B4:3 | C5:2 C5 | G4:3 |
             A4:2 A4 | C5:1.5 B4:0.5 A4 | G4:1.5 A4:0.5 G4 | E4:3 |
             A4:2 A4 | C5:1.5 B4:0.5 A4 | G4:1.5 A4:0.5 G4 | E4:3 |
             D5:1.5 D5:0.5 D5 | F5:1.5 D5:0.5 B4 | C5:3 | E5:3 |
             C5:1.5 G4:0.5 E4 | G4:1.5 F4:0.5 D4 | C4:3`,
    chords: 'C C C C G G C C F F C C F F C C G Dm C C C G C',
  },
];
