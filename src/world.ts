// 그레이박스 골목 — 공용 복도 프리팹 + 구간별 테마 5종 (docs/development.md 구현 노트)
// 전방 = -Z. 구간 끝(z=-segLength) 중앙 개구부가 유일한 출구 — 갈림길 없음 (지적 문법).
// 테마: 원룸 골목 / 상가 골목 / 놀이터 옆길 / 정류장 앞 / 먹자골목 입구 (story.md §4)
// 이상현상 배치 3원칙(anomalies.md): 광원 안쪽 · 관찰 시간 확보 · 실루엣 대비

import * as THREE from 'three';
import { CONFIG, MAIN_GAP_HALF } from './config';
import { type AnomalyEffect } from './data';

export { MAIN_GAP_HALF }; // 기존 import 경로(main.ts) 유지

export interface SegmentRefs {
  group: THREE.Group;
  themes: THREE.Group[]; // index = 구간 - 1
  scene: THREE.Scene;            // 아침/밤 전환 대상 (setMorning — 배경·안개)
  moon: THREE.DirectionalLight;  // 밤: 달빛 / 아침: 해 (setMorning이 색·강도 전환)
  tunnel: THREE.Group;           // 다리 밑 터널(앞) — 구간 사이를 잇는다 (마지막 구간엔 숨김)
  backTunnel: THREE.Group;       // 뒤 — 지나온 터널 (둘 중 하나만 보인다, setBackScene)
  tunnelLight: THREE.PointLight;
  backTunnelLight: THREE.PointLight;
  car: THREE.Group;              // 차도(테마 4) — 신호 위반 시 지나간다 (startCar/updateWorld)
  carLight: THREE.PointLight;
  ambient: THREE.AmbientLight;   // 깊이 사다리 대상 (applyDepth)
  foldMark: THREE.Mesh;          // 접힘 반복 구간의 바닥 분필 자국 (인지 보장 4요소 ④)
  lampLight: THREE.PointLight;
  shopGlow: THREE.PointLight;
  shopSign: THREE.Mesh;
  shopSignMat: THREE.MeshStandardMaterial;
  // --- 이상현상 타깃 (테마별) ---
  umbrella: THREE.Group;                    // 1: A-001
  sensorMat: THREE.MeshStandardMaterial;    // 1: A-002
  sensorLight: THREE.PointLight;
  windowMat: THREE.MeshStandardMaterial;    // 1: A-015
  flyerMat: THREE.MeshStandardMaterial;     // 1: A-003 (전단지 — TXT)
  flyerTex: [THREE.CanvasTexture, THREE.CanvasTexture];   // [정상, 이상]
  laundryShutter: THREE.Mesh;               // 2: A-004
  laundryMat: THREE.MeshStandardMaterial;
  laundryLight: THREE.PointLight;
  storeSignMat: THREE.MeshStandardMaterial; // 2: A-006
  realtyMat: THREE.MeshStandardMaterial;    // 2: A-005 (부동산 시세표 — TXT)
  realtyTex: [THREE.CanvasTexture, THREE.CanvasTexture];
  swingPivot: THREE.Group;                  // 3: A-007
  ball: THREE.Mesh;                         // 3: A-009
  trafficRed: THREE.MeshStandardMaterial[]; // 4: A-011 (양쪽 빨간등)
  trafficGreen: THREE.MeshStandardMaterial[];
  sign: THREE.Group;                        // 5: A-013
  shopTex: [THREE.CanvasTexture, THREE.CanvasTexture];    // 5: A-012 (간판 오탈자 — TXT)
  figure: THREE.Group;                      // 전 구간: H-009 그림자 사람 (스폰 앵커 랜덤 — HUM)
  // --- 괴담의 존재 타깃 (밤의 골목에만 있는 것) ---
  bloodTrail: THREE.Group;                  // 1: H-001 바닥 핏자국
  skull: THREE.Group;                       // 1: H-002 배출장 위 백골
  facePlane: THREE.Mesh;                    // 1: H-003 창문의 창백한 얼굴
  handprints: THREE.Mesh;                   // 2: H-004 셔터의 손자국들
  swingFigure: THREE.Group;                 // 3: H-005 그네에 앉은 형체
  eyes: THREE.Group;                        // 3: H-006 펜스 뒤 어둠의 눈
  busFigure: THREE.Group;                   // 4: H-007 정류장의 앉은 형체
  dragMark: THREE.Group;                    // 5: H-008 끌린 자국
  /** 지적(포인팅) 히트 대상 — effect별 클릭 가능한 사물 (main.ts tryPoint 판정) */
  hit: Record<AnomalyEffect, THREE.Object3D[]>;
}

const L = CONFIG.segLength;
const HW = CONFIG.corridorHalfWidth;
const WALL_H = 7;

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
const CAR_SPAN = 30;   // 차가 지나는 x 범위 (-15 → +15)
const CAR_SEC = 2.6;   // 통과 시간 — 헤드라이트를 보고 물러설 여유를 준다

// ---------- 다리 밑 터널 (v0.11.14) — 구간과 구간을 잇는 실제 공간 ----------
/** 터널 길이. 중간(-L-TUNNEL_LEN/2)에서 짧은 암전과 함께 다음 구간으로 넘어간다 */
export const TUNNEL_LEN = 9;
export const TUNNEL_H = 3.4;   // 낮은 천장 — 다리 밑이라 답답하다
/** 전환이 일어나는 z (터널 한가운데) */
export const TUNNEL_SWAP_Z = -CONFIG.segLength - TUNNEL_LEN / 2;

// 입간판 방향 — 정상은 벽과 평행(옆면), 이상은 플레이어 정면 (실루엣 차이 = 명확성)
const SIGN_REST_Y = Math.PI / 2;
const SIGN_TURNED_Y = 0;

/** 스폰 앵커 — 위치 자유형 이상현상(figure 등)이 출현하는 후보 지점 (전 테마 공용).
 *  통행 한계 안쪽·가로등(z=-L*0.45) 시야권 — 걷다 보면 반드시 곁을 지나게 되는 자리들 */
export const SPAWN_ANCHORS: Array<[number, number]> = [
  [1.6, -L * 0.26], [-1.9, -L * 0.36], [2.1, -L * 0.49],
  [-1.4, -L * 0.58], [0.9, -L * 0.71], [-2.1, -L * 0.81],
];

// 공 위치 — 정상은 펜스 안쪽, 이상은 길 한가운데
const BALL_HOME = new THREE.Vector3(-2.35, 0.28, -L * 0.46);
const BALL_OUT = new THREE.Vector3(0.5, 0.28, -L * 0.42);

// ---------- TXT 계열 — 캔버스 텍스트 렌더 (A-003·A-005·A-012) ----------
// 시스템 폰트만 사용 (오프라인 단일 파일 빌드 유지 — 웹폰트 로드 금지)
const KR_FONT = '"Malgun Gothic", "Apple SD Gothic Neo", sans-serif';

