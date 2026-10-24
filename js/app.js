import { playNote, unlock, jingle, now, preloadInstrument, instrumentReady, saveAllInstruments } from './audio.js';
import { INSTRUMENTS, FAMILIES, instrumentById } from './instruments.js';
import { iconFor } from './icons.js';
import { SONGS, LEVELS, COUNTRIES, THEMES } from './songs.js';
import { buildSong, fitRange, noteColor, setNoteNames } from './music.js';
import { LANGS, t, getLang, setLang, translateDom, songTitles } from './i18n.js';
import { brandHTML, brandMini } from './brand.js';
import { Keyboard } from './keyboard.js';
import { Cascade } from './cascade.js';

const $ = (s) => document.querySelector(s);

const store = {
  get(k, d) { try { const v = localStorage.getItem(`lp:${k}`); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(`lp:${k}`, JSON.stringify(v)); } catch { /* private mode */ } },
};

const state = {
  view: 'free',
  instrument: instrumentById(store.get('instrument', 'piano')).id,
  recent: store.get('recent', ['piano', 'violin', 'flute', 'trumpet', 'alto_sax', 'xylophone']),
  freeOctave: null, // lowest octave shown in free play
  song: null,
  built: null,
  mode: 'idle', // idle | listen | guided
  guided: null,
  player: null,
  slow: false,
  hands: 'one', // one | two
  done: store.get('done', {}), // { songId: { one: true, two: true } }
  country: store.get('country', 'all'),
  theme: store.get('theme', 'all'),
  pendingSong: null, // song waiting for the one/two hands choice
};

// Older saves: done[id] === true meant "played" before hands existed; theme ids were Swedish.
for (const [id, v] of Object.entries(state.done)) if (v === true) state.done[id] = { one: true };
state.theme = { classic: 'children', jul: 'christmas', midsommar: 'midsummer' }[state.theme] || state.theme;
if (state.theme !== 'all' && !THEMES.includes(state.theme)) state.theme = 'all';
if (state.country !== 'all' && !COUNTRIES.includes(state.country)) state.country = 'all';

const LEVEL_STYLE = {
  easy: { stars: 1, color: '#43a047' },
  medium: { stars: 2, color: '#fb8c00' },
  hard: { stars: 3, color: '#e53935' },
};
const COUNTRY_FLAG = { se: '🇸🇪', hu: '🇭🇺' };
const THEME_EMOJI = {
  all: '🎵', children: '🧸', animals: '🐾', movement: '💃', everyday: '🏡', lullaby: '🌙',
  celebrations: '🎉', christmas: '🎄', lucia: '🕯️', midsummer: '🌸', anthems: '🎺',
};

const app = $('#app');
const voices = new Map(); // input source -> voice
const kb = new Keyboard($('#keyboard'), { onDown, onUp });
const cascade = new Cascade($('#cascade'), kb);

/* ---------- input ---------- */

function onDown(midi, src) {
  unlock();
  voices.get(src)?.release();
  voices.set(src, playNote(state.instrument, midi, 0.85));
  if (state.view === 'free') spawnFloat(midi);
  if (state.mode === 'guided') guidedInput(midi);
}

function onUp(midi, src) {
  voices.get(src)?.release();
  voices.delete(src);
}

/* ---------- instruments ---------- */

// Top bar: the most recently used instruments (current one first in the list).
function renderInstruments() {
  const box = $('#instruments');
  box.innerHTML = '';
  const ready = instrumentReady(state.instrument, kb.lo, kb.hi);
  for (const id of state.recent) {
    const inst = instrumentById(id);
    const b = document.createElement('button');
    b.className = 'inst-btn';
    b.style.setProperty('--fc', FAMILIES.find((f) => f.id === inst.family).color);
    b.classList.toggle('loading', inst.id === state.instrument && !ready);
    b.setAttribute('role', 'radio');
    b.setAttribute('aria-checked', inst.id === state.instrument);
    b.setAttribute('aria-label', t(`inst.${inst.id}`));
    b.innerHTML = `<span class="inst-icon">${iconFor(inst.id)}</span><span class="inst-name">${t(`inst.${inst.id}`)}</span>`;
    b.onclick = () => selectInstrument(inst.id);
    box.append(b);
  }
}

