// 공용 복도 — 어느 구간에나 있는 것. 테마는 이 위에 얹힌다.
// 바닥·양쪽 벽·끝벽(중앙 개구부) · 앞뒤 다리 밑 터널 · 가로등 · 늘어남 분필 자국 ·
// FF-1204 간판 · 그림자 사람(전 구간 공용 HUM) · 차.

import * as THREE from 'three';
import { MAIN_GAP_HALF } from '../config';
import { type CorridorRefs } from './refs';
import {
  box, boxOf, concrete, shopSignTexture, asphaltTexture, wallTexture, surfaceMat,
  duskSkyTexture, afternoonSkyTexture, taxiSignTexture, ASPHALT_M, WALL_M,
  type SharedMats,
} from './kit';
import { buildShopFront } from './shop';
import { buildHomeFront } from './home';
import {
  L, HW, WALL_H, ROAD_Z, ROAD_HALF, TUNNEL_LEN, TUNNEL_H, TUNNEL_IN_HALF,
  TUNNEL_LAMP_AT, TUNNEL_LAMP_COLOR, TUNNEL_LAMP_EMISSIVE, TUNNEL_LAMP_INTENSITY, FOG_NIGHT,
  ROAD_TUNNEL_X, ROAD_TUNNEL_LEN, ROAD_TUNNEL_H, SUN_FOCUS, SUN_SHADOW_HALF, sunk,
} from './layout';

// ---------- 다리 밑 터널 (v0.11.21 마감) ----------
// **콘크리트는 골목 벽과 같은 것을 쓴다** — 옹벽은 왼쪽 벽(0x20263a), 갱구·다리 옆면은
// 오른쪽 벽(0x232838). 터널이 따로 노는 물건이 아니라 이 동네가 이어진 것으로 읽히게.
// 싼티는 재질이 아니라 **형태의 결여**에서 온다: 갱구의 두께, 벽의 세로 리듬,
// 천장의 보, 하늘에 걸리는 난간 실루엣 — 그림자가 걸릴 면을 만들어 주는 것이 전부다.
//
// ⭐ **표면 텍스처도 골목과 같은 것을 쓴다** (v0.11.61). 여기 오래 "텍스처는 쓰지 않는다"고
// 적혀 있었는데, 그것은 v0.11.52가 골목 벽·바닥에 캔버스 표면 텍스처를 넣기 **전**의 기록이다.
// 색만 같고 질감이 다르면 터널은 여전히 딴 물건으로 읽힌다 — 같은 콘크리트를 쓰겠다는
// 원래 의도가 절반만 지켜져 있었다. (캔버스 생성이라 **에셋 0은 그대로다**)
// ⚠ 큰 면만 입힌다: 옹벽·노면·갱구·상판. 걸레받이·물끊기 띠·천장 보·홈은 민짜로 남긴다 —
//   0.07~0.3m짜리 조각에 256px 타일을 붙이면 질감이 아니라 노이즈고, 재질만 늘어난다
//   (골목의 전신주도 같은 이유로 `concrete`다)
/** 표면 텍스처를 입힌 터널 재질 — **보이는 면의 두 변을 직접 넘긴다** (u축, v축 순).
 *
 *  ⚠ `BoxGeometry`는 면마다 UV 축이 다르다: ±X면은 (깊이, 높이) · ±Y면은 (폭, 깊이) ·
 *  ±Z면은 (폭, 높이). 게다가 **골목 터널과 차도 터널은 서로 90° 돌아가 있어서**
 *  치수만 보고 자동으로 고를 수가 없다 (골목 옹벽은 z로 길고, 차도 옹벽은 x로 길다).
 *  그래서 호출하는 쪽이 "이 면에서 무엇이 가로이고 무엇이 세로인가"를 정한다.
 *  ⚠ 벽 텍스처는 **물때가 세로로 흐르는** 결이 있다 (kit.ts wallTexture) — u/v를 뒤집으면
 *    그 결이 눕는다. 아스팔트는 등방성이라 뒤집혀도 티가 안 난다.
 *
 *  ⭐ 같은 치수면 재질을 재사용한다. 터널은 대칭이고(양쪽 옹벽·갱구 기둥 쌍) 앞뒤 터널이
 *  같은 형태라, 이 캐시가 텍스처 복제를 절반 이하로 줄인다 (`surfaceMat`이 매번 clone한다) */
function surfRole(color: number, tex: THREE.CanvasTexture, meters: number) {
  const cache = new Map<string, THREE.MeshStandardMaterial>();
  return (u: number, v: number) => {
    const key = `${u.toFixed(2)}|${v.toFixed(2)}`;
    let m = cache.get(key);
    if (!m) {
      m = surfaceMat(color, tex, u / meters, v / meters);
      cache.set(key, m);
    }
    return m;
  };
}

