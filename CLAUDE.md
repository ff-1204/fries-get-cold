# CLAUDE.md

Claude Code가 이 저장소에서 작업할 때 참고하는 안내입니다. 세션마다 자동으로 로드됩니다.

## 프로젝트 개요

「튀김이 식기 전에 (Before the Fries Get Cold)」 — 밤 골목을 걷는 **심리 호러 / 이상현상 관찰**
브라우저 게임 (Three.js + TypeScript + Vite, 싱글플레이).

신장개업 감자튀김집 FF-1204(현수막: XXXXL 감자튀김. 도장 = 방문 기록)에
**첫날 퇴근길에 들르고(튜토리얼 — 밝은 2구간), 그 뒤로는 매일 밤 귀갓길이 게임**이다.
목적은 하나 — **괴담의 존재들을 피해서 집에 도착하는 것.**

현재 동사는 걷기 하나다. 걸으면 남은 거리가 줄고, 멈춰 있으면 골목이 자란다.
이상현상은 판정 대상이 아니라 플레이어를 멈춰 세우는 풍경이다. 깊이 = 꺼져가는 가로등.

**M3 전환 완료** (v0.11.50 클릭 제거 · v0.11.51 머무름→자람 · v0.11.56 응시 제거).
현재 빌드에는 판정이 하나도 없다. [docs/game.md](docs/game.md)와 [docs/spec.md](docs/spec.md)가
어긋나면 spec 쪽이 현재다.

- 라이브: https://ff-1204.github.io/fries-get-cold/ (GitHub Pages, `gh-pages` 브랜치 서빙)
- 원격: https://github.com/ff-1204/fries-get-cold.git
- 자매 프로젝트: `C:\Users\moon\Project\dori`

## 문서 맵

| 주제 | 문서 |
|---|---|
| 기획 방향·로드맵 | [docs/game.md](docs/game.md) |
| 현재 빌드 명세 | [docs/spec.md](docs/spec.md) |
| 밤(=스테이지)별 콘텐츠·방향 | [docs/stages.md](docs/stages.md) |
| 이상현상 | [docs/anomalies.md](docs/anomalies.md) |
| 구조·구현 노트·검증·배포 | [docs/development.md](docs/development.md) |
| 작업 절차·배운 것 | [docs/workflow.md](docs/workflow.md) |
| 서드파티 라이선스 | [docs/licenses.md](docs/licenses.md) |
| 릴리즈 단위 | CHANGELOG.md (vX.Y.Z 절) — 이력의 원본 |

전체 목록과 이론 문서(story, fear-cognition, affective-design 등)는 README 참조.

## 구조 메모

- 콘텐츠는 데이터로 (이상현상 `src/data/anomalies.json` · 밤=스테이지 `src/data/stages.json`),
  로직은 시스템으로 나뉘어 있다
- 에셋 파일이 없다 — 프리미티브 + 캔버스 텍스처 + 프로시저럴 사운드로 만들어져 있다

## 환경 (이 PC 특이사항 — 상세는 docs/development.md '빌드 환경 주의')

- **Node가 PATH에 없다**: `export PATH="/c/Program Files/nodejs:$PATH"` (bash) 후 npm 사용
- package.json의 rollup WASM `overrides`는 Application Control 정책 우회용이다
- **GitHub Actions 미사용.** 배포는 pre-push 훅이 자동 실행 —
  `git push` = 빌드 + gh-pages 발행. 게임 무관 커밋은 `SKIP_DEPLOY=1 git push`
- `gh-pages` 브랜치는 훅이 관리한다

## 검증 도구

- `?a=<effect>` — 이상 강제 (`?a=none` = 항상 정상, 튜토리얼 생략) · `?t=1` — 퇴근길 튜토리얼 강제
  · `window.__fries.state()` — 상태 훅 · `__fries.occlusion()` — 가림 검사
- **관리자 모드 `Ctrl + Space Space`** (`src/admin.ts`) — 비행 · Esc 스테이지 이동 패널 ·
  **조준 대상 표시**(이름·크기·색·`-L*0.296` 배수 좌표 → 그대로 grep 가능)
- `npm run verify:sim` · `verify:balance` · `verify:visible` ·
  `verify:shots`(**`-- dusk grow-last`로 골라 찍는다**, 전체는 20분) ·
  `verify:play`(첫 방문부터 밤 2까지 자동 주파)
- 가림 검사는 '밝기'를 재지 않는다 — 통과해도 광원 밖이면 화면에 안 보인다
- 화면 관련 임시 촬영 패턴은 **/verify-ui 스킬**, 커밋·배포 체크리스트는 **/ship 스킬**

## 라이선스 상태

All Rights Reserved — 의도적 비오픈소스 (docs/commercial.md).
서드파티 라이선스 대장은 docs/licenses.md, 표현 수위의 법적 하한은 docs/commercial.md에 있다.
