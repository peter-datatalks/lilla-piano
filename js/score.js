// Scoring for guided play. There is no failing: finishing a song always earns at least one star.
//
// Every note (step) is worth up to 100 points:
//   100  pressed right away, without a wrong key or a hint
//    60  found after trying other keys
//    30  found after the app played a hint
// Stars come from those points only:  ≥ 85 % → ★★★,  ≥ 60 % → ★★,  otherwise ★.
// A steady beat adds a bonus of up to 20 points per note on top; it never lowers the stars.

const POINTS = { clean: 100, tried: 60, hinted: 30 };
const RHYTHM_BONUS = 20;

export function newRun(stepCount) {
  return { wrong: new Array(stepCount).fill(0), hinted: new Array(stepCount).fill(false), at: new Array(stepCount).fill(0) };
}

/** steps: the song's steps (with .time in beats); run: filled in during play. */
export function scoreRun(steps, run) {
  const n = steps.length;
  let base = 0;
  for (let i = 0; i < n; i++) base += run.hinted[i] ? POINTS.hinted : run.wrong[i] ? POINTS.tried : POINTS.clean;

  // Rhythm: compare each gap between notes to the gap the song asks for, relative to the child's own tempo
  // (the median seconds-per-beat), so slow and steady counts as well as fast and steady.
  const ratios = [];
  for (let i = 1; i < n; i++) {
    const beats = steps[i].time - steps[i - 1].time;
    const secs = (run.at[i] - run.at[i - 1]) / 1000;
    if (beats > 0 && secs > 0 && !run.hinted[i]) ratios.push({ i, r: secs / beats });
  }
  let bonus = 0;
  if (ratios.length >= 3) {
    const sorted = ratios.map((x) => x.r).sort((a, b) => a - b);
    const median = sorted[sorted.length >> 1];
    for (const { r } of ratios) {
      const off = Math.abs(r / median - 1);
      if (off < 0.25) bonus += RHYTHM_BONUS;
      else if (off < 0.45) bonus += RHYTHM_BONUS / 2;
    }
  }

  const accuracy = n ? base / (POINTS.clean * n) : 1;
  const stars = accuracy >= 0.85 ? 3 : accuracy >= 0.6 ? 2 : 1;
  const score = Math.round((base + bonus) / 10) * 10;
  return { score, stars, accuracy, rhythm: ratios.length ? bonus / (RHYTHM_BONUS * ratios.length) : 0 };
}

export const starsText = (n, max = 3) => '★'.repeat(n) + '☆'.repeat(Math.max(0, max - n));
