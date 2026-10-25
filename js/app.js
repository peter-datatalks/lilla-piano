import { playNote, unlock, jingle, now, preloadInstrument, instrumentReady, saveAllInstruments } from './audio.js';
import { INSTRUMENTS, FAMILIES, instrumentById } from './instruments.js';
import { iconFor } from './icons.js';
import { SONGS, LEVELS, COUNTRIES, THEMES } from './songs.js';
import { buildSong, fitRange, noteColor, noteName, eventName, setNoteNames } from './music.js';
import { LANGS, t, getLang, setLang, translateDom, songTitles } from './i18n.js';
import { brandHTML, brandMini } from './brand.js';
import { getName, setName, hasAskedName, recordPlay, favourites, track } from './profile.js';
import { Keyboard } from './keyboard.js';
import { Cascade } from './cascade.js';
import { SheetView } from './sheet.js';

const $ = (s) => document.querySelector(s);

const store = {
  get(k, d) { try { const v = localStorage.getItem(`lp:${k}`); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(`lp:${k}`, JSON.stringify(v)); } catch { /* private mode */ } },
};

const state = {
  view: 'free',
  instrument: instrumentById(store.get('instrument', 'piano')).id,
  instrumentL: store.get('instrumentL', null), // left-hand instrument (null = same as right)
  pickHand: 'R', // which hand the instrument picker is choosing for
  recent: store.get('recent', ['piano', 'violin', 'flute', 'trumpet', 'alto_sax', 'xylophone']),
  freeOctave: null, // lowest octave shown in free play
  song: null,
  built: null,
  mode: 'idle', // idle | listen | guided
  guided: null,
  player: null,
  speed: [0.5, 0.75, 1, 1.25, 1.5].includes(store.get('speed')) ? store.get('speed') : 1, // Listen tempo factor
  hands: 'one', // one | two
  done: store.get('done', {}), // { songId: { one: true, two: true } }
  country: store.get('country', 'all'),
  theme: store.get('theme', 'all'),
  pendingSong: null, // song waiting for the one/two hands choice
  search: '',
  songView: ['notes', 'sheet', 'solfege'].includes(store.get('songView')) ? store.get('songView') : 'notes',
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
const COUNTRY_FLAG = { se: '🇸🇪', hu: '🇭🇺', ua: '🇺🇦', tr: '🇹🇷', gb: '🇬🇧', us: '🇺🇸', de: '🇩🇪', at: '🇦🇹', fr: '🇫🇷', it: '🇮🇹', ru: '🇷🇺', no: '🇳🇴', cz: '🇨🇿', pl: '🇵🇱' };
const THEME_EMOJI = {
  all: '🎵', children: '🧸', animals: '🐾', movement: '💃', everyday: '🏡', lullaby: '🌙',
  celebrations: '🎉', christmas: '🎄', lucia: '🕯️', midsummer: '🌸', anthems: '🎺', classical: '🎻',
};

const app = $('#app');
const voices = new Map(); // input source -> voice
const kb = new Keyboard($('#keyboard'), { onDown, onUp });
const cascade = new Cascade($('#cascade'), kb);
const sheet = new SheetView($('#sheet'));

/* ---------- input ---------- */

// Instrument for a hand ('L' falls back to the right-hand instrument).
const instFor = (hand) => (hand === 'L' && state.instrumentL) || state.instrument;
const splitActive = () => !!state.instrumentL && state.instrumentL !== state.instrument;

// Where the left hand ends: mid-keyboard in free play; below the melody in two-hand songs.
function splitPoint() {
  if (!splitActive()) return null;
  if (state.view === 'free') { // the C nearest the middle; with one octave, C–E is the left hand
    const span = kb.hi - kb.lo;
    return span >= 24 ? kb.lo + 12 * Math.floor(span / 24) : kb.lo + 5;
  }
  if (state.view === 'song' && state.built && state.hands !== 'one') {
    const melody = state.built.events.filter((e) => e.hand === 'R').map((e) => e.midi);
    return melody.length ? Math.min(...melody) : 60;
  }
  return null;
}

// Which hand a key press belongs to: the target's hand in guided play, else the side of the split.
function handFor(midi) {
  if (state.mode === 'guided' && state.guided) {
    const n = state.built.steps[state.guided.i]?.notes.find((x) => x.midi === midi);
    if (n) return n.hand;
  }
  const split = splitPoint();
  return split != null && midi < split ? 'L' : 'R';
}

function applySplit() { kb.setSplit(splitPoint()); }

function onDown(midi, src) {
  unlock();
  voices.get(src)?.release();
  voices.set(src, playNote(instFor(handFor(midi)), midi, 0.85));
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
  const lh = $('#lh-inst');
  lh.innerHTML = `<span class="inst-icon">${iconFor(instFor('L'))}</span><span class="lh-badge">${t('handL')}</span>`;
  lh.classList.toggle('set', splitActive());
  lh.title = `${t('leftHand')}: ${state.instrumentL ? t(`inst.${state.instrumentL}`) : t('sameAsRight')}`;
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
    const rBadge = inst.id === state.instrument && splitActive() ? `<span class="rh-badge">${t('handR')}</span>` : '';
    b.innerHTML = `<span class="inst-icon">${iconFor(inst.id)}</span><span class="inst-name">${t(`inst.${inst.id}`)}</span>${rBadge}`;
    b.onclick = () => selectInstrument(inst.id);
    box.append(b);
  }
}

