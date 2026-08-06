// 공용 복도 — 어느 구간에나 있는 것. 테마는 이 위에 얹힌다.
// 바닥·양쪽 벽·끝벽(중앙 개구부) · 앞뒤 다리 밑 터널 · 가로등 · 늘어남 분필 자국 ·
// FF-1204 간판 · 그림자 사람(전 구간 공용 HUM) · 차.

import * as THREE from 'three';
import { MAIN_GAP_HALF } from '../config';
import { type CorridorRefs } from './refs';
import {
  box, boxOf, concrete, shopSignTexture, asphaltTexture, wallTexture, surfaceMat,
  duskSkyTexture,
  type SharedMats,
} from './kit';
import { buildShopFront } from './shop';
import { buildHomeFront } from './home';
import {
  L, HW, WALL_H, ROAD_Z, ROAD_HALF, TUNNEL_LEN, TUNNEL_H, TUNNEL_IN_HALF,
  TUNNEL_LAMP_AT, TUNNEL_LAMP_COLOR, TUNNEL_LAMP_EMISSIVE, TUNNEL_LAMP_INTENSITY, FOG_NIGHT,
  ROAD_TUNNEL_X, ROAD_TUNNEL_LEN, ROAD_TUNNEL_H,
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
    // 검은 안개 판 — 겹칠수록 짙어진다 (넷을 합쳐 약 96% 차폐).
    // 조명을 받지 않고(MeshBasic) 장면 안개도 타지 않아 **밤이든 아침이든 똑같이 검다**.
    // DoubleSide 필수 — 앞 터널은 판의 뒷면을 보게 된다
    fog: [0.22, 0.32, 0.45, 0.6, 0.75].map((opacity) => new THREE.MeshBasicMaterial({
      color: 0x04060a, transparent: true, opacity, depthWrite: false,
      fog: false, side: THREE.DoubleSide,
    })),
  };
}
type TunnelMats = ReturnType<typeof tunnelMats>;

