# 개발 가이드

기술 스택, 구조, 명령, 검증, 배포. **구조가 바뀌면 이 문서를 같은 커밋에서 고친다.**
버전별 이력은 CHANGELOG.md, 실수→규칙은 [workflow.md](./workflow.md) '배운 것'.

---

## 기술 스택

| 역할 | 기술 |
|---|---|
| 3D 렌더링 | Three.js 0.178 |
| 언어 | TypeScript (strict) |
| 빌드 | Vite 6 (`base: '/fries-get-cold/'`) |
| 단일 파일 빌드 | vite-plugin-singlefile → `play-local.html` |
| 충돌·레이캐스팅 | Three.js 기본 레이캐스트 + 경계 클램프 (three-mesh-bvh 미도입 — 씬이 작다) |
| 에셋 | **에셋 0** — 프리미티브 + 캔버스 텍스처 + 프로시저럴 사운드 |
| 호스팅 | GitHub Pages (로컬 빌드 → `gh-pages` 브랜치) |

멀티플레이어 없음 → 서버 없음. 전부 정적 파일.

---

## 디렉터리 구조

```
fries-get-cold/
├── index.html                # HUD/오버레이 DOM + 스타일, 시작 게이트
├── vite.config.ts            # base: '/fries-get-cold/'
├── vite.config.local.ts      # 단일 파일 빌드 (play-local.html)
├── play-local.html           # 더블클릭 실행용 산출물 (git 미포함)
├── .githooks/pre-push        # main 푸시 = 배포
├── scripts/
│   ├── verify.mjs            # 헤드리스 검증 (verify:shots / verify:balance)
│   └── playthrough.mjs       # 끝에서 끝까지 자동 플레이 (verify:play)
├── docs/
└── src/
    ├── main.ts               # 게임 루프, 밤 상태 머신, 이동/판정
    ├── admin.ts              # 관리자(디버그) 모드 — 이 파일 하나로 완결 (아래 절)
    ├── world/                # 골목 (import 경로는 './world')
    │   ├── index.ts          #   조립 — createWorld()가 복도+테마 5종의 refs·hit을 합친다
    │   ├── layout.ts         #   치수·좌표·신호 주기 (판정과 공유하는 숫자)
    │   ├── kit.ts            #   box 프리미티브 · 캔버스 텍스처 · 공용 재질
    │   ├── refs.ts           #   SegmentRefs (복도 + 테마별 refs 인터페이스)
    │   ├── prefab.ts         #   공용 복도·앞뒤 터널·가로등·차·그림자 사람
    │   ├── themes/theme1..5.ts #  테마 지오메트리 (세트피스는 여기에 붙는다)
    │   ├── shop.ts           #   FF-1204 (앞·뒤 두 인스턴스)
    │   ├── home.ts           #   집 (빌라 현관)
    │   ├── effects.ts        #   이상현상 reset/apply 레지스트리
    │   └── runtime.ts        #   applyDepth·setMorning·setShopNear·updateWorld 등 시간축
    ├── input.ts              # 입력 추상화 (포인터락+WASD / 걷기 버튼+드래그+탭)
    ├── hud.ts                # DOM HUD (구간 카운터·자막·암전·오버레이)
    ├── audio.ts              # 프로시저럴 사운드 (환경음·정적·발소리)
    ├── save.ts               # 기기 내 저장 (localStorage)
    ├── config.ts             # 수치·레이아웃 상수 (JSON·three 의존 없음 — Node가 직접 읽는다)
    ├── balance.ts            # 깊이·접힘 판정 순수 로직 + 밤 시뮬레이션 (게임·테스트 공유)
    ├── balance.test.ts       # node:test — npm run verify:sim
    ├── data.ts               # 콘텐츠 파사드 — TEXT·타입·스테이지 접근자, CONFIG 재수출
    └── data/
        ├── anomalies.json    # 이상현상 콘텐츠 (스키마: docs/anomalies.md)
        └── stages.json       # 밤(=스테이지) 콘텐츠 (스키마: docs/stages.md §3)
```

**`world/`는 M3가 실제로 키우는 곳을 파일 경계로 잡은 것이다** — 세트피스는 `themes/theme*.ts`,
이상현상은 `effects.ts`로만 자란다. 조립부(`index.ts`)의 `hit` 스프레드가 effect 키를
정확히 요구하므로, 새 effect가 어느 테마에도 없으면 **컴파일 에러**가 난다.

