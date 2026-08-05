// 테마 2 — 상가 골목. 이 구간의 문법: **셔터는 닫혀 있다**.
// 닫힌 셔터가 '학습된 정상'을 강화할수록 세탁소 반열림(A-004)의 위반이 도드라진다.

import * as THREE from 'three';
import { type Build, type Theme2Refs } from '../refs';
import { box, boxOf, concrete, realtyTexture, handprintsTexture } from '../kit';
import { L, HW } from '../layout';

type E = 'laundry_open' | 'sign_lit' | 'realty_urgent' | 'handprints' | 'shutter_glow'
  | 'lone_shadow';

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
  // ---------- 밀도 (v0.11.34) — 가로등을 지나면 아무것도 없는 복도였다 ----------
  // 셔터 가게를 **양쪽 전 구간으로** 늘린다. 상가 골목의 정상은 '닫혀 있음'이고,
  // 그 반복이 많을수록 세탁소 반열림(A-004) 하나가 도드라진다 (fear-cognition §1)
  const M = {
    shutter: concrete(0x2a3143), slat: concrete(0x1f2534), awning: concrete(0x232134),
    curb: concrete(0x222736), sign: concrete(0x20263a), steel: concrete(0x39415a),
    prop: concrete(0x262c3e), dark: concrete(0x171c2a),
  };
  for (const [s, sz] of [[-1, -L * 0.3], [-1, -L * 0.68], [-1, -L * 0.86],
    [1, -L * 0.19], [1, -L * 0.76]] as Array<[number, number]>) {
    const x = s * (HW - 0.1);
    boxOf(M.shutter, 0.12, 2.1, 2.3, x, 1.15, sz, t2);
    for (let i = 0; i < 4; i++) boxOf(M.slat, 0.13, 0.05, 2.3, x, 0.45 + i * 0.5, sz, t2);
    const awning = boxOf(M.awning, 0.85, 0.07, 2.5, s * (HW - 0.5), 2.65, sz, t2);
    awning.rotation.z = s * 0.3;                                   // 벽에서 내려오는 처마
    boxOf(M.sign, 0.14, 0.5, 2.0, s * (HW - 0.12), 3.05, sz, t2);  // 가게 간판 (소등)
  }
  // ---------- H-011 셔터 밑으로 새는 빛 (밤 3, 직시 — 새 분류 LGT) ----------
  // 이 구간의 정상은 **닫혀 있음**이다. 닫힌 셔터 다섯이 그 정상을 학습시키고,
  // 그중 하나의 **밑에서만** 빛이 샌다 — 형체도 사물도 아닌, 안에 무언가 켜져 있다는 사실.
  // 왼쪽 -L*0.68 셔터. 가로등(-L*0.45) 사거리 밖이라 자체 발광이 곧 실루엣 대비다
  // ⚠ **판정 대상은 바닥에 깔린 빛이다.** 셔터면·보도 단차 사이에 얇은 띠를 끼우려다 두 번
  // 파묻혔다 (가림 검사 0/5 ×2). 벽 쪽 좁은 틈은 프롭이 이미 꽉 차 있어 새 물건이 들어갈
  // 자리가 아니다 — **통행부 바닥은 언제나 비어 있고**, 새어 나온 빛이 거기 퍼지는 것이
  // 그림으로도 맞다. 어두운 바닥에 뜬 웜 패치라 실루엣 대비도 최대다
  const glowZ = -L * 0.68;
  const shutterGlowMat = new THREE.MeshStandardMaterial({ color: 0x11141c, roughness: 1 });
  const shutterGlow = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 2.0), shutterGlowMat);
  shutterGlow.rotation.x = -Math.PI / 2;
  shutterGlow.position.set(-(HW - 1.55), 0.02, glowZ);  // 단차 바깥 = 통행부 바닥
  t2.add(shutterGlow);
  // 셔터 밑의 틈 자체 — **여기만 발광한다.** 빛의 출처가 보여야 바닥의 밝음이 설명된다
  const shutterGlowSlitMat = new THREE.MeshStandardMaterial({ color: 0x11141c });
  const shutterGlowSlit = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.1, 2.1), shutterGlowSlitMat);
  shutterGlowSlit.position.set(-(HW - 0.3), 0.18, glowZ);
  t2.add(shutterGlowSlit);
  const shutterGlowLight = new THREE.PointLight(0xffe0a8, 0, 6.5, 2);
  shutterGlowLight.position.set(-(HW - 0.9), 0.5, glowZ);
  t2.add(shutterGlowLight);

  boxOf(M.curb, 0.55, 0.14, L * 0.92, -HW + 0.28, 0.07, -L / 2, t2); // 보도 단차
  boxOf(M.curb, 0.55, 0.14, L * 0.92, HW - 0.28, 0.07, -L / 2, t2);

  // 지하 계단 입구 — 상가 골목에만 있는 구멍. 난간 + 파인 어둠
  boxOf(M.dark, 0.9, 0.3, 1.8, -HW + 0.55, 0.02, -L * 0.44, t2);
  for (const rz of [-L * 0.41, -L * 0.47]) {
    boxOf(M.steel, 0.06, 0.9, 0.06, -HW + 1.0, 0.45, rz, t2);
  }
  boxOf(M.steel, 0.06, 0.06, 1.3, -HW + 1.0, 0.88, -L * 0.44, t2);

  // 실외기 열 · 배관 · 기대둔 입간판 · 폐지 묶음 (전부 통행 한계 ±2.6 밖)
  for (const [s, az] of [[1, -L * 0.42], [1, -L * 0.58], [-1, -L * 0.55]] as Array<[number, number]>) {
    boxOf(M.prop, 0.5, 0.42, 0.8, s * (HW - 0.28), 1.9, az, t2);
  }
  boxOf(M.steel, 0.16, 4.6, 0.16, HW - 0.2, 2.3, -L * 0.35, t2);      // 세로 배관
  boxOf(M.steel, 0.12, 0.12, L * 0.4, HW - 0.2, 2.55, -L * 0.55, t2); // 가로 배관
  const board = boxOf(M.prop, 0.16, 1.0, 0.7, -HW + 0.32, 0.5, -L * 0.24, t2);
  board.rotation.z = -0.12;                                           // 벽에 기대둔 입간판
  for (const [pz, h] of [[-L * 0.63, 0.34], [-L * 0.66, 0.28]] as Array<[number, number]>) {
    boxOf(M.prop, 0.42, h, 0.6, -HW + 0.34, h / 2, pz, t2);           // 묶어둔 폐지
  }

  // ---------- H-019 주인 없는 그림자 (밤 2, 직시) ----------
  // ⭐ **가장 밝은 자리를 배경으로 쓴다.** 실측이 알려준 것: 이 게임에서 대비가 나오는 곳은
  // 가로등이 만든 바닥 웅덩이 하나뿐이다. 거기에 **어두운 형상**을 놓으면 대비가 최대가 된다
  // (검은 형체를 어둠에 세워 0.6이 나오던 것과 정확히 반대의 수법).
  //
  // 무엇인가: 가로등 아래에 **사람 그림자만** 늘어져 있다. 그림자를 드리울 것이 아무것도 없다.
  // 이 게임에는 그림자 렌더링이 자체가 없으므로(castShadow 0) **그림자가 있다는 사실 자체가
  // 이 골목의 규칙 위반**이다 — 플레이어가 그걸 의식할 필요는 없다. 그냥 잘못돼 보인다.
  // 정물성 그대로: 움직이지 않는다. 늘어난 방향이 광원과 맞지 않는 것이 두 번째 단서다
  const loneShadow = new THREE.Group();
  const shadowMat = new THREE.MeshBasicMaterial({
    color: 0x04060b, transparent: true, opacity: 0.92, // 빛을 안 받는다 = 언제나 검다
  });
  // ⚠ 처음에는 골목 방향(z축)으로 눕혔더니 원근에 눌려 검은 얼룩이 됐다 (실측 대비 4).
  //   **빛을 가로질러(x축) 눕힌다** — 걸어오는 내내 전신이 그대로 보이고,
  //   광원이 오른쪽 벽에 붙어 있으므로 그림자가 왼쪽으로 뻗는 것이 물리적으로도 맞다
  const shBody = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 0.66), shadowMat);
  shBody.rotation.x = -Math.PI / 2;
  shBody.position.set(0.75, 0.02, -L * 0.45);
  const shHead = new THREE.Mesh(new THREE.CircleGeometry(0.3, 16), shadowMat);
  shHead.rotation.x = -Math.PI / 2;
  shHead.position.set(-0.5, 0.02, -L * 0.45);
  const shArm = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 0.24), shadowMat);
  shArm.rotation.x = -Math.PI / 2;
  shArm.rotation.z = -0.55;
  shArm.position.set(0.7, 0.02, -L * 0.417);
  loneShadow.add(shBody, shHead, shArm);
  loneShadow.visible = false;
  t2.add(loneShadow);

  return {
    group: t2,
    refs: {
      laundryShutter, laundryMat, laundryLight, storeSignMat, realtyMat, realtyTex, handprints,
      shutterGlowMat, shutterGlowSlitMat, shutterGlowLight, loneShadow,
    },
    hit: {
      laundry_open: [laundryShutter, laundryInterior],
      sign_lit: [storeSign],
      realty_urgent: [realty],
      handprints: [handprints],
      shutter_glow: [shutterGlow, shutterGlowSlit],
      lone_shadow: [loneShadow],
    },
  };
}
