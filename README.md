# Lilla Piano

A toddler-friendly piano web app: colourful keys, falling-note guided play, 29 recorded
instruments and Swedish and Hungarian children's songs (one-hand and two-hand versions).
English and Swedish UI. Works offline after the first visit.

- Plan and roadmap: [PLAN.md](PLAN.md)
- Plain static site: no build step. Everything in this folder is served as-is.

## Run locally

```bash
python3 -m http.server 8765
```

Open http://localhost:8765.

## Check the songs

With the local server running, open the app and run this in the browser console:

```js
(await import('/tools/check-songs.js')).checkSongs()
```

## Publish

Any static host works (Netlify, Cloudflare Pages, GitHub Pages). It must be served over **https**
for offline mode and "Add to Home Screen" to work.

When you release a new version, bump `SHELL` in `sw.js` (e.g. `lp-shell-v2` → `lp-shell-v3`)
so installed copies pick up the new files.

## Credits

- Instrument samples: FluidR3_GM soundfont (MIT licence) via gleitz/midi-js-soundfonts
- Song melodies: traditional or public domain; sources are noted next to each song in `js/songs*.js`
- Moose artwork from Lilla Lingua