**남은 분해**: `main.ts`가 게임 로직과 UI 부트스트랩을 함께 들고 있다.
M3에서 `systems/`(anomaly·rules·night)로 나눈다. 원칙은 그대로 —
**콘텐츠는 데이터, 로직은 시스템.**

---

## 핵심 구현 노트

- **구간 재활용** — 프리팹 1개를 고정하고 통과 시 좌표·이상현상 상태만 리셋한다(`rollSegment`).
  구간 전환은 **다리 밑 터널** 한가운데의 암흑에서 일어난다 — 안개·배경·조명을 함께 검정으로
  몰아 무봉합. **앞뒤 터널은 `buildTunnel()` 한 함수로 짓는다**: 형태가 어긋나면
  한가운데의 전환이 드러나므로 대칭을 코드 구조로 못박았다.
  터널에 발광체를 더할 때는 **반드시 `setTunnelDark`에 물린다** — 빛만 끄면 암흑 속에 뜬 점이 남는다.
  구조물은 갱구(u=0)부터 시작한다: 골목 쪽으로 나오면 통행 구역을 침범한다
- **방향 의존 배치** — 퇴근길·귀갓길은 같은 거리를 반대로 걷는다. 가게(`setShopNear`/
  `setBackScene`)와 현수막(`setBannerSide`)은 진행 방향에 따라 자리를 옮긴다.
  남은 제약은 [stages.md](./stages.md) §0
- **상태 모델** — `done`(걸음)·`total`(5+접힘)·`theme`(1..5)·`depth`·`folds`.
  접힘 = done+1·total+1·테마 반복 — 분자·분모가 함께 늘어
  "걸었는데 남은 거리가 안 줄었다"가 표시된다
- **판정** — 레이캐스트 + 관용 반경(NDC 0.12, 45m 이내) 이중. 가는 사물·모바일 손가락 오차 대응.
  직시는 4.5m 이내에서만 성립. effect별 히트 대상은 `world/index.ts`가 합치는 `hit` 맵
- **이상현상 레지스트리** (`world/effects.ts`) — reset/apply가 effect별 한 항목,
  `Record<AnomalyEffect, …>`가 누락을 컴파일 에러로 잡는다
- **깊이 시각화** (`world/runtime.ts applyDepth`) — 가로등 감광 사다리 + 비네트.
  ⚠ 리셋 순서: `rollSegment`에서 **applyDepth → applyAnomalies** (레지스트리 리셋이 lampBase를 읽는다).
  전역 밝기의 레버는 조명이 아니라 `renderer.toneMappingExposure`
- **입력 분기** — PC 포인터락 중 클릭 = 화면 중앙 / 모바일 탭 = 350ms·14px 이내 터치.
  걷기 버튼은 pointerdown/up + setPointerCapture 홀드. 터치에서는 크로스헤어를 숨긴다
- **포인터락 순서** — 오버레이 표시 시 해제(`hud.blackScreen`), 버튼 클릭 후 재획득(`input.activate`).
  이 순서를 지키지 않으면 PC에서 커서가 사라져 진행 불가.
  오버레이를 숨길 때는 `blur()`로 포커스도 놓는다
- **스폰 앵커** — `world/layout.ts SPAWN_ANCHORS` 6곳. `?a=` 디버그는 앵커 고정(기본 2)으로
  스크린샷·E2E 결정성을 확보한다 (랜덤은 실플레이만)
- **조명/안개** — 앰비언트 + 달빛 + 구간 포인트라이트, `FogExp2`.
  규칙은 [visual-polish.md](./visual-polish.md) §4

---

## 개발 명령

```bash
npm install            # 최초 1회
npm run dev            # 개발 서버
npm run build          # 타입 검사 + Pages용 빌드 (dist/)
npm run build:local    # 단일 파일 빌드 → play-local.html
npm run deploy         # 빌드 후 gh-pages 브랜치로 배포
npm run verify:sim     # 깊이 모델 시뮬레이션 (node:test, 브라우저 불요, <1초)
npm run verify:shots   # 헤드리스 스크린샷 (dev 서버 필요)
npm run verify:balance # E2E 밸런스 실측 6케이스 (dev 서버 필요)
npm run verify:play    # 끝에서 끝까지 자동 플레이 (dev 서버 필요)
```

