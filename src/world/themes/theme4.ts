// 테마 4 — 정류장 앞. 다섯 구간 중 **여기만 차도다** (v0.11.7).
// 공용 벽에 뚫어 둔 구멍을 이 테마만 메우지 않는다 — 실제로 열린 교차로가 된다.

import * as THREE from 'three';
import { type Build, type Theme4Refs } from '../refs';
import {
  box, boxOf, surfaceMat, asphaltTexture, wallTexture, friesAdTexture, missingAdTexture,
  ASPHALT_M, WALL_M, type SharedMats,
} from '../kit';
import { buildRoadTunnel } from '../prefab';
import { L, HW, WALL_H, ROAD_Z, ROAD_HALF, sunk } from '../layout';

type E = 'traffic_red' | 'bus_figure' | 'across_figure' | 'bench_shoes';

export function createTheme4(mats: SharedMats): Build<Theme4Refs, E> {
  const t4 = new THREE.Group();

  // ---------- ⭐ 정류장 쉘터 (v0.11.61 재설계 — 레퍼런스: 밤 버스 정류장) ----------
  // 도로를 가로막는 방향으로 90° 돌아가 있던 M0 형태 교정 (2026-07-30 맵 구조 수정)
  //
  // ⚠⚠ **골목이 좁아서 실물 정류장의 깊이를 쓸 수 없다.** 벽 안쪽면이 x 3.0이고
  //   플레이어 x 한계가 2.6이라, **지면에서 쓸 수 있는 깊이는 0.4m뿐**이다.
  //   그래서 규칙은 이것이다: **눈높이(y 0.7~2.2)의 단단한 것은 x 2.6 밖에만 둔다.**
  //   머리 위(캐노피)와 무릎 아래(벤치)는 침범해도 카메라가 닿지 않으므로 허용된다 —
  //   기존 벤치가 x 2.505까지 들어와 있는 것이 그 판단이었고, 그대로 지킨다.
  //
  // ⭐ 레퍼런스에서 '정류장'을 만드는 것 넷을 형태로 옮긴다:
  //   ① **캐노피 앞단(파시아)** — 가로로 길게 도는 띠. 이 한 줄이 실루엣의 정체다
  //   ② **유리 등판** — 벽에 붙은 판이 아니라 프레임에 끼운 유리로 읽히게 (테두리 + 어두운 면)
  //   ③ **라이트박스 둘** — 등판에 끼워 골목을 향한다 (아래)
  //   ④ **노선도** — 광고 사이의 잔글씨 판. 정류장에서 사람이 실제로 보는 것
  // ---------- 색 (v0.11.61 — 레퍼런스 대조) ----------
  // ⚠ 프레임이 `0x2a3142`(남색 회색)였다. 골목 벽(0x232838)과 같은 한색 계열로 맞춘 값인데,
  //   레퍼런스의 정류장 골조는 **중성 차콜 알루미늄**이다 — 파란 기가 없어서 밤에 '검은 금속'으로
  //   읽히고, 그래서 유리·라이트박스만 색을 갖는다. 파란 기를 빼면 광고가 더 살아난다.
  // ⭐ 대신 **캐노피 밑면은 밝게** 둔다: 레퍼런스에서 천장이 흰 것은 도장색이 아니라
  //   LED 띠가 씻어 놓은 것이다. 밝은 밑판 한 장이 정류장의 '안쪽이 환하다'를 만든다
  const FRAME = 0x1d2129;          // 차콜 알루미늄 (중성)
  const CEIL = 0xb4bac2;           // 캐노피 밑면 — LED에 씻긴 밝은 회색
  const GLASS = 0x0e1116;          // 유리 — 밤의 유리는 거의 검다 (반사만 남는다)
  const BACK_X = HW - 0.05;                                          // 등판 (x 2.95)
  const CANOPY_Y = 2.62;
  const Z0 = -L * 0.32;                                              // 부스 중심 z
  // ⭐ **길이가 정류장의 3단을 만든다** (v0.11.61, 레퍼런스 실물). 광고는 등판과 **같은 면**의
  //   양 끝에 있고 가운데가 유리+노선도다 — `[광고][유리·노선도][광고]`.
  //   2.6m에서는 광고 둘이 붙어 가운데가 0.68m밖에 안 남아 3단으로 안 읽혔다.
  //   4.2m면 광고 1.07 · 유리 1.96 · 광고 1.07로 갈라진다 (레퍼런스의 비율에 가깝다).
  // ⚠ 늘릴 수 있는 상한을 좌표로 확인했다: 볼라드가 z −8.64 · −14.4에 있어서 부스가
  //   ±2.1(z −13.62~−9.42)까지는 양쪽 0.78m 여유가 남는다. 더 늘리면 볼라드를 먹는다
  const BOOTH_Z = 4.2;                                               // 부스 길이 (z)
  const AD_Z = 1.45;                                                 // 광고 중심 — 양 끝 베이
  // ② 유리 등판 — 어둡고 매끈하게. 테두리를 따로 둬서 '끼워진 판'이 된다
  boxOf(new THREE.MeshStandardMaterial({ color: GLASS, roughness: 0.12, metalness: 0.2 }),
    0.06, 2.35, BOOTH_Z - 0.16, BACK_X, 1.28, Z0, t4);
  for (const ez of [-1, 1]) {                                        // 등판 세로 테두리
    box(0.09, 2.45, 0.1, FRAME, BACK_X, 1.3, Z0 + ez * (BOOTH_Z / 2 - 0.05), t4);
  }
  box(0.09, 0.1, BOOTH_Z, FRAME, BACK_X, 0.1, Z0, t4);               // 등판 밑틀
  // ① 캐노피 — 머리 위라 통행 한계를 넘어도 된다. 파시아(앞단)가 실루엣을 만든다
  box(1.15, 0.09, BOOTH_Z, FRAME, HW - 0.62, CANOPY_Y, Z0, t4);      // 천장판 (겉 — 차콜)
  // ⭐ 밑면 — 레퍼런스의 그 흰 천장. LED가 씻어 놓은 면이라 골조보다 훨씬 밝다
  box(1.03, 0.03, BOOTH_Z - 0.14, CEIL, HW - 0.62, CANOPY_Y - 0.06, Z0, t4);
  box(0.1, 0.3, BOOTH_Z, FRAME, HW - 1.15, CANOPY_Y - 0.2, Z0, t4);  // ⭐ 파시아 — 앞단 띠
  for (const ez of [-1, 1]) {                                        // 캐노피 옆단
    box(1.15, 0.16, 0.09, FRAME, HW - 0.62, CANOPY_Y - 0.12, Z0 + ez * (BOOTH_Z / 2), t4);
  }
  // 기둥 — x 2.66, 통행 한계 밖. 캐노피까지 올린다
  for (const pz of [-1, 1]) {
    box(0.1, CANOPY_Y, 0.1, FRAME, HW - 0.34, CANOPY_Y / 2, Z0 + pz * (BOOTH_Z / 2 - 0.12), t4);
  }
  // 벤치 — **위치·높이 그대로 둔다.** H-007(앉은 형체)과 H-016(벤치 위 신발)이 이 좌표에
  // 얹혀 있고 둘 다 실측을 통과한 배치다 (26.3 · 100.4)
  box(0.35, 0.08, 1.8, FRAME, HW - 0.32, 0.55, Z0, t4);              // 벤치 (무릎 아래)
  // ⚠ 등받이는 넣지 않는다 — 벤치가 광고판 z를 가로질러 지나가므로, 등받이를 세우면
  //   **광고 아랫단(제품명 줄)을 가린다.** 실물 정류장에는 있지만 여기서는 광고가 우선이다

  // ---------- ⭐ 라이트박스 광고 둘 ----------
  // ⚠⚠ **첫 시도는 통행 구역을 침범했다** — 판을 부스 양 끝(±z)에 세워 폭 0.9를 x축에 걸었더니
  //   x 2.10~3.00을 차지해 한계선(2.6) 안으로 0.5m 들어왔다. 카메라가 뚫고 들어가는 배치다.
  //   ⭐ **등판에 끼워 골목(−x)을 향하게** 돌린다: 폭이 z축으로 누우므로 x는 6cm만 쓴다.
  //   레퍼런스의 '옆에서 보는 판'은 이 좁은 골목에서 애초에 불가능하다 (깊이가 0.4m뿐이다).
  //   대신 **지나가며 오른쪽을 보면 정면으로** 들어온다 — 좁은 골목에서는 이쪽이 더 잘 보인다.
  // ⚠ `PlaneGeometry`를 −x로 돌려 쓴다. Box의 ±X면은 UV가 좌우로 뒤집혀 글자가 거울이 된다
  // ⚠ 발광은 `emissiveMap`으로 **그림 그대로** 건다 — 라이트박스는 그림이 빛나는 물건이다.
  //   세기는 낮게: 부스 형광등(0x8fa6c4)보다 밝으면 정류장의 주광원이 뒤바뀐다
  const adPanel = (tex: THREE.CanvasTexture, z: number, name: string) => {
    const mat = new THREE.MeshStandardMaterial({
      map: tex, emissiveMap: tex, emissive: 0x6f747c, roughness: 0.5,
    });
    // ⚠ 판을 키웠다 (0.84×1.5 → 0.95×1.69). 비율은 캔버스(288×512 = 0.5625)에 묶여 있어
    //   폭만 늘리면 그림이 눕는다 — 높이를 같은 배로 올린다.
    // ⚠ 높이는 **벤치 위**로 올린다 (아랫단 y 0.675 > 벤치 상판 0.59) — 안 그러면
    //   제품명·발신처가 적힌 아랫줄이 벤치에 가린다. 윗단 2.365 < 캐노피 밑면 2.575 ✓
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 1.69), mat);
    panel.position.set(BACK_X - 0.05, 1.52, z);
    panel.rotation.y = -Math.PI / 2;                                 // 골목(−x)을 향한다
    panel.name = name;
    t4.add(panel);
    box(0.05, 1.81, 1.07, FRAME, BACK_X - 0.02, 1.52, z, t4);        // 광고판 프레임 (뒤에 받친다)
  };
  adPanel(friesAdTexture(), Z0 - AD_Z, '정류장 광고(감자튀김)');     // 가게 쪽 끝 베이
  adPanel(missingAdTexture(), Z0 + AD_Z, '정류장 광고(실종 전단)');  // 집 쪽 끝 베이
  // ④ 노선도 — 가운데 베이. 잔글씨 판이라 글자를 그리지 않고 밀도만 만든다.
  //    베이가 1.96m로 넓어졌으니 판도 그만큼 키운다 (레퍼런스의 시간표가 유리 한 칸을 채운다)
  // ⚠ 레퍼런스의 시간표판은 **흰 종이**다 (0x8d94a2 중간 회색 → 밝게). 부스 안이 환한 이유가
  //   천장·광고·이 판 셋이 다 밝기 때문이고, 그 대비로 골조가 검게 읽힌다
  box(0.04, 0.72, 1.1, 0xd2d6dc, BACK_X - 0.05, 1.58, Z0, t4);
  // ⭐ 정류장 이름 세로 띠 — 레퍼런스에서 왼쪽 기둥에 붙은 그 막대. 골목을 향해(−x) 세운다.
  //
  // ⚠⚠ **파랑 → 노랑으로 바꿨다** (v0.11.61 — 요청). 짚어 둘 것이 있다:
  //   원래 한색(남색 `#1b3a6b`)이었던 이유가 **의미색 고정**이었다 (visual-polish §3):
  //   웜은 **안전·목표 전용**이고 이 골목에서 목표는 FF-1204 하나다. 노랑은 그 규칙의 색이다.
  //   ⭐ 그래서 발광을 **한 단 낮춰** 목표와 경쟁하지 않게 했다:
  //     FF-1204 간판 발광 `#ffffff` · 가게 안 기름 `#ffb23e` ↔ 이 띠 `#8a7024` (그보다 훨씬 어둡다)
  //   즉 '노란 물건'이지 '노란 빛'은 아니다 — 칠한 띠가 약하게 비치는 정도다.
  // ⚠ 밤에 이 띠가 눈에 걸리면(가로등이 비추므로) 발광을 아예 빼고 칠한 색만 남기면 된다.
  //   그러면 팔레트 규칙과 완전히 어긋나지 않는다 — 색이 있어도 **빛나지 않으면** 신호가 아니다
  const nameStrip = new THREE.MeshStandardMaterial({ color: 0x6a5a1c, roughness: 0.45 });
  nameStrip.emissive.setHex(0x8a7024);
  boxOf(nameStrip, 0.03, 1.15, 0.16, HW - 0.4, 1.62, Z0 - (BOOTH_Z / 2 - 0.12), t4);

  // 부스 형광등 — **정류장은 제 빛을 가진다.**
  // 두 가지를 동시에 푼다: ① 새벽 한 시의 정류장이 실제로 그렇다(장소 정체성)
  // ② H-007(벤치의 형체)이 **공용 가로등에 의존하지 않게** 된다 — 배치 3원칙 ①'광원 안쪽'을
  //    부스가 스스로 보장하므로, 아래 미러링으로 부스가 반대쪽에 서도 판정이 공정하다.
  // 색은 한색(30% 대역) — 웜(#ffb23e)은 안전·목표 전용이라 여기 쓰지 않는다 (visual-polish §3)
  // ⭐ **띠 셋** (v0.11.61 — 레퍼런스). 한 줄짜리 관이었는데, 레퍼런스의 천장은 긴 LED 띠가
  //   나란히 여러 줄이다. 줄이 여럿이면 천장이 '조명 설비'로 읽히고 깊이도 같이 생긴다.
  // ⚠⚠ **셋이 같은 재질을 공유해야 한다** — `setBoothLight`가 `boothTubeMat` 하나의 emissive만
  //   만지므로, 따로 만들면 나머지 둘은 시간대·깊이와 무관하게 **영원히 켜져 있다**.
  //   그래서 재질을 먼저 만들고 `boxOf`로 셋에 나눠 붙인다 (`box`는 재질을 새로 만든다)
  const boothTubeMat = new THREE.MeshStandardMaterial({ color: FRAME, roughness: 0.5 });
  boothTubeMat.emissive.setHex(0x8fa6c4);
  for (const tz of [-1, 0, 1]) {
    boxOf(boothTubeMat, 0.3, 0.05, BOOTH_Z - 0.8, HW - 0.42 - tz * 0.34, 2.46, Z0, t4);
  }
  const boothLight = new THREE.PointLight(0xbcd0ea, 9, 8.5, 2);
  boothLight.position.set(HW - 0.7, 2.2, -L * 0.32);
  t4.add(boothLight);

  // H-007 정류장의 앉은 형체 — 버스는 새벽에 안 다닌다
  const busFigure = new THREE.Group();
  const bfBody = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.6, 0.26), mats.darkFigure);
  bfBody.position.y = 0.95;
  const bfHead = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), mats.darkFigure);
  bfHead.position.set(-0.06, 1.38, 0); // 고개를 떨구고 있다
  const bfLegs = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.5, 0.18), mats.darkFigure);
  bfLegs.position.set(-0.2, 0.35, 0);
  busFigure.add(bfBody, bfHead, bfLegs);
  busFigure.position.set(HW - 0.42, 0, -L * 0.32); // 벤치(y0.55) 위
  busFigure.visible = false;
  t4.add(busFigure);

  // ---------- H-014 길 건너 서 있는 형체 (밤 4, 외면) ----------
  // 건널목 **반대편 인도**에. 이 구간에서만 가능한 배치다 — 신호를 기다리는 동안
  // 시야에 들어와 있고, 통행을 막지 않으므로 그냥 지나칠 수 있다.
  // **기다림(자원)과 외면(규칙)이 처음으로 같은 순간에 걸린다**
  const acrossFigure = new THREE.Group();
  const afB = new THREE.Mesh(new THREE.BoxGeometry(0.44, 1.2, 0.26), mats.darkFigure);
  afB.position.y = 0.9;
  const afH = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), mats.darkFigure);
  afH.position.y = 1.64;
  // ⭐ **늘어뜨린 두 손** (v0.11.57) — 실측 대비가 15.6 → 7.4로 계속 내려온 항목이다.
  // 배경이 **길 건너 아스팔트**인데 거기 골재 텍스처가 생기면서 둘레 배경의 분산이 올라갔다
  // (v0.11.52 표면 텍스처의 대가). 배경을 되돌릴 수는 없으니 대상 쪽에 창백한 점을 준다
  for (const hx of [-0.26, 0.26]) {
    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.14, 0.1), mats.pale);
    hand.position.set(hx, 0.72, 0.03);
    acrossFigure.add(hand);
  }
  acrossFigure.add(afB, afH);
  acrossFigure.position.set(-1.1, 0, ROAD_Z - ROAD_HALF - 0.6); // 건너편 인도, 통행선 밖
  acrossFigure.visible = false;
  t4.add(acrossFigure);

  // 보행신호등 2기 — **건널목 양 끝에 하나씩, 서로 반대를 본다** (v0.11.8: 현실 배치 교정.
  // 이전에는 둘 다 횡단보도 앞쪽에 나란히 서서 같은 쪽을 보고 있었다).
  //   건너편 것(x +, 등화가 +z를 향함) = 이쪽에서 건너는 사람이 읽는 신호
  //   이쪽 것(x −, 등화가 −z를 향함) = 반대편에서 오는 사람의 신호 — 우리에겐 뒤통수만 보인다
  const trafficRed: THREE.MeshStandardMaterial[] = [];
  const trafficGreen: THREE.MeshStandardMaterial[] = [];
  const trafficHeads: THREE.Mesh[] = [];
  const NEAR_Z = -L * 0.55;                  // 정지선 앞 (플레이어 쪽 인도)
  const FAR_Z = ROAD_Z - ROAD_HALF - 0.9;    // 길 건너 인도
  for (const [tx, tz, facing] of [
    [HW - 0.4, FAR_Z, 1],     // 건너편 — 플레이어를 향한다
    [-(HW - 0.4), NEAR_Z, -1], // 이쪽 — 반대 방향을 향한다
  ] as Array<[number, number, number]>) {
    box(0.12, 3.4, 0.12, 0x3a4157, tx, 1.7, tz, t4);
    trafficHeads.push(box(0.3, 0.66, 0.24, 0x1c2230, tx, 3.55, tz, t4));
    const red = box(0.16, 0.16, 0.06, 0x351114, tx, 3.7, tz + 0.14 * facing, t4);
    const green = box(0.16, 0.16, 0.06, 0x11281a, tx, 3.42, tz + 0.14 * facing, t4);
    trafficRed.push(red.material as THREE.MeshStandardMaterial);
    trafficGreen.push(green.material as THREE.MeshStandardMaterial);
  }

  // 교차로 — 벽을 뚫었으니 건너편에 실제 길이 있어야 한다 (v0.11.7).
  // 노면은 **차도 터널 안쪽까지** 깔린다 (터널이 따로 바닥을 갖지 않게 — 겹치면 z-파이팅)
  //
  // ⭐ **표면 텍스처** (v0.11.61) — 골목 바닥·터널 노면과 같은 아스팔트다. 여기가 민짜로 남아
  // 있었던 것이 특히 눈에 띄었다: 교차로 노면은 **골목 바닥과 실제로 맞닿아** 있어서,
  // 걸어 들어가면 결이 있던 바닥에서 없는 바닥으로 넘어갔다 (타일 크기가 같아야 하는 이유)
  // ⚠ 기반 텍스처와 재질은 **루프 밖에서 한 번만** 만든다. `surfaceMat`이 넘겨받은 텍스처를
  //   clone하므로, 루프 안에서 `wallTexture()`를 부르면 호출마다 원본+복제 두 장이 생긴다
  const asphalt = asphaltTexture();
  const wallTex = wallTexture();
  boxOf(surfaceMat(0x1c202c, asphalt, 60 / ASPHALT_M, ROAD_HALF * 2 / ASPHALT_M),
    60, 0.2, ROAD_HALF * 2, 0, -0.1, ROAD_Z, t4);                        // 교차로 노면 (윗면: 폭·깊이)
  // 건너편 벽 — 골목 벽과 같은 색·같은 결. 좌우가 같은 치수라 재질 둘을 양쪽이 나눠 쓴다.
  // 바닥 아래까지 내린다 (layout.ts sunk) — 공용 벽과 같은 처리여야 근두리가 한 줄로 읽힌다
  const [cwh, cwy] = sunk(WALL_H);
  const farWall = surfaceMat(0x232838, wallTex, 15 / WALL_M, cwh / WALL_M);  // 벽면(±Z): 폭·높이
  const nearWall = surfaceMat(0x20263a, wallTex, 15 / WALL_M, cwh / WALL_M);
  for (const s of [-1, 1]) {
    boxOf(farWall, 15, cwh, 1, s * 11, cwy, ROAD_Z - ROAD_HALF - 0.5, t4); // 건너편 벽
    boxOf(nearWall, 15, cwh, 1, s * 11, cwy, ROAD_Z + ROAD_HALF + 0.5, t4);
    // 길 끝은 건물 벽이 아니라 **다리 밑 터널**이다 (v0.11.31) — 골목과 같은 문법.
    // 차는 이 안의 검은 안개에서 나와 반대편 안개로 들어간다
    buildRoadTunnel(s as 1 | -1, t4);
  }

  // 구조 차별화 — 횡단보도·정지선·볼라드·연석 (다섯 구간 중 여기만 '차도'다)
  for (let i = 0; i < 4; i++) {
    box(HW * 2 - 1.2, 0.03, 0.6, 0x8890a2, 0, 0.02, -L * 0.62 - i * 1.15, t4);
  }
  box(HW * 2 - 1.2, 0.03, 0.35, 0x8890a2, 0, 0.02, -L * 0.585, t4); // 정지선
  box(0.16, 0.7, 0.16, 0x39415a, HW - 0.7, 0.35, -L * 0.24, t4);    // 볼라드
  box(0.16, 0.7, 0.16, 0x39415a, HW - 0.7, 0.35, -L * 0.4, t4);
  // 정류장 쪽 연석 — **부스 앞에만** 깐다.
  // 예전에는 L*0.9(32.4m)라 구간 전체를 달렸다: 정류장과 무관한 곳까지 인도 턱이 이어져
  // '여기가 정류장'이라는 신호가 묽어졌고, 가로로 긴 띠 하나가 구간을 반으로 갈랐다.
  // 부스보다 양쪽 0.8m씩만 길게 — 부스를 받치는 받침으로 읽힌다.
  // ⚠ **부스 길이에서 파생시킨다** (v0.11.61): 4.0으로 박아 두었더니 부스를 4.2로 늘린 순간
  //   받침이 부스보다 **짧아져** 양 끝 광고판이 허공에 선 것처럼 됐다
  box(0.5, 0.14, BOOTH_Z + 1.6, 0x232838, HW - 0.25, 0.07, Z0, t4);

  // ⚠⚠ **개업 현수막을 공용(prefab.ts)으로 올렸다** (v0.11.61 — 요청 "현수막 하나로").
  //   여기(테마 4)에 있으면 t4의 자식이라 **먹자골목에서는 보이지 않는다** — 그래서 가게 쪽에도
  //   같은 현수막을 따로 만들어 두 개가 됐고, 규격을 맞춰도 여전히 물건이 둘이었다.
  //   ⭐ 공용으로 올리면 하나가 두 구간을 다 맡는다 (setBannerSide가 앞/뒤로 옮긴다).
  //   (좌우 되돌리기 문제는 이제 존재하지 않는다 — 반전 자체를 걷어냈다)

  // ---------- H-016 벤치 위의 신발 한 켤레 (밤 4, 직시) ----------
  // H-010(계단 앞 신발)의 변주다. **같은 사물이 다른 자리에 있는 것**이 부재를 강화한다 —
  // 계단 앞은 "신발을 벗고 들어갔나"지만, 정류장 벤치 위는 벗어둘 이유가 없는 자리다.
  // 앉아서 기다리던 사람이 신발만 두고 갔다는 것 외에 읽을 방법이 없다.
  //
  // 벤치(x = HW-0.32, 상판 y 0.59, z 길이 1.8)의 **앞쪽 끝**에 둔다.
  // 형체(H-007)는 벤치 한가운데(-L*0.32)에 앉으므로 증식으로 둘이 겹쳐도 자리가 안 부딪힌다.
  // 나란히 놓는 방향은 **z(벤치 길이 방향)** — x로 벌리면 벤치 깊이(0.35)를 넘어 뜬다.
  // 실루엣 대비: 부스 형광등(한색)이 비추는 벤치 위의 밝은 것 (배치 3원칙 ③)
  const benchShoes = new THREE.Group();
  for (const sz of [-0.19, 0.19]) {
    const shoe = box(0.24, 0.11, 0.34, 0xd8d4c8, 0, 0.055, sz, benchShoes);
    shoe.position.z = sz;
  }
  benchShoes.position.set(HW - 0.32, 0.59, -L * 0.32 + 0.62);
  benchShoes.visible = false;
  t4.add(benchShoes);

  return {
    group: t4,
    refs: { trafficRed, trafficGreen, busFigure, boothLight, boothTubeMat, acrossFigure, benchShoes },
    hit: {
      traffic_red: trafficHeads,
      bus_figure: [busFigure],
      across_figure: [acrossFigure],
      bench_shoes: [benchShoes],
    },
  };
}
