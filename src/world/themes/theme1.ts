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

  // ---------- ⭐ 재질 한 벌 (v0.11.69 — 퇴근길4 원칙 ⑥⑨) ----------
  // ⚠⚠ **선언이 파일 중반에 있었고, 그 위의 물건들이 색을 하드코딩하고 있었다** —
  //   배출장·전봇대·문틀·실외기·센서등이 전부 리터럴이었다. 테마 3에서 정확히 같은 구조가
  //   사고를 냈다(펜스가 두 색으로 갈려 H-020이 64.1 → 55.8). 여기서는 그 전에 올린다.
  //
  // ⭐ 중성화의 규칙은 **휘도를 유지한 채 색상만 돌리는 것**이다 (테마 3에서 그네 프레임이
  //   6% 어두워져 H-005가 따라 내려갔다). 아래 값은 전부 원래 휘도(±1)를 맞춰 잡았다:
  //     0x39415a→65.1/66.8 · 0x2c3244→50.1/51.1 · 0x11151f→20.8/21.2 · 0x262c3e→44.1/45.0
  //     0x2a3142→48.7/49.0 · 0x252c3d→43.8/44.2 · 0x2a3040→47.8/48.1 · 0x1c2230→33.8/34.0
  // ⚠ **창문·우산·신발은 건드리지 않는다** — 이상현상의 대상이거나 몸이다 (원칙 ⑩)
  // ⚠⚠ **첫 값이 전부 1~2% 밝았다** — "휘도 유지"라고 적어 놓고 반올림을 위로만 했다.
  //   H-010(계단 앞 신발)이 54.4 → 48.5로 내려갔다: 신발은 `0xd8d4c8`로 아주 밝은 물건이라
  //   **배경이 조금만 밝아져도 대비가 크게 준다**(대비는 배경에 반비례한다).
  //   ⭐ 어두운 화면에서 밝은 대상을 쓰는 이상현상 옆에서는 **1%도 반올림하지 않는다.**
  const M = {
    pipe: concrete(0x3e4148),   // 가스 배관 — 원룸 골목의 시그니처   (65.1 → 64.9)
    meter: concrete(0x303239),  // 계량기함·문틀·전봇대               (50.1 → 50.1)
    dark: concrete(0x141418),   // 파인 어둠 (철문 안쪽·계단 입구)     (20.8 → 20.3)
    prop: concrete(0x2a2c32),   // 오토바이·봉투·우편함               (44.1 → 44.0)
    paper: concrete(0x4a4a4e),  // 벽에 붙은 전단지 자국              (74.5 → 74.3)
    bin: concrete(0x2f3037),    // 재활용 배출장                      (48.7 → 48.3)
    binTop: concrete(0x2a2c31), //                                    (43.8 → 43.9)
    ac: concrete(0x2e3036),     // 실외기                             (47.8 → 48.0)
    sensor: concrete(0x202227), // 센서등 몸체                        (33.8 → 33.9)
    wire: concrete(0x131417),   // 전선
  };

  // H-001 바닥 핏자국 — **가로등 불빛을 가로지른다** (v0.11.49).
  // 예전에는 z −11~−15.7 · x +0.55~−1.6이라 가로등(x 2.1, z −16.2) 반대편 어둠에 있었다.
  // 젖은 재질로 바꿔도 비출 빛이 없으면 소용이 없다 — **광원 쪽에서 시작해** 어둠으로 끌려간다.
  // 밝은 자리에서 번들거리다가 어둠으로 사라지는 편이 무섭기도 하다: 끝이 안 보인다
  const bloodTrail = new THREE.Group();
  const trailSpots: Array<[number, number, number]> = [
    [2.05, -L * 0.455, 0.34], [1.5, -L * 0.45, 0.28], [0.95, -L * 0.443, 0.3],
    [0.4, -L * 0.432, 0.24], [-0.15, -L * 0.425, 0.27], [-0.75, -L * 0.415, 0.2],
    [-1.35, -L * 0.408, 0.23], [-1.9, -L * 0.4, 0.15],
  ];
  for (const [bx, bz, r] of trailSpots) {
    const spot = new THREE.Mesh(new THREE.CircleGeometry(r, 14), mats.blood);
    spot.rotation.x = -Math.PI / 2;
    spot.position.set(bx, 0.015, bz);
    bloodTrail.add(spot);
  }
  // 벽으로 이어지는 세로 자국 — **바닥만으로는 멀리서 안 읽힌다.** 눈높이 1.65m에서
  // 15m 밖 바닥 데칼은 거의 선으로 뭉갠다. 벽에 선 자국은 거리와 무관하게 서 있다.
  //
  // ⚠⚠ **가로등 반대쪽 벽에 붙어 있었다** (v0.11.57 부품별 실측). 자국 휘도 2.7인데
  //   그 둘레 벽도 6.8 — 둘 다 검어서 대비가 4.0뿐이었다. 세로 요소를 준 것까지는 맞았는데
  //   **빛이 없는 면에 줬다.** 가로등은 오른쪽(x +2.1)이다.
  //   ⭐ 끌린 방향은 그대로 두고(오른쪽 밝은 데서 시작해 왼쪽 어둠으로 사라진다)
  //   **세로 자국만 시작점 쪽 벽으로** 옮긴다 — 무언가 벽에서 끌려 나온 자리가 된다
  // ⚠ 폭은 **z 방향**이다 (벽면이라 화면에서는 세로띠의 두께가 된다). 0.62m는 13px밖에
  //   안 잡혀 평균이 배경에 먹혔다 — 넓게 문질러야 멀리서도 면으로 읽힌다
  const smear = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 2.5), mats.bloodWall);
  smear.position.set(HW - 0.06, 1.15, -L * 0.458);
  smear.rotation.y = -Math.PI / 2;
  bloodTrail.add(smear);
  bloodTrail.visible = false;
  t1.add(bloodTrail);

  // H-002 배출장 위 백골 — 흰 두개골: 어두운 배경과의 실루엣 대비 (배치 3원칙)
  const skull = new THREE.Group();
  // ⚠ 배출장(z −6.8, 왼쪽)은 **가로등(z −16.2, 오른쪽)에서 9m 밖**이다 — 뼈처럼 밝은 색도
  //   비출 빛이 없으면 어둡다. 아주 옅은 발광을 준다 (mats.pale과 같은 수위):
  //   뼈가 스스로 빛나는 것이 아니라 **어둠 속에서도 흰 것은 희게 보인다**는 쪽에 가깝다
  const boneMat = new THREE.MeshStandardMaterial({
    color: 0xd6cfbc, roughness: 0.85, emissive: 0x171610, flatShading: true,
  });
  const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), boneMat);
  cranium.position.y = 0.14;
  cranium.scale.set(1, 0.92, 1.08);
  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.09, 0.16), boneMat);
  jaw.position.set(0, -0.02, 0.04);
  const socketMat = new THREE.MeshStandardMaterial({ color: 0x0a0c12, roughness: 1, flatShading: true });
  for (const sx of [-0.062, 0.062]) {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 6), socketMat);
    socket.position.set(sx, 0.15, 0.145);
    skull.add(socket);
  }
  skull.add(cranium, jaw);
  skull.position.set(-HW + 0.8, 1.06, -L * 0.33); // 배출장 상단 박스(y0.85) 위
  // ⚠ 대비는 18.1로 넉넉한데 **6.6m에서야** 나왔다 — 밝기가 아니라 **각크기**가 문제다.
  //   두개골은 원래 작으니 키우는 데 한계가 있어, 통째로 한 단 키우고 앞으로 내민다
  skull.scale.setScalar(1.38);
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
  // ⚠⚠ **8m 밖에서 볼 수 없는 자리에 있었다** (v0.11.57). 배출장이 구간 입구에서 6.8m라
  //   플레이어가 아무리 멀리 서도 6.3m가 최대였다 — 백골의 목표 미달은 밝기가 아니라
  //   **배치**의 문제였다. 밝기만 만지며 세 번 재는 동안 이걸 못 봤다.
  //   구간 중반으로 물린다: 걸어오는 내내 보이는 자리가 된다
  boxOf(M.bin, 1.6, 0.5, 1.0, -HW + 1.0, 0.25, -L * 0.34, t1);
  boxOf(M.binTop, 0.7, 0.35, 0.6, -HW + 0.8, 0.85, -L * 0.33, t1);

  // 우산 (배출장 옆 — A-001, 기본 숨김)
  const umbrella = new THREE.Group();
  const stick = box(0.06, 1.3, 0.06, 0x555b70, 0, 0.65, 0, umbrella);
  stick.rotation.z = 0.5;
  const cap = new THREE.Mesh(
    new THREE.ConeGeometry(0.55, 0.5, 8),
    new THREE.MeshStandardMaterial({ color: 0x6b1520, roughness: 0.8, flatShading: true }),
  );
  cap.position.set(-0.35, 1.35, 0);
  cap.rotation.z = 0.5;
  umbrella.add(cap);
  umbrella.position.set(-HW + 1.8, 0, -L * 0.38);
  umbrella.visible = false;
  t1.add(umbrella);

  // 빌라 계단 센서등 (A-002 — 정상: 꺼짐 / 이상: 계속 켜짐)
  const sensor = boxOf(M.sensor, 0.45, 0.22, 0.16, -HW + 0.12, 1.7, -L * 0.3, t1);
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
  boxOf(M.meter, 0.24, 6.8, 0.24, HW - 0.35, 3.4, -L * 0.15, t1);
  boxOf(M.meter, 0.24, 6.8, 0.24, -HW + 0.35, 3.4, -L * 0.72, t1);
  boxOf(M.wire, 0.035, 0.035, L * 0.85, HW - 0.35, 6.3, -L * 0.5, t1); // 골목을 따라가는 전선
  const wireDx = (HW - 0.35) - (-HW + 0.35);
  const wireDz = -L * 0.15 - -L * 0.72;
  const wire = boxOf( // 전봇대 사이를 비스듬히 가로지르는 전선
    M.wire, 0.035, 0.035, Math.hypot(wireDx, wireDz),
    0, 6.0, (-L * 0.15 + -L * 0.72) / 2, t1,
  );
  wire.rotation.y = Math.atan2(wireDx, wireDz);
  boxOf(M.ac, 0.85, 0.6, 0.38, HW - 0.35, 2.5, -L * 0.58, t1);  // 실외기 (카메라 1.65 위)
  boxOf(M.ac, 0.85, 0.6, 0.38, -HW + 0.35, 2.2, -L * 0.33, t1);
  boxOf(M.dark, 0.12, 2.4, 1.5, -HW + 0.05, 1.2, -L * 0.22, t1);  // 빌라 철문 (파인 어둠)
  boxOf(M.meter, 0.2, 0.16, 1.9, -HW + 0.1, 2.5, -L * 0.22, t1);  // 문틀 상단

  // ---------- 밀도 (v0.11.34) — 가로등을 지나면 아무것도 없는 복도였다 ----------
  // 다세대 주택가의 문법으로 채운다: 가스 배관 · 계량기함 · 우편함 · 계단 입구 · 오토바이.
  // ⚠ 이상현상 자리는 비워 둔다 — 핏자국(z −0.31~−0.44L 바닥), 백골(배출장 −0.19L),
  //   얼굴(창문 x +HW, −0.68L), 우산(−0.24L), 센서등(−0.3L), 전단지(−0.4L)
  // (재질 `M`은 파일 맨 위에 있다 — 배출장·전봇대·문틀이 그것보다 먼저 서기 때문이다)

  // ---------- ⭐ 가스 배관 — **이 골목의 정체성** (v0.11.69, 원칙 ①) ----------
  // 다세대 주택가를 다세대 주택가로 만드는 것은 **외벽을 타고 내려오는 배관**이다.
  // 세로관 셋 + 가로관 둘이 서로 안 닿은 채 흩어져 있어 "파이프 몇 개"로만 읽혔다 —
  // ⭐ **분기를 만든다**: 세로관에서 가로관이 나오고, 그 끝이 계량기함으로 내려온다.
  //   이음쇠(엘보)와 벽 고정 밴드까지 있으면 배관 한 벌이 **하나의 계통**으로 읽힌다.
  // ⚠ 치수는 관 굵기 `PIPE`에서 파생시킨다 (원칙 ⑤) — 굵기를 바꾸면 이음쇠가 따라온다
  const PIPE = 0.14;
  const riser = (s: 1 | -1, pz: number, drop: number) => {
    const x = s * (HW - PIPE * 1.15);
    boxOf(M.pipe, PIPE, 5.2, PIPE, x, 2.6, pz, t1);                       // 세로관
    for (const by of [1.35, 3.1, 4.6]) {                                  // 벽 고정 밴드
      boxOf(M.meter, PIPE * 0.6, PIPE * 1.5, PIPE * 2.2, s * (HW - PIPE * 0.4), by, pz, t1);
    }
    if (drop === 0) return;
    // 가로로 갈라져 나가는 지관 + 끝의 이음쇠
    const runZ = pz + drop / 2;
    boxOf(M.pipe, PIPE * 0.72, PIPE * 0.72, Math.abs(drop), x, 2.9, runZ, t1);
    boxOf(M.pipe, PIPE, PIPE, PIPE, x, 2.9, pz, t1);                      // 엘보 (분기점)
    boxOf(M.pipe, PIPE * 0.72, 1.15, PIPE * 0.72, x, 2.32, pz + drop, t1); // 계량기로 내려간다
    boxOf(M.meter, PIPE * 1.3, 0.5, 0.42, s * (HW - PIPE), 1.6, pz + drop, t1);
  };
  riser(-1, -L * 0.52, -L * 0.15);
  riser(1, -L * 0.24, -L * 0.14);
  riser(-1, -L * 0.82, 0);

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
  // ⭐ **손만 하얗다.** 실측에서 이 형체는 접근 내내 대비 2.0 — 검은 실루엣을 어둠에 세워
  // 배경과 함께 0으로 붕괴한 것이다(가로등 −0.45L에서 7m 밖). 형체를 밝히면 정체가 사라지므로
  // **창백한 부분을 하나만** 붙인다: 핸들을 잡은 두 손. 펜스의 손(H-020)이 대비 55로
  // 증명한 수법이고, "얼굴은 안 보이는데 손은 보인다"가 더 무섭기도 하다
  // (재질은 v0.11.57에 `mats.pale`로 올라갔다 — 형체 넷이 같은 살색을 쓴다)
  for (const hx of [-0.17, 0.17]) {
    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.11, 0.15), mats.pale);
    hand.position.set(hx, 1.16, 0.3);           // 핸들 뭉치(y 0.9~1.2) 위
    bikeFigure.add(hand);
  }
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