**`verify:play`가 다른 검증과 다른 점** — `?a=` 없이 **실제 확률로** 돌고, 저장 없는
첫 방문(타이틀 → 퇴근길 튜토리얼 → 가게 컷 → 밤 1 → 집 → 귀가 연출 → 밤 2)을 통째로 걷는다.
이상현상에는 **사람처럼 반응한다**: 응시(`stare`)가 쌓이면 눈을 돌리고,
직시 대상은 `gazeAim`으로 조준해 **한 번만** 짚고, 빨간불에는 정지선에서 기다린다.
soft fail은 실패가 아니라 정상 경로이므로 하네스가 알아보고 그 밤을 다시 걷는다.

⚠ 이것이 답하는 것은 **"동작하는가"**뿐이다. "재밌는가"는 사람이 직접 걸어야 나온다.

**Node가 PATH에 없다** (`C:\Program Files\nodejs`). bash에서는
`export PATH="/c/Program Files/nodejs:$PATH"` 후 사용한다.

디버그 파라미터·상태 훅은 [spec.md](./spec.md) §8이 원본이다.

---

## 관리자(디버그) 모드 — `Ctrl + Space Space`

**`src/admin.ts` 하나가 전부다.** 스타일·DOM·입력·비행·패널을 스스로 만들어 붙이므로
index.html에도 hud.ts에도 흔적이 없다 — 지우려면 이 파일과 main.ts의 다섯 자리
(import · `new Admin` 블록 · `updateWalk` 앞머리 분기 · `tick` 한 줄 · `tryPoint` 가드)면 된다.
저장하지 않는다: 새로고침하면 꺼져 있다.

| 조작 | |
|---|---|
| `Ctrl` + `Space` `Space` | 켜기/끄기 (0.6초 안에 두 번 — 우연히 눌릴 조합이 아니다) |
| `WASD` · `Space`/`Shift` · `Alt` · 휠 | 비행(보는 방향 그대로) · 상승/하강 · 4배 가속 · 기본 속도 |
| `Esc` | 스테이지 이동 패널 (밤 · 시간대 · 테마 · 이상현상 강제 · 깊이 · 시야) |
| `C` | 좌표 + 조준 대상을 클립보드로 |

- **관리자 모드에서는 판정이 전부 멈춘다** — 붙잡힘·치임·접힘·구간 전환·깊이, 그리고
  **클릭('빈 지적')까지.** 보러 들어간 것만으로 상태가 오염되면 도구가 아니다
- **조준 표시가 이 도구의 핵심이다.** 화면 중앙이 맞힌 메시를
  `골목 › FF-1204(뒤) | Box 8.00×3.40×0.20 #6e6a5e | z 10.20`처럼 읽어 준다 —
  이름 경로·크기·색·거리·좌표. 좌표에는 미터와 함께 **`-L*0.296` 배수 표기**가 붙는다:
  월드 코드가 위치를 전부 그렇게 쓰기 때문에(`box(..., -L * 0.32, t4)`)
  화면에서 본 것을 **그대로 grep할 수 있다.** 이름은 `world/index.ts`가 붙인다 —
  **새 그룹에는 그때그때 붙일 것**
- three의 레이캐스터는 **안 보이는 객체도 맞힌다.** 이 게임은 테마 5개가 같은 좌표를
  공유하므로 조상까지 `visible`을 확인한다
- 모드를 끄면 **날아간 자리에 내린다** (벽 밖·다음 구간으로는 못 내리게 클램프)
- 훅: `__fries.admin.on() / cam() / toggle()` — 비행 중에는 player가 아니라 카메라가 움직인다

---

## 검증 방법 (헤드리스 — 재사용 패턴)

- **시각 검증**: `puppeteer-core` + 설치된 Edge
  (`C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`)를
  `--enable-unsafe-swiftshader`로 띄워 스크린샷. WASD는 포인터락 없이 `page.keyboard`로 가능.
  모바일 재현은 `setViewport({isMobile, hasTouch})` — `pointer: coarse` 매체 질의까지 잡힌다.
  UI·연출 변경 후에는 **/verify-ui 스킬** 절차를 따른다
- **시점 회전**: puppeteer의 `touchscreen`은 히트테스트를 타서 캔버스까지 안 닿는 경우가 있다.
  캔버스에 `PointerEvent`를 직접 dispatch하는 편이 확실하다
  (`input.ts`: yaw −= dx × 2.4 × 0.0024 → 180°는 −545px)
