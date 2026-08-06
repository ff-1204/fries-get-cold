// 월드의 시간 — 구간이 바뀔 때 한 번 부르는 것들(applyDepth·setMorning·setShopNear)과
// 매 프레임 도는 것(updateWorld). 트윈 금지, 스텝/주기 방식 ("이미 그렇게 있어야 한다").

import * as THREE from 'three';
import { type AnomalyEffect } from '../data';
import { type SegmentRefs } from './refs';
import {
  L, HW, ROAD_Z, CAR_SPAN, CAR_SEC, LAMP_LADDER, FOG_NIGHT, SKY_DUSK, FOG_DUSK, isGreen, isFlashing,
  TUNNEL_LAMP_EMISSIVE, TUNNEL_LAMP_INTENSITY,
} from './layout';

/** 터널 안개가 낮에 향하는 색 — 다리 밑의 어둠 (하늘색이 아니다) */
const NIGHT_TINT = new THREE.Color(FOG_NIGHT);

// ---------- ⭐ 퇴근길의 재질 — 세계를 노을빛으로 갈아 끼운다 ----------
// **조명만으로는 따뜻해지지 않는다.** 골목의 기본색이 전부 한색이라(바닥 0x181c28 ·
// 벽 0x232838) 웜 조명을 아무리 세게 걸어도 진흙빛에서 멈춘다 — 실측 스크린샷 세 장이
// 그것을 보여 줬다. 그래서 퇴근길에서는 **재질의 색 자체를** 바꾸고, 밤에 원래대로 되돌린다.
//
// ⚠ 밤의 팔레트(visual-polish §3)는 건드리지 않는다. 여기서 웜을 실컷 쓰는 것은
//   밤의 희소한 온기와 **낙차**를 만들기 위한 것이고, 그 낙차가 튜토리얼의 존재 이유다.

/** 노을 변환 계수 — 여기만 만지면 톤이 통째로 움직인다 */
// ⚠ **밝기는 건드리지 않는다** (lift 0 · gain 1). 첫 시도에서 재질을 1.22배 들어 올렸더니
//   앰비언트(6.4)와 겹쳐 화면 전체가 같은 겨자색으로 화이트아웃됐다 — 벽도 바닥도 프롭도
//   구분되지 않았다. **따뜻함은 색상에서 오고, 구조는 밝기에서 온다.** 둘을 같이 만지면 둘 다 잃는다
const DUSK = {
  hue: 0.075,      // 목표 색상 — 호박/구운 오렌지
  hueMix: 0.9,     // 원래 색상을 얼마나 끌어올 것인가 (1이면 전부 같은 색상이 된다)
  satBase: 0.22,   // 무채색이던 것도 이만큼은 물든다
  satMix: 0.5,     // 원래 채도를 얼마나 남길 것인가
  satMax: 0.5,     // 원색이 되지 않게 (visual-polish: 고채도 남발 금지)
  lift: 0,
  gain: 1,
};

const _hsl = { h: 0, s: 0, l: 0 };
const _c = new THREE.Color();
/** 밤의 색 → 노을의 색. 상대적인 밝기 순서는 지킨다 (구조가 읽혀야 한다) */
function duskOf(nightHex: number): number {
  _c.setHex(nightHex).getHSL(_hsl);
  // 색상은 목표로 끌되 조금 남긴다 — 전부 같은 색상이면 프롭이 서로 구분되지 않는다
  const h = _hsl.h + (DUSK.hue - _hsl.h) * DUSK.hueMix;
  const s = Math.min(DUSK.satMax, DUSK.satBase + _hsl.s * DUSK.satMix);
  const l = Math.min(0.92, _hsl.l * DUSK.gain + DUSK.lift);
  return _c.setHSL(h, s, l).getHex();
}