function selectInstrument(id) {
  unlock();
  state.instrument = id;
  if (!state.recent.includes(id)) state.recent = [id, ...state.recent].slice(0, 6);
  store.set('instrument', id);
  store.set('recent', state.recent);
  renderInstruments();
  preloadCurrent();
  // preview: wait briefly for the real sample so the first sound is the instrument itself
  const mid = Math.round((kb.lo + kb.hi) / 2 / 12) * 12 + 7;
  Promise.race([preloadInstrument(id, mid, mid), new Promise((r) => setTimeout(r, 1200))]).then(() => {
    if (state.instrument !== id) return;
    const v = playNote(id, mid, 0.7);
    setTimeout(() => v.release(), 450);
  });
}

// Fetch the current instrument's notes for the visible keyboard.
function preloadCurrent() {
  const id = state.instrument;
  if (instrumentReady(id, kb.lo, kb.hi)) return;
  renderInstruments();
  preloadInstrument(id, kb.lo, kb.hi).then(() => { if (state.instrument === id) renderInstruments(); });
}

function openSheet() {
  const body = $('#sheet-body');
  body.innerHTML = '';
  for (const fam of FAMILIES) {
    const sec = document.createElement('section');
    sec.className = 'family';
    sec.style.setProperty('--fc', fam.color);
    sec.innerHTML = `<h3><span class="inst-icon">${iconFor(fam.icon)}</span>${t(`family.${fam.id}`)}</h3>`;
    const grid = document.createElement('div');
    grid.className = 'inst-grid';
    for (const inst of INSTRUMENTS.filter((i) => i.family === fam.id)) {
      const b = document.createElement('button');
      b.className = 'inst-card';
      b.classList.toggle('selected', inst.id === state.instrument);
      b.innerHTML = `<span class="inst-icon">${iconFor(inst.id)}</span><span class="inst-name">${t(`inst.${inst.id}`)}</span>`;
      b.onclick = () => { closeSheet(); selectInstrument(inst.id); };
      grid.append(b);
    }
    sec.append(grid);
    body.append(sec);
  }
  renderOffline();
  $('#inst-sheet').classList.remove('hidden');
}

function closeSheet() { $('#inst-sheet').classList.add('hidden'); }

/* ---------- offline ---------- */

const offline = { status: store.get('offline', 'none'), percent: 0 }; // none | saving | done | retry

function renderOffline() {
  const b = $('#offline-btn');
  if (!window.caches) { b.textContent = t('offlineUnavailable'); b.disabled = true; return; }
  b.disabled = offline.status === 'saving' || offline.status === 'done';
  b.dataset.status = offline.status;
  b.textContent = {
    none: t('offlineSave'),
    saving: t('offlineSaving').replace('{p}', offline.percent),
    done: t('offlineDone'),
    retry: t('offlineRetry'),
  }[offline.status];
}

async function saveOffline() {
  if (offline.status === 'saving') return;
  offline.status = 'saving';
  offline.percent = 0;
  renderOffline();
  try {
    const failed = await saveAllInstruments((done, total) => {
      const p = Math.floor((done / total) * 100);
      if (p !== offline.percent) { offline.percent = p; renderOffline(); }
    });
    offline.status = failed ? 'retry' : 'done';
  } catch {
    offline.status = 'retry';
  }
  store.set('offline', offline.status);
  renderOffline();
}

if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

/* ---------- views ---------- */

function setView(v) {
  stopAll();
  state.view = v;
  app.dataset.view = v;
  document.querySelectorAll('.mode-btn').forEach((b) =>
    b.classList.toggle('active', b.dataset.go === v || (v === 'song' && b.dataset.go === 'library')));
  if (v === 'free') { kb.setGuided(false); kb.setTargets([]); applyFreeRange(); }
  if (v === 'library') renderLibrary();
  if (v === 'song') requestAnimationFrame(() => { cascade.resize(); });
}

