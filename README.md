# 튀김이 식기 전에 (Before the Fries Get Cold)

> 새벽 한 시, 감자튀김이 먹고 싶어진 자취생이
> 매일 밤 규칙이 바뀌는 골목길을 지나 24시 버거집에 다녀오는 심리 호러.
>
> **"골목이 아무리 이상해도, 감자튀김은 먹어야 하니까."**

- 장르: 심리 호러 / 이상현상 관찰
- 플랫폼: 브라우저 (Three.js + TypeScript + Vite), 싱글플레이
- 배포: GitHub Pages — `https://<username>.github.io/fries-get-cold/`

## 핵심 차별점

1. **왕복 구조** — 가는 길은 이상현상 관찰(신중), 오는 길은 기억과 배짱(속도)
2. **식어가는 감자튀김 타이머** — 추격자 대신 온도 게이지가 긴장을 만든다
3. **하찮음의 유머** — 목숨을 위협하는 건 괴담, 목숨을 걸게 하는 건 감자튀김

## 실행

- **바로 플레이 (설치 불요)**: `play-local.html` 더블클릭 — 게임 전체가 든 단일 파일 빌드
- **개발 모드** (Node.js 18+): `npm install` 후 `npm run dev`
- **배포 빌드**: `npm run build` (GitHub Pages용) / `npm run build:local` (단일 파일 재생성)
- 조작 — PC: 클릭 후 WASD 이동, 마우스 시점, Shift 달리기 / 모바일: 좌측 드래그 이동, 우측 드래그 시점

## 문서

**기획** — 무엇을 만드는가

| 문서 | 내용 |
|---|---|
| [docs/game.md](./docs/game.md) | 기획 총괄 — 컨셉·시스템·다섯 밤 구조·로드맵·결정 기록 (허브 문서) |
| [docs/story.md](./docs/story.md) | 스토리텔링 — 프롤로그, 다섯 밤 서사, 엔딩 3종, 톤 가이드 |
| [docs/anomalies.md](./docs/anomalies.md) | 이상현상 설계 — 원칙, 분류, 목록, 데이터 스키마, 구현 현황 |

**설계 원칙** — 왜 그렇게 만드는가

| 문서 | 내용 |
|---|---|
| [docs/design-principles.md](./docs/design-principles.md) | 최상위 원칙 — 어포던스·정직한 판정, 15세 표현 수위, 깜놀·템포·오리지널리티 |
| [docs/game-design-theory.md](./docs/game-design-theory.md) | 게임 디자인 이론 — MDA, 의미 있는 선택, Flow, 정보 에이전시, 자원 경제 |
| [docs/fear-cognition.md](./docs/fear-cognition.md) | 공포의 인지과학 — 예측 오류, 위협 탐지, 스위트 스팟, 습관화, 안전 신호 |
| [docs/affective-design.md](./docs/affective-design.md) | 감성 설계 — 순간별 감정 좌표, 긴장-이완 곡선, Peak-End, 사운드 심리 |
| [docs/visual-polish.md](./docs/visual-polish.md) | 시각 마감 — 팔레트, 조명·안개, 모션 표, 싼티 점검 체크리스트 |

**개발** — 어떻게 만드는가

| 문서 | 내용 |
|---|---|
| [docs/development.md](./docs/development.md) | 개발 가이드 — 스택, 실제 구조, 명령, 배포, 성능 예산 |
| [docs/responsive-design.md](./docs/responsive-design.md) | PC·모바일 대응 — 입력 분기, 뷰포트, 성능 티어, 테스트 매트릭스 |
| [docs/workflow.md](./docs/workflow.md) | 워크플로 — 작업 절차, 콘텐츠 추가, 플레이테스트, 릴리즈 |

**전략·기록**

| 문서 | 내용 |
|---|---|
| [docs/commercial.md](./docs/commercial.md) | 상업화 — 라이선스 정책, 지식재산 준수, 가격·플랫폼 로드맵 |
| [docs/trend-research.md](./docs/trend-research.md) | 조사 기록 — 장르·시장·기술 분석 (출처 포함) |
| [docs/licenses.md](./docs/licenses.md) | 서드파티 라이선스 대장 |

## 라이선스

**Copyright (c) 2026 Moon. All rights reserved.**

이 저장소는 열람용으로 공개되어 있을 수 있으나, 오픈소스가 아닙니다.
코드·문서·에셋의 복제, 재배포, 상업적 이용을 허가하지 않습니다.
(추후 상업화 계획이 있어 의도적으로 오픈소스 라이선스를 부여하지 않음 — [docs/commercial.md](./docs/commercial.md) 참고)