function selectInstrument(id, hand = 'R') {
  unlock();
  if (hand === 'L') {
    state.instrumentL = id; // null = same as right hand
    store.set('instrumentL', id);
    track('instrument', { instrument: id || 'same', hands: 'L' });
  } else {
    state.instrument = id;
    if (!state.recent.includes(id)) state.recent = [id, ...state.recent].slice(0, 6);
    store.set('instrument', id);
    store.set('recent', state.recent);
    track('instrument', { instrument: id });
  }
  renderInstruments();
  applySplit();
  preloadCurrent();
  if (!id) return;
  // preview: wait briefly for the real sample so the first sound is the instrument itself
  const mid = Math.round((kb.lo + kb.hi) / 2 / 12) * 12 + 7;
  Promise.race([preloadInstrument(id, mid, mid), new Promise((r) => setTimeout(r, 1200))]).then(() => {
    if (instFor(hand) !== id) return;
    const v = playNote(id, hand === 'L' ? mid - 12 : mid, 0.7);
    setTimeout(() => v.release(), 450);
  });
}

// Fetch the current instrument's notes for the visible keyboard.
function preloadCurrent() {
  if (state.instrumentL) preloadInstrument(state.instrumentL, kb.lo, kb.hi);
  const id = state.instrument;
  if (instrumentReady(id, kb.lo, kb.hi)) return;
  renderInstruments();
  preloadInstrument(id, kb.lo, kb.hi).then(() => { if (state.instrument === id) renderInstruments(); });
}

function openSheet(hand = state.pickHand) {
  state.pickHand = hand;
  document.querySelectorAll('.hand-tab').forEach((b) => b.setAttribute('aria-selected', b.dataset.hand === hand));
  const current = hand === 'L' ? state.instrumentL : state.instrument;
  const body = $('#sheet-body');
  body.innerHTML = '';
  if (hand === 'L') {
    const same = document.createElement('button');
    same.className = 'inst-card same-card';
    same.classList.toggle('selected', !state.instrumentL);
    same.innerHTML = `<span class="inst-icon">${iconFor(state.instrument)}</span><span class="inst-name">${t('sameAsRight')}</span>`;
    same.onclick = () => { closeSheet(); selectInstrument(null, 'L'); };
    body.append(same);
  }
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
      b.classList.toggle('selected', inst.id === current);
      b.innerHTML = `<span class="inst-icon">${iconFor(inst.id)}</span><span class="inst-name">${t(`inst.${inst.id}`)}</span>`;
      b.onclick = () => { closeSheet(); selectInstrument(inst.id, hand); };
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
  const hadWorker = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.register('sw.js').then((reg) => reg.update()).catch(() => {});
  // A new version took over: reload once so it shows straight away (but never in the middle of a song).
  let reloading = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!hadWorker || reloading) return;
    reloading = true;
    const tryReload = () => {
      if (state.mode === 'idle' && $('#celebrate').classList.contains('hidden')) location.reload();
      else setTimeout(tryReload, 2000);
    };
    tryReload();
  });
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
  if (v === 'song') requestAnimationFrame(() => { cascade.resize(); sheet.resize(); });
  applySplit();
  // same song (e.g. switching hands) replaces the history entry; anything else adds one
  syncUrl(v === 'song' && location.hash.startsWith(`#/song/${state.song?.id}/`));
}

