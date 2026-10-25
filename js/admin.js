// Admin statistics page: reads all usage events from the Google Sheet (via the Apps Script
// web app) and shows totals, players and plays per song, theme, country, mode and instrument.
// Add ?demo to the URL to preview with made-up data.
import { STATS_URL } from './config.js';
import { SONGS, THEMES } from './songs.js';
import { brandMini } from './brand.js';
import { t } from './i18n.js';

const $ = (s) => document.querySelector(s);
const demo = new URLSearchParams(location.search).has('demo');
const keyStore = {
  get() { try { return localStorage.getItem('lp:adminKey') || ''; } catch { return ''; } },
  set(v) { try { localStorage.setItem('lp:adminKey', v); } catch { /* private mode */ } },
  clear() { try { localStorage.removeItem('lp:adminKey'); } catch { /* private mode */ } },
};

const songById = new Map(SONGS.map((s) => [s.id, s]));
const FLAG = { se: '🇸🇪', hu: '🇭🇺' };
const isPlay = (r) => r.type === 'play' || r.type === 'listen';
const day = (ts) => String(ts).slice(0, 10);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- aggregation ---------- */

function count(map, key, n = 1) { if (key) map.set(key, (map.get(key) || 0) + n); }

export function aggregate(rows) {
  rows = rows.filter((r) => r && r.ts).sort((a, b) => String(a.ts).localeCompare(String(b.ts)));
  const users = new Map();
  const songs = new Map();
  const themes = new Map();
  const countries = new Map();
  const hands = new Map();
  const views = new Map();
  const instruments = new Map();
  const daily = new Map();
  const totals = { visits: 0, plays: 0, listens: 0, completes: 0 };

  for (const r of rows) {
    let u = users.get(r.deviceId);
    if (!u) {
      u = { deviceId: r.deviceId, name: '', first: r.ts, last: r.ts, visits: 0, plays: 0, completes: 0, songs: new Map() };
      users.set(r.deviceId, u);
    }
    if (r.name) u.name = r.name; // rows are sorted, so this ends as the latest name
    u.last = r.ts;
    if (r.type === 'visit') { u.visits++; totals.visits++; }
    if (r.type === 'complete') { u.completes++; totals.completes++; }
    if (r.type === 'play') totals.plays++;
    if (r.type === 'listen') totals.listens++;
    if (r.song) {
      let s = songs.get(r.song);
      if (!s) { s = { id: r.song, plays: 0, listens: 0, completes: 0, players: new Set() }; songs.set(r.song, s); }
      if (r.type === 'play') s.plays++;
      if (r.type === 'listen') s.listens++;
      if (r.type === 'complete') s.completes++;
      if (isPlay(r)) s.players.add(r.deviceId);
    }
    if (isPlay(r)) {
      u.plays++;
      count(u.songs, r.song);
      count(daily, day(r.ts));
      const song = songById.get(r.song);
      (song?.themes || []).forEach((th) => count(themes, th));
      count(countries, song?.country);
      count(instruments, r.instrument);
    }
    if (r.type === 'play') {
      count(hands, r.hands);
      count(views, r.view);
    }
  }

  const since = new Date(Date.now() - 7 * 864e5).toISOString();
  const userList = [...users.values()].sort((a, b) => String(b.last).localeCompare(String(a.last)));
  return {
    totals: {
      ...totals,
      players: users.size,
      named: userList.filter((u) => u.name).length,
      active7: userList.filter((u) => String(u.last) >= since).length,
    },
    users: userList,
    songs: [...songs.values()].sort((a, b) => (b.plays + b.listens) - (a.plays + a.listens)),
    themes, countries, hands, views, instruments, daily,
  };
}

/* ---------- rendering ---------- */

const songTitle = (id) => {
  const s = songById.get(id);
  return s ? `${s.emoji} ${esc(s.title)}` : esc(id);
};

function fmtDate(ts) {
  const d = new Date(ts);
  return Number.isNaN(+d) ? esc(ts) : d.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
}

