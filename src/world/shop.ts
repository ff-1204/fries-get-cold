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
import { boxOf, concrete, menuTexture, stampBoardTexture, shopSignTexture, hoursTexture } from './kit';
import { L } from './layout';

/** 가게 전면(카운터)의 z. 구간 통과 판정이 -40.5에서 걸리므로 그 2m 뒤 —
 *  걸음이 멈추는 자리에서 카운터가 정면에 온다 */
const FRONT_Z = -L - 6.6;

/** @param standalone 간판과 등을 **제 안에** 갖는다. 앞(퇴근길 도착) 인스턴스는 골목이 가진
 *  `shopSign`·`shopGlow`를 빌려 쓰지만, 뒤(밤의 출발점) 인스턴스는 그럴 게 없다.
 *  그룹 안에 넣으면 숨겼을 때 three가 서브트리째 건너뛰므로 **안 보이는 동안 광원 비용이 0**이다 */
export function buildShopFront(standalone = false): THREE.Group {
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
  // ---------- ⭐ 카운터 위 (v0.11.61) — 사람이 방금까지 일하던 자리로 읽히게 ----------
  // 상판(윗면 y 1.13)이 텅 비어 있었다. 물건 몇 개가 놓여 있으면 **비어 있는 것이 아니라
  // 잠깐 비운 것**이 된다 — 이 가게는 새벽에도 열려 있고, 그게 밤 1 에필로그의 단서다.
  // ⚠ 전부 카운터 위(y 1.13~1.35)라 개구부(반폭 1.4)로 들여다보는 시야에 들어온다
  boxOf(M.dark, 0.46, 0.05, 0.34, -1.0, 1.16, FRONT_Z - 0.42, g);      // 트레이 (기름종이 깐)
  boxOf(M.dark, 0.46, 0.05, 0.34, -0.45, 1.16, FRONT_Z - 0.55, g);
  boxOf(M.tile, 0.3, 0.42, 0.22, 1.15, 1.34, FRONT_Z - 0.5, g);        // 포장 봉투 더미
  boxOf(M.steel, 0.11, 0.2, 0.11, 1.62, 1.23, FRONT_Z - 0.44, g);      // 소금통
  boxOf(M.steel, 0.11, 0.2, 0.11, 1.8, 1.23, FRONT_Z - 0.48, g);       // 후춧통
  // 주문 대기 스툴 둘 — 카운터 **앞**(마당 쪽). 앉을 자리가 있는 가게는 잠깐 머무는 곳이 된다
  for (const sx of [-2.1, 2.35]) {
    boxOf(M.steel, 0.36, 0.06, 0.36, sx, 0.62, FRONT_Z + 0.85, g);     // 좌판
    for (const d of [-1, 1]) {
      boxOf(M.steel, 0.05, 0.62, 0.05, sx + d * 0.13, 0.31, FRONT_Z + 0.85, g);
    }
  }

  // ---------- 튀김기 두 조 — 기름이 빛난다 ----------
  for (const s of [-1, 1]) {
    boxOf(M.steel, 1.25, 0.95, 0.85, s * 1.5, 1.5, backZ + 0.75, g);
    const oil = new THREE.Mesh(new THREE.BoxGeometry(1.02, 0.05, 0.62), oilMat);
    oil.position.set(s * 1.5, 1.99, backZ + 0.75);
    g.add(oil);
    boxOf(M.steel, 0.06, 0.5, 0.06, s * 1.5, 2.25, backZ + 1.1, g);    // 건짐망 손잡이
    // ⭐ **건짐망 자체** (v0.11.61) — 손잡이만 있고 망이 없었다. 기름 위에 걸쳐 둔 망 하나가
    //   "지금 튀기는 중"과 "치워 둔 가게"를 가른다. 한쪽은 기름 안, 한쪽은 걸이에 올려 둔다
    boxOf(M.dark, 0.62, 0.07, 0.44, s * 1.5, s > 0 ? 2.02 : 2.14, backZ + 0.72, g);
  }
  boxOf(M.dark, 3.6, 0.55, 1.1, 0, 2.75, backZ + 0.75, g);             // 후드
  // 후드에서 올라가는 배기 — 천장까지 닿는 세로 요소. 주방이 건물에 연결된 것이 된다
  boxOf(M.dark, 0.6, 0.62, 0.6, 0, 3.28, backZ + 0.75, g);

  // ---------- 벽면 — 메뉴판·도장판·선반 ----------
  const menu = new THREE.Mesh(
    new THREE.PlaneGeometry(2.7, 1.0),
    new THREE.MeshStandardMaterial({ map: menuTexture(), roughness: 0.9 }),
  );
  // **앞쪽 상인방에 매단다** — 안쪽 벽에 붙이면 후드가 가려 가격이 잘렸다 (v0.11.33 실측).
  // 카운터 너머로 걸린 메뉴판은 포장마차의 실제 문법이기도 하다
  menu.position.set(-1.5, 1.92, FRONT_Z - 0.25); // 상인방 아래(2.45)에 딱 걸리게 — 위가 잘리지 않는다
  g.add(menu);

  // 영업시간 안내 — 메뉴판 **맞은편**에, 같은 높이·같은 면에. 골목 개구부(반폭 1.4)로
  // 들여다보는 시야 안에 메뉴판과 함께 들어온다. 밤 1 에필로그의 "왜 24시간을 하지"가
  // 여기서 나온다 — 대사가 아니라 가게에 붙어 있는 것을 읽고 하는 말이어야 한다
  const hours = new THREE.Mesh(
    new THREE.PlaneGeometry(1.15, 0.62),
    new THREE.MeshStandardMaterial({ map: hoursTexture(), roughness: 0.9 }),
  );
  hours.position.set(1.85, 1.92, FRONT_Z - 0.25);
  g.add(hours);
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

  // ---------- 뒤 인스턴스 전용: 제 간판과 제 등 ----------
  if (standalone) {
    // 밤의 출발점에서 돌아보면 **이게 켜져 있어야** 한다 — 방금 나온 곳이라는 증거
    const tex = shopSignTexture('감자튀김 전문점!!\nff-1204');
    const signMat = new THREE.MeshStandardMaterial({
      color: 0xffffff, map: tex, emissiveMap: tex, emissive: 0xffffff,
    });
    const side = concrete(0x140d05);
    const sign = new THREE.Mesh(
      new THREE.BoxGeometry(3.4, 0.9, 0.3),
      [side, side, side, side, signMat, side],   // 글자는 앞면(+Z)에만
    );
    sign.position.set(0, 4.3, FRONT_Z + 0.55);
    g.add(sign);

    // shopGlow와 같은 자리·같은 색. 강도만 한 단 낮다 —
    // 여기는 **두고 온 곳**이지 목표가 아니다 (웜 10%: 도착지가 더 밝아야 한다, §3)
    const glow = new THREE.PointLight(0xffb23e, 20, 26, 2);
    glow.position.set(0, 3, FRONT_Z + 0.6);
    g.add(glow);
  }

  g.visible = false;
  return g;
}