function canvasTex(w: number, h: number, draw: (c: CanvasRenderingContext2D) => void): THREE.CanvasTexture {
  const cv = document.createElement('canvas');
  cv.width = w;
  cv.height = h;
  const c = cv.getContext('2d')!;
  draw(c);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/** 과외 전단지 — 정상 11자리 / 이상 10자리 (가운데 자리군이 한 자리 짧다) */
function flyerTexture(phone: string): THREE.CanvasTexture {
  return canvasTex(256, 352, (c) => {
    c.fillStyle = '#b3ad9c'; // 살짝 바랜 종이 — 벽(#232838)과 실루엣 대비 (배치 3원칙)
    c.fillRect(0, 0, 256, 352);
    c.fillStyle = '#2a2620';
    c.textAlign = 'center';
    c.font = `bold 46px ${KR_FONT}`;
    c.fillText('과외', 128, 84);
    c.fillText('구합니다', 128, 140);
    c.font = `24px ${KR_FONT}`;
    c.fillText('수학 · 영어 — 초·중등', 128, 196);
    c.font = `bold 31px ${KR_FONT}`;
    c.fillText(phone, 128, 268);
    // 절취선 (아래 탭 — 전단지의 실루엣 문법)
    c.strokeStyle = '#6d675a';
    c.setLineDash([5, 5]);
    for (let x = 32; x < 256; x += 32) {
      c.beginPath();
      c.moveTo(x, 300);
      c.lineTo(x, 352);
      c.stroke();
    }
  });
}

/** 부동산 유리창 시세표 — 정상 "월세 35" / 이상 첫 카드가 "급구" */
function realtyTexture(urgent: boolean): THREE.CanvasTexture {
  return canvasTex(512, 384, (c) => {
    c.fillStyle = '#0d1220'; // 꺼진 유리창
    c.fillRect(0, 0, 512, 384);
    c.strokeStyle = '#2a3148';
    c.lineWidth = 10;
    c.strokeRect(5, 5, 502, 374);
    const cards: Array<[string, string]> = [
      ['희망빌라 302', urgent ? '급구' : '월세 35'],
      ['동아주택 B01', '월세 30'],
      ['한빛빌라 201', '전세 8,500'],
      ['성원빌라 402', '월세 28'],
    ];
    cards.forEach(([name, price], i) => {
      const x = 28 + (i % 2) * 240;
      const y = 32 + Math.floor(i / 2) * 168;
      c.fillStyle = '#c6c1b1';
      c.fillRect(x, y, 216, 140);
      c.textAlign = 'center';
      c.fillStyle = '#33302a';
      c.font = `22px ${KR_FONT}`;
      c.fillText(name, x + 108, y + 44);
      // '급구'도 같은 잉크색 — 색으로 소리치지 않는다 (담담한 톤, visual-polish §6)
      c.font = `bold 40px ${KR_FONT}`;
      c.fillText(price, x + 108, y + 102);
    });
  });
}

/** 창문의 창백한 얼굴 (H-003) — 어두운 유리 너머, 이목구비가 반쯤 뭉개진 얼굴 */
function faceTexture(): THREE.CanvasTexture {
  return canvasTex(256, 320, (c) => {
    c.fillStyle = '#0d1220'; // 꺼진 유리창과 같은 어둠
    c.fillRect(0, 0, 256, 320);
    // 창백한 얼굴 — 흐릿한 경계 (또렷하면 사람, 뭉개지면 그것)
    const g = c.createRadialGradient(128, 150, 20, 128, 150, 95);
    g.addColorStop(0, 'rgba(190, 186, 170, 0.92)');
    g.addColorStop(0.75, 'rgba(160, 155, 140, 0.5)');
    g.addColorStop(1, 'rgba(120, 116, 104, 0)');
    c.fillStyle = g;
    c.beginPath();
    c.ellipse(128, 150, 72, 100, 0, 0, Math.PI * 2);
    c.fill();
    // 눈 — 파인 어둠 두 곳 (입은 없다)
    c.fillStyle = 'rgba(10, 12, 18, 0.9)';
    for (const ex of [98, 158]) {
      c.beginPath();
      c.ellipse(ex, 128, 11, 16, 0, 0, Math.PI * 2);
      c.fill();
    }
  });
}

/** 셔터의 손자국들 (H-004) — 검붉은 손바닥 자국. 안쪽에서 찍힌 방향 */
function handprintsTexture(): THREE.CanvasTexture {
  return canvasTex(1024, 512, (c) => {
    c.clearRect(0, 0, 1024, 512);
    const prints: Array<[number, number, number, number]> = [
      [190, 260, 0.28, 0.85], [340, 180, -0.2, 0.7], [520, 300, 0.5, 0.9],
      [660, 210, -0.4, 0.6], [810, 290, 0.15, 0.8], [430, 400, -0.1, 0.5],
    ];
    for (const [px, py, rot, alpha] of prints) {
      c.save();
      c.translate(px, py);
      c.rotate(rot);
      c.fillStyle = `rgba(90, 15, 15, ${alpha})`; // 저채도 적 — 이상 시그널 전용색 (visual-polish §3)
      c.beginPath();
      c.ellipse(0, 0, 26, 34, 0, 0, Math.PI * 2); // 손바닥
      c.fill();
      for (let f = 0; f < 5; f++) {
        const a = -0.7 + f * 0.35;
        c.beginPath();
        c.ellipse(Math.sin(a) * 34, -Math.cos(a) * 44, 7, 17, a, 0, Math.PI * 2);
        c.fill();
      }
      c.restore();
    }
  });
}

/** 정류장 현수막 — 게임을 시작시키는 물건. 퇴근길에 이걸 보고 걸음을 돌린다 (v0.11.5).
 *  튜토리얼 인트로 문구가 가리키는 실물이므로 반드시 보여야 한다 (어포던스: 말한 것은 보인다) */
function bannerTexture(): THREE.CanvasTexture {
  return canvasTex(1024, 192, (c) => {
    c.fillStyle = '#7c1d22';               // 개업 현수막의 그 붉은색
    c.fillRect(0, 0, 1024, 192);
    c.strokeStyle = '#e8d9a0';
    c.lineWidth = 5;
    c.strokeRect(14, 14, 996, 164);
    c.textAlign = 'center';
    c.fillStyle = '#fdf3d8';
    c.font = `bold 78px ${KR_FONT}`;
    c.fillText('FF-1204  개업', 512, 86);
    c.font = `bold 56px ${KR_FONT}`;
    c.fillText('XXXXL 감자튀김', 512, 154);
  });
}

/** 가게 간판 — 정상 "FF-1204 24시" / 이상 "FF-1204 24시간요" (story.md §7) */
function shopSignTexture(text: string): THREE.CanvasTexture {
  return canvasTex(512, 144, (c) => {
    c.fillStyle = '#140d05';
    c.fillRect(0, 0, 512, 144);
    c.textAlign = 'center';
    c.fillStyle = '#ffd9a0'; // 점등 시 emissiveMap으로 발광 — 웜은 목표(버거집) 전용색
    c.font = `bold 60px ${KR_FONT}`;
    const w = c.measureText(text).width;
    if (w > 470) c.font = `bold ${Math.floor((60 * 470) / w)}px ${KR_FONT}`;
    c.fillText(text, 256, 96);
  });
}

function box(
  w: number, h: number, d: number,
  color: number, x: number, y: number, z: number,
  parent: THREE.Object3D,
): THREE.Mesh {
  const m = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color, roughness: 0.95 }),
  );
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}