/* ---------- links: every screen and every song has its own URL ----------
   #/                       free play
   #/songs                  song library
   #/song/<id>              a song (asks one hand / two hands / chords)
   #/song/<id>/<hands>      straight into one | two | chords
   …?view=sheet|solfege     with that note view                                   */

let routing = false; // true while applying a URL, so it isn't written back

function currentHash() {
  if (state.view === 'song' && state.song) {
    return `#/song/${state.song.id}/${state.hands}${state.songView !== 'notes' ? `?view=${state.songView}` : ''}`;
  }
  return state.view === 'library' ? '#/songs' : '#/';
}

function syncUrl(replace = false) {
  if (routing) return;
  const hash = currentHash();
  if (location.hash === hash) return;
  // a bare address (no #…) is upgraded in place rather than adding a history step
  history[replace || !location.hash ? 'replaceState' : 'pushState'](null, '', hash);
}

function route() {
  routing = true;
  try {
    const [path, query] = location.hash.replace(/^#\/?/, '').split('?');
    const [page, id, hands] = path.split('/').map(decodeURIComponent);
    const view = new URLSearchParams(query || '').get('view');
    closeSheet();
    closeHands();
    $('#celebrate').classList.add('hidden');
    if (page === 'song') {
      const song = SONGS.find((s) => s.id === id);
      if (!song) { setView('library'); return; }
      if (['notes', 'sheet', 'solfege'].includes(view) && view !== state.songView) setSongView(view);
      if (['one', 'two', 'chords'].includes(hands)) {
        openSong(song, hands);
      } else {
        if (state.view !== 'library') setView('library');
        askHands(song);
      }
    } else if (page === 'songs') {
      setView('library');
    } else {
      setView('free');
    }
  } finally {
    routing = false;
  }
}

// back / forward buttons and links typed or pasted into the address bar
window.addEventListener('hashchange', route);

function showToast(html) {
  const toast = $('#greeting');
  toast.innerHTML = html;
  toast.classList.remove('hidden');
  clearTimeout(greet.timer);
  greet.timer = setTimeout(() => toast.classList.add('hidden'), 2500);
}

async function copySongLink() {
  const url = location.href;
  try {
    if (navigator.share && matchMedia('(pointer: coarse)').matches) {
      await navigator.share({ title: songTitles(state.song).main, url });
      return;
    }
    await navigator.clipboard.writeText(url);
    showToast(`🔗 ${t('linkCopied')}`);
  } catch {
    showToast(`🔗 ${escapeHtml(url)}`);
  }
}

function freeOctaveCount() {
  const coarse = matchMedia('(pointer: coarse)').matches;
  const whites = Math.floor(kb.el.clientWidth / (coarse ? 56 : 46));
  return Math.max(1, Math.min(3, Math.floor((whites - 1) / 7)));
}

function applyFreeRange() {
  const octs = freeOctaveCount();
  if (state.freeOctave == null) state.freeOctave = octs >= 2 ? 3 : 4;
  state.freeOctave = Math.max(FREE_MIN_OCT, Math.min(FREE_TOP_OCT - octs, state.freeOctave));
  const lo = (state.freeOctave + 1) * 12;
  kb.setRange(lo, lo + octs * 12);
  preloadCurrent();
  applySplit();
  renderRangeMap(octs);
}

// Lowest/highest start octave for free play: the keyboard can sit anywhere in C2–C7.
const FREE_MIN_OCT = 2;
const FREE_TOP_OCT = 7;

function shiftOctave(delta) {
  unlock();
  const before = state.freeOctave;
  state.freeOctave += delta;
  applyFreeRange();
  if (state.freeOctave === before) return;
  // let the child hear the jump: play the C in the middle of the new range
  const m = kb.lo + (kb.hi - kb.lo >= 24 ? 12 : 0);
  const v = playNote(instFor(handFor(m)), m, 0.7);
  setTimeout(() => v.release(), 400);
  spawnFloat(m);
}

// Small map of the whole C2–C7 range with the visible part highlighted, plus its name ("C3–C6").
function renderRangeMap(octs) {
  const map = $('#range-map');
  const first = state.freeOctave;
  let cells = '';
  for (let o = FREE_MIN_OCT; o < FREE_TOP_OCT; o++) {
    const on = o >= first && o < first + octs;
    cells += `<span class="rm-oct${on ? ' on' : ''}">${'<i></i>'.repeat(7)}</span>`;
  }
  map.innerHTML = `<span class="rm-keys">${cells}</span><span class="rm-label">C${first}–C${first + octs}</span>`;
  $('#oct-down').disabled = first <= FREE_MIN_OCT;
  $('#oct-up').disabled = first >= FREE_TOP_OCT - octs;
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
  const query = searchKey(state.search);
  const inSearch = (s) => !query || searchKey(`${s.title} ${s.titleEn} ${s.composer || ''} ${(s.aka || []).join(' ')}`).includes(query);

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
  // search box (ignores accents, spaces and punctuation: "kis karacsony" finds "Kiskarácsony")
  const search = document.createElement('div');
  search.className = 'song-search';
  search.innerHTML = `<span>🔎</span><input type="search" id="song-search" enterkeyhint="search" placeholder="${escapeHtml(t('searchSongs'))}" value="${escapeHtml(state.search)}">${state.search ? '<button type="button" aria-label="✕">✕</button>' : ''}`;
  search.querySelector('input').oninput = (e) => {
    state.search = e.target.value;
    const caret = e.target.selectionStart;
    renderLibrary();
    const again = $('#song-search');
    again.focus();
    again.setSelectionRange(caret, caret);
  };
  const clear = search.querySelector('button');
  if (clear) clear.onclick = () => { state.search = ''; renderLibrary(); };
  lib.append(search, countries, themes);

  // greeting + favourites (the 5 songs this device plays most)
  const name = getName();
  const hello = document.createElement('button');
  hello.className = 'hello-chip';
  hello.innerHTML = name ? `👋 ${t('hi').replace('{name}', escapeHtml(name))} <span>✏️</span>` : `👋 ${t('whoPlays')} <span>✏️</span>`;
  hello.onclick = () => openWelcome(true);
  lib.querySelector('.library-brand').after(hello);
  const favs = favourites(5).map((id) => SONGS.find((s) => s.id === id)).filter(Boolean);
  if (favs.length && state.country === 'all' && state.theme === 'all' && !query) {
    const sec = document.createElement('section');
    sec.className = 'level favourites';
    sec.style.setProperty('--lc', 'oklch(80% 0.13 85)');
    sec.innerHTML = `<h2 class="level-title"><span class="stars">❤️</span>${name ? t('favouritesOf').replace('{name}', escapeHtml(name)) : t('favourites')}<small>${t('favouritesDesc')}</small></h2>`;
    const grid = document.createElement('div');
    grid.className = 'song-grid';
    favs.forEach((s) => grid.append(songCard(s, true)));
    sec.append(grid);
    lib.append(sec);
  }

  const visible = SONGS.filter((s) => inCountry(s) && inTheme(s) && inSearch(s));
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
    for (const s of songs) grid.append(songCard(s));
    sec.append(grid);
    lib.append(sec);
  }
}

