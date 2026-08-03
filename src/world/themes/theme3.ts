// 테마 3 — 놀이터 옆길. 이 구간만 하늘 쪽이 술렁인다 (담 너머 수목 실루엣).

import * as THREE from 'three';
import { type Build, type Theme3Refs } from '../refs';
import { box, boxOf, concrete, type SharedMats } from '../kit';
import { L, HW, WALL_H, BALL_HOME } from '../layout';

type E = 'swing' | 'ball_out' | 'swing_figure' | 'eyes';

export function createTheme3(mats: SharedMats): Build<Theme3Refs, E> {
  const t3 = new THREE.Group();

  // 낮은 철제 펜스 (왼쪽)
  for (const fz of [-L * 0.32, -L * 0.375, -L * 0.43, -L * 0.485]) {
    box(0.07, 0.85, 1.7, 0x323a52, -HW + 0.85, 0.45, fz, t3);
  }

  // 그네 (펜스 너머 — A-007: 혼자 흔들림)
  // 프레임 x=-2.78 — 통행 한계(-2.6) 밖. -2.5일 때는 기둥을 몸으로 통과할 수 있었다
  box(0.1, 2.3, 0.1, 0x3a4157, -HW + 0.22, 1.15, -L * 0.365, t3);
  box(0.1, 2.3, 0.1, 0x3a4157, -HW + 0.22, 1.15, -L * 0.42, t3);
  box(0.08, 0.08, 2.2, 0x3a4157, -HW + 0.22, 2.3, -L * 0.393, t3);
  const swingPivot = new THREE.Group();
  swingPivot.position.set(-HW + 0.22, 2.26, -L * 0.393);
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

  // H-005 그네에 앉은 형체 — 흔들리지 않는다. 그게 더 이상하다
  const swingFigure = new THREE.Group();
  const sfBody = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.62, 0.26), mats.darkFigure);
  sfBody.position.y = 1.12;
  const sfHead = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), mats.darkFigure);
  sfHead.position.set(0.05, 1.56, 0); // 고개를 약간 떨군 실루엣
  const sfLegs = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.52, 0.16), mats.darkFigure);
  sfLegs.position.set(0.2, 0.56, 0);
  sfLegs.rotation.z = 0.25;
  swingFigure.add(sfBody, sfHead, sfLegs);
  swingFigure.position.set(-HW + 0.22, 0, -L * 0.393); // 그네 좌판 위
  swingFigure.visible = false;
  t3.add(swingFigure);

  // H-006 펜스 뒤 어둠의 눈 — 펜스와 왼쪽 벽 사이 어두운 띠, 눈높이.
  // 스스로 어렴풋이 빛난다 (배치 3원칙: 자체 발광이 가장 확실)
  const eyes = new THREE.Group();
  const eyeMat = new THREE.MeshStandardMaterial({
    color: 0x0b0e16, emissive: 0x8f96ac, emissiveIntensity: 0.9,
  });
  for (const exOff of [-0.09, 0.09]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), eyeMat);
    eye.position.x = exOff;
    eyes.add(eye);
  }
  eyes.position.set(-HW + 0.38, 1.42, -L * 0.55);
  eyes.visible = false;
  t3.add(eyes);

  // 구조 차별화 — 담 너머 수목 실루엣 (이 구간만 하늘 쪽이 술렁인다)
  const treeMat = new THREE.MeshStandardMaterial({ color: 0x131a28, roughness: 1 });
  for (const [tz, s] of [[-L * 0.25, 1.6], [-L * 0.42, 2.0], [-L * 0.58, 1.5],
    [-L * 0.78, 1.8]] as Array<[number, number]>) {
    const tree = new THREE.Mesh(new THREE.SphereGeometry(1, 7, 5), treeMat);
    tree.scale.set(s, s * 0.75, s);
    tree.position.set(-HW - 1.4, WALL_H + 0.6, tz);
    t3.add(tree);
  }

  // ---------- 밀도 (v0.11.34) — 가로등을 지나면 아무것도 없는 복도였다 ----------
  const M = {
    fence: concrete(0x323a52), rail: concrete(0x3a4460),
    gear: concrete(0x2a3350),   // 놀이기구 — 담 너머 실루엣
    wall2: concrete(0x1f2534),  // 주택 담장 물건
    dark: concrete(0x171c2a),
    prop: concrete(0x262c3e),
  };

  // **놀이터가 보여야 '놀이터 옆길'이다.** 펜스와 벽 사이는 0.85m뿐이라 기구를 넣을 수 없다 —
  // 담 너머 하늘에 실루엣으로 세운다 (수목과 같은 수법). 미끄럼틀·정글짐 윗부분만
  boxOf(M.gear, 0.12, 2.6, 0.12, -HW - 2.2, WALL_H + 0.6, -L * 0.34, t3);   // 미끄럼틀 기둥
  boxOf(M.gear, 1.9, 0.12, 0.9, -HW - 2.9, WALL_H + 1.7, -L * 0.34, t3);    // 미끄럼틀 지붕
  const slide = boxOf(M.gear, 2.6, 0.1, 0.7, -HW - 3.4, WALL_H + 0.5, -L * 0.34, t3);
  slide.rotation.z = 0.5;                                                    // 미끄럼판
  for (const gz of [-L * 0.62, -L * 0.7]) {                                  // 정글짐 격자
    boxOf(M.gear, 0.09, 1.8, 0.09, -HW - 2.0, WALL_H + 0.3, gz, t3);
    boxOf(M.gear, 0.09, 1.8, 0.09, -HW - 3.4, WALL_H + 0.3, gz, t3);
  }
  for (const gy of [WALL_H - 0.5, WALL_H + 0.4, WALL_H + 1.2]) {
    boxOf(M.gear, 1.5, 0.09, 0.09, -HW - 2.7, gy, -L * 0.66, t3);
  }

  // 펜스 — 전 구간으로 늘린다 (예전에는 그네 앞 몇 칸뿐이라 담이 끊겨 보였다)
  for (const fz of [-L * 0.15, -L * 0.21, -L * 0.265, -L * 0.54, -L * 0.595,
    -L * 0.65, -L * 0.72, -L * 0.79, -L * 0.86]) {
    boxOf(M.fence, 0.07, 0.85, 1.7, -HW + 0.85, 0.45, fz, t3);
  }
  boxOf(M.rail, 0.05, 0.06, L * 0.78, -HW + 0.85, 0.88, -L * 0.5, t3);       // 펜스 상부 레일

  // 펜스 안쪽 좁은 띠 — 벤치·쓰레기통 (그네·눈 자리를 피한다)
  boxOf(M.prop, 0.5, 0.1, 1.6, -HW + 0.5, 0.45, -L * 0.24, t3);             // 벤치 좌판
  for (const bz of [-L * 0.215, -L * 0.265]) {
    boxOf(M.prop, 0.45, 0.45, 0.08, -HW + 0.5, 0.22, bz, t3);
  }
  boxOf(M.prop, 0.42, 0.7, 0.42, -HW + 0.45, 0.35, -L * 0.75, t3);          // 쓰레기통

  // 오른쪽 — **통째로 비어 있던 벽**. 주택 담장의 문법으로 채운다
  boxOf(M.dark, 0.1, 2.2, 1.3, HW - 0.05, 1.1, -L * 0.7, t3);               // 주택 철문
  boxOf(M.wall2, 0.16, 0.2, 1.6, HW - 0.12, 2.3, -L * 0.7, t3);             // 문 위 처마
  boxOf(M.wall2, 0.14, 0.5, 0.4, HW - 0.1, 1.5, -L * 0.58, t3);             // 계량기함
  for (const pz of [-L * 0.3, -L * 0.38, -L * 0.46]) {                       // 담 위 화분
    boxOf(M.prop, 0.34, 0.3, 0.34, HW - 0.25, 2.3, pz, t3);
    boxOf(M.gear, 0.3, 0.34, 0.3, HW - 0.25, 2.6, pz, t3);
  }
  boxOf(M.wall2, 0.5, 0.16, L * 0.5, HW - 0.3, 2.12, -L * 0.4, t3);         // 담장 갓돌
  boxOf(M.prop, 0.3, 0.75, 0.3, HW - 0.25, 0.37, -L * 0.86, t3);            // 라바콘
  boxOf(M.wall2, 0.12, 1.1, 0.5, HW - 0.08, 1.6, -L * 0.86, t3);            // 우편함 기둥

  return {
    group: t3,
    refs: { swingPivot, ball, swingFigure, eyes },
    hit: {
      swing: [swingPivot],
      ball_out: [ball],
      swing_figure: [swingFigure],
      eyes: [eyes],
    },
  };
}
