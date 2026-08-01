// 깊이·판정의 순수 로직 — main.ts(실게임)와 balance.test.ts(시뮬레이션)가 공유한다.
// 여기 수식이 게임의 단일 진실이다: 테스트가 별도 사본을 들고 어긋나는 것을 막는다.
// (JSON·three·DOM 의존 금지 — Node에서 직접 import된다)

import { CONFIG, SIDE_GAP } from './config.ts';

export type Taste = 'crispy' | 'lukewarm' | 'soggy';

/** 시식 서사 등급 — 온도 시스템은 퇴역, 감자튀김은 접힘 횟수를 비추는 내러티브로만.
 *  접힘 0 = 아직 따뜻하다(바삭) / 1~2 = 조금 식었다 / 3+ = 다 식었다 */
export function tasteFromFolds(folds: number): Taste {
  return folds <= 0 ? 'crispy' : folds <= 2 ? 'lukewarm' : 'soggy';
}

/** 샛길 우회 1회의 깊이 비용 — 정당 우회(이상 있음)는 무비용, 과잉 경계만 지불 */
export function sideDepthCost(anomalyPresent: boolean): number {
  return anomalyPresent ? 0 : CONFIG.wasteDepthCost;
}

// ---------- 밤 시뮬레이션 (테스트 전용 — 게임은 실이동으로 같은 값에 도달한다) ----------
// 거리 모델은 main.ts 판정 트리거 좌표에서 파생 (손계산 금지):
//   본길: z=0 스폰 → 트리거 z < -(segLength+0.5)
//   샛길: 개구부 중앙까지 전진 → x=0 → 트리거 x < -(halfWidth+5) 좌측 이탈

const MAIN_DIST = CONFIG.segLength + 0.5;
const DETOUR_DIST =
  -((SIDE_GAP.zNear + SIDE_GAP.zFar) / 2) + (CONFIG.corridorHalfWidth + 5);

export interface NightPlan {
  /** 접힘(오답 본길) 횟수 — 각각 구간 반복 1회 = 총 걸음 +1 */
  folds?: number;
  /** 과잉 경계(정상인데 샛길) 횟수 */
  wastes?: number;
  /** 정당 우회(이상 있고 샛길) 횟수 — 깊이 무비용, 거리만 샛길 */
  detours?: number;
  run?: boolean;
}

/** 밤 하나를 수식으로 주파한 결과. softFail이면 도착 전에 골목 입구로 리셋된다 */
export function simulateNight(plan: NightPlan = {}): {
  depth: number; softFail: boolean; total: number; taste: Taste; seconds: number;
} {
  const { folds = 0, wastes = 0, detours = 0, run = false } = plan;
  const depth = folds * CONFIG.foldDepthCost + wastes * CONFIG.wasteDepthCost;
  const total = CONFIG.segments + folds; // 접힘마다 남은 거리 +1
  const sideWalks = wastes + detours;
  const mainWalks = total - sideWalks;
  const seconds =
    (mainWalks * MAIN_DIST) / (run ? CONFIG.runSpeed : CONFIG.walkSpeed) +
    (sideWalks * DETOUR_DIST) / CONFIG.walkSpeed;
  return {
    depth,
    softFail: depth >= CONFIG.depthLimit,
    total,
    taste: tasteFromFolds(folds),
    seconds,
  };
}
