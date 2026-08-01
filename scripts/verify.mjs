// 헤드리스 검증 — 이상현상 가시성 스크린샷 + 밸런싱 실측 (docs/development.md '검증 방법')
//
// 준비: npm run dev -- --port 5199 --strictPort  (별도 터미널)
// 사용: npm run verify:shots    — 이상현상 정상/이상 비교 + 구간 테마 스크린샷 → verify-shots/
//       npm run verify:balance  — ?a=none 클린 왕복 실측 (걷기/질주/걷기+과잉우회2 온도 목표 검증)
//
// 원리: main.ts의 읽기 전용 훅 window.__fries.state()로 위치·상태를 읽으며
// page.keyboard로 주파한다 (WASD 리스너는 포인터락과 무관).
// 주의: vite dev 서버가 소스 변경 시 page reload를 브로드캐스트하므로, 소스를 고친 직후의
// 실행은 "frame got detached"로 죽을 수 있다 — 재실행하면 된다.

import puppeteer from 'puppeteer-core';
import fs from 'node:fs';

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const BASE = 'http://localhost:5199/';
const OUT = 'verify-shots';
fs.mkdirSync(OUT, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// 게임 상수는 손으로 복사하지 않는다 — __fries.config()에서 파생 (구간 길이 변경에 자동 추종)

async function launch() {
  const browser = await puppeteer.launch({
    executablePath: EDGE,
    headless: 'new',
    args: ['--enable-unsafe-swiftshader', '--window-size=1280,800', '--mute-audio'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  page.on('pageerror', (e) => console.error('PAGEERROR:', e.message));
  return { browser, page };
}

/** 프롤로그(첫 시작 3클릭) → 타이틀 → 시작. params 예: 'a=none', 'a=laundry_open' */
async function startGame(page, params = '') {
  await page.goto(BASE + (params ? `?${params}` : ''), { waitUntil: 'load' });
  await page.waitForSelector('#wake-btn', { timeout: 20000 });
  await sleep(500);
  await page.click('#wake-btn');
  for (let i = 0; i < 3; i++) {
    await page.waitForFunction(() => {
      const b = document.getElementById('prologue-btn');
      return b && b.style.visibility !== 'hidden';
    }, { timeout: 15000 });
    await sleep(350);
    await page.click('#prologue-btn');
    await sleep(500);
  }
  await page.waitForFunction(
    () => !document.getElementById('start').classList.contains('hidden'),
    { timeout: 10000 },
  );
  await page.click('#start-btn');
  await page.waitForFunction(() => globalThis.__fries?.state().phase === 'walk', { timeout: 10000 });
}

const state = (page) => page.evaluate(() => globalThis.__fries.state());

/** 본길 통과 — phase/segment/returning이 바뀔 때까지 전진 (run=Shift) */
async function passMain(page, run = false) {
  const s0 = await state(page);
  if (run) await page.keyboard.down('ShiftLeft');
  await page.keyboard.down('KeyW');
  await page.waitForFunction(
    (a) => {
      const s = globalThis.__fries.state();
      return s.segment !== a.segment || s.returning !== a.returning || s.phase !== 'walk';
    },
    { polling: 100, timeout: 40000 },
    s0,
  );
  await page.keyboard.up('KeyW');
  if (run) await page.keyboard.up('ShiftLeft');
}

/** 샛길 우회 — 개구부(가운데)까지 전진 후 왼쪽(A)으로 이탈 */
async function passSide(page) {
  const s0 = await state(page);
  const gapZ = await page.evaluate(() => {
    const g = globalThis.__fries.config().sideGap;
    return (g.zNear + g.zFar) / 2;
  });
  await page.keyboard.down('KeyW');
  await page.waitForFunction(
    (gz) => { const s = globalThis.__fries.state(); return s.z <= gz || s.phase !== 'walk'; },
    { polling: 60, timeout: 40000 },
    gapZ,
  );
  await page.keyboard.up('KeyW');
  await page.keyboard.down('KeyA');
  await page.waitForFunction(
    (a) => {
      const s = globalThis.__fries.state();
      return s.segment !== a.segment || s.returning !== a.returning || s.phase !== 'walk';
    },
    { polling: 60, timeout: 20000 },
    s0,
  );
  await page.keyboard.up('KeyA');
}

/** z 목표 지점까지만 전진 (스크린샷용) */
async function walkTo(page, z) {
  await page.keyboard.down('KeyW');
  await page.waitForFunction(
    (t) => globalThis.__fries.state().z <= t,
    { polling: 60, timeout: 40000 },
    z,
  );
  await page.keyboard.up('KeyW');
  await sleep(400);
}

// 동적 오버레이(blackScreen/tasteScene)만 — 정적 오버레이(#wake/#prologue/#start)의
// 숨은 버튼을 잡으면 오클릭이 난다 (이 세션에서 실제로 겪은 함정)
const DYN = 'body > .overlay:not(#wake):not(#prologue):not(#start)';

async function clickOverlayButton(page) {
  await page.waitForFunction((sel) => {
    const btns = [...document.querySelectorAll(`${sel} button`)];
    return btns.length > 0 && !btns.at(-1).disabled;
  }, { polling: 120, timeout: 30000 }, DYN);
  await sleep(600);
  await page.evaluate((sel) => [...document.querySelectorAll(`${sel} button`)].at(-1).click(), DYN);
}

async function shot(page, name) {
  await sleep(300);
  await page.screenshot({ path: `${OUT}/${name}.png` });
  console.log('shot:', name);
}

// ---------- 모드 1: 스크린샷 (이상현상 정상/이상 비교 + 구간 테마) ----------
// 새 이상현상을 추가하면 여기에 [파라미터, 도달 구간, 관찰 z] 케이스를 추가한다
async function shots() {
  const cases = [
    // [디버그 파라미터, 태그, 통과할 구간 수, 관찰 z]
    ['a=none', 'seg1-flyer-normal', 0, -11],
    ['a=flyer_digits', 'seg1-flyer-anomaly', 0, -11],
    ['a=none', 'seg2-realty-normal', 1, -14.5],
    ['a=realty_urgent', 'seg2-realty-anomaly', 1, -14.5],
    ['a=none', 'seg5-shopsign-normal', 4, -22],
    ['a=shop_typo', 'seg5-shopsign-anomaly', 4, -22],
  ];
  for (const [param, tag, passes, z] of cases) {
    const { browser, page } = await launch();
    await startGame(page, param);
    for (let i = 0; i < passes; i++) await passMain(page);
    await walkTo(page, z);
    await shot(page, tag);
    await browser.close();
  }
  // 구간별 테마·구조 한 바퀴 (정상)
  const { browser, page } = await launch();
  await startGame(page, 'a=none');
  for (let seg = 1; seg <= 5; seg++) {
    await walkTo(page, -9);
    await shot(page, `theme-seg${seg}-front`);
    await walkTo(page, -20);
    await shot(page, `theme-seg${seg}-mid`);
    if (seg < 5) await passMain(page);
  }
  await browser.close();
}

// ---------- 모드 2: 밸런싱 실측 (?a=none 클린 왕복) ----------
async function playNight(page, { run = false, detours = 0 } = {}) {
  const t0 = Date.now();
  for (let i = 0; i < 5; i++) await passMain(page); // 가는 길: 직진
  await clickOverlayButton(page); // 버거집 — 봉투를 받는다
  await page.waitForFunction(() => globalThis.__fries.state().returning === true, { timeout: 10000 });
  const tShop = Date.now();
  let d = detours;
  for (let i = 0; i < 5; i++) {
    if ((await state(page)).phase !== 'walk') break;
    if (d > 0) { await passSide(page); d -= 1; }
    else await passMain(page, run);
  }
  await clickOverlayButton(page); // 귀가 비트 → 시식으로
  await page.waitForFunction(
    (sel) => [...document.querySelectorAll(`${sel} .sub`)].some((e) => e.textContent.includes('바삭함')),
    { polling: 150, timeout: 20000 },
    DYN,
  );
  const gauge = await page.evaluate(
    (sel) => [...document.querySelectorAll(`${sel} .sub`)].at(-1).textContent, DYN);
  const quote = await page.evaluate(
    (sel) => [...document.querySelectorAll(`${sel} .quote`)].at(-1).textContent, DYN);
  return {
    gauge, quote,
    outboundSec: ((tShop - t0) / 1000).toFixed(1),
    returnSec: ((Date.now() - tShop) / 1000).toFixed(1),
  };
}

async function balance() {
  // 목표 (config.ts CONFIG 주석): 걷기=미지근 / 질주=바삭 / 걷기+과잉 우회 2회=눅눅
  const cases = [
    ['walk', { run: false, detours: 0 }],
    ['run', { run: true, detours: 0 }],
    ['walk+2detour', { run: false, detours: 2 }],
  ];
  for (const [name, opt] of cases) {
    const { browser, page } = await launch();
    await startGame(page, 'a=none');
    const r = await playNight(page, opt);
    console.log(`[${name}] ${r.gauge} | ${r.quote.split('\n')[0]} | 편도 ${r.outboundSec}s, 귀로 ${r.returnSec}s`);
    if (name === 'walk') {
      // 시식 연출 통과 확인: 한 입 ×2 → 에필로그 → 다음 밤 진입
      await clickOverlayButton(page);
      await sleep(600);
      await clickOverlayButton(page);
      await sleep(3500);
      await shot(page, 'taste-epilogue');
      await clickOverlayButton(page);
      await page.waitForFunction(() => globalThis.__fries.state().night === 2, { timeout: 15000 });
      console.log('밤 2 진입 확인:', JSON.stringify(await state(page)));
    }
    await browser.close();
  }
}

const mode = process.argv[2] ?? 'shots';
if (mode === 'shots') await shots();
else if (mode === 'balance') await balance();
else { console.error(`unknown mode: ${mode} (shots | balance)`); process.exit(1); }
console.log('done');
