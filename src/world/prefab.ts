// 공용 복도 — 어느 구간에나 있는 것. 테마는 이 위에 얹힌다.
// 바닥·양쪽 벽·끝벽(중앙 개구부) · 앞뒤 다리 밑 터널 · 가로등 · 접힘 분필 자국 ·
// FF-1204 간판 · 그림자 사람(전 구간 공용 HUM) · 차.

import * as THREE from 'three';
import { MAIN_GAP_HALF } from '../config';
import { type CorridorRefs } from './refs';
import { box, shopSignTexture, type SharedMats } from './kit';
import {
  L, HW, WALL_H, ROAD_Z, ROAD_HALF, TUNNEL_LEN, TUNNEL_H, FOG_NIGHT,
} from './layout';

/** 복도가 담당하는 지적 대상 — 가로등·간판·그림자 사람은 테마와 무관하게 늘 있다 */
type CorridorEffect = 'lamp_flicker' | 'shop_typo' | 'figure';

export function createCorridor(
  scene: THREE.Scene,
  mats: SharedMats,
): { refs: CorridorRefs; hit: Record<CorridorEffect, THREE.Object3D[]> } {
  scene.background = new THREE.Color(FOG_NIGHT); // OLED 대응: 순수 검정 금지 (responsive-design §6)
  // 밝기 재조정 (2026-08-02): 안개를 옅게, 앰비언트 바닥을 올린다 — 공포는 어둠의 절대량이
  // 아니라 웜/한색 대비·안개·감광 사다리가 담당 (visual-polish §4 "다음 구간이 어렴풋이")
  scene.fog = new THREE.FogExp2(FOG_NIGHT, 0.044);

  const ambient = new THREE.AmbientLight(0x39415e, 2.2);
  scene.add(ambient);
  const moon = new THREE.DirectionalLight(0x8090c0, 0.75);
  moon.position.set(4, 10, 2);
  scene.add(moon);

  const group = new THREE.Group();
  scene.add(group);

  // ---------- 복도 골격 ----------
  // 바닥 (아스팔트)
  box(HW * 2 + 14, 0.2, L + 14, 0x181c28, 0, -0.1, -L / 2, group);

  // 양쪽 벽 — 통짜였으나 **차도 구간만 뚫는다** (v0.11.7). 벽은 공용이므로 여기서 갈라 두고,
  // 테마 1·2·3·5는 구멍을 메우는 패치를 각자 붙인다 — 테마 4만 실제로 열린 교차로가 된다.
  // (벽으로 막힌 골목 한가운데 횡단보도가 그려져 있던 기존 모순도 함께 해소)
  const nearLen = -(ROAD_Z + ROAD_HALF);      // 구간 입구 ~ 도로 앞
  const farLen = L + (ROAD_Z - ROAD_HALF);    // 도로 뒤 ~ 구간 끝
  for (const [wx, color] of [[HW + 0.5, 0x232838], [-HW - 0.5, 0x20263a]] as Array<[number, number]>) {
    box(1, WALL_H, nearLen, color, wx, WALL_H / 2, -nearLen / 2, group);
    box(1, WALL_H, farLen, color, wx, WALL_H / 2, ROAD_Z - ROAD_HALF - farLen / 2, group);
  }

  // 끝 벽 — 개구부(중앙)를 남기고 2조각
  const endWallW = HW - MAIN_GAP_HALF + 1;
  box(endWallW, WALL_H, 1, 0x232838, -(MAIN_GAP_HALF + endWallW / 2), WALL_H / 2, -L - 0.5, group);
  box(endWallW, WALL_H, 1, 0x232838, MAIN_GAP_HALF + endWallW / 2, WALL_H / 2, -L - 0.5, group);

  // ---------- 뒤 — 지나온 터널 (v0.11.16) ----------
  // 이 동네의 골목들은 다리 밑 터널로 이어져 있다. 어디서 출발하든 뒤에는 지나온 터널이 있다.
  // (v0.11.15까지는 "내가 나온 빌라 현관"이었는데, 퇴근길·가게 앞 어느 출발점과도 맞지 않았다)
  // 지나온 터널 (뒤) — 앞 터널의 거울상. 끝은 막혀 있다: 돌아가는 길은 없다
  const backTunnel = new THREE.Group();
  group.add(backTunnel);
  box(20, 0.2, TUNNEL_LEN + 6, 0x181c28, 0, -0.1, TUNNEL_LEN / 2, backTunnel);
  for (const s of [-1, 1]) {
    box(0.9, TUNNEL_H, TUNNEL_LEN + 2, 0x1b202c,
      s * (MAIN_GAP_HALF + 0.55), TUNNEL_H / 2, TUNNEL_LEN / 2, backTunnel);
  }
  box(MAIN_GAP_HALF * 2 + 2, 0.9, TUNNEL_LEN + 2, 0x141922,
    0, TUNNEL_H + 0.45, TUNNEL_LEN / 2, backTunnel);
  box(20, 2.2, 1.4, 0x232838, 0, TUNNEL_H + 2.0, 0.7, backTunnel);
  box(20, WALL_H, 1, 0x232838, 0, WALL_H / 2, TUNNEL_LEN + 0.6, backTunnel); // 막힌 끝
  const backTunnelLight = new THREE.PointLight(0xbcc6d8, 3.2, 11, 2);
  backTunnelLight.position.set(0, TUNNEL_H - 0.35, TUNNEL_LEN / 2);
  backTunnel.add(backTunnelLight);

  // ---------- 앞 — 다리 밑 터널 (v0.11.14: 순간이동 대신 실제로 지나가는 공간) ----------
  // 구간과 구간은 이 터널로 이어진다. 좁고(개구부 폭) 낮고 어둡다 — 전환은 그 안에서 일어난다.
  // 마지막 구간(도착)에서는 숨긴다: 그때는 터널이 아니라 가게/집이 나와야 한다
  const tunnel = new THREE.Group();
  box(20, 0.2, TUNNEL_LEN + 6, 0x181c28, 0, -0.1, -L - TUNNEL_LEN / 2, tunnel); // 노면
  for (const s of [-1, 1]) {
    box(0.9, TUNNEL_H, TUNNEL_LEN + 2, 0x1b202c,
      s * (MAIN_GAP_HALF + 0.55), TUNNEL_H / 2, -L - TUNNEL_LEN / 2, tunnel);   // 옹벽
  }
  box(MAIN_GAP_HALF * 2 + 2, 0.9, TUNNEL_LEN + 2, 0x141922,
    0, TUNNEL_H + 0.45, -L - TUNNEL_LEN / 2, tunnel);                            // 상판(다리 바닥)
  box(20, 2.2, 1.4, 0x232838, 0, TUNNEL_H + 2.0, -L - 0.7, tunnel);              // 다리 난간 쪽 벽
  box(20, 2.2, 1.4, 0x232838, 0, TUNNEL_H + 2.0, -L - TUNNEL_LEN - 0.7, tunnel);
  box(20, WALL_H, 1, 0x232838, 0, WALL_H / 2, -L - TUNNEL_LEN - 4, tunnel);      // 터널 너머 마감
  // 터널 안의 유일한 빛 — 반쯤 죽은 등 (전환이 일어나는 지점을 어렴풋이 비춘다)
  const tunnelLight = new THREE.PointLight(0xbcc6d8, 3.2, 11, 2);
  tunnelLight.position.set(0, TUNNEL_H - 0.35, -L - TUNNEL_LEN / 2);
  tunnel.add(tunnelLight);
  group.add(tunnel);

  // 가로등 (구간 중반) — 모든 구간 공용, A-008 깜빡임 타깃
  const lampZ = -L * 0.45;
  const lampPole = box(0.15, 5, 0.15, 0x3a4157, HW - 0.4, 2.5, lampZ, group);
  const lampLight = new THREE.PointLight(0xffc687, 22, 18, 1.8);
  lampLight.position.set(HW - 0.9, 4.8, lampZ);
  group.add(lampLight);

  // 구간 끝 개구부 너머의 "다음 골목" 어렴풋한 빛
  const shopGlow = new THREE.PointLight(0xffb23e, 0, 26, 2);
  shopGlow.position.set(0, 3, -L - 6);
  group.add(shopGlow);

  // 그림자 사람 (A-010 HUM — 스폰 앵커 랜덤 출현. 등을 돌리고 서 있다 — 얼굴은 보여주지 않는다)
  // 위협 동작 없음 — 심리 호러 정체성(design-principles §1). 그냥 서 있는 것이 가장 무섭다 (fear-cognition §1 부재/이질)
  const figure = new THREE.Group();
  const fBody = new THREE.Mesh(new THREE.BoxGeometry(0.46, 1.22, 0.28), mats.darkFigure);
  fBody.position.y = 0.9;
  const fHead = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), mats.darkFigure);
  fHead.position.y = 1.66;
  figure.add(fBody, fHead);
  figure.visible = false;
  group.add(figure);

  // 접힘 흔적 — 반복 구간 입구 바닥의 분필 원 ("누가 여기 표시를 해뒀다").
  // 같은 곳을 다시 걷고 있음을 공간이 말해준다 (game.md 접힘 인지 4요소 ④)
  const foldMark = new THREE.Mesh(
    new THREE.RingGeometry(0.42, 0.5, 24),
    new THREE.MeshBasicMaterial({ color: 0x8b90a8, transparent: true, opacity: 0.32 }),
  );
  foldMark.rotation.x = -Math.PI / 2;
  foldMark.position.set(0.9, 0.03, -5.5); // 스폰 직후 자연 시야 — 광원(가로등) 이전이라도 근거리라 식별됨
  foldMark.visible = false;
  group.add(foldMark);

  // FF-1204 간판(개구부 위) — 마지막 구간에서만 점등. 글자는 캔버스 텍스처 (A-012 오탈자 타깃)
  const shopTex: [THREE.CanvasTexture, THREE.CanvasTexture] = [
    shopSignTexture('FF-1204 24시'),
    shopSignTexture('FF-1204 24시간요'),
  ];
  const shopSignMat = new THREE.MeshStandardMaterial({
    color: 0xffffff, map: shopTex[0], emissiveMap: shopTex[0], emissive: 0x000000,
  });
  const shopSign = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.9, 0.3), shopSignMat);
  shopSign.position.set(0, 4.6, -L + 0.2); // 끝벽(z=-L~-L-1)보다 앞 — 벽 기둥에 좌우가 가리지 않게
  group.add(shopSign);

  // ---------- 차 — 신호를 어기면 지나간다 (v0.11.7) ----------
  // 정물성 원칙(추격 없음)과 충돌하지 않는다: 쫓아오지 않고, 규칙 위반에 대한 1회성 환경 반응이다
  const car = new THREE.Group();
  const carBody = new THREE.Mesh(
    new THREE.BoxGeometry(4.1, 0.95, 1.75),
    new THREE.MeshStandardMaterial({ color: 0x161a24, roughness: 0.7 }),
  );
  carBody.position.y = 0.72;
  const carRoof = new THREE.Mesh(
    new THREE.BoxGeometry(2.1, 0.62, 1.6),
    new THREE.MeshStandardMaterial({ color: 0x11141d, roughness: 0.7 }),
  );
  carRoof.position.set(-0.25, 1.45, 0);
  car.add(carBody, carRoof);
  // 헤드라이트 — 어둠 속에서 먼저 보이는 것은 빛이다 (경고이자 공포)
  const headMat = new THREE.MeshStandardMaterial({ color: 0xfff6d8, emissive: 0xfff0c8 });
  for (const hz of [-0.6, 0.6]) {
    const h = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.22, 0.3), headMat);
    h.position.set(2.02, 0.78, hz);
    car.add(h);
  }
  const carLight = new THREE.PointLight(0xffe9b8, 0, 16, 2);
  carLight.position.set(2.6, 0.9, 0);
  car.add(carLight);
  car.position.set(0, 0, ROAD_Z);
  car.visible = false;
  group.add(car);

  return {
    refs: {
      group, scene, moon, tunnel, backTunnel, tunnelLight, backTunnelLight,
      car, carLight, ambient, foldMark, lampLight, shopGlow, shopSign, shopSignMat,
      shopTex, figure,
    },
    hit: {
      lamp_flicker: [lampPole],
      shop_typo: [shopSign],
      figure: [figure],
    },
  };
}

/** 차도 구멍 메우기 — 벽은 공용이라 뚫려 있다. 테마 4(교차로)만 열어 두고 나머지는 막는다 (v0.11.7) */
export function patchRoadWall(theme: THREE.Group) {
  box(1, WALL_H, ROAD_HALF * 2, 0x232838, HW + 0.5, WALL_H / 2, ROAD_Z, theme);
  box(1, WALL_H, ROAD_HALF * 2, 0x20263a, -HW - 0.5, WALL_H / 2, ROAD_Z, theme);
}