/** 골목 터널과 차도 터널이 **같은 콘크리트**를 쓰도록 한 벌만 만들어 공유한다 */
let sharedMats: TunnelMats | null = null;
const getTunnelMats = () => (sharedMats ??= tunnelMats());

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

  // ---------- 검은 안개 (v0.11.30) ----------
  // **밖에서 보면 터널 속이 들여다보이지 않아야 한다.** 장면 안개(FogExp2)는 카메라 기준이라
  // "저 안이 어둡다"를 만들지 못한다 — 들어가야만 어두워진다. 깊이를 막는 판을 세운다.
  // 첫 판은 전환 지점(4.5m)보다 **살짝 앞**(4.2m)에 둔다: 그 깊이의 어둠이 이미 93%라
  // 판을 지나는 순간이 눈에 띄지 않고, **안개를 통과하면 다음 골목**이 된다.
  // 나머지 셋은 그 너머 — 플레이어는 닿지 않고, 밖에서 볼 때만 겹쳐 짙어진다
  // 판은 **터널 단면보다 한참 크게**. 단면에 딱 맞추면 가까이서 판의 테두리가 보여
  // 동심 사각형이 겹친 '검은 액자'로 읽힌다 (실측으로 걸렀다). 크게 만들면 옹벽·천장에
  // 파묻혀(깊이 테스트로 가려져) **개구부 안쪽만 검게** 남는다 — 테두리가 사라진다
  // 앞쪽 판일수록 옅게 — 밝은 벽에서 검정으로 넘어가는 경계를 완만하게 (합성 약 97% 차폐)
  [3.2, 4.2, 5.2, 6.4, 7.8].forEach((u, i) => {
    const card = new THREE.Mesh(new THREE.PlaneGeometry(14, 11), M.fog[i]);
    card.position.set(0, TUNNEL_H / 2, at(u));
    t.add(card);
  });

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

  // ---------- ⭐ 퇴근길 하늘 (v0.11.52) — 그라데이션 스카이 돔 ----------
  // `scene.background`는 **터널 암전 로직이 색으로 다루고 있어서**(setTunnelDark) 텍스처로
  // 바꿀 수 없다. 대신 돔을 하나 띄우고 퇴근길에만 켠다 — 배경색은 그대로 뒤에 남는다.
  //
  // ⚠ **안개를 끈다.** 90m 밖이라 안개를 켜면 98%가 안개색으로 덮여 그라데이션이 사라진다.
  //    하늘은 무한히 멀고 그 색 자체가 대기이므로 이게 물리적으로도 맞다.
  //    대신 터널 암전은 setTunnelDark가 **재질 색을 직접 곱해** 따로 처리한다.
  // ⚠ `depthWrite: false` + `renderOrder: -1` — 가장 먼저 그리고 아무것도 가리지 않는다.
  //    반지름 80, 골목 중앙에 두면 어느 지점에서도 카메라 far(120) 안에 들어온다
  const skyDome = new THREE.Mesh(
    new THREE.SphereGeometry(80, 24, 16),
    new THREE.MeshBasicMaterial({
      map: duskSkyTexture(), side: THREE.BackSide, fog: false, depthWrite: false,
    }),
  );
  skyDome.position.set(0, 0, -L / 2);
  skyDome.renderOrder = -1;
  skyDome.visible = false; // 밤에는 없다 — setMorning이 켠다
  scene.add(skyDome);

  // ---------- 복도 골격 ----------
  // ⭐ **표면 텍스처** (v0.11.52) — 벽과 바닥이 민짜라 빛이 걸릴 데가 없었다.
  // 타일 한 변을 실측 미터로 잡아 두고(아스팔트 2.5m · 벽 3m) 면 길이로 반복 수를 나눈다:
  // 조각마다 길이가 다르므로 **반복 수를 손으로 적으면 반드시 어긋난다**
  const ASPHALT_M = 2.5;
  const WALL_M = 3;
  const asphalt = asphaltTexture();
  const wallTex = wallTexture();

  // 바닥 (아스팔트)
  const floorW = HW * 2 + 14;
  const floorD = L + 14;
  boxOf(surfaceMat(0x181c28, asphalt, floorW / ASPHALT_M, floorD / ASPHALT_M),
    floorW, 0.2, floorD, 0, -0.1, -L / 2, group);

  // 양쪽 벽 — 통짜였으나 **차도 구간만 뚫는다** (v0.11.7). 벽은 공용이므로 여기서 갈라 두고,
  // 테마 1·2·3·5는 구멍을 메우는 패치를 각자 붙인다 — 테마 4만 실제로 열린 교차로가 된다.
  // (벽으로 막힌 골목 한가운데 횡단보도가 그려져 있던 기존 모순도 함께 해소)
  const nearLen = -(ROAD_Z + ROAD_HALF);      // 구간 입구 ~ 도로 앞
  const farLen = L + (ROAD_Z - ROAD_HALF);    // 도로 뒤 ~ 구간 끝
  // 벽면(±X)의 UV는 u=깊이 · v=높이다 — 반복 수를 그 축에 맞춘다
  const wallMat = (color: number, len: number) =>
    surfaceMat(color, wallTex, len / WALL_M, WALL_H / WALL_M);
  for (const [wx, color] of [[HW + 0.5, 0x232838], [-HW - 0.5, 0x20263a]] as Array<[number, number]>) {
    boxOf(wallMat(color, nearLen), 1, WALL_H, nearLen, wx, WALL_H / 2, -nearLen / 2, group);
    boxOf(wallMat(color, farLen), 1, WALL_H, farLen, wx, WALL_H / 2, ROAD_Z - ROAD_HALF - farLen / 2, group);
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
  const tm = getTunnelMats();
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

  // 가로등 (구간 중반) — 모든 구간 공용, A-008 깜빡임 타깃.
  // **깊이 게이지가 이 등이다** — 숫자를 안 쓰는 대신 밝기로 남은 여유를 말한다(spec §3).
  //
  // ⚠ 예전에는 기둥 하나(0.15×5×0.15)뿐이었고 광원은 x 2.1·y 4.8에 따로 떠 있었다.
  //   기둥과 빛이 이어져 보이지 않아 **정체를 알 수 없는 막대**로 읽혔다.
  //   암(arm)과 등기구를 달아 빛이 나오는 자리를 눈에 보이게 잇는다 — 광원 위치는 그대로다
  const lampZ = -L * 0.45;
  const lampPole = box(0.15, 5, 0.15, 0x3a4157, HW - 0.4, 2.5, lampZ, group);
  box(0.62, 0.1, 0.1, 0x3a4157, HW - 0.7, 4.95, lampZ, group);        // 등을 내미는 암
  const lampHead = box(0.5, 0.14, 0.26, 0x2a3142, HW - 0.9, 4.86, lampZ, group); // 등기구 갓
  (lampHead.material as THREE.MeshStandardMaterial).emissive.setHex(0x3a2a12);
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

  // 늘어남 흔적 — 반복 구간 입구 바닥의 분필 원 ("누가 여기 표시를 해뒀다").
  // 같은 곳을 다시 걷고 있음을 공간이 말해준다 (game.md 늘어남 인지 4요소 ④)
  const stretchMark = new THREE.Mesh(
    new THREE.RingGeometry(0.42, 0.5, 24),
    new THREE.MeshBasicMaterial({ color: 0x8b90a8, transparent: true, opacity: 0.32 }),
  );
  stretchMark.rotation.x = -Math.PI / 2;
  stretchMark.position.set(0.9, 0.03, -5.5); // 스폰 직후 자연 시야 — 광원(가로등) 이전이라도 근거리라 식별됨
  stretchMark.visible = false;
  group.add(stretchMark);

  // FF-1204 간판(개구부 위) — 마지막 구간에서만 점등. 글자는 캔버스 텍스처 (A-012 오탈자 타깃)
  const shopTex: [THREE.CanvasTexture, THREE.CanvasTexture] = [
    shopSignTexture('감자튀김 전문점!!\nff-1204'),
    // 이상 — 간판이 **묻지도 않은 말에 대답한다** (원래 "24시" → "24시간요"가 하던 일)
    shopSignTexture('감자튀김 전문점이요\nff-1204'),
  ];
  const shopSignMat = new THREE.MeshStandardMaterial({
    color: 0xffffff, map: shopTex[0], emissiveMap: shopTex[0], emissive: 0x000000,
  });
  // **글자는 플레이어를 향한 앞면(+Z)에만.** BoxGeometry에 map을 그냥 주면 여섯 면에
  // 다 발려 아랫면·옆면으로 글자가 비쳤다 (v0.11.32 실측). 면별 재질 배열로 앞면만 준다
  const signSide = concrete(0x140d05);
  const shopSign = new THREE.Mesh(
    new THREE.BoxGeometry(3.4, 0.9, 0.3),
    [signSide, signSide, signSide, signSide, shopSignMat, signSide],
  );
  shopSign.position.set(0, 4.6, -L + 0.2); // 끝벽(z=-L~-L-1)보다 앞 — 벽 기둥에 좌우가 가리지 않게
  group.add(shopSign);

  // 목적지 둘 — 개구부 너머. 마지막 구간에서 **둘 중 하나만** 켜진다 (setShopNear)
  const shopFront = buildShopFront();   // 퇴근길 끝 = FF-1204
  const homeFront = buildHomeFront();   // 귀갓길 끝 = 집
  group.add(shopFront, homeFront);

  // 뒤의 FF-1204 — **밤의 출발점에서 돌아보면 방금 나온 가게가 있어야 한다** (v0.11.35).
  // 인트로가 "튀김을 먹고 나왔다"인데 뒤에는 터널이 있었다. v0.11.16이 뒤를 터널로 통일한 건
  // 그때 가게가 없었기 때문이고, 이제 있다 — 같은 가게를 180° 돌려 세운다.
  // 앞 인스턴스(z −42.6)를 y축으로 뒤집고 −36 옮기면 카운터가 z +7.1에 온다
  const shopBack = buildShopFront(true);
  shopBack.rotation.y = Math.PI;
  shopBack.position.z = -L;
  group.add(shopBack);

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
      group, scene, moon, skyDome, tunnel, backTunnel, tunnelLights, tunnelLampMat,
      car, carLight, ambient, stretchMark, lampLight, shopGlow, shopSign, shopSignMat,
      shopTex, shopFront, homeFront, shopBack, figure,
    },
    hit: {
      lamp_flicker: [lampPole],
      shop_typo: [shopSign],
      figure: [figure],
    },
  };
}

