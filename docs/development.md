# 개발 가이드

기술 스택, 프로젝트 구조, 셋업, 배포, 검증 방법. 구조가 바뀌면 이 문서에 계속 기록한다.
(버전별 상세 이력은 CHANGELOG.md, 결정 경위는 game.md '결정 기록', 실수→규칙은 workflow.md '배운 것')

## 기술 스택

| 역할 | 기술 | 상태 |
|---|---|---|
| 3D 렌더링 | Three.js 0.178 | 사용 중 |
| 언어 | TypeScript (strict) | 사용 중 |
| 빌드 | Vite 6 (`base: '/fries-get-cold/'`) | 사용 중 |
| 로컬 단일 파일 빌드 | vite-plugin-singlefile → `play-local.html` | 사용 중 |
| 충돌/레이캐스팅 | Three.js 기본 레이캐스트 + 경계 클램프 | 사용 중 (three-mesh-bvh는 미도입 — 씬이 작아 불필요, 성능 문제가 생기면 검토) |
| 에셋 | **에셋 0** — 프리미티브 + 캔버스 텍스처 + 프로시저럴 사운드 | 노선 유지 (Blender/glTF 파이프라인은 도입하지 않음) |
| 호스팅 | GitHub Pages (로컬 빌드 → gh-pages 브랜치) | 사용 중 |

멀티플레이어 없음 → 서버 없음. 전부 정적 파일.

## 디렉터리 구조

```
fries-get-cold/
├── index.html                # HUD/오버레이 DOM + 스타일, 시작 게이트
├── vite.config.ts            # base: '/fries-get-cold/'
├── vite.config.local.ts      # 단일 파일 빌드 (play-local.html)
├── play-local.html           # 더블클릭 실행용 빌드 산출물 (git 미포함)
├── scripts/verify.mjs        # 헤드리스 검증 (verify:shots / verify:balance)
├── docs/                     # 개발 문서
└── src/
    ├── main.ts               # 게임 루프, 밤 상태 머신, 이동/판정
    ├── world/                # 골목 (import 경로는 './world' 그대로)
    │   ├── index.ts          #   조립 — createWorld()가 복도+테마 5종의 refs·hit을 합친다
    │   ├── layout.ts         #   치수·좌표·신호 주기 (판정과 공유하는 숫자)
    │   ├── kit.ts            #   box 프리미티브 · 캔버스 텍스처 · 공용 재질
    │   ├── refs.ts           #   SegmentRefs (복도 + 테마별 refs 인터페이스)
    │   ├── prefab.ts         #   공용 복도·앞뒤 터널·가로등·차·그림자 사람
    │   ├── themes/theme1..5.ts #  테마 지오메트리 (세트피스는 여기에 붙는다)
    │   ├── effects.ts        #   이상현상 reset/apply 레지스트리
    │   └── runtime.ts        #   applyDepth·setMorning·updateWorld 등 시간축
    ├── input.ts              # 입력 추상화 (포인터락+WASD / 걷기 버튼+드래그+탭)
    ├── hud.ts                # DOM HUD (구간 카운터·자막·암전·오버레이)
    ├── audio.ts              # 프로시저럴 사운드 (환경음·정적·발소리)
    ├── save.ts               # 기기 내 저장 (localStorage)
    ├── config.ts             # 수치·레이아웃 상수 (JSON·three 의존 없음 — Node가 직접 읽는다)
    ├── balance.ts            # 깊이·접힘 판정 순수 로직 + 밤 시뮬레이션 (게임·테스트 공유)
    ├── balance.test.ts       # 밸런스 시뮬레이션 테스트 (node:test — npm run verify:sim)
    ├── data.ts               # 콘텐츠 파사드 — 텍스트(TEXT)·이상현상 타입, CONFIG 재수출
    └── data/anomalies.json   # 이상현상 콘텐츠 (스키마: docs/anomalies.md)
```

