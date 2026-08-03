// 테마 2 — 상가 골목. 이 구간의 문법: **셔터는 닫혀 있다**.
// 닫힌 셔터가 '학습된 정상'을 강화할수록 세탁소 반열림(A-004)의 위반이 도드라진다.

import * as THREE from 'three';
import { type Build, type Theme2Refs } from '../refs';
import { box, realtyTexture, handprintsTexture } from '../kit';
import { L, HW } from '../layout';

type E = 'laundry_open' | 'sign_lit' | 'realty_urgent' | 'handprints';

export function createTheme2(): Build<Theme2Refs, E> {
  const t2 = new THREE.Group();

  // 24시 세탁소 (오른쪽 벽면 파사드 — A-004: 셔터 반열림 + 내부 불)
  // 벽과 평행 — 왼쪽 셔터 가게들과 같은 문법. 통로에 수직으로 꽂힌 M0 슬랩은
  // 골목을 반쯤 막은 벽처럼 보였고 눈높이라 카메라가 관통했다 (2026-07-30 맵 구조 수정)
  const laundryInterior = box(0.08, 2.0, 2.6, 0x141824, HW - 0.06, 1.25, -L * 0.39, t2);
  const laundryMat = laundryInterior.material as THREE.MeshStandardMaterial;
  const laundryShutter = box(0.12, 2.2, 2.7, 0x2b3244, HW - 0.18, 1.25, -L * 0.39, t2);
  const laundryLight = new THREE.PointLight(0xcfe0e8, 0, 8, 1.8);
  laundryLight.position.set(HW - 0.9, 1.3, -L * 0.39);
  t2.add(laundryLight);

  // H-004 셔터의 손자국들 — 세탁소 셔터 앞면. 안쪽에서 찍힌 방향 (reveal이 말해준다)
  const handprints = new THREE.Mesh(
    new THREE.PlaneGeometry(2.4, 1.7),
    new THREE.MeshStandardMaterial({ map: handprintsTexture(), transparent: true, roughness: 1 }),
  );
  handprints.position.set(HW - 0.25, 1.25, -L * 0.39); // 셔터(x=HW-0.18, 두께 0.12) 바로 앞
  handprints.rotation.y = -Math.PI / 2;
  handprints.visible = false;
  t2.add(handprints);

  // 상가 간판들 (소등 상태가 정상 — A-006: 하나가 켜짐)
  // 타깃 간판은 가로등 옆(z=-L*0.5) — 걸으며 자연 시야에 들어오는 각도 (배치 규칙 1·2)
  const storeSign = box(1.7, 0.65, 0.14, 0x1e2434, HW - 0.1, 3.2, -L * 0.5, t2);
  const storeSignMat = storeSign.material as THREE.MeshStandardMaterial;
  box(1.5, 0.6, 0.14, 0x1c2130, HW - 0.1, 3.4, -L * 0.29, t2);
  box(1.9, 0.7, 0.14, 0x20263a, HW - 0.1, 3.1, -L * 0.62, t2);

  // 부동산 유리창 시세표 (왼쪽 벽, 가로등 사거리 안 — A-005: "월세 35" → "급구")
  const realtyTex: [THREE.CanvasTexture, THREE.CanvasTexture] = [
    realtyTexture(false),
    realtyTexture(true),
  ];
  const realtyMat = new THREE.MeshStandardMaterial({ map: realtyTex[0], roughness: 0.85 });
  const realty = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.1), realtyMat);
  realty.position.set(-HW + 0.01, 1.5, -L * 0.5);
  realty.rotation.y = Math.PI / 2;
  t2.add(realty);

  // 구조 차별화 — 닫힌 셔터 가게(슬랫 실루엣)·어닝·보도 단차 (상가의 문법: 셔터는 닫혀 있다)
  for (const sz of [-L * 0.3, -L * 0.68]) {
    box(0.12, 2.1, 2.3, 0x2a3143, -HW + 0.1, 1.15, sz, t2);
    for (let i = 0; i < 4; i++) box(0.13, 0.05, 2.3, 0x1f2534, -HW + 0.1, 0.45 + i * 0.5, sz, t2);
    const awning = box(0.85, 0.07, 2.5, 0x232134, -HW + 0.5, 2.65, sz, t2);
    awning.rotation.z = -0.3; // 벽에서 내려오는 처마 기울기
  }
  box(0.55, 0.14, L * 0.92, 0x222736, -HW + 0.28, 0.07, -L / 2, t2); // 보도 단차
  box(0.55, 0.14, L * 0.92, 0x222736, HW - 0.28, 0.07, -L / 2, t2);

  return {
    group: t2,
    refs: {
      laundryShutter, laundryMat, laundryLight, storeSignMat, realtyMat, realtyTex, handprints,
    },
    hit: {
      laundry_open: [laundryShutter, laundryInterior],
      sign_lit: [storeSign],
      realty_urgent: [realty],
      handprints: [handprints],
    },
  };
}