/** 세계의 재질을 노을/밤으로 갈아 끼운다. 첫 호출 때 밤의 색을 재질에 적어 두고 그것으로 되돌린다.
 *
 *  ⚠ **데칼·발광 재질은 건드리지 않는다** — 현수막·간판·신호등·핏자국처럼
 *  색 자체가 의미인 것들이다. 여기까지 물들이면 신호가 흐려진다 (design-principles §0).
 *
 *  ⭐ 다만 **표면 텍스처(`userData.surface`)는 물들인다** (v0.11.52). 벽·바닥의 텍스처는
 *  회색조로 밝기만 담당하고 색은 재질이 내므로, 색을 갈아도 의미가 상하지 않는다 —
 *  오히려 여기를 빼면 노을에 벽과 바닥만 한색으로 남는다 */
function setDuskMaterials(scene: THREE.Scene, on: boolean) {
  scene.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const m of list) {
      const mat = m as THREE.MeshStandardMaterial;
      if (!mat?.color) continue;
      const decal = mat.map && !mat.userData.surface;
      if (decal || (mat.emissive && mat.emissive.getHex() !== 0)) continue;
      if (mat.userData.nightColor === undefined) mat.userData.nightColor = mat.color.getHex();
      const night = mat.userData.nightColor as number;
      mat.color.setHex(on ? duskOf(night) : night);
    }
  });
}

/** 현재 구간(1~5)의 테마만 표시 */
export function setSegmentTheme(refs: SegmentRefs, segment: number) {
  refs.themes.forEach((t, i) => (t.visible = i === segment - 1));
}

/** 깊이에 따른 광량 적용. rollSegment마다 applyAnomaly보다 먼저 호출 */
export function applyDepth(refs: SegmentRefs, depth: number) {
  if (refs.group.userData.morning) return; // 첫날 아침 — 조명은 setMorning이 관리
  const base = LAMP_LADDER[Math.min(depth, LAMP_LADDER.length - 1)];
  refs.group.userData.lampBase = base;
  refs.lampLight.intensity = base;
  refs.ambient.intensity = Math.max(1.1, 2.2 - depth * 0.18);
  refs.group.userData.ambientBase = refs.ambient.intensity; // 터널 어둠이 곱해 쓸 기준값
  // 부스 형광등은 **가로등보다 둔하게** 잦아든다 — 깊이 게이지는 어디까지나 가로등이고,
  // 이 등은 H-007의 광원 보장을 겸하므로 깊이 5에서도 남아 있어야 공정하다 (배치 3원칙 ①)
  setBoothLight(refs, 9 - depth * 0.7);
}

/** 부스 형광등 — 빛과 발광부를 함께 움직인다 (빛만 끄면 어둠 속에 뜬 관이 남는다) */
function setBoothLight(refs: SegmentRefs, intensity: number) {
  refs.boothLight.intensity = Math.max(0, intensity);
  refs.boothTubeMat.emissive.setHex(intensity > 0.1 ? 0x8fa6c4 : 0x000000);
}