function tunnelMats() {
  const asphalt = asphaltTexture();
  const wallTex = wallTexture();
  return {
    wall: surfRole(0x20263a, wallTex, WALL_M),    // 옹벽 = 골목 왼쪽 벽과 같은 콘크리트
    portal: surfRole(0x232838, wallTex, WALL_M),  // 갱구(액자)·다리 옆면 = 골목 오른쪽 벽
    deck: surfRole(0x1a1f2b, wallTex, WALL_M),    // 상판(다리 바닥)
    base: concrete(0x161b25),    // 걸레받이 — 때가 타는 아랫단
    trim: concrete(0x252c3d),    // 물끊기 띠·난간 — 빛을 받는 윗단
    girder: concrete(0x141922),  // 천장 보
    groove: concrete(0x11151d),  // 신축이음·측구·노면 이음선 (파인 곳)
    road: surfRole(0x181c28, asphalt, ASPHALT_M), // 노면 = 골목 바닥과 같은 아스팔트
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
  boxOf(M.road(20, TUNNEL_LEN + 6), 20, 0.2, TUNNEL_LEN + 6, 0, -0.1, at(mid), t); // 윗면: 폭·깊이
  // 노면 이음선 — 통짜 바닥이 가장 싸 보인다. 가로 줄 두 개면 길이가 읽힌다
  for (const u of [2.2, 4.4]) boxOf(M.groove, IH * 2 + 0.6, 0.04, 0.08, 0, 0.02, at(u), t);

  for (const side of [-1, 1]) {
    const x = side * (IH + 0.45);            // 옹벽 두께 0.9 — 안쪽면이 IH
    // 바닥 아래까지 내린다 (layout.ts sunk) — 근두리에 빛이 새지 않게. 윗면은 TUNNEL_H 그대로
    const [th, ty] = sunk(TUNNEL_H);
    boxOf(M.wall(bodyLen, th), 0.9, th, bodyLen, x, ty, bodyAt, t);  // 안쪽면: 깊이·높이
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
  boxOf(M.deck(IH * 2 + 2, bodyLen), IH * 2 + 2, 0.9, bodyLen, 0, TUNNEL_H + 0.45, bodyAt, t); // 밑면: 폭·깊이
  for (const u of [1.0, 3.0, 5.0, 7.0]) {
    boxOf(M.girder, IH * 2 + 1.2, 0.3, 0.4, 0, TUNNEL_H - 0.13, at(u), t);
  }

  // 갱구(액자) — 골목 벽에서 터널로 넘어가는 두께. 종이처럼 뚫린 구멍이 가장 싸 보인다.
  // 안쪽면은 옹벽과 나란히(IH) — 통로를 좁히지 않는다.
  // 끝벽(z ∓0.5)보다 0.3m 내밀어 골목에서 액자가 보이게 하되, 통과 방지선(0.5m 앞)보다는
  // 안쪽이라 카메라가 닿지 않는다. **앞뒤가 같은 값** — 터널은 완전한 거울상이다
  const portalU = 0.125;
  for (const side of [-1, 1]) {
    // 골목을 향한 면(±Z): 폭·높이. 액자의 두께가 읽히는 면이다
    const [jh, jy] = sunk(TUNNEL_H + 0.62);
    boxOf(M.portal(0.78, jh), 0.78, jh, 0.85, side * (IH + 0.39), jy, at(portalU), t);
  }
  boxOf(M.portal(IH * 2 + 1.9, 0.62), IH * 2 + 1.9, 0.62, 0.9, 0, TUNNEL_H + 0.31, at(portalU), t); // 상인방
  boxOf(M.trim, IH * 2 + 2.4, 0.16, 1.12, 0, TUNNEL_H + 0.7, at(portalU - 0.08), t);     // 물끊기 처마

  // 다리 옆면 + 난간 — 골목에서 보면 이 실루엣이 "다리 밑"을 말해준다.
  // 하늘(배경색)에 걸리는 기둥 열이 핵심 — 통짜 벽은 그냥 벽으로 읽힌다
  for (const u of [0.1, TUNNEL_LEN - 0.1]) {
    boxOf(M.portal(20, 0.62), 20, 0.62, 0.62, 0, TUNNEL_H + 1.0, at(u), t);   // 상판 가장자리 보
    boxOf(M.portal(20, 1.15), 20, 1.15, 0.44, 0, TUNNEL_H + 1.89, at(u), t);  // 난간 벽
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
  //
  // ⚠⚠ **판의 배치는 앞뒤가 다르다** (v0.11.61) — 두 터널이 하는 일이 다르기 때문이다.
  //   앞 터널: 플레이어가 **들어가는** 곳이다. 첫 판이 전환 지점보다 살짝 앞(4.2m)에 있어야
  //     지나는 순간이 눈에 안 띄고, 갱구에서 보면 깊이가 읽힌다 (위 설명 그대로).
  //   뒤 터널: 플레이어가 **나오는** 곳이다. 전환 직후 서는 지점(0.60T = 5.4m)에서 골목을 보면
  //     ⚠ 판 다섯 중 **앞의 세 장만** 시선에 들어와 차폐가 97%가 아니라 **71%** 였다
  //     (0.78 × 0.68 × 0.55). 그 29%로 다음 구간의 목적지(FF-1204)가 스쳐 보였다 — 제보 2회.
  //   ⭐ 그래서 뒤 터널은 판을 **갱구 쪽으로 당겨** 다섯 장 전부가 나오는 지점 앞에 서게 한다.
  //     판은 안개(fog:false)를 안 타는 불투명 검정이라 어둠 곡선과 무관하게 확실히 가린다.
  //   ⭐ 덤: 골목에서 뒤돌아보면 갱구가 **곧바로 검다** — "돌아가는 길은 없다"가 더 분명해진다
  const fogAt = s > 0 ? [0.9, 1.7, 2.6, 3.6, 4.6] : [3.2, 4.2, 5.2, 6.4, 7.8];
  fogAt.forEach((u, i) => {
    const card = new THREE.Mesh(new THREE.PlaneGeometry(14, 11), M.fog[i]);
    card.position.set(0, TUNNEL_H / 2, at(u));
    t.add(card);
  });

  // 마감 — 앞 터널은 더 이어지는 것처럼, 뒤 터널은 코앞에서 막는다 (돌아가는 길은 없다)
  const [ch, cy] = sunk(WALL_H);
  boxOf(M.portal(20, ch), 20, ch, 1, 0, cy, at(TUNNEL_LEN + capDist), t);

  return { group: t, light };
}

// ---------- ⭐ 전신주와 전선 (v0.11.54) ----------
// 한국 골목 사진을 '한국 골목'으로 만드는 것은 **하늘을 가르는 전선**이다.
// 여태 이 골목의 하늘은 텅 빈 면이었다 — 화면에서 가장 넓은데 아무것도 없었다.
//
// ⭐ **전선은 메시가 아니라 `LineSegments` 하나로 만든다.** 드로우콜 1개면 전선 전부를
// 그린다(성능 예산: 구간당 100). WebGL의 선 굵기는 항상 1px인데, 전선은 원래 그렇게 보인다.
// ⚠ 선은 `LineBasicMaterial`이라 노을 보정(MeshStandard만 물들인다)을 타지 않는다 —
//   그게 맞다: 전선은 낮에도 밤에도 **검은 실루엣**이어야 한다.
// ⚠ 밤에도 그대로 둔다. 퇴근길 정서로 넣었지만 밤에는 밤대로 값을 한다
//   (하늘을 가르는 선은 그 자체로 불안하다 — fear-cognition §2 실루엣 우위)
function buildPolesAndWires(group: THREE.Group, mats: { pole: THREE.Material; arm: THREE.Material }) {
  // 전신주 — 벽에 붙여 세운다. 플레이어 x 한계(±2.6) 밖이라 걸리적거리지 않는다
  const POLE_H = 9.4;                       // 벽(7m)보다 높아야 하늘에 걸린다
  const poles: Array<[number, number]> = [  // [x, z]
    [2.85, -L * 0.16], [-2.85, -L * 0.42], [2.85, -L * 0.63], [2.85, -L * 0.93],
  ];
  const [ph, py] = sunk(POLE_H);   // 밑동을 바닥 아래로 (layout.ts sunk) — 윗선은 그대로
  for (const [px, pz] of poles) {
    boxOf(mats.pole, 0.26, ph, 0.26, px, py, pz, group);
    // 완철(crossarm) — 전선을 받는 가로대. 이게 없으면 전봇대가 그냥 기둥이다
    const s = Math.sign(px);
    boxOf(mats.arm, 1.5, 0.1, 0.1, px - s * 0.7, POLE_H - 0.75, pz, group);
    boxOf(mats.arm, 1.1, 0.09, 0.09, px - s * 0.5, POLE_H - 1.5, pz, group);
  }
  // 변압기 — 하나만. 전봇대 실루엣의 특징적인 덩어리
  boxOf(mats.arm, 0.46, 0.72, 0.46, 2.85 - 0.5, POLE_H - 2.7, -L * 0.63, group);

  // ---------- 전선 ----------
  // 처짐(현수선)을 넣는 것이 전부다. 곧은 직선은 전선이 아니라 철사로 보인다.
  // 한 스팬을 6조각으로 쪼개 포물선으로 근사한다 (선분이라 조각이 적어도 티가 안 난다)
  const pts: number[] = [];
  const span = (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, sag: number) => {
    const N = 6;
    let px = x1, py = y1, pz = z1;
    for (let i = 1; i <= N; i++) {
      const t = i / N;
      const x = x1 + (x2 - x1) * t;
      const z = z1 + (z2 - z1) * t;
      // 4t(1−t) = 가운데서 최대, 양 끝에서 0 — 포물선 처짐
      const y = y1 + (y2 - y1) * t - sag * 4 * t * (1 - t);
      pts.push(px, py, pz, x, y, z);
      px = x; py = y; pz = z;
    }
  };
  const TOP = POLE_H - 0.75;
  /** 구간 밖으로 전선을 내보내는 거리 — **터널 길이보다 길어야** 다리 위에서 끊기지 않는다.
   *  터널이 9m라 +8을 더해 갱구에서 8m 더 간다 (안개·원근이 끝을 알아서 지운다) */
  const WIRE_OUT = TUNNEL_LEN + 8;
  // ① 오른쪽 전봇대들을 잇는 세로 방향 다발 — 골목을 따라 흐른다 (높이를 조금씩 달리해 다발로)
  for (const [dx, dy] of [[-1.3, 0], [-0.7, -0.06], [-0.1, 0.02], [-0.95, -0.72]] as Array<[number, number]>) {
    span(2.85 + dx, TOP + dy, -L * 0.16, 2.85 + dx, TOP + dy, -L * 0.63, 0.55);
    span(2.85 + dx, TOP + dy, -L * 0.63, 2.85 + dx, TOP + dy, -L * 0.93, 0.36);
    // 구간 입구·출구 밖으로도 이어 보낸다 — 골목이 여기서 시작되고 끝나는 것이 아니게.
    // ⚠⚠ **터널을 넘겨 보내야 한다** (v0.11.61). ±1.5m만 내보냈더니 앞쪽 끝(z −37.5)이
    //   하필 **다리 위 허공**이라, 골목에서 고개를 들면 전선이 거기서 잘려 있었다 (제보).
    //   전선은 다리(y 3.4~6.5) 한참 위(y ≈ 9)를 지나가므로 넘겨 보내도 부딪히지 않는다 —
    //   ⭐ 다리 위를 건너 안개 속으로 사라지는 편이 '이 동네가 계속된다'를 만든다.
    //   ⚠ 중간에 전봇대를 세우지 않는다: 그 자리는 터널 **안**이고, 지하차도 안에 전봇대는 없다.
    //     받는 기둥이 안 보이는 대신 스팬이 길어지므로 처짐을 그만큼 키운다 (짧은 처짐 = 철사)
    span(2.85 + dx, TOP + dy, -L * 0.16, 2.85 + dx, TOP + dy + 0.5, WIRE_OUT, 0.9);
    span(2.85 + dx, TOP + dy, -L * 0.93, 2.85 + dx, TOP + dy + 0.5, -L - WIRE_OUT, 0.9);
  }
  // ② 골목을 **가로지르는** 선 — 이게 있어야 하늘이 갈린다 (레퍼런스의 그 그림)
  span(2.85 - 0.7, TOP, -L * 0.16, -2.85 + 0.7, TOP - 0.9, -L * 0.42, 0.7);
  span(2.85 - 0.7, TOP - 0.75, -L * 0.63, -2.85 + 0.7, TOP - 1.5, -L * 0.42, 0.6);
  span(-2.85 + 0.7, TOP - 0.9, -L * 0.42, 2.85 - 0.7, TOP - 0.4, -L * 0.93, 0.8);
  // ③ 벽으로 들어가는 인입선 — 전선이 어디로 가는지가 보여야 배경이 아니라 동네가 된다
  span(2.85 - 0.7, TOP - 1.5, -L * 0.63, 3.0, 4.6, -L * 0.52, 0.15);
  span(-2.85 + 0.7, TOP - 1.5, -L * 0.42, -3.0, 4.2, -L * 0.34, 0.15);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const wires = new THREE.LineSegments(
    geo,
    new THREE.LineBasicMaterial({ color: 0x14161d, transparent: true, opacity: 0.92 }),
  );
  group.add(wires);
}

// ---------- ⭐ 초록 (v0.11.55) — 골목의 유일한 채도 ----------
// 레퍼런스 셋이 전부 가지고 있던 것. 화분과 담쟁이는 **사람이 사는 동네**의 표시다 —
// 누군가 물을 주고 있다는 뜻이라 그것만으로 골목이 덜 무섭고 더 따뜻해진다.
//
// ⚠ **잎 재질은 노을 보정에서 제외한다** (`keepColor`) — 안 그러면 초록이 호박색이 되어
//   화면에서 유일하게 채도 높은 덩어리가 사라진다.
// ⚠ 배치는 **벽 밑·낮게**. 이상현상은 벽면(창·셔터)과 통행선 바닥에 있으므로 그 둘을 피한다.
//   차도(z −21.3~−27.7)에는 벽이 없어 화분이 허공에 뜬다 — 그 구간도 비운다
function buildGreenery(group: THREE.Group) {
  const leaf = (hex: number) => {
    const m = concrete(hex);
    m.userData.keepColor = true;  // 낮에도 밤에도 초록
    return m;
  };
  const leafA = leaf(0x37502f);
  const leafB = leaf(0x415c38);
  const leafC = leaf(0x2c4327);
  // ⚠ **벽 밑 화분 다섯은 걷어냈다** (v0.11.58). 구간마다 다섯이면 골목을 걷는 68초 동안
  //   같은 초록 덩어리를 계속 지나치게 되어 **많다**는 인상만 남았다.
  //   초록은 "사람이 사는 동네"의 표시로 넣은 것이지 밀도를 채우려던 것이 아니다 —
  //   ⭐ 담 위의 나무 셋만 남긴다: 하늘을 배경으로 한 실루엣이라 눈에 한 번 들어오고 끝난다.
  //   (통행선 옆에 늘어선 것과 머리 위로 지나가는 것은 체감 빈도가 다르다)

  // 담 위로 넘어온 나무 — 담쟁이가 아니다.
  // ⚠ **큰 판 몇 장으로 만들면 벽에 붙인 초록 사각형이 된다** (실측 스크린샷 — 첫 시도가 그랬다).
  //   잎으로 읽히는 것은 색이 아니라 **너덜너덜한 실루엣**이다: 작은 조각을 흩어 덩어리를 만들고
  //   가장자리를 성기게 둔다. 깊이(x)도 조금씩 달리해 납작함을 깬다
  const rand = (() => { let s = 20817; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 0x100000000); })();
  const patch = (cx: number, cy: number, cz: number, rz: number, ry: number, n: number) => {
    for (let i = 0; i < n; i++) {
      // 중심이 촘촘하고 가장자리가 성기게 — 제곱근을 쓰면 균일 원반, 그냥 쓰면 중심 집중
      const a = rand() * Math.PI * 2;
      const r = rand() * rand();                  // 중심 집중
      const dz = Math.cos(a) * r * rz;
      const dy = Math.sin(a) * r * ry;
      const s = 0.26 + (1 - r) * 0.42;            // 중심 조각이 크다
      const mat = [leafA, leafB, leafC][i % 3];
      boxOf(mat, 0.09 + rand() * 0.11, s * (0.8 + rand() * 0.5), s * (0.8 + rand() * 0.5),
        cx, cy + dy, cz + dz, group);
    }
  };
  // ⭐ **담 위로 넘어온 나무** — 벽면 담쟁이는 두 번 시도했지만 로우폴리 박스로는 끝내
  //   '벽에 붙인 초록 상자'였다 (실측 스크린샷 2장). 붙는 면이 평평하면 붙은 것으로 안 읽힌다.
  //   대신 **담 위에 얹는다**: 밝은 하늘을 배경으로 한 실루엣은 이 스타일에서 가장 확실하게
  //   식물로 읽히고, 덤으로 비어 있던 하늘 면을 채운다.
  //   ⚠ 통행부(|x| ≤ 2.6) 위로는 넘기지 않는다 — 머리 위에 뜬 덩어리는 답답하다
  patch(-3.05, WALL_H + 0.5, -12.8, 1.9, 0.95, 16);
  patch(3.05, WALL_H + 0.35, -31.8, 1.5, 0.8, 13);
  patch(3.02, WALL_H + 0.45, -6.2, 1.3, 0.75, 11);
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
  // ⚠ 위치는 **SUN_FOCUS에서의 방향 오프셋**이다 (layout.ts) — target을 구간 중앙으로 옮겼으므로
  //   position도 같은 만큼 옮겨야 방향(4,10,2)이 그대로 유지된다
  moon.position.copy(SUN_FOCUS).add(new THREE.Vector3(4, 10, 2));
  moon.target.position.copy(SUN_FOCUS);
  scene.add(moon);
  scene.add(moon.target);   // ⚠ target은 씬에 넣어야 matrixWorld가 갱신된다 (three.js 요구)
  // ---------- ⭐ 해의 그림자 (v0.11.61) — 퇴근길에만 켠다 (setMorning) ----------
  // ⚠⚠ **light.target을 옮기면 안 된다.** 방향광의 방향은 `position − target`이라,
  //   프러스텀을 구간 중앙에 맞추려고 target을 (0,0,−L/2)로 옮기면 **빛의 방향이 통째로 바뀐다**
  //   (밤의 달 (4,10,2)이 거의 정면광이 되어 버린다). 방향은 세 시간대가 각자 실측으로 잡은 값이다.
  //   ⭐ 그래서 target은 원점에 두고 **프러스텀만 크게** 잡는다: 그림자 카메라는 target을 중심으로
  //   빛 방향을 따라 서므로, 원점 중심으로 구간 전체(z 0 → −36)와 벽(7m)을 덮을 크기가 필요하다.
  const sh = moon.shadow;
  sh.camera.left = -SUN_SHADOW_HALF;   // SUN_FOCUS(구간 중앙) 기준 ±28 = 56m → 2.7cm/texel
  sh.camera.right = SUN_SHADOW_HALF;
  sh.camera.top = SUN_SHADOW_HALF;
  sh.camera.bottom = -SUN_SHADOW_HALF;
  sh.camera.near = 0.5;
  sh.camera.far = 90;
  sh.mapSize.set(2048, 2048);
  // ⚠⚠ **normalBias가 벽 밑에 빛을 새게 만들었다** (v0.11.61 실측 — 관리자 모드 제보).
  //   normalBias는 깊이를 재는 지점을 **법선 방향으로 밀어** acne를 없애는 값인데, 그러면
  //   벽과 바닥이 맞닿은 자리에서 그림자가 벽에서 떨어져(peter-panning) **밝은 실선**이 남는다.
  //   0.035(3.5cm)였고, 4.1cm짜리 거친 texel이 그 틈을 한 줄로 굳혀 놨다.
  //
  //   ⭐ **해법은 값이 아니라 해상도였다.** 그림자 카메라를 원점이 아니라 구간 중앙(SUN_FOCUS)에
  //   세워 프러스텀을 ±42 → ±28로 좁히자 texel이 4.1cm → 2.7cm가 됐고, **acne 압력이 그만큼
  //   줄어 normalBias가 필요 없어졌다** (0으로 두고 재확인: 벽 밑 실선 사라짐 · acne 없음).
  //   bias/normalBias는 **해상도와 한 몸**이다 — 맵을 그대로 두고 값만 만지면 둘 중 하나를 잃는다.
  // ⚠ 그러니 프러스텀을 다시 넓히려면 acne부터 다시 봐야 한다. 두 스크린샷으로 확인한다:
  //   ① 벽·바닥이 맞닿은 근두리(빛 새는 실선) ② 해를 받는 넓은 면(줄무늬 얼룩)
  sh.bias = -0.00025;
  sh.normalBias = 0;
  moon.castShadow = false;      // 밤에는 꺼 둔다 — 켜는 것은 퇴근길뿐이다

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
  // ⭐ 하늘 그림 둘 — 퇴근길 1구간(맑은 오후) / 2구간(노을). setMorning이 map을 갈아 끼운다.
  //    미리 만들어 둔다: 구간 전환마다 캔버스를 다시 그리면 그 프레임이 튄다
  const skyDusk = duskSkyTexture();
  const skyAfternoon = afternoonSkyTexture();
  const skyDome = new THREE.Mesh(
    new THREE.SphereGeometry(80, 24, 16),
    new THREE.MeshBasicMaterial({
      map: skyAfternoon, side: THREE.BackSide, fog: false, depthWrite: false,
    }),
  );
  skyDome.position.set(0, 0, -L / 2);
  skyDome.renderOrder = -1;
  skyDome.visible = false; // 밤에는 없다 — setMorning이 켠다
  scene.add(skyDome);

  // ---------- 복도 골격 ----------
  // ⭐ **표면 텍스처** (v0.11.52) — 벽과 바닥이 민짜라 빛이 걸릴 데가 없었다.
  // 타일 한 변을 실측 미터로 잡아 두고(ASPHALT_M · WALL_M) 면 길이로 반복 수를 나눈다:
  // 조각마다 길이가 다르므로 **반복 수를 손으로 적으면 반드시 어긋난다**
  // (타일 크기는 모듈 상수다 — 터널이 같은 값을 써야 갱구에서 결이 이어진다)
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
  // 벽면(±X)의 UV는 u=깊이 · v=높이다 — 반복 수를 그 축에 맞춘다.
  // ⚠ 높이는 **파고든 높이**(wh)로 센다 — WALL_H로 세면 타일이 SUNK만큼 늘어난다 (layout.ts sunk)
  const [wh, wy] = sunk(WALL_H);
  const wallMat = (color: number, len: number) =>
    surfaceMat(color, wallTex, len / WALL_M, wh / WALL_M);
  for (const [wx, color] of [[HW + 0.5, 0x232838], [-HW - 0.5, 0x20263a]] as Array<[number, number]>) {
    boxOf(wallMat(color, nearLen), 1, wh, nearLen, wx, wy, -nearLen / 2, group);
    boxOf(wallMat(color, farLen), 1, wh, farLen, wx, wy, ROAD_Z - ROAD_HALF - farLen / 2, group);
  }

  // 전신주와 전선 — 하늘을 가른다 (v0.11.54). 벽과 같은 콘크리트 계열로 두어 동네가 이어지게
  buildPolesAndWires(group, { pole: concrete(0x2b3040), arm: concrete(0x232838) });
  // 초록 — 사람이 사는 동네의 표시 (v0.11.55)
  // ⚠⚠ **일단 껐다** (v0.11.61, 요청). 담 위로 넘어온 나무 셋이 마지막 초록이었고
  //   (화분 다섯은 v0.11.58에 이미 걷어냈다) 이제 골목에 **채도 있는 것이 하나도 없다.**
  //   ⭐ 함수는 지우지 않는다 — 배치·잎 실루엣 만드는 법이 여기 다 들어 있고,
  //   `keepColor`(노을 보정 제외) 장치도 이 잎들 때문에 있는 것이다. 되살릴 때 이 한 줄만 켠다.
  //   ⚠ 되살릴 거라면 v0.11.58의 결론부터 읽는다: 통행선 옆에 늘어선 초록은 "많다"는 인상만
  //     남기고, 담 위 실루엣은 눈에 한 번 들어오고 끝난다 — 그래서 후자만 남겼던 것이다
  const GREENERY = false;
  if (GREENERY) buildGreenery(group);

  // 끝 벽 — 개구부(중앙)를 남기고 2조각. **골목 양 끝에 같은 것이 하나씩** (v0.11.22):
  // 뒤에는 이게 없어서 골목 벽이 z=0에서 그냥 끊겼고, 돌아보면 터널 옆구리 너머로
  // 바깥(빈 공간)이 그대로 보였다. 터널이 대칭이면 그것을 감싸는 벽도 대칭이어야 한다
  const endWallW = HW - MAIN_GAP_HALF + 1;
  for (const ez of [-L - 0.5, 0.5]) {
    for (const s of [-1, 1]) {
      box(endWallW, wh, 1, 0x232838, s * (MAIN_GAP_HALF + endWallW / 2), wy, ez, group);
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
  const lampHeadMat = lampHead.material as THREE.MeshStandardMaterial;
  lampHeadMat.emissive.setHex(0x3a2a12);
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
  // ⭐ **늘어뜨린 두 손과 드러난 목덜미** (v0.11.57) — 실측 대비 5.1로 **19종 중 최저**였다.
  // 이 형체는 **등을 돌리고 서 있으므로** 얼굴을 쓸 수 없다. 그래서 뒤에서 보이는 것을 쓴다:
  // 옆으로 늘어뜨린 손과, 머리와 어깨 사이에 드러난 목덜미.
  // ⚠ 목덜미는 작게. 크면 '흰 옷깃'으로 읽혀 사람이 아니라 마네킹이 된다
  for (const hx of [-0.27, 0.27]) {
    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.14, 0.1), mats.pale);
    hand.position.set(hx, 0.74, 0.02);
    figure.add(hand);
  }
  const nape = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.1), mats.pale);
  nape.position.set(0, 1.5, -0.02);
  figure.add(nape);
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
  // ---------- ⭐ 검정 모범택시 — 고급스럽게 (v0.11.61) ----------
  // ⚠ **여기는 검정이 아니라 남색이었다** (`0x161a24` — 파랑이 빨강보다 두 단 높다).
  //   밤 팔레트(한색)에 맞춘 값이었는데, 그래서 '검은 택시'가 아니라 '어두운 남색 차'로 읽혔다.
  //   ⭐ 중성 흑색으로 내린다. 다만 **순검정(0x000000)은 쓰지 않는다** — 로우폴리는 면의
  //   명암만으로 형태를 말하므로 0이면 실루엣만 남고 차체가 뭉개진다.
  //
  // ⭐ **고급스러움은 색이 아니라 반사에서 온다.** 이 렌더러에서 쓸 수 있는 손잡이는 셋이다:
  //   ① `roughness`를 낮춰 **날카로운 하이라이트**를 만든다 (0.7 → 0.26. 무광 검정은 관용차,
  //      유광 검정이 고급차다. 어두운 차체에서 형태를 읽게 해 주는 것도 이 하이라이트다)
  //   ② 크롬 트림 한 줄 — 유리와 차체를 가르는 밝은 선. 이 한 줄이 '급'을 정한다
  //   ③ 유리는 차체보다 더 매끈하고 더 어둡게 (roughness 0.1) — 검정 위의 검정이 갈린다
  //   ⚠ `metalness`는 낮게(0.15) 둔다. 환경맵이 없어서 metalness를 올리면 반사할 것이 없어
  //     **오히려 새까맣게** 죽는다 (금속은 환경을 반사하는 재질이다)
  const PAINT = { roughness: 0.26, metalness: 0.15 };
  const carBody = new THREE.Mesh(
    new THREE.BoxGeometry(4.1, 0.95, 1.75),
    new THREE.MeshStandardMaterial({ color: 0x0f1012, ...PAINT }),
  );
  carBody.position.y = 0.72;
  const carRoof = new THREE.Mesh(
    new THREE.BoxGeometry(2.1, 0.62, 1.6),
    new THREE.MeshStandardMaterial({ color: 0x0c0d0f, ...PAINT }),
  );
  carRoof.position.set(-0.25, 1.45, 0);
  car.add(carBody, carRoof);
  // 유리 — 지붕 아랫단을 살짝 안쪽으로 물려 두른다. 차체보다 매끈하고 어둡다
  const glass = new THREE.Mesh(
    new THREE.BoxGeometry(2.16, 0.3, 1.64),
    new THREE.MeshStandardMaterial({ color: 0x090a0c, roughness: 0.1, metalness: 0.2 }),
  );
  glass.position.set(-0.25, 1.3, 0);
  car.add(glass);
  // 크롬 트림 — 유리 밑선을 따라 한 줄. **고급을 만드는 것은 이 한 줄이다**
  const chrome = new THREE.MeshStandardMaterial({ color: 0xb9bec7, roughness: 0.18, metalness: 0.5 });
  for (const gz of [-0.83, 0.83]) {
    boxOf(chrome, 2.16, 0.045, 0.03, -0.25, 1.15, gz, car);
  }
  // ---------- ⭐ 검정 택시 (v0.11.61) ----------
  // 차는 진작 검정이었다. 택시로 읽히게 하는 것은 **지붕의 갓등**과 **옆구리 띠** 둘이다.
  // ⚠ 새벽 한 시에 유일하게 지나가는 차가 택시인 것은 사실에 가깝다 — 밤에도 같은 형태를 쓴다.
  //   다만 **갓등은 퇴근길에만 켠다** (등이 먼저 들어오는 시간 — runtime.ts updateWorld):
  //   밤에 갓등이 켜지면 그것이 화면에서 유일하게 밝은 웜이 되어 '안전·목표'로 읽힌다
  //   (visual-polish §3 의미색 고정). 밤의 택시는 **불 꺼진 갓등을 얹은 검은 덩어리**다
  const carSignMat = new THREE.MeshStandardMaterial({
    map: taxiSignTexture(), emissiveMap: taxiSignTexture(), emissive: 0x000000, roughness: 0.6,
  });
  const carSign = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.17, 0.3), carSignMat);
  carSign.position.set(-0.25, 1.85, 0);      // 지붕 윗면(y 1.76) 위에 얹는다
  car.add(carSign);
  // 옆구리 띠 — 모범택시의 금색 선. 채도는 낮게 잡아 **트림으로만** 읽히게 하고
  // (밝은 금색은 웜=목표 신호와 헷갈린다) 대신 **광택으로** 급을 낸다: 무광 금색은 스티커,
  // 유광 금색은 도장이다. 양쪽 면에 하나씩
  const goldTrim = new THREE.MeshStandardMaterial({
    color: 0x9a8149, roughness: 0.3, metalness: 0.45,
  });
  for (const sz of [-0.88, 0.88]) {
    boxOf(goldTrim, 3.5, 0.07, 0.03, 0, 0.62, sz, car);
  }
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
      group, scene, moon, skyDome, skyAfternoon, skyDusk, tunnel, backTunnel, tunnelLights, tunnelLampMat,
      car, carLight, carSignMat, ambient, stretchMark, lampLight, lampHeadMat, shopGlow, shopSign, shopSignMat,
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
  // 바닥에 서는 것들 — 바닥 아래까지 내린다 (layout.ts sunk). 윗면은 원래 높이 그대로
  const [rth, rty] = sunk(H);              // 옹벽
  const [rjh, rjy] = sunk(H + 0.62);       // 갱구 기둥
  const [rch, rcy] = sunk(WALL_H);         // 마감벽

  for (const s of [-1, 1]) {
    // ⚠ 차도 터널은 **x로 길다** — 안쪽면이 ±Z라 (폭, 높이)다. 골목 터널과 축이 다르다
    boxOf(M.wall(LEN + 2, rth), LEN + 2, rth, 0.9, mid, rty, ROAD_Z + s * (RH + 0.45), parent); // 옹벽
    boxOf(M.base, LEN + 2, 0.5, 1.0, mid, 0.25, ROAD_Z + s * (RH + 0.43), parent);     // 걸레받이
  }
  boxOf(M.deck(LEN + 2, RH * 2 + 2), LEN + 2, 0.9, RH * 2 + 2, mid, H + 0.45, ROAD_Z, parent); // 천장(상판)
  for (const u of [1.4, 4.0]) {
    boxOf(M.girder, 0.4, 0.3, RH * 2 + 1.2, at(u), H - 0.13, ROAD_Z, parent);          // 천장 보
  }

  // 갱구 액자 — 골목 터널과 같은 모양. 도로 쪽으로 살짝 내밀어 두께가 읽히게
  for (const s of [-1, 1]) {
    // 도로를 향한 면(±X): 깊이(0.78)·높이
    boxOf(M.portal(0.78, rjh), 0.85, rjh, 0.78, at(0.1), rjy,
      ROAD_Z + s * (RH + 0.39), parent);
  }
  boxOf(M.portal(RH * 2 + 1.9, 0.62), 0.9, 0.62, RH * 2 + 1.9, at(0.1), H + 0.31, ROAD_Z, parent); // 상인방
  boxOf(M.trim, 1.12, 0.16, RH * 2 + 2.4, at(0.02), H + 0.7, ROAD_Z, parent);          // 물끊기 처마

  // 등기구 — 광원 없이 발광 몸체만. 안개 앞에 하나 걸어 "안에 뭔가 있다"만 남긴다
  const lampMat = new THREE.MeshStandardMaterial({
    color: 0x2b3240, emissive: TUNNEL_LAMP_EMISSIVE,
  });
  boxOf(M.girder, 0.24, 0.16, 0.5, at(1.5), H - 0.44, ROAD_Z, parent);
  boxOf(lampMat, 0.17, 0.05, 0.38, at(1.5), H - 0.55, ROAD_Z, parent);

  // 갱구 위 마감 — 터널 천장(5.5)에서 도로 벽 높이(7)까지 막는다.
  // 이게 없으면 그 틈으로 **안개 판과 저 안쪽 마감벽이 비쳐** 검은 띠가 생긴다 (실측으로 걸렀다)
  boxOf(M.portal(RH * 2 + 2, WALL_H - (H + 0.9)), 1, WALL_H - (H + 0.9), RH * 2 + 2,
    at(0.5), (H + 0.9 + WALL_H) / 2, ROAD_Z, parent);

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
  boxOf(M.portal(RH * 2 + 2, rch), 1, rch, RH * 2 + 2, at(LEN + 2), rcy, ROAD_Z, parent);
}

/** 차도 구멍 메우기 — 벽은 공용이라 뚫려 있다. 테마 4(교차로)만 열어 두고 나머지는 막는다 (v0.11.7) */
export function patchRoadWall(theme: THREE.Group) {
  const [pwh, pwy] = sunk(WALL_H);   // 공용 벽과 같은 치수로 파고들어야 이음매가 안 벌어진다
  box(1, pwh, ROAD_HALF * 2, 0x232838, HW + 0.5, pwy, ROAD_Z, theme);
  box(1, pwh, ROAD_HALF * 2, 0x20263a, -HW - 0.5, pwy, ROAD_Z, theme);
}