// Ukrainian Cyrillic -> Latin (national transliteration), so "dva pivnyky" finds "Два півники".
const CYRILLIC = {
  а: 'a', б: 'b', в: 'v', г: 'h', ґ: 'g', д: 'd', е: 'e', є: 'ie', ж: 'zh', з: 'z', и: 'y', і: 'i', ї: 'i',
  й: 'i', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh',
  ц: 'ts', ч: 'ch', ш: 'sh', щ: 'shch', ь: '', ю: 'iu', я: 'ia', ы: 'y', э: 'e', ё: 'io', ъ: '',
};

// Lower case, Latin letters, no accents, letters and digits only:
// "Kiskarácsony, nagy…" -> "kiskaracsonynagy…", "Два півники" -> "dvapivnyky"
function searchKey(s) {
  return String(s || '').toLowerCase()
    .replace(/[а-яіїєґёыэъ]/g, (c) => CYRILLIC[c] ?? c)
    .replace(/ı/g, 'i') // Turkish dotless i
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function songCard(s, ownColour = false) {
  const { main, sub } = songTitles(s);
  const done = state.done[s.id] || {};
  const b = document.createElement('button');
  b.className = 'song-card';
  if (ownColour) b.style.setProperty('--lc', LEVEL_STYLE[s.level].color);
  b.innerHTML = `<span class="song-flag">${COUNTRY_FLAG[s.country] || ''}</span>
    <span class="song-emoji">${s.emoji}</span>
    <span class="song-name">${main}</span>${sub ? `<span class="song-sub">${sub}</span>` : ''}
    <span class="song-done">${done.one ? '☝️' : ''}${done.two ? '🙌' : ''}${done.chords ? '💪' : ''}</span>`;
  b.onclick = () => { unlock(); askHands(s); };
  return b;
}

/* ---------- name: ask on the first visit, greet afterwards ---------- */

function openWelcome(editing = false) {
  $('#welcome-name').value = getName();
  $('#welcome-sheet').dataset.editing = editing;
  $('#welcome-sheet').classList.remove('hidden');
  setTimeout(() => $('#welcome-name').focus(), 50);
}

function closeWelcome() { $('#welcome-sheet').classList.add('hidden'); }

function greet() {
  const name = getName();
  if (!name) return;
  const toast = $('#greeting');
  toast.innerHTML = `<img src="assets/moose.png" alt="">${t('hiBig').replace('{name}', escapeHtml(name))}`;
  toast.classList.remove('hidden');
  clearTimeout(greet.timer);
  greet.timer = setTimeout(() => toast.classList.add('hidden'), 3500);
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
  state.openedFromLibrary = state.view === 'library' || (state.view === 'song' && state.openedFromLibrary);
  state.song = song;
  state.hands = hands;
  state.built = buildSong(song, hands);
  renderSongHead();
  const [lo, hi] = fitRange(state.built.lo, state.built.hi, 8);
  kb.setRange(lo, hi);
  preloadCurrent();
  applySplit();
  app.dataset.wide = Number(kb.el.dataset.whites) > 10;
  setView('song');
  cascade.built = state.built;
  cascade.spans = null;
  cascade.current = -1;
  cascade.beat = state.built.steps[0].time - 3;
  sheet.setSong(song, state.built);
  renderStrip();
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
    <span class="stars" style="color:${style.color}">${'★'.repeat(style.stars)}</span>
    <button class="link-mini" id="copy-link" title="${t('copyLink')}" aria-label="${t('copyLink')}">🔗</button>`;
  $('#copy-link').onclick = copySongLink;
  const btn = $('#btn-hands');
  btn.innerHTML = [['one', '☝️'], ['two', '🙌'], ['chords', '💪']]
    .map(([h, icon]) => `<span data-h="${h}" class="${state.hands === h ? 'on' : ''}">${icon}</span>`).join('');
  btn.title = t({ one: 'oneHand', two: 'twoHands', chords: 'chordHands' }[state.hands]);
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
// Listen speeds (factor of the song's tempo).
const SPEEDS = [
  { v: 0.5, emoji: '🐌', key: 'speedVerySlow' },
  { v: 0.75, emoji: '🐢', key: 'speedSlow' },
  { v: 1, emoji: '🐇', key: 'speedNormal' },
  { v: 1.25, emoji: '🐎', key: 'speedFast' },
  { v: 1.5, emoji: '🐆', key: 'speedVeryFast' },
];
const speedInfo = () => SPEEDS.find((s) => s.v === state.speed) || SPEEDS[2];

function listen() {
  if (state.mode === 'listen') { stopAll(); return; }
  stopAll();
  unlock();
  recordPlay(state.song.id);
  track('listen', songEvent());
  startListen(0);
}

// Play the song from `fromBeat` (used to continue at a new speed without restarting).
function startListen(fromBeat) {
  state.mode = 'listen';
  const b = state.built;
  const spb = 60 / (state.song.bpm * state.speed);
  const lead = fromBeat > 0 ? 0.15 : 1.2; // seconds of notes falling before the first one lands
  const t0 = now() + lead - fromBeat * spb;
  let i = b.events.findIndex((ev) => ev.time >= fromBeat - 1e-6);
  if (i < 0) i = b.events.length;
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
      const v = playNote(instFor(ev.hand), ev.midi, ev.chord ? 0.42 : ev.hand === 'L' ? 0.6 : 0.85, at);
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
// What gets logged with each song event.
const songEvent = () => ({ song: state.song.id, hands: state.hands, view: state.songView, instrument: state.instrument });

function startGuided() {
  stopAll();
  unlock();
  recordPlay(state.song.id);
  track('play', songEvent());
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
  kb.setTargets(step.notes, state.hands !== 'one' ? { L: t('handL'), R: t('handR') } : null);
  cascade.current = g.i;
  setProgress(g.i / state.built.steps.length);
  if (state.songView === 'solfege') updateStrip();
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
  step.notes.forEach((n) => { const v = playNote(instFor(n.hand), n.midi, 0.35); setTimeout(() => v.release(), 500); });
  kb.nudge(step.notes);
}, 1000);

function finish() {
  setProgress(1);
  state.done[state.song.id] = { ...state.done[state.song.id], [state.hands]: true };
  track('complete', songEvent());
  store.set('done', state.done);
  stopAll();
  cascade.current = -1;
  setTimeout(() => {
    jingle();
    $('#celebrate').classList.remove('hidden');
    confetti();
  }, 250);
}

/* ---------- note views: falling notes, sheet music, do-re-mi ---------- */

function setSongView(v) {
  state.songView = v;
  store.set('songView', v);
  if (state.view === 'song') syncUrl(true);
  app.dataset.songview = v;
  document.querySelectorAll('.view-switch button').forEach((b) => b.setAttribute('aria-checked', b.dataset.songview === v));
  setNoteNames(getLang(), v === 'solfege' ? 'solfege' : 'letters');
  kb.el.classList.toggle('solfege', v === 'solfege');
  kb.relabel();
  cascade.spans = null;
  renderStrip();
  requestAnimationFrame(() => { cascade.resize(); sheet.resize(); });
  if (state.mode === 'guided') showStep();
}

// Do-Re-Mi strip: the melody as sing-along syllables, current one highlighted.
let strip = { chips: [], index: -2 };

function renderStrip() {
  const box = $('#solfege-strip');
  box.innerHTML = '';
  strip = { chips: [], index: -2 };
  if (!state.built) return;
  state.built.steps.forEach((st, i) => {
    const n = st.notes.find((x) => x.hand === 'R');
    if (!n) return;
    const el = document.createElement('span');
    el.className = 'syl';
    el.textContent = eventName(n);
    el.style.setProperty('--sc', noteColor(n.midi));
    box.append(el);
    strip.chips.push({ step: i, time: st.time, el });
  });
}

function updateStrip() {
  let index = -1;
  if (state.mode === 'guided' && state.guided) {
    index = strip.chips.findIndex((c) => c.step >= state.guided.i);
  } else if (state.mode === 'listen') {
    for (let i = 0; i < strip.chips.length && strip.chips[i].time <= cascade.beat + 0.01; i++) index = i;
  }
  if (index === strip.index) return;
  strip.index = index;
  strip.chips.forEach((c, i) => {
    c.el.classList.toggle('current', i === index);
    c.el.classList.toggle('done', index >= 0 && i < index);
  });
  const el = strip.chips[Math.max(0, index)]?.el;
  const box = $('#solfege-strip');
  if (el) box.scrollTo({ left: el.offsetLeft - box.clientWidth / 2 + el.offsetWidth / 2, behavior: 'smooth' });
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
    // the cascade's position drives every view
    if (state.songView === 'sheet') {
      sheet.beat = cascade.beat;
      sheet.current = cascade.current;
      sheet.draw();
    } else {
      cascade.draw();
    }
    if (state.songView === 'solfege') updateStrip();
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
$('#oct-down').onclick = () => shiftOctave(-1);
$('#oct-up').onclick = () => shiftOctave(1);
$('#more-inst').onclick = () => { unlock(); openSheet('R'); };
$('#lh-inst').onclick = () => { unlock(); openSheet('L'); };
document.querySelectorAll('.hand-tab').forEach((b) => (b.onclick = () => openSheet(b.dataset.hand)));
$('#sheet-close').onclick = closeSheet;
$('#offline-btn').onclick = saveOffline;
$('#inst-sheet').onclick = (e) => { if (e.target.id === 'inst-sheet') closeSheet(); };
$('#song-back').onclick = () => { if (state.openedFromLibrary) history.back(); else setView('library'); };
document.querySelectorAll('.view-switch button').forEach((b) => (b.onclick = () => setSongView(b.dataset.songview)));
$('#hands-close').onclick = closeHands;
$('#hands-sheet').onclick = (e) => { if (e.target.id === 'hands-sheet') closeHands(); };
document.querySelectorAll('.hands-choice').forEach((b) => (b.onclick = () => {
  closeHands();
  openSong(state.pendingSong, b.dataset.hands);
}));
$('#btn-hands').onclick = (e) => {
  const order = ['one', 'two', 'chords'];
  const picked = e.target.closest('[data-h]')?.dataset.h;
  openSong(state.song, picked || order[(order.indexOf(state.hands) + 1) % order.length]);
};
$('#lang-btn').onclick = () => {
  const codes = Object.keys(LANGS);
  applyLang(codes[(codes.indexOf(getLang()) + 1) % codes.length]);
};
$('#btn-listen').onclick = listen;
$('#btn-play').onclick = startGuided;
function renderSpeed() {
  const info = speedInfo();
  $('#btn-tempo').textContent = info.emoji;
  $('#btn-tempo').title = `${t(info.key)} (${Math.round(info.v * 100)}%)`;
  $('#speed-menu').innerHTML = SPEEDS.map((s) => `<button role="menuitemradio" aria-checked="${s.v === state.speed}" data-speed="${s.v}">
    <span class="speed-emoji">${s.emoji}</span><span>${t(s.key)}</span><small>${Math.round(s.v * 100)}%</small></button>`).join('');
}

function setSpeed(v) {
  state.speed = v;
  store.set('speed', v);
  renderSpeed();
  $('#speed-menu').classList.add('hidden');
  if (state.mode === 'listen' && state.player) { // keep playing from the same spot
    const beat = Math.max(0, state.player.beat());
    stopAll();
    startListen(beat);
  }
}

$('#btn-tempo').onclick = (e) => {
  e.stopPropagation();
  renderSpeed();
  $('#speed-menu').classList.toggle('hidden');
};
$('#speed-menu').onclick = (e) => {
  e.stopPropagation();
  const b = e.target.closest('[data-speed]');
  if (b) setSpeed(Number(b.dataset.speed));
};
document.addEventListener('click', () => $('#speed-menu').classList.add('hidden'));
$('#btn-again').onclick = () => { $('#celebrate').classList.add('hidden'); startGuided(); };
$('#btn-more').onclick = () => { $('#celebrate').classList.add('hidden'); setView('library'); };

const fsBtn = $('#fullscreen-btn');
if (!document.fullscreenEnabled) fsBtn.hidden = true;
fsBtn.onclick = () => {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen().then(() => screen.orientation?.lock?.('landscape').catch(() => {})).catch(() => {});
};

window.addEventListener('keydown', (e) => {
  if (e.target.closest?.('input, textarea')) return;
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
    sheet.resize();
  }, 120);
});

function applyLang(lang) {
  setLang(lang);
  store.set('lang', getLang());
  setNoteNames(getLang(), state.songView === 'solfege' ? 'solfege' : 'letters');
  translateDom();
  document.querySelectorAll('[data-brand]').forEach((el) => { el.innerHTML = brandHTML(); });
  document.querySelectorAll('[data-brand-mini]').forEach((el) => { el.innerHTML = brandMini(); });
  $('#lang-btn').textContent = LANGS[getLang()];
  kb.relabel();
  cascade.spans = null;
  renderInstruments();
  renderSongHead();
  renderStrip();
  renderSpeed();
  if (state.mode !== 'listen') $('#btn-listen').innerHTML = `👂<span>${t('listen')}</span>`;
  if (state.view === 'library') renderLibrary();
  if (!$('#inst-sheet').classList.contains('hidden')) openSheet();
  if (state.mode === 'guided') showStep();
}

applyLang(store.get('lang', 'en'));
setSongView(state.songView);
renderSpeed();

$('#welcome-form').onsubmit = (e) => {
  e.preventDefault();
  const name = setName($('#welcome-name').value);
  closeWelcome();
  if (state.view === 'library') renderLibrary();
  if (name) greet();
};
$('#welcome-skip').onclick = () => {
  if ($('#welcome-sheet').dataset.editing !== 'true') setName('');
  closeWelcome();
};
track('visit');
if (!hasAskedName()) openWelcome();
else greet();
route();