// ---------- 퇴근길/밤 전환 — 첫날 퇴근길 튜토리얼이 유일한 '밝은' 구간이다 ----------
// ⚠ `morning`이라는 이름은 v0.10.0(1일차 '아침')의 잔재다. 픽션은 진작 저녁이고
//    빛도 이제 노을이다 — 이름만 남았다 (바꾸려면 admin.ts의 점프 파라미터까지 함께 간다)
// 밤 값은 createWorld 초기값과 같아야 한다 (귀갓길 전환 시 원복)
export function setMorning(refs: SegmentRefs, on: boolean) {
  refs.group.userData.morning = on;
  setDuskMaterials(refs.scene, on); // ⭐ 벽·바닥·프롭의 색부터 갈아 끼운다 (조명만으로는 안 된다)
  // 하늘과 안개를 **다른 색으로** 둔다 — 이것이 노을을 만든다 (layout.ts SKY_DUSK/FOG_DUSK).
  // 하나로 칠하면 주황 안개가 되고, 위는 호박색인데 먼 곳이 옅게 가라앉아야 해가 낮아 보인다
  (refs.scene.background as THREE.Color).setHex(on ? SKY_DUSK : FOG_NIGHT);
  const fog = refs.scene.fog as THREE.FogExp2;
  fog.color.setHex(on ? FOG_DUSK : FOG_NIGHT);
  // 노을은 **대기가 보이는** 시간이다 — 밤보다는 한참 옅게, 대낮보다는 짙게.
  // 20m 앞 현수막의 글자는 그대로 읽혀야 한다 (v0.11.27 실측 거리)
  fog.density = on ? 0.022 : 0.044;
  refs.ambient.color.setHex(on ? 0xffd9ae : 0x39415e); // 노을이 벽에 반사돼 돌아오는 빛
  // ⚠ 벽 기본색이 한색(0x232838)이라 **웜 광량이 모자라면 곧장 진흙빛이 된다.**
  // 첫 시도에서 5.0으로 낮췄더니 노을이 아니라 '이미 저문 어두운 골목'이 됐다 (실측 스크린샷)
  refs.ambient.intensity = on ? 4.6 : 2.2; // 어두운 재질도 또렷이 보이는 수준
  refs.group.userData.ambientBase = refs.ambient.intensity; // 터널 어둠이 곱해 쓸 기준값
  refs.moon.color.setHex(on ? 0xffa64a : 0x8090c0); // 낮 = 낮게 걸린 해
  refs.moon.intensity = on ? 5.4 : 0.75;
  // ⭐ **해의 각도가 노을의 전부다.** 밤의 달은 머리 위(4,10,2)에서 고르게 떨어지지만,
  // 노을은 크게 기울어 든다: 한쪽 벽만 호박색으로 물들고 반대쪽은 그늘에 남는다.
  // 그림자 렌더링이 없어도(castShadow 0) 면의 법선만으로 이 대비가 생긴다.
  // ⚠ 앞뒤(z)가 아니라 **옆(x)에서** 넣는다 — 정면이면 소실점의 현수막이 역광으로 뭉개진다
  // ⚠ **너무 낮추면 바닥이 죽는다** — y=2.4에서는 바닥이 받는 빛이 밤 대비 1/3.5로 떨어져
  //    골목 전체가 진흙빛이 됐다. 기울기는 살리되 바닥은 살아 있는 각도가 이것이다 (실측)
  if (on) refs.moon.position.set(11, 6, 3);
  else refs.moon.position.set(4, 10, 2);
  // 그라데이션 하늘 — 퇴근길에만. 밤은 배경색(FOG_NIGHT) 한 겹이면 충분하다
  refs.skyDome.visible = on;
  (refs.skyDome.material as THREE.MeshBasicMaterial).color.setScalar(1);
  refs.lampLight.intensity = on ? 0 : LAMP_LADDER[0]; // 해가 남아 있는 동안 가로등은 소등
  setBoothLight(refs, on ? 0 : 9);                    // 부스 형광등도 아직 꺼져 있다
}

/** 터널 어둠 — **화면 페이드가 아니라 안개를 검게 올린다** (v0.11.15).
 *  세계가 어두워지는 것이라 UI 컷이 아니라 '다리 밑을 지나는 동안'으로 읽힌다.
 *  dark 0(골목) → 1(터널 한가운데, 사실상 암흑). 구간 전환은 dark=1 지점에서 일어난다 */
