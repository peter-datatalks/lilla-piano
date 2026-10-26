// Loads recorded notes one note at a time, on demand: FluidR3_GM by Frank Wen (MIT), rendered to MP3 by
// gleitz/midi-js-soundfonts (CC BY 3.0), hosted with the app in assets/sounds/ (see LICENSES/FluidR3_GM.txt).
// Files are kept in Cache Storage when available (secure origins), so they work offline later.

const BASE = new URL('../assets/sounds/FluidR3_GM/', import.meta.url).href;
const FILE_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const CACHE = 'lp-samples-v1';
const LOWEST = 21; // A0
const HIGHEST = 108; // C8

const buffers = new Map();
const pending = new Map();

const sampleUrl = (gm, m) => `${BASE}${gm}-mp3/${FILE_NAMES[m % 12]}${Math.floor(m / 12) - 1}.mp3`;

async function fetchBytes(url) {
  if (window.caches) {
    try {
      const cache = await caches.open(CACHE);
      let res = await cache.match(url);
      if (!res) {
        res = await fetch(url);
        if (!res.ok) throw new Error(res.status);
        await cache.put(url, res.clone());
      }
      return await res.arrayBuffer();
    } catch { /* fall through to a plain fetch */ }
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(res.status);
  return res.arrayBuffer();
}

// Older Safari only supports the callback form of decodeAudioData.
const decode = (ctx, bytes) => new Promise((res, rej) => ctx.decodeAudioData(bytes, res, rej));

// Gain that brings the loudest sample to 0.8, so every instrument plays at a similar volume.
function normGain(buf) {
  let peak = 0;
  for (let ch = 0; ch < buf.numberOfChannels; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < d.length; i += 4) { const v = Math.abs(d[i]); if (v > peak) peak = v; }
  }
  return peak > 0.001 ? Math.min(8, 0.8 / peak) : 1;
}

export function load(ctx, gm, m) {
  if (m < LOWEST || m > HIGHEST) return Promise.resolve(null);
  const key = `${gm}:${m}`;
  if (buffers.has(key)) return Promise.resolve(buffers.get(key));
  if (pending.has(key)) return pending.get(key);
  const p = fetchBytes(sampleUrl(gm, m))
    .then((bytes) => decode(ctx, bytes))
    .then((buf) => {
      const entry = { buf, gain: normGain(buf) };
      buffers.set(key, entry);
      return entry;
    })
    .catch(() => null)
    .finally(() => pending.delete(key));
  pending.set(key, p);
  return p;
}

// Exact sample, or the nearest loaded one within 4 semitones (played faster/slower).
export function find(gm, m) {
  for (let d = 0; d <= 4; d++) {
    for (const n of d ? [m - d, m + d] : [m]) {
      const e = buffers.get(`${gm}:${n}`);
      if (e) return { ...e, rate: 2 ** ((m - n) / 12) };
    }
  }
  return null;
}

export function isLoaded(gm, lo, hi) {
  for (let m = Math.max(lo, LOWEST); m <= Math.min(hi, HIGHEST); m++) if (!buffers.has(`${gm}:${m}`)) return false;
  return true;
}

export function preload(ctx, gm, lo, hi) {
  const jobs = [];
  for (let m = Math.max(lo, LOWEST); m <= Math.min(hi, HIGHEST); m++) jobs.push(load(ctx, gm, m));
  return Promise.all(jobs);
}

// Download notes into Cache Storage without decoding them (for offline use).
// jobs: [{ gm, lo, hi }]. Calls onProgress(done, total). Resolves to the number of failures.
export async function saveForOffline(jobs, onProgress) {
  if (!window.caches) throw new Error('Cache Storage unavailable');
  const cache = await caches.open(CACHE);
  const urls = [];
  for (const { gm, lo, hi } of jobs) {
    for (let m = Math.max(lo, LOWEST); m <= Math.min(hi, HIGHEST); m++) urls.push(sampleUrl(gm, m));
  }
  let done = 0;
  let failed = 0;
  let next = 0;
  const worker = async () => {
    while (next < urls.length) {
      const url = urls[next++];
      try {
        if (!(await cache.match(url))) {
          const res = await fetch(url);
          if (!res.ok) throw new Error(res.status);
          await cache.put(url, res);
        }
      } catch { failed++; }
      onProgress(++done, urls.length);
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  return failed;
}
