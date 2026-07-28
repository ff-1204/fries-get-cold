// 그레이박스 골목 — 공용 복도 프리팹 + 구간별 테마 5종 (docs/development.md 구현 노트)
// 전방 = -Z. 구간 끝(z=-segLength)에 본길 개구부, 왼쪽 벽 끝부분에 샛길 개구부.
// 테마: 원룸 골목 / 상가 골목 / 놀이터 옆길 / 정류장 앞 / 먹자골목 입구 (story.md §4)
// 이상현상 배치 3원칙(anomalies.md): 광원 안쪽 · 판정 10m 앞 · 실루엣 대비

import * as THREE from 'three';
import { CONFIG, type AnomalyEffect } from './data';

export interface SegmentRefs {
  group: THREE.Group;
  themes: THREE.Group[]; // index = 구간 - 1
  lampLight: THREE.PointLight;
  shopGlow: THREE.PointLight;
  shopSignMat: THREE.MeshStandardMaterial;
  // --- 이상현상 타깃 (테마별) ---
  umbrella: THREE.Group;                    // 1: A-001
  sensorMat: THREE.MeshStandardMaterial;    // 1: A-002
  sensorLight: THREE.PointLight;
  windowMat: THREE.MeshStandardMaterial;    // 1: A-015
  laundryShutter: THREE.Mesh;               // 2: A-004
  laundryMat: THREE.MeshStandardMaterial;
  laundryLight: THREE.PointLight;
  storeSignMat: THREE.MeshStandardMaterial; // 2: A-006
  swingPivot: THREE.Group;                  // 3: A-007
  ball: THREE.Mesh;                         // 3: A-009
  trafficRed: THREE.MeshStandardMaterial[]; // 4: A-011 (양쪽 빨간등)
  trafficGreen: THREE.MeshStandardMaterial[];
  sign: THREE.Group;                        // 5: A-013
}

const L = CONFIG.segLength;
const HW = CONFIG.corridorHalfWidth;
const WALL_H = 7;

// 샛길 개구부 (왼쪽 벽, 구간 끝 부근)
export const SIDE_GAP = { zNear: -(L - 9), zFar: -(L - 4) };
// 본길 개구부 (끝 벽 중앙)
export const MAIN_GAP_HALF = 1.4;

// 입간판 방향 — 정상은 벽과 평행(옆면), 이상은 플레이어 정면 (실루엣 차이 = 명확성)
const SIGN_REST_Y = Math.PI / 2;
const SIGN_TURNED_Y = 0;

// 공 위치 — 정상은 펜스 안쪽, 이상은 길 한가운데
const BALL_HOME = new THREE.Vector3(-2.35, 0.28, -L * 0.46);
const BALL_OUT = new THREE.Vector3(0.5, 0.28, -L * 0.42);

function box(
  w: number, h: number, d: number,
  color: number, x: number, y: number, z: number,
  parent: THREE.Object3D,
): THREE.Mesh {
  const m = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color, roughness: 0.95 }),
  );
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}