export function createWorld(scene: THREE.Scene): SegmentRefs {
  scene.background = new THREE.Color(0x0a0e1a); // OLED 대응: 순수 검정 금지 (responsive-design §6)
  // 밝기 재조정 (2026-08-02): 안개를 옅게, 앰비언트 바닥을 올린다 — 공포는 어둠의 절대량이
  // 아니라 웜/한색 대비·안개·감광 사다리가 담당 (visual-polish §4 "다음 구간이 어렴풋이")
  scene.fog = new THREE.FogExp2(0x0a0e1a, 0.044);

  const ambient = new THREE.AmbientLight(0x39415e, 2.2);
  scene.add(ambient);
  const moon = new THREE.DirectionalLight(0x8090c0, 0.75);
  moon.position.set(4, 10, 2);
  scene.add(moon);

  const group = new THREE.Group();
  scene.add(group);

  // ---------- 공용 복도 ----------
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

  // 끝 벽 — 개구부(중앙)를 남기고 2조각
  const endWallW = HW - MAIN_GAP_HALF + 1;
  box(endWallW, WALL_H, 1, 0x232838, -(MAIN_GAP_HALF + endWallW / 2), WALL_H / 2, -L - 0.5, group);
  box(endWallW, WALL_H, 1, 0x232838, MAIN_GAP_HALF + endWallW / 2, WALL_H / 2, -L - 0.5, group);

  // ---------- 뒤 — 지나온 터널 (v0.11.16) ----------
  // 이 동네의 골목들은 다리 밑 터널로 이어져 있다. 어디서 출발하든 뒤에는 지나온 터널이 있다.
  // (v0.11.15까지는 "내가 나온 빌라 현관"이었는데, 퇴근길·가게 앞 어느 출발점과도 맞지 않았다)
  // 지나온 터널 (뒤) — 앞 터널의 거울상. 끝은 막혀 있다: 돌아가는 길은 없다
  const backTunnel = new THREE.Group();
  group.add(backTunnel);
  box(20, 0.2, TUNNEL_LEN + 6, 0x181c28, 0, -0.1, TUNNEL_LEN / 2, backTunnel);
  for (const s of [-1, 1]) {
    box(0.9, TUNNEL_H, TUNNEL_LEN + 2, 0x1b202c,
      s * (MAIN_GAP_HALF + 0.55), TUNNEL_H / 2, TUNNEL_LEN / 2, backTunnel);
  }
  box(MAIN_GAP_HALF * 2 + 2, 0.9, TUNNEL_LEN + 2, 0x141922,
    0, TUNNEL_H + 0.45, TUNNEL_LEN / 2, backTunnel);
  box(20, 2.2, 1.4, 0x232838, 0, TUNNEL_H + 2.0, 0.7, backTunnel);
  box(20, WALL_H, 1, 0x232838, 0, WALL_H / 2, TUNNEL_LEN + 0.6, backTunnel); // 막힌 끝
  const backTunnelLight = new THREE.PointLight(0xbcc6d8, 3.2, 11, 2);
  backTunnelLight.position.set(0, TUNNEL_H - 0.35, TUNNEL_LEN / 2);
  backTunnel.add(backTunnelLight);

  // ---------- 앞 — 다리 밑 터널 (v0.11.14: 순간이동 대신 실제로 지나가는 공간) ----------
  // 구간과 구간은 이 터널로 이어진다. 좁고(개구부 폭) 낮고 어둡다 — 전환은 그 안에서 일어난다.
  // 마지막 구간(도착)에서는 숨긴다: 그때는 터널이 아니라 가게/집이 나와야 한다
  const tunnel = new THREE.Group();
  box(20, 0.2, TUNNEL_LEN + 6, 0x181c28, 0, -0.1, -L - TUNNEL_LEN / 2, tunnel); // 노면
  for (const s of [-1, 1]) {
    box(0.9, TUNNEL_H, TUNNEL_LEN + 2, 0x1b202c,
      s * (MAIN_GAP_HALF + 0.55), TUNNEL_H / 2, -L - TUNNEL_LEN / 2, tunnel);   // 옹벽
  }
  box(MAIN_GAP_HALF * 2 + 2, 0.9, TUNNEL_LEN + 2, 0x141922,
    0, TUNNEL_H + 0.45, -L - TUNNEL_LEN / 2, tunnel);                            // 상판(다리 바닥)
  box(20, 2.2, 1.4, 0x232838, 0, TUNNEL_H + 2.0, -L - 0.7, tunnel);              // 다리 난간 쪽 벽
  box(20, 2.2, 1.4, 0x232838, 0, TUNNEL_H + 2.0, -L - TUNNEL_LEN - 0.7, tunnel);
  box(20, WALL_H, 1, 0x232838, 0, WALL_H / 2, -L - TUNNEL_LEN - 4, tunnel);      // 터널 너머 마감
  // 터널 안의 유일한 빛 — 반쯤 죽은 등 (전환이 일어나는 지점을 어렴풋이 비춘다)
  const tunnelLight = new THREE.PointLight(0xbcc6d8, 3.2, 11, 2);
  tunnelLight.position.set(0, TUNNEL_H - 0.35, -L - TUNNEL_LEN / 2);
  tunnel.add(tunnelLight);
  group.add(tunnel);

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
  const figureMat = new THREE.MeshStandardMaterial({ color: 0x0b0e16, roughness: 1 });
  const fBody = new THREE.Mesh(new THREE.BoxGeometry(0.46, 1.22, 0.28), figureMat);
  fBody.position.y = 0.9;
  const fHead = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), figureMat);
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

  // 핏자국 공용 재질 — 저채도 적 (팔레트: 이상 시그널 전용색. 야하게 빛나지 않는다)
  const bloodMat = new THREE.MeshStandardMaterial({ color: 0x571010, roughness: 1 });
  const darkFigureMat = new THREE.MeshStandardMaterial({ color: 0x0b0e16, roughness: 1 });

  // ---------- 테마 1: 원룸 골목 ----------
  const t1 = new THREE.Group();

  // H-001 바닥 핏자국 — 가로등(z=-16.2) 사거리 안, 통행부 한가운데를 가로질러
  // 빌라 철문(z=-7.9) 쪽 어둠으로 이어진다. 걷다 보면 밟게 되는 자리 (관찰 시간 확보)
  const bloodTrail = new THREE.Group();
  const trailSpots: Array<[number, number, number]> = [
    [0.55, -L * 0.31, 0.3], [0.2, -L * 0.345, 0.2], [-0.2, -L * 0.375, 0.26],
    [-0.6, -L * 0.4, 0.17], [-1.1, -L * 0.42, 0.22], [-1.6, -L * 0.435, 0.14],
  ];
  for (const [bx, bz, r] of trailSpots) {
    const spot = new THREE.Mesh(new THREE.CircleGeometry(r, 14), bloodMat);
    spot.rotation.x = -Math.PI / 2;
    spot.position.set(bx, 0.015, bz);
    bloodTrail.add(spot);
  }
  bloodTrail.visible = false;
  t1.add(bloodTrail);

  // H-002 배출장 위 백골 — 흰 두개골: 어두운 배경과의 실루엣 대비 (배치 3원칙)
  const skull = new THREE.Group();
  const boneMat = new THREE.MeshStandardMaterial({ color: 0xc9c2b0, roughness: 0.85 });
  const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), boneMat);
  cranium.position.y = 0.14;
  cranium.scale.set(1, 0.92, 1.08);
  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.09, 0.16), boneMat);
  jaw.position.set(0, -0.02, 0.04);
  const socketMat = new THREE.MeshStandardMaterial({ color: 0x0a0c12, roughness: 1 });
  for (const sx of [-0.062, 0.062]) {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 6), socketMat);
    socket.position.set(sx, 0.15, 0.145);
    skull.add(socket);
  }
  skull.add(cranium, jaw);
  skull.position.set(-HW + 0.8, 1.06, -L * 0.19); // 배출장 상단 박스(y0.85) 위
  skull.rotation.y = Math.PI / 6; // 길 쪽을 살짝 향한다 — 눈구멍이 보이는 각
  skull.visible = false;
  t1.add(skull);

  // H-003 창문의 얼굴 — 붉은 창(구 A-015) 자리. 내려다보는 창백한 얼굴
  const faceTex = faceTexture();
  const facePlane = new THREE.Mesh(
    new THREE.PlaneGeometry(1.0, 1.28),
    new THREE.MeshStandardMaterial({
      map: faceTex, emissiveMap: faceTex, emissive: 0x4a463c, // 유리 너머 어렴풋한 자체 발광 (식별 보장)
    }),
  );
  facePlane.position.set(HW - 0.03, 3.4, -L * 0.68);
  facePlane.rotation.y = -Math.PI / 2;
  facePlane.visible = false;
  t1.add(facePlane);

  // 재활용 배출장 — 우산 이상(A-001)의 '정상 상태' 학습 대상 (fear-cognition §1)
  box(1.6, 0.5, 1.0, 0x2a3142, -HW + 1.0, 0.25, -L * 0.2, t1);
  box(0.7, 0.35, 0.6, 0x252c3d, -HW + 0.8, 0.85, -L * 0.19, t1);

  // 우산 (배출장 옆 — A-001, 기본 숨김)
  const umbrella = new THREE.Group();
  const stick = box(0.06, 1.3, 0.06, 0x555b70, 0, 0.65, 0, umbrella);
  stick.rotation.z = 0.5;
  const cap = new THREE.Mesh(
    new THREE.ConeGeometry(0.55, 0.5, 8),
    new THREE.MeshStandardMaterial({ color: 0x6b1520, roughness: 0.8 }),
  );
  cap.position.set(-0.35, 1.35, 0);
  cap.rotation.z = 0.5;
  umbrella.add(cap);
  umbrella.position.set(-HW + 1.8, 0, -L * 0.24);
  umbrella.visible = false;
  t1.add(umbrella);

  // 빌라 계단 센서등 (A-002 — 정상: 꺼짐 / 이상: 계속 켜짐)
  const sensor = box(0.45, 0.22, 0.16, 0x1c2230, -HW + 0.12, 1.7, -L * 0.3, t1);
  const sensorMat = sensor.material as THREE.MeshStandardMaterial;
  const sensorLight = new THREE.PointLight(0xe8d9b0, 0, 6, 1.8);
  sensorLight.position.set(-HW + 0.5, 1.7, -L * 0.3);
  t1.add(sensorLight);

  // 창문 (오른쪽 벽 위 — A-015 붉은 불)
  const windowMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1.1, 1.4),
    new THREE.MeshStandardMaterial({ color: 0x11141f, emissive: 0x000000 }),
  );
  windowMesh.position.set(HW - 0.02, 3.4, -L * 0.68);
  windowMesh.rotation.y = -Math.PI / 2;
  t1.add(windowMesh);
  const windowMat = windowMesh.material as THREE.MeshStandardMaterial;

  // 과외 전단지 (오른쪽 벽, 가로등 사거리 안 — A-003: 전화번호 11→10자리)
  // 정상 상태가 상시 노출되어야 위반이 성립 (fear-cognition §1) — 밤 1부터 걸려 있다
  const flyerTex: [THREE.CanvasTexture, THREE.CanvasTexture] = [
    flyerTexture('010-4172-8956'),
    flyerTexture('010-417-8956'),
  ];
  const flyerMat = new THREE.MeshStandardMaterial({ map: flyerTex[0], roughness: 0.9 });
  const flyer = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.75), flyerMat);
  flyer.position.set(HW - 0.01, 1.55, -L * 0.4);
  flyer.rotation.y = -Math.PI / 2;
  t1.add(flyer);

  // 구조 차별화 — 전봇대·전선·실외기·빌라 철문 (원룸 골목의 하늘 실루엣은 전선이 만든다)
  box(0.24, 6.8, 0.24, 0x2c3244, HW - 0.35, 3.4, -L * 0.15, t1);
  box(0.24, 6.8, 0.24, 0x2c3244, -HW + 0.35, 3.4, -L * 0.72, t1);
  box(0.035, 0.035, L * 0.85, 0x11141d, HW - 0.35, 6.3, -L * 0.5, t1); // 골목을 따라가는 전선
  const wireDx = (HW - 0.35) - (-HW + 0.35);
  const wireDz = -L * 0.15 - -L * 0.72;
  const wire = box( // 전봇대 사이를 비스듬히 가로지르는 전선
    0.035, 0.035, Math.hypot(wireDx, wireDz), 0x11141d,
    0, 6.0, (-L * 0.15 + -L * 0.72) / 2, t1,
  );
  wire.rotation.y = Math.atan2(wireDx, wireDz);
  box(0.85, 0.6, 0.38, 0x2a3040, HW - 0.35, 2.5, -L * 0.58, t1);  // 실외기 (카메라 1.65 위)
  box(0.85, 0.6, 0.38, 0x262c3c, -HW + 0.35, 2.2, -L * 0.33, t1);
  box(0.12, 2.4, 1.5, 0x11151f, -HW + 0.05, 1.2, -L * 0.22, t1);  // 빌라 철문 (파인 어둠)
  box(0.2, 0.16, 1.9, 0x2c3244, -HW + 0.1, 2.5, -L * 0.22, t1);   // 문틀 상단

  // ---------- 테마 2: 상가 골목 ----------
  const t2 = new THREE.Group();

  // 24시 세탁소 (오른쪽 벽면 파사드 — A-004: 셔터 반열림 + 내부 불)
  // 벽과 평행 — 왼쪽 셔터 가게들과 같은 문법. 통로에 수직으로 꽂힌 M0 슬랩은
  // 골목을 반쯤 막은 벽처럼 보였고 눈높이라 카메라가 관통했다 (2026-07-30 맵 구조 수정)
  const laundryInterior = box(0.08, 2.0, 2.6, 0x141824, HW - 0.06, 1.25, -L * 0.39, t2);
  const laundryMat = laundryInterior.material as THREE.MeshStandardMaterial;
  const laundryShutter = box(0.12, 2.2, 2.7, 0x2b3244, HW - 0.18, 1.25, -L * 0.39, t2);
  const laundryLight = new THREE.PointLight(0xcfe0e8, 0, 8, 1.8);
  laundryLight.position.set(HW - 0.9, 1.3, -L * 0.39);
  t2.add(laundryLight);

  // H-004 셔터의 손자국들 — 세탁소 셔터 앞면. 안쪽에서 찍힌 방향 (reveal이 말해준다)
  const handprints = new THREE.Mesh(
    new THREE.PlaneGeometry(2.4, 1.7),
    new THREE.MeshStandardMaterial({ map: handprintsTexture(), transparent: true, roughness: 1 }),
  );
  handprints.position.set(HW - 0.25, 1.25, -L * 0.39); // 셔터(x=HW-0.18, 두께 0.12) 바로 앞
  handprints.rotation.y = -Math.PI / 2;
  handprints.visible = false;
  t2.add(handprints);

  // 상가 간판들 (소등 상태가 정상 — A-006: 하나가 켜짐)
  // 타깃 간판은 가로등 옆(z=-L*0.5) — 걸으며 자연 시야에 들어오는 각도 (배치 규칙 1·2)
  const storeSign = box(1.7, 0.65, 0.14, 0x1e2434, HW - 0.1, 3.2, -L * 0.5, t2);
  const storeSignMat = storeSign.material as THREE.MeshStandardMaterial;
  box(1.5, 0.6, 0.14, 0x1c2130, HW - 0.1, 3.4, -L * 0.29, t2);
  box(1.9, 0.7, 0.14, 0x20263a, HW - 0.1, 3.1, -L * 0.62, t2);

  // 부동산 유리창 시세표 (왼쪽 벽, 가로등 사거리 안 — A-005: "월세 35" → "급구")
  const realtyTex: [THREE.CanvasTexture, THREE.CanvasTexture] = [
    realtyTexture(false),
    realtyTexture(true),
  ];
  const realtyMat = new THREE.MeshStandardMaterial({ map: realtyTex[0], roughness: 0.85 });
  const realty = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.1), realtyMat);
  realty.position.set(-HW + 0.01, 1.5, -L * 0.5);
  realty.rotation.y = Math.PI / 2;
  t2.add(realty);

  // 구조 차별화 — 닫힌 셔터 가게(슬랫 실루엣)·어닝·보도 단차 (상가의 문법: 셔터는 닫혀 있다)
  // 닫힌 셔터가 '학습된 정상'을 강화할수록 세탁소 반열림(A-004)의 위반이 도드라진다
  for (const sz of [-L * 0.3, -L * 0.68]) {
    box(0.12, 2.1, 2.3, 0x2a3143, -HW + 0.1, 1.15, sz, t2);
    for (let i = 0; i < 4; i++) box(0.13, 0.05, 2.3, 0x1f2534, -HW + 0.1, 0.45 + i * 0.5, sz, t2);
    const awning = box(0.85, 0.07, 2.5, 0x232134, -HW + 0.5, 2.65, sz, t2);
    awning.rotation.z = -0.3; // 벽에서 내려오는 처마 기울기
  }
  box(0.55, 0.14, L * 0.92, 0x222736, -HW + 0.28, 0.07, -L / 2, t2); // 보도 단차
  box(0.55, 0.14, L * 0.92, 0x222736, HW - 0.28, 0.07, -L / 2, t2);

  // ---------- 테마 3: 놀이터 옆길 ----------
  const t3 = new THREE.Group();

  // 낮은 철제 펜스 (왼쪽)
  for (const fz of [-L * 0.32, -L * 0.375, -L * 0.43, -L * 0.485]) {
    box(0.07, 0.85, 1.7, 0x323a52, -HW + 0.85, 0.45, fz, t3);
  }

  // 그네 (펜스 너머 — A-007: 혼자 흔들림)
  // 프레임 x=-2.78 — 통행 한계(-2.6) 밖. -2.5일 때는 기둥을 몸으로 통과할 수 있었다
  box(0.1, 2.3, 0.1, 0x3a4157, -HW + 0.22, 1.15, -L * 0.365, t3);
  box(0.1, 2.3, 0.1, 0x3a4157, -HW + 0.22, 1.15, -L * 0.42, t3);
  box(0.08, 0.08, 2.2, 0x3a4157, -HW + 0.22, 2.3, -L * 0.393, t3);
  const swingPivot = new THREE.Group();
  swingPivot.position.set(-HW + 0.22, 2.26, -L * 0.393);
  box(0.03, 1.5, 0.03, 0x555b70, 0, -0.75, -0.22, swingPivot);
  box(0.03, 1.5, 0.03, 0x555b70, 0, -0.75, 0.22, swingPivot);
  box(0.14, 0.06, 0.55, 0x555b70, 0, -1.5, 0, swingPivot);
  t3.add(swingPivot);

  // 공 (A-009 — 정상: 펜스 안쪽 / 이상: 길 한가운데)
  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(0.28, 12, 10),
    new THREE.MeshStandardMaterial({ color: 0x6d7488, roughness: 0.85 }),
  );
  ball.position.copy(BALL_HOME);
  t3.add(ball);

  // H-005 그네에 앉은 형체 — 흔들리지 않는다. 그게 더 이상하다
  const swingFigure = new THREE.Group();
  const sfBody = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.62, 0.26), darkFigureMat);
  sfBody.position.y = 1.12;
  const sfHead = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), darkFigureMat);
  sfHead.position.set(0.05, 1.56, 0); // 고개를 약간 떨군 실루엣
  const sfLegs = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.52, 0.16), darkFigureMat);
  sfLegs.position.set(0.2, 0.56, 0);
  sfLegs.rotation.z = 0.25;
  swingFigure.add(sfBody, sfHead, sfLegs);
  swingFigure.position.set(-HW + 0.22, 0, -L * 0.393); // 그네 좌판 위
  swingFigure.visible = false;
  t3.add(swingFigure);

  // H-006 펜스 뒤 어둠의 눈 — 펜스와 왼쪽 벽 사이 어두운 띠, 눈높이.
  // 스스로 어렴풋이 빛난다 (배치 3원칙: 자체 발광이 가장 확실)
  const eyes = new THREE.Group();
  const eyeMat = new THREE.MeshStandardMaterial({
    color: 0x0b0e16, emissive: 0x8f96ac, emissiveIntensity: 0.9,
  });
  for (const exOff of [-0.09, 0.09]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), eyeMat);
    eye.position.x = exOff;
    eyes.add(eye);
  }
  eyes.position.set(-HW + 0.38, 1.42, -L * 0.55);
  eyes.visible = false;
  t3.add(eyes);

  // 구조 차별화 — 담 너머 수목 실루엣·펜스 연장·주택 철문 (이 구간만 하늘 쪽이 술렁인다)
  for (const [tz, s] of [[-L * 0.25, 1.6], [-L * 0.42, 2.0], [-L * 0.58, 1.5]] as Array<[number, number]>) {
    const tree = new THREE.Mesh(
      new THREE.SphereGeometry(1, 7, 5),
      new THREE.MeshStandardMaterial({ color: 0x131a28, roughness: 1 }),
    );
    tree.scale.set(s, s * 0.75, s);
    tree.position.set(-HW - 1.4, WALL_H + 0.6, tz);
    t3.add(tree);
  }
  for (const fz of [-L * 0.21, -L * 0.265, -L * 0.54, -L * 0.595]) {
    box(0.07, 0.85, 1.7, 0x323a52, -HW + 0.85, 0.45, fz, t3); // 펜스 연장
  }
  box(0.05, 0.06, L * 0.42, 0x3a4460, -HW + 0.85, 0.88, -L * 0.4, t3); // 펜스 상부 레일
  box(0.1, 2.2, 1.3, 0x171c2a, HW - 0.05, 1.1, -L * 0.7, t3); // 주택 철문

  // ---------- 테마 4: 정류장 앞 ----------
  const t4 = new THREE.Group();

  // 정류장 부스 (오른쪽 벽을 등짐 — 등판은 벽과 평행, 기둥은 통행 한계 밖)
  // 도로를 가로막는 방향으로 90° 돌아가 있던 M0 형태 교정 (2026-07-30 맵 구조 수정)
  box(0.08, 2.2, 2.2, 0x252c3d, HW - 0.06, 1.35, -L * 0.32, t4);   // 등판 (벽면)
  box(0.9, 0.08, 2.4, 0x2a3142, HW - 0.5, 2.5, -L * 0.32, t4);     // 지붕 (머리 위)
  box(0.08, 2.5, 0.08, 0x2a3142, HW - 0.34, 1.25, -L * 0.29, t4);  // 기둥 (x≥2.62 — 통행 한계 밖)
  box(0.08, 2.5, 0.08, 0x2a3142, HW - 0.34, 1.25, -L * 0.35, t4);
  box(0.35, 0.08, 1.8, 0x2a3142, HW - 0.32, 0.55, -L * 0.32, t4);  // 벤치 (무릎 아래)

  // H-007 정류장의 앉은 형체 — 버스는 새벽에 안 다닌다
  const busFigure = new THREE.Group();
  const bfBody = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.6, 0.26), darkFigureMat);
  bfBody.position.y = 0.95;
  const bfHead = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), darkFigureMat);
  bfHead.position.set(-0.06, 1.38, 0); // 고개를 떨구고 있다
  const bfLegs = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.5, 0.18), darkFigureMat);
  bfLegs.position.set(-0.2, 0.35, 0);
  busFigure.add(bfBody, bfHead, bfLegs);
  busFigure.position.set(HW - 0.42, 0, -L * 0.32); // 벤치(y0.55) 위
  busFigure.visible = false;
  t4.add(busFigure);

  // 보행신호등 2기 — **건널목 양 끝에 하나씩, 서로 반대를 본다** (v0.11.8: 현실 배치 교정.
  // 이전에는 둘 다 횡단보도 앞쪽에 나란히 서서 같은 쪽을 보고 있었다).
  //   건너편 것(x +, 등화가 +z를 향함) = 이쪽에서 건너는 사람이 읽는 신호
  //   이쪽 것(x −, 등화가 −z를 향함) = 반대편에서 오는 사람의 신호 — 우리에겐 뒤통수만 보인다
  const trafficRed: THREE.MeshStandardMaterial[] = [];
  const trafficGreen: THREE.MeshStandardMaterial[] = [];
  const trafficHeads: THREE.Mesh[] = [];
  const NEAR_Z = -L * 0.55;                  // 정지선 앞 (플레이어 쪽 인도)
  const FAR_Z = ROAD_Z - ROAD_HALF - 0.9;    // 길 건너 인도
  for (const [tx, tz, facing] of [
    [HW - 0.4, FAR_Z, 1],     // 건너편 — 플레이어를 향한다
    [-(HW - 0.4), NEAR_Z, -1], // 이쪽 — 반대 방향을 향한다
  ] as Array<[number, number, number]>) {
    box(0.12, 3.4, 0.12, 0x3a4157, tx, 1.7, tz, t4);
    trafficHeads.push(box(0.3, 0.66, 0.24, 0x1c2230, tx, 3.55, tz, t4));
    const red = box(0.16, 0.16, 0.06, 0x351114, tx, 3.7, tz + 0.14 * facing, t4);
    const green = box(0.16, 0.16, 0.06, 0x11281a, tx, 3.42, tz + 0.14 * facing, t4);
    trafficRed.push(red.material as THREE.MeshStandardMaterial);
    trafficGreen.push(green.material as THREE.MeshStandardMaterial);
  }

  // 교차로 — 벽을 뚫었으니 건너편에 실제 길이 있어야 한다 (v0.11.7).
  // 차가 지나는 통로이자, 구멍 너머로 허공이 보이지 않게 하는 마감
  box(38, 0.2, ROAD_HALF * 2, 0x1c202c, 0, -0.1, ROAD_Z, t4);            // 교차로 노면
  for (const s of [-1, 1]) {
    box(15, WALL_H, 1, 0x232838, s * 11, WALL_H / 2, ROAD_Z - ROAD_HALF - 0.5, t4); // 건너편 벽
    box(15, WALL_H, 1, 0x20263a, s * 11, WALL_H / 2, ROAD_Z + ROAD_HALF + 0.5, t4);
    box(1, WALL_H, ROAD_HALF * 2 + 2, 0x262c3e, s * 18.5, WALL_H / 2, ROAD_Z, t4);  // 길 끝 건물
  }

  // 구조 차별화 — 횡단보도·정지선·볼라드·연석 (다섯 구간 중 여기만 '차도'다)
  for (let i = 0; i < 4; i++) {
    box(HW * 2 - 1.2, 0.03, 0.6, 0x8890a2, 0, 0.02, -L * 0.62 - i * 1.15, t4);
  }
  box(HW * 2 - 1.2, 0.03, 0.35, 0x8890a2, 0, 0.02, -L * 0.585, t4); // 정지선
  box(0.16, 0.7, 0.16, 0x39415a, HW - 0.7, 0.35, -L * 0.24, t4);    // 볼라드
  box(0.16, 0.7, 0.16, 0x39415a, HW - 0.7, 0.35, -L * 0.4, t4);
  box(0.5, 0.14, L * 0.9, 0x232838, HW - 0.25, 0.07, -L / 2, t4);   // 정류장 쪽 연석

  // 개업 현수막 — 구간 끝(먹자골목 입구 직전) **왼쪽 벽면에 붙여 걸었다** (v0.11.13:
  // 골목을 가로지르던 것을 벽으로. 통행 위를 덮지 않는다). 벽과 평행이라 정면에서는
  // 비스듬히 보이고, 다가갈수록 펴진다 — 자막(z −28.2)이 읽히는 시점은 그대로
  const bannerMat = new THREE.MeshStandardMaterial({ map: bannerTexture(), roughness: 0.95 });
  const banner = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 1.1), bannerMat);
  banner.position.set(-HW + 0.06, 3.3, -L * 0.86);
  banner.rotation.y = Math.PI / 2;   // 법선을 +x로 — 벽면에 밀착
  t4.add(banner);

  // ---------- 테마 5: 먹자골목 입구 ----------
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
  const pool = new THREE.Mesh(new THREE.CircleGeometry(0.34, 16), bloodMat);
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(0.7, 0.015, -L * 0.52);
  const streak = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 6.2), bloodMat);
  streak.rotation.x = -Math.PI / 2;
  streak.rotation.z = 0.42; // 시작점 → 왼쪽 벽 방향
  streak.position.set(-0.55, 0.015, -L * 0.595);
  dragMark.add(pool, streak);
  dragMark.visible = false;
  t5.add(dragMark);

  // 구조 차별화 — 현수막·어닝·돌출 간판·쌓인 상자 (먹자골목의 밀도, 단 전부 소등)
  box(HW * 2 + 0.6, 0.55, 0.05, 0x1f2030, 0, 4.4, -L * 0.12, t5); // 입구 현수막
  const aw1 = box(0.8, 0.07, 2.2, 0x2b2334, HW - 0.5, 2.6, -L * 0.36, t5);
  aw1.rotation.z = 0.3;
  const aw2 = box(0.8, 0.07, 2.0, 0x252134, -HW + 0.5, 2.55, -L * 0.68, t5);
  aw2.rotation.z = -0.3;
  box(0.5, 1.7, 0.16, 0x232a3e, HW - 0.45, 3.6, -L * 0.5, t5);  // 돌출 간판
  box(0.5, 1.7, 0.16, 0x1f2536, -HW + 0.45, 3.4, -L * 0.3, t5);
  box(0.55, 0.4, 0.55, 0x262c3e, HW - 0.6, 0.2, -L * 0.42, t5); // 쌓인 맥주 상자
  box(0.5, 0.38, 0.5, 0x232838, HW - 0.62, 0.59, -L * 0.43, t5);
  box(0.45, 0.45, 0.45, 0x2a3044, -HW + 0.7, 0.22, -L * 0.7, t5);

  const themes = [t1, t2, t3, t4, t5];
  // 차도 구멍 메우기 — 테마 4(교차로)만 열어 둔다 (v0.11.7)
  themes.forEach((t, i) => {
    if (i === 3) return;
    box(1, WALL_H, ROAD_HALF * 2, 0x232838, HW + 0.5, WALL_H / 2, ROAD_Z, t);
    box(1, WALL_H, ROAD_HALF * 2, 0x20263a, -HW - 0.5, WALL_H / 2, ROAD_Z, t);
  });
  for (const t of themes) {
    t.visible = false;
    group.add(t);
  }

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

  // 지적 히트 대상 — effect마다 "짚을 수 있는 사물". 새 effect 추가 시 여기도 강제된다 (Record)
  const hit: Record<AnomalyEffect, THREE.Object3D[]> = {
    umbrella: [umbrella],
    sensor_on: [sensor],
    window_red: [windowMesh],
    flyer_digits: [flyer],
    laundry_open: [laundryShutter, laundryInterior],
    sign_lit: [storeSign],
    realty_urgent: [realty],
    swing: [swingPivot],
    lamp_flicker: [lampPole],
    ball_out: [ball],
    traffic_red: trafficHeads,
    sign_turn: [sign],
    shop_typo: [shopSign],
    figure: [figure],
    blood_trail: [bloodTrail],
    skull: [skull],
    face_window: [facePlane],
    handprints: [handprints],
    swing_figure: [swingFigure],
    eyes: [eyes],
    bus_figure: [busFigure],
    drag_mark: [dragMark],
  };

  return {
    group, themes, scene, moon, tunnel, backTunnel,
    tunnelLight, backTunnelLight, car, carLight,
    ambient, foldMark, lampLight, shopGlow, shopSign, shopSignMat,
    umbrella, sensorMat, sensorLight, windowMat, flyerMat, flyerTex,
    laundryShutter, laundryMat, laundryLight, storeSignMat, realtyMat, realtyTex,
    swingPivot, ball, trafficRed, trafficGreen, sign, shopTex, figure, hit,
    bloodTrail, skull, facePlane, handprints, swingFigure, eyes, busFigure, dragMark,
  };
}

