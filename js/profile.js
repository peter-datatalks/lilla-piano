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
