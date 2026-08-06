// 이상현상 **가시성** 검증 — "걸어가는 동안 화면에 실제로 보이는가"를 픽셀로 잰다.
//
// 왜 필요한가: `__fries.occlusion()`은 **가림만** 잰다. 레이캐스트가 5/5로 통과해도
// 그 자리에 빛이 없으면 화면에는 아무것도 없다. 실제로 v0.11.48까지
// **핏자국·끌린 자국은 접근 내내 대비 0.2~1.5**였고(가림 검사는 100% '뚫림'),
// 직시 대상이라 못 보면 곧바로 늘어남이었다 — 보이지 않는 것에 벌을 주고 있었다.
//
// 방법: 구간을 걸으며 매 걸음 스크린샷을 뜨고, 이상현상이 차지한 사각의 휘도를
// **그 둘레 배경의 휘도**와 비교한다. 부품마다 따로 재고 가장 잘 보이는 값을 취한다
// (합집합 사각을 쓰면 흩어진 자국 사이의 아스팔트가 평균을 씻는다).
//
// 사용: npm run verify:visible            — 전체
//       node scripts/verify-visibility.mjs H-001 H-008   — 일부만
//       (dev 서버가 5199에 떠 있어야 한다)

import puppeteer from 'puppeteer-core';
import zlib from 'node:zlib';

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const BASE = 'http://localhost:5199/fries-get-cold/';
const W = 1280, H = 720;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- 두 단계로 본다 ----------
// 하나의 선으로 자르면 도구가 쓸모없어진다: 지금 통과 못 하는 항목이 절반이라
// 늘 빨간불이면 아무도 안 본다. **막을 것과 채울 것**을 나눈다.
//
/** ① 실패선 — 이 아래는 **화면에 없는 것과 같다.** 회귀를 막는 선이고 반드시 통과해야 한다.
 *  근거: v0.11.48 실측에서 못 보던 것들이 0.2~2.0이었다 */
const FAIL_CONTRAST = 4.5;
/** ② 목표선 — 여기까지 와야 '걸어가다 알아본다'가 된다. 미달은 경고로만 남긴다.
 *  근거: 잘 보이던 것들이 백골 17 · 신발 49 · 어둠의 눈 81 · 간판 39였다 */
const GOOD_CONTRAST = 8;
/** 목표 대비가 **이 거리 밖에서부터** 나와야 한다.
 *  근거가 v0.11.50에 바뀌었다: 예전에는 "직시가 4.5m에서 성립하니 그전에 보여야 공정하다"였다.
 *  판정이 사라진 지금은 **멈춰 세우려면 걸어오는 동안 보여야 한다**가 이유다 —
 *  코앞에서야 보이는 것은 지나친 뒤에 알아차리게 되고, 그건 풍경도 못 된다.
 *  거리는 그대로 8m (걷기 3.2m/s → 약 2.5초, 눈이 가고 걸음이 멎기에 필요한 시간) */
const MIN_SEEN_DIST = 8;

// ---------- 최소 PNG 디코더 (8bit RGB/RGBA, 인터레이스 없음) ----------
function decodePNG(buf) {
  let p = 8, w = 0, h = 0, bd = 0, ct = 0; const idat = [];
  while (p < buf.length) {
    const len = buf.readUInt32BE(p); const type = buf.toString('ascii', p + 4, p + 8);
    const d = buf.subarray(p + 8, p + 8 + len);
    if (type === 'IHDR') { w = d.readUInt32BE(0); h = d.readUInt32BE(4); bd = d[8]; ct = d[9]; }
    else if (type === 'IDAT') idat.push(d); else if (type === 'IEND') break;
    p += 12 + len;
  }
  if (bd !== 8) throw new Error(`bitDepth ${bd} 미지원`);
  const ch = ct === 6 ? 4 : ct === 2 ? 3 : 0;
  if (!ch) throw new Error(`colorType ${ct} 미지원`);
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const stride = w * ch; const out = Buffer.alloc(h * stride); let q = 0;
  for (let y = 0; y < h; y++) {
    const f = raw[q++]; const row = raw.subarray(q, q + stride); q += stride;
    const cur = out.subarray(y * stride, (y + 1) * stride);
    const prev = y > 0 ? out.subarray((y - 1) * stride, y * stride) : null;
    for (let x = 0; x < stride; x++) {
      const a = x >= ch ? cur[x - ch] : 0, b = prev ? prev[x] : 0, c = prev && x >= ch ? prev[x - ch] : 0;
      let v = row[x];
      if (f === 1) v += a; else if (f === 2) v += b; else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) {
        const pp = a + b - c, pa = Math.abs(pp - a), pb = Math.abs(pp - b), pc = Math.abs(pp - c);
        v += (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
      }
      cur[x] = v & 0xff;
    }
  }
  return { w, h, ch, data: out };
}

function meanLum(img, x0, y0, x1, y1, skip = null) {
  let s = 0, n = 0;
  const X0 = Math.max(0, Math.floor(x0)), X1 = Math.min(img.w - 1, Math.ceil(x1));
  const Y0 = Math.max(0, Math.floor(y0)), Y1 = Math.min(img.h - 1, Math.ceil(y1));
  for (let y = Y0; y <= Y1; y++) for (let x = X0; x <= X1; x++) {
    if (skip && x >= skip.x0 && x <= skip.x1 && y >= skip.y0 && y <= skip.y1) continue;
    const i = (y * img.w + x) * img.ch;
    s += 0.2126 * img.data[i] + 0.7152 * img.data[i + 1] + 0.0722 * img.data[i + 2]; n++;
  }
  return n ? s / n : null;
}