function freeOctaveCount() {
  const coarse = matchMedia('(pointer: coarse)').matches;
  const whites = Math.floor(kb.el.clientWidth / (coarse ? 56 : 46));
  return Math.max(1, Math.min(3, Math.floor((whites - 1) / 7)));
}

function applyFreeRange() {
  const octs = freeOctaveCount();
  if (state.freeOctave == null) state.freeOctave = octs >= 2 ? 3 : 4;
  state.freeOctave = Math.max(2, Math.min(7 - octs, state.freeOctave));
  const lo = (state.freeOctave + 1) * 12;
  kb.setRange(lo, lo + octs * 12);
  preloadCurrent();
}

/* ---------- free play ---------- */

function spawnFloat(midi) {
  const area = $('#float-area');
  const span = kb.keySpan(midi, area);
  if (!span) return;
  const n = document.createElement('div');
  n.className = 'float-note';
  n.textContent = ['♪', '♫', '♩', '♬'][Math.floor(Math.random() * 4)];
  n.style.left = `${span.x + span.w / 2}px`;
  n.style.color = noteColor(midi);
  n.style.setProperty('--drift', `${(Math.random() - 0.5) * 60}px`);
  n.addEventListener('animationend', () => n.remove());
  area.append(n);
}

/* ---------- library ---------- */

function chip(label, emoji, active, onclick) {
  const b = document.createElement('button');
  b.className = 'theme-chip';
  b.classList.toggle('active', active);
  b.innerHTML = `<span>${emoji}</span>${label}`;
  b.onclick = onclick;
  return b;
}

function renderLibrary() {
  const lib = $('#library');
  lib.innerHTML = `<div class="library-brand">${brandHTML()}</div>`;
  const inCountry = (s) => state.country === 'all' || s.country === state.country;
  const inTheme = (s) => state.theme === 'all' || s.themes?.includes(state.theme);

  // filter row 1: where the songs come from
  const countries = document.createElement('div');
  countries.className = 'theme-chips';
  for (const c of ['all', ...COUNTRIES.filter((c) => SONGS.some((s) => s.country === c))]) {
    countries.append(chip(t(`country.${c}`), c === 'all' ? '🌍' : COUNTRY_FLAG[c], c === state.country, () => {
      state.country = c;
      store.set('country', c);
      renderLibrary();
    }));
  }
  // filter row 2: themes that have songs for the chosen country
  const themes = document.createElement('div');
  themes.className = 'theme-chips';
  const available = THEMES.filter((th) => SONGS.some((s) => inCountry(s) && s.themes?.includes(th)));
  if (state.theme !== 'all' && !available.includes(state.theme)) state.theme = 'all';
  for (const th of ['all', ...available]) {
    themes.append(chip(t(`theme.${th}`), THEME_EMOJI[th], th === state.theme, () => {
      state.theme = th;
      store.set('theme', th);
      renderLibrary();
    }));
  }
  lib.append(countries, themes);

  const visible = SONGS.filter((s) => inCountry(s) && inTheme(s));
  if (!visible.length) {
    const p = document.createElement('p');
    p.className = 'empty';
    p.textContent = t('noSongs');
    lib.append(p);
  }
  for (const lvl of LEVELS) {
    const songs = visible.filter((x) => x.level === lvl);
    if (!songs.length) continue;
    const style = LEVEL_STYLE[lvl];
    const sec = document.createElement('section');
    sec.className = 'level';
    sec.style.setProperty('--lc', style.color);
    sec.innerHTML = `<h2 class="level-title"><span class="stars">${'★'.repeat(style.stars)}</span>${t(`level.${lvl}`)}<small>${t(`levelDesc.${lvl}`)}</small></h2>`;
    const grid = document.createElement('div');
    grid.className = 'song-grid';
    for (const s of songs) {
      const { main, sub } = songTitles(s);
      const done = state.done[s.id] || {};
      const b = document.createElement('button');
      b.className = 'song-card';
      b.innerHTML = `<span class="song-flag">${COUNTRY_FLAG[s.country] || ''}</span>
        <span class="song-emoji">${s.emoji}</span>
        <span class="song-name">${main}</span>${sub ? `<span class="song-sub">${sub}</span>` : ''}
        <span class="song-done">${done.one ? '☝️' : ''}${done.two ? '🙌' : ''}</span>`;
      b.onclick = () => { unlock(); askHands(s); };
      grid.append(b);
    }
    sec.append(grid);
    lib.append(sec);
  }
}

