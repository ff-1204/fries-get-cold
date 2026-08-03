// 이상현상 핸들러 레지스트리 — effect마다 reset(정상 복귀)과 apply(이상 적용)를 한 곳에.
// Record<AnomalyEffect, …>라서 data.ts에 effect를 추가하면 여기 항목이 없을 때
// 컴파일 에러 — 리셋 누락(이상 상태가 다음 구간으로 새는 것)이 타입으로 막힌다.
//
// **콘텐츠 추가는 데이터(anomalies.json)로, 새 '시각 효과'가 필요할 때만 이 파일**
// (design-principles: 이상현상 추가에 코드 수정이 필요하면 설계 실패)

import { type AnomalyEffect } from '../data';
import { type SegmentRefs } from './refs';
import { BALL_HOME, BALL_OUT, SIGN_REST_Y, SIGN_TURNED_Y, SPAWN_ANCHORS, LAMP_LADDER } from './layout';

interface EffectHandler {
  /** 정상 상태 — apply(와 updateWorld)가 만지는 모든 타깃을 되돌려야 한다 */
  reset(refs: SegmentRefs): void;
  /** 이상 상태. 시간성 연출(updateWorld가 매 프레임 처리)은 생략 */
  apply?(refs: SegmentRefs): void;
}

/** 보이거나(이상) 안 보이거나(정상) — 대부분의 흔적·형체가 이 모양이다 */
function toggle(pick: (r: SegmentRefs) => { visible: boolean }): EffectHandler {
  return {
    reset: (r) => { pick(r).visible = false; },
    apply: (r) => { pick(r).visible = true; },
  };
}

