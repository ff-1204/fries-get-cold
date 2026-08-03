// 집 — 귀갓길의 목적지. **밤마다 보는 화면**이라 가게보다 우선순위가 높다 (v0.11.33).
// 가게(shop.ts)와 같은 결함이 여기 있었다: 마지막 구간에서 터널을 숨기는데
// 그 너머에 아무것도 없어서, 매일 밤 도착하는 곳이 빈 구멍이었다.
//
// 원룸 골목(테마 1)의 언어를 그대로 쓴다 — 빌라 철문 · 계단 센서등 · 재활용 배출장.
// **웜은 아주 아껴서**: 현관 센서등 하나, 문 유리 하나, 위층 창 하나 (visual-polish §3).
// 내 방은 어둡다 — 아직 들어가지 않았으니까.
//
// 광원을 새로 만들지 않는다: `shopGlow`(z=-L-6)를 도착지 조명으로 함께 쓴다.

import * as THREE from 'three';
import { boxOf, concrete } from './kit';
import { L } from './layout';

/** 현관문의 z. 구간 통과 판정이 -40.5에서 걸리므로 그 1.5m 뒤 — 문 앞에서 멈춘다 */
const DOOR_Z = -L - 6.0;

export function buildHomeFront(): THREE.Group {
  const g = new THREE.Group();
  const M = {
    road: concrete(0x181c28),
    wall: concrete(0x232838),      // 골목 벽과 같은 콘크리트
    villa: concrete(0x262c3e),     // 빌라 외벽 — 살짝 밝게 (다가갈 대상)
    trim: concrete(0x2c3244),      // 문틀·난간
    door: concrete(0x11151f),      // 철문 — 파인 어둠 (테마 1 빌라 철문과 같은 색)
    dark: concrete(0x141922),
    crate: concrete(0x2a3142),
  };
  // 웜 셋 — 이 밤의 끝에서 유일하게 따뜻한 것들
  const porch = new THREE.MeshStandardMaterial({          // 현관 센서등
    color: 0xffd9a0, emissive: 0xffc687, emissiveIntensity: 1.0,
  });
  const glassLit = new THREE.MeshStandardMaterial({       // 문 유리 너머 계단실
    color: 0x6a5c42, emissive: 0xffb23e, emissiveIntensity: 0.35, roughness: 0.6,
  });
  const winLit = new THREE.MeshStandardMaterial({         // 위층 이웃 창 (하나만)
    color: 0x3a3428, emissive: 0xffb23e, emissiveIntensity: 0.18,
  });

  // ---------- 좁은 마당 ----------
  const YARD = 4.6;
  const yardMid = DOOR_Z + 3.4;
  boxOf(M.road, 12, 0.2, 12, 0, -0.18, yardMid, g);
  for (const s of [-1, 1]) {
    boxOf(M.wall, 0.5, 7, 7.6, s * YARD, 3.5, yardMid, g);
  }

  // ---------- 빌라 ----------
  const W = 9;
  boxOf(M.villa, W, 7, 0.6, 0, 3.5, DOOR_Z - 0.3, g);                  // 외벽
  boxOf(M.trim, W + 0.6, 0.3, 0.9, 0, 7.1, DOOR_Z - 0.3, g);           // 옥상 난간

  // 현관 — 캐노피 · 철문 · 유리 · 센서등 · 우편함 · 호수판
  boxOf(M.trim, 3.4, 0.22, 1.3, 0, 2.62, DOOR_Z + 0.45, g);            // 캐노피
  for (const s of [-1, 1]) boxOf(M.trim, 0.16, 2.5, 0.16, s * 1.5, 1.25, DOOR_Z + 0.95, g);
  boxOf(M.trim, 2.3, 2.5, 0.2, 0, 1.25, DOOR_Z + 0.02, g);             // 문틀
  boxOf(M.door, 1.6, 2.2, 0.14, 0, 1.1, DOOR_Z + 0.1, g);              // 철문
  // 문 유리 — **좁은 세로창 + 창살**. 넓은 판으로 두면 코앞에서 납작한 주황 덩어리로
  // 보인다 (v0.11.33 실측). 빌라 철문의 실제 문법이기도 하다
  const glass = new THREE.Mesh(new THREE.BoxGeometry(0.44, 1.05, 0.06), glassLit);
  glass.position.set(0, 1.52, DOOR_Z + 0.17);
  g.add(glass);
  for (const gy of [1.16, 1.52, 1.88]) {
    boxOf(M.door, 0.5, 0.05, 0.09, 0, gy, DOOR_Z + 0.19, g);            // 가로 창살
  }
  // 센서등 — 유일한 강한 웜. 갓을 씌워야 '기구'로 읽힌다
  boxOf(M.trim, 0.46, 0.1, 0.26, 0, 2.53, DOOR_Z + 0.19, g);
  const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.11, 0.14), porch);
  lamp.position.set(0, 2.44, DOOR_Z + 0.17);
  g.add(lamp);
  boxOf(M.trim, 1.0, 0.55, 0.16, -1.75, 1.35, DOOR_Z + 0.05, g);       // 우편함
  for (let i = 0; i < 3; i++) {
    boxOf(M.dark, 0.26, 0.34, 0.04, -2.05 + i * 0.3, 1.35, DOOR_Z + 0.14, g);
  }
  boxOf(M.trim, 0.5, 0.26, 0.06, 1.7, 2.15, DOOR_Z + 0.03, g);         // 호수판

  // 계단실 창 — 층마다 하나. **위층 하나만 켜져 있다** (이웃은 아직 깨어 있다)
  [3.6, 5.1, 6.3].forEach((y, i) => {
    boxOf(M.dark, 0.9, 1.1, 0.12, 2.6, y, DOOR_Z + 0.02, g);
    const w = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.0, 0.06), i === 1 ? winLit : M.dark);
    w.position.set(-2.6, y, DOOR_Z + 0.02);
    g.add(w);
  });
  boxOf(M.trim, 0.85, 0.6, 0.4, 3.0, 4.4, DOOR_Z + 0.2, g);            // 실외기

  // 재활용 배출장 — 테마 1과 같은 물건이 여기도 있다 (같은 동네라는 표시)
  boxOf(M.crate, 1.7, 0.5, 1.0, -3.3, 0.25, DOOR_Z + 1.5, g);
  boxOf(M.crate, 0.75, 0.36, 0.62, -3.5, 0.86, DOOR_Z + 1.45, g);

  g.visible = false;
  return g;
}