export function setTunnelDark(refs: SegmentRefs, dark: number, baseDensity: number) {
  const fog = refs.scene.fog as THREE.FogExp2;
  const d = Math.max(0, Math.min(1, dark));
  // 옹벽이 1.5m 거리라 안개가 아주 짙어야 실제로 캄캄해진다 (density 1.4 → 약 99% 차폐)
  fog.density = baseDensity + d * d * 1.4;
  const morning = !!refs.group.userData.morning;
  // 안개색·배경색을 **검정**으로 몬다 (v0.11.30). 두 가지를 고쳤다:
  // ① **감마** — Color는 선형 값이라 (1-d)를 그냥 곱하면 화면(sRGB)에서는
  //    (1-d)^(1/2.2)만큼만 어두워진다. d=0.9에서 체감 밝기가 35%나 남아
  //    아침 튜토리얼의 암전이 검정이 아니라 회색이었다
  // ② **아침의 하늘색** — 밝은 색을 그대로 짙게 하면 '흰 안개'가 낀다.
  //    다리 밑에는 하늘빛이 들지 않으므로 밤 색으로 먼저 당긴다 —
  //    그래야 아침에도 '검은 안개를 통과한다'가 성립한다
  const k = Math.pow(1 - d, 2.2);
  // 하늘과 안개가 서로 다른 색이 되면서(노을) **각자의 기준색에서 출발해야** 한다.
  // 하나로 묶어 두면 터널을 빠져나오는 순간 하늘이 안개색으로 바뀌어 있다
  const tint = (c: THREE.Color, base: number) => {
    c.setHex(base);
    if (morning && d > 0) c.lerp(NIGHT_TINT, Math.min(1, d * 2.5));
    c.multiplyScalar(k);
  };
  tint(fog.color, morning ? FOG_DUSK : FOG_NIGHT);
  tint(refs.scene.background as THREE.Color, morning ? SKY_DUSK : FOG_NIGHT);
  // 하늘 돔은 **안개를 안 받으므로**(그래야 그라데이션이 산다) 여기서 직접 어둡게 만든다.
  // 이걸 빼면 터널 한가운데의 암흑 속에서 갱구 너머로 노을이 훤히 남는다
  if (morning) (refs.skyDome.material as THREE.MeshBasicMaterial).color.setScalar(k);
  // 터널 등도 함께 잦아든다 — **발광부(emissive)까지** 꺼야 한다.
  // 빛만 끄면 등기구가 어둠 속에 떠 있는 점으로 남아 이음매를 드러낸다
  for (const l of refs.tunnelLights) l.intensity = TUNNEL_LAMP_INTENSITY * (1 - d);
  refs.tunnelLampMat.emissive.setHex(TUNNEL_LAMP_EMISSIVE).multiplyScalar(1 - d);
  const ab = (refs.group.userData.ambientBase as number) ?? 2.2;
  refs.ambient.intensity = ab * (1 - d * 0.92);
}

/** 늘어남 반복 구간 여부 — 바닥 분필 자국 표시 */
export function setStretchMark(refs: SegmentRefs, show: boolean) {
  refs.stretchMark.visible = show;
}

/** 마지막 구간 여부에 따라 FF-1204 간판/불빛 연출.
 *  showSign=false — 밤 1 귀갓길: 목적지가 집이라 가게 간판 없이 개구부 불빛만 (v0.10.0) */
export function setShopNear(refs: SegmentRefs, near: boolean, showSign = true) {
  const morning = !!refs.group.userData.morning;
  // 마지막 구간에서는 터널이 아니라 목적지(가게·집)가 나와야 한다 (v0.11.14)
  refs.tunnel.visible = !near;
  // **목적지는 둘 중 하나** — 퇴근길 끝은 가게(간판 있음), 귀갓길 끝은 집.
  // 이게 없던 시절에는 터널을 숨긴 자리가 그냥 빈 하늘이었다 (v0.11.32~33)
  refs.shopFront.visible = near && showSign;
  refs.homeFront.visible = near && !showSign;
  // 가게 안을 밝히는 것도 이 등이다 — 광원을 새로 만들지 않는다 (visual-polish §4).
  // 아침에도 가게 안은 켜져 있어야 한다: 대낮의 켜진 간판이 "왜 24시간을 하지"의 첫 단서
  refs.shopGlow.intensity = near ? (showSign ? 26 : 30) : morning ? 0 : 4;
  // 간판은 마지막 구간에만 존재 — 다른 구간 끝에서 글자가 어렴풋이 보이면 혼란 (명확성)
  refs.shopSign.visible = near && showSign;
  // emissiveMap(글자 텍스처) × emissive 색 — 점등 시 글자만 발광한다.
  // **아침에도 켠다** (v0.11.32): 튜토리얼 마지막 자막이 "간판에 불이 켜져 있다"라고
  // 말하는데 코드가 아침엔 꺼서 자막이 거짓말이었다. 게다가 대낮에 켜진 24시 간판은
  // story.md 밤 1의 비트("새 가게가 왜 24시간을 하지")를 그대로 보여주는 첫 단서다
  refs.shopSignMat.emissive.setHex(near && showSign ? 0xffffff : 0x000000);
}

