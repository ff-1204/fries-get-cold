---
name: verify-ui
description: UI·연출·화면 변경을 헤드리스 브라우저로 검증하는 절차 — dev 서버 기동, 스크래치 스크린샷 스크립트(PC/모바일 에뮬레이션, 저장 상태 시드, 조작 실주행 실측), 뒷정리까지. 화면이 바뀌는 작업(HUD·오버레이·타이틀·조작·조명·연출) 후 호출. 이상현상 정규 검증은 npm run verify:shots가 담당 — 이 스킬은 그 밖의 화면을 임시 스크립트로 찍는 법.
---

# verify-ui — 헤드리스 UI 검증 절차

2026-08-02 세션(v0.7.0 모바일 조작 ~ v0.9.0 컨셉 전환)에서 정착한 패턴.
정규 케이스(이상현상 쌍·테마)는 `scripts/verify.mjs`에 추가하고, **일회성 화면 확인**
(타이틀·프롤로그·카드 UI·밝기 비교·조작 실측)은 아래 스크래치 스크립트로 찍는다.

## 절차

1. **dev 서버** (백그라운드): `npm run dev -- --port 5199 --strictPort`
2. **스크립트 작성** — 스크래치패드에 `.mjs`로 쓴다 (아래 템플릿).
3. **실행 — 반드시 프로젝트 scripts/로 복사 후** (ESM은 스크립트 파일 위치 기준으로
   node_modules를 찾는다 — 스크래치패드에서 직접 실행하면 puppeteer-core를 못 찾음):
   ```bash
   cp <스크래치>/shots.mjs scripts/_shots.tmp.mjs
   node scripts/_shots.tmp.mjs <출력폴더>
   rm scripts/_shots.tmp.mjs     # 저장소에 임시 파일을 남기지 않는다
   ```
4. **스크린샷은 직접 눈으로** — 겹침(자막 #msg·걷기 버튼·힌트), 잘림, 팔레트 이탈,
   식별성(3초 규칙)을 본다. 밝기류는 반드시 변경 전/후 같은 조건으로 비교.
5. **뒷정리**: dev 서버 TaskStop 후에도 자식이 포트를 물 수 있다 —
   `Get-NetTCPConnection -LocalPort 5199 -State Listen`으로 확인 후 Stop-Process.
   코드가 바뀌었으면 `npm run build:local`로 play-local.html 재생성.

## 템플릿 (검증된 조각들)

```js
import puppeteer from 'puppeteer-core';
// 경로는 슬래시로! bash 히어독·문자열에서 '\\'는 벗겨져 사고가 난다 (workflow.md 배운 것)
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  executablePath: EDGE, headless: 'new',
  args: ['--enable-unsafe-swiftshader', '--window-size=1280,800', '--mute-audio'],
});
const page = await browser.newPage();

// (a) PC 뷰포트
await page.setViewport({ width: 1280, height: 720 });
// (b) 모바일 에뮬레이션 — isMobile+hasTouch가 있어야 CSS `pointer: coarse` 분기가 켜진다
await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });

// (c) 저장 상태 시드 — 원하는 일차/기록으로 바로 진입 (스키마: src/save.ts)
await page.evaluateOnNewDocument((s) => localStorage.setItem('fries.save.v1', s),
  JSON.stringify({ night: 3, misses: 1, results: [], brightness: 1.0, muted: true }));

await page.goto('http://localhost:5199/?a=none', { waitUntil: 'networkidle0' });

// (d) 조작 실측 — 스크린샷만 믿지 말고 상태 훅으로 실동작을 숫자로 확인
//     예: 걷기 버튼 홀드 → z 좌표 변화 (터치는 touchscreen API)
const before = await page.evaluate(() => window.__fries.state().z);
await page.touchscreen.touchStart(x, y);   // PC 키는 page.keyboard.down('KeyW')
await wait(1600);
await page.touchscreen.touchEnd();
const after = await page.evaluate(() => window.__fries.state().z);

await page.screenshot({ path: OUT + '/name.png' });
await browser.close();
```

## 함정 (이 세션에서 실제로 밟은 것)

- **소스 수정 직후 실행** → vite reload로 "frame got detached" — 재실행하면 된다
- **헤드리스는 실기기보다 어둡다** (swiftshader) — 밝기의 절대 판단은 실기기,
  스크린샷은 상대 비교용
- **하단 고정 UI는 겹친다** — #msg(bottom 18%)·걷기 버튼(좌하단)과 새 요소의 동시 표시를
  반드시 한 장에 찍어 확인. 힌트류는 상단(카운터 아래)이 안전
- 밝기 미리보기(peek)·오버레이 전환 등 시간이 걸리는 연출은 wait를 넉넉히 (transition 0.8s+)
- 프리 상태(저장 없음) vs 진행 상태(시드) 화면이 다른 UI(이어하기·처방 카드)는 **둘 다** 찍는다
