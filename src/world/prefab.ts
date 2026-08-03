// 공용 복도 — 어느 구간에나 있는 것. 테마는 이 위에 얹힌다.
// 바닥·양쪽 벽·끝벽(중앙 개구부) · 앞뒤 다리 밑 터널 · 가로등 · 접힘 분필 자국 ·
// FF-1204 간판 · 그림자 사람(전 구간 공용 HUM) · 차.

import * as THREE from 'three';
import { MAIN_GAP_HALF } from '../config';
import { type CorridorRefs } from './refs';
import { box, boxOf, concrete, shopSignTexture, type SharedMats } from './kit';
import {
  L, HW, WALL_H, ROAD_Z, ROAD_HALF, TUNNEL_LEN, TUNNEL_H, TUNNEL_IN_HALF,
  TUNNEL_LAMP_AT, TUNNEL_LAMP_COLOR, TUNNEL_LAMP_EMISSIVE, TUNNEL_LAMP_INTENSITY, FOG_NIGHT,
} from './layout';

// ---------- 다리 밑 터널 (v0.11.21 마감) ----------
// **콘크리트는 골목 벽과 같은 것을 쓴다** — 옹벽은 왼쪽 벽(0x20263a), 갱구·다리 옆면은
// 오른쪽 벽(0x232838). 터널이 따로 노는 물건이 아니라 이 동네가 이어진 것으로 읽히게.
// 텍스처는 쓰지 않는다 (에셋 0 · 로우폴리 + 안개 + 포인트라이트 노선 — visual-polish §5).
// 싼티는 재질이 아니라 **형태의 결여**에서 온다: 갱구의 두께, 벽의 세로 리듬,
// 천장의 보, 하늘에 걸리는 난간 실루엣 — 그림자가 걸릴 면을 만들어 주는 것이 전부다.
function tunnelMats() {
  return {
    wall: concrete(0x20263a),    // 옹벽 = 골목 왼쪽 벽과 같은 콘크리트
    portal: concrete(0x232838),  // 갱구(액자)·다리 옆면 = 골목 오른쪽 벽과 같은 콘크리트
    deck: concrete(0x1a1f2b),    // 상판(다리 바닥)
    base: concrete(0x161b25),    // 걸레받이 — 때가 타는 아랫단
    trim: concrete(0x252c3d),    // 물끊기 띠·난간 — 빛을 받는 윗단
    girder: concrete(0x141922),  // 천장 보
    groove: concrete(0x11151d),  // 신축이음·측구·노면 이음선 (파인 곳)
    road: concrete(0x181c28),    // 노면 = 골목 바닥과 같은 아스팔트
  };
}
type TunnelMats = ReturnType<typeof tunnelMats>;

/** 터널 한 개. **앞뒤가 이 함수 하나로 만들어진다** — 전환은 터널 한가운데의 암흑에서
 *  일어나고, 들어간 깊이 그대로 반대편 터널의 같은 깊이로 옮겨진다. 두 터널의 형태가
 *  어긋나면 그 순간 이음매가 드러난다 (v0.11.16 무봉합의 전제).
 *  @param mouthZ 갱구의 z  @param s 안쪽 방향 (+1/-1)  @param capDist 터널 끝에서 마감벽까지
 */
