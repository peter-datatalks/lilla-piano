// Web Audio synth engine. Every instrument is a preset for one generic voice:
// oscillators (with optional per-partial decay, FM, noise, vibrato) -> filter -> amp envelope.

import { instrumentById, INSTRUMENTS as INSTRUMENT_LIST } from './instruments.js';
import * as samples from './samples.js';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

const PRESETS = {
  piano: {
    oscs: [
      { type: 'triangle', ratio: 1, gain: 0.55 },
      { type: 'sine', ratio: 2, gain: 0.22, decay: 0.5 },
      { type: 'sine', ratio: 3, gain: 0.08, decay: 0.25 },
      { type: 'sine', ratio: 4.02, gain: 0.04, decay: 0.12 },
    ],
    filter: { freq: (f) => f * 4 + 600, peak: (f, v) => f * 10 + 2500 * v, attack: 0.004, decay: 0.25 },
    amp: { gain: 0.6, attack: 0.004, decay: (f) => clamp(1.4 - Math.log2(f / 130) * 0.3, 0.3, 1.6), sustain: 0, release: 0.35 },
  },
  jazz: { // Rhodes-style electric piano (FM)
    oscs: [
      { type: 'sine', ratio: 1, gain: 0.6 },
      { type: 'sine', ratio: 2, gain: 0.08, decay: 0.6 },
      { type: 'sine', ratio: 14, gain: 0.015, decay: 0.03 },
    ],
    fm: { ratio: 1, index: 1.6, decay: 0.35, sustain: 0.15 },
    vibrato: { rate: 4.5, depth: 4 },
    amp: { gain: 0.55, attack: 0.003, decay: 1.1, sustain: 0, release: 0.3 },
  },
  organ: {
    oscs: [0.5, 1, 2, 3, 4, 6, 8].map((ratio, i) => ({
      type: 'sine', ratio, gain: [0.25, 0.45, 0.3, 0.12, 0.12, 0.05, 0.04][i],
    })),
    vibrato: { rate: 6.2, depth: 7 },
    amp: { gain: 0.3, attack: 0.012, decay: 0.15, sustain: 0.85, release: 0.07 },
    reverb: 1.4,
  },
  flute: {
    oscs: [
      { type: 'sine', ratio: 1, gain: 0.7 },
      { type: 'sine', ratio: 2, gain: 0.1 },
      { type: 'sine', ratio: 3, gain: 0.04 },
    ],
    noise: { gain: 0.05, ratio: 2, Q: 1.5 },
    vibrato: { rate: 5, depth: 14, delay: 0.25 },
    amp: { gain: 0.42, attack: 0.07, decay: 0.2, sustain: 0.85, release: 0.15 },
    transpose: 12,
  },
  trumpet: {
    oscs: [
      { type: 'sawtooth', ratio: 1, gain: 0.4, scoop: 70 },
      { type: 'sawtooth', ratio: 1, gain: 0.25, detune: 6, scoop: 70 },
    ],
    filter: { freq: (f) => f * 3 + 300, peak: (f, v) => f * 7 + 2500 * v, attack: 0.06, decay: 0.25, Q: 2 },
    vibrato: { rate: 5.5, depth: 9, delay: 0.35 },
    amp: { gain: 0.3, attack: 0.035, decay: 0.2, sustain: 0.75, release: 0.09 },
  },
  glock: {
    oscs: [
      { type: 'sine', ratio: 1, gain: 0.6 },
      { type: 'sine', ratio: 2.76, gain: 0.22, decay: 0.12 },
      { type: 'sine', ratio: 5.4, gain: 0.08, decay: 0.05 },
      { type: 'sine', ratio: 8.93, gain: 0.04, decay: 0.03 },
    ],
    amp: { gain: 0.45, attack: 0.002, decay: 0.6, sustain: 0, release: 1, ignoreRelease: true },
    transpose: 24,
    reverb: 1.3,
  },
};

let ctx = null;
let master = null;
let wetIn = null;
let noiseBuf = null;
const live = [];
const MAX_VOICES = 32;

const mtof = (m) => 440 * 2 ** ((m - 69) / 12);
const val = (x, f, v) => (typeof x === 'function' ? x(f, v) : x);

function impulse(seconds, decay) {
  const len = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len) ** decay;
  }
  return buf;
}

function ensure() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    ctx = new AC({ latencyHint: 'interactive' });
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.knee.value = 12;
    comp.ratio.value = 4;
    comp.connect(ctx.destination);
    master = ctx.createGain();
    master.gain.value = 0.7;
    master.connect(comp);
    const verb = ctx.createConvolver();
    verb.buffer = impulse(1.8, 3);
    const wet = ctx.createGain();
    wet.gain.value = 0.2;
    wetIn = ctx.createGain();
    wetIn.connect(verb);
    verb.connect(wet);
    wet.connect(comp);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const nd = noiseBuf.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
  }
  if (ctx.state !== 'running') ctx.resume();
  return ctx;
}

