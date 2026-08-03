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

/** 타이틀 → 시작 (프롤로그 시퀀스는 v0.9.0에서 제거 — 타이틀 단일 게이트). params 예: 'a=none' */
async function startGame(page, params = '') {
  await page.goto(BASE + (params ? `?${params}` : ''), { waitUntil: 'load' });
  await page.waitForFunction(
    () => !document.getElementById('start').classList.contains('hidden'),
    { timeout: 20000 },
  );
  await sleep(500);
  await page.click('#start-btn');
  await page.waitForFunction(() => globalThis.__fries?.state().phase === 'walk', { timeout: 10000 });
}

const state = (page) => page.evaluate(() => globalThis.__fries.state());

/** 차도(테마 4)를 건너기 전 — **막 초록으로 바뀐 순간**까지 기다린다.
 *  점멸 끝물에 출발하면 설계대로 정말 치인다 (v0.11.7: "그 판단이 플레이어의 몫").
 *  검증 주행이 재현해야 하는 것은 '정상 통과'이므로 초록 시작에 맞춰 건넌다 */
/** 신호를 기다린 시간의 합 — 완주 시간에서 떼어 내기 위해 잰다 (아래 주석) */
let greenWaitMs = 0;
async function waitForFreshGreen(page) {
  const t0 = Date.now();
  const g = (want) => page.waitForFunction(
    (w) => globalThis.__fries.state().green === w,
    { polling: 60, timeout: 20000 },
    want,
  );
  await g(false); // 빨강을 한 번 지나
  await g(true);  // 초록으로 바뀌는 순간
  greenWaitMs += Date.now() - t0;
}

/** 본길 통과 — 걸음(done)이 넘어가거나 phase가 바뀔 때까지 전진 (달리기 없음 — v0.11.2).
 *  **접힘은 삼키지 않는다**: phase 변화만 보면 치임·붙잡힘도 '통과'로 읽혀
 *  같은 구간을 조용히 반복 촬영하게 된다 (2026-08-03 실측으로 발견한 결함) */