// [id, effect, 구간, 재는 밤]  ※ 밤은 그 항목이 유효한 아무 밤
const CASES = [
  ['H-001', 'blood_trail', 1, 5], ['H-002', 'skull', 1, 5], ['H-003', 'face_window', 1, 5],
  ['H-010', 'shoes', 1, 5], ['H-013', 'bike_figure', 1, 5],
  ['H-004', 'handprints', 2, 5], ['H-011', 'shutter_glow', 2, 5], ['H-017', 'sign_lit', 2, 5],
  ['H-019', 'lone_shadow', 2, 5],
  ['H-005', 'swing_figure', 3, 4], ['H-006', 'eyes', 3, 5], ['H-012', 'slide_figure', 3, 5],
  ['H-020', 'fence_hands', 3, 5], ['H-009', 'figure', 3, 5],
  ['H-007', 'bus_figure', 4, 5], ['H-014', 'across_figure', 4, 5], ['H-016', 'bench_shoes', 4, 5],
  ['H-008', 'drag_mark', 5, 5], ['H-015', 'open_shutter', 5, 5],
];

const only = process.argv.slice(2);
const cases = only.length ? CASES.filter((c) => only.includes(c[0]) || only.includes(c[1])) : CASES;

const browser = await puppeteer.launch({
  executablePath: EDGE, headless: 'new', args: ['--enable-unsafe-swiftshader', '--mute-audio'],
});
let failures = 0;
let warnings = 0;
console.log(`가시성 검증 — FAIL: 최대대비 < ${FAIL_CONTRAST} (화면에 없는 것과 같다)`);
console.log(`             WARN: 대비 ${GOOD_CONTRAST} 이상이 ${MIN_SEEN_DIST}m 밖에서 안 나옴\n`);

for (const [id, effect, seg, night] of cases) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: W, height: H });
    await page.evaluateOnNewDocument((s) => localStorage.setItem('fries.save.v1', s),
      JSON.stringify({ night: 5, tut: true, misses: 0, results: [], brightness: 1, muted: true }));
    await page.goto(`${BASE}?a=${effect}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForFunction(() => !!globalThis.__fries, { timeout: 20000 });
    await page.evaluate(() => [...document.querySelectorAll('button')]
      .find((e) => /나선다|퇴근/.test(e.textContent))?.click());
    await page.waitForFunction(() => globalThis.__fries?.state().phase === 'walk', { timeout: 20000 });
    await page.evaluate(([t, n]) => window.__fries.admin.jump({ night: n, morning: false, theme: t, depth: 0 }), [seg, night]);
    await wait(700);

    if ((await page.evaluate(() => window.__fries.state())).active === 0) {
      console.log(`FAIL  ${id} ${effect} — 스폰 실패`); failures++; await page.close(); continue;
    }

    let bestSeenDist = 0, peak = 0;
    for (let i = 0; i < 34; i++) {
      const cur = await page.evaluate(() => window.__fries.state());
      if (cur.phase !== 'walk' || cur.active === 0) break;
      const o = (await page.evaluate(() => window.__fries.occlusion())).find((r) => r.id === id);
      if (o?.clear && o.rects?.length) {
        const img = decodePNG(Buffer.from(await page.screenshot({ encoding: 'binary' })));
        for (const rc of o.rects) {
          const x0 = Math.max(0, rc.x0 * W), x1 = Math.min(W, rc.x1 * W);
          const y0 = Math.max(0, rc.y0 * H), y1 = Math.min(H, rc.y1 * H);
          const wp = x1 - x0, hp = y1 - y0;
          if (wp <= 2 || hp <= 2) continue;
          const inL = meanLum(img, x0, y0, x1, y1);
          const pad = Math.min(70, Math.max(10, Math.max(wp, hp) * 0.7));
          const outL = meanLum(img, x0 - pad, y0 - pad, x1 + pad, y1 + pad, { x0, y0, x1, y1 });
          if (inL === null || outL === null) continue;
          const c = Math.abs(inL - outL);
          if (c > peak) peak = c;
          if (c >= GOOD_CONTRAST && o.dist > bestSeenDist) bestSeenDist = o.dist;
        }
      }
      await page.keyboard.down('KeyW'); await wait(280); await page.keyboard.up('KeyW');
    }

    const failed = peak < FAIL_CONTRAST;
    const good = bestSeenDist >= MIN_SEEN_DIST;
    if (failed) failures++; else if (!good) warnings++;
    const tag = failed ? 'FAIL' : good ? ' ok ' : 'WARN';
    console.log(`${tag}  ${id} ${effect.padEnd(14)} 구간${seg}` +
      ` | 목표달성 ${String(Math.round(bestSeenDist * 10) / 10 || '—').padStart(5)}m` +
      ` | 최대대비 ${peak.toFixed(1).padStart(6)}`);
  } catch (e) {
    failures++; console.log(`FAIL  ${id} ${effect} — ${String(e).slice(0, 60)}`);
  } finally { await page.close().catch(() => {}); }
}

await browser.close();
console.log(`\n=== 실패 ${failures}건 · 목표 미달 ${warnings}건 ===`);
if (warnings) console.log('※ WARN은 배포를 막지 않는다 — 남은 밝기 작업의 목록이다 (anomalies.md)');
process.exit(failures ? 1 : 0);
