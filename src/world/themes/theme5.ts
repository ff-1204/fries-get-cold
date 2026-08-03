// 테마 5 — 먹자골목 입구 (귀갓길의 첫 구간 = 가게 앞).
// 먹자골목의 밀도를 프롭으로 만들되 **전부 소등**이 이 시각의 정상.

import * as THREE from 'three';
import { type Build, type Theme5Refs } from '../refs';
import { box, type SharedMats } from '../kit';
import { L, HW, SIGN_REST_Y } from '../layout';

type E = 'sign_turn' | 'drag_mark';

export function createTheme5(mats: SharedMats): Build<Theme5Refs, E> {
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

  // H-008 끌린 자국 — 길 한가운데서 시작해 왼쪽 벽 어둠으로 이어지는 긴 자국
  const dragMark = new THREE.Group();
  const pool = new THREE.Mesh(new THREE.CircleGeometry(0.34, 16), mats.blood);
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(0.7, 0.015, -L * 0.52);
  const streak = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 6.2), mats.blood);
  streak.rotation.x = -Math.PI / 2;
  streak.rotation.z = 0.42; // 시작점 → 왼쪽 벽 방향
  streak.position.set(-0.55, 0.015, -L * 0.595);
  dragMark.add(pool, streak);
  dragMark.visible = false;
  t5.add(dragMark);

  // 구조 차별화 — 현수막·어닝·돌출 간판·쌓인 상자 (먹자골목의 밀도, 단 전부 소등)
  box(HW * 2 + 0.6, 0.55, 0.05, 0x1f2030, 0, 4.4, -L * 0.12, t5); // 입구 현수막
  const aw1 = box(0.8, 0.07, 2.2, 0x2b2334, HW - 0.5, 2.6, -L * 0.36, t5);
  aw1.rotation.z = 0.3;
  const aw2 = box(0.8, 0.07, 2.0, 0x252134, -HW + 0.5, 2.55, -L * 0.68, t5);
  aw2.rotation.z = -0.3;
  box(0.5, 1.7, 0.16, 0x232a3e, HW - 0.45, 3.6, -L * 0.5, t5);  // 돌출 간판
  box(0.5, 1.7, 0.16, 0x1f2536, -HW + 0.45, 3.4, -L * 0.3, t5);
  box(0.55, 0.4, 0.55, 0x262c3e, HW - 0.6, 0.2, -L * 0.42, t5); // 쌓인 맥주 상자
  box(0.5, 0.38, 0.5, 0x232838, HW - 0.62, 0.59, -L * 0.43, t5);
  box(0.45, 0.45, 0.45, 0x2a3044, -HW + 0.7, 0.22, -L * 0.7, t5);

  return {
    group: t5,
    refs: { sign, dragMark },
    hit: {
      sign_turn: [sign],
      drag_mark: [dragMark],
    },
  };
}
