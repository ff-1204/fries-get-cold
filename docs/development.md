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
    ├── world.ts              # 그레이박스 구간 프리팹, 이상현상 적용(applyAnomaly)
    ├── input.ts              # 입력 추상화 (포인터락+WASD / 반분할 터치)
    ├── hud.ts                # DOM HUD (상태·온도·자막·암전·오버레이)
    └── data.ts               # 이상현상·수치·텍스트 (M1에서 data/*.json으로 분리)
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
3. ~~레포 생성·push~~ **완료** — https://github.com/ff-1204/fries-get-cold
   ⚠ **남은 일**: Settings → Pages → Source를 **`gh-pages` / `(root)`** 로 전환 (배포 절 2번).
   현재 `main` 서빙 상태라 라이브에서 게임이 실행되지 않음.
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
