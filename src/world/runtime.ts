// 월드의 시간 — 구간이 바뀔 때 한 번 부르는 것들(applyDepth·setMorning·setShopNear)과
// 매 프레임 도는 것(updateWorld). 트윈 금지, 스텝/주기 방식 ("이미 그렇게 있어야 한다").

import * as THREE from 'three';
import { type AnomalyEffect } from '../data';
import { type SegmentRefs } from './refs';
import {
  HW, ROAD_Z, CAR_SPAN, CAR_SEC, LAMP_LADDER, FOG_NIGHT, FOG_DAY, isGreen, isFlashing,
  TUNNEL_LAMP_EMISSIVE, TUNNEL_LAMP_INTENSITY,
} from './layout';

/** 터널 안개가 아침에 향하는 색 — 다리 밑의 어둠 (하늘색이 아니다) */
const NIGHT_TINT = new THREE.Color(FOG_NIGHT);

/** 현재 구간(1~5)의 테마만 표시 */
export function setSegmentTheme(refs: SegmentRefs, segment: number) {
  refs.themes.forEach((t, i) => (t.visible = i === segment - 1));
}

/** 깊이에 따른 광량 적용. rollSegment마다 applyAnomaly보다 먼저 호출 */
export function applyDepth(refs: SegmentRefs, depth: number) {
  if (refs.group.userData.morning) return; // 첫날 아침 — 조명은 setMorning이 관리
  const base = LAMP_LADDER[Math.min(depth, LAMP_LADDER.length - 1)];
  refs.group.userData.lampBase = base;
  refs.lampLight.intensity = base;
  refs.ambient.intensity = Math.max(1.1, 2.2 - depth * 0.18);
  refs.group.userData.ambientBase = refs.ambient.intensity; // 터널 어둠이 곱해 쓸 기준값
}

// ---------- 아침/밤 전환 — 첫날 아침 튜토리얼 (v0.10.0: 1일차 아침 = 학습 스테이지) ----------
// 밤 값은 createWorld 초기값과 같아야 한다 (귀갓길 전환 시 원복)
export function setMorning(refs: SegmentRefs, on: boolean) {
  refs.group.userData.morning = on;
  const sky = on ? FOG_DAY : FOG_NIGHT;
  (refs.scene.background as THREE.Color).setHex(sky);
  const fog = refs.scene.fog as THREE.FogExp2;
  fog.color.setHex(sky);
  fog.density = on ? 0.008 : 0.044;
  refs.ambient.color.setHex(on ? 0xdde3ec : 0x39415e);
  refs.ambient.intensity = on ? 5.6 : 2.2; // 아침 — 어두운 재질(벽 0x23…)도 또렷이 보이는 수준
  refs.group.userData.ambientBase = refs.ambient.intensity; // 터널 어둠이 곱해 쓸 기준값
  refs.moon.color.setHex(on ? 0xfff3da : 0x8090c0); // 아침 = 해
  refs.moon.intensity = on ? 3.6 : 0.75;
  refs.lampLight.intensity = on ? 0 : LAMP_LADDER[0]; // 아침엔 가로등 소등
}

/** 터널 어둠 — **화면 페이드가 아니라 안개를 검게 올린다** (v0.11.15).
 *  세계가 어두워지는 것이라 UI 컷이 아니라 '다리 밑을 지나는 동안'으로 읽힌다.
 *  dark 0(골목) → 1(터널 한가운데, 사실상 암흑). 구간 전환은 dark=1 지점에서 일어난다 */