// Horizontal bars (one series, so one colour; the value is printed beside each bar).
function bars(title, entries, { label = (k) => esc(k), note = () => '', limit = 12, empty = 'Nothing yet' } = {}) {
  const list = entries.filter(([, v]) => v > 0).slice(0, limit);
  const max = Math.max(1, ...list.map(([, v]) => v));
  const rows = list.map(([k, v]) => `
    <div class="bar-row" title="${esc(typeof k === 'string' ? k : '')}: ${v}">
      <span class="bar-label">${label(k)}</span>
      <span class="bar-track"><span class="bar-fill" style="width:${(v / max) * 100}%"></span></span>
      <span class="bar-value">${v}<small>${note(k)}</small></span>
    </div>`).join('');
  return `<section class="panel"><h2>${title}</h2>${rows || `<p class="muted">${empty}</p>`}</section>`;
}

const sorted = (map) => [...map.entries()].sort((a, b) => b[1] - a[1]);

function render(data) {
  const { totals } = data;
  const tiles = [
    ['Players', totals.players, `${totals.named} with a name · ${totals.active7} active this week`],
    ['Visits', totals.visits, 'times the app was opened'],
    ['Songs played', totals.plays, `+ ${totals.listens} listened to`],
    ['Songs finished', totals.completes, totals.plays ? `${Math.round((totals.completes / totals.plays) * 100)}% of plays` : ''],
  ].map(([k, v, s]) => `<div class="tile"><span class="tile-label">${k}</span><span class="tile-value">${v}</span><span class="tile-sub">${s}</span></div>`).join('');

  // daily activity, last 30 days (plays + listens)
  const days = [];
  for (let i = 29; i >= 0; i--) days.push(new Date(Date.now() - i * 864e5).toISOString().slice(0, 10));
  const dmax = Math.max(1, ...days.map((d) => data.daily.get(d) || 0));
  const dayBars = days.map((d) => {
    const v = data.daily.get(d) || 0;
    return `<span class="col" title="${d}: ${v} plays"><span class="col-fill" style="height:${Math.max(v ? 6 : 0, (v / dmax) * 100)}%"></span></span>`;
  }).join('');

  const userRows = data.users.map((u) => {
    const fav = [...u.songs.entries()].sort((a, b) => b[1] - a[1])[0];
    return `<tr>
      <td><strong>${u.name ? esc(u.name) : '<span class="muted">(no name)</span>'}</strong><br><small class="muted">device ${esc(String(u.deviceId).slice(0, 8))}</small></td>
      <td>${fmtDate(u.first)}</td><td>${fmtDate(u.last)}</td>
      <td class="num">${u.visits}</td><td class="num">${u.plays}</td><td class="num">${u.completes}</td>
      <td>${fav ? `${songTitle(fav[0])} <small class="muted">×${fav[1]}</small>` : '<span class="muted">–</span>'}</td>
    </tr>`;
  }).join('');

  const songRows = data.songs.map((s) => {
    const song = songById.get(s.id);
    return `<tr>
      <td>${songTitle(s.id)}</td>
      <td>${song ? FLAG[song.country] || '' : ''}</td>
      <td>${song ? esc(song.level) : ''}</td>
      <td class="num">${s.plays}</td><td class="num">${s.listens}</td><td class="num">${s.completes}</td>
      <td class="num">${s.players.size}</td>
    </tr>`;
  }).join('');
  const neverPlayed = SONGS.filter((s) => !data.songs.some((x) => x.id === s.id && x.plays + x.listens > 0)).length;

  $('#stats').innerHTML = `
    ${demo ? '<p class="admin-message">Demo data. Remove <code>?demo</code> from the address to see real statistics.</p>' : ''}
    <div class="tiles">${tiles}</div>

    <section class="panel">
      <h2>Daily activity <small>plays + listens, last 30 days</small></h2>
      <div class="cols">${dayBars}</div>
      <div class="cols-axis"><span>${days[0]}</span><span>today</span></div>
    </section>

    <section class="panel">
      <h2>Players <small>${data.users.length}</small></h2>
      <div class="table-wrap"><table>
        <thead><tr><th>Name</th><th>First seen</th><th>Last seen</th><th class="num">Visits</th><th class="num">Plays</th><th class="num">Finished</th><th>Favourite song</th></tr></thead>
        <tbody>${userRows || '<tr><td colspan="7" class="muted">No players yet</td></tr>'}</tbody>
      </table></div>
    </section>

    <div class="grid2">
      ${bars('Most played songs', data.songs.map((s) => [s.id, s.plays + s.listens]), { label: songTitle, note: (id) => { const s = data.songs.find((x) => x.id === id); return s.completes ? ` · ${s.completes} finished` : ''; } })}
      ${bars('Themes', sorted(data.themes), { label: (k) => esc(t(`theme.${k}`)) })}
      ${bars('Countries', sorted(data.countries), { label: (k) => `${FLAG[k] || ''} ${esc(t(`country.${k}`))}` })}
      ${bars('Hands', sorted(data.hands), { label: (k) => esc({ one: '☝️ One hand', two: '🙌 Two hands', chords: '💪 Chords' }[k] || k) })}
      ${bars('Note views', sorted(data.views), { label: (k) => esc({ notes: '🎹 Notes', sheet: '🎼 Sheet music', solfege: '🎵 Do-Re-Mi' }[k] || k) })}
      ${bars('Instruments', sorted(data.instruments), { label: (k) => esc(t(`inst.${k}`)), limit: 10 })}
    </div>

    <section class="panel">
      <h2>All songs played <small>${data.songs.length} songs · ${neverPlayed} of ${SONGS.length} never played</small></h2>
      <div class="table-wrap"><table>
        <thead><tr><th>Song</th><th></th><th>Level</th><th class="num">Plays</th><th class="num">Listens</th><th class="num">Finished</th><th class="num">Players</th></tr></thead>
        <tbody>${songRows || '<tr><td colspan="7" class="muted">No songs played yet</td></tr>'}</tbody>
      </table></div>
    </section>`;
  $('#updated').textContent = `Updated ${new Date().toLocaleTimeString(undefined, { timeStyle: 'short' })}`;
}

