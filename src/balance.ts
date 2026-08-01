// 깊이·판정의 순수 로직 — main.ts(실게임)와 balance.test.ts(시뮬레이션)가 공유한다.
// 여기 수식이 게임의 단일 진실이다: 테스트가 별도 사본을 들고 어긋나는 것을 막는다.
// (JSON·three·DOM 의존 금지 — Node에서 직접 import된다)

import { CONFIG } from './config.ts';

export type Taste = 'crispy' | 'lukewarm' | 'soggy';

/** 시식 서사 등급 — 온도 시스템은 퇴역, 감자튀김은 접힘 횟수를 비추는 내러티브로만.
 *  접힘 0 = 아직 따뜻하다(바삭) / 1~2 = 조금 식었다 / 3+ = 다 식었다 */
export function tasteFromFolds(folds: number): Taste {
  return folds <= 0 ? 'crispy' : folds <= 2 ? 'lukewarm' : 'soggy';
}

// ---------- 밤 시뮬레이션 (테스트 전용 — 게임은 실이동으로 같은 값에 도달한다) ----------
// 거리 모델은 main.ts 판정 트리거 좌표에서 파생 (손계산 금지):
//   구간 통과: z=0 스폰 → 트리거 z < -(segLength+0.5). 지적은 거리 비용이 없다 (걷다가 짚는다)

const SEG_DIST = CONFIG.segLength + 0.5;

export interface NightPlan {
  /** 접힘(이상을 못 보고 지나침) 횟수 — 각각 구간 반복 1회 = 총 걸음 +1 */
  folds?: number;
  /** 빈 지적(아무것도 아닌 것을 짚음) 횟수 — 깊이만 지불, 거리 비용 없음 */
  wastes?: number;
  run?: boolean;
}

/** 밤 하나를 수식으로 주파한 결과. softFail이면 도착 전에 골목 입구로 리셋된다 */
export function simulateNight(plan: NightPlan = {}): {
  depth: number; softFail: boolean; total: number; taste: Taste; seconds: number;
} {
  const { folds = 0, wastes = 0, run = false } = plan;
  const depth = folds * CONFIG.foldDepthCost + wastes * CONFIG.wasteDepthCost;
  const total = CONFIG.segments + folds; // 접힘마다 남은 거리 +1
  const seconds = (total * SEG_DIST) / (run ? CONFIG.runSpeed : CONFIG.walkSpeed);
  return {
    depth,
    softFail: depth >= CONFIG.depthLimit,
    total,
    taste: tasteFromFolds(folds),
    seconds,
  };
}
