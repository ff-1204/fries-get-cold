// 처음부터 끝까지 자동 플레이 — 저장 없는 첫 방문에서 밤 2 진입까지.
//
// verify:balance와 다른 점: **?a= 없이 실제 확률로** 돌고, 튜토리얼부터 시작하며,
// 이상현상에 사람처럼 반응한다 (응시가 쌓이면 눈을 돌리고, 흔적은 다가가 짚는다).
// "동작하는가"를 끝에서 끝까지 확인하는 유일한 검증이다 — 재미 판단은 사람이 해야 한다.
//
// 사용: node scripts/playthrough.mjs [출력폴더]   (dev 서버가 5199에 떠 있어야 한다)

import puppeteer from 'puppeteer-core';
import fs from 'node:fs';

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const BASE = 'http://localhost:5199/fries-get-cold/';
const OUT = process.argv[2] ?? null;
if (OUT) fs.mkdirSync(OUT, { recursive: true });

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const log = [];
let failures = 0;
const say = (s) => { console.log(s); log.push(s); };
const ok = (cond, label, detail = '') => {
  if (!cond) failures += 1;
  say(`${cond ? ' ok ' : 'FAIL'}  ${label}${detail ? '  — ' + detail : ''}`);
  return cond;
};

const browser = await puppeteer.launch({
  executablePath: EDGE, headless: 'new',
  args: ['--enable-unsafe-swiftshader', '--mute-audio'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720, hasTouch: true });
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

const st = () => page.evaluate(() => window.__fries.state());
const shot = (n) => (OUT ? page.screenshot({ path: `${OUT}/${n}.png` }) : Promise.resolve());
const msg = () => page.evaluate(() => document.getElementById('msg')?.textContent ?? '');
const visible = (sel) => page.evaluate(
  (s) => { const e = document.querySelector(s); return !!e && getComputedStyle(e).display !== 'none' && !e.classList.contains('hidden'); }, sel);

/** 시점 회전 — 캔버스에 PointerEvent를 직접 쏜다 (yaw −= dx × 0.00576) */
const turn = (rad) => page.evaluate((r) => {
  const c = document.querySelector('canvas');
  const dx = -r / 0.00576;
  const mk = (t, x) => new PointerEvent(t, { pointerId: 7, pointerType: 'touch', clientX: x, clientY: 360, bubbles: true });
  c.dispatchEvent(mk('pointerdown', 640));
  c.dispatchEvent(mk('pointermove', 640 + dx));
  c.dispatchEvent(mk('pointerup', 640 + dx));
}, rad);

/** 화면의 한 점을 탭 = 직시. 기본은 중앙, aim이 있으면 **그 대상을 조준해서** 한 번만 */
const tap = (aim = null) => page.evaluate((a) => {
  const c = document.querySelector('canvas');
  const x = a ? a.x * window.innerWidth : window.innerWidth / 2;
  const y = a ? a.y * window.innerHeight : window.innerHeight / 2;
  const mk = (t) => new PointerEvent(t, { pointerId: 9, pointerType: 'touch', clientX: x, clientY: y, bubbles: true });
  c.dispatchEvent(mk('pointerdown'));
  c.dispatchEvent(mk('pointerup'));
}, aim);

/**
 * 사람처럼 한 구간을 걷는다.
 *  - 응시(stare)가 쌓이면 **눈을 돌린다** — 붙잡히지 않는 것이 avert의 정답
 *  - 미확인 흔적이 있으면 주기적으로 짚어 본다 (직시는 4.5m 안에서만 성립하므로 근접 시 성립)
 *  - 차도(테마 4)에서는 초록불이 아니면 정지선 앞에서 기다린다
 * @returns {'passed'|'stuck'|'ended'}
 */
async function walkSegment(maxSec = 90) {
  const start = await st();
  let looked = 0;         // 눈을 돌린 횟수
  let taps = 0;
  let waited = 0;
  let lastTap = 0;
  const t0 = Date.now();
  await page.keyboard.down('KeyW');

  while ((Date.now() - t0) / 1000 < maxSec) {
    await wait(180);
    const s = await st();
    if (s.phase !== 'walk') {            // 전환·도착 컷
      await page.keyboard.up('KeyW');
      return { r: 'ended', s, looked, taps, waited };
    }
    if (s.done !== start.done || s.total !== start.total) {
      await page.keyboard.up('KeyW');
      return { r: 'passed', s, looked, taps, waited };
    }

    // ① 사람 형태를 보고 있다 → 눈을 돌린다 (경고 0.4초보다 먼저 반응)
    if (s.stare > 0.3) {
      await page.keyboard.up('KeyW');
      await turn(looked % 2 === 0 ? 0.9 : -0.9);
      looked += 1;
      await wait(500);
      await turn(looked % 2 === 0 ? -0.45 : 0.45); // 통행 방향으로 반쯤 되돌린다
      await page.keyboard.down('KeyW');
      continue;
    }

    // ② 차도 — 초록이 아니면 정지선 앞에서 선다
    if (s.theme === 4 && !s.green && s.z < -19 && s.z > -23) {
      await page.keyboard.up('KeyW');
      waited += 1;
      while (!(await st()).green) await wait(200);
      await page.keyboard.down('KeyW');
      continue;
    }

    // ③ **직시 대상을 조준해서 한 번 짚는다.**
    //    ⚠ 두 번 틀리면 안 된다 — 빗나간 지적은 빈 지적(깊이 +1)이고, 정면만 두들기면
    //    바닥의 핏자국은 영영 못 짚어 빈 지적만으로 깊이 한계에 닿는다 (실측에서 soft fail).
    //    avert 부류는 영원히 checked에 안 들어가므로 active/checked 차이로 판단해서도 안 된다
    if (s.gazeNear !== null && s.gazeNear < 4.3 && s.gazeAim &&
        s.gazeAim.x > 0.04 && s.gazeAim.x < 0.96 && s.gazeAim.y > 0.04 && s.gazeAim.y < 0.96 &&
        Date.now() - lastTap > 900) {
      await tap(s.gazeAim);
      taps += 1;
      lastTap = Date.now();
    }
  }
  await page.keyboard.up('KeyW');
  return { r: 'stuck', s: await st(), looked, taps, waited };
}

// ============================================================
say('=== 처음부터 끝까지 자동 플레이 (저장 없음 → 밤 2) ===');

await page.goto(BASE, { waitUntil: 'networkidle0' });
await wait(1000);

// ---------- 타이틀 ----------
ok(await visible('#start'), '타이틀 게이트가 뜬다');
const btn = await page.evaluate(() => document.getElementById('start-btn')?.textContent);
ok(btn === '퇴근하기!', '첫 방문 버튼 문구', btn);
ok(!(await visible('#coupon')), '첫 방문에는 도장 카드가 없다');
await shot('01-title');
await page.click('#start-btn');
await wait(3000);

// ---------- 퇴근길 튜토리얼 ----------
let s = await st();
ok(s.mode === 'tutorial', '퇴근길 튜토리얼로 진입', `mode=${s.mode}`);
ok(s.theme === 4 && s.done === 3, '정류장 앞(4/5)에서 시작', `테마 ${s.theme}, 구간 ${s.done + 1}/${s.total}`);
ok(s.active === 0, '튜토리얼에는 이상현상이 없다');
await shot('02-tutorial-start');

const tut = [];
for (let i = 0; i < 3; i++) {
  const r = await walkSegment(120);
  tut.push(r);
  say(`      튜토리얼 구간 ${i + 1}: ${r.r} · 테마 ${r.s.theme} · 신호대기 ${r.waited}회`);
  if (r.r !== 'passed') break;
  await wait(2500);
}
ok(tut.some((r) => r.r === 'ended'), '튜토리얼이 가게 도착으로 끝난다');
await wait(1500);
await shot('03-shop-arrival');
const shopMsg = await msg();
say(`      도착 자막: ${JSON.stringify(shopMsg)}`);

// 도착 컷 오버레이 넘기기
for (let i = 0; i < 12; i++) {
  const btns = await page.evaluate(() =>
    [...document.querySelectorAll('button')]
      .filter((b) => b.offsetParent !== null && !b.disabled && !['sound-btn', 'start-btn', 'settings-btn', 'reset-btn', 'walk-btn'].includes(b.id))
      .map((b) => b.textContent));
  if (!btns.length) break;
  say(`      컷 진행 버튼: ${JSON.stringify(btns)}`);
  await page.evaluate(() =>
    [...document.querySelectorAll('button')]
      .filter((b) => b.offsetParent !== null && !b.disabled && !['sound-btn', 'start-btn', 'settings-btn', 'reset-btn', 'walk-btn'].includes(b.id))[0]?.click());
  await wait(2200);
}
await wait(1500);

// ---------- 밤 1 귀갓길 ----------
s = await st();
ok(s.mode === 'return' && s.night === 1, '밤 1 귀갓길로 넘어간다', `mode=${s.mode} night=${s.night}`);
ok(s.theme === 5 && s.done === 0, '먹자골목 입구(1/5)에서 출발', `테마 ${s.theme}, 구간 ${s.done + 1}/${s.total}`);
await shot('04-night1-start');

let guard = 0;
let softFails = 0;
let arrived = false;
while (guard++ < 24) {
  const before = await st();
  const r = await walkSegment(150);
  say(`      밤1 구간 ${before.done + 1}/${before.total} (테마 ${before.theme}) → ${r.r}` +
      ` · 이상 ${before.active}종 · 눈돌림 ${r.looked} · 지적 ${r.taps} · 신호대기 ${r.waited}`);
  if (r.r === 'stuck') { ok(false, `구간 ${before.done + 1}에서 전진하지 못함`, `z=${r.s.z}`); await shot('XX-stuck'); break; }
  if (r.r === 'ended') {
    // 도착인가 soft fail인가 — soft fail은 깊이 한계로 같은 밤을 다시 시작하는 정상 경로다.
    // 버튼 하나를 누르면 골목 입구로 돌아온다. 여기서 끊으면 정상 동작을 실패로 읽는다
    await wait(1200);
    const label = await page.evaluate(() => [...document.querySelectorAll('button')]
      .filter((b) => b.offsetParent !== null && !b.disabled &&
        !['sound-btn', 'start-btn', 'settings-btn', 'reset-btn', 'walk-btn'].includes(b.id))[0]?.textContent ?? null);
    if (label === '…다시 걷는다') {
      softFails += 1;
      say(`      ⟳ 깊이 한계 — 그 밤을 처음부터 (soft fail ${softFails}회)`);
      await page.evaluate(() => [...document.querySelectorAll('button')]
        .filter((b) => b.offsetParent !== null && !b.disabled &&
          !['sound-btn', 'start-btn', 'settings-btn', 'reset-btn', 'walk-btn'].includes(b.id))[0]?.click());
      await wait(3000);
      continue;
    }
    arrived = true;
    break;
  }
  await wait(2600);
}
ok(arrived, '밤 1이 집 도착으로 끝난다', `soft fail ${softFails}회 · 구간 시도 ${guard}회`);

await wait(2000);
await shot('05-home-arrival');
const homeMsg = await msg();
say(`      도착 자막: ${JSON.stringify(homeMsg)}`);
s = await st();
say(`      밤 1 결과: 접힘 ${s.folds}회 · 깊이 ${s.depth} · 총 ${s.total}구간`);

// ---------- 귀가 연출 → 밤 2 ----------
// ⚠ 버튼이 사라지는 것이 끝이 아니다 — 도착 연출은 마지막 박자에서 버튼을 **비활성화한 채**
//    여운을 두고, 그 뒤 밤별 마무리 모놀로그로 이어진다. "버튼이 없다"로 끊으면 너무 일찍 본다
const t0 = Date.now();
while (Date.now() - t0 < 45000) {
  const clicked = await page.evaluate(() => {
    const b = [...document.querySelectorAll('button')]
      .filter((x) => x.offsetParent !== null && !x.disabled && !['sound-btn', 'start-btn', 'settings-btn', 'reset-btn', 'walk-btn'].includes(x.id))[0];
    if (b) { b.click(); return b.textContent; }
    return null;
  });
  if (clicked) say(`      귀가 연출 버튼: ${JSON.stringify(clicked)}`);
  // 다음 밤의 **첫 구간이 깔릴 때까지** 기다린다 — night이 오르는 순간과 rollSegment 사이에
  // 한 박자가 있어서, night만 보고 끊으면 직전 밤의 done/total을 읽게 된다
  const n = await st();
  if (n.night > 1 && n.done === 0 && n.phase === 'walk') break;
  await wait(clicked ? 2200 : 600);       // 버튼이 없으면 여운 중 — 짧게 다시 본다
}
await wait(1500);
s = await st();
ok(s.night === 2, '밤 2로 넘어간다', `night=${s.night} mode=${s.mode} 구간 ${s.done + 1}/${s.total}`);
ok(s.mode === 'return' && s.theme === 5, '밤 2도 먹자골목 입구에서 시작');
await shot('06-night2-start');

const saved = await page.evaluate(() => localStorage.getItem('fries.save.v1'));
say(`      저장 상태: ${saved}`);
ok(saved && JSON.parse(saved).tut === true, '튜토리얼 완료가 저장된다');
ok(saved && JSON.parse(saved).night === 2, '저장된 밤이 2');

// ---------- 오류 ----------
ok(errors.length === 0, '콘솔 오류 없음', errors.slice(0, 3).join(' | '));

say('');
say(failures === 0 ? `=== 전부 통과 ===` : `=== 실패 ${failures}건 ===`);
await browser.close();
process.exit(failures === 0 ? 0 : 1);
