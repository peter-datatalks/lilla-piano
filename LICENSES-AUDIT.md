# Lilla Piano: licence audit for commercial use

Audit date: 2026-10-26. Scope: all third-party content shipped with or loaded by the app (songs, instrument samples, fonts, icons and logo). This is a report only: no song or app code was changed.

> This is an engineering audit, not legal advice. Copyright terms differ by country. Most of Europe (including Sweden, Hungary, Turkey and Ukraine) protects a work for the author's life plus 70 years. The US uses publication dates instead (everything published before 1931 is public domain in 2026). Before launch, have a lawyer confirm the open ⚠️ items, especially for app-store distribution in the US.

## Status (26 Oct 2026)

| Action | Status |
|---|---|
| 1. SymbTr Turkish songs | ✅ **Removed** (16 songs). `js/songs-tr.js` keeps only `tembel-cocuk`, `yag-satarim-bal-satarim` and `daha-dun-annemizin`. |
| 2. Moose logo and app icons | ✅ **Owner confirms** they own it; generated with ChatGPT/Claude. Note: purely AI-generated images may not be protected by copyright, so others could copy the logo. A registered trademark on the name and logo is the stronger protection if that matters. |
| 3. Self-host instrument samples | ✅ **Done.** 29 instruments × 88 notes in `assets/sounds/FluidR3_GM/`, loaded from there by `js/samples.js`; notices in `LICENSES/FluidR3_GM.txt` and `LICENSES/midi-js-soundfonts-MIT.txt`. |
| 4. The 14 ⚠️ songs | ⏳ Open. |
| 5. Credits screen and `LICENSES/` folder | ✅ **Done.** "Credits & licences" link at the bottom of the Songs page (`js/credits.js`). |
| 6. Self-host fonts | ✅ **Done.** `assets/fonts/` + `css/fonts.css`; OFL texts in `LICENSES/`. No requests to Google Fonts any more. |
| 7. Move hosting off GitHub Pages | ⏳ Open (needs an account with the new host). |
| 8. Privacy policy and parental consent | ⏳ Open. |

## Summary

| Category | Items | ✅ OK | ⚠️ Needs check | ❌ Not OK |
|---|---|---|---|---|
| Songs (`js/songs*.js`) | 334 | 304 | 14 | **16** (Turkish, SymbTr) |
| Instrument samples (FluidR3_GM via gleitz) | 1 set | ✅ commercial use allowed, attribution required | Self-host it | — |
| Fonts (Baloo 2, Nunito) | 2 | ✅ SIL OFL 1.1 | Self-host them (GDPR) | — |
| Instrument icons, piano bubble, wordmark | in-repo SVG | ✅ made for this project | — | — |
| Moose logo and app icons | 4 files | — | ⚠️ **owner to confirm** | — |

The only hard blocker is the **16 Turkish songs from SymbTr (CC BY-NC-SA 4.0)**. Everything else is either clear or a low-risk paperwork item.

The brief said "~400 songs". The library actually has 334 entries across 15 files.

---

## 1. Songs

### 1.1 Per-file overview

"Source" summarises the file header comments, the per-song `Source:` comments, README.md (Credits) and PLAN.md. Each song is classified in the appendix at the end of this file.

| File | Songs | Where the melodies came from | ✅ | ⚠️ | ❌ |
|---|---|---|---|---|---|
| `songs.js` (Swedish core) | 20 | Alice Tegnér, *Sjung med oss, Mamma!* vols 1 and 3 (1892–95), via Svenskt visarkiv scans. Also Wikimedia Commons engravings and MIDI, Danish Wikisource and Mama Lisa's World. The first six songs (Blinka … Per Olsson) have **no source comment**. | 14 | 6 | 0 |
| `songs-se-extra.js` | 13 | Tegnér, *Sjung med oss, Mamma!* vols 1–5 (1892–99, Commons PDFs, read by eye). Also de/en Wikipedia LilyPond, a CC0 Commons engraving and Mama Lisa's World. | 13 | 0 | 0 |
| `songs-hu.js` | 58 | hu.wikipedia LilyPond scores (CC BY-SA pages), cross-checked against dalok.theisz.hu LilyPond files and Mama Lisa's World MIDI. Traditional tunes only; Kodály and Bartók arrangements are not used. | 57 | 1 | 0 |
| `songs-ua.js` | 22 | Wikimedia Commons scores (PD-UA-exempt), nashe.com.ua scores, Mama Lisa's World, and CC0 MIDI by P. Gerloff. Traditional only. | 21 | 1 | 0 |
| `songs-tr.js` | 19 | **16 türküler and ninniler converted mechanically from the SymbTr corpus (CC BY-NC-SA 4.0).** The other 3 come from Mama Lisa's World and en.wikipedia LilyPond. | 2 | 1 | **16** |
| `songs-xmas-en.js` | 24 | en.wikipedia LilyPond, Commons MIDI (Rabanus Flavus settings), Mutopia, and the *English Hymnal* (1906) on archive.org. | 23 | 1 | 0 |
| `songs-xmas-eu.js` | 20 | de/hu.wikipedia LilyPond, CC0 Commons MIDI by Peter Gerloff, the Commons engraving of Raska fötter, CCEL (Bereden väg), and Knut Brodin's *Julens visor* (Svenskt visarkiv scan). | 19 | 1 | 0 |
| `songs-anthems.js` | 2 | sv/en.wikipedia LilyPond. Du gamla, du fria is traditional; Himnusz is by Erkel (d. 1893). | 2 | 0 | 0 |
| `songs-classical-a.js` | 22 | Mostly Mutopia (MU), plus en.wikipedia LilyPond and a CC0 Commons engraving. | 22 | 0 | 0 |
| `songs-classical-b.js` | 16 | Mutopia LilyPond/MIDI and en.wikipedia (Brahms Wiegenlied). | 16 | 0 | 0 |
| `songs-classical-c.js` | 22 | Mutopia, archive.org, en.wikipedia, and **3 from the music21 corpus**. | 19 | 3 | 0 |
| `songs-classical-d.js` | 24 | Mutopia, plus archive.org and en.wikipedia (one each). | 24 | 0 | 0 |
| `songs-classical-e.js` | 28 | Mutopia, OpenScore Lieder (CC0), en.wikipedia, and **6 Chopin pieces from Chopin First Editions (CC BY 4.0)**. | 28 | 0 | 0 |
| `songs-classical-f.js` | 17 | Mutopia, archive.org scans of period vocal scores, and en.wikipedia. | 17 | 0 | 0 |
| `songs-classical-g.js` | 27 | Mutopia, archive.org/Schirmer scans, Commons, en.wikipedia, and IMSLP plus a CC BY 3.0 Commons scan (Monti). | 27 | 0 | 0 |
| **Total** | **334** | | **304** | **14** | **16** |

**Composer deaths.** Every named composer died more than 70 years ago. The most recent are Elgar and Holst (1934), and Frederic Austin's *Twelve Days* tune (d. 1952; public domain in life+70 countries since 1 Jan 2023). No song by Sibelius (d. 1957), Prokofiev (d. 1953) or any other still-protected composer is included. The *Peter and the Wolf* animals in the instrument picker are icon ideas only; no Prokofiev music is used. Lyricists matter only where a title quotes them (see 1.3), because the app shows no lyrics.

**Transcription sources.** A melody (pitches and rhythms) taken from a public-domain work is not protected, even when it was read from a modern engraving. Some EU countries do give a related right to critical editions (for example Germany §70 UrhG, 25 years), so the risk is low but not zero. Wikipedia LilyPond scores are CC BY-SA, Mutopia uses CC BY, CC BY-SA or public domain (no non-commercial licences), OpenScore is CC0, and Gerloff's Commons MIDI files are CC0. All of these allow commercial use. Crediting them in the app's credits screen is good practice, and **required** for the CC BY sources (CFE Chopin and the Monti Commons scan).

### 1.2 ❌ NOT OK for commercial use: Turkish songs from SymbTr

