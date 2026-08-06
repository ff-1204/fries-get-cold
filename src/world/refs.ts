// 월드가 밖으로 내주는 손잡이들 — 런타임(runtime.ts)·이상현상(effects.ts)이 만지는 대상.
// 조립은 index.ts가 한다: 공용 복도(prefab.ts) + 테마 5종(themes/)의 refs를 합친 것이 SegmentRefs.

import * as THREE from 'three';
import { type AnomalyEffect } from '../data';

/** 공용 복도 — 어느 구간에나 있는 것 (바닥·벽·터널·가로등·차·그림자 사람) */
export interface CorridorRefs {
  group: THREE.Group;
  scene: THREE.Scene;            // 아침/밤 전환 대상 (setMorning — 배경·안개)
  moon: THREE.DirectionalLight;  // 밤: 달빛 / 퇴근길: 낮게 걸린 해 (setMorning이 색·각도 전환)
  /** 퇴근길 하늘 — 그라데이션 돔. 밤에는 숨는다 (setMorning). 안개를 안 받으므로
   *  터널 암전은 setTunnelDark가 재질 색을 곱해 따로 처리한다 */
  skyDome: THREE.Mesh;
  /** ⭐ 하늘 그림 둘 — 퇴근길 두 구간이 서로 다른 시각이다 (v0.11.61).
   *  `setMorning`이 `tod`에 따라 돔의 `map`을 갈아 끼운다. 미리 만들어 두는 이유는
   *  구간 전환마다 캔버스를 다시 그리면 전환에 프레임이 튀기 때문이다 */
  skyAfternoon: THREE.CanvasTexture;
  skyDusk: THREE.CanvasTexture;
  tunnel: THREE.Group;           // 다리 밑 터널(앞) — 구간 사이를 잇는다 (마지막 구간엔 숨김)
  backTunnel: THREE.Group;       // 뒤 — 지나온 터널 (끝은 막혀 있다: 돌아가는 길은 없다)
  /** 터널 등 (앞·뒤 하나씩) — setTunnelDark가 어둠 곡선대로 함께 잦아들게 한다 */
  tunnelLights: THREE.PointLight[];
  /** 등기구 발광부 — 앞뒤 터널이 공유한다. **빛과 같은 곡선으로 꺼져야** 한가운데가 암흑이 된다 */
  tunnelLampMat: THREE.MeshStandardMaterial;
  car: THREE.Group;              // 차도(테마 4) — 신호 위반 시 지나간다 (startCar/updateWorld)
  carLight: THREE.PointLight;
  /** 택시 갓등의 발광 (v0.11.61) — **퇴근길에만 켠다** (updateWorld).
   *  밤에 켜면 화면에서 유일한 밝은 웜이 되어 '안전·목표'로 읽힌다 (visual-polish §3) */
  carSignMat: THREE.MeshStandardMaterial;
  ambient: THREE.AmbientLight;   // 깊이 사다리 대상 (applyDepth)
  stretchMark: THREE.Mesh;          // 늘어남 반복 구간의 바닥 분필 자국 (인지 보장 4요소 ④)
  lampLight: THREE.PointLight;
  /** 가로등 등기구의 발광부 — 퇴근길에는 노을빛으로, 밤에는 원래 값으로 (setMorning) */
  lampHeadMat: THREE.MeshStandardMaterial;
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
  shoes: THREE.Group;                       // H-010 계단 입구의 신발 한 켤레 (밤 3)
  bikeFigure: THREE.Group;                  // H-013 오토바이에 걸터앉은 형체 (밤 4)
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
  /** H-011 셔터 밑으로 새는 빛 (밤 3, LGT) — 발광부와 광원을 **함께** 켠다.
   *  빛만 켜면 빛나는 자리가 없고, 발광부만 켜면 바닥에 새어 나오지 않는다 */
  shutterGlowMat: THREE.MeshStandardMaterial;
  shutterGlowSlitMat: THREE.MeshStandardMaterial;
  shutterGlowLight: THREE.PointLight;
  loneShadow: THREE.Group;                  // H-019 주인 없는 그림자 (밤 2)
}

/** 테마 3: 놀이터 옆길 */
export interface Theme3Refs {
  swingPivot: THREE.Group;                  // A-007
  ball: THREE.Mesh;                         // A-009
  swingFigure: THREE.Group;                 // H-005 그네에 앉은 형체
  eyes: THREE.Group;                        // H-006 펜스 뒤 어둠의 눈
  slideFigure: THREE.Group;                 // H-012 미끄럼틀 지붕 위의 형체 (밤 3)
  fenceHands: THREE.Group;                  // H-020 펜스를 잡은 손들 (밤 3)
}

/** 테마 4: 정류장 앞 (차도) */
export interface Theme4Refs {
  trafficRed: THREE.MeshStandardMaterial[]; // A-011 (양쪽 빨간등)
  trafficGreen: THREE.MeshStandardMaterial[];
  busFigure: THREE.Group;                   // H-007 정류장의 앉은 형체
  /** 개업 현수막 — FF-1204를 가리키는 물건이라 **가게가 있는 쪽 갱구**에 건다.
   *  퇴근길은 앞(가게로 간다), 귀갓길은 뒤(가게에서 나왔다) — setBannerSide (v0.11.36) */
  banner: THREE.Mesh;
  /** 부스 형광등 — 정류장이 가진 제 빛. 낮에는 꺼지고, 깊이에는 가로등보다 둔하게 반응한다
   *  (깊이 게이지는 어디까지나 가로등이다). H-007의 광원 보장을 겸한다 */
  boothLight: THREE.PointLight;
  boothTubeMat: THREE.MeshStandardMaterial;
  acrossFigure: THREE.Group;                // H-014 길 건너 서 있는 형체 (밤 4)
  benchShoes: THREE.Group;                  // H-016 벤치 위의 신발 한 켤레 (밤 4)
}

/** 테마 5: 먹자골목 입구 */
export interface Theme5Refs {
  sign: THREE.Group;                        // A-013
  dragMark: THREE.Group;                    // H-008 끌린 자국
  /** H-015 반쯤 올라간 셔터 (밤 3). **닫힌 셔터를 숨기고** 이것을 켠다 —
   *  겹쳐 두면 닫힌 쪽이 그대로 덮는다 (실측에서 아무것도 안 보였다) */
  openShutter: THREE.Group;
  closedShutter: THREE.Group;
}

export interface SegmentRefs
  extends CorridorRefs, Theme1Refs, Theme2Refs, Theme3Refs, Theme4Refs, Theme5Refs {
  themes: THREE.Group[]; // index = 구간 - 1
  /** effect별 대상 메시 — 응시(외면) 조준·거리와 가림/가시성 검증이 읽는다.
   *  ⚠ 이름의 `hit`은 클릭 판정의 잔재다 (v0.11.50에 짚기가 사라졌다).
   *  응시 판정까지 빠지면 검증 전용이 되므로 그때 함께 개명한다 */
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
