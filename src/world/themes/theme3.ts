// 테마 3 — 놀이터 옆길. 이 구간만 하늘 쪽이 술렁인다 (담 너머 수목 실루엣).

import * as THREE from 'three';
import { type Build, type Theme3Refs } from '../refs';
import { boxOf, concrete, type SharedMats } from '../kit';
import { L, HW, WALL_H, BALL_HOME } from '../layout';

type E = 'swing' | 'ball_out' | 'swing_figure' | 'eyes' | 'slide_figure' | 'fence_hands';

export function createTheme3(mats: SharedMats): Build<Theme3Refs, E> {
  const t3 = new THREE.Group();

  // ---------- ⭐ 색 (v0.11.68 — 퇴근길4 원칙 ⑥) ----------
  // ⚠ 전부 파란 기가 있어 골목 벽(0x232838)과 한 덩어리였다 — 테마 2와 같은 교정이다.
  //   ⭐ 다만 **놀이기구만 예외로 밝게** 간다: 저것은 밤하늘(0x0a0e1a)을 배경으로 서는
  //     유일한 물건이라 어두우면 하늘과 함께 0으로 붕괴한다 (아래 '보이게 만든다' 절)
  //
  // ⚠⚠ **선언을 파일 맨 위로 올렸다.** 펜스 첫 4칸과 그네가 `M` 아래에 있으면서도
  //   색을 **하드코딩**하고 있었다(`0x323a52` `0x3a4157` `0x555b70`). 그래서 `M`만
  //   중성화하자 **같은 펜스가 두 색으로 갈렸고**, H-020(펜스를 잡은 손)의 배경이 섞여
  //   실측이 64.1 → 55.8로 내려갔다. 원칙 ⑨(재질 한 벌 공유)를 어기면 이렇게 새어 나온다
  const M = {
    fence: concrete(0x33363d), rail: concrete(0x40444c),
    // ⚠ 그네 프레임은 **휘도를 맞춰서** 중성화한다(≈65). 색상만 돌린 첫 값(0x3a3d44)이
    //   6% 어두웠는데, H-005(그네에 앉은 형체)의 배경이 바로 이 프레임이라 실측이
    //   52.1 → 49.0으로 따라 내려갔다 — **중성화의 목적은 파란 기를 빼는 것이지 어둡게 하는 것이 아니다**
    swing: concrete(0x3e4148),  // 그네 프레임 — 펜스와 같은 철제
    rope: concrete(0x565962),   // 그네 줄·좌판
    gear: concrete(0x2c2f35),   // 담 위 화분의 식물 등 — 어두운 채로 둔다
    play: concrete(0x565b64),   // ⭐ 놀이기구 — 보안등을 받아 하늘에 실루엣을 낸다
    wall2: concrete(0x212328),  // 주택 담장 물건
    dark: concrete(0x191a1e),
    prop: concrete(0x282a30),
  };

  // 낮은 철제 펜스 (왼쪽)
  for (const fz of [-L * 0.32, -L * 0.375, -L * 0.43, -L * 0.485]) {
    boxOf(M.fence, 0.07, 0.85, 1.7, -HW + 0.85, 0.45, fz, t3);
  }

  // 그네 (펜스 너머 — A-007: 혼자 흔들림)
  // 프레임 x=-2.78 — 통행 한계(-2.6) 밖. -2.5일 때는 기둥을 몸으로 통과할 수 있었다
  boxOf(M.swing, 0.1, 2.3, 0.1, -HW + 0.22, 1.15, -L * 0.365, t3);
  boxOf(M.swing, 0.1, 2.3, 0.1, -HW + 0.22, 1.15, -L * 0.42, t3);
  boxOf(M.swing, 0.08, 0.08, 2.2, -HW + 0.22, 2.3, -L * 0.393, t3);
  const swingPivot = new THREE.Group();
  swingPivot.position.set(-HW + 0.22, 2.26, -L * 0.393);
  boxOf(M.rope, 0.03, 1.5, 0.03, 0, -0.75, -0.22, swingPivot);
  boxOf(M.rope, 0.03, 1.5, 0.03, 0, -0.75, 0.22, swingPivot);
  boxOf(M.rope, 0.14, 0.06, 0.55, 0, -1.5, 0, swingPivot);
  t3.add(swingPivot);

  // 공 (A-009 — 정상: 펜스 안쪽 / 이상: 길 한가운데)
  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(0.28, 12, 10),
    new THREE.MeshStandardMaterial({ color: 0x6d7488, roughness: 0.85, flatShading: true }),
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
  // ⭐ **줄을 잡은 두 손** (v0.11.57) — 실측 대비 6.4. 놀이터 보안등을 세워도(v0.11.49)
  // 검은 실루엣이 어두운 담을 배경으로 서면 거기까지가 한계였다.
  // 흔들리지 않는 그네를 **잡고 있는** 손이라 정지의 이유까지 설명한다
  for (const hx of [-0.19, 0.19]) {
    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.13, 0.1), mats.pale);
    hand.position.set(hx, 1.3, 0.02);   // 좌판 위, 줄을 쥔 높이
    swingFigure.add(hand);
  }
  swingFigure.add(sfBody, sfHead, sfLegs);
  swingFigure.position.set(-HW + 0.22, 0, -L * 0.393); // 그네 좌판 위
  swingFigure.visible = false;
  t3.add(swingFigure);

  // H-006 펜스 뒤 어둠의 눈 — 펜스와 왼쪽 벽 사이 어두운 띠, 눈높이.
  // 스스로 어렴풋이 빛난다 (배치 3원칙: 자체 발광이 가장 확실)
  const eyes = new THREE.Group();
  const eyeMat = new THREE.MeshStandardMaterial({
    color: 0x0b0e16, emissive: 0x8f96ac, emissiveIntensity: 0.9, flatShading: true,
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
  // 담 너머 수목은 구를 눌러 만든다 — flatShading이 각진 잎덩어리 실루엣을 준다
  // ⚠ 수목은 **어두운 채로 둔다** — 나무는 밤에 검은 것이 맞고, 밝히면 놀이기구와
  //   같은 무게가 되어 하늘의 실루엣이 둘로 갈린다. 파란 기만 뺀다 (원칙 ⑥).
  // ⚠⚠ 다만 **높이는 같은 계산에 걸린다**: x −4.4에서 시선 높이는 1.65 + 4.4×1.783 = 9.5m인데
  //   꼭대기가 9.1m라 윗동만 겨우 나왔다 (front 스크린샷의 그 어렴풋한 덩어리).
  //   담 쪽으로 당겨(−3.9) 시선 높이를 8.6으로 낮춘다 — 잎덩어리가 하늘을 물고 올라온다
  const treeMat = new THREE.MeshStandardMaterial({ color: 0x171a1f, roughness: 1, flatShading: true });
  for (const [tz, s] of [[-L * 0.25, 1.6], [-L * 0.42, 2.0], [-L * 0.58, 1.5],
    [-L * 0.78, 1.8]] as Array<[number, number]>) {
    const tree = new THREE.Mesh(new THREE.SphereGeometry(1, 7, 5), treeMat);
    tree.scale.set(s, s * 0.75, s);
    tree.position.set(-HW - 0.9, WALL_H + 1.1, tz);
    t3.add(tree);
  }

  // ---------- 밀도 (v0.11.34) — 가로등을 지나면 아무것도 없는 복도였다 ----------
  // (재질 `M`은 파일 맨 위에 있다 — 펜스·그네가 그것보다 먼저 서기 때문이다)

  // ---------- 놀이터 보안등 (v0.11.49) ----------
  // ⭐ **형체가 안 보여서 넣는다.** 실측: 그네의 형체 대비 0.6~1.8, 담 위 형체 6.3 —
  // 검은 실루엣인데 뒤에 밝은 것이 없어 배경과 함께 0으로 붕괴했다.
  // 정류장의 형체(H-007)만 대비 24가 나왔는데, 부스가 제 형광등을 가진 덕이었다.
  //
  // 형체를 밝히면 '검은 실루엣'이라는 정체가 사라진다. **뒤에서 비춘다** —
  // 담 너머 놀이터의 보안등이 그 자리를 맡는다. 실제 놀이터에 있는 물건이고,
  // 그네도 담 위도 이 빛과 플레이어 사이에 있어 **가려서 검게 뚫린 사람 모양**이 된다.
  // 한색(방범등)이라 웜 10% 원칙을 건드리지 않는다 — 웜은 목표(가게·집) 전용이다
  // ⚠ 그림자 렌더링이 없으므로(castShadow 0) 빛은 담을 통과한다 — 담 너머에 세워도
  //   골목 쪽 띠가 밝아진다. 대신 **광원을 형체보다 뒤(−z)에** 둬야 실루엣이 선다:
  //   형체의 카메라 쪽 면은 광원을 등져 어둡게 남고, 그 뒤 벽·펜스만 밝아진다
  // ⭐ **둘이다** (v0.11.68). 하나(−L*0.5)로는 구간 후반이 테마 2와 같은 암흑이었다.
  //   놀이터에 보안등이 둘인 것은 자연스럽고, 뒤쪽 것이 **정글짐(−L*0.62~0.7)을 비춘다** —
  //   담 위 구조물이 그냥 검은 막대가 아니라 형태로 읽히는 것은 이 빛 덕이다.
  // ⚠⚠ **자리는 H-006이 정한다.** 어둠의 눈(−L*0.55)이 사는 띠를 씻으면 그 이상현상이 죽는다
  //   — 뒤쪽 등을 −L*0.78에 두어 8.3m 떼고, 사거리 12·decay 2로 묶었다 (실측으로 확인).
  // ⚠ 재질·치수는 한 벌을 공유한다 (원칙 ⑨) — 둘이 다르게 생기면 같은 놀이터가 아니다
  const headMat = new THREE.MeshStandardMaterial({
    color: 0x2f333a, roughness: 0.6, emissive: 0x35486a, // 등기구 자체도 옅게 빛난다
  });
  const yardLamp = (lz: number, intensity: number, range: number) => {
    const pole = boxOf(M.gear, 0.13, 4.6, 0.13, -HW - 1.7, 2.3, lz, t3);
    pole.name = '놀이터 보안등';
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.18, 0.44), headMat);
    head.position.set(-HW - 1.7, 4.55, lz);
    t3.add(head);
    // 한색·근거리 — 골목 전체를 밝히지 않는다
    const light = new THREE.PointLight(0x9fb6d8, intensity, range, 2);
    light.position.set(-HW - 1.4, 4.2, lz);
    t3.add(light);
  };
  yardLamp(-L * 0.5, 6.5, 12);
  // ⚠⚠ **뒤쪽 등은 약하고 짧다.** 앞쪽과 같은 값(6.5·12)으로 켰더니 정글짐과 **같은 자리**에 있는
  //   H-020의 뒤쪽 손 둘(−L*0.62·0.665)의 배경이 밝아져 실측이 64.2 → 59.9로 내려갔다
  //   (H-005도 53.6 → 47.1). 정글짐을 비추려면 그 근처에 있어야 하므로 자리는 못 옮긴다 —
  //   ⭐ **세기로 값을 치른다**: 담 위(y 7+)의 구조물을 훑을 만큼만 남기고 바닥까지는 안 내려온다
  yardLamp(-L * 0.78, 4.2, 9);

  // ---------- ⭐⭐ 놀이터를 **보이게** 만든다 (v0.11.68) ----------
  // **놀이터가 보여야 '놀이터 옆길'이다.** 펜스와 벽 사이는 0.85m뿐이라 기구를 넣을 수 없어
  // 담 너머 하늘에 실루엣으로 세우는데 — ⚠⚠ **그게 담 뒤에 완전히 숨어 있었다.**
  //
  // 계산이 바로 나온다: 카메라 y 1.65에서 담(x −3.0 · 높이 7)의 모서리를 스치는 시선의
  // 기울기는 (7 − 1.65) / 3.0 = **1.783**이다. 미끄럼틀이 x −5.2에 있었으므로 그 자리에서
  // 시선 높이는 1.65 + 5.2 × 1.783 = **10.9m**인데 기구 꼭대기는 8.7m — **2.2m 부족**했다.
  // ⭐ H-012 주석이 이미 같은 것을 적어 뒀다("놀이기구 위에 세웠더니 담이 시선을 정확히
  //   막았다"). 그때 **형체만 담 위로 옮기고 기구는 그대로 뒀다** — 전제가 같은데 한쪽만 고쳤다.
  //
  // ⭐ 답은 둘이다: **담에 붙이고**(멀수록 더 높아야 한다) **밝게**(하늘이 검으므로
  //   어두운 실루엣은 하늘과 함께 붕괴한다 — 그래서 M.play가 따로 있다).
  // ⚠ 담 바로 뒤는 H-012(담 위 형체, z −L*0.36)의 배경이다. 밝은 구조물이 그 뒤에 서면
  //   검은 형체의 대비는 **오히려 오른다** — 실측으로 확인한다 (v0.11.57에 5.6이었다).
  const YARD_X = -HW - 0.55;                 // 담 바로 뒤 — 시선 높이 1.65 + 3.55×1.783 = 8.0m
  // 미끄럼틀 — 기둥·지붕·미끄럼판. 꼭대기를 시선 위로 확실히 올린다
  boxOf(M.play, 0.12, 3.0, 0.12, YARD_X, WALL_H + 1.5, -L * 0.34, t3);      // 기둥
  boxOf(M.play, 1.5, 0.12, 0.9, YARD_X - 0.6, WALL_H + 3.0, -L * 0.34, t3); // 지붕
  const slide = boxOf(M.play, 2.4, 0.1, 0.66, YARD_X - 1.5, WALL_H + 1.7, -L * 0.34, t3);
  slide.rotation.z = 0.52;                                                   // 미끄럼판
  for (let r = 0; r < 4; r++) {                                              // 오르는 사다리
    boxOf(M.play, 0.5, 0.07, 0.07, YARD_X + 0.3, WALL_H + 0.6 + r * 0.55, -L * 0.34, t3);
  }
  // ---------- H-012 담 위에 서 있는 형체 (밤 3, 외면) ----------
  // **담 너머가 아니라 담 위**다. 놀이기구 위에 세워 봤더니 담이 시선을 정확히 막았다
  // (카메라 1.65m → 담 높이 7m를 넘겨 보려면 훨씬 더 높아야 한다 — 실측).
  // 담 위는 그 문제가 없다: 가릴 것이 없고 **밤하늘이 곧 배경**이라 실루엣 대비가 최대다.
  // 올라갈 수 없는 자리에 서 있다는 것이 이 존재의 전부 — 움직이지 않는다
  const slideFigure = new THREE.Group();
  const lfB = new THREE.Mesh(new THREE.BoxGeometry(0.42, 1.2, 0.26), mats.darkFigure);
  lfB.position.y = 0.6;
  const lfH = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), mats.darkFigure);
  lfH.position.y = 1.35;
  // ⭐ **담을 딛고 선 두 발** (v0.11.57) — 실측 대비 5.6, 실패선(4.5) 코앞이었다.
  // 이 형체의 배경은 **밤하늘**(0x0a0e1a)이고 형체는 0x0b0e16이라 원래 휘도 차가 거의 없다.
  // 손이 아니라 발을 창백하게 두는 이유: 담 윗면과 맞닿아 **"올라갈 수 없는 자리에 서 있다"**를
  // 가리키는 것이 이 이상현상의 내용이기 때문이다
  for (const fx of [-0.11, 0.11]) {
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.07, 0.2), mats.pale);
    foot.position.set(fx, 0.035, 0.03);
    slideFigure.add(foot);
  }
  slideFigure.add(lfB, lfH);
  slideFigure.position.set(-HW + 0.15, WALL_H, -L * 0.36);   // 왼쪽 담 위, 골목 쪽 모서리
  slideFigure.visible = false;
  t3.add(slideFigure);

  // 정글짐 — ⭐ **구간 후반의 유일한 볼거리다.** 가로등(−L*0.45)을 지나면 이 구간도
  //   깜깜해지는데(테마 2와 같은 문제), 여기가 −L*0.62~0.7이라 그 자리를 맡는다.
  //   격자는 세로 넷 × 가로 셋이면 '정글짐'이 된다 — 둘씩으로는 그냥 막대였다
  for (const gz of [-L * 0.62, -L * 0.7]) {
    for (const gx of [YARD_X, YARD_X - 1.4]) {
      boxOf(M.play, 0.09, 2.2, 0.09, gx, WALL_H + 1.1, gz, t3);
    }
  }
  // ⚠ 가로대는 **두 평면을 잇는다** — 각 평면 위치에 z축 막대를 두면 서로 겹친다.
  //   두 평면이 z −L*0.62 / −L*0.7이므로 중앙은 −L*0.66, 길이는 그 간격(L*0.08 = 2.88)이다
  const GYM_SPAN = L * 0.08;
  for (const gy of [WALL_H + 0.3, WALL_H + 1.1, WALL_H + 1.9]) {
    boxOf(M.play, 1.5, 0.09, 0.09, YARD_X - 0.7, gy, -L * 0.62, t3);         // 가로대 (x축)
    boxOf(M.play, 1.5, 0.09, 0.09, YARD_X - 0.7, gy, -L * 0.7, t3);
    for (const gx of [YARD_X, YARD_X - 1.4]) {                               // 세로면을 잇는 대 (z축)
      boxOf(M.play, 0.09, 0.09, GYM_SPAN, gx, gy, -L * 0.66, t3);
    }
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

  // ---------- H-020 펜스를 잡은 손들 (밤 3, 외면) ----------
  // ⭐ **새 보안등이 배경이 되어 준다.** 창백한 손이 어두운 펜스 위에 얹혀 있고,
  // 그 뒤는 보안등이 만든 밝은 띠다 — 밝은 것을 어두운 데 두는 대신 **밝은 것을 밝은 데** 둔다.
  // (검은 형체가 실패한 자리에서 창백한 것은 성공했다: 백골 19, 신발 47, 눈 75)
  //
  // 무엇인가: 펜스 상부 레일을 **손만** 여럿이 잡고 있다. 팔도 얼굴도 없다.
  // 사람 형태(HUM)이므로 규칙은 외면 — 저 손들이 뭐에 붙어 있는지 확인하려 들면 안 된다.
  // 놀이터 쪽은 어두워서 **어차피 안 보인다.** 상상이 채우게 둔다 (설명하지 않는다)
  const fenceHands = new THREE.Group();
  const handMat = new THREE.MeshStandardMaterial({
    color: 0xb9b2a4, roughness: 0.9, emissive: 0x15140f, // 창백 + 아주 옅은 자체 발광
  });
  for (const [hx, hz] of [[-HW + 0.85, -L * 0.3], [-HW + 0.85, -L * 0.345],
    [-HW + 0.85, -L * 0.62], [-HW + 0.85, -L * 0.665]] as Array<[number, number]>) {
    const palm = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 0.17), handMat);
    palm.position.set(hx, 0.9, hz);
    fenceHands.add(palm);
    for (let f = 0; f < 4; f++) {                       // 레일을 넘어 이쪽으로 걸린 손가락
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.035, 0.032), handMat);
      fin.position.set(hx + 0.05, 0.855, hz - 0.06 + f * 0.04);
      fin.rotation.z = -0.5;
      fenceHands.add(fin);
    }
  }
  fenceHands.visible = false;
  t3.add(fenceHands);

  return {
    group: t3,
    refs: { swingPivot, ball, swingFigure, eyes, slideFigure, fenceHands },
    hit: {
      swing: [swingPivot],
      ball_out: [ball],
      swing_figure: [swingFigure],
      eyes: [eyes],
      slide_figure: [slideFigure],
      fence_hands: [fenceHands],
    },
  };
}
