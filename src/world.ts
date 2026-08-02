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
  // --- 환각 타깃 (2026-08-02 컨셉 전환 — 약 기운이 떨어질 때 보이는 것들) ---
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
    // 창백한 얼굴 — 흐릿한 경계 (환각의 문법: 또렷하면 사람, 뭉개지면 환각)
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

/** 약국 간판 — 정상 "새벽약국 24시" / 이상 "새벽약국 24시간요" (story.md §7) */
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

  // 오른쪽 벽 (빌라 담벼락) — 통짜
  box(1, WALL_H, L, 0x232838, HW + 0.5, WALL_H / 2, -L / 2, group);

  // 왼쪽 벽 — 통짜 (샛길 없음 — 출구는 끝 벽 개구부 하나뿐, 지적 문법 전환)
  box(1, WALL_H, L, 0x20263a, -HW - 0.5, WALL_H / 2, -L / 2, group);

  // 끝 벽 — 개구부(중앙)를 남기고 2조각
  const endWallW = HW - MAIN_GAP_HALF + 1;
  box(endWallW, WALL_H, 1, 0x232838, -(MAIN_GAP_HALF + endWallW / 2), WALL_H / 2, -L - 0.5, group);
  box(endWallW, WALL_H, 1, 0x232838, MAIN_GAP_HALF + endWallW / 2, WALL_H / 2, -L - 0.5, group);

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

  // 버거집 간판(개구부 위) — 마지막 구간에서만 점등. 글자는 캔버스 텍스처 (A-012 오탈자 타깃)
  const shopTex: [THREE.CanvasTexture, THREE.CanvasTexture] = [
    shopSignTexture('새벽약국 24시'),
    shopSignTexture('새벽약국 24시간요'),
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

  // H-001 바닥 핏자국 (환각) — 가로등(z=-16.2) 사거리 안, 통행부 한가운데를 가로질러
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

  // H-002 배출장 위 백골 (환각) — 흰 두개골: 어두운 배경과의 실루엣 대비 (배치 3원칙)
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

  // H-003 창문의 얼굴 (환각) — 붉은 창(구 A-015) 자리. 내려다보는 창백한 얼굴
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

  // H-004 셔터의 손자국들 (환각) — 세탁소 셔터 앞면. 안쪽에서 찍힌 방향 (reveal이 말해준다)
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

  // H-005 그네에 앉은 형체 (환각) — 흔들리지 않는다. 그게 더 이상하다
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

  // H-006 펜스 뒤 어둠의 눈 (환각) — 펜스와 왼쪽 벽 사이 어두운 띠, 눈높이.
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

  // H-007 정류장의 앉은 형체 (환각) — 버스는 새벽에 안 다닌다
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

  // 신호등 2기 (길 양쪽 — A-011: 양쪽 다 빨간불 고정 / 정상: 교대 점등)
  const trafficRed: THREE.MeshStandardMaterial[] = [];
  const trafficGreen: THREE.MeshStandardMaterial[] = [];
  const trafficHeads: THREE.Mesh[] = [];
  for (const tx of [-(HW - 0.4), HW - 0.4]) {
    box(0.12, 3.4, 0.12, 0x3a4157, tx, 1.7, -L * 0.55, t4);
    trafficHeads.push(box(0.3, 0.66, 0.24, 0x1c2230, tx, 3.55, -L * 0.55, t4));
    const red = box(0.16, 0.16, 0.06, 0x351114, tx, 3.7, -L * 0.55 + 0.14, t4);
    const green = box(0.16, 0.16, 0.06, 0x11281a, tx, 3.42, -L * 0.55 + 0.14, t4);
    trafficRed.push(red.material as THREE.MeshStandardMaterial);
    trafficGreen.push(green.material as THREE.MeshStandardMaterial);
  }

  // 구조 차별화 — 횡단보도·정지선·볼라드·연석 (다섯 구간 중 여기만 '차도'다)
  for (let i = 0; i < 4; i++) {
    box(HW * 2 - 1.2, 0.03, 0.6, 0x8890a2, 0, 0.02, -L * 0.62 - i * 1.15, t4);
  }
  box(HW * 2 - 1.2, 0.03, 0.35, 0x8890a2, 0, 0.02, -L * 0.585, t4); // 정지선
  box(0.16, 0.7, 0.16, 0x39415a, HW - 0.7, 0.35, -L * 0.24, t4);    // 볼라드
  box(0.16, 0.7, 0.16, 0x39415a, HW - 0.7, 0.35, -L * 0.4, t4);
  box(0.5, 0.14, L * 0.9, 0x232838, HW - 0.25, 0.07, -L / 2, t4);   // 정류장 쪽 연석

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

  // H-008 끌린 자국 (환각) — 길 한가운데서 시작해 왼쪽 벽 어둠으로 이어지는 긴 자국
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
  for (const t of themes) {
    t.visible = false;
    group.add(t);
  }

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
    group, themes, ambient, foldMark, lampLight, shopGlow, shopSign, shopSignMat,
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
  const base = LAMP_LADDER[Math.min(depth, LAMP_LADDER.length - 1)];
  refs.group.userData.lampBase = base;
  refs.lampLight.intensity = base;
  refs.ambient.intensity = Math.max(1.1, 2.2 - depth * 0.18);
}

/** 접힘 반복 구간 여부 — 바닥 분필 자국 표시 */
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

/** 마지막 구간 여부에 따라 버거집 간판/불빛 연출 */
export function setShopNear(refs: SegmentRefs, near: boolean) {
  refs.shopGlow.intensity = near ? 30 : 4;
  // 간판은 마지막 구간에만 존재 — 다른 구간 끝에서 글자가 어렴풋이 보이면 혼란 (명확성)
  refs.shopSign.visible = near;
  // emissiveMap(글자 텍스처) × emissive 색 — 점등 시 글자만 발광한다
  refs.shopSignMat.emissive.setHex(near ? 0xffffff : 0x000000);
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
    const phase = t % 5.6;
    const greenOn = !bothRed && phase < 3.2;
    const redOn = bothRed || phase >= 3.2;
    for (const m of refs.trafficGreen) m.emissive.setHex(greenOn ? TRAFFIC_GREEN_ON : 0x000000);
    for (const m of refs.trafficRed) m.emissive.setHex(redOn ? TRAFFIC_RED_ON : 0x000000);
  }
}
