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
    g.addColorStop(0, 'rgba(214, 209, 192, 1)');
    g.addColorStop(0.72, 'rgba(198, 192, 176, 0.95)');  // ⚠ 여기까지 불투명하게: 그라데이션이
    g.addColorStop(1, 'rgba(150, 145, 130, 0)');       //   일찍 투명해지면 사각의 평균이 씻긴다
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

/** 셔터의 손자국들 (H-004) — 검붉은 손바닥 자국. 안쪽에서 찍힌 방향.
 *
 *  ⚠⚠ **자국마다 메시로 쪼개지 말 것** (v0.11.57 실측 — 14.5 → 2.6 FAIL, 되돌렸다).
 *  벽과 나란한 데칼은 늘 비스듬히 보여, 쪼갤수록 사각이 몇 픽셀로 줄고 그 안의 투명한
 *  여백에 뒤의 셔터가 들어온다. 바닥의 흩어진 자국(핏자국 v0.11.49)과 **반대**다 —
 *  규칙은 "쪼개라"가 아니라 "사각이 대상으로 꽉 차게 하라" (anomalies.md §③) */
export function handprintsTexture(): THREE.CanvasTexture {
  return canvasTex(1024, 512, (c) => {
    // ⚠ 손이 작아 **3.7m에서야** 목표 대비가 나왔다 (실측). 크게 찍는다 —
    //   안쪽에서 찍힌 손자국이라 원래 크게 눌린 자국이 맞다
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
      c.ellipse(0, 0, 38, 50, 0, 0, Math.PI * 2); // 손바닥
      c.fill();
      for (let f = 0; f < 5; f++) {
        const a = -0.7 + f * 0.35;
        c.beginPath();
        c.ellipse(Math.sin(a) * 50, -Math.cos(a) * 64, 10, 25, a, 0, Math.PI * 2);
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

// ---------- ⭐ 표면 텍스처 — 타일링 (v0.11.52) ----------
// 여태 `kit.ts`의 텍스처는 전부 **데칼**(간판·전단지·현수막)이었고, 벽과 바닥은 민짜 색이었다.
// 그래서 노을을 아무리 잘 깔아도 빛을 받아 낼 디테일이 없어 세피아에서 멈췄다.
//
// ⭐ **텍스처는 밝기만 만들고, 색은 재질이 만든다.** 회색조 1.0 근처로만 흔들고
// `material.color`가 팔레트를 담당한다 — 그래야 밤/노을 색 전환(setDuskMaterials)이
// 텍스처와 싸우지 않는다. 텍스처에 색을 넣으면 두 개의 팔레트가 생긴다
//
// ⚠ **노멀맵을 쓰지 않는다** — 이 게임은 그림자 렌더링이 0이고 면의 법선만으로 음영을 낸다.
// 가짜 요철을 얹는 순간 로우폴리의 평평한 음영이 깨진다 (visual-polish §5 '하나의 아트 디렉션')

/** 결정적 난수 — 새로고침마다 벽의 얼룩이 바뀌면 '같은 골목'이 아니게 된다 (titleArt와 같은 규약) */
function texRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

/** **주기적** 값 노이즈 — 격자를 모듈로로 감아 이음매가 없다.
 *  일반 노이즈를 쓰면 타일 경계에 선이 생기고, 36m 벽에 그 선이 여섯 번 나타난다 */
function periodicNoise(size: number, cells: number, seed: number): Float32Array {
  const rand = texRng(seed);
  const lat = new Float32Array(cells * cells);
  for (let i = 0; i < lat.length; i++) lat[i] = rand();
  const out = new Float32Array(size * size);
  const step = size / cells;
  const smooth = (t: number) => t * t * (3 - 2 * t); // 스무스스텝 — 격자 티가 안 나게
  for (let y = 0; y < size; y++) {
    const gy = y / step, y0 = Math.floor(gy) % cells, y1 = (y0 + 1) % cells;
    const fy = smooth(gy - Math.floor(gy));
    for (let x = 0; x < size; x++) {
      const gx = x / step, x0 = Math.floor(gx) % cells, x1 = (x0 + 1) % cells;
      const fx = smooth(gx - Math.floor(gx));
      const a = lat[y0 * cells + x0] + (lat[y0 * cells + x1] - lat[y0 * cells + x0]) * fx;
      const b = lat[y1 * cells + x0] + (lat[y1 * cells + x1] - lat[y1 * cells + x0]) * fx;
      out[y * size + x] = a + (b - a) * fy;
    }
  }
  return out;
}

const TEX_SIZE = 256; // 로우폴리 + 안개에 이 이상은 보이지도 않는다 (그리고 단일 파일 빌드가 커진다)

function grayTexture(fill: (px: Float32Array, size: number) => void): THREE.CanvasTexture {
  const size = TEX_SIZE;
  const px = new Float32Array(size * size).fill(1);
  fill(px, size);
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d')!;
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < px.length; i++) {
    const v = Math.max(0, Math.min(1, px[i])) * 255;
    img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v;
    img.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** 아스팔트 — 굵은 골재 얼룩 + 잔알갱이. 바닥은 늘 비스듬히 보이므로 대비를 약하게 둔다 */
export function asphaltTexture(): THREE.CanvasTexture {
  return grayTexture((px, size) => {
    const coarse = periodicNoise(size, 8, 7311);
    const grain = periodicNoise(size, 64, 4409);
    for (let i = 0; i < px.length; i++) {
      px[i] = 1 - (coarse[i] - 0.5) * 0.15 - (grain[i] - 0.5) * 0.14;
    }
  });
}

/** 콘크리트 벽 — 물때가 **세로로** 흐른다. 세로 결이 있어야 벽이 서 있는 것으로 읽힌다 */
export function wallTexture(): THREE.CanvasTexture {
  return grayTexture((px, size) => {
    const blotch = periodicNoise(size, 6, 1187);
    const streak = periodicNoise(size, 24, 9041);
    const grain = periodicNoise(size, 48, 2273);
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const i = y * size + x;
        // 세로 얼룩 — x 방향 노이즈만 읽어 위아래로 길게 늘인다 (물때가 흘러내린 자국)
        const vertical = streak[(y % 8) * size + x];
        // ⚠ 진폭은 낮게 잡는다 (실측 교정) — 0.18/0.13으로는 **큰 검은 번짐**으로 읽혔다.
        // 로우폴리 + 평평한 음영에서는 텍스처가 조금만 세도 곧바로 '더러운 얼룩'이 된다
        px[i] = 1
          - (blotch[i] - 0.5) * 0.12
          - (vertical - 0.5) * 0.09
          - (grain[i] - 0.5) * 0.06;
      }
    }
  });
}

/** ⭐ 퇴근길 하늘 — 세로 그라데이션 (v0.11.52).
 *
 *  **평면 한 색으로는 '주황'이지 '노을'이 아니다.** 화면에서 가장 큰 밝은 면인데 가장 심심했다.
 *
 *  ⚠ 색 배치는 **실제로 보이는 띠**에 맞춰 잡는다. 골목에서 보이는 하늘은 건물 사이의
 *  좁은 사다리꼴이고, 그 방향은 고도각 20~60°다 — 구면 UV로 v 0.6~0.85 구간.
 *  천정(v=1)에 무슨 색을 두든 거의 안 보이므로, **그 띠 안에서 색이 바뀌어야** 한다.
 *
 *  ⭐ 위쪽에 식은 보랏빛을 두는 것이 따뜻함을 **깎지 않고 키운다** — 웜은 한색과 나란히
 *  놓일 때 가장 웜하게 읽힌다. 전부 주황으로 칠하면 오히려 세피아 사진이 된다 */
export function duskSkyTexture(): THREE.CanvasTexture {
  const h = 256;
  const w = 512;
  const cv = document.createElement('canvas');
  cv.width = w;
  cv.height = h;
  const ctx = cv.getContext('2d')!;
  // 캔버스 y=0 이 v=1(천정), y=h 가 v=0(발밑)
  // ⭐ **주황이 아니라 분홍이다.** 해가 막 넘어간 뒤의 골목 하늘은 호박색이 아니라
  // 연한 장밋빛·라벤더다 — 그 파스텔이 '힐링'의 색이고, 주황은 오히려 무겁게 읽힌다.
  // 채도를 전부 낮게 유지한다: 이 하늘은 화면에서 가장 넓은 면이라 조금만 진해도 압도한다
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0.00, '#8d92bd'); // 천정 — 옅은 라벤더 블루
  g.addColorStop(0.16, '#a89cc0');
  g.addColorStop(0.30, '#c9a8bd'); // 라벤더 → 장밋빛
  g.addColorStop(0.40, '#e8bcc2');
  g.addColorStop(0.47, '#f5cdc6'); // 해가 넘어간 자리 — 가장 밝은 띠 (분홍)
  g.addColorStop(0.52, '#eec4b4');
  g.addColorStop(1.00, '#b08b7a'); // 지평선 아래 — 바닥에 가려 거의 안 보인다
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  // ⭐ **골목 끝에 해를 건다.** 레퍼런스 셋의 공통점이 '소실점에 빛이 있다'였고,
  // 그중 하나는 제목부터 「집으로 가는 길」이다 — 노을을 향해 걸어 들어가는 그림.
  // 여태 내 골목의 소실점은 검은 터널뿐이었다.
  //
  // 구면 UV에서 u=0.75가 −Z(전진 방향)다: x = −r·cos(2πu)·sinθ, z = r·sin(2πu)·sinθ.
  // v=0.5가 지평선 — 해를 그 **살짝 위**에 둬서 건물 사이로 걸리게 한다.
  // ⚠ 방향광은 여전히 옆(11,6,3)에서 온다. 해와 빛의 방향이 어긋나지만, 정면에서 넣으면
  //   골목 전체가 역광 실루엣이 되어 현수막 글자가 뭉개진다 (v0.11.27 가독성 실측).
  //   **보이는 해는 그림이고, 형태를 만드는 빛은 따로 둔다** — 양식화된 조명의 정석이다
  const sunX = w * 0.75;
  // ⚠ **지평선 바로 위(v 0.525)에 뒀더니 건물이 가렸다.** 벽 7m·거리 20m면 시선에 들어오는
  //   하늘은 고도각 15° 위부터다 — 해는 그보다 높이 걸어야 지붕선 너머로 보인다 (실측)
  const sunY = h * 0.40;
  const halo = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, w * 0.34);
  halo.addColorStop(0.00, 'rgba(255, 244, 214, 0.95)'); // 해 — 흰빛에 가깝게 (눈이 부신 쪽)
  halo.addColorStop(0.06, 'rgba(255, 226, 172, 0.80)');
  halo.addColorStop(0.20, 'rgba(250, 196, 158, 0.45)'); // 빛무리
  halo.addColorStop(0.55, 'rgba(238, 180, 168, 0.16)');
  halo.addColorStop(1.00, 'rgba(230, 175, 175, 0)');
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, w, h);

  const tex = new THREE.CanvasTexture(cv);
  // u는 구를 한 바퀴 감으므로 **반복**이어야 이음매(u=0/1)가 튀지 않는다
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** 표면 텍스처를 입힌 재질. **면마다 반복 수가 달라야** 하므로 텍스처를 복제해 쓴다
 *  (BoxGeometry는 모든 면이 0~1 UV라, 50m 바닥에 repeat 1이면 한 장이 늘어난다).
 *  `userData.surface`는 노을 전환이 **이 재질은 물들여도 된다**고 알아보는 표시다 —
 *  간판·현수막 같은 데칼과 달리 텍스처가 밝기만 담당하므로 색을 갈아도 의미가 상하지 않는다 */
export function surfaceMat(
  color: number, tex: THREE.CanvasTexture, repeatX: number, repeatY: number,
): THREE.MeshStandardMaterial {
  const map = tex.clone();
  map.needsUpdate = true;
  map.repeat.set(repeatX, repeatY);
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.95, map });
  mat.userData.surface = true;
  return mat;
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
  /** 벽에 튄 자국 — 발광 없음 (벽이 받는 빛으로 대비를 낸다) */
  bloodWall: THREE.MeshStandardMaterial;
  /** 사람 형태(HUM) 공용 — 얼굴 없는 검은 실루엣 */
  darkFigure: THREE.MeshStandardMaterial;
  /** ⭐ **창백한 부분** 공용 (v0.11.57) — 형체에 딱 하나만 붙인다 (손·목덜미).
   *
   *  검은 실루엣을 어둠에 세우면 배경과 함께 휘도 0으로 붕괴한다: 형체 색(0x0b0e16)과
   *  밤하늘(0x0a0e1a)의 원래 휘도 차가 거의 없다. 그렇다고 형체를 밝히면 **정체가 사라진다.**
   *  창백한 부분 하나만 붙이는 것이 실루엣을 지키면서 대비를 얻는 유일한 길이다 —
   *  v0.11.49 실측에서 오토바이의 형체가 이 수법으로 2.0 → 49.3이 됐다.
   *  그리고 "얼굴은 안 보이는데 손은 보인다"가 더 무섭다 */
  pale: THREE.MeshStandardMaterial;
}

