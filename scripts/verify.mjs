// 헤드리스 검증 — 이상현상 가시성 스크린샷 + 판정 실측 (docs/development.md '검증 방법')
//
// 준비: npm run dev -- --port 5199 --strictPort  (별도 터미널)
// 사용: npm run verify:shots    — 이상현상 정상/이상 비교 + 구간 테마 스크린샷 → verify-shots/
//       npm run verify:balance  — 무결점 밤 · **흔적 지나침 무비용** · 늘어남 3회→입구 리셋 ·
//                                 외면 통과 무비용 (v0.11.50 기준 4케이스)
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
 *  **늘어남은 삼키지 않는다**: phase 변화만 보면 치임·붙잡힘도 '통과'로 읽혀
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
  if (s1.stretches !== s0.stretches) {
    console.warn(`  ⚠ 통과 중 늘어남 — theme ${s0.theme}, stretches ${s0.stretches}→${s1.stretches}, depth ${s1.depth}`);
  }
}

/** 차도 한복판에 서서 차를 맞는다 → 늘어남 1회.
 *
 *  ⭐ 클릭 판정이 사라진 뒤(v0.11.50) **늘어남을 결정적으로 만드는 유일한 방법**이다.
 *  응시 붙잡힘은 형체의 자리와 시선 각도에 좌우돼 재현이 흔들리지만, 차는 규칙이 세계의
 *  것이라 **빨간불마다 반드시 한 대** 온다 (주기 9초). 늘어남 뒤에는 같은 테마가 반복되므로
 *  다시 걸어 들어가면 몇 번이든 되풀이할 수 있다 — 깊이 사다리를 그대로 오른다 */
async function takeCarHit(page) {
  // 직전 늘어남의 페이드가 끝나고 **구간 입구에 다시 서 있을 때까지** 기다린다.
  // 이걸 빼면 두 번째 호출이 phase='transition' 상태로 들어가 걷지도 않고 대기만 한다
  await page.waitForFunction(
    () => { const s = globalThis.__fries.state(); return s.phase === 'walk' && s.z > -2; },
    { polling: 100, timeout: 30000 },
  );
  const s0 = await state(page);
  const { segLength } = await page.evaluate(() => globalThis.__fries.config());
  const roadZ = -segLength * 0.68; // layout.ts ROAD_Z — 차가 지나는 z (치임은 ±2.4m)
  await page.keyboard.down('KeyW');
  await page.waitForFunction(
    (t) => { const s = globalThis.__fries.state(); return s.z <= t || s.phase !== 'walk'; },
    { polling: 60, timeout: 30000 }, roadZ + 0.5,
  );
  await page.keyboard.up('KeyW');
  await page.waitForFunction(
    (n) => globalThis.__fries.state().stretches > n,
    { polling: 100, timeout: 30000 }, s0.stretches,
  );
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
    ['a=bench_shoes', 'seg4-benchshoes-anomaly', 1, -8],
    ['a=swing_figure&avert=off', 'seg3-swingfigure-anomaly', 2, -10],
    ['a=eyes&avert=off', 'seg3-eyes-anomaly', 2, -15],
    ['a=slide_figure&avert=off', 'seg3-slidefigure-anomaly', 2, -8],
    ['a=handprints', 'seg2-handprints-anomaly', 3, -10],
    ['a=shutter_glow', 'seg2-shutterglow-anomaly', 3, -20],
    ['a=sign_lit', 'seg2-signlit-anomaly', 3, -14],
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
  // 늘어남 반복 구간 — 분필 자국(입구) + 깊이 2의 가로등 감광 (game.md 인지 4요소 ④·꺼져가는 빛).
  // ⚠ 늘어남을 부르는 방법이 바뀌었다 (v0.11.50): 흔적을 지나치는 것은 이제 무비용이라
  // **차도(테마 4)에서 차를 맞아** 만든다. 늘어남은 같은 테마를 반복시키므로 결과는 같다
  {
    const { browser, page } = await launch();
    await startGame(page, 'a=none');
    await passMain(page);      // 테마 5 → 4 (차도)
    await takeCarHit(page);    // 늘어남 1회 → 같은 구간 반복 (depth 2)
    await page.waitForFunction(
      () => { const s = globalThis.__fries.state(); return s.phase === 'walk' && s.z > -2; },
      { polling: 100, timeout: 30000 },
    );
    await walkTo(page, -3.2); // 분필 자국(z=-5.5)이 전방 바닥에 보이는 지점
    await shot(page, 'stretch-repeat-mark');
    await walkTo(page, -12);  // 가로등 앞 — 감광 확인
    await shot(page, 'stretch-depth2-lamp');
    await browser.close();
  }
}

