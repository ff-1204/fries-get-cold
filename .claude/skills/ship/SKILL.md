---
name: ship
description: 이 프로젝트(튀김이 식기 전에)의 작업 마무리 절차 — 빌드·헤드리스 검증·문서 갱신·커밋·푸시(=배포)를 순서대로 빠짐없이 실행한다. 기능 작업을 마치고 커밋/릴리즈할 때 호출.
---

# ship — 작업 마무리 절차

workflow.md의 「설계 판정 → 구현 → 검증 → 문서화 → 커밋」 파이프라인의 뒷부분을 실행한다.
설계 판정·구현은 이미 끝났다는 전제. 원칙 문서와 충돌하는 내용을 발견하면 멈추고 보고.

## 환경 (이 PC 특이사항 — docs/development.md '빌드 환경 주의')

- Node가 PATH에 없다: bash는 `export PATH="/c/Program Files/nodejs:$PATH"`,
  PowerShell은 `$env:Path = "C:\Program Files\nodejs;$env:Path"` 를 먼저.
- package.json의 rollup WASM `overrides`는 절대 지우지 않는다 (Application Control 정책).
- GitHub Actions 금지 (결정 기록). `gh-pages` 브랜치는 훅이 관리 — 직접 건드리지 않는다.

## 절차

### 0. 검산 (커밋될 코드를 눈으로 다시)

- **`grep -rn "\[임시\]" src/` = 0건** — 검증용 임시 값(디버그 기본값·강제 플래그)이 남지
  않았는지. 임시 값을 넣을 때는 주석에 `[임시]` 마커를 반드시 붙인다 (dori 사례에서 수용)
- 밸런스·수치를 문서에 적었다면: 가정이 아니라 실측(verify:balance) 근거인지

### 1. 빌드

```bash
npm run build        # tsc 타입 검사 포함 — 실패하면 여기서 멈추고 고친다
npm run build:local  # 단일 파일 빌드 + play-local.html 자동 복사
```

### 2. 검증 (시각·밸런스·콘텐츠가 바뀐 경우)

```bash
npm run dev -- --port 5199 --strictPort   # 백그라운드
npm run verify:shots     # 이상현상 정상/이상 비교 + 구간 테마 스크린샷 → verify-shots/
npm run verify:balance   # 온도 목표 3종 (걷기=미지근/질주=바삭/과잉우회2=눅눅) + 시식→밤2 진입
```

- 스크린샷은 직접 눈으로 확인한다 — 명확성 자가 테스트: "정상/이상 두 장을 나란히 보면
  3초 안에 찾는가?" + 배치 3원칙 (anomalies.md)
- **새 이상현상을 추가했다면** scripts/verify.mjs의 cases 배열에 케이스를 추가한 뒤 촬영
- 함정: 소스 수정 직후 실행은 vite reload로 "frame got detached" 가능 — 재실행하면 된다
- 끝나면 dev 서버 종료. TaskStop 후에도 node 자식이 5199를 물고 살아남을 수 있다 —
  `Get-NetTCPConnection -LocalPort 5199`로 확인 후 Stop-Process

### 3. 문서화 (코드와 같은 커밋에 — workflow.md 참조)

- **이번 작업에서 실수를 겪었다면**: workflow.md '배운 것 (실수 → 규칙)' 표에 규칙으로 승격.
  절차 규칙이면 이 스킬에도 반영하고, **자매 프로젝트(dori) 반영도 검토**한다

| 바뀐 것 | 갱신할 문서 |
|---|---|
| 릴리즈 단위 작업 | CHANGELOG.md (버전 절 추가 — vX.Y.Z, 날짜, 요약 제목) |
| 이상현상 추가/수정 | docs/anomalies.md (현황판 ✅, 스키마) |
| 시스템·방향 결정 | docs/game.md (로드맵, '결정 기록') |
| 구조·환경·도구 | docs/development.md (세션 로그 절) |
| 서드파티 추가 | docs/licenses.md (**즉시**, GPL 금지) |

### 4. 커밋

- Conventional Commits + 한국어 제목: `feat|fix|docs|refactor|chore|polish: 제목 (vX.Y.Z)`
- 버전은 CHANGELOG와 커밋 제목에만 (package.json version은 관리하지 않는 관례)
- **Co-Authored-By 트레일러 금지**

### 5. 푸시 = 배포

- 먼저 훅 활성 확인: `git config core.hooksPath` → `.githooks`가 아니면
  `git config core.hooksPath .githooks` (새 클론은 미설정 — 모르고 푸시하면 **배포가 조용히 누락**된다)
- `git push` — pre-push 훅이 `npm run deploy`(빌드 → gh-pages 발행)까지 자동 실행
- 게임에 영향 없는 커밋(문서·도구만)은 `SKIP_DEPLOY=1 git push`
- 배포했다면 라이브 확인: 번들 해시 대조
  ```bash
  curl -s "https://ff-1204.github.io/fries-get-cold/?n=$RANDOM" | grep -o 'assets/index-[^"]*\.js'
  # → dist/assets/의 파일명과 일치하면 반영 완료 (Pages 캐시로 1~2분 걸릴 수 있음)
  ```

### 6. 사람에게 남기기

자동화로 대체 불가한 항목은 마지막 보고에 명시한다:
- 직접 처음부터 플레이 (무설명 학습 검증 — workflow.md 플레이테스트 규칙)
- 모바일 실기기 확인 (responsive-design.md §7)