// Call from a user gesture. Also asks iOS to play even when the silent switch is on.
export function unlock() {
  try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch { /* unsupported */ }
  ensure();
}

export const now = () => ensure().currentTime;

// Freeze an AudioParam at time t so a new ramp can start from its current value.
function hold(param, t) {
  if (param.cancelAndHoldAtTime) { param.cancelAndHoldAtTime(t); return; }
  if (t <= ctx.currentTime + 0.005) {
    const v = param.value;
    param.cancelScheduledValues(ctx.currentTime);
    param.setValueAtTime(v, ctx.currentTime);
  }
}

// Synth voice for a preset, now (or at `when`, in AudioContext time). Returns { release(at), kill() }.
function playSynth(presetId, midi, vel = 0.8, when) {
  const c = ensure();
  const p = PRESETS[presetId] || PRESETS.piano;
  const t = Math.max(when ?? c.currentTime, c.currentTime);
  const f = mtof(midi + (p.transpose || 0));

  const out = c.createGain();
  out.gain.value = 0;
  out.connect(master);
  const send = c.createGain();
  send.gain.value = p.reverb ?? 1;
  out.connect(send);
  send.connect(wetIn);

  let dest = out;
  if (p.filter) {
    const fl = c.createBiquadFilter();
    fl.type = p.filter.type || 'lowpass';
    fl.Q.value = p.filter.Q ?? 0.7;
    const base = Math.min(val(p.filter.freq, f, vel), 18000);
    fl.frequency.setValueAtTime(base, t);
    if (p.filter.peak) {
      fl.frequency.linearRampToValueAtTime(Math.min(val(p.filter.peak, f, vel), 18000), t + p.filter.attack);
      fl.frequency.setTargetAtTime(base, t + p.filter.attack, p.filter.decay);
    }
    fl.connect(out);
    dest = fl;
  }

  const srcs = [];
  let vibGain = null;
  if (p.vibrato) {
    const lfo = c.createOscillator();
    lfo.frequency.value = p.vibrato.rate;
    vibGain = c.createGain();
    vibGain.gain.setValueAtTime(0, t);
    vibGain.gain.linearRampToValueAtTime(p.vibrato.depth, t + (p.vibrato.delay || 0) + 0.3);
    lfo.connect(vibGain);
    srcs.push(lfo);
  }

  const carriers = [];
  for (const o of p.oscs) {
    const osc = c.createOscillator();
    osc.type = o.type || 'sine';
    osc.frequency.value = f * (o.ratio || 1);
    if (o.scoop) {
      osc.detune.setValueAtTime((o.detune || 0) - o.scoop, t);
      osc.detune.linearRampToValueAtTime(o.detune || 0, t + 0.07);
    } else {
      osc.detune.value = o.detune || 0;
    }
    if (vibGain) vibGain.connect(osc.detune);
    const g = c.createGain();
    g.gain.setValueAtTime(o.gain, t);
    if (o.decay) g.gain.setTargetAtTime(0, t, o.decay);
    osc.connect(g);
    g.connect(dest);
    srcs.push(osc);
    carriers.push(osc);
  }

  if (p.fm) {
    const mod = c.createOscillator();
    mod.frequency.value = f * p.fm.ratio;
    const mg = c.createGain();
    const idx = f * p.fm.index * (0.5 + vel * 0.5);
    mg.gain.setValueAtTime(idx, t);
    mg.gain.setTargetAtTime(idx * (p.fm.sustain ?? 0.1), t, p.fm.decay);
    mod.connect(mg);
    mg.connect(carriers[0].frequency);
    srcs.push(mod);
  }

  if (p.noise) {
    const n = c.createBufferSource();
    n.buffer = noiseBuf;
    n.loop = true;
    const bp = c.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = Math.min(f * (p.noise.ratio || 2), 16000);
    bp.Q.value = p.noise.Q || 1;
    const ng = c.createGain();
    ng.gain.setValueAtTime(0, t);
    ng.gain.linearRampToValueAtTime(p.noise.gain * 1.6, t + 0.04);
    ng.gain.setTargetAtTime(p.noise.gain, t + 0.04, 0.1);
    n.connect(bp);
    bp.connect(ng);
    ng.connect(dest);
    srcs.push(n);
  }

  const a = p.amp;
  const peak = a.gain * vel;
  const dec = val(a.decay, f);
  out.gain.setValueAtTime(0, t);
  out.gain.linearRampToValueAtTime(peak, t + a.attack);
  out.gain.setTargetAtTime(peak * (a.sustain || 0), t + a.attack, dec);
  srcs.forEach((s) => s.start(t));

  const stopAt = (time) => srcs.forEach((s) => { try { s.stop(time); } catch { /* already stopped */ } });
  if (!a.sustain) stopAt(t + a.attack + dec * 7);

  const voice = {
    release(at) {
      if (a.ignoreRelease) return;
      const tt = Math.max(at ?? c.currentTime, c.currentTime);
      hold(out.gain, tt);
      out.gain.setTargetAtTime(0, tt, a.release / 3);
      stopAt(tt + a.release * 2 + 0.05);
    },
    kill() {
      const tt = c.currentTime;
      hold(out.gain, tt);
      out.gain.setTargetAtTime(0, tt, 0.01);
      stopAt(tt + 0.08);
    },
  };
  srcs[0].onended = () => {
    out.disconnect();
    const i = live.indexOf(voice);
    if (i >= 0) live.splice(i, 1);
  };
  live.push(voice);
  if (live.length > MAX_VOICES) live.shift().kill();
  return voice;
}

