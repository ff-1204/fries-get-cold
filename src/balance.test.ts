// 밸런스 순수 시뮬레이션 테스트 — 브라우저 없이 밀리초에 깊이 모델을 검증한다.
// 실행: npm run verify:sim  (Node 내장 node:test + 네이티브 TS — 의존성 0)
// 역할 분담: 여기는 커밋 전 1차 검증, verify:balance(실브라우저 E2E)는 릴리즈 전 최종 확인.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CONFIG } from './config.ts';
import { tasteFromStretches, simulateNight, swarmAfterStretches, activeCount } from './balance.ts';

// 증식 (game.md): 늘어날수록 동시 이상이 늘어난다 — 상한 1+swarmMax
test('증식 — 늘어남 0회=1개, 1회=2개, 2회 이상=3개 상한', () => {
  assert.equal(activeCount(swarmAfterStretches(0)), 1);
  assert.equal(activeCount(swarmAfterStretches(1)), 2);
  assert.equal(activeCount(swarmAfterStretches(2)), 1 + CONFIG.swarmMax);
  assert.equal(activeCount(swarmAfterStretches(5)), 1 + CONFIG.swarmMax);
});

test('무결점 밤 — 깊이 0, 아직 따뜻하다(바삭)', () => {
  const r = simulateNight({});
  assert.equal(r.depth, 0);
  assert.equal(r.softFail, false);
  assert.equal(r.taste, 'crispy');
  assert.equal(r.total, CONFIG.segments);
});

// ⭐ 이상현상을 지나치는 것에는 대가가 없다 (v0.11.50 — 클릭 판정 제거).
// 깊이를 쌓는 항이 늘어남 하나뿐임을 모델에 박아 둔다: 항이 다시 늘면 이 테스트가 깨진다
test('깊이를 쌓는 것은 늘어남뿐 — 지나침에는 대가가 없다', () => {
  assert.equal(simulateNight({}).depth, 0);
  assert.equal(simulateNight({ stretches: 1 }).depth, CONFIG.stretchDepthCost);
});

test('늘어남 1회 = 남은 거리 +1, 미지근', () => {
  const r = simulateNight({ stretches: 1 });
  assert.equal(r.total, CONFIG.segments + 1);
  assert.equal(r.taste, 'lukewarm');
  assert.equal(r.softFail, false);
});

test('늘어남 2회 = 깊이 4 — 아직 걸을 수 있다', () => {
  const r = simulateNight({ stretches: 2 });
  assert.equal(r.depth, 4);
  assert.equal(r.softFail, false);
});

test('늘어남 3회 = 깊이 한계 — 골목 입구 리셋', () => {
  const r = simulateNight({ stretches: 3 });
  assert.equal(r.depth, CONFIG.depthLimit);
  assert.equal(r.softFail, true);
});

// 서사 등급 경계 — 문서 문구(늘어남 0=따뜻/1~2=식음/3+=다 식음)와 코드 정합
test('시식 서사 등급 경계값', () => {
  assert.equal(tasteFromStretches(0), 'crispy');
  assert.equal(tasteFromStretches(1), 'lukewarm');
  assert.equal(tasteFromStretches(2), 'lukewarm');
  assert.equal(tasteFromStretches(3), 'soggy');
});

// 템포: 늘어남 없는 완주 편도 7~8분 이내
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
