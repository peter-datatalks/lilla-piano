# Lilla Piano – development plan

A toddler-friendly piano web app that works on phone, tablet and desktop.

## Guiding principles
- **Toddler first:** big keys, bright colours, emoji instead of text, no failure states, and every touch makes a sound.
- **Parent second:** English interface by default with Swedish as an option (EN/SV button), a simple song library, and settings out of the child's way.
- **Zero install:** a static web app (HTML/CSS/JS, no build step) that can later be installed as a PWA and work offline.

## Look and feel
The app follows the Lilla Lingua style (lillalingua.lovable.app):
- **Colours:** warm cream background, brown text, sage-green primary, terracotta accent, sun yellow and sky blue (the same oklch tokens, in `css/style.css`)
- **Type:** Baloo 2 headings, Nunito body
- **Buttons and keyboard:** soft "pressable" cards and buttons, and a keyboard in a wooden frame
- **Logo:** the Lilla Lingua moose with a piano-keys bubble instead of the language bubble (`js/brand.js`, `assets/moose.png`), plus a "Lilla Piano" wordmark in the same letter colours with a music note dotting the i. Tagline: "Little fingers. Big melodies." / "Små fingrar. Stora melodier."
- **App icon:** `icon.svg` and `assets/apple-touch-icon.png`

## Architecture
| File | Responsibility |
|---|---|
| `index.html` | App shell: top bar, stage (free play / library / song view), keyboard, celebration |
| `css/style.css` | Responsive layout, key colours, animations |
| `js/audio.js` | Web Audio engine: instrument presets, voices, reverb, scheduling |
| `js/music.js` | Note parsing, note colours and names (Swedish **H** for B), song → events/steps, left-hand generator |
| `js/songs.js` | Song library (melody + chords per bar, level, tempo) |
| `js/keyboard.js` | Keyboard rendering, multi-touch, glissando, computer-keyboard input, highlight states |
| `js/app.js` | Views, free play, listen mode, guided play, celebration, persistence |

### Song format
Each song stores its **melody** (right hand), **one chord per bar**, its `country` (se, hu), themes, original title and English title. Swedish songs live in `js/songs.js` and Hungarian songs in `js/songs-hu.js`.

When a child picks a song, the app asks **one hand or two hands?**:
- **One hand:** melody only, on a compact keyboard with extra-big keys (toddlers).
- **Two hands:** melody plus a left hand generated from the chords. Easy and medium songs get one held bass note per chord; hard songs get a moving bass (root and fifth, or oom-pah-pah in 3/4).

**Level** (easy/medium/hard) now describes the melody itself: its length, rhythm and black keys. Each song stores a star for each hand mode.

### Colour system and note views
Each note name has a fixed colour (C red, D orange, E yellow, F green, G teal, A blue, H purple).

The views take inspiration from ROLI Piano Learn (Cascade, Rainbow and ColorNote views) and the PianoLED app:
- **Cascade (built in M1):** coloured note bars fall onto the keys they belong to. In guided play they *stop at the keyboard and wait* for the child, so there is no time pressure. In listen mode they flow in time with the music. A progress bar runs along the top.
- **Rainbow (M3):** a horizontal piano roll where notes scroll from right to left.
- **ColorNote (M3):** a real treble and bass staff with coloured noteheads, to bridge into reading sheet music.

Guided play also greys out every key except the next one, which glows and bounces in its colour.

## Milestones

### M1 – Core app ✅ (this session)
- [x] Responsive colour-coded keyboard: 1 octave on phone portrait, 2 on landscape or tablet, 3 on desktop, with octave shift
- [x] Multi-touch, sliding across keys (glissando), and computer-keyboard play (A–Ö row)
- [x] 6 synthesised instruments: piano, jazz piano (Rhodes-style), organ, flute, trumpet, glockenspiel
- [x] Free play with floating notes
- [x] Song library grouped by Easy/Medium/Hard
- [x] Cascade view: falling coloured notes above the keyboard, plus a progress bar
- [x] Listen mode (notes fall in time, keys light up, slow/normal tempo)
- [x] Guided play: falling notes wait at the keyboard, next key glows, wrong keys still play (no punishment), automatic hint after 6 s idle, left/right-hand badges
- [x] Celebration (confetti, jingle, star saved on the song)
- [x] 7 songs: Blinka lilla stjärna, Broder Jakob, Ro ro ro din båt (easy); Imse vimse spindel, Hjulen på bussen (medium); Per Olsson hade en bondgård, Bjällerklang (hard)

### M2 – Better sound
- [x] Real recorded samples (FluidR3_GM, MIT licence) for 28 instruments: a full symphony orchestra (strings, woodwinds, brass, percussion, harp, celesta, organ) plus four saxophones. Notes load on demand for the visible keys and are cached, and the synth plays until they arrive.
- [x] Instrument picker grouped by orchestra family, with "Peter och vargen" animals as icons, and a top-bar strip of recently used instruments
- [ ] Bundle the samples with the app, so they no longer depend on gleitz.github.io and work fully offline
- [ ] Smoother loops for held notes (crossfaded loop points)
- [ ] Volume control, and a note for iOS users about the silent switch
- [ ] Sustain pedal and velocity based on touch pressure or area where supported

### M3 – More songs and learning
- [x] Three note views per song, switchable in the song screen: **Notes** (falling notes), **Sheet music** (scrolling staff with coloured noteheads, grand staff for two hands, rests, ties, sharps) and **Do-Re-Mi** (movable-do solfège on keys and notes, plus a sing-along syllable strip)
- [ ] Rainbow view (horizontal piano roll)
- [ ] Finger numbers on the falling notes (1–5), as in ROLI's Cascade view
- [ ] Score and streak counter for older children
- [x] 19 songs, transcribed from published scores (Tegnér's "Sjung med oss, Mamma!", Wikimedia Commons, folkwiki), each with a source comment, and filterable by theme (Barnvisor, Jul, Lucia, Midsommar)
- [x] `tools/check-songs.js`: checks bar lengths, pickup, chord count and range for every song
- [ ] Still to find notation for: Hej tomtegubbar, Staffan var en stalledräng, Prästens lilla kråka, Vi äro musikanter, Tre små gummor (retry folkwiki.se / abcnotation.com)
- [ ] Not public domain (leave out unless licensed): Vi gå över daggstänkta berg (Edwin Ericsson, d. 1968), Lilla snigel (1957, composer unknown), My Way
- [ ] Every song available at all three levels (the generator already supports this)
- [ ] Lyrics shown syllable by syllable under the dots
- [ ] Play-along mode with a slow backing track
- [ ] Rhythm mode for older children (hit notes on time)

### M4 – Parent features
- [ ] Parent area behind a "hold for 3 s" lock: settings, note labels on/off, hand badges on/off, key-range lock
- [ ] Progress per song (stars, number of times played)
- [x] English (default) / Swedish UI toggle, with note names following the language (B/H) and translated titles under each song
- [ ] Hungarian UI language

### M5 – Ship it
- [ ] PWA: service worker for offline use, landscape orientation, home-screen icon
- [ ] Hosting (GitHub Pages, Netlify or Vercel)
- [ ] Accessibility pass and testing on real devices (iPhone, iPad, Android tablet)
- [ ] Optional: Capacitor wrapper for the App Store and Google Play

## Running locally
```bash
python3 -m http.server 8765
```
Then open http://localhost:8765 (ES modules need a server, so opening the file directly does not work).
