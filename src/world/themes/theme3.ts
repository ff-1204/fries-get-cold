// 테마 3 — 놀이터 옆길. 이 구간만 하늘 쪽이 술렁인다 (담 너머 수목 실루엣).

import * as THREE from 'three';
import { type Build, type Theme3Refs } from '../refs';
import { box, type SharedMats } from '../kit';
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

  // 구조 차별화 — 담 너머 수목 실루엣·펜스 연장·주택 철문 (이 구간만 하늘 쪽이 술렁인다)
  for (const [tz, s] of [[-L * 0.25, 1.6], [-L * 0.42, 2.0], [-L * 0.58, 1.5]] as Array<[number, number]>) {
    const tree = new THREE.Mesh(
      new THREE.SphereGeometry(1, 7, 5),
      new THREE.MeshStandardMaterial({ color: 0x131a28, roughness: 1 }),
    );
    tree.scale.set(s, s * 0.75, s);
    tree.position.set(-HW - 1.4, WALL_H + 0.6, tz);
    t3.add(tree);
  }
  for (const fz of [-L * 0.21, -L * 0.265, -L * 0.54, -L * 0.595]) {
    box(0.07, 0.85, 1.7, 0x323a52, -HW + 0.85, 0.45, fz, t3); // 펜스 연장
  }
  box(0.05, 0.06, L * 0.42, 0x3a4460, -HW + 0.85, 0.88, -L * 0.4, t3); // 펜스 상부 레일
  box(0.1, 2.2, 1.3, 0x171c2a, HW - 0.05, 1.1, -L * 0.7, t3); // 주택 철문

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
