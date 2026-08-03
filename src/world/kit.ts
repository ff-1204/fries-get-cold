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

/** 가게 간판 — 정상 "FF-1204 24시" / 이상 "FF-1204 24시간요" (story.md §7) */
export function shopSignTexture(text: string): THREE.CanvasTexture {
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
  parent.add(m);
  return m;
}

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