const EFFECTS: Record<AnomalyEffect, EffectHandler> = {
  // ---- 밤 3~4 해금 ----
  shoes: toggle((r) => r.shoes),
  bike_figure: toggle((r) => r.bikeFigure),
  slide_figure: toggle((r) => r.slideFigure),
  across_figure: toggle((r) => r.acrossFigure),
  // 닫힌 셔터를 **치우고** 열린 셔터를 세운다 — 겹치면 닫힌 쪽이 그대로 덮는다
  open_shutter: {
    reset: (r) => { r.openShutter.visible = false; r.closedShutter.visible = true; },
    apply: (r) => { r.openShutter.visible = true; r.closedShutter.visible = false; },
  },
  // 셔터 밑의 빛 — **바닥은 발광시키지 않는다.** 발광을 걸면 균일하게 빛나는 납작한
  // 슬래브가 되어 '빛'이 아니라 '칠한 사각형'으로 읽힌다 (실측). 바닥은 밝은 색으로만
  // 바꾸고 **광원이 실제로 비추게** 두면 감쇠가 생겨 새어 나온 빛처럼 보인다.
  // 발광은 틈(slit)만 — 거기가 광원의 출처다
  shutter_glow: {
    reset: (r) => {
      r.shutterGlowMat.color.setHex(0x11141c);
      r.shutterGlowSlitMat.emissive.setHex(0x000000);
      r.shutterGlowLight.intensity = 0;
    },
    apply: (r) => {
      r.shutterGlowMat.color.setHex(0x8a8272);
      r.shutterGlowSlitMat.emissive.setHex(0xffcf8a);
      r.shutterGlowLight.intensity = 5.5;
    },
  },
  umbrella: toggle((r) => r.umbrella),
  sensor_on: {
    reset: (r) => { r.sensorMat.emissive.setHex(0x000000); r.sensorLight.intensity = 0; },
    apply: (r) => { r.sensorMat.emissive.setHex(0xcfc2a4); r.sensorLight.intensity = 4; },
  },
  window_red: {
    reset: (r) => { r.windowMat.emissive.setHex(0x000000); },
    apply: (r) => { r.windowMat.emissive.setHex(0x7a1010); },
  },
  laundry_open: {
    reset: (r) => {
      r.laundryShutter.position.y = 1.25;
      r.laundryShutter.scale.y = 1;
      r.laundryMat.emissive.setHex(0x000000);
      r.laundryLight.intensity = 0;
    },
    apply: (r) => {
      r.laundryShutter.position.y = 2.0; // 반열림 — 아래로 내부가 드러난다
      r.laundryShutter.scale.y = 0.42;
      r.laundryMat.emissive.setHex(0x77878f);
      r.laundryLight.intensity = 6;
    },
  },
  sign_lit: {
    reset: (r) => { r.storeSignMat.emissive.setHex(0x000000); },
    apply: (r) => { r.storeSignMat.emissive.setHex(0x6e1414); }, // 저채도 적 — 이상 시그널 전용색
  },
  swing: {
    reset: (r) => { r.swingPivot.rotation.x = 0; }, // 흔들림 자체는 updateWorld
  },
  lamp_flicker: {
    // 깜빡임 자체는 updateWorld. 기준 밝기는 깊이 사다리를 따른다 (applyDepth가 먼저 실행).
    // **아침에는 소등**(v0.11.27): 아침이면 applyDepth가 일찍 반환해 lampBase가 없고,
    // 그대로 두면 이 리셋이 밤 밝기로 되돌려 **대낮에 가로등이 켜졌다**.
    // setMorning의 소등을 rollSegment가 매번 덮어쓰고 있었다 (퇴근길 튜토리얼 전 구간)
    reset: (r) => {
      r.lampLight.intensity = r.group.userData.morning
        ? 0
        : ((r.group.userData.lampBase as number) ?? LAMP_LADDER[0]);
    },
  },
  traffic_red: {
    reset: () => {}, // 신호등 등화는 테마 4 표시 중 updateWorld가 매 프레임 재계산
  },
  ball_out: {
    reset: (r) => { r.ball.position.copy(BALL_HOME); },
    apply: (r) => { r.ball.position.copy(BALL_OUT); },
  },
  sign_turn: {
    reset: (r) => { r.sign.rotation.y = SIGN_REST_Y; },
    apply: (r) => { r.sign.rotation.y = SIGN_TURNED_Y; },
  },
  flyer_digits: {
    reset: (r) => { r.flyerMat.map = r.flyerTex[0]; },
    apply: (r) => { r.flyerMat.map = r.flyerTex[1]; },
  },
  realty_urgent: {
    reset: (r) => { r.realtyMat.map = r.realtyTex[0]; },
    apply: (r) => { r.realtyMat.map = r.realtyTex[1]; },
  },
  shop_typo: {
    reset: (r) => { r.shopSignMat.map = r.shopTex[0]; r.shopSignMat.emissiveMap = r.shopTex[0]; },
    apply: (r) => { r.shopSignMat.map = r.shopTex[1]; r.shopSignMat.emissiveMap = r.shopTex[1]; },
  },
  figure: {
    reset: (r) => { r.figure.visible = false; },
    apply: (r) => {
      // 스폰 앵커 — main이 userData.figureAnchor에 고른 지점 (랜덤은 선택 로직의 몫)
      const [ax, az] = SPAWN_ANCHORS[(r.group.userData.figureAnchor as number) ?? 0];
      r.figure.position.set(ax, 0, az);
      r.figure.rotation.y = Math.random() < 0.5 ? Math.PI : Math.PI * 0.85; // 등을 돌리고
      r.figure.visible = true;
    },
  },
  // ---- 괴담의 존재 (2026-08-02 컨셉 전환) — 전부 "있어서는 안 되는 것"의 출현/소거 토글.
  // OBJ(흔적)는 직시하면 main.ts가 재적용으로 지운다 — 똑바로 보면 걷힌다
  blood_trail: toggle((r) => r.bloodTrail),
  skull: toggle((r) => r.skull),
  face_window: toggle((r) => r.facePlane),
  handprints: toggle((r) => r.handprints),
  swing_figure: toggle((r) => r.swingFigure),
  eyes: toggle((r) => r.eyes),
  bus_figure: toggle((r) => r.busFigure),
  drag_mark: toggle((r) => r.dragMark),
};

/** 구간 상태 초기화 후 이상현상 적용 (0~복수). 등장 트윈 없음 — "이미 그렇게 있어야 한다" (visual-polish §7) */
export function applyAnomalies(refs: SegmentRefs, effects: AnomalyEffect[]) {
  for (const h of Object.values(EFFECTS)) h.reset(refs); // 전 타깃 정상 복귀
  refs.group.userData.effects = effects;
  for (const e of effects) EFFECTS[e].apply?.(refs);
}