/** 현재 구간(1~5)의 테마만 표시 */
export function setSegmentTheme(refs: SegmentRefs, segment: number) {
  refs.themes.forEach((t, i) => (t.visible = i === segment - 1));
}

// ---------- 깊이 시각화 — 꺼져가는 빛 ----------
// 깊이는 숫자로 표시하지 않는다: 가로등 밝기가 다이제틱 게이지다 (game-design-theory §9 위반 2).
// 스텝 사다리 — 트윈 없이 구간 전환 시 적용 ("이미 그렇게 있어야 한다", visual-polish §7)
const LAMP_LADDER = [26, 20, 14, 9, 5.5, 3]; // index = min(depth, 5). depthLimit(6) 직전 = 거의 어둠
// 2026-08-02 상향: 바닥을 올리되 단차(감광 체감)는 유지 — 깊이는 여전히 가로등이 게이지다

/** 깊이에 따른 광량 적용. rollSegment마다 applyAnomaly보다 먼저 호출 */
export function applyDepth(refs: SegmentRefs, depth: number) {
  if (refs.group.userData.morning) return; // 첫날 아침 — 조명은 setMorning이 관리
  const base = LAMP_LADDER[Math.min(depth, LAMP_LADDER.length - 1)];
  refs.group.userData.lampBase = base;
  refs.lampLight.intensity = base;
  refs.ambient.intensity = Math.max(1.1, 2.2 - depth * 0.18);
  refs.group.userData.ambientBase = refs.ambient.intensity; // 터널 어둠이 곱해 쓸 기준값
}