- **자동 플레이스루**: `__fries.state()`로 위치를 읽으며 키보드 주행.
  `?a=none`과 조합하면 밸런싱 실측이 된다
- **시간성 연출(깜빡임 등)**: 90ms 간격 연사 후 PNG 파일 크기 편차로 소등 프레임 탐지
- **함정** — 소스 수정 직후 실행은 vite reload로 "frame got detached"(재실행하면 된다) ·
  검증 후 `Get-NetTCPConnection -LocalPort 5199`로 포트 점유 정리 ·
  헤드리스(swiftshader)는 실기기보다 어둡다(밝기 최종 판단은 실기기, 스크린샷은 상대 비교용) ·
  localStorage는 페이지 간 남는다(첫 방문 촬영은 `browser.createBrowserContext()`로 격리)
- 역할 분담: **verify:sim = 커밋 전 상시 / verify:balance(E2E) = 릴리즈 전 최종**

---

## 배포 (GitHub Pages — 로컬 빌드 + gh-pages 브랜치)

- **라이브**: https://ff-1204.github.io/fries-get-cold/
- **GitHub Actions 미사용.** 로컬에서 빌드해 산출물만 `gh-pages` 브랜치로 푸시한다
  (`main` = 소스, `gh-pages` = 빌드 산출물)
- **푸시 = 배포**: `.githooks/pre-push`가 main 푸시 시 `npm run deploy`를 자동 실행한다.
  클론마다 1회 설정: `git config core.hooksPath .githooks`.
  배포 없이 푸시만 하려면 `SKIP_DEPLOY=1 git push`. (훅은 LF 필수 — `.gitattributes`가 보장)

1. 레포 이름은 반드시 `fries-get-cold` (base 경로와 일치), Public
2. Settings → Pages → Source: **`gh-pages` / `(root)`** (최초 1회).
   ⚠ `main`을 서빙하면 빌드 없이 원본 `index.html`이 나가 **시작 화면만 뜨고 게임이 안 돈다**
3. 배포 후 라이브 URL의 에셋 해시가 방금 빌드와 같은지 확인한다 (Pages 반영에 1분 남짓 걸린다)

### 빌드 환경 주의 — rollup 네이티브 모듈 차단 (이 PC 특이사항)

- Windows Application Control 정책이 서명 없는 네이티브 모듈(`.node`) 로드를 차단해
  rollup 기본 바이너리로는 `vite build`가 `ERR_DLOPEN_FAILED`로 실패한다.
  `package.json`의 `overrides`로 rollup을 **공식 WASM 빌드(`@rollup/wasm-node`)** 로 대체했다.
  빌드 속도만 조금 느릴 뿐 산출물은 같다. **이 항목을 지우면 빌드가 다시 깨진다**
- npm 래퍼가 install script를 막는다(allow-scripts) — esbuild 경고는 무해
- git 사용자 정보는 저장소 로컬 `Moon <myesung12@gmail.com>`

---

## 성능 예산

- 초기 로드 ≤ 8MB, 총 다운로드 ≤ 20MB / 60fps @ 중급 노트북, 30fps @ 중급 모바일
- 구간당 드로우콜 ≤ 100, 씬 삼각형 ≤ 200k (로우폴리 유지)
- 프롭을 대량으로 더할 때는 **재질을 테마마다 한 벌씩 만들어 공유한다** —
  `box()`는 호출마다 재질을 새로 만든다. 반복 프롭은 `boxOf(mat, …)`

---

## 남은 부채 (다음 세션 후보)

- **직접 처음부터 끝까지 플레이** — 한 번도 안 했다. 무설명 학습 검증은 자동화 불가이고,
  재미 판단 정보가 여기서만 나온다
- **모바일 실기기 테스트** — 오디오 게이트·발열·제스처는 에뮬레이터로 판단 불가
- **`main.ts` 분해** — 게임 로직·UI 부트스트랩 혼재. M3에서 `systems/` 분해와 함께
- **방향 미러링의 남은 절반** — [stages.md](./stages.md) §0
- **관리자 모드의 프로덕션 제외 여부** — 지금은 배포 빌드에도 들어간다
  (조합키를 모르면 안 켜지고 저장도 안 된다). 상용 배포 시점에 판단
