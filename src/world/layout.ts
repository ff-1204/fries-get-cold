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
// 차는 **길 양쪽 터널의 검은 안개 속에서 나와 반대편 안개로 들어간다** (v0.11.31).
// 예전 범위(±15)는 터널 입구(±18)보다 안쪽이라 차가 허공에서 생겨났다 —
// 이제 첫 안개 판(±19.2)보다 깊은 곳에서 출발한다.
// **속도는 그대로**(약 11.6m/s): 범위를 늘린 만큼 시간도 늘려 치임 판정 창을 보존한다
export const CAR_SPAN = 44;   // 차가 지나는 x 범위 (-22 → +22, 양 끝은 터널 안)
export const CAR_SEC = 3.8;   // 통과 시간 — 헤드라이트를 보고 물러설 여유를 준다

// ---------- 차도 터널 (v0.11.31) — 길 양쪽 끝도 다리 밑으로 이어진다 ----------
/** 갱구의 x (양쪽 대칭). 길 끝 건물 벽이 있던 자리 */
export const ROAD_TUNNEL_X = 18;
export const ROAD_TUNNEL_LEN = 9;
export const ROAD_TUNNEL_H = 4.6;   // 차가 지나므로 골목 터널(3.4)보다 높다

// ---------- 다리 밑 터널 (v0.11.14) — 구간과 구간을 잇는 실제 공간 ----------
/** 터널 길이. 중간(-L-TUNNEL_LEN/2)에서 짧은 암전과 함께 다음 구간으로 넘어간다 */
export const TUNNEL_LEN = 9;
export const TUNNEL_H = 3.4;   // 낮은 천장 — 다리 밑이라 답답하다
/** 옹벽 안쪽면 — 통로 반폭. 플레이어 x 한계(main.ts)는 이보다 좁아야 카메라가 벽에 박히지 않는다 */
export const TUNNEL_IN_HALF = 1.5;
/** 전환이 일어나는 z (터널 한가운데) */
export const TUNNEL_SWAP_Z = -CONFIG.segLength - TUNNEL_LEN / 2;
/** 터널 등 위치 — 갱구에서 들어간 거리(m).
 *  **실제 광원은 가운데 하나뿐**이고 나머지는 발광 몸체만이다 (광원 수가 곧 성능이자
 *  스타일 — visual-polish §4). 멀어지는 등의 열이 공짜로 깊이를 만든다.
 *  어둠 곡선상 4.5m에서 dark=1이므로 그보다 깊은 등은 어차피 보이지 않는다 */
export const TUNNEL_LAMP_AT = [1.8, TUNNEL_LEN / 2];
/** 광원 색 — 한색(불안). 웜은 안전·목표 전용이라 터널에는 쓰지 않는다 (visual-polish §3) */
export const TUNNEL_LAMP_COLOR = 0xbcc6d8;
/** 등기구 발광부 — **광원 색보다 어둡다.** 같은 값을 쓰면 하얗게 날아 프레임에서
 *  제일 밝은 물건이 된다 (절제된 팔레트가 무너진다) */
export const TUNNEL_LAMP_EMISSIVE = 0x7c869c;
/** 터널 등의 기준 광량 — setTunnelDark가 (1-dark)를 곱한다 */
export const TUNNEL_LAMP_INTENSITY = 3.2;

// ---------- ⭐ 퇴근길에 **막 켜지는 등들** (v0.11.53) ----------
// 가을 저녁의 골목을 만드는 것은 노을만이 아니다. **해가 남아 있는데 등이 먼저 들어오는**
// 그 짧은 시간이 퇴근길의 정서다. 여태 퇴근길에는 가로등·부스등·터널등이 전부 꺼져 있었다.
//
// ⚠ 밤보다 **한참 약하게** 건다. 하늘이 아직 밝아서 등이 세면 밤처럼 보이고,
//   그러면 튜토리얼이 만들어야 할 낙차가 사라진다. 등은 '켜졌다'는 사실만 말하면 된다.
// ⚠ 밤의 값은 건드리지 않는다 — 웜=안전·목표라는 팔레트 규칙은 밤의 것이다 (visual-polish §3)

// ⚠ **전부 주황으로 칠하면 온기가 오히려 줄어든다** (실측 교정). 웜은 한색과 나란히 놓일 때
//    가장 웜하게 읽힌다 — 화면이 한 톤이면 그건 노을이 아니라 세피아 필터다.
//    그래서 등 셋을 **웜 둘 + 한색 하나**로 나눈다.

/** 가로등 — 웜. 다만 주황이 아니라 **웜화이트**다 (요즘 가로등은 대개 이쪽이다) */
export const DUSK_LAMP_COLOR = 0xffcf9d;
export const DUSK_LAMP_INTENSITY = 7.5;
export const DUSK_LAMP_EMISSIVE = 0x5f4726;
/** 다리 밑 터널 — 나트륨등. 여기만 주황을 남긴다: 좁고 어두운 자리라 한 점의 색으로 읽히고,
 *  넓은 면을 물들이지 않는다. 채도는 한 단 낮췄다 */
export const DUSK_TUNNEL_COLOR = 0xffab6e;
export const DUSK_TUNNEL_EMISSIVE = 0x7d5330;
/** ⭐ **정류장 부스는 한색으로 되돌린다** — 형광등은 원래 차갑고, 노을 속의 그 창백함이
 *  한국 저녁 정류장의 얼굴이다. 밤보다 약하게 걸어 '막 들어왔다'만 말하게 한다 */
export const DUSK_BOOTH_COLOR = 0xd4e2f2;
export const DUSK_BOOTH_EMISSIVE = 0x6d8098;
export const DUSK_BOOTH_INTENSITY = 4;
/** 전조등 — 해가 남아 있으니 밤(26)만큼 셀 이유가 없다 */
export const DUSK_CAR_INTENSITY = 11;

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

// 하늘·안개 색 — 퇴근길/밤 전환과 터널 암전이 함께 읽는다
export const FOG_NIGHT = 0x0a0e1a;

// ---------- 퇴근길(튜토리얼) = **가을 노을** ----------
// ⚠ 여기는 오래 **대낮 한색**(0x9fb4cf)이었다. 코드가 이 구간을 `morning`이라 부르던 시절의
// 잔재인데, 픽션은 진작 저녁이었다 — 첫 자막이 "힘든 하루였다"이고 나오면 밤이다.
// 노을로 되돌리면 세 가지가 동시에 맞는다: 시간대의 사실 · **웜=안전**이라는 팔레트 규칙
// (visual-polish §3 — 밤에 희소해야 할 온기를 여기서 실컷 쓴다) · 밤과의 낙차.
//
// 하늘과 안개를 **다른 색으로** 둔 것이 노을의 핵심이다. 하나로 칠하면 '주황 안개'가 되고,
// 위는 호박색인데 먼 곳이 옅은 장밋빛 회색으로 가라앉아야 '해가 낮다'로 읽힌다
/** 머리 위 하늘 — 늦가을 호박색 */
export const SKY_DUSK = 0xefc3c6;
/** 대기(안개) — 하늘보다 옅고 탁한 장밋빛. 먼 곳이 이 색으로 물러난다 */
export const FOG_DUSK = 0xd9bcbd;