// Short happy arpeggio for celebrations: kept soft so it sits below a played piano note
// (the overlapping high notes add up and sound much louder than their level suggests).
export function jingle() {
  const t = now();
  [60, 64, 67, 72, 76, 79, 84].forEach((m, i) => playSynth('glock', m, 0.24 - i * 0.015, t + i * 0.09));
}

/* ---------- recorded samples ---------- */

const LOOP_START = 0.6; // the FluidR3 notes hold steady from ~0.2 s to their 3.16 s end
const LOOP_END = 2.9;

function playSample(entry, inst, vel, when) {
  const c = ensure();
  const t = Math.max(when ?? c.currentTime, c.currentTime);
  const src = c.createBufferSource();
  src.buffer = entry.buf;
  src.playbackRate.value = entry.rate;
  if (inst.sustain && entry.buf.duration > LOOP_END) {
    src.loop = true;
    src.loopStart = LOOP_START;
    src.loopEnd = LOOP_END;
  }
  const out = c.createGain();
  out.gain.setValueAtTime(entry.gain * vel * 0.6, t);
  out.connect(master);
  out.connect(wetIn);
  src.connect(out);
  src.start(t);
  if (!src.loop) src.stop(t + entry.buf.duration / entry.rate + 0.05);

  const stopAt = (time) => { try { src.stop(time); } catch { /* already stopped */ } };
  const release = inst.release ?? 0.3;
  const voice = {
    release(at) {
      if (inst.ignoreRelease) return;
      const tt = Math.max(at ?? c.currentTime, c.currentTime);
      hold(out.gain, tt);
      out.gain.setTargetAtTime(0, tt, release / 3);
      stopAt(tt + release * 2 + 0.05);
    },
    kill() {
      const tt = c.currentTime;
      hold(out.gain, tt);
      out.gain.setTargetAtTime(0, tt, 0.01);
      stopAt(tt + 0.08);
    },
  };
  src.onended = () => {
    out.disconnect();
    const i = live.indexOf(voice);
    if (i >= 0) live.splice(i, 1);
  };
  live.push(voice);
  if (live.length > MAX_VOICES) live.shift().kill();
  return voice;
}

// Play a keyboard note on an instrument: the recorded sample when loaded, otherwise the synth.
export function playNote(instId, midi, vel = 0.8, when) {
  const inst = instrumentById(instId);
  const m = midi + (inst.transpose || 0);
  const entry = inst.gm && samples.find(inst.gm, m);
  if (entry) return playSample(entry, inst, vel, when);
  if (inst.gm) samples.load(ensure(), inst.gm, m); // fetch it for next time
  return playSynth(inst.synth, midi, vel, when);
}

// Fetch every note an instrument needs for the keyboard range lo..hi.
export function preloadInstrument(instId, lo, hi) {
  const inst = instrumentById(instId);
  if (!inst.gm) return Promise.resolve();
  const t = inst.transpose || 0;
  return samples.preload(ensure(), inst.gm, lo + t, hi + t);
}

export function instrumentReady(instId, lo, hi) {
  const inst = instrumentById(instId);
  const t = inst.transpose || 0;
  return !inst.gm || samples.isLoaded(inst.gm, lo + t, hi + t);
}

// Save every instrument's notes for the keys the app uses (C3–C6) for offline play.
export function saveAllInstruments(onProgress) {
  const jobs = INSTRUMENT_LIST.filter((i) => i.gm).map((i) => {
    const t = i.transpose || 0;
    return { gm: i.gm, lo: 48 + t, hi: 84 + t };
  });
  return samples.saveForOffline(jobs, onProgress);
}
