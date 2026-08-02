# 개발 가이드

기술 스택, 프로젝트 구조, 셋업, 배포. 구조가 바뀌면 이 문서에 계속 기록한다.

## 기술 스택

| 역할 | 기술 | 상태 |
|---|---|---|
| 3D 렌더링 | Three.js 0.178 | 사용 중 |
| 언어 | TypeScript (strict) | 사용 중 |
| 빌드 | Vite 6 (`base: '/fries-get-cold/'`) | 사용 중 |
| 로컬 단일 파일 빌드 | vite-plugin-singlefile → `play-local.html` | 사용 중 |
| 충돌/레이캐스팅 | three-mesh-bvh | M1 도입 예정 (M0는 경계 클램프) |
| 모델링 | Blender → glTF + Draco / KTX2 압축 | M1~ (M0는 그레이박스) |
| 호스팅 | GitHub Pages (로컬 빌드 → gh-pages 브랜치) | 사용 중 |

멀티플레이어 없음 → 서버 없음. 전부 정적 파일.

## 디렉터리 구조 (v0.6.0 현재)

```
fries-get-cold/
├── index.html                # HUD/오버레이 DOM + 스타일, 시작 게이트
├── vite.config.ts            # base: '/fries-get-cold/'
├── vite.config.local.ts      # 단일 파일 빌드 (play-local.html)
├── play-local.html           # 더블클릭 실행용 빌드 산출물 (git 미포함)
├── docs/                     # 개발 문서
└── src/
    ├── main.ts               # 게임 루프, 밤 상태 머신, 이동/판정
    ├── world.ts              # 공용 복도 + 구간 테마 5종, 이상현상 effect 핸들러
    ├── input.ts              # 입력 추상화 (포인터락+WASD / 반분할 터치)
    ├── hud.ts                # DOM HUD (구간 카운터·자막·암전·오버레이)
    ├── audio.ts              # 프로시저럴 사운드 (환경음·정적·발소리·크런치)
    ├── save.ts               # 기기 내 저장 (localStorage)
    ├── config.ts             # 수치·레이아웃 상수 (JSON·three 의존 없음 — Node가 직접 읽는다)
    ├── balance.ts            # 깊이·접힘 판정 순수 로직 + 밤 시뮬레이션 (게임·테스트 공유)
    ├── balance.test.ts       # 밸런스 시뮬레이션 테스트 (node:test — npm run verify:sim)
    ├── data.ts               # 콘텐츠 파사드 — 텍스트(TEXT)·이상현상 타입, CONFIG 재수출
    └── data/anomalies.json   # 이상현상 콘텐츠 (스키마: docs/anomalies.md)
```