// ---------- 아침/밤 전환 — 첫날 아침 튜토리얼 (v0.10.0: 1일차 아침 = 학습 스테이지) ----------
// 밤 값은 createWorld 초기값과 같아야 한다 (귀갓길 전환 시 원복)
export function setMorning(refs: SegmentRefs, on: boolean) {
  refs.group.userData.morning = on;
  const sky = on ? 0x9fb4cf : 0x0a0e1a;
  (refs.scene.background as THREE.Color).setHex(sky);
  const fog = refs.scene.fog as THREE.FogExp2;
  fog.color.setHex(sky);
  fog.density = on ? 0.008 : 0.044;
  refs.ambient.color.setHex(on ? 0xdde3ec : 0x39415e);
  refs.ambient.intensity = on ? 5.6 : 2.2; // 아침 — 어두운 재질(벽 0x23…)도 또렷이 보이는 수준
  refs.group.userData.ambientBase = refs.ambient.intensity; // 터널 어둠이 곱해 쓸 기준값
  refs.moon.color.setHex(on ? 0xfff3da : 0x8090c0); // 아침 = 해
  refs.moon.intensity = on ? 3.6 : 0.75;
  refs.lampLight.intensity = on ? 0 : LAMP_LADDER[0]; // 아침엔 가로등 소등
}


