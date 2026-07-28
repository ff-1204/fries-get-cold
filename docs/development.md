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
| 호스팅 | GitHub Pages (Actions 자동 배포) | 설정 완료 |

멀티플레이어 없음 → 서버 없음. 전부 정적 파일.

## 디렉터리 구조 (M0 현재)

```
fries-get-cold/
├── index.html                # HUD/오버레이 DOM + 스타일, 시작 게이트
├── vite.config.ts            # base: '/fries-get-cold/'
├── vite.config.local.ts      # 단일 파일 빌드 (play-local.html)
├── play-local.html           # 더블클릭 실행용 빌드 산출물 (git 미포함)
├── docs/                     # 개발 문서
├── .github/workflows/deploy.yml
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
```

## 배포 (GitHub Pages)

1. 레포 이름은 반드시 `fries-get-cold` (base 경로와 일치), Public.
2. `.github/workflows/deploy.yml`이 main 푸시마다 빌드·배포.
   ⚠ 이 파일은 원격 도구로 쓸 수 없어 수동 관리 — 삭제·이동 주의.
3. 리포지토리 Settings → Pages → Source: **GitHub Actions** (최초 1회).
4. 배포 후 라이브 URL을 직접 플레이해 확인 ([workflow.md](./workflow.md) 릴리즈 절차).

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

### 미완료 액션 (PC에서 바로 할 일)

1. **git 첫 커밋 아직 없음.** 컨벤션: Conventional Commits + 한국어
   (feat/fix/docs/refactor/chore/balance). 첫 커밋 권장:
   `feat: M0 프로토타입과 문서 체계 초기 구축 (v0.2.1)`
2. **`.github/workflows/deploy.yml` 존재 확인** — 원격 도구로 쓸 수 없어 수동 배치 필요했던
   파일. 없으면 배포 불가 (내용은 이 문서 '배포' 절 + Actions 표준 구성).
3. GitHub에 Public 레포 `fries-get-cold` 생성(정확히 이 이름 — base 경로 일치) → push →
   Settings → Pages → Source: GitHub Actions.
4. 배포 후 모바일 실기기 테스트 (responsive-design.md §7 매트릭스).
5. `node_modules` 없으면 `npm install` 먼저 (Node 18+).

### 다음 개발 단계: M1 (game.md 로드맵)

- 구간 5종 시각 차별화 (원룸 골목/상가/놀이터/정류장/먹자골목 — story.md §4)
- 이상현상 확충 (anomalies.md 시드 14종 → data/*.json 분리, "정상 3회 노출 후 변형" 원칙)
- main.ts 분해: systems/(anomaly·rules·temperature·night) + data/*.json — 이 문서 구조 절 참조
- 밸런싱 대기 항목: 정적 덕킹이 힌트로 너무 노골적인지, 걷기 속도·구간 길이 체감,
  온도 압박(전 구간 보통 걸음 = 미지근 도착 검증) — 플레이테스트 후 data.ts CONFIG 조정

### 작업 규칙 요약 (상세는 각 문서)

- 새 기능/연출: design-principles.md §0 통과 → 이론 체크리스트(game-design-theory /
  fear-cognition) → 구현 → 코드와 같은 커밋에 문서 갱신 (workflow.md)
- 코드 수정 시 `npm run build`(타입 검사 포함) + `npm run build:local`로 play-local.html 재생성
- 서드파티 추가 즉시 licenses.md 기록. GPL 금지. LICENSE 파일 추가 금지(All Rights Reserved)
- 15세 수위·특정 작품 언급 금지 원칙은 공개 레포 전제 — 커밋 전 상기