분리 계획 (M3 착수 전 검토): main.ts가 커지면 systems/(anomaly·rules·night)와 data/*.json으로
분해한다. 원칙 유지: **콘텐츠는 데이터, 로직은 시스템** — 이상현상 추가에 코드 수정이
필요하면 설계 실패.

## 핵심 구현 노트 (v0.6.0 실제)

- **구간 재활용**: 구간 프리팹 1개를 고정하고, 통과 시 플레이어 좌표와 이상현상 상태만
  리셋(rollSegment) — 별도 텔레포트 연출 없이 루프 성립.
- **판정**: 크로스헤어/탭 레이캐스트 + 관용 반경으로 사물을 짚는다 (4.5m 이내 근접 확인).
  구간의 이상 유무와 대조해 통과 / 접힘·증식 / 빈 지적(깊이 +1) 처리
  (main.ts tryPoint → passSegment).
- **깊이**: 가로등 감광 사다리(world.applyDepth)가 게이지를 대신한다.
  한계 6 = 암전 후 골목 입구 리셋 (soft fail).
- **포인터락**: 오버레이 표시 시 해제(hud.blackScreen), 버튼 클릭 후 재획득(input.activate) —
  이 순서를 지키지 않으면 PC에서 커서가 사라져 진행 불가.
- **조명/안개**: 앰비언트+달빛+구간 포인트라이트, FogExp2. 규칙은 [visual-polish.md](./visual-polish.md) §4.
- **스마트폰 UI(M3)**: DOM 오버레이로 구현 예정 — 텍스처보다 가독성·수정 용이성 우선.

## 개발 명령

```bash
npm install          # 최초 1회
npm run dev          # 개발 서버 (핫 리로드)
npm run build        # 타입 검사 + Pages용 빌드 (dist/)
npm run build:local  # 단일 파일 빌드 → dist-local/index.html (play-local.html로 복사)
npm run deploy       # 빌드 후 gh-pages 브랜치로 배포
npm run verify:sim   # 밸런스 순수 시뮬레이션 테스트 (node:test, 브라우저 불요, <1초)
npm run verify:shots # 헤드리스 스크린샷 검증 (dev 서버 필요 — 아래 '검증 방법')
npm run verify:balance # E2E 밸런스 실측 4케이스 (dev 서버 필요)
```

Node는 PATH에 없을 수 있다 (`C:\Program Files\nodejs`). 없으면 해당 경로를 PATH에 추가한다.

디버그: URL에 `?a=<effect>`를 붙이면 해당 이상현상이 매 구간 강제된다 (`?a=none` = 항상 정상).
effect 키 목록은 [anomalies.md](./anomalies.md) 현황판 (= world.ts 핸들러 키 = 디버그 키).

## 배포 (GitHub Pages — 로컬 빌드 + gh-pages 브랜치)

- **라이브 URL**: https://ff-1204.github.io/fries-get-cold/
- **방식**: GitHub Actions 미사용. 로컬에서 빌드해 산출물만 `gh-pages` 브랜치로 푸시한다.
  (`main` = 소스, `gh-pages` = 빌드 산출물)

```bash
npm run deploy   # = npm run build (타입 검사 포함) && gh-pages -d dist
```

- **푸시 = 배포 (2026-07-30)**: `.githooks/pre-push` 훅이 main 푸시 시 `npm run deploy`를
  자동 실행한다 — Actions 없이 "푸시만 하면 사이트까지 갱신". 클론마다 1회 설정 필요:
  `git config core.hooksPath .githooks`. 배포 없이 푸시만 하려면 `SKIP_DEPLOY=1 git push`.
  (훅은 LF 필수 — `.gitattributes`가 보장)

1. 레포 이름은 반드시 `fries-get-cold` (base 경로 `/fries-get-cold/`와 일치), Public.
2. 리포지토리 Settings → Pages → Source: **Deploy from a branch → `gh-pages` / `(root)`** (최초 1회).
   ⚠ `main` 브랜치를 서빙하면 빌드 없이 원본 `index.html`이 그대로 나가고 스크립트
   (`/src/main.ts`)를 못 찾아 **시작 화면만 뜨고 게임이 실행되지 않는다.**
3. 배포 후 라이브 URL을 직접 플레이해 확인 ([workflow.md](./workflow.md) 릴리즈 절차).

### 빌드 환경 주의 — rollup 네이티브 모듈 차단

이 개발 PC는 Windows Application Control 정책이 서명 없는 네이티브 모듈(`.node`) 로드를
차단해, rollup 기본 바이너리로는 `vite build`가 `ERR_DLOPEN_FAILED`로 실패한다.
`package.json`의 `overrides`로 rollup을 **공식 WASM 빌드(`@rollup/wasm-node`)** 로 대체해
해결했다. 빌드 속도만 조금 느릴 뿐 산출물은 동일하다. 이 항목을 지우면 빌드가 다시 깨진다.
(esbuild·tsc는 정책에 걸리지 않아 그대로 사용)

## 성능 예산

- 초기 로드 ≤ 8MB, 총 다운로드 ≤ 20MB / 60fps @ 중급 노트북, 30fps @ 중급 모바일
- 구간당 드로우콜 ≤ 100, 씬 삼각형 ≤ 200k (로우폴리 유지)
- 에셋 추가 시마다 빌드 크기 기록:

| 날짜 | 빌드 크기 (gzip) | 비고 |
|---|---|---|
| 2026-07-28 | JS 486kB (124kB) | M0 — Three.js 포함, 에셋 없음(그레이박스) |

---

## 개발 로그 — 2026-07-28 세션 인수인계

클라우드 세션에서 기획~v0.2.1까지 진행. 이후 작업은 PC에서 이어서 한다.

### 현재 상태: v0.2.1 (CHANGELOG.md 참조)

- **v0.1.0 (M0)**: 그레이박스 골목 + 본길/샛길 판정 + 왕복/온도 + 이상현상 4종 +
  PC(포인터락)/터치 입력 + 실패/시식 연출. 헤드리스 테스트 통과.
- **v0.2.0**: 프로시저럴 사운드(환경음·정적 덕킹·발소리·크런치), 밤1 온보딩 보장
  (첫 구간 정상·편도 이상 1회 보장), 안개 심화, "바삭함" 게이지, 밝기 슬라이더, 밤별 인트로.
- **v0.2.1**: 뒤로가기 트랩(popstate→일시정지), beforeunload 가드, 핀치/롱프레스/당겨새로고침
  차단, Wake Lock, bfcache 복구.
- 알려진 수정 이력: PC 오버레이 중 포인터락으로 버튼 클릭 불가 → blackScreen에서
  exitPointerLock, 버튼 후 input.activate() 재획득 (이 순서 유지 필수).

### 미완료 액션 (PC에서 바로 할 일) — 2026-07-29 갱신

1. ~~git 첫 커밋~~ **완료** — 컨벤션 확정: Conventional Commits + 한국어 제목
   (feat/fix/docs/refactor/chore/polish). 커밋 메시지에 Co-Authored-By 트레일러 넣지 않음.
2. ~~배포 파이프라인~~ **완료** — Actions 대신 로컬 빌드 + `gh-pages` 브랜치 (`npm run deploy`).
   Actions는 필수가 아니라 사용하지 않기로 결정 (2026-07-29).
3. ~~레포 생성·push·Pages 설정~~ **완료** — https://github.com/ff-1204/fries-get-cold
   Pages Source를 `gh-pages` / `(root)`로 전환 완료(2026-07-29), 라이브 동작 검증됨.
4. 배포 후 모바일 실기기 테스트 (responsive-design.md §7 매트릭스).
5. ~~로컬 빌드 환경~~ **완료** — rollup WASM 대체로 해결 (위 '빌드 환경 주의' 참조).

### 다음 개발 단계: M1 (game.md 로드맵)

- 구간 5종 시각 차별화 (원룸 골목/상가/놀이터/정류장/먹자골목 — story.md §4)
- 이상현상 확충 (anomalies.md 시드 14종 → data/*.json 분리, "정상 3회 노출 후 변형" 원칙)
- main.ts 분해: systems/(anomaly·rules·temperature·night) + data/*.json — 이 문서 구조 절 참조
- 밸런싱 대기 항목: 정적 덕킹이 힌트로 너무 노골적인지, 걷기 속도·구간 길이 체감,
  온도 압박 — 2026-07-29 감쇠 0.55→0.9로 계산상 목표(걷기=미지근·질주=바삭·걷기+우회 2회=눅눅)에
  맞춤. 체감 검증은 플레이테스트로 — data.ts CONFIG 조정

### 작업 규칙 요약 (상세는 각 문서)

- 새 기능/연출: design-principles.md §0 통과 → 이론 체크리스트(game-design-theory /
  fear-cognition) → 구현 → 코드와 같은 커밋에 문서 갱신 (workflow.md)
- 코드 수정 시 `npm run build`(타입 검사 포함) + `npm run build:local`로 play-local.html 재생성
- 서드파티 추가 즉시 licenses.md 기록. GPL 금지. LICENSE 파일 추가 금지(All Rights Reserved)
- 표현 수위 법적 준수·특정 작품 언급 금지 원칙은 공개 레포 전제 — 커밋 전 상기

---

## 개발 로그 — 2026-07-29 세션 (PC 첫 세션)

클라우드 인수인계를 받아 PC에서 진행. v0.2.1 → v0.2.4 + a. 기능 변경 상세는 CHANGELOG 참조 —
여기에는 다음 세션에 필요한 **환경 지식과 결정**을 기록한다.

### 릴리즈·인프라 결정

- **git**: 첫 커밋~푸시 완료. 컨벤션 Conventional Commits + 한국어 제목,
  Co-Authored-By 트레일러 금지. git 사용자 정보는 저장소 로컬로 `Moon <myesung12@gmail.com>`.
- **배포**: GitHub Actions 미사용 결정 → `npm run deploy` (로컬 빌드 → `gh-pages` 브랜치,
  `--dotfiles`로 `.nojekyll` 포함). Pages Source 전환 완료, 라이브 번들 해시를 로컬 빌드와
  대조해 검증. 첫 orphan 배포 때 `.gitignore`가 브랜치에 딸려가는 문제는 정리함.
- **빌드 환경 (이 PC 특이사항)**:
  - Node가 PATH에 없음 — `C:\Program Files\nodejs`를 세션마다 PATH에 추가해야 함
  - Application Control 정책이 서명 없는 `.node` 로드 차단 → rollup을 `@rollup/wasm-node`로
    overrides (위 '빌드 환경 주의' 절). esbuild(exe)·tsc(순수 JS)는 무관
  - npm 래퍼가 install script를 막음(allow-scripts) — esbuild 경고는 무해

### 이번 세션 기능·수정 (요약)

- 기기 내 저장 `src/save.ts` (밤·실패·시식 기록·밝기·음소거) + 이어하기/기록 삭제 UI,
  개인정보처리방침 `docs/privacy.md`
- 시작 화면: 접이식 "⚙ 설정" 패널(밝기·소리), 밝기 미리보기(peek), 규칙 설명 문구 제거
- A-013 입간판 가시성 수정 → anomalies.md '배치 규칙' 3원칙 신설
- 문서 정합: 샛길 어포던스 조명, 재활용 배출장 프롭, 온도 감쇠 0.9, "바삭함" 프레이밍 통일

### 검증 방법 (재사용 가능)

- **헤드리스 시각 검증**: 브라우저 확장 없이 스크래치패드에 `puppeteer-core`를 설치하고
  설치된 Edge(`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`)를
  `--enable-unsafe-swiftshader`로 띄워 스크린샷 촬영. WASD 이동은 포인터락 없이
  `page.keyboard`로 가능 (키 리스너는 락과 무관).
- **이상현상 강제**: `?a=<effect>` 디버그 파라미터 (위 '개발 명령' 절).
- **시간성 연출(깜빡임 등)**: 90ms 간격 연사 후 PNG 파일 크기 편차로 소등 프레임 탐지 —
  화면이 어두워지면 압축 크기가 급감한다.
- 이 방법으로 전 요소(이상현상 4종·샛길 조명·배출장·HUD·저장/설정 UI) 가시성·동작 검증 완료.
- **자동 플레이스루 (2026-07-30 추가)**: `window.__fries.state()` 훅(상태 읽기 전용 —
  phase/night/segment/returning/temp/x/z)으로 위치를 읽으며 `page.keyboard`로 왕복 주파.
  `?a=none`(항상 정상)과 조합하면 밸런싱 실측이 된다 (v0.3.2에서 온도 목표 3종 검증).
  주의: vite dev 서버가 파일 변경 시 page reload를 브로드캐스트하므로, 소스를 고친 직후의
  실행은 "frame got detached"로 죽을 수 있다 — 재실행하면 된다.

### 다음 세션에 남기는 일

- 모바일 실기기 테스트 (위 미완료 액션 4번 — 유일하게 남은 항목)
- 온도 감쇠 0.9 체감 검증, 밝기 기본값 적정성 (헤드리스 기준 상당히 어두움 — 실기기로 확인)
- M1 착수 (위 '다음 개발 단계' 절)

---

## 개발 로그 — 2026-07-30 세션 (M1 마무리 + 배포 자동화)

v0.3.1 → v0.3.2. 기능 상세는 CHANGELOG — 여기에는 환경 지식·도구·백로그를 기록한다.

### 이번 세션 요약

- M1 로드맵 잔여 4종 완료: TXT 이상현상 3종(캔버스 텍스트 렌더), 구간 벽 구조 차별화,
  시식 연출(귀가 비트→한 입씩→밤별 에필로그), 밸런싱 실측·조정 (샛길 온도 비용 9→12)
- 배포 자동화: `.githooks/pre-push` — main 푸시 시 `npm run deploy` 자동 실행
  (위 '배포' 절. Actions 미사용 결정 유지, gh-pages 브랜치는 훅이 관리하므로 건드릴 일 없음)
- 개발문화 정비: **CLAUDE.md 신설**(세션 자동 로드 가이드), workflow.md **'배운 것' 표** 도입
  — 자매 프로젝트 dori 관례 수용. **/ship 스킬**(.claude/skills/ship — 마무리 절차 체크리스트).
  역방향으로 dori에 /ship 이식·검증 환경 사실 교정(Node 있음)·verify 스크립트 패턴 전파

