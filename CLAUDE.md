# CLAUDE.md

Claude Code가 이 저장소에서 작업할 때 따르는 가이드입니다. 세션마다 자동으로 로드됩니다.

## 프로젝트 개요

「튀김이 식기 전에 (Before the Fries Get Cold)」 — 밤 골목을 걷는 **심리 호러 / 이상현상 관찰**
브라우저 게임 (Three.js + TypeScript + Vite, 싱글플레이).

신장개업 감자튀김집 FF-1204(현수막: XXXXL 감자튀김. 도장 = 방문 기록)에
**첫날 퇴근길에 들르고(튜토리얼 — 밝은 2구간), 그 뒤로는 매일 밤 귀갓길이 게임**이다.
목적은 하나 — **괴담의 존재들을 피해서 집에 도착하는 것.**

⭐ **동사는 걷기 하나다.** 걸으면 남은 거리가 줄고, **멈춰 있으면 골목이 자란다.**
이상현상은 판정 대상이 아니라 **플레이어를 멈춰 세우는 풍경**이다 — 짚을 수도, 없앨 수도 없다.
게임이 벌하는 것이 아니라 **플레이어의 반응이 벌한다.** 깊이 = 꺼져가는 가로등.

⚠ **전환 중이다 — 세 단계 중 둘이 끝났다.**
① 클릭 판정 제거 ✅ v0.11.50 / ② **머무름 → 자람** ✅ v0.11.51 / ③ 응시(외면) 판정 제거 ☐.
남은 차이는 "사람 형태를 오래 보면 붙잡힌다" 하나뿐이다.
설계는 [docs/game.md](docs/game.md), 라이브 실물은 [docs/spec.md](docs/spec.md).
둘이 다르면 spec 쪽이 현재이고 game 쪽이 앞으로다.

- 라이브: https://ff-1204.github.io/fries-get-cold/ (GitHub Pages, `gh-pages` 브랜치 서빙)
- 원격: https://github.com/ff-1204/fries-get-cold.git
- 자매 프로젝트: `C:\Users\moon\Project\dori` — 컨벤션을 공유한다.
  한쪽에서 좋은 규칙이 생기면 다른 쪽 반영을 검토

## ⭐ 설계 최우선 원칙

[docs/design-principles.md](docs/design-principles.md)는 **관문이 아니라 참고**다 —
무엇이 이 골목에서 실제로 무서웠는지의 기록이고, 거기 없는 방법을 써도 된다.

- ⭐ **동사는 걷기 하나** — 조작을 늘리는 제안은 여기부터 통과한다.
  동사가 둘이 되면 공포의 원인이 흐려진다
- **이상현상은 처리할 수 없다** — 짚어서 없앨 수 있으면 그것은 과제이지 공포가 아니다.
  대신 **보이기는 해야 한다** (배치: 광원 안쪽·관찰 시간·실루엣 대비,
  [docs/anomalies.md](docs/anomalies.md))
- **무설명 학습** — 규칙을 텍스트로 설명하지 않는다. 걷기뿐이라 가르칠 것도 거의 없다
- **콘텐츠는 데이터, 로직은 시스템** — 콘텐츠 추가에 코드 수정이 필요하면 설계 실패
  (이상현상 `src/data/anomalies.json` · 밤=스테이지 `src/data/stages.json`)
- **에셋 0** — 프리미티브 + 캔버스 텍스처 + 프로시저럴 사운드뿐
- ⚠ **법적 준수만은 지킨다** (design-principles §법적 준수) — 취향이 아니라 유통 가능 여부다

## 문서 맵 (작업 시 함께 갱신 — 같은 커밋에)

| 바뀐 것 | 문서 |
|---|---|
| 기획 방향·로드맵 | [docs/game.md](docs/game.md) |
| 규칙·콘텐츠가 실빌드에 반영 | [docs/spec.md](docs/spec.md) — **릴리즈마다 실빌드와 대조** |
| **밤(=스테이지)별 콘텐츠·방향** | [docs/stages.md](docs/stages.md) |
| 이상현상 추가/수정 | [docs/anomalies.md](docs/anomalies.md) |
| 구조·구현 노트·검증·배포 | [docs/development.md](docs/development.md) |
| 작업 절차·배운 것 | [docs/workflow.md](docs/workflow.md) |
| 서드파티 추가 | [docs/licenses.md](docs/licenses.md) — **즉시**, GPL 금지 |
| 릴리즈 단위 | CHANGELOG.md (vX.Y.Z 절) — **이력의 원본. 지우지 않는다** |