world/는 **M3가 실제로 키우는 곳을 파일 경계로 잡았다** (2026-08-03 분해, v0.11.20):
세트피스는 `themes/theme*.ts`, 이상현상 30종+는 `effects.ts`로만 자란다. 조립부(index.ts)의
`hit` 스프레드가 effect 키를 정확히 요구하므로, 새 effect가 어느 테마에도 없으면 컴파일 에러다.

분리 계획 (M3 착수 전 검토): main.ts가 커지면 systems/(anomaly·rules·night)와 data/*.json으로
분해한다. 원칙 유지: **콘텐츠는 데이터, 로직은 시스템** — 이상현상 추가에 코드 수정이
필요하면 설계 실패.

## 핵심 구현 노트 (현행 코드 기준)

- **구간 재활용**: 구간 프리팹 1개를 고정하고, 통과 시 플레이어 좌표와 이상현상 상태만
  리셋(rollSegment) — 신규 씬 없이 루프 성립. 구간 전환은 **다리 밑 터널**(앞뒤 대칭,
  한가운데 암흑에서 좌표 이동 — 안개·배경·조명을 함께 검정으로 몰아 무봉합).
  뒤 터널 깊숙이 들어가면 골목이 돌려세운다 (보이지 않는 벽 대신 연출 — v0.11.18).
  **앞뒤 터널은 `buildTunnel()` 한 함수로 짓는다** (v0.11.21) — 형태가 어긋나면
  한가운데의 무봉합 전환이 드러나므로 대칭을 코드 구조로 못박았다. 터널에 발광체를
  더할 때는 **반드시 `setTunnelDark`에 물린다**: 빛만 끄면 암흑 속에 뜬 점이 남는다.
  구조물은 갱구(u=0)부터 시작한다 — 골목 쪽으로 나오면 통행 구역을 침범한다.
- **상태 모델**: done(걸음)·total(5+접힘)·theme(1..5)·depth·folds. 접힘 = done+1·total+1·
  테마 반복 — 카운터 분자·분모가 함께 늘어 "걸었는데 남은 거리가 안 줄었다"가 표시된다.
- **판정**: 레이캐스트(intersectObjects) + 관용 반경(NDC 0.12, 45m 이내) 이중 —
  가는 사물·모바일 손가락 오차 대응. 직시는 4.5m 이내 근접에서만 성립(원거리는 무비용 안내).
  effect별 히트 대상은 `world/index.ts`가 합치는 `hit` 맵 (원본은 각 테마 파일).
  응시(avert) 판정은 시선축 12°·11m·2.2초
  (main.ts tryPoint / gazeUpdate — 수치 근거는 game.md 결정 기록, 실측 교정 2회).
- **이상현상 레지스트리** (`world/effects.ts`): reset/apply가 effect별 한 항목,
  `Record<AnomalyEffect, …>`가 누락을 컴파일 에러로 잡는다. 새 effect 추가 = data.ts 유니온
  리터럴 1개 + EFFECTS 항목 1개 (+새 사물이면 SegmentRefs 필드). 콘텐츠 퇴역은 코드가 아니라
  JSON 풀에서만 (effect 핸들러 잔존 — Record 완전성 유지).
- **깊이 시각화**: `world/runtime.ts` applyDepth — 가로등 감광 사다리(LAMP_LADDER) + 비네트.
  리셋 순서 주의: rollSegment에서 **applyDepth → applyAnomalies** (레지스트리 리셋이
  lampBase를 읽는다). 전역 밝기의 결정 레버는 조명이 아니라 `renderer.toneMappingExposure`.
- **입력 분기**: PC 포인터락 중 클릭 = 화면 중앙 / 모바일 탭 = 350ms·14px 이내 터치
  (input.ts tapCandidate). 걷기 버튼은 pointerdown/up + setPointerCapture 홀드.
  터치에서는 크로스헤어 숨김 (탭 지점이 조준).
- **포인터락 순서**: 오버레이 표시 시 해제(hud.blackScreen), 버튼 클릭 후 재획득
  (input.activate) — 이 순서를 지키지 않으면 PC에서 커서가 사라져 진행 불가.
  오버레이를 숨길 때는 `blur()`로 포커스도 놓는다 (숨은 버튼이 Space를 먹는 사고 — workflow 배운 것).
- **스폰 앵커**: `world/layout.ts` `SPAWN_ANCHORS` 6곳 — 위치 자유형(figure)이 랜덤 배치.
  `?a=` 디버그는 앵커 고정(기본 2) — 스크린샷·E2E 결정성 (랜덤은 실플레이만).
- **조명/안개**: 앰비언트+달빛+구간 포인트라이트, FogExp2. 규칙은 [visual-polish.md](./visual-polish.md) §4.
- **스마트폰 UI(M3)**: DOM 오버레이로 구현 예정 — 텍스처보다 가독성·수정 용이성 우선.

## 개발 명령

```bash
npm install          # 최초 1회
npm run dev          # 개발 서버 (핫 리로드)
npm run build        # 타입 검사 + Pages용 빌드 (dist/)
npm run build:local  # 단일 파일 빌드 → play-local.html (복사까지 스크립트가 한다)
npm run deploy       # 빌드 후 gh-pages 브랜치로 배포
npm run verify:sim   # 밸런스 순수 시뮬레이션 테스트 (node:test, 브라우저 불요, <1초)
npm run verify:shots # 헤드리스 스크린샷 검증 (dev 서버 필요 — 아래 '검증 방법')
npm run verify:balance # E2E 밸런스 실측 6케이스 (dev 서버 필요)
```

Node는 PATH에 없을 수 있다 (`C:\Program Files\nodejs`). 없으면 해당 경로를 PATH에 추가한다.

디버그 파라미터·상태 훅(`?a=` `?t=1` `?avert=off` `?anchor=` `__fries.*`)은
[spec.md](./spec.md) §6이 원본이다.

## 검증 방법 (헤드리스 — 재사용 패턴)

- **시각 검증**: `puppeteer-core` + 설치된 Edge
  (`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`)를
  `--enable-unsafe-swiftshader`로 띄워 스크린샷. WASD는 포인터락 없이 `page.keyboard`로 가능.
  모바일 재현은 `setViewport({isMobile, hasTouch})` — `pointer: coarse` 매체 질의까지 잡힌다.
  UI·연출 변경 후에는 **/verify-ui 스킬** 절차를 따른다.