async function passMain(page) {
  const s0 = await state(page);
  await page.keyboard.down('KeyW');
  if (s0.theme === 4) {
    // 차도 — **정지선 앞까지 간 뒤 거기서** 초록을 기다린다 (v0.11.31).
    // 구간 시작(36m 앞)에서 기다리면 도로에 닿는 시점의 신호 위상이 우연에 맡겨지고,
    // 차 주행 시간 같은 상수를 조금만 건드려도 무결점 주행이 뒤집힌다 — 실제로 뒤집혔다.
    // 사람은 정지선에서 기다린다: 하네스도 그렇게 해야 '정상 통과'를 재현한다
    await page.waitForFunction(
      () => globalThis.__fries.state().z <= -20.6, { polling: 30, timeout: 30000 },
    );
    await page.keyboard.up('KeyW');
    await waitForFreshGreen(page);
    await page.keyboard.down('KeyW');
  }
  await page.waitForFunction(
    (a) => {
      const s = globalThis.__fries.state();
      return s.done !== a.done || s.phase !== 'walk';
    },
    { polling: 100, timeout: 40000 },
    s0,
  );
  await page.keyboard.up('KeyW');
  const s1 = await state(page);
  if (s1.folds !== s0.folds) {
    console.warn(`  ⚠ 통과 중 접힘 — theme ${s0.theme}, folds ${s0.folds}→${s1.folds}, depth ${s1.depth}`);
  }
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

// 동적 오버레이(blackScreen/tasteScene)만 — 정적 오버레이(#start)의
// 숨은 버튼을 잡으면 오클릭이 난다 (이 세션에서 실제로 겪은 함정)
const DYN = 'body > .overlay:not(#start)';

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
  // v0.11.0 귀갓길 구조: 테마가 5→1 역순이므로 구간 S에 도달하려면 (5 - S)번 통과한다.
  // avert(사람 형태)는 정면으로 담으면 붙잡히므로 스크린샷용으로 `avert=off`를 붙인다
  const cases = [
    // [디버그 파라미터, 태그, 통과할 구간 수, 관찰 z]
    ['a=drag_mark', 'seg5-dragmark-anomaly', 0, -14],
    ['a=open_shutter', 'seg5-openshutter-anomaly', 0, -9],
    ['a=none', 'seg5-normal', 0, -14],
    ['a=bus_figure&avert=off', 'seg4-busfigure-anomaly', 1, -7],
    ['a=across_figure&avert=off', 'seg4-acrossfigure-anomaly', 1, -18],
    ['a=swing_figure&avert=off', 'seg3-swingfigure-anomaly', 2, -10],
    ['a=eyes&avert=off', 'seg3-eyes-anomaly', 2, -15],
    ['a=slide_figure&avert=off', 'seg3-slidefigure-anomaly', 2, -8],
    ['a=handprints', 'seg2-handprints-anomaly', 3, -10],
    ['a=shutter_glow', 'seg2-shutterglow-anomaly', 3, -20],
    ['a=none', 'seg2-normal', 3, -10],
    ['a=blood_trail', 'seg1-blood-anomaly', 4, -8],
    ['a=skull', 'seg1-skull-anomaly', 4, -4],
    ['a=shoes', 'seg1-shoes-anomaly', 4, -28],
    ['a=bike_figure&avert=off', 'seg1-bikefigure-anomaly', 4, -21],
    ['a=face_window&avert=off', 'seg1-face-anomaly', 4, -19],
    ['a=none', 'seg1-normal', 4, -8],
    // 그림자 사람 (H-009) — 어느 구간에나. 디버그 앵커 고정(z=-17.6)
    ['a=figure&avert=off', 'seg5-figure-anomaly', 0, -12],
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
    for (let i = 0; i < 5; i++) {
      const seg = (await state(page)).theme; // 귀갓길은 5→1 역순 — 실제 테마로 라벨링
      await walkTo(page, -9);
      await shot(page, `theme-seg${seg}-front`);
      // 관찰 지점 -20은 테마 4에서 정지선(-21.1) 코앞이다 — 여기서 곧장 출발하면
      // 점멸 끝물에 걸려 차에 치인다. passMain의 초록 대기가 그걸 막는다 (위 waitForFreshGreen)
      await walkTo(page, -20);
      await shot(page, `theme-seg${seg}-mid`);
      if (i < 4) await passMain(page);
    }
    await browser.close();
  }
  // 접힘 반복 구간 — 분필 자국(입구) + 깊이 2의 가로등 감광 (game.md 인지 4요소 ④·꺼져가는 빛)
  {
    const { browser, page } = await launch();
    await startGame(page, 'a=drag_mark'); // 귀갓길 첫 구간(테마 5)의 흔적 — 바로 판정에 걸린다
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
    greenWaitMs = 0;
    for (let i = 0; i < 5; i++) await passMain(page);
    // **걸은 시간과 기다린 시간을 나눠 찍는다.** 신호 대기는 주기(9초) 안에서 매번 달라
    // 합계만 보면 완주 시간이 4~9초씩 흔들린다 — 템포 예산과 대조할 값은 '걸은 시간'이다.
    // (기다림 자체는 설계된 비용이므로 없애지 않고 따로 표시한다 — v0.11.7)
    const walkSec = ((Date.now() - t0 - greenWaitMs) / 1000).toFixed(1);
    const sec = `${((Date.now() - t0) / 1000).toFixed(1)}s (걸음 ${walkSec}s + 신호 대기 ${(greenWaitMs / 1000).toFixed(1)}s)`;
    await clickOverlayButton(page); // 집 도착 컷 — 문을 열고 들어간다
    await page.waitForFunction(
      (sel) => [...document.querySelectorAll(`${sel} .sub`)].some((e) => e.textContent.includes('🏠')),
      { polling: 150, timeout: 20000 },
      DYN,
    );
    const gauge = await page.evaluate(
      (sel) => [...document.querySelectorAll(`${sel} .sub`)].at(-1).textContent, DYN);
    const quote = await page.evaluate(
      (sel) => [...document.querySelectorAll(`${sel} .quote`)].at(-1).textContent, DYN);
    console.log(`[무결점] ${gauge} | ${quote.split('\n')[0]} | 귀갓길 ${sec}`);
    await clickOverlayButton(page); // 신발을 벗는다
    await sleep(600);
    await clickOverlayButton(page); // 불을 끄고 눕는다
    await sleep(3500);
    await shot(page, 'home-epilogue');
    await clickOverlayButton(page); // 에필로그 → 다음 밤 오프닝 컷
    await sleep(1200);
    await clickOverlayButton(page); // 가게를 나선다
    await page.waitForFunction(() => globalThis.__fries.state().night === 2, { timeout: 15000 });
    console.log('밤 2 진입 확인:', JSON.stringify(await state(page)));
    await browser.close();
  }

  // 2) 접힘 3회 = 깊이 한계 → 골목 입구 리셋 (?a=drag_mark — 귀갓길 첫 구간 흔적, 지나치기 강행)
  {
    const { browser, page } = await launch();
    await startGame(page, 'a=drag_mark');
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

  // 3) 직시 성공 = 무비용 통과 (?a=drag_mark — 흔적을 직시하고 직진)
  {
    const { browser, page } = await launch();
    await startGame(page, 'a=drag_mark');
    await debugSpot(page);
    const checked = (await state(page)).checked;
    await passMain(page);
    const s = await state(page);
    console.log('확인 통과:', JSON.stringify({ checked, done: s.done, total: s.total, depth: s.depth, folds: s.folds, theme: s.theme }));
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

  // 5) avert — 사람 형태를 짚으면 즉시 붙잡힌다 = 접힘 (v0.11.0 괴담 규칙)
  {
    const { browser, page } = await launch();
    await startGame(page, 'a=bus_figure'); // 구간 4 = 귀갓길 두 번째
    await passMain(page);                  // 테마 5 → 4 (여기서 등장)
    const s0 = await state(page);
    await debugSpot(page);                 // 손가락질 → grabbed
    await page.waitForFunction(() => globalThis.__fries.state().phase === 'walk',
      { polling: 120, timeout: 15000 });
    const s = await state(page);
    console.log('손가락질 붙잡힘:', JSON.stringify({
      avert: s0.avert, folds: s.folds, total: s.total, depth: s.depth, theme: s.theme,
    }));
    await browser.close();
  }

  // 6) avert — 지나치는 것이 정답: 보지 않고 통과하면 무비용 (접힘 없음)
  {
    const { browser, page } = await launch();
    await startGame(page, 'a=bus_figure&avert=off'); // 응시 정지 = '눈을 마주치지 않은' 상태
    await passMain(page);
    const s0 = await state(page);
    await passMain(page); // 확인 없이 통과 — avert는 접힘 대상이 아니다
    const s = await state(page);
    console.log('외면 통과:', JSON.stringify({
      avert: s0.avert, folds: s.folds, total: s.total, depth: s.depth,
    }));
    await browser.close();
  }
}

const mode = process.argv[2] ?? 'shots';
if (mode === 'shots') await shots();
else if (mode === 'balance') await balance();
else { console.error(`unknown mode: ${mode} (shots | balance)`); process.exit(1); }
console.log('done');