// ---------- 모드 2: 판정 실측 (늘어남·깊이·soft fail — game.md 판정) ----------
async function balance() {
  // 1) 무결점 밤 (?a=none) — 늘어남 0 → '아직 따뜻하다' → 시식 → 밤 2 진입
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

  // 2) ⭐ **흔적을 지나쳐도 아무 일도 없다** (v0.11.50 — 클릭 판정 제거의 직접 증거).
  //    v0.11.49까지 이 주행은 늘어남 1회 + 깊이 2였다. 지금은 0이어야 한다
  {
    const { browser, page } = await launch();
    await startGame(page, 'a=drag_mark'); // 귀갓길 첫 구간(테마 5)의 흔적
    const s0 = await state(page);
    await passMain(page);                 // 아무것도 하지 않고 그냥 통과
    const s = await state(page);
    console.log('흔적 지나침:', JSON.stringify({
      active: s0.active, stretches: s.stretches, total: s.total, depth: s.depth, theme: s.theme,
    }));
    await browser.close();
  }

  // 3) 늘어남 3회 = 깊이 한계 → 골목 입구 리셋.
  //    ⚠ 예전에는 흔적을 지나치는 것으로 늘어남을 만들었다 — 그 판정이 사라져 **차도**로 잰다.
  //    늘어남은 같은 테마를 반복시키므로 테마 4에 한 번 들어가면 세 번을 그 자리에서 채운다
  {
    const { browser, page } = await launch();
    await startGame(page, 'a=none');
    await passMain(page); // 테마 5 → 4 (차도)
    for (let i = 0; i < 3; i++) {
      await takeCarHit(page);
      const s = await state(page);
      console.log(`[늘어남 ${i + 1}] ${JSON.stringify({ done: s.done, total: s.total, depth: s.depth, stretches: s.stretches, theme: s.theme })}`);
    }
    await clickOverlayButton(page); // 깊이 6 → soft fail → …다시 걷는다
    await page.waitForFunction(
      () => { const s = globalThis.__fries.state(); return s.phase === 'walk' && s.done === 0; },
      { timeout: 15000 },
    );
    const s = await state(page);
    console.log('입구 리셋 확인:', JSON.stringify({ night: s.night, done: s.done, total: s.total, depth: s.depth }));
    await browser.close();
  }

  // 4) avert — 지나치는 것이 정답: 보지 않고 통과하면 무비용 (아직 남아 있는 유일한 규칙)
  {
    const { browser, page } = await launch();
    await startGame(page, 'a=bus_figure&avert=off'); // 응시 정지 = '눈을 마주치지 않은' 상태
    await passMain(page);
    const s0 = await state(page);
    await passMain(page);
    const s = await state(page);
    console.log('외면 통과:', JSON.stringify({
      avert: s0.avert, stretches: s.stretches, total: s.total, depth: s.depth,
    }));
    await browser.close();
  }
}

const mode = process.argv[2] ?? 'shots';
if (mode === 'shots') await shots();
else if (mode === 'balance') await balance();
else { console.error(`unknown mode: ${mode} (shots | balance)`); process.exit(1); }
console.log('done');