### 검증 도구 정착 — `scripts/verify.mjs` (재사용)

세션 임시 폴더에서 쓰던 헤드리스 검증 스크립트를 저장소로 이관했다 (puppeteer-core
devDependency, licenses.md 기록 완료). dev 서버(`npm run dev -- --port 5199 --strictPort`)를
띄운 상태에서:

- `npm run verify:shots` — 이상현상 정상/이상 비교 + 구간 테마 스크린샷 → `verify-shots/`
  (새 이상현상을 추가하면 스크립트의 cases 배열에 한 줄 추가)
- `npm run verify:balance` — `?a=none` 클린 왕복 실측: 걷기=미지근 / 질주=바삭 /
  걷기+과잉 우회 2회=눅눅 3목표 검증 + 시식 연출→밤 2 진입 통과 확인

구현 함정 (스크립트에 주석으로도 있음): 오버레이 버튼 클릭은 동적 오버레이만 골라야 한다
(#start 등 정적 오버레이의 숨은 버튼을 잡으면 오클릭) / 소스 수정 직후 실행은 vite reload
브로드캐스트에 "frame got detached"로 죽을 수 있다 — 재실행하면 된다.

### 개선 백로그 (이번 세션에서 발견 — 구현하지 않음)

- ~~**세탁소 파사드 돌출**~~ → **v0.3.3에서 해결** (같은 날): 부스·그네 포함 벽면 파사드
  전환으로 확대 수정 — 규칙은 workflow.md '배운 것' 표에 승격 (눈높이 구조물 벽면 평행)
- **샛길의 시간 비용이 사실상 없음**: 현 기하에서 샛길 경로가 본길과 거리가 비슷해
  (실측 왕복 시간 차이 ≈ 0) 온도 비용 12가 과잉 경계 억제의 전부다. M2에서 샛길을
  실제로 길게 만들지 결정 — 늘리면 sidePathTempCost 재조정 필요 (verify:balance로 재실측)
- **밤 5 에필로그는 임시 문구** ("…내일은, 안 나가도 되면 좋겠다") — M3 엔딩 분기에서 대체.
  밤 2~4 에필로그도 story.md '마지막 컷' 기반 선작성이므로 해당 밤 구현 시 재검토
- **시식 배경 틴트 체감**: 결과별 틴트(바삭 웜/눅눅 한랭)가 헤드리스 스크린샷 기준 매우
  미묘하다 — 실기기에서 구분되는지 확인, 필요하면 틴트 강도 상향
- **이월 항목**: 모바일 실기기 테스트, 밤 1 직접 처음부터 플레이(무설명 학습 검증 —
  자동화 불가), main.ts 분해(systems/ — M2에서 온도·규칙 시스템 추가할 때 함께)

## 개발 로그 — 2026-08-02 세션 (dori 교훈 이관 + 이상현상 레지스트리)

v0.3.3 → v0.3.4. 기능 상세는 CHANGELOG — 여기에는 구조 결정과 남은 부채를 기록한다.

### 이번 세션 요약

- **docs/dori-lessons.md 신설** (같은 날 문서 정리로 삭제 — 필요 시 git 이력 또는 dori 레포 참조)
  — dori가 실배포·AdSense 심사·모바일 실사용에서 검증한
  교훈 이관 (크롤러에게 캔버스는 빈 페이지, 이모지 깨짐, 대외 문구-소스 대조,
  인앱 브라우저 함정). 대외 배포·모바일 기능 작업 전에 한 번 훑는다 (workflow.md)
- **이상현상 핸들러 레지스트리** (world.ts): M3에서 30종+로 늘리기 전 부채 정리.
  reset/apply가 effect별로 한 항목에 붙고 `Record<AnomalyEffect, …>`가 누락을 컴파일
  에러로 잡는다. 새 effect 추가 = data.ts 유니온에 리터럴 1개 + EFFECTS 항목 1개
  (+새 사물이면 SegmentRefs 필드) — 리셋 블록·switch를 따로 기억할 필요 없음
- **verify.mjs 상수 중복 제거**: `__fries.config()` 훅(CONFIG + SIDE_GAP)에서 샛길
  진입 좌표를 파생 — 게임 상수를 스크립트에 손으로 복사하는 패턴 자체를 금지
  (dori-lessons §3 '대외 문구는 소스 상수와 대조'와 같은 축의 규칙)
- **밸런스 순수 시뮬레이션 테스트** (v0.3.5): 실브라우저 E2E(밸런스 3케이스 ≈5분)의
  1차 검증을 브라우저 없이 <1초로. CONFIG를 config.ts(JSON·three 의존 없음)로,
  온도·판정 수식을 balance.ts로 추출해 게임과 테스트가 **같은 소스**를 읽는다 —
  Node 24 네이티브 TS + 내장 node:test라 새 러너 의존성 0 (@types/node만 추가).
  거리 모델은 판정 트리거 좌표에서 파생, '실측 정합 ±3%p' 테스트가 모델-현실 이탈을 감시.
  역할 분담: verify:sim = 커밋 전 상시 / verify:balance(E2E) = 릴리즈 전 최종

### 남은 구조 부채 (M2/M3 착수 전 검토 — 2026-08-02 분석)

- `createWorld()` 300줄 단일 함수 — 테마 추가마다 자란다. M3(밤 2~5) 착수 전 테마별 분리
- main.ts 488줄 — 게임 로직과 UI 부트스트랩 혼재, `getElementById(...)!` 20여 곳.
  M2에서 systems/ 분해할 때 함께 (기존 이월 항목)
- 밤 6+ 텍스트 없음 — `intros`/`epilogues` 5개 클램프 반복. M3 엔딩 구현에서 해소

### 컨셉 전환 (2026-08-02, 같은 날 후반)

온도 게이지·상시 왕복을 퇴역시키고 **접히는 골목 + 깊이 + 꺼져가는 빛**으로 재기획
(경위·시스템 상세는 game.md 결정 기록·코어 루프). 문서 반영: game.md 전면 개정,
story.md·design-principles.md 온도/왕복 종속부 교체, README·CLAUDE.md·anomalies.md 노트.

코드 영향 (M2 컨셉 전환에서 실행 — 이번 커밋은 문서만):

- **퇴역 대상**: temp·tempDecay·sidePathTempCost 계열(config), 시식 등급 연출(hud.tasteScene의
  게이지), returning 상시 분기, balance.ts 시뮬레이션(깊이 모델로 재작성), verify:balance 케이스
- **생존 자산**: 본길/샛길 판정 트리거, 이상현상 레지스트리·JSON·배치 원칙, 구간 테마 5종,
  프롤로그, 검증 인프라(verify.mjs·__fries 훅), 저장 구조(결과 스키마는 변경)
- 구 문법 코드는 M2 전까지 라이브에 그대로 남는다 (문서가 코드보다 앞서 있는 기간 —
  로드맵 M2 완료 기준으로 해소)
- M2 착수 전 컨셉 학습성 검토 완료 (같은 날): 장르 스키마 일치/위반 분석 →
  game-design-theory §9 신설(스키마·목표 구배·손실 회피·학습된 무기력), game.md에
  '접힘 인지 보장 4요소', 이론 문서 3종(affective·visual-polish·theory)의 구 컨셉 잔재 정리

### M2 구현 (2026-08-02, v0.4.0) — 문서-코드 간극 해소

접히는 골목이 코드로 구현되어 라이브 배포됨. 구현 노트:

- **상태 모델**: done(걸음)·total(5+접힘)·theme(1..5)·depth·folds. 접힘 = done+1·total+1·
  테마 반복 — 카운터 분자·분모가 함께 늘어 "걸었는데 남은 거리가 안 줄었다"가 표시된다
- **깊이 시각화**: world.applyDepth — 가로등 사다리 LAMP_LADDER + lampBase를
  group.userData로 공유 (lamp_flicker 이상현상이 감광 상태와 공존). 리셋 순서 주의:
  rollSegment에서 applyDepth → applyAnomaly (레지스트리 리셋이 lampBase를 읽는다)
- **verify.mjs 판정 실측**: ?a=&lt;effect&gt;가 해당 구간에서 이상을 고정하는 성질로
  접힘 루프(본길 강행 3회 → 입구 리셋)·정당 우회(샛길 → 무비용)를 결정적으로 재현
- 시뮬레이션(balance.ts 깊이 모델)과 E2E 실측 일치: 무결점 편도 43.5s (모델 43.45s)
- 남은 것: 접힘 변주 심화(프롭 변주 — M3), **직접 처음부터 플레이**(무설명 학습 검증),
  모바일 실기기 확인 (이월)

### 판정 동사 전환 (2026-08-02, v0.5.0) — 갈림길 폐기, 직진 + 지적

플레이 소감("그냥 쭉 직진하면 되는 거 아니야?")으로 본길/샛길 갈림길을 폐기하고
지적(직접 짚기) 판정으로 전환 (경위는 game.md 결정 기록). 구현 노트:

- **히트 판정**: 레이캐스트(intersectObjects) + 관용 반경(타깃 중심의 NDC 거리 0.12,
  45m 이내) 이중 — 가는 사물(그네 줄·전단지)과 모바일 손가락 오차 대응.
  effect별 히트 대상은 world.ts `hit` 맵 (Record — 새 effect 추가 시 누락 컴파일 에러)
- **입력 분기**: PC 포인터락 중 클릭 = 화면 중앙 / 모바일 탭 = 350ms·14px 이내 터치
  (이동·시점 드래그와 자연 구분 — input.ts tapCandidate)
- **검증 훅 예외**: `__fries.debugSpot()`은 ?a= 디버그 모드 한정의 조작 훅 —
  E2E가 지적을 결정적으로 재현하기 위함. 상태 훅 읽기 전용 원칙의 명시적 예외
- SIDE_GAP·샛길 지오메트리·정당 우회 개념 제거 — balance.ts는 folds/wastes 2축 모델로 단순화

### 확인 의무·증식·스폰 포인트 (2026-08-02, v0.6.0) — 공포 상향

관찰-신고 장르의 누적 문법과 대면 돌파 문법을 우리 식으로 결합 (game.md 결정 기록). 구현 노트:

- **다중 이상**: `anomalies: AnomalyDef[]` + `checked: Set<id>` — applyAnomalies가
  전체 리셋 후 복수 적용. 연속 등장 방지는 직전 구간 id 집합(lastIds) 기준
- **근접 확인**: tryPoint에서 히트 후 `targetDistance ≤ CONFIG.checkDistance` 검사 —
  원거리는 tooFar 안내(무비용). 증식은 balance.ts `swarmAfterFolds`/`activeCount` 순수 함수
- **스폰 앵커**: world.ts `SPAWN_ANCHORS` 6곳 — figure 핸들러가 userData.figureAnchor를
  읽어 배치. **?a= 디버그는 앵커 고정(2번)** — 스크린샷·E2E 결정성 (랜덤은 실플레이만)
- 미해결: 접힘 반복 구간에서 증식된 동시 이상의 밀도 체감(2~3개가 좁은 구간에 겹칠 때의
  가독성)은 실플레이로 확인 필요 — 앵커 간격은 확보돼 있으나 사물 고정형과의 겹침은 미검증

### UI 컨셉 마감 + 모바일 조작 단순화 (2026-08-02, v0.7.0)

"3D 조작이 어렵다"는 피드백으로 모바일 입력을 재설계 (상세는 responsive-design §1). 구현 노트:

- **걷기 버튼**: `#walk-btn`(index.html, `@media (pointer: coarse)`에서만 표시) →
  main.ts가 pointerdown/move/up으로 `input.touchForward`/`touchRun`을 넣는다
  (setPointerCapture로 버튼 밖 이탈에도 추적). input.ts에서 moveTouch(반분할) 제거 —
  터치는 lookTouch(전면 드래그) + tapCandidate만 남아 단순해졌다
- **크로스헤어**: 터치에서 CSS로 숨김 — 모바일 지적은 탭 지점 좌표라 중앙 점이 거짓 신호였다
- **컨셉 마감은 전부 CSS**: 비네트(#hud::before), 타이틀 글로우·01:04 시계, 카운터 앰버 보더,
  breathe 키프레임(주 버튼 한정 — .ghost/#sound-btn 제외). 에셋 추가 없음
- **UI 시각 검증 스크립트**: 스크래치패드 ui-shots.mjs — verify.mjs와 같은 헤드리스 패턴 +
  `setViewport({isMobile, hasTouch})`로 `pointer: coarse` 매체 질의까지 재현,
  `touchscreen.touchStart` 홀드로 걷기 버튼 실주행 실측(z 좌표 __fries.state 확인).
  교훈: 하단 고정 UI(힌트)는 자막(#msg)·버튼과 겹친다 — 상단 카운터 아래로 이동

### 스토리 개편 (2026-08-02, v0.8.0) — 신장개업 감자상회·3막 목적 전도

전제·아치는 game.md 결정 기록, 서사 전문은 story.md 전면 개정. 구현 노트:

- 텍스트 소스는 전부 data.ts TEXT — 인트로·에필로그 각 5종이 3막 아치(낯섦→홀림→전도)를
  운반한다. 시스템(접힘·깊이·판정)은 무변경 — 스토리 개편이 코드 로직을 건드리지 않았다
  (콘텐츠는 데이터 원칙의 검증 사례)
- **쿠폰 도장 카드**: index.html `#coupon`(정적 마크업) + main.ts refreshCoupon()이
  save.night에서 도장 수 파생. 밤 6+ 오버플로(칸 밖 도장 + TEXT.couponOverflow)로
  "엔딩 없는 무한 밤"의 임시 상태를 서사로 흡수 — M3 엔딩 구현 시 이 카드가
  밤 5 분기(쿠폰 완성)와 엔딩 A(두고 나온다)의 소품이 된다
- 간판 텍스처 문자열만 교체('감자상회 24시') — A-012 오탈자 이상현상 로직·reveal 무변경
- 검증: verify:sim 10건, 프롤로그 클릭스루·쿠폰 카드 0/2/6도장 헤드리스 스크린샷 육안

### 밝기 재조정 (2026-08-02, v0.8.1)

"화면이 잘 안 보인다" 피드백. 수치는 CHANGELOG — 여기에는 방법·교훈을 기록한다:

- **조명(앰비언트/달빛)만으로는 체감이 안 움직였다** — 어두운 재질(#20263a대) + ACES
  톤매핑이 앰비언트 상향을 눌러버린다. 결정 레버는 `renderer.toneMappingExposure`
  (EXPOSURE_BASE 1.35 — 저장값에 곱하는 방식이라 세이브 마이그레이션 불요)
- 감광 사다리는 바닥만 올리고 단차 유지 — 깊이 게이지 역할 보존이 제약 조건.
  빈 지적 4회(디버그 spot 훅) → 깊이 4 상태를 스크린샷으로 대조해 어두움 체감 확인
- 헤드리스(swiftshader) 렌더는 실기기보다 어둡게 나온다(기존 기록) — 최종 밝기 판단은
  실기기에서. 스크린샷 비교는 상대 변화 확인용