/** 접힘 반복 구간 여부 — 바닥 분필 자국 표시 */
/** 터널 어둠 — **화면 페이드가 아니라 안개를 검게 올린다** (v0.11.15).
 *  세계가 어두워지는 것이라 UI 컷이 아니라 '다리 밑을 지나는 동안'으로 읽힌다.
 *  dark 0(골목) → 1(터널 한가운데, 사실상 암흑). 구간 전환은 dark=1 지점에서 일어난다 */
const FOG_NIGHT = 0x0a0e1a;
const FOG_DAY = 0x9fb4cf;
export function setTunnelDark(refs: SegmentRefs, dark: number, baseDensity: number) {
  const fog = refs.scene.fog as THREE.FogExp2;
  const d = Math.max(0, Math.min(1, dark));
  // 옹벽이 1.5m 거리라 안개가 아주 짙어야 실제로 캄캄해진다 (density 1.4 → 약 99% 차폐)
  fog.density = baseDensity + d * d * 1.4;
  const sky = refs.group.userData.morning ? FOG_DAY : FOG_NIGHT;
  fog.color.setHex(sky).multiplyScalar(1 - d);            // 안개색 자체가 검정으로
  (refs.scene.background as THREE.Color).setHex(sky).multiplyScalar(1 - d);
  refs.tunnelLight.intensity = 3.2 * (1 - d);             // 터널 등도 함께 잦아든다
  refs.backTunnelLight.intensity = 3.2 * (1 - d);
  const ab = (refs.group.userData.ambientBase as number) ?? 2.2;
  refs.ambient.intensity = ab * (1 - d * 0.92);
}