The SymbTr corpus (MTG, Universitat Pompeu Fabra, github.com/MTG/SymbTr) is licensed **CC BY-NC-SA 4.0**, which does not allow commercial use. The README confirms this ("may only be used non-commercially, with attribution"). The tunes themselves are anonymous and traditional (Tanburi Cemil Bey, d. 1916, is credited for one), so the melodies are free. The problem is the SymbTr transcriptions they were converted from. A freemium app is commercial as a whole, so these songs can't stay in a paid build, and they can't be offered as free content in it either.

| Song id | Title | SymbTr file | Other source in the comment | Suggested clean source for re-transcription |
|---|---|---|---|---|
| `dere-dibi-ninni` | Dere Dibi Saz Olur (Ninni) | hicaz--ninni--yuruksofyan--dere_dibi | — | Mama Lisa's World Turkish lullabies; field or archival recordings |
| `dagda-tavsanlar-uyur` | Dağda Tavşanlar Uyur (Ninni) | hicaz--ninni--sofyan--dagda_tavsanlar--tanburi_cemil_bey | — | Tanburi Cemil Bey's own 78 rpm recordings (published before 1916, public domain); Mama Lisa's World |
| `uskudara-gider-iken` | Üsküdar'a Gider İken (Kâtibim) | nihavent--turku--nimsofyan--uskudara_gider | **Commons `Katibim.svg` (LilyPond)** | **Easiest fix:** re-derive from the Commons LilyPond only. Check the file's licence (PD/CC0/CC BY/CC BY-SA are all fine). |
| `cayelinden-oteye` | Çayeli'nden Öteye | hicaz--turku--devrihindi--cayelinden_oteye--rize | — | Transcribe from recordings (see below) |
| `dere-geliyor-dere` | Dere Geliyor Dere | huseyni--turku--evfer--dere_geliyor | — | Transcribe from recordings; check tr.wikipedia/Commons for a score |
| `sari-gelin` | Sarı Gelin | huseyni--turku--curcuna--sari_gelin--erzurum | — | Commons/Wikipedia (the tune is widely notated); recordings |
| `hey-onbesli` | Hey Onbeşli | huseyni--turku--sofyan--hey_onbesli--tokat | — | Transcribe from recordings |
| `gesi-baglari` | Gesi Bağları | beyati--turku--nimsofyan--gesi_baglarinda--kayseri | — | Transcribe from recordings |
| `cayda-cira` | Çayda Çıra | segah--turku--curcuna--cayda_cira--elazig | — | Transcribe from recordings; check Commons |
| `cemberimde-gul-oya` | Çemberimde Gül Oya | segah--turku--aksak--cemberim_de--biga | — | Transcribe from recordings |
| `su-dereler-su-duzler` | Şu Dereler Şu Düzler | rast--turku--sofyan--su_dereler--orta_anadolu | — | Transcribe from recordings |
| `entarisi-ala-benziyor` | Entarisi Ala Benziyor | hicaz--turku--raksaksagi--entarisi_ala--istanbul | — | Transcribe from recordings |
| `horozumun-tuyleri` | Horozumun Tüyleri | hicaz--turku--evfer--horozumun_tuyleri--istanbul | — | Transcribe from recordings |
| `alli-turnam` | Allı Turnam | tahir--turku--musemmen_ii--alli_durnam--kirikkale-keskin | — | Transcribe from recordings |
| `yagmur-yagar-tas-ustune` | Yağmur Yağar Taş Üstüne | huseyni--turku--devrituran--yagmur_yagar | — | Transcribe from recordings |
| `fidayda` | Fidayda | ferahnuma--turku--sofyan--fidayda--ankara | — | Transcribe from recordings |

The other Turkish songs are fine. `tembel-cocuk` (Frère Jacques tune) and `yag-satarim-bal-satarim` (Mama Lisa) are ✅; `daha-dun-annemizin` is ⚠️ for its title only.

**How to get clean versions** (most reliable first):