function buildTunnel(
  mouthZ: number, s: 1 | -1, capDist: number,
  M: TunnelMats, lampMat: THREE.Material,
): { group: THREE.Group; light: THREE.PointLight } {
  const t = new THREE.Group();
  const at = (u: number) => mouthZ + s * u;   // 갱구에서 u미터 들어간 지점
  const IH = TUNNEL_IN_HALF;
  const mid = TUNNEL_LEN / 2;
  // 옹벽·천장은 **갱구(u=0)에서 시작한다**. 예전에는 u=-1까지 나와 있어서 골목 쪽
  // 통행 구역(|x| 1.5~2.4)을 침범했고, 벽에 붙어 걸으면 카메라가 콘크리트에 들어갔다
  const bodyLen = TUNNEL_LEN + 2;
  const bodyAt = at(mid + 1);

  // 노면 — 골목 바닥과 같은 아스팔트가 그대로 이어진다 (바닥은 넉넉히: 이음매를 감춘다)
  boxOf(M.road, 20, 0.2, TUNNEL_LEN + 6, 0, -0.1, at(mid), t);
  // 노면 이음선 — 통짜 바닥이 가장 싸 보인다. 가로 줄 두 개면 길이가 읽힌다
  for (const u of [2.2, 4.4]) boxOf(M.groove, IH * 2 + 0.6, 0.04, 0.08, 0, 0.02, at(u), t);

  for (const side of [-1, 1]) {
    const x = side * (IH + 0.45);            // 옹벽 두께 0.9 — 안쪽면이 IH
    boxOf(M.wall, 0.9, TUNNEL_H, bodyLen, x, TUNNEL_H / 2, bodyAt, t);
    // 걸레받이 — 0.07 안쪽으로 더 나온 아랫단 (물때가 지는 자리)
    boxOf(M.base, 1.0, 0.5, bodyLen, side * (IH + 0.43), 0.25, bodyAt, t);
    // 물끊기 띠 — 천장 바로 아래, 빛을 받아 벽의 윗선을 그린다
    boxOf(M.trim, 1.0, 0.14, bodyLen, side * (IH + 0.43), TUNNEL_H - 0.3, bodyAt, t);
    // 신축이음 — 세로 홈. 이게 없으면 옹벽이 그냥 판때기다
    for (const u of [1.2, 2.6, 4.0, 5.4]) {
      boxOf(M.groove, 0.07, TUNNEL_H - 1.0, 0.09, side * (IH - 0.02), (TUNNEL_H + 0.5) / 2, at(u), t);
    }
    // 측구 — 벽 밑을 따라가는 배수 홈
    boxOf(M.groove, 0.34, 0.06, bodyLen, side * (IH - 0.17), 0.035, bodyAt, t);
  }

  // 천장(상판) + 보 — 고개를 들면 다리 바닥이 있다
  boxOf(M.deck, IH * 2 + 2, 0.9, bodyLen, 0, TUNNEL_H + 0.45, bodyAt, t);
  for (const u of [1.0, 3.0, 5.0, 7.0]) {
    boxOf(M.girder, IH * 2 + 1.2, 0.3, 0.4, 0, TUNNEL_H - 0.13, at(u), t);
  }

  // 갱구(액자) — 골목 벽에서 터널로 넘어가는 두께. 종이처럼 뚫린 구멍이 가장 싸 보인다.
  // 안쪽면은 옹벽과 나란히(IH) — 통로를 좁히지 않는다.
  // 끝벽(z ∓0.5)보다 0.3m 내밀어 골목에서 액자가 보이게 하되, 통과 방지선(0.5m 앞)보다는
  // 안쪽이라 카메라가 닿지 않는다. **앞뒤가 같은 값** — 터널은 완전한 거울상이다
  const portalU = 0.125;
  for (const side of [-1, 1]) {
    boxOf(M.portal, 0.78, TUNNEL_H + 0.62, 0.85, side * (IH + 0.39), (TUNNEL_H + 0.62) / 2, at(portalU), t);
  }
  boxOf(M.portal, IH * 2 + 1.9, 0.62, 0.9, 0, TUNNEL_H + 0.31, at(portalU), t);          // 상인방
  boxOf(M.trim, IH * 2 + 2.4, 0.16, 1.12, 0, TUNNEL_H + 0.7, at(portalU - 0.08), t);     // 물끊기 처마

  // 다리 옆면 + 난간 — 골목에서 보면 이 실루엣이 "다리 밑"을 말해준다.
  // 하늘(배경색)에 걸리는 기둥 열이 핵심 — 통짜 벽은 그냥 벽으로 읽힌다
  for (const u of [0.1, TUNNEL_LEN - 0.1]) {
    boxOf(M.portal, 20, 0.62, 0.62, 0, TUNNEL_H + 1.0, at(u), t);   // 상판 가장자리 보
    boxOf(M.portal, 20, 1.15, 0.44, 0, TUNNEL_H + 1.89, at(u), t);  // 난간 벽
  }
  for (let bx = -3.6; bx <= 3.61; bx += 0.9) {                       // 난간 기둥 (개구부 너비만큼)
    boxOf(M.trim, 0.16, 0.6, 0.3, bx, TUNNEL_H + 2.76, at(0.1), t);
  }
  boxOf(M.trim, 20, 0.16, 0.38, 0, TUNNEL_H + 3.14, at(0.1), t);     // 난간 상부 가로대

  // 전등 — 천장에 매달린 등기구. 발광부는 갓 안쪽으로 물려 테두리가 그림자를 만든다
  // (판을 그냥 붙이면 빛나는 종이짝으로 보인다). 발광은 setTunnelDark가 함께 끈다
  for (const u of TUNNEL_LAMP_AT) {
    boxOf(M.girder, 0.44, 0.16, 0.24, 0, TUNNEL_H - 0.44, at(u), t);  // 갓
    boxOf(lampMat, 0.3, 0.05, 0.15, 0, TUNNEL_H - 0.545, at(u), t);   // 발광부
  }
  // 실제 광원은 하나 — 가운데 등기구 아래
  const light = new THREE.PointLight(TUNNEL_LAMP_COLOR, TUNNEL_LAMP_INTENSITY, 11, 2);
  light.position.set(0, TUNNEL_H - 0.7, at(mid));
  t.add(light);

  // 마감 — 앞 터널은 더 이어지는 것처럼, 뒤 터널은 코앞에서 막는다 (돌아가는 길은 없다)
  boxOf(M.portal, 20, WALL_H, 1, 0, WALL_H / 2, at(TUNNEL_LEN + capDist), t);

  return { group: t, light };
}

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

  // 끝 벽 — 개구부(중앙)를 남기고 2조각. **골목 양 끝에 같은 것이 하나씩** (v0.11.22):
  // 뒤에는 이게 없어서 골목 벽이 z=0에서 그냥 끊겼고, 돌아보면 터널 옆구리 너머로
  // 바깥(빈 공간)이 그대로 보였다. 터널이 대칭이면 그것을 감싸는 벽도 대칭이어야 한다
  const endWallW = HW - MAIN_GAP_HALF + 1;
  for (const ez of [-L - 0.5, 0.5]) {
    for (const s of [-1, 1]) {
      box(endWallW, WALL_H, 1, 0x232838, s * (MAIN_GAP_HALF + endWallW / 2), WALL_H / 2, ez, group);
    }
  }

  // ---------- 앞뒤 터널 (v0.11.16 구조 / v0.11.21 마감) ----------
  // 이 동네의 골목들은 다리 밑 터널로 이어져 있다. 어디서 출발하든 뒤에는 지나온 터널이 있다.
  // (v0.11.15까지는 "내가 나온 빌라 현관"이었는데, 퇴근길·가게 앞 어느 출발점과도 맞지 않았다)
  // **두 터널을 같은 함수로 만든다** — 형태가 어긋나면 한가운데의 무봉합 전환이 드러난다
  const tm = tunnelMats();
  const tunnelLampMat = new THREE.MeshStandardMaterial({
    color: 0x2b3240, emissive: TUNNEL_LAMP_EMISSIVE,
  });
  // 앞 — 구간과 구간을 잇는다. 마지막 구간(도착)에서는 숨긴다: 그때는 가게·집이 나와야 한다.
  // 마감벽을 멀리(4m) 둬서 갱구 너머가 더 이어지는 것처럼 보인다
  const front = buildTunnel(-L, -1, 4, tm, tunnelLampMat);
  // 뒤 — 지나온 터널. **형태는 앞과 완전히 같고**, 다른 것은 마감벽 거리 하나뿐이다:
  // 끝이 코앞에서 막혀 있다 — 돌아가는 길은 없다
  const back = buildTunnel(0, 1, 0.6, tm, tunnelLampMat);
  const tunnel = front.group;
  const backTunnel = back.group;
  group.add(backTunnel);
  group.add(tunnel);
  const tunnelLights = [front.light, back.light];

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
      group, scene, moon, tunnel, backTunnel, tunnelLights, tunnelLampMat,
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