- **자동 플레이스루**: `window.__fries.state()`(읽기 전용)로 위치를 읽으며 키보드 주행.
  `?a=none`과 조합하면 밸런싱 실측이 된다. `__fries.debugSpot()`은 ?a= 한정 조작 훅
  (읽기 전용 원칙의 명시적 예외 — E2E 지적 재현용).
- **시간성 연출(깜빡임 등)**: 90ms 간격 연사 후 PNG 파일 크기 편차로 소등 프레임 탐지
  (어두워지면 압축 크기 급감).
- **함정들**: 소스 수정 직후 실행은 vite reload로 "frame got detached" — 재실행하면 된다.
  검증 후 `Get-NetTCPConnection -LocalPort 5199`로 포트 점유 정리.
  헤드리스(swiftshader) 렌더는 실기기보다 어둡다 — 밝기 최종 판단은 실기기에서,
  스크린샷은 상대 비교용.
- 역할 분담: **verify:sim = 커밋 전 상시 / verify:balance(E2E) = 릴리즈 전 최종.**

## 배포 (GitHub Pages — 로컬 빌드 + gh-pages 브랜치)

- **라이브 URL**: https://ff-1204.github.io/fries-get-cold/
- **방식**: GitHub Actions 미사용 (결정 기록). 로컬에서 빌드해 산출물만 `gh-pages` 브랜치로
  푸시한다 (`main` = 소스, `gh-pages` = 빌드 산출물).

```bash
npm run deploy   # = npm run build (타입 검사 포함) && gh-pages -d dist
```

- **푸시 = 배포 (2026-07-30)**: `.githooks/pre-push` 훅이 main 푸시 시 `npm run deploy`를
  자동 실행한다. 클론마다 1회 설정: `git config core.hooksPath .githooks`.
  배포 없이 푸시만 하려면 `SKIP_DEPLOY=1 git push`. (훅은 LF 필수 — `.gitattributes`가 보장)