/* ---------- loading ---------- */

function message(text) {
  $('#message').innerHTML = text;
  $('#message').classList.toggle('hidden', !text);
}

function demoRows() {
  const names = ['Ella', 'Bence', 'Moa', 'Liliána'];
  const rows = [];
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  names.forEach((name, i) => {
    const deviceId = `demo-${i}-0000`;
    for (let d = 0; d < 30; d++) {
      if (Math.random() < 0.45) continue;
      const ts = new Date(Date.now() - d * 864e5 - Math.random() * 6e7).toISOString();
      rows.push({ ts, deviceId, name, type: 'visit' });
      for (let k = 0; k < 1 + Math.floor(Math.random() * 4); k++) {
        const song = pick(SONGS.slice(0, 25 + i * 15)).id;
        const ev = { ts, deviceId, name, song, hands: pick(['one', 'one', 'two', 'chords']), view: pick(['notes', 'notes', 'sheet', 'solfege']), instrument: pick(['piano', 'piano', 'violin', 'flute', 'xylophone']) };
        rows.push({ ...ev, type: Math.random() < 0.25 ? 'listen' : 'play' });
        if (Math.random() < 0.6) rows.push({ ...ev, type: 'complete' });
      }
    }
  });
  return rows;
}

async function load() {
  if (demo) { render(aggregate(demoRows())); return; }
  if (!STATS_URL) {
    message('Statistics are not connected yet. Deploy <code>tools/stats-apps-script.gs</code> and put its web-app URL in <code>js/config.js</code> (see README).');
    return;
  }
  const key = keyStore.get();
  if (!key) { $('#login').classList.remove('hidden'); return; }
  message('Loading…');
  try {
    const res = await fetch(`${STATS_URL}?key=${encodeURIComponent(key)}`);
    const data = await res.json();
    if (data.error) {
      keyStore.clear();
      $('#login').classList.remove('hidden');
      message('That key was not accepted.');
      return;
    }
    message('');
    $('#login').classList.add('hidden');
    render(aggregate(data.rows || []));
  } catch (e) {
    message(`Could not load statistics (${esc(e.message)}).`);
  }
}

$('[data-brand-mini]').innerHTML = brandMini();
$('#login').onsubmit = (e) => { e.preventDefault(); keyStore.set($('#key').value.trim()); load(); };
$('#refresh').onclick = load;
$('#forget').onclick = () => { keyStore.clear(); $('#stats').innerHTML = ''; $('#login').classList.remove('hidden'); };
load();
