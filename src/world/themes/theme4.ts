// 테마 4 — 정류장 앞. 다섯 구간 중 **여기만 차도다** (v0.11.7).
// 공용 벽에 뚫어 둔 구멍을 이 테마만 메우지 않는다 — 실제로 열린 교차로가 된다.

import * as THREE from 'three';
import { type Build, type Theme4Refs } from '../refs';
import { box, bannerTexture, type SharedMats } from '../kit';
import { buildRoadTunnel } from '../prefab';
import { L, HW, WALL_H, ROAD_Z, ROAD_HALF } from '../layout';

type E = 'traffic_red' | 'bus_figure';

export function createTheme4(mats: SharedMats): Build<Theme4Refs, E> {
  const t4 = new THREE.Group();

  // 정류장 부스 (오른쪽 벽을 등짐 — 등판은 벽과 평행, 기둥은 통행 한계 밖)
  // 도로를 가로막는 방향으로 90° 돌아가 있던 M0 형태 교정 (2026-07-30 맵 구조 수정)
  box(0.08, 2.2, 2.2, 0x252c3d, HW - 0.06, 1.35, -L * 0.32, t4);   // 등판 (벽면)
  box(0.9, 0.08, 2.4, 0x2a3142, HW - 0.5, 2.5, -L * 0.32, t4);     // 지붕 (머리 위)
  box(0.08, 2.5, 0.08, 0x2a3142, HW - 0.34, 1.25, -L * 0.29, t4);  // 기둥 (x≥2.62 — 통행 한계 밖)
  box(0.08, 2.5, 0.08, 0x2a3142, HW - 0.34, 1.25, -L * 0.35, t4);
  box(0.35, 0.08, 1.8, 0x2a3142, HW - 0.32, 0.55, -L * 0.32, t4);  // 벤치 (무릎 아래)

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
  box(60, 0.2, ROAD_HALF * 2, 0x1c202c, 0, -0.1, ROAD_Z, t4);            // 교차로 노면
  for (const s of [-1, 1]) {
    box(15, WALL_H, 1, 0x232838, s * 11, WALL_H / 2, ROAD_Z - ROAD_HALF - 0.5, t4); // 건너편 벽
    box(15, WALL_H, 1, 0x20263a, s * 11, WALL_H / 2, ROAD_Z + ROAD_HALF + 0.5, t4);
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
  box(0.5, 0.14, L * 0.9, 0x232838, HW - 0.25, 0.07, -L / 2, t4);   // 정류장 쪽 연석

  // 개업 현수막 — **다리 밑 터널 위, 난간에 걸었다** (v0.11.28).
  // 왜 옮겼나: 벽면 밀착(v0.11.13)은 통행을 안 덮는 대신 **다가갈수록 비스듬해져
  // 오히려 안 읽혔다** (모바일 실측: 12m 또렷 → 4m 프레임 밖). 난간에 걸면 정면을 향해
  // 접근 내내 읽히고, 골목의 소실점(터널 입구)에 놓여 눈이 이미 가 있는 자리를 쓴다.
  // 고가·지하차도 난간의 개업 현수막은 이 동네의 실제 그림이기도 하다.
  // 통행 위를 덮지 않는다는 v0.11.13의 조건은 그대로다 — y 4.7~5.8, 머리 한참 위.
  // ⚠ 터널은 공용 지오메트리지만 이 현수막은 **t4 소유**다 (구간 4에서만 걸려 있다)
  const bannerMat = new THREE.MeshStandardMaterial({ map: bannerTexture(), roughness: 0.95 });
  const banner = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 1.1), bannerMat);
  // 높이는 **다리 난간**(y 4.7~5.8). 갱구 바로 위(y4.5)로 내려봤더니 두 가지가 나빠졌다:
  // ① 낮을수록 근접에서 프레임에 오래 남아 HUD를 더 가린다 ② 갱구 상인방(y 3.4~4.0)과
  // y가 겹쳐 아랫줄 글자가 상한다. 난간 높이에서는 상인방과 y가 안 겹쳐 가려지지 않는다
  // ⚠ **어느 쪽 갱구에 거느냐는 진행 방향이 정한다** (v0.11.36, setBannerSide).
  //   현수막은 FF-1204를 가리키는 물건이다. 퇴근길은 가게로 **가는** 길이라 앞(-L)이 맞지만,
  //   귀갓길은 가게에서 **나오는** 길이다 — 그런데 밤에도 앞에 걸려 있어서,
  //   집 쪽을 향해 걷는 내내 가게 광고가 정면에 있었다. 앞뒤 터널은 거울상이라 뒤 난간도 같다
  banner.position.set(0, 5.25, -L + 0.25);
  t4.add(banner);

  return {
    group: t4,
    refs: { trafficRed, trafficGreen, busFigure, banner },
    hit: {
      traffic_red: trafficHeads,
      bus_figure: [busFigure],
    },
  };
}