1. **Ask MTG/UPF for a commercial licence** to the 16 transcriptions. This is the fastest route if they agree, because the work is already done. SymbTr asks for a citation of Karaosmanoğlu (ISMIR 2012) in any case.
2. **Make your own transcription from recordings.** The tunes are traditional, so a new transcription by ear (by you or a hired musician, as work for hire) belongs to you. Use recordings only as a reference for the tune, and don't copy someone else's arrangement.
3. **Use scores with a clear licence.** Good candidates are Wikimedia Commons and tr.wikipedia LilyPond scores (check each file's licence; PD, CC0, CC BY and CC BY-SA allow commercial use) and Mama Lisa's World (good for ninniler and children's songs, as a cross-check). Older printed collections on archive.org or IMSLP, such as the Istanbul Conservatory (Darülelhan) folk-song booklets of 1926–1930s, also work, but only where the transcriber died before 1956. Avoid TRT repertoire notation and modern songbooks, which are protected editions. Bartók's *Turkish Folk Music from Asia Minor* (collected in 1936) is public domain in the EU, but the 1976 edition by Suchoff is still protected in the US.
4. Until one of these is done, **leave the 16 songs out of every commercial build** (paid and free tiers alike), and remove them from the public repo if the repo itself is part of the product.

Note that the SymbTr licence is also share-alike. As long as these songs are in `js/songs-tr.js`, that derived data has to stay CC BY-NC-SA.

### 1.3 ⚠️ Needs a source check

| Song id | File | Issue | Suggested fix |
|---|---|---|---|
| `blinka`, `broder-jakob`, `ro-ro`, `imse-vimse`, `per-olsson` | songs.js | No source comment. The tunes are clearly public domain or traditional (Ah! vous dirai-je maman, Frère Jacques, Row Row Row (Lyte 1881), Itsy Bitsy Spider (printed 1910), Old MacDonald). | Add a `Source:` comment, e.g. Wikipedia LilyPond or Mama Lisa's World. |
| `hjulen` | songs.js | No source comment. The title "The Wheels on the Bus" / "Hjulen på bussen" comes from Verna Hills's lyric (1937/39; Hills d. 1990, still protected). The tune is the public-domain "Here We Go Round the Mulberry Bush". | Confirm the melody is the Mulberry Bush tune and add a source. A song title alone is generally not protected, so this is low risk, but don't show lyrics. |
| `hull-a-pelyhes` | songs-hu.js | Tune is PD (Ah! vous dirai-je maman). The title quotes Rossa Ernő's Hungarian lyric (d. 1972, protected until 2042). | Low risk (title only). Optionally retitle, e.g. "Ah! vous dirai-je, maman (Hull a pelyhes)". |
| `daha-dun-annemizin` | songs-tr.js | Tune is PD (Twinkle). The title quotes a later Turkish school lyric whose author could not be found. | Low risk (title only). Find the lyricist or retitle. |
| `shchedryk` | songs-ua.js | Melody is PD (Leontovych, d. 1921). `titleEn` "Carol of the Bells" is the title of Peter Wilhousky's 1936 English lyric (d. 1978, still protected). | Low risk. Consider `titleEn: 'Shchedryk (Little Swallow)'` with "Carol of the Bells" only in `aka`. |
| `staffan-var-en-stalledrang` | songs-xmas-eu.js | The only source is Knut Brodin's *Julens visor* (Brodin d. 1983). The tune is traditional, but the edition is protected. | Cross-check against a pre-1955 or traditional source (Svenskt visarkiv field notation, folkwiki.se) and add it. |
| `les-anges-dans-nos-campagnes` | songs-xmas-en.js | The main source is Edward Shippen Barnes's arrangement (d. 1958, protected in life+70 countries until 2028). The French Commons MIDI confirms the tune. | Confirm that the melody and simplified chords follow the traditional tune and not Barnes's harmony. Prefer the Commons MIDI as the main source. |
| `bach-wachet-auf`, `bach-o-haupt-voll-blut`, `handel-lascia-chio-pianga` | songs-classical-c.js | Taken from the music21 corpus. music21's code is BSD, but its docs say some corpus encodings "may not be used for commercial uses" and point to per-file licences. Bach and Handel themselves are PD. | Re-transcribe from Mutopia, IMSLP or the Bach-Gesellschaft edition, or check each file's licence notice in the music21 repo. |

**Minor notes** (no action needed beyond credits): the six Chopin First Editions pieces are CC BY 4.0, and the Monti Csárdás uses a CC BY 3.0 Commons scan and an IMSLP edition by dos Santos (the melody is PD from 1904, but check that edition's licence). Some Hungarian and Ukrainian tunes come from a single source (dalok.theisz.hu, nashe.com.ua or Mama Lisa's World), where the site's own text is copyrighted. The tunes are traditional and only notes were taken, so this is OK.

---

## 2. Instrument samples

| Item | Where it comes from | Licence | Commercial use | Attribution required |
|---|---|---|---|---|
| FluidR3_GM soundfont (original `.sf2`) | Frank Wen (2000–2008), packaged by Toby Smithe (Debian `fluid-soundfont`) | **MIT** | ✅ Yes | Include the copyright notice and the MIT permission notice "in all copies or substantial portions" |
| Pre-rendered MP3 note files (`FluidR3_GM/<instrument>-mp3/*.mp3`), loaded by `js/samples.js` from `https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/` | gleitz/midi-js-soundfonts | The gleitz README lists FluidR3_GM as **"Creative Commons Attribution 3.0"** | ✅ Yes | Credit FluidR3_GM (Frank Wen) and gleitz/midi-js-soundfonts, with a link to the licence |
| gleitz/midi-js-soundfonts repository | Benjamin Gleitzman | **MIT**, "Copyright (C) 2012 Benjamin Gleitzman" | ✅ Yes | Include the MIT notice when redistributing (self-hosting counts as redistributing) |

Note that the gleitz README does not say "MIT" for FluidR3_GM, even though the code comment in `js/samples.js` and the README credit both do. Both licences allow commercial use, so the safe choice is to credit it under both. Don't use the **MusyngKite** or **FatBoy** sets from the same repo by mistake: they are CC BY-SA 3.0.

**Recommendation: self-host the samples.** This is already an open item in PLAN.md M2.
- Hot-linking gleitz.github.io means the app's sound depends on a third party's personal GitHub Pages site, which can change or disappear at any time.
- GitHub Pages terms say Pages is not meant to be free hosting for a business, e-commerce or SaaS site. That applies to this app's own hosting too (see section 4).
- Bundling makes the app fully offline, which is required for a native (Capacitor) store build.
- Copy only the 28 instruments used, put the MIT and CC BY notices in a `LICENSES/` folder next to them, and list them on the credits screen.

Suggested credit text: *"Instrument sounds: FluidR3_GM by Frank Wen (MIT licence), rendered to MP3 by Benjamin Gleitzman, midi-js-soundfonts (MIT; FluidR3_GM set released under CC BY 3.0)."*

The completion jingle and the fallback synth are generated in code (`js/audio.js`), so they need nothing.

---

## 3. Fonts, icons and logo

| Item | Location | Licence / origin | Commercial use | Action |
|---|---|---|---|---|
| **Baloo 2** (600/700/800) | Loaded from fonts.googleapis.com in `index.html` and `admin.html` | SIL Open Font License 1.1 (Ek Type) | ✅ Yes, including bundling in an app | When self-hosting, ship `OFL.txt` with the font files. Self-host for GDPR (below). |
| **Nunito** (600/700/800) | Same | SIL Open Font License 1.1 (Vernon Adams et al.) | ✅ Yes | Same |
| Instrument icons | `js/icons.js` (hand-drawn inline SVG) | Made for this project | ✅ Owner's own work | None. If they were AI-generated or traced from a reference, note that in the credits file. |
| Piano speech bubble, sparks, note dot, wordmark | `js/brand.js` (inline SVG) | Made for this project | ✅ | None |
| Song and theme emoji (⭐ 🔔 …) | Unicode characters in the song files and `js/app.js` | Drawn by the device's own emoji font; no image files are shipped | ✅ | Don't put Apple, Google or other vendor emoji artwork into store screenshots or marketing images without checking that vendor's terms. |
| **Moose logo** | `assets/moose.png`, `assets/lilla-lingua-logo-original.webp`, `assets/apple-touch-icon.png`, and a PNG embedded in `icon.svg` | Taken from the owner's own Lilla Lingua site (README: "Moose artwork from Lilla Lingua") | ⚠️ **Owner to confirm** | Confirm who drew the moose and on what terms (own drawing, commissioned with a written transfer of rights, stock licence, or AI-generated under the tool's terms). Also confirm that the rights cover a separate paid product and app-store icons. Check for trademark conflicts on "Lilla Piano" / "Lilla Lingua" in the store categories. |

**GDPR note on Google Fonts.** Loading fonts from Google's servers sends each visitor's IP address to Google. A German court (LG München I, Jan 2022) found this unlawful without consent. For a paid app aimed at European families, self-host both fonts (the OFL allows this).

---

## 4. Actions needed before charging money (in priority order)

1. **Remove or replace the 16 SymbTr Turkish songs** (section 1.2). They are CC BY-NC-SA, so they can't be in any commercial build, free tier included. Either get a written commercial licence from MTG/UPF, or re-transcribe the tunes from clean sources. Üsküdar can start from the Commons LilyPond. Until then, ship without them.
2. **Confirm the rights to the moose logo and the app icons** (owner). Get a written record of who made the artwork and that it can be used in a separate paid app and in store listings.
3. **Self-host the instrument samples** with their MIT and CC BY 3.0 notices, and stop loading from gleitz.github.io. Correct the "MIT licence" wording in `js/samples.js` and README.md to "MIT (FluidR3_GM sf2) / CC BY 3.0 (gleitz MP3 set)".
4. **Fix the 14 ⚠️ songs** (section 1.3):
   - Replace the 3 music21-derived Bach/Handel transcriptions.
   - Add a second source for Staffan.
   - Confirm that Angels We Have Heard on High doesn't follow Barnes's harmony.
   - Add source comments to the six uncommented Swedish songs.
   - Optionally adjust the titles of Hjulen, Hull a pelyhes, Daha dün annemizin and Shchedryk ("Carol of the Bells").
5. **Add an in-app Credits / Licences screen and a `LICENSES/` folder.** It should cover:
   - the FluidR3_GM and gleitz notices
   - the OFL for both fonts
   - Chopin First Editions (CC BY 4.0, Fryderyk Chopin Institute)
   - the Monti Commons scan (CC BY 3.0)
   - a general credit to Mutopia, Wikipedia/Wikimedia Commons (CC BY-SA), OpenScore (CC0), Svenskt visarkiv, Mama Lisa's World, dalok.theisz.hu and nashe.com.ua
   
   Attribution required by CC BY must be visible to users, not only in the git repo.
6. **Self-host Baloo 2 and Nunito** (GDPR), and add `OFL.txt`.
7. **Move hosting off GitHub Pages** (to Netlify, Cloudflare Pages or Vercel on a commercial plan, or your own server) before taking payments, because GitHub's terms exclude commercial or SaaS use of Pages.
8. **Not licensing, but also needed before launch:** the stats endpoint (`js/config.js` → Google Apps Script) stores children's first names. A paid app needs a privacy policy and parental consent (GDPR Art. 8, and COPPA for US users), and the app-store "Kids" categories have their own data rules.

---

## Appendix: every song

Status: ✅ public domain or traditional, OK · ⚠️ needs a source check · ❌ NOT OK for commercial use.

| File | Song id | Title | Composer | Status | Note |
|---|---|---|---|---|---|
| songs-anthems.js | `du-gamla-du-fria` | Du gamla, du fria |  | ✅ OK |  |
| songs-anthems.js | `himnusz` | Himnusz |  | ✅ OK |  |
| songs-classical-a.js | `minuet-in-g-petzold` | Menuett G-Dur | Petzold | ✅ OK |  |
| songs-classical-a.js | `musette-in-d` | Musette D-Dur | J. S. Bach | ✅ OK |  |
| songs-classical-a.js | `bach-air` | Air | J. S. Bach | ✅ OK |  |
| songs-classical-a.js | `hallelujah-handel` | Hallelujah | Handel | ✅ OK |  |
| songs-classical-a.js | `pachelbel-canon` | Kanon in D | Pachelbel | ✅ OK |  |
| songs-classical-a.js | `vivaldi-spring` | La primavera | Vivaldi | ✅ OK |  |
| songs-classical-a.js | `vivaldi-winter-largo` | L'inverno | Vivaldi | ✅ OK |  |
| songs-classical-a.js | `boccherini-minuet` | Minuetto | Boccherini | ✅ OK |  |
| songs-classical-a.js | `mozart-ah-vous-dirai-je` | Ah vous dirai-je, maman | Mozart | ✅ OK |  |
| songs-classical-a.js | `eine-kleine-nachtmusik` | Eine kleine Nachtmusik | Mozart | ✅ OK |  |
| songs-classical-a.js | `rondo-alla-turca` | Alla Turca | Mozart | ✅ OK |  |
| songs-classical-a.js | `mozart-sonata-facile` | Sonata facile | Mozart | ✅ OK |  |
| songs-classical-a.js | `mozart-minuet-k2` | Menuett F-Dur | Mozart | ✅ OK |  |
| songs-classical-a.js | `schlafe-mein-prinzchen` | Schlafe, mein Prinzchen | Flies | ✅ OK |  |
| songs-classical-a.js | `haydn-surprise` | Sinfonie mit dem Paukenschlag | Haydn | ✅ OK |  |
| songs-classical-a.js | `gott-erhalte-franz-den-kaiser` | Gott erhalte Franz den Kaiser | Haydn | ✅ OK |  |
| songs-classical-a.js | `ode-an-die-freude` | Ode an die Freude | Beethoven | ✅ OK |  |
| songs-classical-a.js | `fur-elise` | Für Elise | Beethoven | ✅ OK |  |
| songs-classical-a.js | `moonlight-sonata` | Mondscheinsonate | Beethoven | ✅ OK |  |
| songs-classical-a.js | `beethoven-5-opening` | 5. Sinfonie | Beethoven | ✅ OK |  |
| songs-classical-a.js | `rameau-tambourin` | Tambourin | Rameau | ✅ OK |  |
| songs-classical-a.js | `handel-sarabande` | Sarabande | Handel | ✅ OK |  |
| songs-classical-b.js | `schubert-heidenroslein` | Heidenröslein | Schubert | ✅ OK |  |
| songs-classical-b.js | `schubert-ave-maria` | Ave Maria | Schubert | ✅ OK |  |
| songs-classical-b.js | `blue-danube` | An der schönen blauen Donau | Strauss | ✅ OK |  |
| songs-classical-b.js | `brahms-wiegenlied` | Wiegenlied | Brahms | ✅ OK |  |
| songs-classical-b.js | `mendelssohn-wedding-march` | Hochzeitsmarsch | Mendelssohn | ✅ OK |  |
| songs-classical-b.js | `happy-farmer` | Fröhlicher Landmann | Schumann | ✅ OK |  |
| songs-classical-b.js | `traumerei` | Träumerei | Schumann | ✅ OK |  |
| songs-classical-b.js | `old-french-song` | Old French Song | Tchaikovsky | ✅ OK |  |
| songs-classical-b.js | `march-of-the-wooden-soldiers` | March of the Wooden Soldiers | Tchaikovsky | ✅ OK |  |
| songs-classical-b.js | `hall-of-the-mountain-king` | I Dovregubbens hall | Grieg | ✅ OK |  |
| songs-classical-b.js | `chopin-nocturne-op9-2` | Nocturne Op. 9 No. 2 | Chopin | ✅ OK |  |
| songs-classical-b.js | `chopin-prelude-e-minor` | Prélude Op. 28 No. 4 | Chopin | ✅ OK |  |
| songs-classical-b.js | `gymnopedie-1` | Gymnopédie No. 1 | Satie | ✅ OK |  |
| songs-classical-b.js | `toreador-song` | Toréador | Bizet | ✅ OK |  |
| songs-classical-b.js | `brindisi-traviata` | Libiamo ne’ lieti calici | Verdi | ✅ OK |  |
| songs-classical-b.js | `i-vow-to-thee-my-country` | I Vow to Thee, My Country | Holst | ✅ OK |  |
| songs-classical-c.js | `bach-toccata-d-minor` | Toccata und Fuge d-Moll | J. S. Bach | ✅ OK |  |
| songs-classical-c.js | `bach-sheep-may-safely-graze` | Schafe können sicher weiden | J. S. Bach | ✅ OK |  |
| songs-classical-c.js | `bach-jesu-joy` | Jesus bleibet meine Freude | J. S. Bach | ✅ OK |  |
| songs-classical-c.js | `bach-bourree-e-minor` | Bourrée e-Moll | J. S. Bach | ✅ OK |  |
| songs-classical-c.js | `bach-minuet-g-minor` | Menuett g-Moll | J. S. Bach | ✅ OK |  |
| songs-classical-c.js | `bach-polonaise-g-minor` | Polonaise g-Moll | J. S. Bach | ✅ OK |  |
| songs-classical-c.js | `bach-gavotte-french-suite-5` | Gavotte (Französische Suite Nr. 5) | J. S. Bach | ✅ OK |  |
| songs-classical-c.js | `bach-invention-1` | Invention Nr. 1 C-Dur | J. S. Bach | ✅ OK |  |
| songs-classical-c.js | `bach-arioso` | Arioso | J. S. Bach | ✅ OK |  |
| songs-classical-c.js | `bach-siciliano` | Siciliano | J. S. Bach | ✅ OK |  |
| songs-classical-c.js | `bach-wachet-auf` | Wachet auf, ruft uns die Stimme | J. S. Bach | ⚠️ Check | From the music21 corpus, where some encodings are non-commercial. Re-transcribe from Mutopia/IMSLP |
| songs-classical-c.js | `bach-o-haupt-voll-blut` | O Haupt voll Blut und Wunden | J. S. Bach | ⚠️ Check | From the music21 corpus, where some encodings are non-commercial. Re-transcribe from Mutopia/IMSLP |
| songs-classical-c.js | `handel-lascia-chio-pianga` | Lascia ch'io pianga | Handel | ⚠️ Check | From the music21 corpus, where some encodings are non-commercial. Re-transcribe from Mutopia/IMSLP |
| songs-classical-c.js | `bach-goldberg-aria` | Aria (Goldberg-Variationen) | J. S. Bach | ✅ OK |  |
| songs-classical-c.js | `bach-double-violin-concerto` | Doppelkonzert d-Moll | J. S. Bach | ✅ OK |  |
| songs-classical-c.js | `vivaldi-summer-presto` | L'estate – Presto | Vivaldi | ✅ OK |  |
| songs-classical-c.js | `vivaldi-autumn` | L'autunno | Vivaldi | ✅ OK |  |
| songs-classical-c.js | `handel-la-rejouissance` | La Réjouissance | Handel | ✅ OK |  |
| songs-classical-c.js | `handel-pifa` | Pifa (Pastoral Symphony) | Handel | ✅ OK |  |
| songs-classical-c.js | `bach-cello-suite-1-prelude` | Prélude (Cellosuite Nr. 1) | J. S. Bach | ✅ OK |  |
| songs-classical-c.js | `bach-brich-an` | Brich an, o schönes Morgenlicht | J. S. Bach | ✅ OK |  |
| songs-classical-c.js | `vivaldi-concerto-a-minor-op3-6` | Concerto a-Moll, Op. 3 Nr. 6 | Vivaldi | ✅ OK |  |
| songs-classical-d.js | `beethoven-pathetique-adagio` | Pathétique – Adagio cantabile | Beethoven | ✅ OK |  |
| songs-classical-d.js | `beethoven-symphony-7-allegretto` | Sinfonie Nr. 7 – Allegretto | Beethoven | ✅ OK |  |
| songs-classical-d.js | `mozart-symphony-40` | Sinfonie Nr. 40 | Mozart | ✅ OK |  |
| songs-classical-d.js | `mozart-jupiter-finale` | Jupiter-Sinfonie – Finale | Mozart | ✅ OK |  |
| songs-classical-d.js | `beethoven-romance-in-f` | Romanze F-Dur | Beethoven | ✅ OK |  |
| songs-classical-d.js | `beethoven-sonata-op49-2-menuetto` | Sonate G-Dur – Menuett | Beethoven | ✅ OK |  |
| songs-classical-d.js | `beethoven-pathetique-rondo` | Pathétique – Rondo | Beethoven | ✅ OK |  |
| songs-classical-d.js | `beethoven-violin-concerto-rondo` | Violinkonzert – Rondo | Beethoven | ✅ OK |  |
| songs-classical-d.js | `beethoven-eroica` | Eroica | Beethoven | ✅ OK |  |
| songs-classical-d.js | `mozart-bei-mannern` | Bei Männern, welche Liebe fühlen | Mozart | ✅ OK |  |
| songs-classical-d.js | `mozart-march-of-the-priests` | Marsch der Priester | Mozart | ✅ OK |  |
| songs-classical-d.js | `mozart-dies-irae` | Dies irae | Mozart | ✅ OK |  |
| songs-classical-d.js | `mozart-piano-concerto-23-adagio` | Klavierkonzert Nr. 23 – Adagio | Mozart | ✅ OK |  |
| songs-classical-d.js | `beethoven-moonlight-allegretto` | Mondscheinsonate – Allegretto | Beethoven | ✅ OK |  |
| songs-classical-d.js | `mozart-queen-of-the-night` | Der Hölle Rache | Mozart | ✅ OK |  |
| songs-classical-d.js | `mozart-sonata-k331-theme` | Sonate A-Dur – Tema | Mozart | ✅ OK |  |
| songs-classical-d.js | `mozart-sonata-k545-andante` | Sonata facile – Andante | Mozart | ✅ OK |  |
| songs-classical-d.js | `mozart-ave-verum-corpus` | Ave verum corpus | Mozart | ✅ OK |  |
| songs-classical-d.js | `clementi-sonatina-op36-1` | Sonatina in C | Clementi | ✅ OK |  |
| songs-classical-d.js | `mozart-fantasia-k397-allegretto` | Fantasie d-Moll – Allegretto | Mozart | ✅ OK |  |
| songs-classical-d.js | `mozart-horn-concerto-4-rondo` | Hornkonzert Nr. 4 – Rondo | Mozart | ✅ OK |  |
| songs-classical-d.js | `mozart-nachtmusik-romanze` | Eine kleine Nachtmusik – Romanze | Mozart | ✅ OK |  |
| songs-classical-d.js | `mozart-clarinet-concerto-adagio` | Klarinettenkonzert – Adagio | Mozart | ✅ OK |  |
| songs-classical-d.js | `mozart-symphony-25` | Sinfonie Nr. 25 | Mozart | ✅ OK |  |
| songs-classical-e.js | `chopin-raindrop-prelude` | Prélude „Deszczowe” | Chopin | ✅ OK |  |
| songs-classical-e.js | `chopin-prelude-a-major` | Prélude A-dur | Chopin | ✅ OK |  |
| songs-classical-e.js | `chopin-minute-waltz` | Walc „Minutowy” | Chopin | ✅ OK |  |
| songs-classical-e.js | `schubert-standchen` | Ständchen | Schubert | ✅ OK |  |
| songs-classical-e.js | `chopin-waltz-c-sharp-minor` | Walc cis-moll | Chopin | ✅ OK | CFE, CC BY 4.0: credit required |
| songs-classical-e.js | `chopin-waltz-op69-1` | Walc As-dur „Pożegnalny” | Chopin | ✅ OK | CFE, CC BY 4.0: credit required |
| songs-classical-e.js | `chopin-funeral-march` | Marsz żałobny | Chopin | ✅ OK | CFE, CC BY 4.0: credit required |
| songs-classical-e.js | `chopin-tristesse` | Etiuda E-dur „Tristesse” | Chopin | ✅ OK | CFE, CC BY 4.0: credit required |
| songs-classical-e.js | `schubert-moment-musical-3` | Moment musical Nr. 3 | Schubert | ✅ OK |  |
| songs-classical-e.js | `paganini-caprice-24` | Capriccio n. 24 | Paganini | ✅ OK |  |
| songs-classical-e.js | `schumann-melodie` | Melodie | Schumann | ✅ OK |  |
| songs-classical-e.js | `schumann-wilder-reiter` | Wilder Reiter | Schumann | ✅ OK |  |
| songs-classical-e.js | `schumann-soldatenmarsch` | Soldatenmarsch | Schumann | ✅ OK |  |
| songs-classical-e.js | `schumann-von-fremden-landern` | Von fremden Ländern und Menschen | Schumann | ✅ OK |  |
| songs-classical-e.js | `schubert-die-forelle` | Die Forelle | Schubert | ✅ OK |  |
| songs-classical-e.js | `schubert-der-lindenbaum` | Der Lindenbaum | Schubert | ✅ OK |  |
| songs-classical-e.js | `schubert-wiegenlied` | Wiegenlied | Schubert | ✅ OK |  |
| songs-classical-e.js | `schubert-trout-quintet` | Forellenquintett | Schubert | ✅ OK |  |
| songs-classical-e.js | `schubert-unfinished-symphony` | Unvollendete | Schubert | ✅ OK |  |
| songs-classical-e.js | `mendelssohn-violin-concerto` | Violinkonzert e-Moll | Mendelssohn | ✅ OK |  |
| songs-classical-e.js | `schubert-rosamunde-impromptu` | Impromptu B-Dur (Rosamunde-Thema) | Schubert | ✅ OK |  |
| songs-classical-e.js | `schubert-marche-militaire` | Marche militaire Nr. 1 | Schubert | ✅ OK |  |
| songs-classical-e.js | `liszt-consolation-3` | Consolation No. 3 | Liszt | ✅ OK |  |
| songs-classical-e.js | `strauss-thunder-and-lightning` | Unter Donner und Blitz | J. Strauss II | ✅ OK |  |
| songs-classical-e.js | `mendelssohn-venetian-boat-song` | Venetianisches Gondellied | Mendelssohn | ✅ OK |  |
| songs-classical-e.js | `chopin-fantaisie-impromptu` | Fantaisie-Impromptu | Chopin | ✅ OK | CFE, CC BY 4.0: credit required |
| songs-classical-e.js | `chopin-mazurka-op7-1` | Mazurek B-dur | Chopin | ✅ OK | CFE, CC BY 4.0: credit required |
| songs-classical-e.js | `schubert-ave-maria-full` | Ave Maria (ganze Strophe) | Schubert | ✅ OK |  |
| songs-classical-f.js | `bizet-habanera` | L'amour est un oiseau rebelle | Bizet | ✅ OK |  |
| songs-classical-f.js | `gounod-ave-maria` | Ave Maria | Gounod | ✅ OK |  |
| songs-classical-f.js | `verdi-la-donna-e-mobile` | La donna è mobile | Verdi | ✅ OK |  |
| songs-classical-f.js | `bizet-carmen-prelude` | Carmen – Prélude | Bizet | ✅ OK |  |
| songs-classical-f.js | `brahms-waltz-op39-15` | Walzer As-Dur, Op. 39 Nr. 15 | Brahms | ✅ OK |  |
| songs-classical-f.js | `brahms-intermezzo-op118-2` | Intermezzo A-Dur, Op. 118 Nr. 2 | Brahms | ✅ OK |  |
| songs-classical-f.js | `wagner-bridal-chorus` | Treulich geführt | Wagner | ✅ OK |  |
| songs-classical-f.js | `delibes-flower-duet` | Sous le dôme épais | Delibes | ✅ OK |  |
| songs-classical-f.js | `puccini-humming-chorus` | Coro a bocca chiusa | Puccini | ✅ OK |  |
| songs-classical-f.js | `bizet-farandole` | Farandole | Bizet | ✅ OK |  |
| songs-classical-f.js | `mahler-bruder-martin` | Bruder Martin (Sinfonie Nr. 1) | Mahler | ✅ OK |  |
| songs-classical-f.js | `humperdinck-abendsegen` | Abends, will ich schlafen gehn | Humperdinck | ✅ OK |  |
| songs-classical-f.js | `wagner-evening-star` | O du mein holder Abendstern | Wagner | ✅ OK |  |
| songs-classical-f.js | `wagner-pilgrims-chorus` | Pilgerchor | Wagner | ✅ OK |  |
| songs-classical-f.js | `brahms-hungarian-dance-5` | Ungarischer Tanz Nr. 5 | Brahms | ✅ OK |  |
| songs-classical-f.js | `brahms-hungarian-dance-6` | Ungarischer Tanz Nr. 6 | Brahms | ✅ OK |  |
| songs-classical-f.js | `brahms-gaudeamus-igitur` | Gaudeamus igitur | Brahms | ✅ OK |  |
| songs-classical-g.js | `elgar-nimrod` | Nimrod | Elgar | ✅ OK |  |
| songs-classical-g.js | `grieg-death-of-ase` | Åses død | Grieg | ✅ OK |  |
| songs-classical-g.js | `smetana-vltava` | Vltava | Smetana | ✅ OK |  |
| songs-classical-g.js | `rimsky-korsakov-scheherazade` | Шехеразада | Rimsky-Korsakov | ✅ OK |  |
| songs-classical-g.js | `elgar-chanson-de-matin` | Chanson de matin | Elgar | ✅ OK |  |
| songs-classical-g.js | `mussorgsky-great-gate-of-kiev` | Богатырские ворота | Mussorgsky | ✅ OK |  |
| songs-classical-g.js | `dvorak-new-world-largo` | Largo (Z Nového světa) | Dvořák | ✅ OK |  |
| songs-classical-g.js | `tchaikovsky-neapolitan-dance` | Неаполитанский танец | Tchaikovsky | ✅ OK |  |
| songs-classical-g.js | `grieg-wedding-day-at-troldhaugen` | Bryllupsdag på Troldhaugen | Grieg | ✅ OK |  |
| songs-classical-g.js | `grieg-anitras-dance` | Anitras dans | Grieg | ✅ OK |  |
| songs-classical-g.js | `satie-gymnopedie-3` | Gymnopédie No. 3 | Satie | ✅ OK |  |
| songs-classical-g.js | `satie-gnossienne-1` | Gnossienne No. 1 | Satie | ✅ OK |  |
| songs-classical-g.js | `tarrega-lagrima` | Lágrima | Tárrega | ✅ OK |  |
| songs-classical-g.js | `tarrega-recuerdos-de-la-alhambra` | Recuerdos de la Alhambra | Tárrega | ✅ OK |  |
| songs-classical-g.js | `grieg-morning-mood` | Morgenstemning | Grieg | ✅ OK |  |
| songs-classical-g.js | `tchaikovsky-1812-overture` | Торжественная увертюра «1812 год» | Tchaikovsky | ✅ OK |  |
| songs-classical-g.js | `tchaikovsky-swan-lake` | Лебединое озеро | Tchaikovsky | ✅ OK |  |
| songs-classical-g.js | `saint-saens-the-swan` | Le cygne | Saint-Saëns | ✅ OK |  |
| songs-classical-g.js | `faure-pie-jesu` | Pie Jesu | Fauré | ✅ OK |  |
| songs-classical-g.js | `debussy-clair-de-lune` | Clair de lune | Debussy | ✅ OK |  |
| songs-classical-g.js | `joplin-the-entertainer` | The Entertainer | Joplin | ✅ OK |  |
| songs-classical-g.js | `faure-apres-un-reve` | Après un rêve | Fauré | ✅ OK |  |
| songs-classical-g.js | `faure-pavane` | Pavane | Fauré | ✅ OK |  |
| songs-classical-g.js | `faure-dolly-berceuse` | Berceuse (Dolly) | Fauré | ✅ OK |  |
| songs-classical-g.js | `dvorak-songs-my-mother-taught-me` | Když mne stará matka | Dvořák | ✅ OK |  |
| songs-classical-g.js | `monti-csardas-largo` | Csárdás – Largo | Monti | ✅ OK | Commons source is CC BY 3.0, so credit it |
| songs-classical-g.js | `monti-csardas-allegro` | Csárdás – Allegro vivo | Monti | ✅ OK | Check the licence of the IMSLP dos Santos edition (melody is PD) |
| songs-hu.js | `boci-boci-tarka` | Boci, boci tarka |  | ✅ OK |  |
| songs-hu.js | `csip-csip-csoka` | Csíp, csíp, csóka |  | ✅ OK |  |
| songs-hu.js | `suss-fel-nap` | Süss fel, nap! |  | ✅ OK |  |
| songs-hu.js | `erdo-erdo-erdo` | Erdő, erdő, erdő |  | ✅ OK |  |
| songs-hu.js | `lanc-lanc-eszterlanc` | Lánc, lánc, eszterlánc |  | ✅ OK |  |
| songs-hu.js | `eg-a-gyertya` | Ég a gyertya, ég |  | ✅ OK |  |
| songs-hu.js | `tavaszi-szel` | Tavaszi szél vizet áraszt |  | ✅ OK |  |
| songs-hu.js | `kis-kece-lanyom` | Kis kece lányom |  | ✅ OK |  |
| songs-hu.js | `cifra-palota` | Cifra palota |  | ✅ OK |  |
| songs-hu.js | `bujj-bujj-zold-ag` | Bújj, bújj, zöld ág |  | ✅ OK |  |
| songs-hu.js | `mennybol-az-angyal` | Mennyből az angyal |  | ✅ OK |  |
| songs-hu.js | `kiskaracsony-nagykaracsony` | Kiskarácsony, nagykarácsony |  | ✅ OK |  |
| songs-hu.js | `pasztorok-keljunk-fel` | Pásztorok, keljünk fel |  | ✅ OK |  |
| songs-hu.js | `pasztorok-orvendezve` | Pásztorok, pásztorok örvendezve |  | ✅ OK |  |
| songs-hu.js | `kis-jezus-megszuletett` | A kis Jézus megszületett |  | ✅ OK |  |
| songs-hu.js | `csiga-biga` | Csiga-biga, gyere ki! |  | ✅ OK |  |
| songs-hu.js | `a-part-alatt` | A part alatt |  | ✅ OK |  |
| songs-hu.js | `hinta-palinta` | Hinta, palinta |  | ✅ OK |  |
| songs-hu.js | `en-elmentem-a-vasarba` | Én elmentem a vásárba |  | ✅ OK |  |
| songs-hu.js | `egy-boszorka-van` | Egy boszorka van |  | ✅ OK |  |
| songs-hu.js | `katalinka-szallj-el` | Katalinka, szállj el! |  | ✅ OK |  |
| songs-hu.js | `kis-kacsa-furdik` | Kis kacsa fürdik |  | ✅ OK |  |
| songs-hu.js | `cirmos-cica-haj` | Cirmos cica, haj! |  | ✅ OK |  |
| songs-hu.js | `hopp-juliska` | Hopp, Juliska! |  | ✅ OK |  |
| songs-hu.js | `aki-nem-lep-egyszerre` | Aki nem lép egyszerre |  | ✅ OK |  |
| songs-hu.js | `elvesztettem-zsebkendomet` | Elvesztettem zsebkendőmet |  | ✅ OK |  |
| songs-hu.js | `golya-golya-gilice` | Gólya, gólya, gilice |  | ✅ OK |  |
| songs-hu.js | `pal-kata-peter` | Pál, Kata, Péter, jó reggelt! |  | ✅ OK |  |
| songs-hu.js | `setalunk-setalunk` | Sétálunk, sétálunk |  | ✅ OK |  |
| songs-hu.js | `zsipp-zsupp` | Zsipp-zsupp, kenderzsupp |  | ✅ OK |  |
| songs-hu.js | `tente-baba-tente` | Tente, baba, tente |  | ✅ OK |  |
| songs-hu.js | `hova-megy-te-kis-nyulacska` | Hová mégy te, kis nyulacska? |  | ✅ OK |  |
| songs-hu.js | `megfogtam-egy-szunyogot` | Megfogtam egy szúnyogot |  | ✅ OK |  |
| songs-hu.js | `a-gunarom-elveszett` | A gúnárom elveszett |  | ✅ OK |  |
| songs-hu.js | `csicseriborso` | Csicseriborsó, bab, lencse |  | ✅ OK |  |
| songs-hu.js | `hazasodik-a-tucsok` | Házasodik a tücsök |  | ✅ OK |  |
| songs-hu.js | `volt-nekem-egy-kecskem` | Volt nekem egy kecském |  | ✅ OK |  |
| songs-hu.js | `macko-macko-ugorjal` | Mackó, mackó, ugorjál! |  | ✅ OK |  |
| songs-hu.js | `ha-en-cica-volnek` | Ha én cica volnék |  | ✅ OK |  |
| songs-hu.js | `debrecenbe-kene-menni` | Debrecenbe kéne menni |  | ✅ OK |  |
| songs-hu.js | `sarga-csiko` | Sárga csikó |  | ✅ OK |  |
| songs-hu.js | `cson-cson-gyuru` | Csön-csön gyűrű |  | ✅ OK |  |
| songs-hu.js | `mit-mos-mit-mos` | Mit mos, mit mos Levél Katicája? |  | ✅ OK |  |
| songs-hu.js | `feher-liliomszal` | Fehér liliomszál |  | ✅ OK |  |
| songs-hu.js | `megy-a-gozos` | Megy a gőzös |  | ✅ OK |  |
| songs-hu.js | `virageknal-eg-a-vilag` | Virágéknál ég a világ |  | ✅ OK |  |
| songs-hu.js | `kiment-a-haz-az-ablakon` | Kiment a ház az ablakon |  | ✅ OK |  |
| songs-hu.js | `hej-vargane` | Hej, Vargáné káposztát főz |  | ✅ OK |  |
| songs-hu.js | `harom-szabolegenyek` | Három szabólegények |  | ✅ OK |  |
| songs-hu.js | `hej-dunarol-fuj-a-szel` | Hej, Dunáról fúj a szél |  | ✅ OK |  |
| songs-hu.js | `aludj-baba-aludjal` | Aludj, baba, aludjál! |  | ✅ OK |  |
| songs-hu.js | `csillagok-csillagok` | Csillagok, csillagok |  | ✅ OK |  |
| songs-hu.js | `ket-szal-punkosdrozsa` | Két szál pünkösdrózsa |  | ✅ OK |  |
| songs-hu.js | `erik-a-szolo` | Érik a szőlő |  | ✅ OK |  |
| songs-hu.js | `hull-a-szilva-a-farol` | Hull a szilva a fáról |  | ✅ OK |  |
| songs-hu.js | `esik-az-eso` | Esik az eső, hajlik a vessző |  | ✅ OK |  |
| songs-hu.js | `hull-a-pelyhes` | Hull a pelyhes fehér hó |  | ⚠️ Check | Title is the first line of Rossa Ernő's lyric (d. 1972). Tune is PD |
| songs-hu.js | `csendes-ej` | Csendes éj |  | ✅ OK |  |
| songs-se-extra.js | `ro-ro-barnet` | Ro, ro, barnet |  | ✅ OK |  |
| songs-se-extra.js | `rida-ranka` | Rida, rida ranka |  | ✅ OK |  |
| songs-se-extra.js | `baka-kaka` | Baka, baka kaka |  | ✅ OK |  |
| songs-se-extra.js | `katten-och-svansen` | Katten och svansen |  | ✅ OK |  |
| songs-se-extra.js | `blasippor` | Blåsippor |  | ✅ OK |  |
| songs-se-extra.js | `ute-blaser-sommarvind` | Ute blåser sommarvind |  | ✅ OK |  |
| songs-se-extra.js | `gaspus-nickus-jon-blund` | Gäspus, Nickus och Jon Blund |  | ✅ OK |  |
| songs-se-extra.js | `kring-julgranen` | Kring julgranen |  | ✅ OK |  |
| songs-se-extra.js | `den-blomstertid` | Den blomstertid nu kommer |  | ✅ OK |  |
| songs-se-extra.js | `ja-ma-han-leva` | Ja, må han leva |  | ✅ OK |  |
| songs-se-extra.js | `alla-faglar` | Alla fåglar kommit re'n |  | ✅ OK |  |
| songs-se-extra.js | `enebarssnar` | Så går vi runt om ett enebärssnår |  | ✅ OK |  |
| songs-se-extra.js | `vi-aro-musikanter` | Vi äro musikanter |  | ✅ OK |  |
| songs-tr.js | `tembel-cocuk` | Tembel Çocuk |  | ✅ OK |  |
| songs-tr.js | `daha-dun-annemizin` | Daha Dün Annemizin |  | ⚠️ Check | Title is the first line of a later Turkish school lyric, author unknown. Tune is PD |
| songs-tr.js | `yag-satarim-bal-satarim` | Yağ Satarım Bal Satarım |  | ✅ OK |  |
| songs-tr.js | `dere-dibi-ninni` | Dere Dibi Saz Olur (Ninni) |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `dagda-tavsanlar-uyur` | Dağda Tavşanlar Uyur (Ninni) |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `uskudara-gider-iken` | Üsküdar'a Gider İken (Kâtibim) |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `cayelinden-oteye` | Çayeli'nden Öteye |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `dere-geliyor-dere` | Dere Geliyor Dere |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `sari-gelin` | Sarı Gelin |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `hey-onbesli` | Hey Onbeşli |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `gesi-baglari` | Gesi Bağları |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `cayda-cira` | Çayda Çıra |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `cemberimde-gul-oya` | Çemberimde Gül Oya |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `su-dereler-su-duzler` | Şu Dereler Şu Düzler |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `entarisi-ala-benziyor` | Entarisi Ala Benziyor |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `horozumun-tuyleri` | Horozumun Tüyleri |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `alli-turnam` | Allı Turnam |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `yagmur-yagar-tas-ustune` | Yağmur Yağar Taş Üstüne |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-tr.js | `fidayda` | Fidayda |  | ❌ NOT OK | SymbTr, CC BY-NC-SA 4.0 |
| songs-ua.js | `dva-pivnyky` | Два півники |  | ✅ OK |  |
| songs-ua.js | `kotyku-sirenkyi` | Котику сіренький |  | ✅ OK |  |
| songs-ua.js | `podolianochka` | Подоляночка |  | ✅ OK |  |
| songs-ua.js | `a-my-proso-siialy` | А ми просо сіяли |  | ✅ OK |  |
| songs-ua.js | `a-vzhe-vesna` | А вже весна |  | ✅ OK |  |
| songs-ua.js | `oi-vesna-vesna` | Ой весна, весна |  | ✅ OK |  |
| songs-ua.js | `vyidy-vyidy-sonechko` | Вийди, вийди, сонечко |  | ✅ OK |  |
| songs-ua.js | `idy-idy-doshchyku` | Іди, іди, дощику |  | ✅ OK |  |
| songs-ua.js | `oi-ty-kytsiu-kytsiu` | Ой ти, кицю, кицю |  | ✅ OK |  |
| songs-ua.js | `oi-nu-kote-kotochok` | Ой ну, коте, коточок |  | ✅ OK |  |
| songs-ua.js | `a-a-liuli` | А-а, люлі, налетіли гулі |  | ✅ OK |  |
| songs-ua.js | `liuli-vasylechku` | Люлі, люлі, Василечку |  | ✅ OK |  |
| songs-ua.js | `oi-spy-dytia` | Ой спи, дитя |  | ✅ OK |  |
| songs-ua.js | `hrytsiu-do-roboty` | Грицю, Грицю, до роботи |  | ✅ OK |  |
| songs-ua.js | `oi-za-haiem-haiem` | Ой за гаєм, гаєм |  | ✅ OK |  |
| songs-ua.js | `oi-syvaia-zozulenka` | Ой сивая та і зозуленька |  | ✅ OK |  |
| songs-ua.js | `shchedryk-shchedrivochka` | Щедрик, щедрик, щедрівочка |  | ✅ OK |  |
| songs-ua.js | `shchedryk` | Щедрик |  | ⚠️ Check | titleEn uses "Carol of the Bells", the title of Wilhousky's 1936 English lyric (d. 1978). Tune is PD |
| songs-ua.js | `dobryi-vechir-tobi` | Добрий вечір тобі |  | ✅ OK |  |
| songs-ua.js | `nova-radist-stala` | Нова радість стала |  | ✅ OK |  |
| songs-ua.js | `boh-sia-rozhdaie` | Бог ся рождає |  | ✅ OK |  |
| songs-ua.js | `ho-ho-ho-koza` | Го-го-го, коза |  | ✅ OK |  |
| songs-xmas-en.js | `we-wish-you-a-merry-christmas` | We Wish You a Merry Christmas |  | ✅ OK |  |
| songs-xmas-en.js | `deck-the-halls` | Deck the Halls |  | ✅ OK |  |
| songs-xmas-en.js | `joy-to-the-world` | Joy to the World |  | ✅ OK |  |
| songs-xmas-en.js | `o-come-all-ye-faithful` | O Come, All Ye Faithful |  | ✅ OK |  |
| songs-xmas-en.js | `hark-the-herald-angels-sing` | Hark! The Herald Angels Sing |  | ✅ OK |  |
| songs-xmas-en.js | `the-first-noel` | The First Noel |  | ✅ OK |  |
| songs-xmas-en.js | `les-anges-dans-nos-campagnes` | Les anges dans nos campagnes |  | ⚠️ Check | Main source is the Barnes arrangement (Barnes d. 1958). Confirm that melody and chords follow the traditional tune |
| songs-xmas-en.js | `minuit-chretiens` | Minuit, chrétiens |  | ✅ OK |  |
| songs-xmas-en.js | `away-in-a-manger` | Away in a Manger |  | ✅ OK |  |
| songs-xmas-en.js | `god-rest-ye-merry-gentlemen` | God Rest Ye Merry, Gentlemen |  | ✅ OK |  |
| songs-xmas-en.js | `o-little-town-of-bethlehem` | O Little Town of Bethlehem |  | ✅ OK |  |
| songs-xmas-en.js | `what-child-is-this` | What Child Is This? |  | ✅ OK |  |
| songs-xmas-en.js | `ding-dong-merrily-on-high` | Ding Dong! Merrily on High |  | ✅ OK |  |
| songs-xmas-en.js | `in-the-bleak-midwinter` | In the Bleak Midwinter |  | ✅ OK |  |
| songs-xmas-en.js | `good-king-wenceslas` | Good King Wenceslas |  | ✅ OK |  |
| songs-xmas-en.js | `the-holly-and-the-ivy` | The Holly and the Ivy |  | ✅ OK |  |
| songs-xmas-en.js | `i-saw-three-ships` | I Saw Three Ships |  | ✅ OK |  |
| songs-xmas-en.js | `go-tell-it-on-the-mountain` | Go Tell It on the Mountain |  | ✅ OK |  |
| songs-xmas-en.js | `once-in-royal-davids-city` | Once in Royal David's City |  | ✅ OK |  |
| songs-xmas-en.js | `while-shepherds-watched` | While Shepherds Watched Their Flocks |  | ✅ OK |  |
| songs-xmas-en.js | `coventry-carol` | Coventry Carol |  | ✅ OK |  |
| songs-xmas-en.js | `we-three-kings` | We Three Kings |  | ✅ OK |  |
| songs-xmas-en.js | `the-twelve-days-of-christmas` | The Twelve Days of Christmas |  | ✅ OK | Austin (d. 1952): PD in life+70 countries since 2023 |
| songs-xmas-en.js | `il-est-ne-le-divin-enfant` | Il est né, le divin Enfant |  | ✅ OK |  |
| songs-xmas-eu.js | `stille-nacht` | Stille Nacht, heilige Nacht |  | ✅ OK |  |
| songs-xmas-eu.js | `o-tannenbaum` | O Tannenbaum |  | ✅ OK |  |
| songs-xmas-eu.js | `o-du-frohliche` | O du fröhliche |  | ✅ OK |  |
| songs-xmas-eu.js | `alle-jahre-wieder` | Alle Jahre wieder |  | ✅ OK |  |
| songs-xmas-eu.js | `kling-glockchen` | Kling, Glöckchen, klingelingeling |  | ✅ OK |  |
| songs-xmas-eu.js | `leise-rieselt-der-schnee` | Leise rieselt der Schnee |  | ✅ OK |  |
| songs-xmas-eu.js | `ihr-kinderlein-kommet` | Ihr Kinderlein, kommet |  | ✅ OK |  |
| songs-xmas-eu.js | `morgen-kinder` | Morgen, Kinder, wird’s was geben |  | ✅ OK |  |
| songs-xmas-eu.js | `morgen-kommt-der-weihnachtsmann` | Morgen kommt der Weihnachtsmann |  | ✅ OK |  |
| songs-xmas-eu.js | `susser-die-glocken` | Süßer die Glocken nie klingen |  | ✅ OK |  |
| songs-xmas-eu.js | `lasst-uns-froh` | Lasst uns froh und munter sein |  | ✅ OK |  |
| songs-xmas-eu.js | `es-ist-ein-ros` | Es ist ein Ros entsprungen |  | ✅ OK |  |
| songs-xmas-eu.js | `kommet-ihr-hirten` | Kommet, ihr Hirten |  | ✅ OK |  |
| songs-xmas-eu.js | `staffan-var-en-stalledrang` | Staffan var en stalledräng |  | ⚠️ Check | Only source is Knut Brodin's "Julens visor" (Brodin d. 1983). Add a pre-1955 or traditional source |
| songs-xmas-eu.js | `jul-jul-stralande-jul` | Jul, jul, strålande jul |  | ✅ OK | Nordqvist d. 1949 |
| songs-xmas-eu.js | `raska-fotter` | Raska fötter springa tripp, tripp, tripp |  | ✅ OK |  |
| songs-xmas-eu.js | `bereden-vag` | Bereden väg för Herran |  | ✅ OK |  |
| songs-xmas-eu.js | `fel-nagy-oromre` | Fel nagy örömre |  | ✅ OK |  |
| songs-xmas-eu.js | `dicsoseg-mennyben` | Dicsőség mennyben az Istennek |  | ✅ OK |  |
| songs-xmas-eu.js | `o-gyonyoru-szep` | Ó, gyönyörű szép, titokzatos éj |  | ✅ OK |  |
| songs.js | `blinka` | Blinka lilla stjärna |  | ⚠️ Check | No source comment (tune is PD, "Ah! vous dirai-je, maman") |
| songs.js | `broder-jakob` | Broder Jakob |  | ⚠️ Check | No source comment (tune is PD, "Frère Jacques") |
| songs.js | `ro-ro` | Ro, ro, ro din båt |  | ⚠️ Check | No source comment (tune is PD, Lyte 1881) |
| songs.js | `imse-vimse` | Imse vimse spindel |  | ⚠️ Check | No source comment (tune traditional, printed 1910) |
| songs.js | `hjulen` | Hjulen på bussen |  | ⚠️ Check | No source comment; title from Verna Hills's lyric (d. 1990, copyrighted). Tune is the PD "Mulberry Bush" |
| songs.js | `per-olsson` | Per Olsson hade en bondgård |  | ⚠️ Check | No source comment (tune traditional, "Old MacDonald") |
| songs.js | `bjornen-sover` | Björnen sover |  | ✅ OK |  |
| songs.js | `ba-ba-vita-lamm` | Bä, bä, vita lamm |  | ✅ OK |  |
| songs.js | `gubben-noak` | Gubben Noak |  | ✅ OK |  |
| songs.js | `mors-lilla-olle` | Mors lilla Olle |  | ✅ OK |  |
| songs.js | `sockerbagare` | En sockerbagare |  | ✅ OK |  |
| songs.js | `sma-grodorna` | Små grodorna |  | ✅ OK |  |
| songs.js | `ekorrn` | Ekorrn satt i granen |  | ✅ OK |  |
| songs.js | `nu-ar-det-jul-igen` | Nu är det jul igen |  | ✅ OK |  |
| songs.js | `morsgrisar` | Morsgrisar är vi allihopa |  | ✅ OK |  |
| songs.js | `raven-raskar` | Räven raskar över isen |  | ✅ OK |  |
| songs.js | `nu-tandas` | Nu tändas tusen juleljus |  | ✅ OK |  |
| songs.js | `lusse-lelle` | Lusse lelle |  | ✅ OK |  |
| songs.js | `sankta-lucia` | Sankta Lucia |  | ✅ OK |  |
| songs.js | `bjallerklang` | Bjällerklang |  | ✅ OK |  |