export function createWorld(scene: THREE.Scene): SegmentRefs {
  scene.background = new THREE.Color(0x0a0e1a); // OLED 대응: 순수 검정 금지 (responsive-design §6)
  scene.fog = new THREE.FogExp2(0x0a0e1a, 0.052);

  scene.add(new THREE.AmbientLight(0x2a3050, 1.1));
  const moon = new THREE.DirectionalLight(0x8090c0, 0.4);
  moon.position.set(4, 10, 2);
  scene.add(moon);

  const group = new THREE.Group();
  scene.add(group);

  // ---------- 공용 복도 ----------
  // 바닥 (아스팔트)
  box(HW * 2 + 14, 0.2, L + 14, 0x181c28, 0, -0.1, -L / 2, group);

  // 오른쪽 벽 (빌라 담벼락) — 통짜
  box(1, WALL_H, L, 0x232838, HW + 0.5, WALL_H / 2, -L / 2, group);

  // 왼쪽 벽 — 샛길 개구부를 남기고 2조각
  const leftFrontLen = -SIDE_GAP.zNear; // 0 ~ zNear
  box(1, WALL_H, leftFrontLen, 0x20263a, -HW - 0.5, WALL_H / 2, SIDE_GAP.zNear / 2, group);
  const leftBackLen = L + SIDE_GAP.zFar; // zFar ~ -L
  box(1, WALL_H, leftBackLen, 0x20263a, -HW - 0.5, WALL_H / 2, (SIDE_GAP.zFar - L) / 2, group);

  // 끝 벽 — 본길 개구부(중앙)를 남기고 2조각
  const endWallW = HW - MAIN_GAP_HALF + 1;
  box(endWallW, WALL_H, 1, 0x232838, -(MAIN_GAP_HALF + endWallW / 2), WALL_H / 2, -L - 0.5, group);
  box(endWallW, WALL_H, 1, 0x232838, MAIN_GAP_HALF + endWallW / 2, WALL_H / 2, -L - 0.5, group);

  // 샛길 통로 (왼쪽으로 짧게 — 그레이박스)
  // 어포던스: "들어갈 수 있어 보이게" — 틈의 빛 + 본길보다 밝은 바닥 (design-principles §0 시그니파이어)
  box(8, 0.2, SIDE_GAP.zNear - SIDE_GAP.zFar + 2, 0x232838, -HW - 4.5, -0.1, (SIDE_GAP.zNear + SIDE_GAP.zFar) / 2, group);
  box(8, WALL_H, 0.6, 0x1b2032, -HW - 4.5, WALL_H / 2, SIDE_GAP.zNear + 0.8, group);
  box(8, WALL_H, 0.6, 0x1b2032, -HW - 4.5, WALL_H / 2, SIDE_GAP.zFar - 0.8, group);
  const sideLight = new THREE.PointLight(0x9fb4d8, 5, 9, 1.6); // 한색 — 웜은 목표(버거집) 전용
  sideLight.position.set(-HW - 2.2, 2.6, (SIDE_GAP.zNear + SIDE_GAP.zFar) / 2);
  group.add(sideLight);

  // 가로등 (구간 중반) — 모든 구간 공용, A-008 깜빡임 타깃
  const lampZ = -L * 0.45;
  box(0.15, 5, 0.15, 0x3a4157, HW - 0.4, 2.5, lampZ, group);
  const lampLight = new THREE.PointLight(0xffc687, 22, 18, 1.8);
  lampLight.position.set(HW - 0.9, 4.8, lampZ);
  group.add(lampLight);

  // 구간 끝 개구부 너머의 "다음 골목" 어렴풋한 빛
  const shopGlow = new THREE.PointLight(0xffb23e, 0, 26, 2);
  shopGlow.position.set(0, 3, -L - 6);
  group.add(shopGlow);

  // 버거집 간판(개구부 위) — 마지막 구간에서만 점등
  const shopSignMat = new THREE.MeshStandardMaterial({ color: 0x241a10, emissive: 0x000000 });
  const shopSign = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.9, 0.3), shopSignMat);
  shopSign.position.set(0, 4.6, -L - 0.4);
  group.add(shopSign);

  // ---------- 테마 1: 원룸 골목 ----------
  const t1 = new THREE.Group();

  // 재활용 배출장 — 우산 이상(A-001)의 '정상 상태' 학습 대상 (fear-cognition §1)
  box(1.6, 0.5, 1.0, 0x2a3142, -HW + 1.0, 0.25, -L * 0.2, t1);
  box(0.7, 0.35, 0.6, 0x252c3d, -HW + 0.8, 0.85, -L * 0.19, t1);

  // 우산 (배출장 옆 — A-001, 기본 숨김)
  const umbrella = new THREE.Group();
  const stick = box(0.06, 1.3, 0.06, 0x555b70, 0, 0.65, 0, umbrella);
  stick.rotation.z = 0.5;
  const cap = new THREE.Mesh(
    new THREE.ConeGeometry(0.55, 0.5, 8),
    new THREE.MeshStandardMaterial({ color: 0x6b1520, roughness: 0.8 }),
  );
  cap.position.set(-0.35, 1.35, 0);
  cap.rotation.z = 0.5;
  umbrella.add(cap);
  umbrella.position.set(-HW + 1.8, 0, -L * 0.24);
  umbrella.visible = false;
  t1.add(umbrella);

  // 빌라 계단 센서등 (A-002 — 정상: 꺼짐 / 이상: 계속 켜짐)
  const sensor = box(0.45, 0.22, 0.16, 0x1c2230, -HW + 0.12, 1.7, -L * 0.3, t1);
  const sensorMat = sensor.material as THREE.MeshStandardMaterial;
  const sensorLight = new THREE.PointLight(0xe8d9b0, 0, 6, 1.8);
  sensorLight.position.set(-HW + 0.5, 1.7, -L * 0.3);
  t1.add(sensorLight);

  // 창문 (오른쪽 벽 위 — A-015 붉은 불)
  const windowMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1.1, 1.4),
    new THREE.MeshStandardMaterial({ color: 0x11141f, emissive: 0x000000 }),
  );
  windowMesh.position.set(HW - 0.02, 3.4, -L * 0.68);
  windowMesh.rotation.y = -Math.PI / 2;
  t1.add(windowMesh);
  const windowMat = windowMesh.material as THREE.MeshStandardMaterial;

  // ---------- 테마 2: 상가 골목 ----------
  const t2 = new THREE.Group();

  // 24시 세탁소 (오른쪽 벽 — A-004: 셔터 반열림 + 내부 불)
  const laundryInterior = box(2.6, 2.0, 0.08, 0x141824, HW - 0.06, 1.25, -L * 0.39, t2);
  const laundryMat = laundryInterior.material as THREE.MeshStandardMaterial;
  const laundryShutter = box(2.7, 2.2, 0.1, 0x2b3244, HW - 0.16, 1.25, -L * 0.39, t2);
  const laundryLight = new THREE.PointLight(0xcfe0e8, 0, 8, 1.8);
  laundryLight.position.set(HW - 0.9, 1.3, -L * 0.39);
  t2.add(laundryLight);

  // 상가 간판들 (소등 상태가 정상 — A-006: 하나가 켜짐)
  // 타깃 간판은 가로등 옆(z=-L*0.5) — 걸으며 자연 시야에 들어오는 각도 (배치 규칙 1·2)
  const storeSign = box(1.7, 0.65, 0.14, 0x1e2434, HW - 0.1, 3.2, -L * 0.5, t2);
  const storeSignMat = storeSign.material as THREE.MeshStandardMaterial;
  box(1.5, 0.6, 0.14, 0x1c2130, HW - 0.1, 3.4, -L * 0.29, t2);
  box(1.9, 0.7, 0.14, 0x20263a, HW - 0.1, 3.1, -L * 0.62, t2);

  // ---------- 테마 3: 놀이터 옆길 ----------
  const t3 = new THREE.Group();

  // 낮은 철제 펜스 (왼쪽)
  for (const fz of [-L * 0.32, -L * 0.375, -L * 0.43, -L * 0.485]) {
    box(0.07, 0.85, 1.7, 0x323a52, -HW + 0.85, 0.45, fz, t3);
  }

  // 그네 (펜스 너머 — A-007: 혼자 흔들림)
  box(0.1, 2.3, 0.1, 0x3a4157, -HW + 0.5, 1.15, -L * 0.365, t3);
  box(0.1, 2.3, 0.1, 0x3a4157, -HW + 0.5, 1.15, -L * 0.42, t3);
  box(0.08, 0.08, 2.2, 0x3a4157, -HW + 0.5, 2.3, -L * 0.393, t3);
  const swingPivot = new THREE.Group();
  swingPivot.position.set(-HW + 0.5, 2.26, -L * 0.393);
  box(0.03, 1.5, 0.03, 0x555b70, 0, -0.75, -0.22, swingPivot);
  box(0.03, 1.5, 0.03, 0x555b70, 0, -0.75, 0.22, swingPivot);
  box(0.14, 0.06, 0.55, 0x555b70, 0, -1.5, 0, swingPivot);
  t3.add(swingPivot);

  // 공 (A-009 — 정상: 펜스 안쪽 / 이상: 길 한가운데)
  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(0.28, 12, 10),
    new THREE.MeshStandardMaterial({ color: 0x6d7488, roughness: 0.85 }),
  );
  ball.position.copy(BALL_HOME);
  t3.add(ball);

  // ---------- 테마 4: 정류장 앞 ----------
  const t4 = new THREE.Group();

  // 정류장 부스 (오른쪽)
  box(2.2, 2.2, 0.08, 0x252c3d, HW - 0.1, 1.35, -L * 0.32, t4);
  box(2.4, 0.08, 0.9, 0x2a3142, HW - 0.55, 2.5, -L * 0.32, t4);
  box(0.08, 2.5, 0.08, 0x2a3142, HW - 1.0, 1.25, -L * 0.285, t4);
  box(0.08, 2.5, 0.08, 0x2a3142, HW - 1.0, 1.25, -L * 0.355, t4);
  box(1.8, 0.08, 0.35, 0x2a3142, HW - 0.5, 0.55, -L * 0.32, t4);

  // 신호등 2기 (길 양쪽 — A-011: 양쪽 다 빨간불 고정 / 정상: 교대 점등)
  const trafficRed: THREE.MeshStandardMaterial[] = [];
  const trafficGreen: THREE.MeshStandardMaterial[] = [];
  for (const tx of [-(HW - 0.4), HW - 0.4]) {
    box(0.12, 3.4, 0.12, 0x3a4157, tx, 1.7, -L * 0.55, t4);
    box(0.3, 0.66, 0.24, 0x1c2230, tx, 3.55, -L * 0.55, t4);
    const red = box(0.16, 0.16, 0.06, 0x351114, tx, 3.7, -L * 0.55 + 0.14, t4);
    const green = box(0.16, 0.16, 0.06, 0x11281a, tx, 3.42, -L * 0.55 + 0.14, t4);
    trafficRed.push(red.material as THREE.MeshStandardMaterial);
    trafficGreen.push(green.material as THREE.MeshStandardMaterial);
  }

  // ---------- 테마 5: 먹자골목 입구 ----------
  const t5 = new THREE.Group();

  // 간판 실루엣들 (양쪽 벽 — 전부 소등이 이 시각의 정상)
  box(0.14, 0.6, 1.5, 0x20263a, -HW + 0.1, 3.1, -L * 0.25, t5);
  box(1.6, 0.7, 0.14, 0x1e2434, HW - 0.1, 3.35, -L * 0.33, t5);
  box(0.14, 0.55, 1.3, 0x1c2130, -HW + 0.1, 2.9, -L * 0.47, t5);
  box(1.8, 0.6, 0.14, 0x20263a, HW - 0.1, 3.15, -L * 0.6, t5);

  // A자 입간판 (A-013 — 정상: 벽과 평행(옆면) / 이상: 판면이 정면)
  const sign = new THREE.Group();
  const panelMat = new THREE.MeshStandardMaterial({ color: 0x8b90a8, roughness: 0.9 });
  const panelGeo = new THREE.BoxGeometry(0.8, 1.15, 0.06);
  for (const dir of [1, -1]) {
    const panel = new THREE.Mesh(panelGeo, panelMat);
    panel.position.set(0, 0.56, dir * 0.16);
    panel.rotation.x = -dir * 0.26;
    sign.add(panel);
  }
  sign.position.set(-HW + 0.75, 0, -L * 0.55); // 가로등(z=-L*0.45) 광원 안쪽
  sign.rotation.y = SIGN_REST_Y;
  t5.add(sign);

  const themes = [t1, t2, t3, t4, t5];
  for (const t of themes) {
    t.visible = false;
    group.add(t);
  }

  return {
    group, themes, lampLight, shopGlow, shopSignMat,
    umbrella, sensorMat, sensorLight, windowMat,
    laundryShutter, laundryMat, laundryLight, storeSignMat,
    swingPivot, ball, trafficRed, trafficGreen, sign,
  };
}