/* ---------- one or two hands? ---------- */

function askHands(song) {
  state.pendingSong = song;
  const { main } = songTitles(song);
  $('#hands-song').innerHTML = `<span class="song-emoji">${song.emoji}</span> ${main}`;
  const done = state.done[song.id] || {};
  document.querySelectorAll('#hands-sheet .hands-done').forEach((el) => { el.hidden = !done[el.dataset.done]; });
  $('#hands-sheet').classList.remove('hidden');
}

function closeHands() { $('#hands-sheet').classList.add('hidden'); }

/* ---------- song view ---------- */

function openSong(song, hands) {
  state.song = song;
  state.hands = hands;
  state.built = buildSong(song, hands);
  renderSongHead();
  const [lo, hi] = fitRange(state.built.lo, state.built.hi, 8);
  kb.setRange(lo, hi);
  preloadCurrent();
  app.dataset.wide = Number(kb.el.dataset.whites) > 10;
  setView('song');
  cascade.built = state.built;
  cascade.spans = null;
  cascade.current = -1;
  cascade.beat = state.built.steps[0].time - 3;
  setProgress(0);
  $('#btn-play').classList.add('pulse');
}

function renderSongHead() {
  const song = state.song;
  if (!song) return;
  const { main, sub } = songTitles(song);
  const style = LEVEL_STYLE[song.level];
  $('#song-title').innerHTML = `<span class="song-emoji">${song.emoji}</span>
    <span class="song-title-text"><span class="song-title-main">${main}</span>${sub ? `<small>${sub}</small>` : ''}</span>
    <span class="stars" style="color:${style.color}">${'★'.repeat(style.stars)}</span>`;
  const btn = $('#btn-hands');
  btn.innerHTML = `<span class="${state.hands === 'one' ? 'on' : ''}">☝️</span><span class="${state.hands === 'two' ? 'on' : ''}">🙌</span>`;
  btn.title = t(state.hands === 'one' ? 'oneHand' : 'twoHands');
}

function setProgress(f) { $('#progress').style.width = `${Math.round(f * 100)}%`; }

function stopAll() {
  if (state.player) { state.player.stop(); state.player = null; }
  state.guided = null;
  state.mode = 'idle';
  kb.setTargets([]);
  kb.setGuided(false);
  kb.clearPlaying();
  cascade.current = -1;
  $('#btn-listen').classList.remove('active');
  $('#btn-listen').innerHTML = `👂<span>${t('listen')}</span>`;
  $('#btn-play').classList.remove('active');
}

/* listen: notes fall in time with the music */
function listen() {
  if (state.mode === 'listen') { stopAll(); return; }
  stopAll();
  unlock();
  state.mode = 'listen';
  const b = state.built;
  const spb = 60 / (state.song.bpm * (state.slow ? 0.7 : 1));
  const lead = 1.2; // seconds of notes falling before the first one lands
  const t0 = now() + lead;
  let i = 0;
  const timers = [];
  const scheduled = [];
  kb.setGuided(true);
  $('#btn-listen').classList.add('active');
  $('#btn-listen').innerHTML = `⏹<span>${t('stop')}</span>`;

  const tick = () => {
    const tn = now();
    while (i < b.events.length && t0 + b.events[i].time * spb < tn + 0.2) {
      const ev = b.events[i++];
      const at = t0 + ev.time * spb;
      const end = at + ev.dur * spb * 0.92;
      const v = playNote(state.instrument, ev.midi, ev.hand === 'L' ? 0.6 : 0.85, at);
      v.release(end);
      scheduled.push(v);
      timers.push(setTimeout(() => kb.setPlaying(ev.midi, true), (at - tn) * 1000));
      timers.push(setTimeout(() => kb.setPlaying(ev.midi, false), (end - tn) * 1000));
    }
    if (i >= b.events.length && tn > t0 + b.length * spb + 0.4) {
      stopAll();
      cascade.beat = b.steps[0].time - 3;
      setProgress(0);
      $('#btn-play').classList.add('pulse'); // "your turn!"
    }
  };
  const iv = setInterval(tick, 25);
  tick();
  state.player = {
    stop() {
      clearInterval(iv);
      timers.forEach(clearTimeout);
      scheduled.forEach((v) => v.kill());
    },
    beat: () => (now() - t0) / spb,
  };
}