/** 차도 터널 — **길 양쪽 끝도 다리 밑으로 이어진다** (v0.11.31).
 *  골목 터널과 같은 재질·같은 문법(갱구 액자 · 옹벽 · 천장 보 · 검은 안개)을 쓰되,
 *  차가 지나므로 더 넓고(도로 폭 그대로) 높다. 18m 밖에서 보이는 것이라
 *  신축이음처럼 가까이서만 읽히는 디테일은 넣지 않는다 (메시 수 절약).
 *  광원도 두지 않는다 — 이 거리에서 기여가 없고 광원 수가 곧 성능이다 (visual-polish §4).
 *  @param dir +1 = 오른쪽(+x) 끝, -1 = 왼쪽 */
export function buildRoadTunnel(dir: 1 | -1, parent: THREE.Object3D) {
  const M = getTunnelMats();
  const RH = ROAD_HALF;                       // 통로 반폭 = 도로 폭 그대로 (옹벽이 도로 벽과 이어진다)
  const H = ROAD_TUNNEL_H;
  const LEN = ROAD_TUNNEL_LEN;
  const at = (u: number) => dir * (ROAD_TUNNEL_X + u);  // 갱구에서 u미터 들어간 x
  const mid = at(LEN / 2 + 1);

  for (const s of [-1, 1]) {
    boxOf(M.wall, LEN + 2, H, 0.9, mid, H / 2, ROAD_Z + s * (RH + 0.45), parent);      // 옹벽
    boxOf(M.base, LEN + 2, 0.5, 1.0, mid, 0.25, ROAD_Z + s * (RH + 0.43), parent);     // 걸레받이
  }
  boxOf(M.deck, LEN + 2, 0.9, RH * 2 + 2, mid, H + 0.45, ROAD_Z, parent);              // 천장(상판)
  for (const u of [1.4, 4.0]) {
    boxOf(M.girder, 0.4, 0.3, RH * 2 + 1.2, at(u), H - 0.13, ROAD_Z, parent);          // 천장 보
  }

  // 갱구 액자 — 골목 터널과 같은 모양. 도로 쪽으로 살짝 내밀어 두께가 읽히게
  for (const s of [-1, 1]) {
    boxOf(M.portal, 0.85, H + 0.62, 0.78, at(0.1), (H + 0.62) / 2,
      ROAD_Z + s * (RH + 0.39), parent);
  }
  boxOf(M.portal, 0.9, 0.62, RH * 2 + 1.9, at(0.1), H + 0.31, ROAD_Z, parent);         // 상인방
  boxOf(M.trim, 1.12, 0.16, RH * 2 + 2.4, at(0.02), H + 0.7, ROAD_Z, parent);          // 물끊기 처마

  // 등기구 — 광원 없이 발광 몸체만. 안개 앞에 하나 걸어 "안에 뭔가 있다"만 남긴다
  const lampMat = new THREE.MeshStandardMaterial({
    color: 0x2b3240, emissive: TUNNEL_LAMP_EMISSIVE,
  });
  boxOf(M.girder, 0.24, 0.16, 0.5, at(1.5), H - 0.44, ROAD_Z, parent);
  boxOf(lampMat, 0.17, 0.05, 0.38, at(1.5), H - 0.55, ROAD_Z, parent);

  // 갱구 위 마감 — 터널 천장(5.5)에서 도로 벽 높이(7)까지 막는다.
  // 이게 없으면 그 틈으로 **안개 판과 저 안쪽 마감벽이 비쳐** 검은 띠가 생긴다 (실측으로 걸렀다)
  boxOf(M.portal, 1, WALL_H - (H + 0.9), RH * 2 + 2, at(0.5), (H + 0.9 + WALL_H) / 2, ROAD_Z, parent);

  // 검은 안개 — 골목 터널과 같은 판. 법선을 x축으로 돌린다.
  // 첫 판(1.2m)은 차가 출발하는 지점(±22)보다 바깥이라 **차는 안개 속에서 나온다**.
  // 크기는 **터널 단면에 맞춘다**(골목 터널과 반대): 골목은 판을 키워 벽에 파묻었지만
  // 여기는 터널 위·옆을 감싸는 구조가 얇아, 키우면 오히려 삐져나온다
  [1.2, 2.4, 3.8, 5.4, 7.0].forEach((u, i) => {
    const card = new THREE.Mesh(new THREE.PlaneGeometry(RH * 2 + 1, H + 0.8), M.fog[i]);
    card.position.set(at(u), H / 2, ROAD_Z);
    card.rotation.y = Math.PI / 2;
    parent.add(card);
  });

  // 마감 — 안개 너머는 보이지 않지만, 뚫린 채로 두지 않는다
  boxOf(M.portal, 1, WALL_H, RH * 2 + 2, at(LEN + 2), WALL_H / 2, ROAD_Z, parent);
}

/** 차도 구멍 메우기 — 벽은 공용이라 뚫려 있다. 테마 4(교차로)만 열어 두고 나머지는 막는다 (v0.11.7) */
export function patchRoadWall(theme: THREE.Group) {
  box(1, WALL_H, ROAD_HALF * 2, 0x232838, HW + 0.5, WALL_H / 2, ROAD_Z, theme);
  box(1, WALL_H, ROAD_HALF * 2, 0x20263a, -HW - 0.5, WALL_H / 2, ROAD_Z, theme);
}
