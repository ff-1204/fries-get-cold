// 밸런스 순수 시뮬레이션 테스트 — 브라우저 없이 밀리초에 3목표를 검증한다.
// 실행: npm run verify:sim  (Node 내장 node:test + 네이티브 TS — 의존성 0)
// 역할 분담: 여기는 커밋 전 1차 검증, verify:balance(실브라우저 E2E)는 릴리즈 전 최종 확인.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CONFIG } from './config.ts';
import { gradeTaste, sideTempCost, simulateReturn } from './balance.ts';

// 목표 3종 (design-principles §4) — verify:balance와 같은 케이스
test('걷기 = 미지근 도착', () => {
  assert.equal(simulateReturn({}).taste, 'lukewarm');
});

test('질주 = 바삭 도착', () => {
  assert.equal(simulateReturn({ run: true }).taste, 'crispy');
});

test('걷기 + 과잉 경계 우회 2회 = 눅눅', () => {
  assert.equal(simulateReturn({ detours: 2 }).taste, 'soggy');
});

// 공정성: 정당한 우회(이상이 실제로 있었다)는 2회여도 눅눅까지 벌하지 않는다
test('정당 우회 2회는 미지근 유지', () => {
  assert.equal(simulateReturn({ detours: 2, anomalyOnDetour: true }).taste, 'lukewarm');
});

// 실브라우저 실측(2026-08-02, verify:balance)과의 정합 — 시뮬레이션이 현실을 대변하는지.
// 허용 오차 ±3%p: 프레임 양자화·오버레이 전환의 잔차. 이보다 벌어지면 모델이 틀린 것.
test('실측 정합: 걷기 61% · 질주 77% · 과잉우회2 24%', () => {
  const measured: Array<[Parameters<typeof simulateReturn>[0], number]> = [
    [{}, 61],
    [{ run: true }, 77],
    [{ detours: 2 }, 24],
  ];
  for (const [plan, pct] of measured) {
    const sim = simulateReturn(plan).temp;
    assert.ok(Math.abs(sim - pct) <= 3, `sim ${sim.toFixed(1)}% vs 실측 ${pct}%`);
  }
});

// 등급 경계 — 문서 수치(crispy 62 / lukewarm 30)가 코드와 어긋나면 여기서 잡힌다
test('시식 등급 경계값', () => {
  assert.equal(gradeTaste(CONFIG.crispyThreshold), 'crispy');
  assert.equal(gradeTaste(CONFIG.crispyThreshold - 0.1), 'lukewarm');
  assert.equal(gradeTaste(CONFIG.lukewarmThreshold), 'lukewarm');
  assert.equal(gradeTaste(CONFIG.lukewarmThreshold - 0.1), 'soggy');
});

test('샛길 비용 비대칭 — 정당 ×0.5 / 과잉 ×1.5', () => {
  assert.equal(sideTempCost(true), CONFIG.sidePathTempCost * 0.5);
  assert.equal(sideTempCost(false), CONFIG.sidePathTempCost * 1.5);
});
