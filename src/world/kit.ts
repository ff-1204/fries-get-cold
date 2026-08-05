// 그레이박스 제작 키트 — 박스 프리미티브 + 캔버스 텍스처.
// 지오메트리를 만드는 도구만 둔다 (무엇을 만드는지는 prefab.ts·themes/).

import * as THREE from 'three';

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
export function flyerTexture(phone: string): THREE.CanvasTexture {
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
export function realtyTexture(urgent: boolean): THREE.CanvasTexture {
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
export function faceTexture(): THREE.CanvasTexture {
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
export function handprintsTexture(): THREE.CanvasTexture {
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
export function bannerTexture(): THREE.CanvasTexture {
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

/**
 * 가게 간판 — `\n`으로 여러 줄을 넣을 수 있다.
 * 줄 수에 맞춰 크기를 잡고 가장 긴 줄이 470px를 넘으면 한 번 더 줄인다.
 */
export function shopSignTexture(text: string): THREE.CanvasTexture {
  return canvasTex(512, 144, (c) => {
    c.fillStyle = '#140d05';
    c.fillRect(0, 0, 512, 144);
    c.textAlign = 'center';
    c.fillStyle = '#ffd9a0'; // 점등 시 emissiveMap으로 발광 — 웜은 목표(가게) 전용색
    const lines = text.split('\n');
    let size = lines.length === 1 ? 60 : 46;
    c.font = `bold ${size}px ${KR_FONT}`;
    const widest = Math.max(...lines.map((l) => c.measureText(l).width));
    if (widest > 470) {
      size = Math.floor((size * 470) / widest);
      c.font = `bold ${size}px ${KR_FONT}`;
    }
    const lh = size * 1.12;
    const top = 72 - ((lines.length - 1) * lh) / 2;
    lines.forEach((l, i) => c.fillText(l, 256, top + i * lh + size * 0.4));
  });
}

/**
 * 문 앞 영업시간 안내.
 * ⭐ **밤 1 에필로그("새로 생긴 가게가, 왜 24시간을 하지")의 근거가 이것이다.**
 * 예전에는 간판이 "FF-1204 24시"라고 말해 그 역할을 했는데, 간판 문구가 바뀌면서
 * 단서가 사라졌다 — 설명 대신 **가게에 실제로 붙어 있는 안내문**으로 옮겼다.
 * 대낮에도 이 안내가 걸려 있는 것이 첫 단서다 (무설명 학습).
 */
export function hoursTexture(): THREE.CanvasTexture {
  return canvasTex(512, 256, (c) => {
    c.fillStyle = '#140d05';
    c.fillRect(0, 0, 512, 256);
    c.strokeStyle = '#3a2a12';
    c.lineWidth = 6;
    c.strokeRect(8, 8, 496, 240);
    c.textAlign = 'center';
    c.fillStyle = '#9a8a6a';                 // 제목은 한 단 낮춰 — 눈이 숫자로 먼저 간다
    c.font = `34px ${KR_FONT}`;
    c.fillText('영업시간', 256, 74);
    c.fillStyle = '#ffd9a0';                 // 간판·메뉴판과 같은 웜 — 이 가게의 색
    c.font = `bold 72px ${KR_FONT}`;
    c.fillText('24시간', 256, 156);
    c.fillStyle = '#9a8a6a';
    c.font = `32px ${KR_FONT}`;
    c.fillText('연중무휴', 256, 210);
  });
}

/** FF-1204 메뉴판 — 가게 안쪽 벽. 가격표가 있어야 '장사하는 집'으로 읽힌다 */
export function menuTexture(): THREE.CanvasTexture {
  return canvasTex(512, 192, (c) => {
    c.fillStyle = '#140d05';
    c.fillRect(0, 0, 512, 192);
    c.strokeStyle = '#3a2a12';
    c.lineWidth = 6;
    c.strokeRect(8, 8, 496, 176);
    c.fillStyle = '#ffd9a0';      // 간판과 같은 웜 — 이 가게의 색
    c.font = `bold 34px ${KR_FONT}`;
    c.fillText('감자튀김', 28, 54);
    c.font = `26px ${KR_FONT}`;
    const rows: Array<[string, string]> = [
      ['XXXXL', '9,900'], ['XXL', '6,900'], ['L', '4,900'],
    ];
    rows.forEach(([n, p], i) => {
      const y = 96 + i * 34;
      c.fillStyle = i === 0 ? '#ffd9a0' : '#9a8a6a'; // XXXXL만 밝게 — 현수막이 부른 그것
      c.fillText(n, 40, y);
      c.textAlign = 'right';
      c.fillText(p, 472, y);
      c.textAlign = 'left';
    });
  });
}

/** 도장판 — 가게 벽에 붙은 안내. 도장은 보상이 아니라 방문 기록이다 (story.md §2) */
export function stampBoardTexture(): THREE.CanvasTexture {
  return canvasTex(256, 320, (c) => {
    c.fillStyle = '#e8e0cc';
    c.fillRect(0, 0, 256, 320);
    c.fillStyle = '#33302a';
    c.textAlign = 'center';
    c.font = `bold 30px ${KR_FONT}`;
    c.fillText('방문 도장', 128, 58);
    c.font = `20px ${KR_FONT}`;
    c.fillText('오실 때마다', 128, 96);
    c.strokeStyle = '#5c5648';
    c.lineWidth = 3;
    for (let i = 0; i < 5; i++) {
      const x = 52 + (i % 3) * 52;
      const y = 150 + Math.floor(i / 3) * 62;
      c.beginPath();
      c.arc(x, y, 21, 0, Math.PI * 2);
      c.stroke();
    }
    c.font = `17px ${KR_FONT}`;
    c.fillText('다섯 칸', 128, 292);
  });
}

/**
 * 이 오브젝트를 만든 **소스 위치**를 `userData.src`에 붙인다 (`theme4.ts:99` 꼴).
 * 관리자 모드 조준 표시가 그대로 보여주므로 **화면에서 본 것을 그 자리에서 grep**할 수 있다.
 * 이름을 손으로 붙일 수 있는 것은 눈에 띄는 구조물뿐인데(world/index.ts), 골목을 채우는
 * 프롭 수백 개는 전부 이름이 없어 조준해도 `골목 › 테마4`까지밖에 안 나왔다.
 *
 * 스택 프레임 번호를 고정하지 않고 **kit.ts가 아닌 첫 프레임**을 찾는다 — box/boxOf 어느
 * 쪽을 거쳐도, 엔진이 프레임을 하나 더 끼워도 맞다.
 *
 * 배포 빌드에서는 스택이 번들(`index-a1b2.js`)을 가리켜 정규식이 안 맞고, 그때는
 * world/index.ts가 **경로+순번 키**로 대신 채운다. 그래서 어느 빌드에서든 키는 있다.
 * 비용은 세계 생성 때 한 번뿐이다 (프롭 수백 개 × Error 생성).
 */
function tagSrc(m: THREE.Object3D): void {
  const frames = new Error().stack?.split('\n') ?? [];
  for (const f of frames.slice(1)) {
    const at = /\/([\w.-]+\.ts)(?:\?[^:]*)?:(\d+):\d+/.exec(f);
    if (at && at[1] !== 'kit.ts') { m.userData.src = `${at[1]}:${at[2]}`; return; }
  }
}

export function box(
  w: number, h: number, d: number,
  color: number, x: number, y: number, z: number,
  parent: THREE.Object3D,
): THREE.Mesh {
  const m = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color, roughness: 0.95 }),
  );
  m.position.set(x, y, z);
  tagSrc(m);
  parent.add(m);
  return m;
}

/** 같은 재질을 여러 조각이 나눠 쓰는 박스 — 반복 디테일(이음·기둥·거더)용.
 *  `box()`는 호출마다 재질을 새로 만든다: 수십 개를 찍을 때는 이쪽을 쓴다 */
export function boxOf(
  mat: THREE.Material,
  w: number, h: number, d: number,
  x: number, y: number, z: number,
  parent: THREE.Object3D,
): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  tagSrc(m);
  parent.add(m);
  return m;
}

/** 콘크리트 한 톤 — 로우폴리 + 안개 + 포인트라이트 노선 유지 (텍스처 없음) */
export const concrete = (color: number) =>
  new THREE.MeshStandardMaterial({ color, roughness: 0.95 });

/** 테마들이 나눠 쓰는 재질 — 한 번만 만들어 넘긴다 (색이 갈라지면 시그널이 흐려진다) */
export interface SharedMats {
  /** 핏자국 공용 재질 — 저채도 적 (팔레트: 이상 시그널 전용색. 야하게 빛나지 않는다) */
  blood: THREE.MeshStandardMaterial;
  /** 사람 형태(HUM) 공용 — 얼굴 없는 검은 실루엣 */
  darkFigure: THREE.MeshStandardMaterial;
}

export function sharedMats(): SharedMats {
  return {
    blood: new THREE.MeshStandardMaterial({ color: 0x571010, roughness: 1 }),
    darkFigure: new THREE.MeshStandardMaterial({ color: 0x0b0e16, roughness: 1 }),
  };
}
