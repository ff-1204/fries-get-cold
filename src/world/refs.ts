// 월드가 밖으로 내주는 손잡이들 — 런타임(runtime.ts)·이상현상(effects.ts)이 만지는 대상.
// 조립은 index.ts가 한다: 공용 복도(prefab.ts) + 테마 5종(themes/)의 refs를 합친 것이 SegmentRefs.

import * as THREE from 'three';
import { type AnomalyEffect } from '../data';

/** 공용 복도 — 어느 구간에나 있는 것 (바닥·벽·터널·가로등·차·그림자 사람) */
export interface CorridorRefs {
  group: THREE.Group;
  scene: THREE.Scene;            // 아침/밤 전환 대상 (setMorning — 배경·안개)
  moon: THREE.DirectionalLight;  // 밤: 달빛 / 아침: 해 (setMorning이 색·강도 전환)
  tunnel: THREE.Group;           // 다리 밑 터널(앞) — 구간 사이를 잇는다 (마지막 구간엔 숨김)
  backTunnel: THREE.Group;       // 뒤 — 지나온 터널 (끝은 막혀 있다: 돌아가는 길은 없다)
  /** 터널 등 (앞·뒤 하나씩) — setTunnelDark가 어둠 곡선대로 함께 잦아들게 한다 */
  tunnelLights: THREE.PointLight[];
  /** 등기구 발광부 — 앞뒤 터널이 공유한다. **빛과 같은 곡선으로 꺼져야** 한가운데가 암흑이 된다 */
  tunnelLampMat: THREE.MeshStandardMaterial;
  car: THREE.Group;              // 차도(테마 4) — 신호 위반 시 지나간다 (startCar/updateWorld)
  carLight: THREE.PointLight;
  ambient: THREE.AmbientLight;   // 깊이 사다리 대상 (applyDepth)
  foldMark: THREE.Mesh;          // 접힘 반복 구간의 바닥 분필 자국 (인지 보장 4요소 ④)
  lampLight: THREE.PointLight;
  shopGlow: THREE.PointLight;
  shopSign: THREE.Mesh;
  shopSignMat: THREE.MeshStandardMaterial;
  /** FF-1204 가게 — 개구부 너머. **퇴근길 도착에서만** 보인다 (v0.11.32).
   *  그 전에는 터널을 숨기면 개구부 너머가 빈 하늘이었다 */
  shopFront: THREE.Group;
  /** 집(빌라 현관) — **귀갓길 도착에서만**. 같은 결함이 여기도 있었다 (v0.11.33).
   *  가게는 튜토리얼에서 한 번 보지만 집은 밤마다 본다 */
  homeFront: THREE.Group;
  /** 뒤의 FF-1204 — **밤의 첫 구간에서만** 뒤 터널 대신 선다 (v0.11.35).
   *  "튀김을 먹고 나왔다"는 인트로와 뒤에 있는 것을 맞춘다 (setBackScene) */
  shopBack: THREE.Group;
  shopTex: [THREE.CanvasTexture, THREE.CanvasTexture];    // A-012 간판 오탈자
  figure: THREE.Group;           // 전 구간: H-009 그림자 사람 (스폰 앵커 랜덤 — HUM)
}

/** 테마 1: 원룸 골목 */
export interface Theme1Refs {
  umbrella: THREE.Group;                    // A-001
  sensorMat: THREE.MeshStandardMaterial;    // A-002
  sensorLight: THREE.PointLight;
  windowMat: THREE.MeshStandardMaterial;    // A-015
  flyerMat: THREE.MeshStandardMaterial;     // A-003 (전단지 — TXT)
  flyerTex: [THREE.CanvasTexture, THREE.CanvasTexture];   // [정상, 이상]
  bloodTrail: THREE.Group;                  // H-001 바닥 핏자국
  skull: THREE.Group;                       // H-002 배출장 위 백골
  facePlane: THREE.Mesh;                    // H-003 창문의 창백한 얼굴
}

/** 테마 2: 상가 골목 */
export interface Theme2Refs {
  laundryShutter: THREE.Mesh;               // A-004
  laundryMat: THREE.MeshStandardMaterial;
  laundryLight: THREE.PointLight;
  storeSignMat: THREE.MeshStandardMaterial; // A-006
  realtyMat: THREE.MeshStandardMaterial;    // A-005 (부동산 시세표 — TXT)
  realtyTex: [THREE.CanvasTexture, THREE.CanvasTexture];
  handprints: THREE.Mesh;                   // H-004 셔터의 손자국들
}

/** 테마 3: 놀이터 옆길 */
export interface Theme3Refs {
  swingPivot: THREE.Group;                  // A-007
  ball: THREE.Mesh;                         // A-009
  swingFigure: THREE.Group;                 // H-005 그네에 앉은 형체
  eyes: THREE.Group;                        // H-006 펜스 뒤 어둠의 눈
}

/** 테마 4: 정류장 앞 (차도) */
export interface Theme4Refs {
  trafficRed: THREE.MeshStandardMaterial[]; // A-011 (양쪽 빨간등)
  trafficGreen: THREE.MeshStandardMaterial[];
  busFigure: THREE.Group;                   // H-007 정류장의 앉은 형체
}

/** 테마 5: 먹자골목 입구 */
export interface Theme5Refs {
  sign: THREE.Group;                        // A-013
  dragMark: THREE.Group;                    // H-008 끌린 자국
}

export interface SegmentRefs
  extends CorridorRefs, Theme1Refs, Theme2Refs, Theme3Refs, Theme4Refs, Theme5Refs {
  themes: THREE.Group[]; // index = 구간 - 1
  /** 지적(포인팅) 히트 대상 — effect별 클릭 가능한 사물 (main.ts tryPoint 판정) */
  hit: Record<AnomalyEffect, THREE.Object3D[]>;
}

/** 테마 빌더의 반환. `hit`이 그 테마가 담당하는 effect 키로 **정확히** 타이핑되므로,
 *  index.ts에서 6개를 합쳤을 때 빠진 effect가 있으면 컴파일 에러가 난다 —
 *  data.ts에 effect를 추가하면 "어느 테마에 짚을 사물이 있는지" 답할 때까지 빌드가 안 된다 */
export interface Build<R, E extends AnomalyEffect> {
  group: THREE.Group;
  refs: R;
  hit: Record<E, THREE.Object3D[]>;
}