1. 레포 이름은 반드시 `fries-get-cold` (base 경로와 일치), Public.
2. Settings → Pages → Source: **`gh-pages` / `(root)`** (최초 1회).
   ⚠ `main`을 서빙하면 빌드 없이 원본 `index.html`이 나가 **시작 화면만 뜨고 게임이 안 돈다.**
3. 배포 후 라이브 URL을 직접 플레이해 확인 ([workflow.md](./workflow.md) 릴리즈 절차).

### 빌드 환경 주의 — rollup 네이티브 모듈 차단 (이 PC 특이사항)

- Windows Application Control 정책이 서명 없는 네이티브 모듈(`.node`) 로드를 차단해
  rollup 기본 바이너리로는 `vite build`가 `ERR_DLOPEN_FAILED`로 실패한다.
  `package.json`의 `overrides`로 rollup을 **공식 WASM 빌드(`@rollup/wasm-node`)** 로 대체했다.
  빌드 속도만 조금 느릴 뿐 산출물 동일. **이 항목을 지우면 빌드가 다시 깨진다.**
  (esbuild·tsc는 정책에 안 걸린다)
- npm 래퍼가 install script를 막는다(allow-scripts) — esbuild 경고는 무해.
- git 사용자 정보는 저장소 로컬 `Moon <myesung12@gmail.com>`.

## 성능 예산

- 초기 로드 ≤ 8MB, 총 다운로드 ≤ 20MB / 60fps @ 중급 노트북, 30fps @ 중급 모바일
- 구간당 드로우콜 ≤ 100, 씬 삼각형 ≤ 200k (로우폴리 유지)
- 에셋 추가 시마다 빌드 크기 기록:

| 날짜 | 빌드 크기 (gzip) | 비고 |
|---|---|---|
| 2026-07-28 | JS 486kB (124kB) | M0 — Three.js 포함, 에셋 없음(그레이박스) |

## 남은 부채·백로그 (다음 세션 후보)

- **직접 처음부터 플레이** — 퇴근길 튜토리얼 포함 전체 흐름. 무설명 학습 검증은 자동화 불가,
  재미 판단 정보가 여기서만 나온다 (workflow.md '조심할 것')
- **모바일 실기기 테스트** (responsive-design §7 매트릭스) — 오디오 게이트·발열·제스처는
  에뮬레이터로 판단 불가
- **main.ts 분해** — 게임 로직·UI 부트스트랩 혼재. M3에서 systems/ 분해와 함께
  (`world.ts` 분해는 2026-08-03 완료 — v0.11.20)
- **밤 분기 하드코딩 10곳 → 스테이지 데이터로** — 밤 3·4를 채우는 데 코드 수정이 필요한 상태.
  전수 목록과 목표 스키마는 [stages.md](./stages.md) §3–4 (M3 착수 전)
- **밤 6+ 텍스트 클램프** — intros/epilogues 5개 반복. M3 엔딩 구현에서 해소
- **증식 밀도 체감** — 접힘 반복 구간에서 동시 이상 2~3개가 겹칠 때의 가독성 (실플레이 확인)
- **밤 2~4 에필로그 재검토** — story.md '마지막 컷' 기반 선작성 상태, 해당 밤 구현 시 대조

## 세션 로그

세션별 상세 이력(2026-07-28 ~ 08-03, M0→v0.11.19)은 **CHANGELOG.md와 git 이력**이 원본이다.
과거 로그에 있던 살아있는 지식(빌드 환경·검증 패턴·구현 함정)은 위 절들과
workflow.md '배운 것' 표로 승격했고, 퇴역 컨셉(온도·왕복·샛길·약 FF-1204·시식 연출)의
구현 기록은 git 이력에서만 참조한다 (2026-08-03 문서 정리).

새 세션에서 **환경 지식·구조 결정**이 생기면 이 절 아래에 날짜와 함께 추가한다 —
기능 이력은 CHANGELOG에, "어떻게"의 교훈은 workflow.md '배운 것'에.