/** 뒤에 무엇이 있는가 — 지나온 터널 / 방금 나온 FF-1204 (v0.11.35).
 *
 *  v0.11.16이 뒤를 늘 터널로 통일한 건 **그때 가게가 없었기 때문**이고, 이제 있다 (shop.ts).
 *  밤의 인트로는 "튀김을 먹고 나왔다"인데 뒤가 터널이면 그 문장이 거짓말이 된다.
 *  그 외에는 전부 터널이 맞다 — 늘어남이든 다음 구간이든 **실제로 터널을 지나왔다**.
 *  `done === 0`이 이 둘을 정확히 가른다 (늘어남도 done을 올리므로 두 번째부터는 터널).
 *
 *  뒤로 걸으면 여느 때처럼 어두워지다 돌려세워진다 — 어둠 곡선은 건드리지 않는다.
 *  가게가 어둠에 잠기며 멀어지는 편이 "돌아갈 수 없다"를 더 잘 말한다 */
export function setBackScene(refs: SegmentRefs, shop: boolean) {
  refs.backTunnel.visible = !shop;
  refs.shopBack.visible = shop;
}

/** 개업 현수막을 **가게가 있는 쪽 갱구**에 건다 (v0.11.36).
 *
 *  테마 순서는 진작 뒤집혀 있었다 (퇴근길 4→5, 귀갓길 5→4→3→2→1). 그런데 **세계는 안 뒤집혀서**
 *  정류장 앞의 두 끝이 두 여정에서 같은 것을 주장했다 — 특히 FF-1204 현수막이 밤에도 정면에
 *  걸려, 가게를 등지고 집으로 걷는 내내 가게 광고를 보고 걸었다.
 *  `ahead=false`면 뒤 갱구 난간으로 옮기고 180° 돌려 플레이어를 향하게 한다:
 *  돌아보면 "가게는 저 뒤"가 보인다 — 밤 첫 구간의 shopBack과 같은 문법 (v0.11.35).
 *
 *  ⚠ 이것으로 방향 문제가 다 풀리는 것은 아니다. 부스·횡단보도·연석의 **순서와 좌우는
 *  여전히 고정**이고, 그것을 뒤집으려면 차도 판정(ROAD_Z·STOP_LINE_Z)과 공용 그룹의 차까지
 *  같이 뒤집어야 한다 — spec.md '방향' 항목에 알려진 제약으로 적어 둔다 */
export function setBannerSide(refs: SegmentRefs, ahead: boolean) {
  refs.banner.position.z = ahead ? -L + 0.25 : -0.25;
  refs.banner.rotation.y = ahead ? 0 : Math.PI;
}

/** 같은 거리를 반대로 걸으면 **좌우가 바뀐다** (v0.11.39).
 *
 *  테마 4·5는 두 여정에서 모두 걷는데, 두 번 다 부스도 연석도 오른쪽이라 같은 걸음처럼 읽혔다.
 *  각 테마에는 **저작된 방향**이 있다 — 테마 4는 퇴근길(정류장 → 횡단보도 → 가게 쪽 출구),
 *  테마 5는 귀갓길(이상현상이 밤 기준으로 배치돼 있다). 반대 방향일 때만 x를 뒤집는다.
 *
 *  **z가 아니라 x만 뒤집는 이유**: 차도 판정(`ROAD_Z`·`STOP_LINE_Z`)이 z 상수이고 차는
 *  공용 그룹에 있어서, z까지 뒤집으면 그려진 횡단보도와 치임 판정이 어긋난다.
 *  x 미러는 판정을 하나도 건드리지 않으면서 "반대편을 걷고 있다"는 가장 강한 단서를 준다.
 *  (프롭의 앞뒤 순서는 그대로다 — stages.md §0에 남은 제약으로 적어 둔다)
 *
 *  three는 행렬식이 음수인 오브젝트의 앞면 감기를 자동으로 뒤집으므로 렌더는 정상이다.
 *  다만 **글자는 같이 뒤집힌다** — 현수막만 되돌려 준다. */
export function setThemeMirror(refs: SegmentRefs, ret: boolean) {
  const flip = (g: THREE.Object3D, mirrored: boolean) => {
    g.scale.x = mirrored ? -1 : 1;
  };
  flip(refs.themes[3], ret);    // 테마 4 — 퇴근길 저작 → 귀갓길에서 뒤집는다
  flip(refs.themes[4], !ret);   // 테마 5 — 귀갓길 저작 → 퇴근길에서 뒤집는다
  refs.banner.scale.x = ret ? -1 : 1;   // 뒤집힌 그룹 안에서 글자를 되돌린다
}