/** 현재 구간(1~5)의 테마만 표시 */
export function setSegmentTheme(refs: SegmentRefs, segment: number) {
  refs.themes.forEach((t, i) => (t.visible = i === segment - 1));
}

/** 구간 상태 초기화 후 이상현상 적용. 등장 트윈 없음 — "이미 그렇게 있어야 한다" (visual-polish §7) */
export function applyAnomaly(refs: SegmentRefs, effect: AnomalyEffect | null) {
  // reset — 모든 타깃을 정상 상태로
  refs.umbrella.visible = false;
  refs.sensorMat.emissive.setHex(0x000000);
  refs.sensorLight.intensity = 0;
  refs.windowMat.emissive.setHex(0x000000);
  refs.laundryShutter.position.y = 1.25;
  refs.laundryShutter.scale.y = 1;
  refs.laundryMat.emissive.setHex(0x000000);
  refs.laundryLight.intensity = 0;
  refs.storeSignMat.emissive.setHex(0x000000);
  refs.swingPivot.rotation.x = 0;
  refs.ball.position.copy(BALL_HOME);
  refs.sign.rotation.y = SIGN_REST_Y;
  refs.lampLight.intensity = 22;
  refs.group.userData.effect = effect;

  switch (effect) {
    case 'umbrella':
      refs.umbrella.visible = true;
      break;
    case 'sensor_on':
      refs.sensorMat.emissive.setHex(0xcfc2a4);
      refs.sensorLight.intensity = 4;
      break;
    case 'window_red':
      refs.windowMat.emissive.setHex(0x7a1010);
      break;
    case 'laundry_open':
      refs.laundryShutter.position.y = 2.0; // 반열림 — 아래로 내부가 드러난다
      refs.laundryShutter.scale.y = 0.42;
      refs.laundryMat.emissive.setHex(0x77878f);
      refs.laundryLight.intensity = 6;
      break;
    case 'sign_lit':
      refs.storeSignMat.emissive.setHex(0x6e1414); // 저채도 적 — 이상 시그널 전용색
      break;
    case 'swing':
    case 'lamp_flicker':
    case 'traffic_red':
      break; // 시간성 연출 — updateWorld에서 처리
    case 'ball_out':
      refs.ball.position.copy(BALL_OUT);
      break;
    case 'sign_turn':
      refs.sign.rotation.y = SIGN_TURNED_Y;
      break;
    case null:
      break;
  }
}

