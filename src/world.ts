// 그레이박스 골목 — 구간 프리팹 1개를 재활용 (docs/development.md 구현 노트)
// 전방 = -Z. 구간 끝(z=-segLength)에 본길 개구부, 왼쪽 벽 끝부분에 샛길 개구부.

import * as THREE from 'three';
import { CONFIG, type AnomalyEffect } from './data';

export interface SegmentRefs {
  group: THREE.Group;
  lampLight: THREE.PointLight;
  windowMesh: THREE.Mesh;
  umbrella: THREE.Group;
  sign: THREE.Group;
  shopGlow: THREE.PointLight;
  shopSignMat: THREE.MeshStandardMaterial;
}

const L = CONFIG.segLength;
const HW = CONFIG.corridorHalfWidth;
const WALL_H = 7;

// 샛길 개구부 (왼쪽 벽, 구간 끝 부근)
export const SIDE_GAP = { zNear: -(L - 9), zFar: -(L - 4) };
// 본길 개구부 (끝 벽 중앙)
export const MAIN_GAP_HALF = 1.4;

// 입간판 방향 — 정상은 벽과 평행(옆면), 이상은 플레이어 정면.
// 실루엣 차이가 커야 3초 안에 식별된다 (anomalies.md 명확성 원칙)
const SIGN_REST_Y = Math.PI / 2;
const SIGN_TURNED_Y = 0;

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
  box(8, 0.2, SIDE_GAP.zNear - SIDE_GAP.zFar + 2, 0x151926, -HW - 4.5, -0.1, (SIDE_GAP.zNear + SIDE_GAP.zFar) / 2, group);
  box(8, WALL_H, 0.6, 0x1b2032, -HW - 4.5, WALL_H / 2, SIDE_GAP.zNear + 0.8, group);
  box(8, WALL_H, 0.6, 0x1b2032, -HW - 4.5, WALL_H / 2, SIDE_GAP.zFar - 0.8, group);

  // 가로등 (구간 중반)
  const lampZ = -L * 0.45;
  box(0.15, 5, 0.15, 0x3a4157, HW - 0.4, 2.5, lampZ, group);
  const lampLight = new THREE.PointLight(0xffc687, 22, 18, 1.8);
  lampLight.position.set(HW - 0.9, 4.8, lampZ);
  group.add(lampLight);

  // 창문 (오른쪽 벽 — 이상현상 A-002)
  const windowMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1.1, 1.4),
    new THREE.MeshStandardMaterial({ color: 0x11141f, emissive: 0x000000 }),
  );
  windowMesh.position.set(HW - 0.02, 3.4, -L * 0.68);
  windowMesh.rotation.y = -Math.PI / 2;
  group.add(windowMesh);

  // 우산 (재활용 배출장 — 이상현상 A-001, 기본 숨김)
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
  umbrella.position.set(-HW + 0.9, 0, -L * 0.2);
  umbrella.visible = false;
  group.add(umbrella);

  // 입간판 (이상현상 A-013) — 먹자골목 A자형 입간판.
  // 평소: 벽과 평행이라 옆면(A자 실루엣)만 보임 / 이상: 판면이 플레이어를 정면으로 향한다.
  // 배치 원칙 — 가로등 불빛이 닿고 판정 전 관찰 시간이 남는 위치에만 둔다
  // (visual-polish §4 실루엣 가독성: 분위기를 위해 판정을 어둡게 만들지 않는다)
  const sign = new THREE.Group();
  const panelMat = new THREE.MeshStandardMaterial({ color: 0x8b90a8, roughness: 0.9 });
  const panelGeo = new THREE.BoxGeometry(0.8, 1.15, 0.06);
  for (const dir of [1, -1]) {
    const panel = new THREE.Mesh(panelGeo, panelMat);
    panel.position.set(0, 0.56, dir * 0.16);
    panel.rotation.x = -dir * 0.26; // 두 판이 위에서 만나 A자를 이룬다
    sign.add(panel);
  }
  sign.position.set(-HW + 0.75, 0, -L * 0.55); // 가로등(z=-L*0.45) 광원 안쪽
  sign.rotation.y = SIGN_REST_Y;
  group.add(sign);

  // 구간 끝 개구부 너머의 "다음 골목" 어렴풋한 빛
  const shopGlow = new THREE.PointLight(0xffb23e, 0, 26, 2);
  shopGlow.position.set(0, 3, -L - 6);
  group.add(shopGlow);

  // 버거집 간판(개구부 위) — 마지막 구간에서만 점등
  const shopSignMat = new THREE.MeshStandardMaterial({
    color: 0x241a10,
    emissive: 0x000000,
  });
  const shopSign = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.9, 0.3), shopSignMat);
  shopSign.position.set(0, 4.6, -L - 0.4);
  group.add(shopSign);

  return { group, lampLight, windowMesh, umbrella, sign, shopGlow, shopSignMat };
}

/** 구간 상태 초기화 후 이상현상 적용 */
export function applyAnomaly(refs: SegmentRefs, effect: AnomalyEffect | null) {
  // reset
  (refs.windowMesh.material as THREE.MeshStandardMaterial).emissive.setHex(0x000000);
  refs.umbrella.visible = false;
  refs.sign.rotation.y = SIGN_REST_Y;
  refs.lampLight.userData.flicker = false;
  refs.lampLight.intensity = 22;

  switch (effect) {
    case 'window_light':
      (refs.windowMesh.material as THREE.MeshStandardMaterial).emissive.setHex(0x7a1010);
      break;
    case 'umbrella':
      refs.umbrella.visible = true;
      break;
    case 'sign_tilt':
      refs.sign.rotation.y = SIGN_TURNED_Y;
      break;
    case 'lamp_flicker':
      refs.lampLight.userData.flicker = true;
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

/** 가로등 깜빡임 업데이트 (이상 시 두 번씩 깜빡임 패턴) */
export function updateLamp(refs: SegmentRefs, t: number) {
  if (refs.lampLight.userData.flicker) {
    const phase = t % 1.6;
    const on = !(phase < 0.12 || (phase > 0.24 && phase < 0.36));
    refs.lampLight.intensity = on ? 22 : 2;
  }
}