export function setFoldMark(refs: SegmentRefs, show: boolean) {
  refs.foldMark.visible = show;
}

// ---------- 이상현상 핸들러 레지스트리 ----------
// effect마다 reset(정상 복귀)과 apply(이상 적용)를 한 곳에 붙여 둔다.
// Record<AnomalyEffect, …>라서 data.ts에 effect를 추가하면 여기 항목이 없을 때
// 컴파일 에러 — 리셋 누락(이상 상태가 다음 구간으로 새는 것)이 타입으로 막힌다.
interface EffectHandler {
  /** 정상 상태 — apply(와 updateWorld)가 만지는 모든 타깃을 되돌려야 한다 */
  reset(refs: SegmentRefs): void;
  /** 이상 상태. 시간성 연출(updateWorld가 매 프레임 처리)은 생략 */
  apply?(refs: SegmentRefs): void;
}

const EFFECTS: Record<AnomalyEffect, EffectHandler> = {
  umbrella: {
    reset: (r) => { r.umbrella.visible = false; },
    apply: (r) => { r.umbrella.visible = true; },
  },
  sensor_on: {
    reset: (r) => { r.sensorMat.emissive.setHex(0x000000); r.sensorLight.intensity = 0; },
    apply: (r) => { r.sensorMat.emissive.setHex(0xcfc2a4); r.sensorLight.intensity = 4; },
  },
  window_red: {
    reset: (r) => { r.windowMat.emissive.setHex(0x000000); },
    apply: (r) => { r.windowMat.emissive.setHex(0x7a1010); },
  },
  laundry_open: {
    reset: (r) => {
      r.laundryShutter.position.y = 1.25;
      r.laundryShutter.scale.y = 1;
      r.laundryMat.emissive.setHex(0x000000);
      r.laundryLight.intensity = 0;
    },
    apply: (r) => {
      r.laundryShutter.position.y = 2.0; // 반열림 — 아래로 내부가 드러난다
      r.laundryShutter.scale.y = 0.42;
      r.laundryMat.emissive.setHex(0x77878f);
      r.laundryLight.intensity = 6;
    },
  },
  sign_lit: {
    reset: (r) => { r.storeSignMat.emissive.setHex(0x000000); },
    apply: (r) => { r.storeSignMat.emissive.setHex(0x6e1414); }, // 저채도 적 — 이상 시그널 전용색
  },
  swing: {
    reset: (r) => { r.swingPivot.rotation.x = 0; }, // 흔들림 자체는 updateWorld
  },
  lamp_flicker: {
    // 깜빡임 자체는 updateWorld. 기준 밝기는 깊이 사다리를 따른다 (applyDepth가 먼저 실행)
    reset: (r) => { r.lampLight.intensity = (r.group.userData.lampBase as number) ?? 26; },
  },
  traffic_red: {
    reset: () => {}, // 신호등 등화는 테마 4 표시 중 updateWorld가 매 프레임 재계산
  },
  ball_out: {
    reset: (r) => { r.ball.position.copy(BALL_HOME); },
    apply: (r) => { r.ball.position.copy(BALL_OUT); },
  },
  sign_turn: {
    reset: (r) => { r.sign.rotation.y = SIGN_REST_Y; },
    apply: (r) => { r.sign.rotation.y = SIGN_TURNED_Y; },
  },
  flyer_digits: {
    reset: (r) => { r.flyerMat.map = r.flyerTex[0]; },
    apply: (r) => { r.flyerMat.map = r.flyerTex[1]; },
  },
  realty_urgent: {
    reset: (r) => { r.realtyMat.map = r.realtyTex[0]; },
    apply: (r) => { r.realtyMat.map = r.realtyTex[1]; },
  },
  shop_typo: {
    reset: (r) => { r.shopSignMat.map = r.shopTex[0]; r.shopSignMat.emissiveMap = r.shopTex[0]; },
    apply: (r) => { r.shopSignMat.map = r.shopTex[1]; r.shopSignMat.emissiveMap = r.shopTex[1]; },
  },
  figure: {
    reset: (r) => { r.figure.visible = false; },
    apply: (r) => {
      // 스폰 앵커 — main이 userData.figureAnchor에 고른 지점 (랜덤은 선택 로직의 몫)
      const [ax, az] = SPAWN_ANCHORS[(r.group.userData.figureAnchor as number) ?? 0];
      r.figure.position.set(ax, 0, az);
      r.figure.rotation.y = Math.random() < 0.5 ? Math.PI : Math.PI * 0.85; // 등을 돌리고
      r.figure.visible = true;
    },
  },
  // ---- 환각 (2026-08-02 컨셉 전환) — 전부 "있어서는 안 되는 것"의 출현/소거 토글.
  // 직시(확인)하면 main.ts가 재적용으로 지운다 — 환각은 똑바로 보면 걷힌다
  blood_trail: {
    reset: (r) => { r.bloodTrail.visible = false; },
    apply: (r) => { r.bloodTrail.visible = true; },
  },
  skull: {
    reset: (r) => { r.skull.visible = false; },
    apply: (r) => { r.skull.visible = true; },
  },
  face_window: {
    reset: (r) => { r.facePlane.visible = false; },
    apply: (r) => { r.facePlane.visible = true; },
  },
  handprints: {
    reset: (r) => { r.handprints.visible = false; },
    apply: (r) => { r.handprints.visible = true; },
  },
  swing_figure: {
    reset: (r) => { r.swingFigure.visible = false; },
    apply: (r) => { r.swingFigure.visible = true; },
  },
  eyes: {
    reset: (r) => { r.eyes.visible = false; },
    apply: (r) => { r.eyes.visible = true; },
  },
  bus_figure: {
    reset: (r) => { r.busFigure.visible = false; },
    apply: (r) => { r.busFigure.visible = true; },
  },
  drag_mark: {
    reset: (r) => { r.dragMark.visible = false; },
    apply: (r) => { r.dragMark.visible = true; },
  },
};

