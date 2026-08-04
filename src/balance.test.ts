// 밸런스 순수 시뮬레이션 테스트 — 브라우저 없이 밀리초에 깊이 모델을 검증한다.
// 실행: npm run verify:sim  (Node 내장 node:test + 네이티브 TS — 의존성 0)
// 역할 분담: 여기는 커밋 전 1차 검증, verify:balance(실브라우저 E2E)는 릴리즈 전 최종 확인.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CONFIG } from './config.ts';
import { tasteFromStretches, simulateNight, swarmAfterStretches, activeCount } from './balance.ts';

// 증식 (game.md 판정): 확인 없이 지나칠수록 동시 이상이 늘어난다 — 상한 1+swarmMax
test('증식 — 지나침 0회=1개, 1회=2개, 2회 이상=3개 상한', () => {
  assert.equal(activeCount(swarmAfterStretches(0)), 1);
  assert.equal(activeCount(swarmAfterStretches(1)), 2);
  assert.equal(activeCount(swarmAfterStretches(2)), 1 + CONFIG.swarmMax);
  assert.equal(activeCount(swarmAfterStretches(5)), 1 + CONFIG.swarmMax);
});

// 판정 비대칭 (game.md): 늘어남(놓침) 리스크 vs 빈 지적 비용
test('무결점 밤 — 깊이 0, 아직 따뜻하다(바삭)', () => {
  const r = simulateNight({});
  assert.equal(r.depth, 0);
  assert.equal(r.softFail, false);
  assert.equal(r.taste, 'crispy');
  assert.equal(r.total, CONFIG.segments);
});

test('정확한 지적은 무비용 — 깊이도 거리도 지불하지 않는다 (공정성)', () => {
  const spotless = simulateNight({});
  // 지적은 NightPlan에 항이 없다 = 모델상 비용 0. 빈 지적만 깊이를 지불한다
  assert.equal(spotless.depth, 0);
  assert.equal(simulateNight({ wastes: 1 }).depth, CONFIG.wasteDepthCost);
});

test('늘어남 1회 = 남은 거리 +1, 미지근', () => {
  const r = simulateNight({ stretches: 1 });
  assert.equal(r.total, CONFIG.segments + 1);
  assert.equal(r.taste, 'lukewarm');
  assert.equal(r.softFail, false);
});

test('늘어남 2회 + 빈 지적 1회 = 깊이 5 — 아직 걸을 수 있다', () => {
  const r = simulateNight({ stretches: 2, wastes: 1 });
  assert.equal(r.depth, 5);
  assert.equal(r.softFail, false);
});

test('늘어남 3회 = 깊이 한계 — 골목 입구 리셋', () => {
  const r = simulateNight({ stretches: 3 });
  assert.equal(r.depth, CONFIG.depthLimit);
  assert.equal(r.softFail, true);
});

test('빈 지적만 6회 = 리셋 — 전부 의심하면 밤이 끝나지 않는다', () => {
  const r = simulateNight({ wastes: 6 });
  assert.equal(r.softFail, true);
});

// 서사 등급 경계 — 문서 문구(늘어남 0=따뜻/1~2=식음/3+=다 식음)와 코드 정합
test('시식 서사 등급 경계값', () => {
  assert.equal(tasteFromStretches(0), 'crispy');
  assert.equal(tasteFromStretches(1), 'lukewarm');
  assert.equal(tasteFromStretches(2), 'lukewarm');
  assert.equal(tasteFromStretches(3), 'soggy');
});

// 템포 (design-principles §4): 늘어남 없는 완주 편도 7~8분 이내
test('무결점 완주 시간이 템포 예산 안에 있다', () => {
  const r = simulateNight({});
  assert.ok(r.seconds < 8 * 60, `완주 ${r.seconds.toFixed(0)}s ≥ 8분`);
  assert.ok(r.seconds > 30, '모델 이상 — 완주가 비현실적으로 짧다');
});

test('늘어남은 시간도 지불한다 — 반복 구간 1개분', () => {
  const clean = simulateNight({});
  const stretched = simulateNight({ stretches: 1 });
  const perSeg = (CONFIG.segLength + 0.5) / CONFIG.walkSpeed;
  assert.ok(Math.abs(stretched.seconds - clean.seconds - perSeg) < 0.01);
});
