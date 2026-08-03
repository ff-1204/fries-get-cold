// 테마 1 — 원룸 골목 (귀갓길의 마지막 구간 = 집). 하늘 실루엣은 전선이 만든다.
// 이상현상 배치 3원칙(anomalies.md): 광원 안쪽 · 관찰 시간 확보 · 실루엣 대비

import * as THREE from 'three';
import { type Build, type Theme1Refs } from '../refs';
import { box, boxOf, concrete, flyerTexture, faceTexture, type SharedMats } from '../kit';
import { L, HW } from '../layout';

type E = 'umbrella' | 'sensor_on' | 'window_red' | 'flyer_digits'
  | 'blood_trail' | 'skull' | 'face_window' | 'shoes' | 'bike_figure';

export function createTheme1(mats: SharedMats): Build<Theme1Refs, E> {
  const t1 = new THREE.Group();

  // H-001 바닥 핏자국 — 가로등(z=-16.2) 사거리 안, 통행부 한가운데를 가로질러
  // 빌라 철문(z=-7.9) 쪽 어둠으로 이어진다. 걷다 보면 밟게 되는 자리 (관찰 시간 확보)
  const bloodTrail = new THREE.Group();
  const trailSpots: Array<[number, number, number]> = [
    [0.55, -L * 0.31, 0.3], [0.2, -L * 0.345, 0.2], [-0.2, -L * 0.375, 0.26],
    [-0.6, -L * 0.4, 0.17], [-1.1, -L * 0.42, 0.22], [-1.6, -L * 0.435, 0.14],
  ];
  for (const [bx, bz, r] of trailSpots) {
    const spot = new THREE.Mesh(new THREE.CircleGeometry(r, 14), mats.blood);
    spot.rotation.x = -Math.PI / 2;
    spot.position.set(bx, 0.015, bz);
    bloodTrail.add(spot);
  }
  bloodTrail.visible = false;
  t1.add(bloodTrail);

  // H-002 배출장 위 백골 — 흰 두개골: 어두운 배경과의 실루엣 대비 (배치 3원칙)
  const skull = new THREE.Group();
  const boneMat = new THREE.MeshStandardMaterial({ color: 0xc9c2b0, roughness: 0.85 });
  const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), boneMat);
  cranium.position.y = 0.14;
  cranium.scale.set(1, 0.92, 1.08);
  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.09, 0.16), boneMat);
  jaw.position.set(0, -0.02, 0.04);
  const socketMat = new THREE.MeshStandardMaterial({ color: 0x0a0c12, roughness: 1 });
  for (const sx of [-0.062, 0.062]) {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 6), socketMat);
    socket.position.set(sx, 0.15, 0.145);
    skull.add(socket);
  }
  skull.add(cranium, jaw);
  skull.position.set(-HW + 0.8, 1.06, -L * 0.19); // 배출장 상단 박스(y0.85) 위
  skull.rotation.y = Math.PI / 6; // 길 쪽을 살짝 향한다 — 눈구멍이 보이는 각
  skull.visible = false;
  t1.add(skull);

  // H-003 창문의 얼굴 — 붉은 창(구 A-015) 자리. 내려다보는 창백한 얼굴
  const faceTex = faceTexture();
  const facePlane = new THREE.Mesh(
    new THREE.PlaneGeometry(1.0, 1.28),
    new THREE.MeshStandardMaterial({
      map: faceTex, emissiveMap: faceTex, emissive: 0x4a463c, // 유리 너머 어렴풋한 자체 발광 (식별 보장)
    }),
  );
  facePlane.position.set(HW - 0.03, 3.4, -L * 0.68);
  facePlane.rotation.y = -Math.PI / 2;
  facePlane.visible = false;
  t1.add(facePlane);

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

  // 과외 전단지 (오른쪽 벽, 가로등 사거리 안 — A-003: 전화번호 11→10자리)
  // 정상 상태가 상시 노출되어야 위반이 성립 (fear-cognition §1) — 밤 1부터 걸려 있다
  const flyerTex: [THREE.CanvasTexture, THREE.CanvasTexture] = [
    flyerTexture('010-4172-8956'),
    flyerTexture('010-417-8956'),
  ];
  const flyerMat = new THREE.MeshStandardMaterial({ map: flyerTex[0], roughness: 0.9 });
  const flyer = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.75), flyerMat);
  flyer.position.set(HW - 0.01, 1.55, -L * 0.4);
  flyer.rotation.y = -Math.PI / 2;
  t1.add(flyer);

  // 구조 차별화 — 전봇대·전선·실외기·빌라 철문 (원룸 골목의 하늘 실루엣은 전선이 만든다)
  box(0.24, 6.8, 0.24, 0x2c3244, HW - 0.35, 3.4, -L * 0.15, t1);
  box(0.24, 6.8, 0.24, 0x2c3244, -HW + 0.35, 3.4, -L * 0.72, t1);
  box(0.035, 0.035, L * 0.85, 0x11141d, HW - 0.35, 6.3, -L * 0.5, t1); // 골목을 따라가는 전선
  const wireDx = (HW - 0.35) - (-HW + 0.35);
  const wireDz = -L * 0.15 - -L * 0.72;
  const wire = box( // 전봇대 사이를 비스듬히 가로지르는 전선
    0.035, 0.035, Math.hypot(wireDx, wireDz), 0x11141d,
    0, 6.0, (-L * 0.15 + -L * 0.72) / 2, t1,
  );
  wire.rotation.y = Math.atan2(wireDx, wireDz);
  box(0.85, 0.6, 0.38, 0x2a3040, HW - 0.35, 2.5, -L * 0.58, t1);  // 실외기 (카메라 1.65 위)
  box(0.85, 0.6, 0.38, 0x262c3c, -HW + 0.35, 2.2, -L * 0.33, t1);
  box(0.12, 2.4, 1.5, 0x11151f, -HW + 0.05, 1.2, -L * 0.22, t1);  // 빌라 철문 (파인 어둠)
  box(0.2, 0.16, 1.9, 0x2c3244, -HW + 0.1, 2.5, -L * 0.22, t1);   // 문틀 상단

  // ---------- 밀도 (v0.11.34) — 가로등을 지나면 아무것도 없는 복도였다 ----------
  // 다세대 주택가의 문법으로 채운다: 가스 배관 · 계량기함 · 우편함 · 계단 입구 · 오토바이.
  // ⚠ 이상현상 자리는 비워 둔다 — 핏자국(z −0.31~−0.44L 바닥), 백골(배출장 −0.19L),
  //   얼굴(창문 x +HW, −0.68L), 우산(−0.24L), 센서등(−0.3L), 전단지(−0.4L)
  const M = {
    pipe: concrete(0x39415a), meter: concrete(0x2c3244), dark: concrete(0x11151f),
    prop: concrete(0x262c3e), paper: concrete(0x4a4a52),
  };
  // 가스 배관 — 원룸 골목의 시그니처. 세로로 올라가 가로로 벽을 탄다
  for (const [s, pz] of [[-1, -L * 0.52], [1, -L * 0.24], [-1, -L * 0.82]] as Array<[number, number]>) {
    boxOf(M.pipe, 0.14, 5.2, 0.14, s * (HW - 0.16), 2.6, pz, t1);
  }
  boxOf(M.pipe, 0.1, 0.1, L * 0.36, -HW + 0.16, 2.9, -L * 0.67, t1);
  boxOf(M.pipe, 0.1, 0.1, L * 0.3, HW - 0.16, 2.75, -L * 0.38, t1);

  // 두 번째 빌라 계단 입구 (오른쪽) — 철문 하나로는 '주택가'가 안 된다
  boxOf(M.dark, 0.12, 2.4, 1.5, HW - 0.05, 1.2, -L * 0.86, t1);
  boxOf(M.meter, 0.2, 0.16, 1.9, HW - 0.1, 2.5, -L * 0.86, t1);
  boxOf(M.meter, 0.16, 0.6, 0.9, HW - 0.12, 1.7, -L * 0.78, t1);    // 계량기함 묶음
  for (let i = 0; i < 4; i++) {                                      // 우편함 열
    boxOf(M.prop, 0.14, 0.26, 0.22, HW - 0.14, 1.45, -L * 0.75 + i * 0.28, t1);
  }
  // 왼쪽 문 옆에도 계량기 — 같은 동네의 같은 물건
  boxOf(M.meter, 0.16, 0.55, 0.8, -HW + 0.12, 1.75, -L * 0.29, t1);

  // 주차된 오토바이 (박스 조합 — 실루엣만) · 쓰레기 봉투 · 벽의 전단지 자국
  boxOf(M.prop, 0.42, 0.55, 1.5, HW - 0.42, 0.42, -L * 0.66, t1);   // 몸체
  boxOf(M.prop, 0.3, 0.35, 0.3, HW - 0.42, 0.9, -L * 0.62, t1);     // 핸들 뭉치
  boxOf(M.prop, 0.5, 0.42, 0.5, -HW + 0.35, 0.21, -L * 0.62, t1);   // 쓰레기 봉투
  boxOf(M.prop, 0.45, 0.38, 0.45, -HW + 0.38, 0.6, -L * 0.63, t1);
  for (const [s, fz, fy] of [[-1, -L * 0.72, 1.5], [1, -L * 0.48, 1.35],
    [-1, -L * 0.46, 1.9]] as Array<[number, number, number]>) {
    boxOf(M.paper, 0.02, 0.34, 0.24, s * (HW - 0.02), fy, fz, t1);  // 벽에 붙은 전단지
  }

  // ---------- H-010 계단 입구의 신발 한 켤레 (밤 3, 직시) ----------
  // 두 번째 빌라 계단 입구(-L*0.86) 앞. 가지런히 놓여 있다 — 정물성 그대로,
  // "누가 여기서 신발을 벗었나"만 남는다. 실루엣 대비: 어두운 문틀 앞의 밝은 것
  const shoes = new THREE.Group();
  for (const sx of [-0.11, 0.11]) {
    const shoe = boxOf(concrete(0xd8d4c8), 0.24, 0.11, 0.34, 0, 0.055, 0, shoes);
    shoe.position.x = sx;
  }
  shoes.position.set(HW - 0.55, 0, -L * 0.86 + 0.15);
  shoes.visible = false;
  t1.add(shoes);

  // ---------- H-013 오토바이에 걸터앉은 형체 (밤 4, 외면) ----------
  // 이미 거기 있던 오토바이(-L*0.66) 위에. **정상 사물이 자리를 내준다** —
  // 새 물건이 나타나는 것보다, 늘 있던 것 위에 있는 편이 더 어긋난다
  const bikeFigure = new THREE.Group();
  const bfB = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.72, 0.26), mats.darkFigure);
  bfB.position.y = 1.24;
  const bfH = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), mats.darkFigure);
  bfH.position.set(0, 1.74, 0.02);
  const bfL = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.5, 0.5), mats.darkFigure);
  bfL.position.set(0, 0.78, 0.24);            // 다리를 앞으로 내려놓았다
  bikeFigure.add(bfB, bfH, bfL);
  bikeFigure.position.set(HW - 0.42, 0, -L * 0.655);
  bikeFigure.visible = false;
  t1.add(bikeFigure);

  return {
    group: t1,
    refs: {
      umbrella, sensorMat, sensorLight, windowMat, flyerMat, flyerTex,
      bloodTrail, skull, facePlane, shoes, bikeFigure,
    },
    hit: {
      umbrella: [umbrella],
      sensor_on: [sensor],
      window_red: [windowMesh],
      flyer_digits: [flyer],
      blood_trail: [bloodTrail],
      skull: [skull],
      face_window: [facePlane],
      shoes: [shoes],
      bike_figure: [bikeFigure],
    },
  };
}