/** 구간 상태 초기화 후 이상현상 적용 (0~복수). 등장 트윈 없음 — "이미 그렇게 있어야 한다" (visual-polish §7) */
export function applyAnomalies(refs: SegmentRefs, effects: AnomalyEffect[]) {
  for (const h of Object.values(EFFECTS)) h.reset(refs); // 전 타깃 정상 복귀
  refs.group.userData.effects = effects;
  for (const e of effects) EFFECTS[e].apply?.(refs);
}

/** 마지막 구간 여부에 따라 FF-1204 간판/불빛 연출.
 *  showSign=false — 밤 1 귀갓길: 목적지가 집이라 가게 간판 없이 개구부 불빛만 (v0.10.0) */
export function setShopNear(refs: SegmentRefs, near: boolean, showSign = true) {
  const morning = !!refs.group.userData.morning;
  // 마지막 구간에서는 터널이 아니라 목적지(가게·집)가 나와야 한다 (v0.11.14)
  refs.tunnel.visible = !near;
  refs.shopGlow.intensity = morning ? 0 : near ? 30 : 4;
  // 간판은 마지막 구간에만 존재 — 다른 구간 끝에서 글자가 어렴풋이 보이면 혼란 (명확성)
  refs.shopSign.visible = near && showSign;
  // emissiveMap(글자 텍스처) × emissive 색 — 점등 시 글자만 발광한다 (아침엔 소등)
  refs.shopSignMat.emissive.setHex(near && showSign && !morning ? 0xffffff : 0x000000);
}

const TRAFFIC_RED_ON = 0x8a1616;
const TRAFFIC_GREEN_ON = 0x2f7a4a;

/** 매 프레임 — 시간성 연출 (가로등 깜빡임 · 그네 · 신호등). 스텝/주기 방식, 트윈 금지 */
export function updateWorld(refs: SegmentRefs, t: number) {
  const effects = (refs.group.userData.effects as AnomalyEffect[] | undefined) ?? [];

  // A-008 가로등 — 이상 시 두 번씩 깜빡임 (스텝 — 형광등은 튄다, visual-polish §7)
  if (effects.includes('lamp_flicker')) {
    const base = (refs.group.userData.lampBase as number) ?? 26;
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
