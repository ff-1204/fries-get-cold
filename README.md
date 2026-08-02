# 튀김이 식기 전에 (Before the Fries Get Cold)

> 새벽 한 시, 감자튀김이 먹고 싶어진 자취생.
> 매일 걷던 15분 골목이, 오늘은 끝나지 않는다.
>
> **"골목이 아무리 이상해도, 감자튀김은 먹어야 하니까."**

- 장르: 심리 호러 / 이상현상 관찰
- 플랫폼: 브라우저 (Three.js + TypeScript + Vite), 싱글플레이
- **플레이**: https://ff-1204.github.io/fries-get-cold/ (GitHub Pages)

## 핵심 차별점

1. **접히는 골목** — 이상현상을 확인하지 않고 지나치면 죽음이 아니라 연장: 같은 구간이
   미묘히 달라진 채 반복되고, 남은 거리가 늘어나고, **이상은 하나 더 늘어난다(증식)**
2. **대면 확인** — 이상한 것은 무섭지만 **다가가서** 직접 짚어야 한다(관찰이 곧 조작).
   지나치거나 헛짚을수록 가로등이 죽고 골목은 더 어둡고 붐비게 어긋난다
3. **하찮음의 유머** — 골목이 아무리 이상해도 목적은 감자튀김. 아늑함과 섬뜩함의 낙차

## 실행

- **웹에서 바로 플레이**: https://ff-1204.github.io/fries-get-cold/
- **오프라인 플레이 (설치 불요)**: `play-local.html` 더블클릭 — 게임 전체가 든 단일 파일 빌드
- **개발 모드** (Node.js 18+): `npm install` 후 `npm run dev`
- **배포**: `npm run deploy` (빌드 → `gh-pages` 브랜치) / `npm run build:local` (단일 파일 재생성)
- 조작 — PC: 클릭 후 WASD 이동, 마우스 시점, Shift 달리기 / 모바일: "걷는다" 버튼을
  누르는 동안 전진(위로 밀면 달리기), 화면 드래그로 시점, 탭으로 확인

## 문서

**기획** — 무엇을 만드는가

| 문서 | 내용 |
|---|---|
| [docs/spec.md](./docs/spec.md) | 현재 빌드 명세 — 규칙·승리 조건·구현 콘텐츠 현황 (실빌드 기준) |
| [docs/game.md](./docs/game.md) | 기획 총괄 — 컨셉·시스템·다섯 밤 구조·로드맵·결정 기록 (허브 문서) |
| [docs/story.md](./docs/story.md) | 스토리텔링 — 프롤로그, 다섯 밤 서사, 엔딩 3종, 톤 가이드 |
| [docs/anomalies.md](./docs/anomalies.md) | 이상현상 설계 — 원칙, 분류, 목록, 데이터 스키마, 구현 현황 |

**설계 원칙** — 왜 그렇게 만드는가

| 문서 | 내용 |
|---|---|
| [docs/design-principles.md](./docs/design-principles.md) | 최상위 원칙 — 어포던스·정직한 판정, 표현 수위(법적 준수 기준), 깜놀·템포·오리지널리티 |
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
| [docs/privacy.md](./docs/privacy.md) | 개인정보처리방침 — 수집 없음, 기기 내 저장(localStorage) 안내 |
| [docs/licenses.md](./docs/licenses.md) | 서드파티 라이선스 대장 |

## 라이선스

**Copyright (c) 2026 Moon. All rights reserved.**

이 저장소는 열람용으로 공개되어 있을 수 있으나, 오픈소스가 아닙니다.
코드·문서·에셋의 복제, 재배포, 상업적 이용을 허가하지 않습니다.
(추후 상업화 계획이 있어 의도적으로 오픈소스 라이선스를 부여하지 않음 — [docs/commercial.md](./docs/commercial.md) 참고)
