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

## 디렉터리 구조 (M0 현재)

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
    ├── hud.ts                # DOM HUD (상태·온도·자막·암전·오버레이)
    ├── audio.ts              # 프로시저럴 사운드 (환경음·정적·발소리·크런치)
    ├── save.ts               # 기기 내 저장 (localStorage)
    ├── data.ts               # 수치(CONFIG)·텍스트(TEXT)·타입, 콘텐츠 파사드
    └── data/anomalies.json   # 이상현상 콘텐츠 (스키마: docs/anomalies.md)
```

M1 분리 계획: main.ts가 커지면 systems/(anomaly·rules·temperature·night)와 data/*.json으로
분해한다. 원칙 유지: **콘텐츠는 데이터, 로직은 시스템** — 이상현상 추가에 코드 수정이
필요하면 설계 실패.

## 핵심 구현 노트 (M0 실제)

- **구간 재활용**: 구간 프리팹 1개를 고정하고, 통과 시 플레이어 좌표와 이상현상 상태만
  리셋(rollSegment) — 별도 텔레포트 연출 없이 루프 성립.
- **판정**: 본길(끝 벽 개구부)·샛길(왼쪽 벽 개구부) 통과를 좌표 트리거로 감지, 구간의
  이상 유무와 대조해 실패/통과/비용 처리 (main.ts updateWalk → passSegment).
- **온도**: 귀갓길에만 자연 감쇠 + 샛길 비용. 0이 되면 눅눅 귀가 처리.
- **포인터락**: 오버레이 표시 시 해제(hud.blackScreen), 버튼 클릭 후 재획득(input.activate) —
  이 순서를 지키지 않으면 PC에서 커서가 사라져 진행 불가.
- **조명/안개**: 앰비언트+달빛+구간 포인트라이트, FogExp2. 규칙은 [visual-polish.md](./visual-polish.md) §4.
- **스마트폰 UI(M2)**: DOM 오버레이로 구현 예정 — 텍스처보다 가독성·수정 용이성 우선.

## 개발 명령

```bash
npm install          # 최초 1회
npm run dev          # 개발 서버 (핫 리로드)
npm run build        # 타입 검사 + Pages용 빌드 (dist/)
npm run build:local  # 단일 파일 빌드 → dist-local/index.html (play-local.html로 복사)
npm run deploy       # 빌드 후 gh-pages 브랜치로 배포
```

Node는 PATH에 없을 수 있다 (`C:\Program Files\nodejs`). 없으면 해당 경로를 PATH에 추가한다.

디버그: URL에 `?a=umbrella|window_light|lamp_flicker|sign_tilt|none`을 붙이면 해당 이상현상이
매 구간 강제된다 (플레이테스트·스크린샷 검증용 — 2026-07-29 전 요소 가시성 검증에 사용).

## 배포 (GitHub Pages — 로컬 빌드 + gh-pages 브랜치)

- **라이브 URL**: https://ff-1204.github.io/fries-get-cold/
- **방식**: GitHub Actions 미사용. 로컬에서 빌드해 산출물만 `gh-pages` 브랜치로 푸시한다.
  (`main` = 소스, `gh-pages` = 빌드 산출물)

```bash
npm run deploy   # = npm run build (타입 검사 포함) && gh-pages -d dist
```

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
- 15세 수위·특정 작품 언급 금지 원칙은 공개 레포 전제 — 커밋 전 상기

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
