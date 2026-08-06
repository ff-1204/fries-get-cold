// 처음부터 끝까지 자동 플레이 — 저장 없는 첫 방문에서 밤 2 진입까지.
//
// verify:balance와 다른 점: **?a= 없이 실제 확률로** 돌고, 튜토리얼부터 시작하며,
// 이상현상에 사람처럼 반응한다 — 무서운 것 앞에서 **한 번 멈춰 선다**.
// (짚기는 v0.11.50, 눈 돌리기는 v0.11.56에 사라졌다: 이제 대응할 판정이 없다)
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

// (시점 회전 헬퍼 `turn`이 여기 있었다 — 응시 판정을 흉내 내던 도구라 v0.11.56 이후
//  쓰는 곳이 없어졌다. 시선으로 무언가를 재는 검증이 다시 필요하면 verify.mjs의 것을 가져온다)

/** 무서운 것을 보면 **사람은 멈춘다** — 그 반응을 몇 초로 흉내 낼 것인가 (v0.11.51).
 *
 *  ⚠ **이 값에는 근거가 없다.** 사람이 실제로 몇 초를 멈추는지는 아무도 재 본 적이 없고,
 *  머무름 임계(config.stillGrowSec)가 맞는지는 전적으로 이 값에 달려 있다.
 *  그래서 고정하지 않고 밖에서 넣게 뒀다 — 두 값을 돌려 비교하는 것이 이 하네스의 쓸모다:
 *      LOOK_SEC=5 node scripts/playthrough.mjs
 *  진짜 값은 사람이 걸어야 나온다 (docs/game.md '남은 가장 큰 구멍') */
const LOOK_SEC = Number(process.env.LOOK_SEC ?? 2.5);

/**
 * 사람처럼 한 구간을 걷는다.
 *  - 차도(테마 4)에서는 초록불이 아니면 정지선 앞에서 기다린다
 *  - **흔적에는 아무것도 하지 않는다** (v0.11.50): 짚는 동사가 없다
 *  - ⭐ 다만 **이상현상이 있는 구간에서는 한 번 멈춰 선다** (v0.11.51) —
 *    그게 이 게임이 기대하는 반응이고, 멈춘 만큼 골목이 자란다. 그 대가를 여기서 잰다
 * @returns {'passed'|'stuck'|'ended'}
 */
async function walkSegment(maxSec = 90) {
  const start = await st();
  let waited = 0;
  let stopped = false;    // 이 구간에서 이상현상을 보고 멈춘 적이 있는가
  const t0 = Date.now();
  await page.keyboard.down('KeyW');

  while ((Date.now() - t0) / 1000 < maxSec) {
    await wait(180);
    const s = await st();
    if (s.phase !== 'walk') {            // 전환·도착 컷
      await page.keyboard.up('KeyW');
      return { r: 'ended', s, waited, stopped };
    }
    // ⚠ **`total` 변화를 통과로 읽으면 안 된다** (v0.11.51): 머무름으로 자라면 걷는 도중에도
    //    total이 오른다. 구간을 넘어간 것은 `done`뿐이 말해 준다 —
    //    예전 조건(`s.total !== start.total`)을 그대로 뒀다면 서 있다가 자란 순간
    //    하네스가 "통과했다"고 착각해 매 구간을 반쯤만 걷는다
    if (s.done !== start.done) {
      await page.keyboard.up('KeyW');
      return { r: 'passed', s, waited, stopped };
    }

    // ② 차도 — 초록이 아니면 정지선 앞에서 선다
    if (s.theme === 4 && !s.green && s.z < -19 && s.z > -23) {
      await page.keyboard.up('KeyW');
      waited += 1;
      while (!(await st()).green) await wait(200);
      await page.keyboard.down('KeyW');
      continue;
    }
    // ③ 이상현상이 있는 구간 — 한가운데쯤에서 **한 번 멈춰 본다.**
    //    짚을 수는 없다(v0.11.50). 할 수 있는 것은 보는 것뿐이고, 보는 동안 골목이 자란다
    if (!stopped && s.active > 0 && s.z < -12) {
      stopped = true;
      await page.keyboard.up('KeyW');
      await wait(LOOK_SEC * 1000);
      await page.keyboard.down('KeyW');
    }
  }
  await page.keyboard.up('KeyW');
  return { r: 'stuck', s: await st(), waited, stopped };
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
      ` · 이상 ${before.active}종 · 멈춰봄 ${r.stopped ? 'O' : '—'}` +
      ` · 자람 ${before.grown}→${r.s.grown} · 신호대기 ${r.waited}`);
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
say(`      밤 1 결과: 늘어남 ${s.stretches}회 · 깊이 ${s.depth} · 총 ${s.total}구간` +
    ` (기본 5 + 자람 ${s.grown})`);

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
