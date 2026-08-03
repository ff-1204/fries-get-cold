// FF-1204 — 개구부 너머의 가게. **마지막 구간(도착)에서만 보인다** (setShopNear).
//
// 왜 '들어가는 방'이 아니라 '들여다보이는 내부'인가:
//   game.md 스코프 원칙이 "맵은 골목 구간 5개 재활용, 신규 씬 없음"이고,
//   v0.11.0 결정이 "가는 길은 컷, 튀김은 밖에 나온 명분으로만"이다.
//   그래서 거래는 컷으로 남기되, **목적지가 간판이 아니라 장소**가 되게 한다 —
//   예전에는 터널을 숨기면 개구부 너머가 빈 하늘이었다 (v0.11.32에서 발견).
//
// 광원을 새로 만들지 않는다: `shopGlow`(z=-L-6)가 이미 여기 있고,
// setShopNear가 near일 때 30으로 올린다 — 그 자리가 정확히 가게 안이다 (visual-polish §4).

import * as THREE from 'three';
import { boxOf, concrete, menuTexture, stampBoardTexture } from './kit';
import { L } from './layout';

/** 가게 전면(카운터)의 z. 구간 통과 판정이 -40.5에서 걸리므로 그 2m 뒤 —
 *  걸음이 멈추는 자리에서 카운터가 정면에 온다 */
const FRONT_Z = -L - 6.6;