export function setTunnelDark(refs: SegmentRefs, dark: number, baseDensity: number) {
  const fog = refs.scene.fog as THREE.FogExp2;
  const d = Math.max(0, Math.min(1, dark));
  // 옹벽이 1.5m 거리라 안개가 아주 짙어야 실제로 캄캄해진다 (density 1.4 → 약 99% 차폐)
  fog.density = baseDensity + d * d * 1.4;
  const morning = !!refs.group.userData.morning;
  const sky = morning ? FOG_DAY : FOG_NIGHT;
  // 안개색·배경색을 **검정**으로 몬다 (v0.11.30). 두 가지를 고쳤다:
  // ① **감마** — Color는 선형 값이라 (1-d)를 그냥 곱하면 화면(sRGB)에서는
  //    (1-d)^(1/2.2)만큼만 어두워진다. d=0.9에서 체감 밝기가 35%나 남아
  //    아침 튜토리얼의 암전이 검정이 아니라 회색이었다
  // ② **아침의 하늘색** — 밝은 색을 그대로 짙게 하면 '흰 안개'가 낀다.
  //    다리 밑에는 하늘빛이 들지 않으므로 밤 색으로 먼저 당긴다 —
  //    그래야 아침에도 '검은 안개를 통과한다'가 성립한다
  const k = Math.pow(1 - d, 2.2);
  const tint = (c: THREE.Color) => {
    c.setHex(sky);
    if (morning && d > 0) c.lerp(NIGHT_TINT, Math.min(1, d * 2.5));
    c.multiplyScalar(k);
  };
  tint(fog.color);
  tint(refs.scene.background as THREE.Color);
  // 터널 등도 함께 잦아든다 — **발광부(emissive)까지** 꺼야 한다.
  // 빛만 끄면 등기구가 어둠 속에 떠 있는 점으로 남아 이음매를 드러낸다
  for (const l of refs.tunnelLights) l.intensity = TUNNEL_LAMP_INTENSITY * (1 - d);
  refs.tunnelLampMat.emissive.setHex(TUNNEL_LAMP_EMISSIVE).multiplyScalar(1 - d);
  const ab = (refs.group.userData.ambientBase as number) ?? 2.2;
  refs.ambient.intensity = ab * (1 - d * 0.92);
}

/** 접힘 반복 구간 여부 — 바닥 분필 자국 표시 */
export function setFoldMark(refs: SegmentRefs, show: boolean) {
  refs.foldMark.visible = show;
}

/** 마지막 구간 여부에 따라 FF-1204 간판/불빛 연출.
 *  showSign=false — 밤 1 귀갓길: 목적지가 집이라 가게 간판 없이 개구부 불빛만 (v0.10.0) */
export function setShopNear(refs: SegmentRefs, near: boolean, showSign = true) {
  const morning = !!refs.group.userData.morning;
  // 마지막 구간에서는 터널이 아니라 목적지(가게·집)가 나와야 한다 (v0.11.14)
  refs.tunnel.visible = !near;
  // **가게는 간판이 딸린 도착지에만** (퇴근길 끝). 귀갓길의 마지막은 집이라 가게가 아니다.
  // 이게 없던 시절에는 터널을 숨긴 자리가 그냥 빈 하늘이었다 (v0.11.32)
  refs.shopFront.visible = near && showSign;
  // 가게 안을 밝히는 것도 이 등이다 — 광원을 새로 만들지 않는다 (visual-polish §4).
  // 아침에도 가게 안은 켜져 있어야 한다: 대낮의 켜진 간판이 "왜 24시간을 하지"의 첫 단서
  refs.shopGlow.intensity = near ? (showSign ? 26 : 30) : morning ? 0 : 4;
  // 간판은 마지막 구간에만 존재 — 다른 구간 끝에서 글자가 어렴풋이 보이면 혼란 (명확성)
  refs.shopSign.visible = near && showSign;
  // emissiveMap(글자 텍스처) × emissive 색 — 점등 시 글자만 발광한다.
  // **아침에도 켠다** (v0.11.32): 튜토리얼 마지막 자막이 "간판에 불이 켜져 있다"라고
  // 말하는데 코드가 아침엔 꺼서 자막이 거짓말이었다. 게다가 대낮에 켜진 24시 간판은
  // story.md 밤 1의 비트("새 가게가 왜 24시간을 하지")를 그대로 보여주는 첫 단서다
  refs.shopSignMat.emissive.setHex(near && showSign ? 0xffffff : 0x000000);
}

