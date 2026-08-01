// 수치 상수 — 게임(main·world)과 검증(balance.test.ts·__fries.config())이 같은 값을 읽는다.
// 이 파일은 JSON·three 의존이 없다: Node가 직접 import하는 순수 시뮬레이션 테스트의 전제.
// (콘텐츠·텍스트는 data.ts 파사드 — 여기는 수치·레이아웃만)

export const CONFIG = {
  segments: 5,             // 편도 구간 수
  segLength: 36,           // 구간 길이 (m)
  corridorHalfWidth: 3,    // 골목 절반 폭
  walkSpeed: 4.2,          // m/s
  runSpeed: 7.0,
  baseAnomalyChance: 0.4,  // 구간당 이상 발생 기본 확률 (docs/anomalies.md)
  chancePerMinute: 0.06,   // 새벽이 깊을수록 상승
  tempMax: 100,
  // 귀갓길 자연 하락 — 목표: 전 구간 보통 걸음 = 미지근 도착 (design-principles §4).
  // 헤드리스 실측(2026-08-02): 걷기 61%(미지근) · 질주 77%(바삭) · 걷기+과잉우회 2회 24%(눅눅)
  tempDecayPerSec: 0.9,
  // 샛길 우회 1회당 온도 비용 — 정당 우회(이상 있음)는 ×0.5, 과잉 경계(정상)는 ×1.5.
  // 샛길이 거리상 본길과 비슷해 시간 비용이 미미하므로 이 값이 과잉 경계 억제의 전부다
  sidePathTempCost: 12,
  sidePathTimeCost: 12,    // (가는 길) 샛길 1회당 경과 시간 가산 초 → 위험 증가
  crispyThreshold: 62,     // 이상: 바삭
  lukewarmThreshold: 30,   // 이상: 미지근 / 미만: 눅눅
};

// ---------- 레이아웃 파생 상수 (world.ts 지오메트리 + main.ts 판정이 공유) ----------

/** 샛길 개구부 (왼쪽 벽, 구간 끝 부근) */
export const SIDE_GAP = {
  zNear: -(CONFIG.segLength - 9),
  zFar: -(CONFIG.segLength - 4),
};

/** 본길 개구부 (끝 벽 중앙) 절반 폭 */
export const MAIN_GAP_HALF = 1.4;
