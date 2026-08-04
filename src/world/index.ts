// 그레이박스 골목 — 조립부. 공용 복도 프리팹 + 구간별 테마 5종을 합쳐 SegmentRefs를 만든다.
// 전방 = -Z. 구간 끝(z=-segLength) 중앙 개구부가 유일한 출구 — 갈림길 없음 (지적 문법).
// 테마: 원룸 골목 / 상가 골목 / 놀이터 옆길 / 정류장 앞 / 먹자골목 입구 (story.md §4)
// 이상현상 배치 3원칙(anomalies.md): 광원 안쪽 · 관찰 시간 확보 · 실루엣 대비
//
// 파일 지도 — 무엇을 고치러 왔는가:
//   layout.ts   치수·좌표·신호 주기 (판정과 공유하는 숫자)
//   kit.ts      box 프리미티브 · 캔버스 텍스처
//   prefab.ts   공용 복도·앞뒤 터널·가로등·차·그림자 사람
//   themes/     테마 1~5 지오메트리 (세트피스는 여기에 붙는다)
//   effects.ts  이상현상 reset/apply 레지스트리
//   runtime.ts  applyDepth·setMorning·updateWorld 등 시간축

import * as THREE from 'three';
import { MAIN_GAP_HALF } from '../config';
import { type AnomalyEffect } from '../data';
import { type SegmentRefs } from './refs';
import { sharedMats } from './kit';
import { createCorridor, patchRoadWall } from './prefab';
import { createTheme1 } from './themes/theme1';
import { createTheme2 } from './themes/theme2';
import { createTheme3 } from './themes/theme3';
import { createTheme4 } from './themes/theme4';
import { createTheme5 } from './themes/theme5';

export function createWorld(scene: THREE.Scene): SegmentRefs {
  const mats = sharedMats();
  const corridor = createCorridor(scene, mats);

  const t1 = createTheme1(mats);
  const t2 = createTheme2();
  const t3 = createTheme3(mats);
  const t4 = createTheme4(mats);
  const t5 = createTheme5(mats);
  const builds = [t1, t2, t3, t4, t5];

  const themes = builds.map((b) => b.group);
  themes.forEach((t, i) => {
    if (i !== 3) patchRoadWall(t); // 테마 4(교차로)만 벽 구멍을 열어 둔다 (v0.11.7)
    t.visible = false;
    // 이름은 **관리자 모드 조준 표시**가 읽는다 (admin.ts) — 화면에서 본 것을 소스에서
    // 찾을 수 있게 하는 유일한 단서다. 붙이는 비용이 0이므로 새 그룹에는 그때그때 붙인다
    t.name = `테마${i + 1}`;
    corridor.refs.group.add(t);
  });

  // 눈에 띄는 공용 구조물에도 이름을 (관리자 모드 조준 표시용)
  corridor.refs.group.name = '골목';
  corridor.refs.tunnel.name = '앞터널';
  corridor.refs.backTunnel.name = '뒤터널';
  corridor.refs.shopFront.name = 'FF-1204(앞)';
  corridor.refs.shopBack.name = 'FF-1204(뒤)';
  corridor.refs.homeFront.name = '집';
  corridor.refs.figure.name = '그림자사람';
  corridor.refs.car.name = '차';
  corridor.refs.shopSign.name = 'FF-1204 간판';
  t4.refs.banner.name = '개업 현수막';
  t4.refs.busFigure.name = '정류장의 형체';
  t5.refs.sign.name = '입간판';
  t5.refs.dragMark.name = '끌린 자국';
  t1.refs.bloodTrail.name = '핏자국';
  t1.refs.skull.name = '백골';
  t1.refs.umbrella.name = '우산';
  t2.refs.handprints.name = '손자국';
  t3.refs.swingFigure.name = '그네의 형체';
  t3.refs.eyes.name = '어둠의 눈';
  t3.refs.ball.name = '공';

  // 지적 히트 대상 — effect마다 "짚을 수 있는 사물". 여섯 조각을 합쳐 전 effect를 덮는다:
  // data.ts에 effect를 추가하면 어느 테마에도 없을 때 **여기서 컴파일 에러**가 난다
  const hit: Record<AnomalyEffect, THREE.Object3D[]> = {
    ...corridor.hit, ...t1.hit, ...t2.hit, ...t3.hit, ...t4.hit, ...t5.hit,
  };

  return {
    ...corridor.refs,
    ...t1.refs, ...t2.refs, ...t3.refs, ...t4.refs, ...t5.refs,
    themes,
    hit,
  };
}

export { MAIN_GAP_HALF }; // 기존 import 경로(main.ts) 유지
export type { SegmentRefs };
export { applyAnomalies } from './effects';
export {
  setSegmentTheme, applyDepth, setMorning, setTunnelDark, setStretchMark, setShopNear,
  setBackScene, setBannerSide, setThemeMirror, updateWorld, startCar, stopCar, carInCorridor,
} from './runtime';
export {
  ROAD_Z, ROAD_HALF, STOP_LINE_Z, TRAFFIC_CYCLE, isGreen, isFlashing,
  TUNNEL_LEN, TUNNEL_H, TUNNEL_SWAP_Z, TUNNEL_IN_HALF, SPAWN_ANCHORS, CAR_SEC,
} from './layout';
