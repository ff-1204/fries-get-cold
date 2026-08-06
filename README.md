# 튀김이 식기 전에 (Before the Fries Get Cold)

> 동네에 감자튀김집이 새로 생겼다. 이름은 FF-1204.
> 개업 현수막 — XXXXL 감자튀김.
> 퇴근길에 현수막을 보고 들렀다. 문제는, 나와 보니 밤이라는 것.
> 그리고 돌아가는 길에, 있어서는 안 되는 것들이 서 있다.
>
> **"갈 때의 그 길이, 돌아올 때는 아니다."**

- 장르: 심리 호러 / 이상현상 관찰
- 플랫폼: 브라우저 (Three.js + TypeScript + Vite), 싱글플레이
- **플레이**: https://ff-1204.github.io/fries-get-cold/

## 핵심 차별점

1. ⭐ **동사는 걷기 하나다** — 짚지 않고, 조사하지 않고, 싸우지 않는다.
   이상현상은 처리할 과제가 아니라 **지나가는 풍경**이다. 없앨 수 없으므로 계속 거기 있고,
   무서운 것을 보면 사람은 멈춘다 — 게임이 벌하는 것이 아니라 **반응이 벌한다**
2. **늘어나는 골목** — 틀려도 죽지 않는다. 대신 같은 구간이 미묘히 달라진 채 반복되고,
   남은 거리가 늘어나고, **어긋남은 하나 더 늘어난다(증식)**. 밤이 끝나지 않는 공포
3. **퇴근길 튜토리얼 + 귀갓길 구조** — 밝은 두 구간에서 길과 조작을 익히고,
   그 뒤로는 매일 밤 **돌아가는 길**이 게임이다. 목적은 하나, 집에 도착하는 것

> 전환 중 — 사람 형태를 오래 쳐다보면 붙잡히는 규칙 하나가 아직 라이브에 남아 있다
> ([docs/spec.md](./docs/spec.md) §2). M3에서 걷어낸다.

## 실행

- **웹에서 바로 플레이**: https://ff-1204.github.io/fries-get-cold/
- **오프라인 (설치 불요)**: `play-local.html` 더블클릭 — 게임 전체가 든 단일 파일 빌드
- **개발 모드** (Node.js 18+): `npm install` 후 `npm run dev`.
  검증은 `verify:sim`(모델) · `verify:balance`(판정 실측) · `verify:shots`(스크린샷) ·
  `verify:play`(첫 방문부터 밤 2까지 자동 주파).
  디버그는 `?a=<effect>` · `?t=1` · **관리자 모드 `Ctrl + Space Space`**(비행·스테이지 이동·조준 표시)
- **배포**: `git push` (pre-push 훅이 빌드 → `gh-pages` 발행) / `npm run build:local` (단일 파일 재생성)

조작 — PC: 클릭 후 WASD 이동, 마우스로 시점 /
모바일: "걷는다" 버튼을 누르는 동안 전진, 화면 드래그로 시점.
**버튼은 앞으로 가는 것 하나뿐이고, 나머지는 어디를 보느냐다.** 달리기 없음 — 속도는 하나다.

## 문서

**기획** — 무엇을 만드는가

| 문서 | 내용 |
|---|---|
| [docs/game.md](./docs/game.md) | 기획 총괄 — 컨셉·코어 루프·다섯 밤·엔딩·스코프·로드맵 (허브) |
| [docs/spec.md](./docs/spec.md) | **현재 빌드 명세** — 실빌드에 들어 있는 것만 (릴리즈마다 대조) |
| [docs/story.md](./docs/story.md) | 스토리텔링 — 3막 아치, 다섯 밤 서사, 엔딩 3종, 톤 가이드 |
| [docs/stages.md](./docs/stages.md) | 스테이지(=밤) — 공통/밤별 경계, 방향, 현황판, 데이터 스키마 |
| [docs/anomalies.md](./docs/anomalies.md) | 이상현상 — 설계 원칙, 배치 3원칙, 목록, 스키마, 추가 절차 |

**설계 원칙** — 왜 그렇게 만드는가

| 문서 | 내용 |
|---|---|
| [docs/design-principles.md](./docs/design-principles.md) | 최상위 원칙 — 어포던스·정직한 판정, 표현 수위, 깜놀·템포·오리지널리티 |
| [docs/game-design-theory.md](./docs/game-design-theory.md) | 게임 디자인 이론 — MDA, 의미 있는 선택, Flow, 정보 에이전시, 자원 경제 |
| [docs/fear-cognition.md](./docs/fear-cognition.md) | 공포의 인지과학 — 예측 오류, 위협 탐지, 스위트 스팟, 습관화, 안전 신호 |
| [docs/affective-design.md](./docs/affective-design.md) | 감성 설계 — 순간별 감정 좌표, 긴장-이완 곡선, Peak-End, 사운드 심리 |
| [docs/visual-polish.md](./docs/visual-polish.md) | 시각 마감 — 팔레트, 조명·안개, 모션, 싼티 점검 체크리스트 |

**개발** — 어떻게 만드는가

| 문서 | 내용 |
|---|---|
| [docs/development.md](./docs/development.md) | 스택, 구조, 구현 노트, 관리자 모드, 검증, 배포, 성능 예산 |
| [docs/workflow.md](./docs/workflow.md) | 작업 절차, 릴리즈, 협업 방식, **배운 것(실수 → 규칙)** |
| [docs/responsive-design.md](./docs/responsive-design.md) | PC·모바일 대응 — 입력 분기, 뷰포트, 성능 티어, 테스트 매트릭스 |

**전략·기록**

| 문서 | 내용 |
|---|---|
| [CHANGELOG.md](./CHANGELOG.md) | 버전별 이력 — **왜 지금 이 형태인지의 원본** |
| [docs/commercial.md](./docs/commercial.md) | 상업화 — 라이선스 정책, 지식재산 준수, 가격·플랫폼 로드맵 |
| [docs/privacy.md](./docs/privacy.md) | 개인정보처리방침 — 수집 없음, 기기 내 저장(localStorage) 안내 |
| [docs/licenses.md](./docs/licenses.md) | 서드파티 라이선스 대장 |

## 라이선스

**Copyright (c) 2026 Moon. All rights reserved.**

이 저장소는 열람용으로 공개되어 있을 수 있으나, 오픈소스가 아닙니다.
코드·문서·에셋의 복제, 재배포, 상업적 이용을 허가하지 않습니다.
(추후 상업화 계획이 있어 의도적으로 오픈소스 라이선스를 부여하지 않음 —
[docs/commercial.md](./docs/commercial.md) 참고)
