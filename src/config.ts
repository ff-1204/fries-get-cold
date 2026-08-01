// 수치 상수 — 게임(main·world)과 검증(balance.test.ts·__fries.config())이 같은 값을 읽는다.
// 이 파일은 JSON·three 의존이 없다: Node가 직접 import하는 순수 시뮬레이션 테스트의 전제.
// (콘텐츠·텍스트는 data.ts 파사드 — 여기는 수치·레이아웃만)

export const CONFIG = {
  segments: 5,             // 기본 밤 길이 — 접힘이 없을 때의 총 구간 수
  segLength: 36,           // 구간 길이 (m)
  corridorHalfWidth: 3,    // 골목 절반 폭
  walkSpeed: 4.2,          // m/s
  runSpeed: 7.0,
  baseAnomalyChance: 0.4,  // 구간당 이상 발생 기본 확률 (docs/anomalies.md)
  chancePerMinute: 0.06,   // 새벽이 깊을수록 상승

  // ---------- 깊이 — 유일한 자원 (game.md 판정, game-design-theory §5·§9) ----------
  // 숫자 게이지 없음: 가로등 밝기가 다이제틱 표시 (world.ts applyDepth 사다리)
  depthLimit: 6,           // 도달 = soft fail: 암전 → 골목 입구 리셋 (죽음 아님)
  foldDepthCost: 2,        // 오답 본길(접힘) — 구간 반복 + 남은 거리 +1과 함께
  wasteDepthCost: 1,       // 과잉 경계(정상인데 샛길) — 정당 우회(이상 있음)는 비용 0
  // 밸런스 함의: 접힘 3회 = 리셋 / 과잉 경계만 6회 = 리셋 ("전부 겁먹으면 밤이 끝나지 않는다")
};

// ---------- 레이아웃 파생 상수 (world.ts 지오메트리 + main.ts 판정이 공유) ----------

/** 샛길 개구부 (왼쪽 벽, 구간 끝 부근) */
export const SIDE_GAP = {
  zNear: -(CONFIG.segLength - 9),
  zFar: -(CONFIG.segLength - 4),
};

/** 본길 개구부 (끝 벽 중앙) 절반 폭 */
export const MAIN_GAP_HALF = 1.4;
