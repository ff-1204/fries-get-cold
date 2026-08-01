// 헤드리스 검증 — 이상현상 가시성 스크린샷 + 판정 실측 (docs/development.md '검증 방법')
//
// 준비: npm run dev -- --port 5199 --strictPort  (별도 터미널)
// 사용: npm run verify:shots    — 이상현상 정상/이상 비교 + 구간 테마 스크린샷 → verify-shots/
//       npm run verify:balance  — 무결점 밤·접힘→입구 리셋·정당 우회 실측 (접히는 골목 판정)
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

/** 본길 통과 — 걸음(done)이 넘어가거나 phase가 바뀔 때까지 전진 (run=Shift) */
async function passMain(page, run = false) {
  const s0 = await state(page);
  if (run) await page.keyboard.down('ShiftLeft');
  await page.keyboard.down('KeyW');
  await page.waitForFunction(
    (a) => {
      const s = globalThis.__fries.state();
      return s.done !== a.done || s.phase !== 'walk';
    },
    { polling: 100, timeout: 40000 },
    s0,
  );
  await page.keyboard.up('KeyW');
  if (run) await page.keyboard.up('ShiftLeft');
}

/** 지적 — ?a= 디버그 한정 검증 훅으로 결정적 재현 (이상 있으면 성공, 없으면 빈 지적) */
const debugSpot = (page) => page.evaluate(() => globalThis.__fries.debugSpot());

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
  {
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
  // 접힘 반복 구간 — 분필 자국(입구) + 깊이 2의 가로등 감광 (game.md 인지 4요소 ④·꺼져가는 빛)
  {
    const { browser, page } = await launch();
    await startGame(page, 'a=umbrella');
    await passMain(page); // 접힘 1회 → 같은 구간 반복 (depth 2)
    await walkTo(page, -3.2); // 분필 자국(z=-5.5)이 전방 바닥에 보이는 지점
    await shot(page, 'fold-repeat-mark');
    await walkTo(page, -12); // 가로등(z=-16.2) 앞 — 감광 확인
    await shot(page, 'fold-depth2-lamp');
    await browser.close();
  }
}

// ---------- 모드 2: 판정 실측 (접힘·깊이·soft fail — game.md 판정) ----------
async function balance() {
  // 1) 무결점 밤 (?a=none) — 접힘 0 → '아직 따뜻하다' → 시식 → 밤 2 진입
  {
    const { browser, page } = await launch();
    await startGame(page, 'a=none');
    const t0 = Date.now();
    for (let i = 0; i < 5; i++) await passMain(page);
    const sec = ((Date.now() - t0) / 1000).toFixed(1);
    await clickOverlayButton(page); // 버거집 — 봉투를 받는다
    await sleep(1200);
    await clickOverlayButton(page); // 귀가 컷 → 시식으로
    await page.waitForFunction(
      (sel) => [...document.querySelectorAll(`${sel} .sub`)].some((e) => e.textContent.includes('🍟')),
      { polling: 150, timeout: 20000 },
      DYN,
    );
    const gauge = await page.evaluate(
      (sel) => [...document.querySelectorAll(`${sel} .sub`)].at(-1).textContent, DYN);
    const quote = await page.evaluate(
      (sel) => [...document.querySelectorAll(`${sel} .quote`)].at(-1).textContent, DYN);
    console.log(`[무결점] ${gauge} | ${quote.split('\n')[0]} | 편도 ${sec}s`);
    await clickOverlayButton(page); // 한 입
    await sleep(600);
    await clickOverlayButton(page); // 한 입 더
    await sleep(3500);
    await shot(page, 'taste-epilogue');
    await clickOverlayButton(page); // 불을 끄고 눕는다
    await page.waitForFunction(() => globalThis.__fries.state().night === 2, { timeout: 15000 });
    console.log('밤 2 진입 확인:', JSON.stringify(await state(page)));
    await browser.close();
  }

  // 2) 접힘 3회 = 깊이 한계 → 골목 입구 리셋 (?a=umbrella — 구간 1 이상 고정, 본길 강행)
  {
    const { browser, page } = await launch();
    await startGame(page, 'a=umbrella');
    for (let i = 0; i < 2; i++) {
      await passMain(page);
      const s = await state(page);
      console.log(`[접힘 ${i + 1}] ${JSON.stringify({ done: s.done, total: s.total, depth: s.depth, folds: s.folds })}`);
    }
    await passMain(page); // 3번째 접힘 → depth 6 → soft fail 오버레이
    await clickOverlayButton(page); // …다시 걷는다
    await page.waitForFunction(
      () => { const s = globalThis.__fries.state(); return s.phase === 'walk' && s.done === 0; },
      { timeout: 15000 },
    );
    const s = await state(page);
    console.log('입구 리셋 확인:', JSON.stringify({ night: s.night, done: s.done, total: s.total, depth: s.depth }));
    await browser.close();
  }

  // 3) 지적 성공 = 무비용 통과 (?a=umbrella — 구간 1 이상 고정, 짚고 나서 직진)
  {
    const { browser, page } = await launch();
    await startGame(page, 'a=umbrella');
    await debugSpot(page);
    const spotted = (await state(page)).spotted;
    await passMain(page);
    const s = await state(page);
    console.log('지적 통과 확인:', JSON.stringify({ spotted, done: s.done, total: s.total, depth: s.depth, folds: s.folds, theme: s.theme }));
    await browser.close();
  }

  // 4) 빈 지적 = 깊이 +1 (?a=none — 이상 없는 구간에서 짚기)
  {
    const { browser, page } = await launch();
    await startGame(page, 'a=none');
    await debugSpot(page);
    const s = await state(page);
    console.log('빈 지적 확인:', JSON.stringify({ depth: s.depth, done: s.done, folds: s.folds }));
    await browser.close();
  }
}

const mode = process.argv[2] ?? 'shots';
if (mode === 'shots') await shots();
else if (mode === 'balance') await balance();
else { console.error(`unknown mode: ${mode} (shots | balance)`); process.exit(1); }
console.log('done');
