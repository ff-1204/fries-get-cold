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
  foldDepthCost: 2,        // 확인 없이 지나침(접힘) — 구간 반복 + 남은 거리 +1과 함께
  wasteDepthCost: 1,       // 빈 지적(아무것도 아닌 것을 짚음) — 정확한 확인은 비용 0
  spotCooldownSec: 0.6,    // 지적 연타 방지 (스팸으로 우연히 맞추기 차단)
  checkDistance: 4.5,      // 확인 성립 거리(m) — 멀리서는 안 된다. 무서운 쪽으로 다가가야 한다
  swarmMax: 2,             // 증식 상한 — 동시 이상 = 1 + swarm ≤ 3 (지나칠 때마다 +1)
  // 밸런스 함의: 접힘 3회 = 리셋 / 빈 지적만 6회 = 리셋 ("전부 의심하면 밤이 끝나지 않는다")
};

// ---------- 레이아웃 파생 상수 (world.ts 지오메트리 + main.ts 판정이 공유) ----------

/** 구간 끝 개구부 (끝 벽 중앙) 절반 폭 — 유일한 출구, 갈림길 없음 (2026-08-02 지적 문법 전환) */
export const MAIN_GAP_HALF = 1.4;
