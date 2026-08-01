// 온도·시식 판정의 순수 로직 — main.ts(실게임)와 balance.test.ts(시뮬레이션)가 공유한다.
// 여기 수식이 게임의 단일 진실이다: 테스트가 별도 사본을 들고 어긋나는 것을 막는다.
// (JSON·three·DOM 의존 금지 — Node에서 직접 import된다)

import { CONFIG, SIDE_GAP } from './config.ts';

export type Taste = 'crispy' | 'lukewarm' | 'soggy';

/** 도착 온도 → 시식 등급 (design-principles §4) */
export function gradeTaste(temp: number): Taste {
  return temp >= CONFIG.crispyThreshold ? 'crispy'
    : temp >= CONFIG.lukewarmThreshold ? 'lukewarm'
    : 'soggy';
}

/** 귀갓길 샛길 우회 1회의 온도 비용 — 정당 우회(이상 있음) ×0.5, 과잉 경계(정상) ×1.5 */
export function sideTempCost(anomalyPresent: boolean): number {
  return CONFIG.sidePathTempCost * (anomalyPresent ? 0.5 : 1.5);
}

// ---------- 귀갓길 시뮬레이션 (테스트 전용 — 게임은 실이동으로 같은 값에 도달한다) ----------
// 거리 모델은 main.ts 판정 트리거 좌표에서 파생 (손계산 금지):
//   본길: z=0 스폰 → 트리거 z < -(segLength+0.5)
//   샛길: 개구부 중앙까지 전진 → x=0 → 트리거 x < -(halfWidth+5) 좌측 이탈
//         (scripts/verify.mjs passSide의 실주행 경로와 동일)

const MAIN_DIST = CONFIG.segLength + 0.5;
const DETOUR_DIST =
  -((SIDE_GAP.zNear + SIDE_GAP.zFar) / 2) + (CONFIG.corridorHalfWidth + 5);

export interface ReturnPlan {
  /** 본길 구간을 질주하는가 (샛길 구간은 항상 걷는다 — verify.mjs와 동일) */
  run?: boolean;
  /** 샛길 우회 횟수 (0~segments) */
  detours?: number;
  /** 우회한 구간에 이상이 있었는가 — false = 과잉 경계 */
  anomalyOnDetour?: boolean;
}

/** 귀갓길 전 구간을 수식으로 주파한 도착 상태 */
export function simulateReturn(plan: ReturnPlan = {}): {
  temp: number; taste: Taste; seconds: number;
} {
  const { run = false, detours = 0, anomalyOnDetour = false } = plan;
  const mainCount = CONFIG.segments - detours;
  const seconds =
    (mainCount * MAIN_DIST) / (run ? CONFIG.runSpeed : CONFIG.walkSpeed) +
    (detours * DETOUR_DIST) / CONFIG.walkSpeed;
  const temp = Math.max(
    0,
    CONFIG.tempMax -
      CONFIG.tempDecayPerSec * seconds -
      detours * sideTempCost(anomalyOnDetour),
  );
  return { temp, taste: gradeTaste(temp), seconds };
}
