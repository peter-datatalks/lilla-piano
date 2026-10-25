/**
 * Lilla Piano – usage statistics receiver (Google Apps Script).
 *
 * Setup (once, about 5 minutes):
 *   1. Create a new Google Sheet, e.g. "Lilla Piano stats".
 *   2. Extensions → Apps Script. Replace the code with this file and save.
 *   3. Project Settings (gear) → Script properties → Add property:
 *        ADMIN_KEY = <a long secret of your choice>   (the admin page asks for it)
 *   4. Deploy → New deployment → type "Web app":
 *        Execute as: Me
 *        Who has access: Anyone
 *      Copy the web app URL (ends in /exec).
 *   5. Put that URL in js/config.js (STATS_URL) and publish the app.
 *
 * The app POSTs batches of events; the admin page GETs all rows with ?key=ADMIN_KEY.
 * Only first names, a random device id and song/instrument choices are stored.
 */

const SHEET = 'events';
const HEADERS = ['received', 'ts', 'deviceId', 'name', 'lang', 'type', 'song', 'hands', 'view', 'instrument'];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET);
  if (!sh) {
    sh = ss.insertSheet(SHEET);
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  }
  return sh;
}

// Plain text only: cap the length and stop the sheet from treating input as a formula.
function clean_(value, max) {
  let s = String(value == null ? '' : value).slice(0, max);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const body = JSON.parse(e.postData.contents);
    const events = Array.isArray(body.events) ? body.events.slice(0, 100) : [];
    const now = new Date();
    const rows = events.map((ev) => [
      now,
      clean_(ev.ts, 40),
      clean_(body.deviceId, 64),
      clean_(body.name, 40),
      clean_(body.lang, 5),
      clean_(ev.type, 20),
      clean_(ev.song, 60),
      clean_(ev.hands, 10),
      clean_(ev.view, 10),
      clean_(ev.instrument, 30),
    ]);
    if (rows.length) {
      const sh = sheet_();
      sh.getRange(sh.getLastRow() + 1, 1, rows.length, HEADERS.length).setValues(rows);
    }
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error');
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  const key = PropertiesService.getScriptProperties().getProperty('ADMIN_KEY');
  const params = (e && e.parameter) || {}; // e is missing when run from the editor (▶ Run)
  if (!key || params.key !== key) return json_({ error: 'unauthorized' });
  const values = sheet_().getDataRange().getValues().slice(1);
  const rows = values.map((r) => ({
    ts: r[1] || (r[0] instanceof Date ? r[0].toISOString() : String(r[0])),
    deviceId: r[2], name: r[3], lang: r[4], type: r[5], song: r[6], hands: r[7], view: r[8], instrument: r[9],
  }));
  return json_({ rows });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
