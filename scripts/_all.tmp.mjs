import puppeteer from 'puppeteer-core';
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const ALL = ['blood_trail','skull','face_window','handprints','swing_figure','eyes','bus_figure',
  'drag_mark','figure','shoes','shutter_glow','slide_figure','open_shutter','bike_figure','across_figure'];
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  headless: 'new', args: ['--enable-unsafe-swiftshader', '--mute-audio'] });
let bad = 0;
for (const eff of ALL) {
  const ctx = await browser.createBrowserContext();
  const page = await ctx.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.evaluateOnNewDocument((s) => localStorage.setItem('fries.save.v1', s),
    JSON.stringify({ night: 5, tut: true, misses: 0, results: [], brightness: 1, muted: true }));
  await page.goto(`http://localhost:5199/fries-get-cold/?a=${eff}&avert=off`, { waitUntil: 'networkidle0' });
  await wait(700); await page.click('#start-btn'); await wait(2400);
  for (let hop = 0; hop < 6; hop++) {
    const s = await page.evaluate(() => window.__fries.state());
    if (s.active > 0) break;
    await page.keyboard.down('KeyW');
    const d0 = s.done;
    for (let t = 0; t < 60; t++) { await wait(400); if ((await page.evaluate(() => window.__fries.state().done)) > d0) break; }
    await page.keyboard.up('KeyW'); await wait(2100);
  }
  let seen = 0;
  for (let i = 0; i < 5; i++) {
    for (const x of await page.evaluate(() => window.__fries.occlusion())) if (x.clear) seen++;
    await page.keyboard.down('KeyW'); await wait(1500); await page.keyboard.up('KeyW'); await wait(250);
  }
  const okk = seen >= 3;
  if (!okk) bad++;
  console.log(`${okk ? ' ok ' : 'FAIL'}  ${eff.padEnd(14)} ${seen}/5`);
  await ctx.close();
}
console.log(bad === 0 ? '15종 전부 통과 — 배치 3원칙 ② 유지' : `${bad}종 실패`);
await browser.close();
process.exit(bad ? 1 : 0);
