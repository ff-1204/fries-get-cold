// 골목의 치수·좌표·주기 — 지오메트리(테마)와 판정(main.ts)이 **같은 숫자를 읽는다**.
// 여기 있는 값을 지오메트리 쪽에서만 고치면 판정이 거짓말을 하게 된다 (design-principles §0 정직한 판정).
// 전방 = -Z. 구간 끝(z=-segLength) 중앙 개구부가 유일한 출구 — 갈림길 없음.

import * as THREE from 'three';
import { CONFIG } from '../config';

export const L = CONFIG.segLength;
export const HW = CONFIG.corridorHalfWidth;
export const WALL_H = 7;

// ---------- 차도 (테마 4) — 신호를 어기면 차가 지나간다 (v0.11.7) ----------
/** 교차로 중심 z — 횡단보도(-L*0.62 ~ -L*0.716) 를 품는다 */
export const ROAD_Z = -L * 0.68;
export const ROAD_HALF = 3.2;
/** 정지선 z — 이 선을 넘는 순간부터 '길 위' */
export const STOP_LINE_Z = -L * 0.585;
// 보행 신호 주기 — **점멸 구간이 횡단 시간보다 길어야 공정하다** (v0.11.7 실측 교정).
// 도로 폭 6.4m ÷ 걷기 3.2m/s ≈ 2.1초. 점멸 2.5초 ≥ 2.1초이므로,
// **초록에 출발하면 반드시 건넌다.** 점멸에 출발하면 늦을 수 있다 — 그 판단이 플레이어의 몫
export const TRAFFIC_CYCLE = 9.0;
const TRAFFIC_SOLID = 3.5;  // 0 ~ 3.5   초록 (출발해도 안전)
const TRAFFIC_FLASH = 6.0;  // 3.5 ~ 6.0 점멸 (건널 수는 있다. 서두르지 않으면 늦는다)
                            // 6.0 ~ 9.0 빨강 (길 위에 있으면 차가 온다)
/** 건너도 되는 신호인가 (초록 + 점멸) — main과 world가 같은 수식을 읽는다 (§0 정직한 판정) */
export function isGreen(t: number): boolean {
  return t % TRAFFIC_CYCLE < TRAFFIC_FLASH;
}
/** 점멸 중인가 — 곧 빨강이라는 경고 */
export function isFlashing(t: number): boolean {
  const p = t % TRAFFIC_CYCLE;
  return p >= TRAFFIC_SOLID && p < TRAFFIC_FLASH;
}
export const CAR_SPAN = 30;   // 차가 지나는 x 범위 (-15 → +15)
export const CAR_SEC = 2.6;   // 통과 시간 — 헤드라이트를 보고 물러설 여유를 준다

// ---------- 다리 밑 터널 (v0.11.14) — 구간과 구간을 잇는 실제 공간 ----------
/** 터널 길이. 중간(-L-TUNNEL_LEN/2)에서 짧은 암전과 함께 다음 구간으로 넘어간다 */
export const TUNNEL_LEN = 9;
export const TUNNEL_H = 3.4;   // 낮은 천장 — 다리 밑이라 답답하다
/** 전환이 일어나는 z (터널 한가운데) */
export const TUNNEL_SWAP_Z = -CONFIG.segLength - TUNNEL_LEN / 2;

// 입간판 방향 — 정상은 벽과 평행(옆면), 이상은 플레이어 정면 (실루엣 차이 = 명확성)
export const SIGN_REST_Y = Math.PI / 2;
export const SIGN_TURNED_Y = 0;

/** 스폰 앵커 — 위치 자유형 이상현상(figure 등)이 출현하는 후보 지점 (전 테마 공용).
 *  통행 한계 안쪽·가로등(z=-L*0.45) 시야권 — 걷다 보면 반드시 곁을 지나게 되는 자리들 */
export const SPAWN_ANCHORS: Array<[number, number]> = [
  [1.6, -L * 0.26], [-1.9, -L * 0.36], [2.1, -L * 0.49],
  [-1.4, -L * 0.58], [0.9, -L * 0.71], [-2.1, -L * 0.81],
];

// 공 위치 — 정상은 펜스 안쪽, 이상은 길 한가운데
export const BALL_HOME = new THREE.Vector3(-2.35, 0.28, -L * 0.46);
export const BALL_OUT = new THREE.Vector3(0.5, 0.28, -L * 0.42);

// ---------- 깊이 시각화 — 꺼져가는 빛 ----------
// 깊이는 숫자로 표시하지 않는다: 가로등 밝기가 다이제틱 게이지다 (game-design-theory §9 위반 2).
// 스텝 사다리 — 트윈 없이 구간 전환 시 적용 ("이미 그렇게 있어야 한다", visual-polish §7)
// 2026-08-02 상향: 바닥을 올리되 단차(감광 체감)는 유지 — 깊이는 여전히 가로등이 게이지다
export const LAMP_LADDER = [26, 20, 14, 9, 5.5, 3]; // index = min(depth, 5). depthLimit(6) 직전 = 거의 어둠

// 하늘·안개 색 — 밤/아침 전환과 터널 암전이 함께 읽는다
export const FOG_NIGHT = 0x0a0e1a;
export const FOG_DAY = 0x9fb4cf;