전체 목록과 이론 문서(story, fear-cognition, affective-design 등)는 README 참조.

## 협업 방식 (상세는 [docs/workflow.md](docs/workflow.md))

- **확인 질문 대신 결정 후 보고.** 선택지를 늘어놓지 말고 판단해서 진행하고 근거·대가를 함께 말한다.
  먼저 물을 것은 **되돌리기 어려운 것**뿐 (배포·삭제·이름 변경)
- **임계값은 가정이 아니라 실측으로.** 응시 각도·신호 주기·이동 속도 같은 수치는
  헤드리스로 재서 잡는다. "될 것 같다"가 아니라 "이 값이 나왔다"
- **막고 싶으면 벽보다 연출을 먼저 찾는다.** 보이지 않는 벽은 최후수단
  (되돌아가기 → 골목이 돌려세운다, 순간이동 → 다리 밑 터널)
- **공간 변경은 세 동작으로 검증**: 뒤돌아보기 · 구간 넘기기 · 되돌아가기.
  실제 결함이 전부 여기서 나왔다
- ⚠ **컨셉을 바꾸기 전에 묻는다 — "이 변경이 플레이어의 동사를 바꾸는가?"**
  세계관을 다섯 번 바꿔도 상호작용이 그대로면 재미도 그대로다.
  픽션 교체보다 동사를 바꾸는 변경이 우선순위가 높다

## 커밋 규칙

- **Conventional Commits + 한국어 제목** (`feat|fix|docs|refactor|chore|polish`)
- `Co-Authored-By` 트레일러 **넣지 않음**
- 버전은 package.json이 아니라 **CHANGELOG.md와 커밋 제목**에 (`… (v0.3.2)`)

## 환경 (이 PC 특이사항 — 상세는 docs/development.md '빌드 환경 주의')

- **Node가 PATH에 없다**: `export PATH="/c/Program Files/nodejs:$PATH"` (bash) 후 npm 사용
- package.json의 rollup WASM `overrides`는 **지우지 않는다** (Application Control 정책 우회)
- **GitHub Actions 미사용.** 배포는 pre-push 훅이 자동 실행 —
  `git push` = 빌드 + gh-pages 발행. 게임 무관 커밋은 `SKIP_DEPLOY=1 git push`
- `gh-pages` 브랜치는 훅이 관리 — 직접 건드리지 않는다

## 검증 도구

- `?a=<effect>` — 이상 강제 (`?a=none` = 항상 정상, 튜토리얼 생략) · `?t=1` — 퇴근길 튜토리얼 강제
  · `window.__fries.state()` — 상태 훅 · `__fries.occlusion()` — 가림 검사
  (지적 훅 `debugSpot`/`debugSpotAt`은 v0.11.50에 사라졌다 — 짚는 입력 경로가 없다)
- **관리자 모드 `Ctrl + Space Space`** (`src/admin.ts`) — 비행 · Esc 스테이지 이동 패널 ·
  **조준 대상 표시**(이름·크기·색·`-L*0.296` 배수 좌표 → 그대로 grep 가능). 판정은 전부 멈춘다
- `npm run verify:sim`(상시) / `verify:balance`(릴리즈 전) / `verify:visible`(이상현상 배치 변경 시) /
  `verify:shots`(시각 변경 시) /
  **`verify:play`**(흐름·전환 변경 시 — 첫 방문부터 밤 2까지 자동 주파)
- ⚠ **가림 검사는 '밝기'를 재지 않는다** — 통과해도 스크린샷을 한 장 본다
  (5/5인데 광원 밖이라 화면엔 안 보인 적이 있다)
- UI·연출·화면 변경 후에는 **/verify-ui 스킬** — 임시 스크린샷 스크립트 패턴
- 작업 마무리는 **/ship 스킬** — 빌드→검증→문서→커밋→배포 체크리스트

## 상업 안전 (개발 중 상시)

All Rights Reserved (LICENSE 파일 추가 금지 — 의도적 비오픈소스, docs/commercial.md).
서드파티는 상업 허용 라이선스만, 추가 즉시 licenses.md 기록. 특정 작품 언급 금지(공개 레포).
