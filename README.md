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

## Players, favourites and statistics

- **Name and greeting:** on the first visit the app asks for a name. It's stored on that device, and the app says hi on later visits.
- **Favourites:** the library shows the 5 songs most played on the device.
- **Usage events:** visits, plays, listens, finished songs and instrument changes are queued on the device and sent to a Google Sheet when online.
- **My tunes:** in free play, ⏺ Record saves what the child plays (per player, on the device, up to 50 tunes). Each tune can be played back as recorded, renamed or deleted.
- **Make a song:** ✨ turns a recording into a song with chords (`js/arrange.js`). It runs on the device using music theory, with no AI model or server. It finds the beat, snaps the rhythm, picks 4/4 or 3/4, moves the tune to C major or A minor, adds a home-note ending if needed and chooses one or two chords per bar. The result plays in the normal song view (listen, play along, scores).
- **Admin page:** statistics are at `/admin.html` (not linked from the app).

### Connect the Google Sheet (once)

1. Create a Google Sheet, e.g. "Lilla Piano stats".
2. **Extensions → Apps Script**: replace the code with [`tools/stats-apps-script.gs`](tools/stats-apps-script.gs) and save.
3. **Project Settings → Script properties → Add**: `ADMIN_KEY` = a long secret of your choice.
4. **Deploy → New deployment → Web app**. Set "Execute as: **Me**" and "Who has access: **Anyone**", then copy the `/exec` URL.
5. Paste that URL into [`js/config.js`](js/config.js) as `STATS_URL`, commit and push.
6. Open `/admin.html` on the live site and enter your `ADMIN_KEY`. Add `?demo` to preview the page with made-up data.

**What's stored:** first name, a random device ID, language, and song, hands mode, view and instrument per event. No other personal data.

**Privacy:** if the app is used outside your own family (for example with other families or a preschool), tell the parents what is collected and get their consent first. Names of children are personal data under GDPR.

## Credits

- Instrument samples: FluidR3_GM by Frank Wen (MIT), rendered to MP3 by gleitz/midi-js-soundfonts (MIT; set released under CC BY 3.0). Hosted with the app in `assets/sounds/`; notices in `LICENSES/`.
- Fonts: Baloo 2 and Nunito (SIL OFL 1.1), hosted with the app in `assets/fonts/`; notices in `LICENSES/`.
- The in-app **Credits & licences** screen (link at the bottom of the Songs page) shows the required attributions.
- Song melodies: traditional or public domain; sources are noted next to each song in `js/songs*.js`
- Chopin pieces marked "CFE" in js/songs-classical-e.js: from *Chopin First Editions* by the Fryderyk Chopin Institute (github.com/pl-wnifc/humdrum-chopin-first-editions), licensed CC BY 4.0.
- Classical themes: mostly from the [Mutopia Project](https://www.mutopiaproject.org) public-domain editions, plus the CC0 [OpenScore](https://github.com/OpenScore) Lieder corpus and the music21 corpus; each piece's source is noted in its comment.
- Moose artwork from Lilla Lingua (owned by the app's owner; AI-generated with ChatGPT/Claude)
