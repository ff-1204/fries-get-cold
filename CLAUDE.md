# CLAUDE.md

Claude Code가 이 저장소에서 작업할 때 따르는 가이드입니다. 세션마다 자동으로 로드됩니다.

## 프로젝트 개요

「튀김이 식기 전에」 — 새벽 골목을 왕복하는 **심리 호러 / 이상현상 관찰** 브라우저 게임
(Three.js + TypeScript + Vite, 싱글플레이). 추격자 대신 **식어가는 감자튀김 온도**가 긴장을 만든다.

- 라이브: https://ff-1204.github.io/fries-get-cold/ (GitHub Pages, `gh-pages` 브랜치 서빙)
- 원격: https://github.com/ff-1204/fries-get-cold.git
- 자매 프로젝트: `C:\Users\moon\Project\dori` — 컨벤션을 공유한다. 한쪽에서 좋은 규칙이
  생기면 다른 쪽 반영을 검토.

## ⭐ 설계 최우선 원칙

모든 결정은 [docs/design-principles.md](docs/design-principles.md)를 먼저 통과시킨다.
충돌하는 기법은 구현 전에 버린다.

- **어포던스·정직한 판정** — 이상현상은 공정하게 보여야 한다 (배치 3원칙: 광원 안쪽·관찰
  시간 확보·실루엣 대비, [docs/anomalies.md](docs/anomalies.md))
- **15세 이용가** — 유혈·잔혹 없음, 실패조차 암전으로. 점프스케어는 총량제(10% 이하, 밤 4~5)
- **무설명 학습** — 규칙을 텍스트로 설명하지 않는다. 학습은 온보딩 보장 + 실패 reveal이 담당
- **콘텐츠는 데이터, 로직은 시스템** — 이상현상 추가에 코드 수정이 필요하면 설계 실패
  (`src/data/anomalies.json`)

## 문서 맵 (작업 시 함께 갱신 — 같은 커밋에)

| 바뀐 것 | 문서 |
|---|---|
| 시스템·방향 결정 | [docs/game.md](docs/game.md) (로드맵·결정 기록) |
| 이상현상 추가/수정 | [docs/anomalies.md](docs/anomalies.md) (현황판·스키마) |
| 구조·환경·도구 | [docs/development.md](docs/development.md) (세션 로그) |
| 작업 절차 변경 | [docs/workflow.md](docs/workflow.md) |
| 서드파티 추가 | [docs/licenses.md](docs/licenses.md) — **즉시**, GPL 금지 |
| 릴리즈 단위 | CHANGELOG.md (vX.Y.Z 절) |

전체 문서 목록과 기획·이론 문서(story, fear-cognition, affective-design 등)는 README 참조.

## 커밋 규칙 (요약)

- **Conventional Commits + 한국어 제목** (`feat|fix|docs|refactor|chore|polish`)
- `Co-Authored-By` 트레일러 **넣지 않음**
- 버전은 package.json이 아니라 **CHANGELOG.md와 커밋 제목**에 (`… (v0.3.2)`)

## 환경 (이 PC 특이사항 — 상세는 docs/development.md '빌드 환경 주의')

- **Node가 PATH에 없다**: `export PATH="/c/Program Files/nodejs:$PATH"` (bash) 후 npm 사용
- package.json의 rollup WASM `overrides`는 **지우지 않는다** (Application Control 정책 우회)
- **GitHub Actions 미사용** (결정 기록). 배포는 pre-push 훅이 자동 실행 —
  `git push` = 빌드 + gh-pages 발행. 게임 무관 커밋은 `SKIP_DEPLOY=1 git push`
- `gh-pages` 브랜치는 훅이 관리 — 직접 건드리지 않는다

## 검증 도구

- `?a=<effect>` — 이상현상 강제 (`?a=none` = 항상 정상), `window.__fries.state()` — 상태 훅
- `npm run verify:shots` / `verify:balance` — 헤드리스 스크린샷·밸런스 실측 (scripts/verify.mjs)
- 작업 마무리는 **/ship 스킬** (.claude/skills/ship) — 빌드→검증→문서→커밋→배포 체크리스트

## 상업 안전 (개발 중 상시)

All Rights Reserved (LICENSE 파일 추가 금지 — 의도적 비오픈소스, docs/commercial.md).
서드파티는 상업 허용 라이선스만, 추가 즉시 licenses.md 기록. 특정 작품 언급 금지(공개 레포).
