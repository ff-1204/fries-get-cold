# 개발 워크플로

이 프로젝트의 작업 절차. 1인 개발 규모에 맞게 단순하게 유지한다.

## 기능 개발 파이프라인

```
설계 판정 → 구현 → 검증 → 문서화 → 커밋
```

1. **설계 판정**: 새 기능·이상현상·연출은 [design-principles.md](./design-principles.md)를
   먼저 통과시킨다. 충돌하면 구현 전에 버린다. 이론적 타당성은
   [game-design-theory.md](./game-design-theory.md)(시스템)·[fear-cognition.md](./fear-cognition.md)(공포 연출)의
   체크리스트로 검증한다.
2. **구현**: 콘텐츠는 `src/data/` JSON으로, 로직은 `src/systems/`로.
   이상현상 추가에 코드 수정이 필요해지면 멈추고 스키마부터 고친다.
3. **검증**: `npm run dev`로 해당 밤/구간을 직접 플레이. 시각 변경은 데스크톱+모바일
   뷰포트 둘 다 확인. 성능 예산([development.md](./development.md)) 초과 여부 확인.
   코드가 바뀌었으면 `npm run build:local`로 `play-local.html`도 재생성 (더블클릭 테스트 파일 동기화).
4. **문서화**: 코드와 **같은 커밋**에서 관련 문서 갱신 —
   시스템 변경 → game.md, 이상현상 추가 → anomalies.md, 구조 변경 → development.md,
   서드파티 추가 → licenses.md (즉시), 방향 결정 → game.md '결정 기록'.
5. **커밋**: Conventional Commits + 한국어 본문. 예: `feat: 온도 게이지 귀갓길 감쇠 구현`

## 콘텐츠(이상현상) 추가 절차

1. anomalies.md 목록에 행 추가 (ID, 분류, 정상→이상)
2. 명확성 자가 테스트: "스크린샷 두 장을 나란히 보여주면 3초 안에 찾는가?"
3. anomalies.json에 데이터 추가 → 플레이 확인 → 커밋

## 플레이테스트 규칙

- 밤 하나가 완성될 때마다 **직접 처음부터** 플레이 (개발자 시점 스킵 금지)
- 외부 테스터에게는 조작법만 알려주고 규칙은 알려주지 않는다
  (무설명 학습이 되는지가 이 장르의 핵심 품질)
- 기록할 것: 오판 지점, 리셋 후 이탈 여부, 이상현상별 발견 시간, 웃은 지점

## 릴리즈 절차

1. 버전 태그 (v0.x) + CHANGELOG 갱신
2. main 푸시 — **pre-push 훅이 `npm run deploy`(빌드 → gh-pages 브랜치)를 자동 실행** →
   라이브 URL 직접 플레이 (캐시 무시 새로고침)
   - 훅 설정(클론마다 1회): `git config core.hooksPath .githooks`
   - 배포 없이 푸시만: `SKIP_DEPLOY=1 git push`
3. 모바일 실기기 1회 확인

## 하지 않는 것

- 볼륨 확장을 위한 확장 금지 — 밤 5개, 1~2시간이 완성형 ([game.md](./game.md) 스코프 원칙)
- 밈·트렌드 좇는 콘텐츠 수정 금지 — 톤은 [story.md](./story.md) 톤 가이드가 기준
- 커밋 없는 날의 죄책감 금지 — 1인 개발은 페이스가 전부다