/** 마지막 구간 여부에 따라 버거집 간판/불빛 연출 */
export function setShopNear(refs: SegmentRefs, near: boolean) {
  refs.shopGlow.intensity = near ? 30 : 4;
  refs.shopSignMat.emissive.setHex(near ? 0xff8c1a : 0x000000);
}

const TRAFFIC_RED_ON = 0x8a1616;
const TRAFFIC_GREEN_ON = 0x2f7a4a;

/** 매 프레임 — 시간성 연출 (가로등 깜빡임 · 그네 · 신호등). 스텝/주기 방식, 트윈 금지 */
export function updateWorld(refs: SegmentRefs, t: number) {
  const effect = refs.group.userData.effect as AnomalyEffect | null;

  // A-008 가로등 — 이상 시 두 번씩 깜빡임 (스텝 — 형광등은 튄다, visual-polish §7)
  if (effect === 'lamp_flicker') {
    const phase = t % 1.6;
    const on = !(phase < 0.12 || (phase > 0.24 && phase < 0.36));
    refs.lampLight.intensity = on ? 22 : 2;
  }

  // A-007 그네 — 바람 없는 흔들림
  if (effect === 'swing') {
    refs.swingPivot.rotation.x = Math.sin(t * 2.2) * 0.38;
  }

  // 신호등 — 정상: 교대 점등 주기가 '학습된 정상' / A-011: 양쪽 다 빨간불 고정
  if (refs.themes[3].visible) {
    const bothRed = effect === 'traffic_red';
    const phase = t % 5.6;
    const greenOn = !bothRed && phase < 3.2;
    const redOn = bothRed || phase >= 3.2;
    for (const m of refs.trafficGreen) m.emissive.setHex(greenOn ? TRAFFIC_GREEN_ON : 0x000000);
    for (const m of refs.trafficRed) m.emissive.setHex(redOn ? TRAFFIC_RED_ON : 0x000000);
  }
}