export function sharedMats(): SharedMats {
  return {
    // ⭐ **젖어 있다.** 예전에는 roughness 1의 마른 자국이라 어둠 속에서 아스팔트와
    // 구분이 안 됐다 — 실측 대비 0.2~1.5로, 접근 내내 화면에 사실상 없었다
    // (가림 검사는 100% '뚫림'이었다. 그 검사가 못 재는 것이 바로 이것이다).
    // 색을 밝히면 시그널색이 야해진다. 대신 **반사**를 준다: 젖은 바닥은 가로등을 되비추고,
    // 그 번들거림이 어둠 속에서 유일하게 읽히는 단서가 된다. 물리적으로도 이게 맞다
    // 바닥의 젖은 자국 — 가로등을 되비춘다.
    // ⚠ 발광 수위를 두 번 틀렸다. 0x2a0b0b는 대비 5로 부족했고, 0x5c1717은 대비 18이 나왔지만
    //   **암흑에서 순수 빨강 페인트로 보였다**(발광은 조명을 안 타므로 어두운 곳일수록 도드라진다).
    //   중간값 + 강한 젖음(거칠기 0.16)으로 간다: 빛 있는 자리에서 번들거리고,
    //   빛 없는 자리에서는 겨우 떠오르는 정도. **가로등 불빛을 가로지르도록 배치**하는 것이 짝이다
    blood: new THREE.MeshStandardMaterial({
      color: 0x6b1414, roughness: 0.16, metalness: 0.25, emissive: 0x330f0e,
    }),
    // 벽에 튄 자국 — **발광 없음.** 벽은 가로등을 받으므로 어두운 얼룩이 그대로 대비가 된다.
    // 세로 요소라 거리에 강하다: 바닥 데칼은 멀어질수록 선으로 뭉개지지만 벽 자국은 서 있다
    // ⚠⚠ **색이 다른 것과 밝기가 다른 것은 다르다** (v0.11.57 실측 교정).
    //   0x4a0f0f는 벽(0x232838)과 **휘도가 거의 같았다** — 붉은색이라 눈에는 달라 보여도
    //   가시성 지표(휘도 대비)로는 5.7뿐이었다. 색상 대비는 어둠 속에서 가장 먼저 죽는다.
    //   콘크리트에 스며든 피는 실제로 검게 마른다: **벽이 받는 가로등 빛에 대해
    //   어두운 얼룩**이 되게 낮춘다 (밝은 바닥 위의 어두운 형상 — H-019와 같은 문법)
    bloodWall: new THREE.MeshStandardMaterial({ color: 0x1d0709, roughness: 0.5 }),
    // ⭐ flatShading — 로우폴리의 각진 면을 살린다 (v0.11.59).
    // ⚠ BoxGeometry에는 무의미하다(면마다 법선이 이미 갈라져 있다). 값이 나오는 것은
    //   **구·원뿔 계열**이고, 이 재질은 형체의 머리(Sphere)가 쓴다
    darkFigure: new THREE.MeshStandardMaterial({
      color: 0x0b0e16, roughness: 1, flatShading: true,
    }),
    // ⚠ 발광은 **아주 약하게**. 세면 어두운 곳에서 스스로 빛나는 물건이 되어
    //   '사람의 살'이 아니라 '광원'으로 읽힌다 (핏자국에서 두 번 틀렸던 그 실수)
    pale: new THREE.MeshStandardMaterial({
      color: 0xb9b2a4, roughness: 0.9, emissive: 0x15140f,
    }),
  };
}