/* guided: notes fall to the keyboard and wait for the child */
function startGuided() {
  stopAll();
  unlock();
  state.mode = 'guided';
  state.guided = { i: 0, hit: new Set(), lastInput: performance.now() };
  $('#btn-play').classList.remove('pulse');
  $('#btn-play').classList.add('active');
  kb.setGuided(true);
  showStep();
}

function showStep() {
  const g = state.guided;
  const step = state.built.steps[g.i];
  g.hit.clear();
  g.lastInput = performance.now();
  kb.setTargets(step.notes, state.hands === 'two' ? { L: t('handL'), R: t('handR') } : null);
  cascade.current = g.i;
  setProgress(g.i / state.built.steps.length);
}

function guidedInput(midi) {
  const g = state.guided;
  const step = state.built.steps[g.i];
  g.lastInput = performance.now();
  if (step.notes.some((n) => n.midi === midi)) {
    g.hit.add(midi);
    kb.markHit(midi);
    if (step.notes.every((n) => g.hit.has(n.midi))) {
      g.i++;
      if (g.i >= state.built.steps.length) finish();
      else showStep();
    }
  } else {
    kb.nudge(step.notes); // gentle wiggle, never a "wrong" sound
  }
}

// Hint: after 6 s without input, softly play the note(s) the child should press.
setInterval(() => {
  const g = state.guided;
  if (state.mode !== 'guided' || !g || document.hidden) return;
  if (performance.now() - g.lastInput < 6000) return;
  g.lastInput = performance.now();
  const step = state.built.steps[g.i];
  step.notes.forEach((n) => { const v = playNote(state.instrument, n.midi, 0.35); setTimeout(() => v.release(), 500); });
  kb.nudge(step.notes);
}, 1000);

function finish() {
  setProgress(1);
  state.done[state.song.id] = { ...state.done[state.song.id], [state.hands]: true };
  store.set('done', state.done);
  stopAll();
  cascade.current = -1;
  setTimeout(() => {
    jingle();
    $('#celebrate').classList.remove('hidden');
    confetti();
  }, 250);
}

/* ---------- animation loop for the cascade ---------- */

let lastFrame = performance.now();
function frame(t) {
  const dt = Math.min(0.1, (t - lastFrame) / 1000);
  lastFrame = t;
  if (state.view === 'song' && state.built) {
    if (state.mode === 'listen' && state.player) {
      cascade.beat = state.player.beat();
      setProgress(Math.max(0, cascade.beat / state.built.length));
    } else {
      const target = state.mode === 'guided'
        ? state.built.steps[state.guided.i].time
        : state.built.steps[0].time;
      cascade.beat += (target - cascade.beat) * (1 - Math.exp(-dt * 7));
    }
    cascade.draw();
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* ---------- confetti ---------- */

function confetti() {
  const c = $('#confetti');
  const ctx = c.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  c.width = innerWidth * dpr;
  c.height = innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const colors = ['#e53935', '#fb8c00', '#fdd835', '#43a047', '#00acc1', '#1e88e5', '#8e24aa'];
  const parts = Array.from({ length: 160 }, () => ({
    x: innerWidth / 2, y: innerHeight * 0.45,
    vx: (Math.random() - 0.5) * 14, vy: -Math.random() * 14 - 4,
    r: Math.random() * 6 + 4, c: colors[Math.floor(Math.random() * colors.length)],
    a: Math.random() * Math.PI, va: (Math.random() - 0.5) * 0.3,
  }));
  const start = performance.now();
  (function step(t) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const p of parts) {
      p.vy += 0.35; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.a += p.va;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a);
      ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2);
      ctx.restore();
    }
    if (t - start < 3500) requestAnimationFrame(step);
    else ctx.clearRect(0, 0, innerWidth, innerHeight);
  })(start);
}