export function buildShopFront(): THREE.Group {
  const g = new THREE.Group();
  const M = {
    road: concrete(0x181c28),      // 가게 앞 바닥 — 골목과 같은 아스팔트
    wall: concrete(0x232838),      // 이웃 가게 벽 (골목 벽과 같은 콘크리트)
    shutter: concrete(0x2a3143),   // 닫힌 셔터
    tile: concrete(0x6e6a5e),      // 가게 안쪽 타일 — 밝다 (웜 조명을 받는 면)
    steel: concrete(0x8a8e96),     // 스테인리스 — 튀김기·카운터
    dark: concrete(0x141922),      // 후드·틀
    awning: concrete(0x7c1d22),    // 차양 — 현수막과 같은 붉은색
  };
  // 기름 표면 — 이 가게의 심장. 광원 없이 발광만으로 따뜻하다 (웜 = 안전·목표, §3)
  const oilMat = new THREE.MeshStandardMaterial({
    color: 0xffb23e, emissive: 0xffb23e, emissiveIntensity: 0.55, roughness: 0.4,
  });

  // ---------- 가게 앞 작은 마당 ----------
  // y를 골목 바닥(-0.1)보다 낮춘다 — 같은 높이면 겹치는 구간에서 z-파이팅이 난다.
  // 겹치지 않는 곳(z < -43)에서만 드러나고, 플레이어는 -40.5에서 멈추므로 단차는 안 보인다
  boxOf(M.road, 12, 0.2, 12, 0, -0.18, FRONT_Z + 3.4, g);

  // ---------- 가게 껍데기 ----------
  const W = 8;                      // 가게 폭 (개구부 2.8보다 넓다 — 다 보이지는 않는다)
  const D = 3.6;                    // 안쪽 깊이
  const backZ = FRONT_Z - D;
  boxOf(M.tile, W, 3.4, 0.2, 0, 1.7, backZ, g);                       // 안쪽 뒷벽
  for (const s of [-1, 1]) {
    boxOf(M.tile, 0.2, 3.4, D, s * (W / 2), 1.7, FRONT_Z - D / 2, g);  // 안쪽 옆벽
  }
  boxOf(M.dark, W + 0.4, 0.25, D, 0, 3.5, FRONT_Z - D / 2, g);         // 천장
  // 전면 상인방 — 개방된 앞면의 위쪽을 막는다 (열린 포장마차 문법)
  boxOf(M.dark, W + 0.4, 1.1, 0.4, 0, 3.0, FRONT_Z, g);
  // 차양 — 골목에서 가장 먼저 보이는 붉은 띠
  const aw = boxOf(M.awning, W + 1.0, 0.12, 1.5, 0, 2.62, FRONT_Z + 0.75, g);
  aw.rotation.x = -0.16;

  // ---------- 카운터 ----------
  boxOf(M.steel, W - 1.0, 1.05, 0.7, 0, 0.525, FRONT_Z - 0.5, g);
  boxOf(M.tile, W - 0.8, 0.08, 0.85, 0, 1.09, FRONT_Z - 0.5, g);       // 상판

  // ---------- 튀김기 두 조 — 기름이 빛난다 ----------
  for (const s of [-1, 1]) {
    boxOf(M.steel, 1.25, 0.95, 0.85, s * 1.5, 1.5, backZ + 0.75, g);
    const oil = new THREE.Mesh(new THREE.BoxGeometry(1.02, 0.05, 0.62), oilMat);
    oil.position.set(s * 1.5, 1.99, backZ + 0.75);
    g.add(oil);
    boxOf(M.steel, 0.06, 0.5, 0.06, s * 1.5, 2.25, backZ + 1.1, g);    // 건짐망 손잡이
  }
  boxOf(M.dark, 3.6, 0.55, 1.1, 0, 2.75, backZ + 0.75, g);             // 후드

  // ---------- 벽면 — 메뉴판·도장판·선반 ----------
  const menu = new THREE.Mesh(
    new THREE.PlaneGeometry(2.7, 1.0),
    new THREE.MeshStandardMaterial({ map: menuTexture(), roughness: 0.9 }),
  );
  // **앞쪽 상인방에 매단다** — 안쪽 벽에 붙이면 후드가 가려 가격이 잘렸다 (v0.11.33 실측).
  // 카운터 너머로 걸린 메뉴판은 포장마차의 실제 문법이기도 하다
  menu.position.set(-1.5, 1.92, FRONT_Z - 0.25); // 상인방 아래(2.45)에 딱 걸리게 — 위가 잘리지 않는다
  g.add(menu);
  const stamps = new THREE.Mesh(
    new THREE.PlaneGeometry(0.72, 0.9),
    new THREE.MeshStandardMaterial({ map: stampBoardTexture(), roughness: 0.95 }),
  );
  stamps.position.set(2.6, 1.75, backZ + 0.11);
  g.add(stamps);
  for (const y of [2.15, 2.62]) boxOf(M.steel, 2.2, 0.06, 0.34, 2.6, y, backZ + 0.28, g);

  // ---------- 좁은 마당의 양옆 — 이웃 가게는 **전부 닫혀 있다** ----------
  // 마당을 넓게 트면 텅 빈 광장이 된다. 골목 개구부보다 조금 넓은 정도로만 두고,
  // 옆벽 자체를 닫힌 셔터로 만든다 — 열린 곳은 여기뿐이라는 것이 그림으로 읽힌다
  const YARD = 4.6;                 // 마당 반폭 (가게 폭 8의 절반보다 살짝 넓다)
  const yardMid = FRONT_Z + 3.4;
  for (const s of [-1, 1]) {
    boxOf(M.wall, 0.5, 7, 7.6, s * YARD, 3.5, yardMid, g);             // 옆벽
    boxOf(M.shutter, 0.16, 2.4, 5.4, s * (YARD - 0.32), 1.2, yardMid, g);
    for (let i = 0; i < 4; i++) {                                      // 슬랫
      boxOf(M.dark, 0.17, 0.05, 5.4, s * (YARD - 0.32), 0.5 + i * 0.55, yardMid, g);
    }
    const aw2 = boxOf(M.awning, 0.9, 0.1, 5.6, s * (YARD - 0.6), 2.75, yardMid, g);
    aw2.rotation.z = s * -0.24;
  }
  // ---------- 가게 위 건물 ----------
  // 개구부가 **세로로 뚫린 슬롯**이라 가게 지붕 위로 하늘이 그대로 보였다 (v0.11.32 실측).
  // 위층이 있어야 '골목 안의 가게'로 읽힌다 — 간판이 걸릴 벽이기도 하다
  boxOf(M.wall, W + 6, 4.2, 0.6, 0, 5.5, FRONT_Z + 0.15, g);
  for (const wx of [-2.4, 0, 2.4]) {                                   // 위층 창 (전부 어둡다)
    boxOf(M.dark, 1.3, 1.0, 0.1, wx, 5.2, FRONT_Z - 0.2, g);
  }


  g.visible = false;
  return g;
}