const TRAFFIC_RED_ON = 0x8a1616;
const TRAFFIC_GREEN_ON = 0x2f7a4a;

/** 매 프레임 — 시간성 연출 (가로등 깜빡임 · 그네 · 신호등). 스텝/주기 방식, 트윈 금지 */
export function updateWorld(refs: SegmentRefs, t: number) {
  const effects = (refs.group.userData.effects as AnomalyEffect[] | undefined) ?? [];

  // A-008 가로등 — 이상 시 두 번씩 깜빡임 (스텝 — 형광등은 튄다, visual-polish §7)
  if (effects.includes('lamp_flicker')) {
    const base = (refs.group.userData.lampBase as number) ?? LAMP_LADDER[0];
    const phase = t % 1.6;
    const on = !(phase < 0.12 || (phase > 0.24 && phase < 0.36));
    refs.lampLight.intensity = on ? base : Math.min(2, base);
  }

  // A-007 그네 — 바람 없는 흔들림
  if (effects.includes('swing')) {
    refs.swingPivot.rotation.x = Math.sin(t * 2.2) * 0.38;
  }

  // 신호등 — 정상: 교대 점등 주기가 '학습된 정상' / A-011: 양쪽 다 빨간불 고정
  if (refs.themes[3].visible) {
    const bothRed = effects.includes('traffic_red');
    // 점멸 — 곧 빨강이라는 경고 (초당 4회). 실제 횡단보도의 문법을 그대로 쓴다
    const blink = isFlashing(t) ? Math.floor(t * 4) % 2 === 0 : true;
    const greenOn = !bothRed && isGreen(t) && blink;
    const redOn = bothRed || !isGreen(t);
    for (const m of refs.trafficGreen) m.emissive.setHex(greenOn ? TRAFFIC_GREEN_ON : 0x000000);
    for (const m of refs.trafficRed) m.emissive.setHex(redOn ? TRAFFIC_RED_ON : 0x000000);
  }

  // 차 — startCar가 심어둔 출발 시각으로부터 x축을 가로지른다.
  // 차도는 테마 4에만 있다: 구간이 바뀌면 주행 중이던 차도 즉시 거둔다 (v0.11.19 —
  // 그러지 않으면 정류장에서 출발한 차가 먹자골목까지 따라온다)
  const start = refs.group.userData.carStart as number | undefined;
  if (start !== undefined) {
    const p = (t - start) / CAR_SEC;
    if (p >= 1 || !refs.themes[3].visible) {
      refs.car.visible = false;
      refs.carLight.intensity = 0;
      refs.group.userData.carStart = undefined;
    } else {
      const dir = (refs.group.userData.carDir as number) ?? 1;
      refs.car.position.x = dir * (-CAR_SPAN / 2 + CAR_SPAN * p);
      refs.car.rotation.y = dir > 0 ? 0 : Math.PI;
      refs.car.visible = true;
      refs.carLight.intensity = 26;
    }
  }
}

/** 주행 중이던 차를 즉시 거둔다 — 구간 전환 시 (v0.11.19) */
export function stopCar(refs: SegmentRefs) {
  refs.group.userData.carStart = undefined;
  refs.car.visible = false;
  refs.carLight.intensity = 0;
}

/** 차를 한 대 보낸다. dir +1 = 왼→오른쪽 (v0.11.7) */
export function startCar(refs: SegmentRefs, t: number, dir: 1 | -1 = 1) {
  refs.group.userData.carStart = t;
  refs.group.userData.carDir = dir;
  refs.car.position.set(dir * -CAR_SPAN / 2, 0, ROAD_Z);
  refs.car.visible = true;
}

/** 차가 지금 통행부(골목 폭)를 지나는 중인가 — 치임 판정용 */
export function carInCorridor(refs: SegmentRefs): boolean {
  return refs.car.visible && Math.abs(refs.car.position.x) < HW + 2.2;
}