/* ---------- wiring ---------- */

document.querySelectorAll('.mode-btn').forEach((b) => (b.onclick = () => { unlock(); setView(b.dataset.go); }));
$('#oct-down').onclick = () => { state.freeOctave--; applyFreeRange(); };
$('#oct-up').onclick = () => { state.freeOctave++; applyFreeRange(); };
$('#more-inst').onclick = () => { unlock(); openSheet(); };
$('#sheet-close').onclick = closeSheet;
$('#offline-btn').onclick = saveOffline;
$('#inst-sheet').onclick = (e) => { if (e.target.id === 'inst-sheet') closeSheet(); };
$('#song-back').onclick = () => setView('library');
$('#hands-close').onclick = closeHands;
$('#hands-sheet').onclick = (e) => { if (e.target.id === 'hands-sheet') closeHands(); };
document.querySelectorAll('.hands-choice').forEach((b) => (b.onclick = () => {
  closeHands();
  openSong(state.pendingSong, b.dataset.hands);
}));
$('#btn-hands').onclick = () => openSong(state.song, state.hands === 'one' ? 'two' : 'one');
$('#lang-btn').onclick = () => {
  const codes = Object.keys(LANGS);
  applyLang(codes[(codes.indexOf(getLang()) + 1) % codes.length]);
};
$('#btn-listen').onclick = listen;
$('#btn-play').onclick = startGuided;
$('#btn-tempo').onclick = () => {
  state.slow = !state.slow;
  $('#btn-tempo').textContent = state.slow ? '🐢' : '🐇';
  if (state.mode === 'listen') { stopAll(); listen(); }
};
$('#btn-again').onclick = () => { $('#celebrate').classList.add('hidden'); startGuided(); };
$('#btn-more').onclick = () => { $('#celebrate').classList.add('hidden'); setView('library'); };

const fsBtn = $('#fullscreen-btn');
if (!document.fullscreenEnabled) fsBtn.hidden = true;
fsBtn.onclick = () => {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen().then(() => screen.orientation?.lock?.('landscape').catch(() => {})).catch(() => {});
};

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !$('#inst-sheet').classList.contains('hidden')) { closeSheet(); return; }
  if (e.key === 'Escape' && !$('#hands-sheet').classList.contains('hidden')) { closeHands(); return; }
  if (e.key === 'Escape' && state.view === 'song') setView('library');
  if (state.view === 'free' && (e.key === 'z' || e.key === 'x')) {
    state.freeOctave += e.key === 'x' ? 1 : -1;
    applyFreeRange();
  }
});

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (state.view === 'free') applyFreeRange();
    cascade.resize();
  }, 120);
});

function applyLang(lang) {
  setLang(lang);
  store.set('lang', getLang());
  setNoteNames(getLang());
  translateDom();
  document.querySelectorAll('[data-brand]').forEach((el) => { el.innerHTML = brandHTML(); });
  document.querySelectorAll('[data-brand-mini]').forEach((el) => { el.innerHTML = brandMini(); });
  $('#lang-btn').textContent = LANGS[getLang()];
  kb.relabel();
  cascade.spans = null;
  renderInstruments();
  renderSongHead();
  if (state.mode !== 'listen') $('#btn-listen').innerHTML = `👂<span>${t('listen')}</span>`;
  if (state.view === 'library') renderLibrary();
  if (!$('#inst-sheet').classList.contains('hidden')) openSheet();
  if (state.mode === 'guided') showStep();
}

applyLang(store.get('lang', 'en'));
setView('free');
