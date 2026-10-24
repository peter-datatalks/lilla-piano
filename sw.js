// Service worker: makes Lilla Piano work offline once it has been opened online.
// - App files: served from cache, refreshed in the background (new versions show on the next start).
// - Google Fonts: cached the first time they load.
// - Instrument samples are cached by js/samples.js itself (Cache Storage "lp-samples-v1").

// Bump the version when releasing so every device downloads the new app files.
const SHELL = 'lp-shell-v6';
const FONTS = 'lp-fonts-v1';

const APP_FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icon.svg',
  'css/style.css',
  'assets/moose.png',
  'assets/apple-touch-icon.png',
  'js/app.js',
  'js/audio.js',
  'js/brand.js',
  'js/cascade.js',
  'js/i18n.js',
  'js/icons.js',
  'js/instruments.js',
  'js/keyboard.js',
  'js/music.js',
  'js/samples.js',
  'js/songs.js',
  'js/songs-se-extra.js',
  'js/songs-hu.js',
  'js/songs-anthems.js',
];

self.addEventListener('install', (event) => {
  // cache: 'reload' skips the browser's HTTP cache, so we never store an old copy
  event.waitUntil(caches.open(SHELL)
    .then((c) => c.addAll(APP_FILES.map((f) => new Request(f, { cache: 'reload' }))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keep = [SHELL, FONTS, 'lp-samples-v1'];
    for (const key of await caches.keys()) if (!keep.includes(key)) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // fonts: cache first
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(cacheFirst(FONTS, req));
    return;
  }
  // our own files: stale-while-revalidate
  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(SHELL, req));
  }
  // everything else (instrument samples) goes to the network; samples.js caches those itself
});

async function cacheFirst(name, req) {
  const cache = await caches.open(name);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
  return res;
}

async function staleWhileRevalidate(name, req) {
  const cache = await caches.open(name);
  const hit = await cache.match(req, { ignoreSearch: true });
  const update = fetch(req, { cache: 'no-cache' })
    .then((res) => { if (res.ok) cache.put(req, res.clone()); return res; })
    .catch(() => null);
  if (hit) return hit;
  const res = await update;
  return res || (req.mode === 'navigate' ? cache.match('index.html') : Response.error());
}
