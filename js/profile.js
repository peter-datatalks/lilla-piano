// Who is playing on this device, what they play, and sending usage events to the stats sheet.
// Everything is kept in localStorage first; events are queued and sent when online.
import { STATS_URL } from './config.js';

const KEY = (k) => `lp:${k}`;
const read = (k, d) => { try { const v = localStorage.getItem(KEY(k)); return v == null ? d : JSON.parse(v); } catch { return d; } };
const write = (k, v) => { try { localStorage.setItem(KEY(k), JSON.stringify(v)); } catch { /* private mode */ } };

function newId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

let deviceId = read('deviceId', null);
if (!deviceId) { deviceId = newId(); write('deviceId', deviceId); }

export const getName = () => read('name', '');
export const hasAskedName = () => read('askedName', false);

export function setName(name) {
  const clean = String(name || '').trim().slice(0, 40);
  write('name', clean);
  write('askedName', true);
  track('hello');
  return clean;
}

/* ---------- local play counts → favourites ---------- */

// plays: { songId: number } — a "play" is starting guided play or listening to a song.
export function recordPlay(songId) {
  const plays = read('plays', {});
  plays[songId] = (plays[songId] || 0) + 1;
  write('plays', plays);
}

export function favourites(limit = 5) {
  const plays = read('plays', {});
  return Object.entries(plays)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([id]) => id);
}

/* ---------- best scores, kept per player name on this device ---------- */

// scores: { playerKey: { songId: { hands: { best, stars, plays, last, at } } } }
const playerKey = () => getName().trim().toLowerCase() || '_';

export function songScores(songId) {
  return read('scores', {})[playerKey()]?.[songId] || {};
}

/** Saves a finished run; returns the previous best so the celebration can say "new best". */
export function saveScore(songId, hands, { score, stars }) {
  const all = read('scores', {});
  const mine = (all[playerKey()] ||= {});
  const song = (mine[songId] ||= {});
  const prev = song[hands] || { best: 0, stars: 0, plays: 0 };
  song[hands] = {
    best: Math.max(prev.best, score),
    stars: Math.max(prev.stars, stars),
    plays: prev.plays + 1,
    last: score,
    at: new Date().toISOString(),
  };
  write('scores', all);
  return { prevBest: prev.best, prevStars: prev.stars, firstTime: prev.plays === 0 };
}

/* ---------- recorded tunes (free play), kept per player name on this device ---------- */

// tunes: { playerKey: [{ id, name, emoji, at, notes: [{ m, t, d, i }] }] }, newest first
const MAX_TUNES = 50;

export function myTunes() {
  return read('tunes', {})[playerKey()] || [];
}

export function saveTune(tune) {
  const all = read('tunes', {});
  const list = (all[playerKey()] ||= []);
  const i = list.findIndex((x) => x.id === tune.id);
  if (i >= 0) list[i] = tune;
  else list.unshift(tune);
  all[playerKey()] = list.slice(0, MAX_TUNES);
  write('tunes', all);
  return tune;
}

export function deleteTune(id) {
  const all = read('tunes', {});
  all[playerKey()] = (all[playerKey()] || []).filter((x) => x.id !== id);
  write('tunes', all);
}

export const tuneId = () => newId().slice(0, 8);

/** Songs finished before scoring existed count as one star for the current player. */
export function migrateDone(done) {
  if (read('scoresMigrated', false)) return;
  const all = read('scores', {});
  const mine = (all[playerKey()] ||= {});
  for (const [id, hands] of Object.entries(done || {})) {
    for (const [h, ok] of Object.entries(hands || {})) {
      if (ok && !mine[id]?.[h]) ((mine[id] ||= {})[h] = { best: 0, stars: 1, plays: 1, last: 0, at: null });
    }
  }
  write('scores', all);
  write('scoresMigrated', true);
}

/* ---------- usage events → Google Sheet ---------- */

const MAX_QUEUE = 500;

export function track(type, data = {}) {
  const queue = read('queue', []);
  queue.push({ ts: new Date().toISOString(), type, ...data });
  write('queue', queue.slice(-MAX_QUEUE));
  flush();
}

let flushing = false;

export async function flush() {
  if (!STATS_URL || flushing || !navigator.onLine) return;
  const queue = read('queue', []);
  if (!queue.length) return;
  flushing = true;
  const batch = queue.slice(0, 50);
  let sent = false;
  try {
    // text/plain keeps this a "simple" request (no CORS preflight); Apps Script answers "ok"
    // through a redirect that allows cross-origin reads, so we can confirm the batch was stored.
    const res = await fetch(STATS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ deviceId, name: getName(), lang: document.documentElement.lang, events: batch }),
    });
    if (!res.ok || (await res.text()).trim() !== 'ok') throw new Error(`stats ${res.status}`);
    write('queue', read('queue', []).slice(batch.length));
    sent = true;
  } catch {
    // offline or blocked: keep the queue and try again later
  } finally {
    flushing = false;
  }
  // more to send: continue after a successful batch; otherwise wait for the next event or 'online'
  if (sent && read('queue', []).length) setTimeout(flush, 500);
}

window.addEventListener('online', flush);
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
