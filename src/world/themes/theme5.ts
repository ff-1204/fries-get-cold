// 테마 5 — 먹자골목 입구 (귀갓길의 첫 구간 = 가게 앞).
// 먹자골목의 밀도를 프롭으로 만들되 **전부 소등**이 이 시각의 정상.

import * as THREE from 'three';
import { type Build, type Theme5Refs } from '../refs';
import { box, boxOf, concrete, type SharedMats } from '../kit';
import { L, HW, SIGN_REST_Y } from '../layout';

type E = 'sign_turn' | 'drag_mark' | 'open_shutter';

export function createTheme5(mats: SharedMats): Build<Theme5Refs, E> {
  const t5 = new THREE.Group();

  // 간판 실루엣들 (양쪽 벽 — 전부 소등이 이 시각의 정상)
  box(0.14, 0.6, 1.5, 0x20263a, -HW + 0.1, 3.1, -L * 0.25, t5);
  box(1.6, 0.7, 0.14, 0x1e2434, HW - 0.1, 3.35, -L * 0.33, t5);
  box(0.14, 0.55, 1.3, 0x1c2130, -HW + 0.1, 2.9, -L * 0.47, t5);
  box(1.8, 0.6, 0.14, 0x20263a, HW - 0.1, 3.15, -L * 0.6, t5);

  // A자 입간판 (A-013 — 정상: 벽과 평행(옆면) / 이상: 판면이 정면)
  const sign = new THREE.Group();
  const panelMat = new THREE.MeshStandardMaterial({ color: 0x8b90a8, roughness: 0.9 });
  const panelGeo = new THREE.BoxGeometry(0.8, 1.15, 0.06);
  for (const dir of [1, -1]) {
    const panel = new THREE.Mesh(panelGeo, panelMat);
    panel.position.set(0, 0.56, dir * 0.16);
    panel.rotation.x = -dir * 0.26;
    sign.add(panel);
  }
  sign.position.set(-HW + 0.75, 0, -L * 0.55); // 가로등(z=-L*0.45) 광원 안쪽
  sign.rotation.y = SIGN_REST_Y;
  t5.add(sign);

  // H-008 끌린 자국 — 길 한가운데서 시작해 왼쪽 벽 어둠으로 이어지는 긴 자국
  const dragMark = new THREE.Group();
  const pool = new THREE.Mesh(new THREE.CircleGeometry(0.34, 16), mats.blood);
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(0.7, 0.015, -L * 0.52);
  const streak = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 6.2), mats.blood);
  streak.rotation.x = -Math.PI / 2;
  streak.rotation.z = 0.42; // 시작점 → 왼쪽 벽 방향
  streak.position.set(-0.55, 0.015, -L * 0.595);
  dragMark.add(pool, streak);
  dragMark.visible = false;
  t5.add(dragMark);

  // ---------- 시장 (v0.11.32) ----------
  // 예전에는 벽에 붙은 납작한 상자 몇 개뿐이라 다섯 구간 중 **가장 비어 있었다** —
  // 이름이 '먹자골목'인데. 양쪽 벽을 따라 가게 전면을 늘어세워 밀도를 만든다.
  // **전부 소등**이 이 시각의 정상: 유일하게 켜진 것은 구간 끝의 FF-1204다 (웜 10% 원칙).
  // 재질은 한 벌만 만들어 공유한다 — box()는 호출마다 재질을 새로 만든다
  const M = {
    front: concrete(0x232838),   // 가게 파사드
    shutter: concrete(0x2a3143), // 닫힌 셔터
    slat: concrete(0x1f2534),    // 셔터 슬랫
    awning: concrete(0x2b2334),  // 천막
    signB: concrete(0x20263a),   // 간판
    crate: concrete(0x262c3e),   // 상자·통
    steel: concrete(0x3a4157),   // 기둥·선반
    wire: concrete(0x11141d),    // 전선
  };

  // 입구 현수막 — 골목의 시작을 알리는 가로띠
  boxOf(M.signB, HW * 2 + 0.6, 0.55, 0.05, 0, 4.4, -L * 0.12, t5);

  // 가게 전면 6곳 — 양쪽 벽에 어긋나게 배치 (마주보면 복도처럼 보인다)
  const shops: Array<[number, number, number]> = [ // [벽(±1), z, 폭]
    [1, -L * 0.2, 3.0], [-1, -L * 0.33, 3.4], [1, -L * 0.46, 3.2],
    [-1, -L * 0.58, 3.0], [1, -L * 0.71, 3.4], [-1, -L * 0.83, 3.2],
  ];
  // H-015가 열어젖힐 가게 하나(다섯 번째, 오른쪽 -L*0.71)의 닫힌 셔터는 **따로 담아 둔다** —
  // 이상 시 이것을 숨기고 열린 셔터를 대신 켠다. 겹쳐 두면 닫힌 셔터가 그대로 덮는다
  // ⚠ 처음에는 다섯 번째 가게(-L*0.71)를 열었다. 가림 검사는 5/5로 통과했지만
  //   **가로등(-L*0.45)에서 9m 밖이라 화면에서는 아무것도 안 보였다** — 레이캐스트는
  //   '가려짐'을 재지 '밝기'를 재지 않는다. 배치 3원칙 ①(광원 안쪽)은 눈으로 확인해야 한다
  const OPEN_I = 2;   // 세 번째 가게 (오른쪽 -L*0.46) — 가로등 바로 옆
  const closedShutter = new THREE.Group();
  t5.add(closedShutter);

  shops.forEach(([s, z, w], i) => {
    const x = s * (HW - 0.1);
    const into = i === OPEN_I ? closedShutter : t5;
    boxOf(M.front, 0.2, 4.2, w, x, 2.1, z, t5);                       // 파사드
    boxOf(M.shutter, 0.16, 2.3, w - 0.5, s * (HW - 0.26), 1.15, z, into); // 셔터 (닫힘)
    for (let k = 0; k < 4; k++) {                                      // 슬랫 — 셔터의 문법
      boxOf(M.slat, 0.17, 0.05, w - 0.5, s * (HW - 0.26), 0.5 + k * 0.5, z, into);
    }
    const aw = boxOf(M.awning, 0.95, 0.08, w + 0.2, s * (HW - 0.55), 2.72, z, t5);
    aw.rotation.z = s * -0.28;                                         // 벽에서 내려오는 천막
    boxOf(M.signB, 0.14, 0.62, w - 0.8, s * (HW - 0.12), 3.42, z, t5);  // 간판 (소등)
    // 홀수 가게만 돌출 간판 — 다 달면 리듬이 죽는다
    if (i % 2 === 1) boxOf(M.signB, 0.5, 1.5, 0.16, s * (HW - 0.45), 3.3, z + 1.1, t5);
    // 좌판 — 셔터 앞에 접어둔 가판대 (장사 끝난 시장의 흔적).
    // **통행 한계(x ±2.6) 밖에 둔다** — 폭 0.4를 x=±2.8에 두면 2.6~3.0을 차지한다.
    // 이 규칙을 어기면 몸으로 프롭을 통과하게 된다 (v0.3.3에서 배운 것)
    boxOf(M.steel, 0.4, 0.08, w - 1.2, s * (HW - 0.2), 0.78, z, t5);
    for (const d of [-1, 1]) {
      boxOf(M.steel, 0.06, 0.78, 0.06, s * (HW - 0.2), 0.39, z + d * (w / 2 - 0.8), t5);
    }
  });

  // 바닥 소품 — 쌓인 상자·고무 대야. 역시 통행 한계 밖 (x ±2.8, 한 변 0.44 이하)
  const props: Array<[number, number, number, number]> = [ // [x, y, z, 크기]
    [HW - 0.2, 0.18, -L * 0.42, 0.44], [HW - 0.22, 0.53, -L * 0.43, 0.4],
    [-HW + 0.2, 0.2, -L * 0.7, 0.42], [-HW + 0.22, 0.18, -L * 0.26, 0.44],
    [HW - 0.24, 0.17, -L * 0.63, 0.4], [-HW + 0.2, 0.54, -L * 0.71, 0.36],
  ];
  for (const [x, y, z, sz] of props) boxOf(M.crate, sz, sz * 0.78, sz, x, y, z, t5);

  // 골목을 가로지르는 전구줄 — 시장의 시그니처. 불은 꺼져 있다
  for (const z of [-L * 0.28, -L * 0.52, -L * 0.76]) {
    boxOf(M.wire, HW * 2 + 0.4, 0.035, 0.035, 0, 4.05, z, t5);
    for (let k = -2; k <= 2; k++) {
      boxOf(M.crate, 0.09, 0.13, 0.09, k * 1.15, 3.95, z, t5);         // 꺼진 전구
    }
  }

  // ---------- H-015 반쯤 올라간 셔터 (밤 3, 직시) ----------
  // 시장의 정상은 **전부 소등·전부 닫힘**이다. 그 반복 여섯 개 사이에서 하나만 반쯤 올라가 있고,
  // 그 아래는 불이 꺼진 채 **검다** — 열려 있는데 아무도 없다. 정물성 그대로.
  // **가로등이 비추는 파사드 한가운데의 검은 구멍**이라 실루엣 대비가 최대다 (배치 3원칙 ③)
  const [, OPEN_Z, OPEN_W] = shops[OPEN_I];
  const IW = OPEN_W - 0.5;
  const openShutter = new THREE.Group();
  // 올라간 셔터 (짧아진 채 위에 걸려 있다)
  boxOf(M.shutter, 0.16, 0.95, IW, HW - 0.26, 1.83, OPEN_Z, openShutter);
  for (let k = 0; k < 2; k++) {
    boxOf(M.slat, 0.17, 0.05, IW, HW - 0.26, 1.55 + k * 0.4, OPEN_Z, openShutter);
  }
  // 드러난 안쪽 — 아무 빛도 없다. **어둠 자체가 이 이상현상의 몸**이다.
  // 살짝 앞으로 내밀어 파사드에 묻히지 않게 한다
  boxOf(concrete(0x04060a), 0.06, 1.35, IW, HW - 0.36, 0.68, OPEN_Z, openShutter);
  openShutter.visible = false;
  t5.add(openShutter);

  return {
    group: t5,
    refs: { sign, dragMark, openShutter, closedShutter },
    hit: {
      sign_turn: [sign],
      drag_mark: [dragMark],
      open_shutter: [openShutter],
    },
  };
}