const TRAFFIC_RED_ON = 0x8a1616;
const TRAFFIC_GREEN_ON = 0x2f7a4a;

/** 매 프레임 — 시간성 연출 (가로등 깜빡임 · 그네 · 신호등). 스텝/주기 방식, 트윈 금지 */
export function updateWorld(refs: SegmentRefs, t: number) {
  const effects = (refs.group.userData.effects as AnomalyEffect[] | undefined) ?? [];

  // A-008 가로등 — 이상 시 두 번씩 깜빡임 (스텝 — 형광등은 튄다, visual-polish §7)
  if (effects.includes('lamp_flicker')) {
    const base = (refs.group.userData.lampBase as number) ?? LAMP_LADDER[0];
    const phase = t % 1.6;
    const on = !(phase < 0.12 || (phase > 0.24 && phase < 0.36));
    refs.lampLight.intensity = on ? base : Math.min(2, base);
  }

  // A-007 그네 — 바람 없는 흔들림
  if (effects.includes('swing')) {
    refs.swingPivot.rotation.x = Math.sin(t * 2.2) * 0.38;
  }

  // 신호등 — 정상: 교대 점등 주기가 '학습된 정상' / A-011: 양쪽 다 빨간불 고정
  if (refs.themes[3].visible) {
    const bothRed = effects.includes('traffic_red');
    // 점멸 — 곧 빨강이라는 경고 (초당 4회). 실제 횡단보도의 문법을 그대로 쓴다
    const blink = isFlashing(t) ? Math.floor(t * 4) % 2 === 0 : true;
    const greenOn = !bothRed && isGreen(t) && blink;
    const redOn = bothRed || !isGreen(t);
    for (const m of refs.trafficGreen) m.emissive.setHex(greenOn ? TRAFFIC_GREEN_ON : 0x000000);
    for (const m of refs.trafficRed) m.emissive.setHex(redOn ? TRAFFIC_RED_ON : 0x000000);
  }

  // 차 — startCar가 심어둔 출발 시각으로부터 x축을 가로지른다.
  // 차도는 테마 4에만 있다: 구간이 바뀌면 주행 중이던 차도 즉시 거둔다 (v0.11.19 —
  // 그러지 않으면 정류장에서 출발한 차가 먹자골목까지 따라온다)
  const start = refs.group.userData.carStart as number | undefined;
  if (start !== undefined) {
    const p = (t - start) / CAR_SEC;
    if (p >= 1 || !refs.themes[3].visible) {
      refs.car.visible = false;
      refs.carLight.intensity = 0;
      refs.group.userData.carStart = undefined;
    } else {
      const dir = (refs.group.userData.carDir as number) ?? 1;
      refs.car.position.x = dir * (-CAR_SPAN / 2 + CAR_SPAN * p);
      refs.car.rotation.y = dir > 0 ? 0 : Math.PI;
      refs.car.visible = true;
      refs.carLight.intensity = 26;
    }
  }
}

/** 주행 중이던 차를 즉시 거둔다 — 구간 전환 시 (v0.11.19) */
export function stopCar(refs: SegmentRefs) {
  refs.group.userData.carStart = undefined;
  refs.car.visible = false;
  refs.carLight.intensity = 0;
}

/** 차를 한 대 보낸다. dir +1 = 왼→오른쪽 (v0.11.7) */
export function startCar(refs: SegmentRefs, t: number, dir: 1 | -1 = 1) {
  refs.group.userData.carStart = t;
  refs.group.userData.carDir = dir;
  refs.car.position.set(dir * -CAR_SPAN / 2, 0, ROAD_Z);
  refs.car.visible = true;
}

/** 차가 지금 통행부(골목 폭)를 지나는 중인가 — 치임 판정용 */
export function carInCorridor(refs: SegmentRefs): boolean {
  return refs.car.visible && Math.abs(refs.car.position.x) < HW + 2.2;
}
