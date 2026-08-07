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
/** 개업 현수막 (v0.11.61 재설계) — 다리 난간에 걸린 신장개업 배너.
 *
 *  ⚠⚠ **여기는 오래 저채도 적(`#7c1d22`)이었다 — 그건 이상현상 전용색이다.**
 *  visual-polish §3의 의미색 고정은 웜(`#ffb23e`) = 안전·목표, 저채도 적 = 어긋남이고,
 *  그 표는 "FF-1204 간판"을 **웜 쪽에** 적어 두었다. 그런데 정작 이 가게를 가리키는
 *  가장 큰 물건이 어긋남의 색을 입고 있었다 — 목표가 이상현상과 같은 색으로 말하고 있었던 것이다.
 *  ⭐ 미색 바탕 + 웜 강조로 옮긴다. 덤으로 **글자 대비가 올라간다**(어두운 글자 / 밝은 바탕).
 *
 *  ⭐ **음식점 현수막으로 읽히게 하는 것은 색이 아니라 세간(細間)이다**:
 *  ① 비닐이라 가장자리가 접혀 두 겹으로 보이고 ② 네 귀퉁이에 **그로밋(구멍)** 이 박혀 있고
 *  ③ 제품 이름이 가게 이름보다 크고 ④ 그림이 하나 있다. 넷 다 캔버스로 그린다 (에셋 0).
 *
 *  ⚠ 문구는 story.md §73이 정한 것을 지킨다 — *FF-1204 개업 · XXXXL 감자튀김*.
 *    **도장 보상은 절대 쓰지 않는다**: "도장 5개 = 무료"는 v0.11.6에 폐지됐고
 *    도장은 보상이 아니라 방문 기록이다 (story.md §71). 현수막이 약속하면 그 폐지가 무효가 된다.
 *  ⭐ 위계를 뒤집었다 — **XXXXL이 먼저**다. 이 게임의 유머 앵커는 튀김이고(story.md §35),
 *    실제 개업 현수막도 가게 이름보다 파는 것을 크게 적는다 */
export function bannerTexture(): THREE.CanvasTexture {
  const w = 1024;
  const h = 176;                            // 6.4 : 1.1 = 5.82 — 판 비율과 맞춰 글자가 눕지 않게
  return canvasTex(w, h, (c) => {
    c.fillStyle = '#f4e7cd';                // 미색 비닐 — 실제 개업 현수막의 흔한 바탕
    c.fillRect(0, 0, w, h);
    // 위아래 접힘단 — 비닐을 접어 박은 자리. 두 겹이라 조금 진하다 (평면감을 깬다)
    c.fillStyle = '#e6d4b2';
    c.fillRect(0, 0, w, 9);
    c.fillRect(0, h - 9, w, 9);
    // 웜 강조 띠 — 목표색 (visual-polish §3)
    c.fillStyle = '#ffb23e';
    c.fillRect(0, 12, w, 8);
    c.fillRect(0, h - 20, w, 8);

    // ⭐ **왼쪽 웜 블록** — 20m 밖에서는 글자가 안 읽히고 **색 덩어리만** 읽힌다 (실측).
    //   미색 바탕만으로는 콘크리트 벽과 명도가 붙어 소실점에서 눈에 걸리지 않았다 —
    //   붉은 현수막이 갖고 있던 초점을 잃은 것이다. 그 초점을 **목표색으로** 되찾는다:
    //   멀리서는 주황 덩어리(= 가게가 저기 있다), 가까이서는 글자.
    //   ⚠ 이 블록이 튀김 그림의 배경이 되므로 그림은 미색으로 뒤집어 그린다
    c.fillStyle = '#ffb23e';
    c.fillRect(20, 20, 168, h - 40);

    // ---------- 감자튀김 그림 (왼쪽 블록 안) — '음식점'을 글자 없이 말하는 부분 ----------
    // ⚠ 봉투를 붉게 칠하지 않는다 (이상 시그널색). 미색·크라프트로 웜 블록 위에 얹는다
    const fx = 104;
    const fy = h / 2 + 6;
    c.fillStyle = '#fff4dc';                                  // 튀김 — 웜 블록 위라 미색으로 뒤집는다
    for (const [dx, dh, rot] of [[-26, 58, -0.16], [-9, 70, -0.05], [8, 66, 0.06], [25, 54, 0.17]] as Array<[number, number, number]>) {
      c.save();
      c.translate(fx + dx, fy - 28);
      c.rotate(rot);
      c.fillRect(-7, -dh / 2, 14, dh);
      c.restore();
    }
    c.fillStyle = '#8a5a22';                                  // 봉투 — 웜 블록보다 진한 갈색
    c.beginPath();
    c.moveTo(fx - 40, fy - 20);
    c.lineTo(fx + 40, fy - 20);
    c.lineTo(fx + 30, fy + 40);
    c.lineTo(fx - 30, fy + 40);
    c.closePath();
    c.fill();
    c.fillStyle = '#fff4dc';                                  // 봉투의 흰 띠
    c.fillRect(fx - 34, fy - 2, 68, 9);

    // ---------- 글자 ----------
    // ⚠ 아랫줄을 키우고 진하게 했다 — 34px / `#7a5a2c`로는 12m에서 **읽히지 않았다**(실측).
    //   튜토리얼 자막이 "FF-1204. …XXXXL 감자튀김이다"라고 두 줄을 다 읽으므로(data.ts tutBeats),
    //   가게 이름도 그 거리에서 읽혀야 자막이 거짓말을 하지 않는다
    c.textAlign = 'left';
    c.fillStyle = '#3f2a14';                                  // 진한 갈색 — 미색 바탕에 최대 대비
    c.font = `bold 72px ${KR_FONT}`;
    c.fillText('XXXXL 감자튀김', 210, h / 2 - 2);
    c.font = `bold 44px ${KR_FONT}`;
    c.fillStyle = '#5a3c16';
    c.fillText('신장개업  FF-1204', 214, h / 2 + 48);

    // ---------- 그로밋 — 네 귀퉁이의 고정 구멍 ----------
    // 현수막이 '걸린 것'으로 읽히는 결정적 세부. 없으면 공중에 뜬 판이다
    for (const gx of [26, w - 26]) {
      for (const gy of [24, h - 24]) {
        c.fillStyle = '#8b8577';
        c.beginPath();
        c.arc(gx, gy, 9, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = '#4a4a48';                              // 구멍 속 — 뒤가 비친다
        c.beginPath();
        c.arc(gx, gy, 5, 0, Math.PI * 2);
        c.fill();
      }
    }
  });
}

// ---------- ⭐ 정류장 라이트박스 광고 둘 (v0.11.61) ----------
// 레퍼런스(밤 버스 정류장)에서 정류장을 정류장으로 만드는 것은 **양쪽 끝의 백라이트 광고판**이다.
// 밤 화면에서 가장 밝은 면이고, 유리·벤치보다 먼저 눈에 들어온다.
//
// ⭐ 광고 둘을 **서로 반대편에 세운다** — 걸어가며 보는 것과 돌아오며 보는 것이 다르다:
//   가게 쪽(−z)을 향한 면은 **감자튀김 광고**(가게를 미리 보여 준다),
//   집 쪽(+z)을 향한 면은 **실종 전단**. 같은 정류장이 방향에 따라 다른 말을 한다.
// ⚠ 둘 다 **규칙을 설명하지 않는다** — 이름을 외우게 하거나 단서를 풀게 하지 않는다.
//   전단은 로어(누군가 집에 못 갔다)일 뿐이고, 이 게임의 동사는 여전히 걷기 하나다.
// ⚠ 실제 인물·사건과 겹치지 않게 이름은 쓰지 않고 실루엣만 둔다. 전화번호도 넣지 않는다

/** 감자튀김 광고 — FF-1204의 라이트박스. 세로 판(0.9×1.6 = 0.5625) 비율에 맞춘다 */
export function friesAdTexture(): THREE.CanvasTexture {
  const w = 288;
  const h = 512;
  return canvasTex(w, h, (c) => {
    c.fillStyle = '#ffb23e';                 // 웜 — 목표(가게) 전용색 (visual-polish §3)
    c.fillRect(0, 0, w, h);
    c.fillStyle = '#f4e7cd';                 // 위아래 미색 여백 — 현수막과 같은 계열로 묶는다
    c.fillRect(0, 0, w, 74);
    c.fillRect(0, h - 96, w, 96);

    // 감자튀김 — 화면의 주인공. 봉투에서 삐져나온 튀김 다발
    const fx = w / 2;
    const fy = 300;
    c.fillStyle = '#fff4dc';
    for (const [dx, dh, rot] of [[-52, 150, -0.17], [-18, 182, -0.05], [18, 172, 0.06], [52, 140, 0.18]] as Array<[number, number, number]>) {
      c.save();
      c.translate(fx + dx, fy - 78);
      c.rotate(rot);
      c.fillRect(-16, -dh / 2, 32, dh);
      c.restore();
    }
    c.fillStyle = '#8a5a22';                 // 봉투 (크라프트)
    c.beginPath();
    c.moveTo(fx - 86, fy - 58);
    c.lineTo(fx + 86, fy - 58);
    c.lineTo(fx + 64, fy + 92);
    c.lineTo(fx - 64, fy + 92);
    c.closePath();
    c.fill();
    c.fillStyle = '#fff4dc';
    c.fillRect(fx - 74, fy - 6, 148, 20);

    c.textAlign = 'center';
    c.fillStyle = '#3f2a14';
    c.font = `bold 46px ${KR_FONT}`;
    c.fillText('XXXXL', w / 2, 52);
    c.font = `bold 40px ${KR_FONT}`;
    c.fillText('감자튀김', w / 2, h - 52);
    c.font = `bold 24px ${KR_FONT}`;
    c.fillStyle = '#7a5a2c';
    c.fillText('FF-1204  신장개업', w / 2, h - 18);
  });
}

/** 실종 전단 — 같은 라이트박스에 끼워 넣은 공익 게시물.
 *
 *  ⭐ **이 게임의 전제를 배경으로 한 번 말한다**: 누군가 이 길에서 집에 도착하지 못했다.
 *  자막도 규칙도 아니고, 정류장에 원래 붙어 있는 종류의 종이다 (무설명 학습).
 *  ⚠ 얼굴은 **실루엣**뿐이다. 실제 인물로 읽힐 만한 이름·번호·사진은 쓰지 않는다.
 *  ⚠ 색은 무채색으로 둔다 — 저채도 적은 이상현상 전용이고, 웜은 가게 전용이다.
 *    공익 게시물이 그 둘 중 하나를 입으면 의미색 고정이 흐려진다 */
export function missingAdTexture(): THREE.CanvasTexture {
  const w = 288;
  const h = 512;
  return canvasTex(w, h, (c) => {
    c.fillStyle = '#e9eaec';                 // 형광등에 비친 흰 종이
    c.fillRect(0, 0, w, h);
    c.strokeStyle = '#9aa0a8';
    c.lineWidth = 3;
    c.strokeRect(12, 12, w - 24, h - 24);

    // ⚠ 헤더를 두 번에 걸쳐 줄였다 (v0.11.61 — 요청): 44 → 39 → **30px**.
    //   44px는 288px 폭을 거의 꽉 채워 여백이 없었다. 30px면 본문(23px)과 위계는 남고
    //   양옆이 비어 실물 전단처럼 읽힌다 — 전단의 헤더는 크기보다 **여백**이 만든다
    c.textAlign = 'center';
    c.fillStyle = '#2b2f36';
    c.font = `bold 30px ${KR_FONT}`;
    c.fillText('사람을 찾습니다', w / 2, 74);
    c.fillStyle = '#6b7280';
    c.fillRect(40, 96, w - 80, 3);

    // 얼굴 — 실루엣만. 사진이 없는 전단이 오히려 흔하다 (그리고 더 서늘하다)
    c.fillStyle = '#cfd3d8';
    c.fillRect(64, 122, w - 128, 200);
    c.fillStyle = '#9aa0a8';
    c.beginPath();
    c.arc(w / 2, 208, 40, 0, Math.PI * 2);   // 머리
    c.fill();
    c.beginPath();
    c.moveTo(w / 2 - 62, 322);               // 어깨
    c.quadraticCurveTo(w / 2, 244, w / 2 + 62, 322);
    c.closePath();
    c.fill();

    // 본문 — 읽히는 것은 두 줄뿐이고 나머지는 잔글씨의 밀도로만 존재한다
    c.fillStyle = '#3a4048';
    c.font = `bold 23px ${KR_FONT}`;
    c.fillText('원룸 골목 일대', w / 2, 366);
    c.fillText('새벽 1시경 마지막 목격', w / 2, 400);
    c.fillStyle = '#8b9098';
    c.font = `18px ${KR_FONT}`;
    c.fillText('보신 분은 가까운 지구대로', w / 2, 438);
    // 잔글씨 — 글자로 읽지 않고 '종이'의 질감으로 읽는다
    c.fillStyle = '#b9bec5';
    for (let i = 0; i < 3; i++) c.fillRect(52, 458 + i * 11, w - 104, 4);
  });
}

/** 시장 간판 (v0.11.61) — 먹자골목 가게 전면에 붙는 글씨 판.
 *
 *  ⭐ **시장을 시장으로 만드는 것은 글씨의 밀도다.** 레퍼런스(아케이드 전통시장) 두 장에서
 *  벽면은 전부 간판이고, 그 간판마다 큰 한글이 박혀 있다. 여태 이 골목의 간판은
 *  **글씨 없는 검은 상자**였다 — 밤에는 실루엣으로 통했지만 퇴근길(밝은 구간)에서는 빈 판이었다.
 *
 *  ⚠⚠ **발광은 넣지 않는다.** 이 구간의 정상은 '전부 소등'이고 유일하게 켜진 것은 FF-1204다
 *  (웜 10% 원칙 — theme5 주석). 간판은 **칠한 물건**이라 낮에는 빛을 받아 읽히고 밤에는 어둡다.
 *  ⭐ 덤: 텍스처가 있는 재질은 노을 보정에서 데칼로 취급되어 제외되므로(runtime.ts
 *  setDuskMaterials) 칠한 색이 두 시간대에 그대로 남는다 — 간판은 시간대를 타지 않는 것이 맞다.
 *
 *  ⚠ 바탕에 **저채도 적(`#7a1010` 계열)은 쓰지 않는다** — 이상현상 전용색이다 (visual-polish §3).
 *    시장 간판의 빨강이 그립긴 하지만, 그 색은 이 게임에서 이미 다른 말을 하고 있다 */
export function marketSignTexture(text: string, ground: string, ink: string): THREE.CanvasTexture {
  const w = 512;
  const h = 128;
  return canvasTex(w, h, (c) => {
    c.fillStyle = ground;
    c.fillRect(0, 0, w, h);
    c.strokeStyle = ink;                      // 테두리 — 아크릴 간판의 프레임
    c.lineWidth = 6;
    c.strokeRect(9, 9, w - 18, h - 18);
    c.textAlign = 'center';
    c.fillStyle = ink;
    // 글자 수에 맞춰 크기를 잡는다 — 두 글자와 네 글자가 같은 크기면 판이 어색해진다
    const size = text.length <= 2 ? 74 : text.length === 3 ? 64 : 54;
    c.font = `bold ${size}px ${KR_FONT}`;
    c.fillText(text, w / 2, h / 2 + size * 0.36);
  });
}

/** 택시 갓등 (v0.11.61) — 지붕 위의 그 상자. **차를 택시로 만드는 것은 이것 하나다.**
 *
 *  차체는 이미 검정(`0x161a24`)이었다 — 검은 세단과 검은 택시를 가르는 것은 색이 아니라
 *  **지붕에 얹힌 상자**다. 옆으로 스쳐 지나가는 물건이라 0.6m 폭에 두 글자가 최대다.
 *
 *  ⚠ 발광은 `emissiveMap`으로 **글자에만** 건다 (간판과 같은 수법 — 아래 shopSignTexture).
 *    상자 전체를 발광시키면 지나갈 때 화면에서 제일 밝은 물건이 된다 */
export function taxiSignTexture(): THREE.CanvasTexture {
  return canvasTex(192, 48, (c) => {
    c.fillStyle = '#14161d';                 // 갓등 몸체 — 검정에 가깝다 (모범택시)
    c.fillRect(0, 0, 192, 48);
    c.textAlign = 'center';
    c.fillStyle = '#d8b268';                 // 금색 글자 — 모범택시의 그 색
    c.font = `bold 34px ${KR_FONT}`;
    c.fillText('택시', 96, 36);
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

// ---------- 한옥 (v0.11.65) — FF-1204의 기와지붕과 창호 ----------
// ⭐ **이 게임에서 유일하게 한옥인 것은 FF-1204뿐이다.** 골목은 콘크리트 빌라촌이고,
//   그 끝에 목조 기와집이 하나 서 있다 — 목적지를 '건물의 종류'로 구분하는 것이
//   간판을 크게 하는 것보다 멀리서 잘 읽힌다 (실루엣이 다르다).

/** 기와 — 지붕면에 반복해 까는 텍스처.
 *
 *  ⭐ 기와를 기와로 만드는 것은 색이 아니라 **세로 골의 반복**이다. 암키와(오목)와
 *  수키와(볼록)가 번갈아 가고, 볼록한 쪽에 하이라이트가 한 줄 선다. 그 명암만 있으면
 *  로우폴리 박스도 지붕으로 읽힌다 — 곡면을 만들 필요가 없다.
 *
 *  ⚠ **한 장에 한 주기만 그리고 반복 수로 늘린다** (`surfaceMat`). 폭 11m 지붕에
 *  0.35m 기와면 서른 골이고, 그것을 텍스처에 다 그리면 512px에서 골 하나가 17px이라 뭉갠다.
 *  ⚠ 채도를 넣지 않는다 — 넓은 면이다 (visual-polish: 넓은 면은 무채색, 색은 작은 면이 낸다).
 *    한국 기와의 그 푸른빛은 **한색 쪽으로 살짝만** 민다 (0x2a2f3a 계열 몸체색과 곱해진다) */
export function giwaTexture(): THREE.CanvasTexture {
  const w = 96;
  const h = 128;
  return canvasTex(w, h, (c) => {
    c.fillStyle = '#6b7080';                  // 암키와 — 골의 바닥 (가장 어둡다)
    c.fillRect(0, 0, w, h);
    // 수키와 — 골 사이에 얹히는 볼록한 마디. 좌→우 그라데이션이 곡면을 만든다
    const g = c.createLinearGradient(w * 0.34, 0, w * 0.86, 0);
    g.addColorStop(0, '#8f95a6');
    g.addColorStop(0.34, '#c3c8d4');          // 하이라이트 — 볼록의 정점
    g.addColorStop(1, '#5b606e');
    c.fillStyle = g;
    c.fillRect(w * 0.34, 0, w * 0.52, h);
    // 켜 이음 — 기와가 세로로 겹쳐 내려오는 단. 이 가로선이 없으면 '골판지'가 된다
    c.fillStyle = '#3f434e';
    c.fillRect(0, h - 9, w, 9);
    c.fillStyle = '#9aa0ae';                  // 겹친 기와의 앞턱이 빛을 받는다
    c.fillRect(w * 0.34, h - 9, w * 0.52, 4);
  });
}

/** 창호(한지 문살) — 살창에 한지를 바른 문. **안에서 불이 새어 나오는 면**이다.
 *
 *  ⭐ 이것이 이 가게의 웜을 담당한다 (visual-polish §3: 웜 = 안전·목표 전용).
 *  기름 표면과 같은 계열이되 더 넓고 고르게 — 기름은 점광이고 창호는 면광으로 읽힌다.
 *  `emissiveMap`으로 걸면 **한지 부분만** 빛나고 살(나무)은 검게 남아 격자가 실루엣이 된다.
 *
 *  ⚠ 살은 **세로가 촘촘하고 가로가 성글다**(띠살문). 정사각 격자로 그리면 한옥이 아니라
 *    창틀이 된다 — 이 비율 하나가 '한국의 문'과 '격자창'을 가른다.
 *  ⚠ 한지는 흰색이 아니라 **누런 미색**이다. 흰 종이로 두면 형광등이 되고 온기가 사라진다 */
export function hanjiTexture(): THREE.CanvasTexture {
  const w = 256;
  const h = 256;
  return canvasTex(w, h, (c) => {
    c.fillStyle = '#f0d49a';                  // 한지 — 누런 미색 (흰색이면 형광등이 된다)
    c.fillRect(0, 0, w, h);
    // 종이의 얼룩 — 고르게 칠하면 플라스틱이 된다. 큰 원 몇 개로 농담만 준다
    for (let i = 0; i < 7; i++) {
      c.fillStyle = i % 2 ? '#f7e2b8' : '#e3c184';
      c.beginPath();
      c.arc((i * 79) % w, (i * 113) % h, 46, 0, Math.PI * 2);
      c.fill();
    }
    c.fillStyle = '#3a2a1a';                  // 살 — 어두운 나무
    for (let i = 1; i < 9; i++) c.fillRect(i * (w / 9) - 4, 0, 8, h);   // 세로살 여덟 (촘촘)
    for (let i = 1; i < 4; i++) c.fillRect(0, i * (h / 4) - 5, w, 10);  // 가로살 셋 (성글)
    c.fillStyle = '#2b1f13';                  // 문틀
    c.lineWidth = 0;
    c.fillRect(0, 0, w, 11);
    c.fillRect(0, h - 11, w, 11);
    c.fillRect(0, 0, 11, h);
    c.fillRect(w - 11, 0, 11, h);
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
  // ⚠ 밝은 띠를 v0.47에 두면 **화면에 들어오는 부분이 거기**라 하늘이 희게 읽힌다
  //   (맑은 오후 하늘에서 배운 것과 같다 — 보이는 것은 지평선 바로 위의 좁은 띠뿐이다).
  //   장밋빛을 지평선까지 끌고 내려와, 가장 밝은 곳은 해 둘레에만 남긴다
  g.addColorStop(0.40, '#e0b0bd');
  g.addColorStop(0.47, '#eabfc0'); // 해가 넘어간 자리 — 밝지만 흰색은 아니다 (분홍)
  g.addColorStop(0.52, '#e2b3a8');
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
  // ⚠⚠ **빛무리를 넓게 깔면 하늘이 흰 종이가 된다** (v0.11.61 실측). 반지름이 w*0.34,
  //   즉 구를 한 바퀴 도는 UV의 **24%** 였다. 골목에서 보이는 하늘은 벽 사이의 좁은 띠뿐인데
  //   그 띠가 전부 빛무리 안에 들어가, 애써 만든 장밋빛 그라데이션이 화면에 한 번도 안 나왔다.
  //   ⭐ 해는 **작고 세게**, 둘레는 하늘색이 살아 있게. 그래야 '해가 걸렸다'로 읽힌다
  const halo = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, w * 0.19);
  halo.addColorStop(0.00, 'rgba(255, 244, 214, 0.95)'); // 해 — 흰빛에 가깝게 (눈이 부신 쪽)
  halo.addColorStop(0.10, 'rgba(255, 226, 172, 0.78)');
  halo.addColorStop(0.30, 'rgba(250, 196, 158, 0.38)'); // 빛무리
  halo.addColorStop(0.62, 'rgba(238, 180, 168, 0.13)');
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

/** ⭐ 맑은 늦은 오후의 하늘 — 퇴근길 **첫 구간**의 하늘 (v0.11.61, layout.ts SKY_AFTERNOON).
 *
 *  ⭐ **이 하늘의 일은 화면에 한색 덩어리를 하나 놓는 것이다.** 레퍼런스(맑은 날 골목 사진)의
 *  힐링은 파란 하늘·흰 벽·주황 나무·초록이 **서로 다른 계열로** 갈려 있는 데서 오고,
 *  그중 가장 넓고 확실한 한색이 하늘이다. 노을 하늘(장밋빛)은 벽과 같은 계열이라
 *  그 역할을 못 한다 — 두 구간을 이어 놓는 이유가 여기 있다.
 *
 *  노을 하늘과 다른 점 셋:
 *  ① **해를 그리지 않는다.** 아직 높이 있어서 골목의 시야(고도각 15° 위)에 안 들어온다 —
 *     소실점의 해는 '집으로 걸어 들어가는' 그림이고, 그것은 다음 구간의 몫이다
 *  ② 채도를 노을보다 **높게** 쓴다. 파랑은 넓은 면에서 물러나 보여서, 같은 채도로는 회색이 된다
 *  ③ 지평선 쪽이 **옅어진다** (대기 산란). 위가 진하고 아래가 흰 것이 맑은 날의 하늘이다 */
export function afternoonSkyTexture(): THREE.CanvasTexture {
  const h = 256;
  const w = 512;
  const cv = document.createElement('canvas');
  cv.width = w;
  cv.height = h;
  const ctx = cv.getContext('2d')!;
  // 캔버스 y=0 이 v=1(천정), y=h 가 v=0(발밑) — duskSkyTexture와 같은 규약
  // ⚠⚠ **옅은 띠를 지평선 쪽에 넉넉히 두면 하늘이 안 보인다** (실측 교정 1회차).
  //   골목에서 보이는 하늘은 **지평선 바로 위의 좁은 띠**뿐이다 (벽 7m·시야각). 첫 시도는
  //   v0.50을 #c6dcef(거의 흰색)로 뒀는데, 정작 화면에 들어온 것이 그 부분이라
  //   **하늘이 흰 종이**가 됐다 — 파란 하늘을 넣은 이유(한색 앵커)가 그대로 사라졌다.
  //   ⭐ 산란으로 옅어지는 구간을 **지평선에 붙여 압축한다**. 물리적 사실보다 보이는 것이 먼저다
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0.00, '#4a86c8'); // 천정 — 가장 진한 파랑
  g.addColorStop(0.30, '#63a0d8');
  g.addColorStop(0.44, '#86bce8'); // ⭐ 골목에서 실제로 보이는 띠 — 여기가 파랗지 않으면 의미가 없다
  g.addColorStop(0.50, '#a8cfee'); // 지평선 — 이 아래로만 옅어진다
  g.addColorStop(1.00, '#cfe0ee'); // 지평선 아래 — 바닥에 가려 거의 안 보인다
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  // 구름 몇 점 — 레퍼런스의 하늘에도 얇은 조각구름이 몇 개뿐이다.
  // ⚠ **소실점(u=0.75) 쪽에는 두지 않는다** — 걸어 들어가는 방향의 하늘은 비워 두는 것이
  //   골목을 깊어 보이게 한다 (구름이 뚜껑처럼 닫힌다). 좌우 위쪽에만 흩는다
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  for (const [u, v, rx, ry] of [
    [0.16, 0.16, 0.085, 0.020], [0.30, 0.27, 0.055, 0.014],
    [0.52, 0.13, 0.070, 0.017], [0.93, 0.22, 0.060, 0.015],
  ] as Array<[number, number, number, number]>) {
    ctx.beginPath();
    ctx.ellipse(w * u, h * v, w * rx, h * ry, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = THREE.RepeatWrapping;   // u는 구를 한 바퀴 감는다 — 이음매가 튀지 않게
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** 표면 텍스처 타일 한 변의 실측 미터 — **골목·터널·차도가 같은 값을 써야** 이음매에서
 *  결이 어긋나지 않는다. 골목 바닥과 교차로 노면은 실제로 맞닿아 있다 (v0.11.61에 모아 왔다) */
export const ASPHALT_M = 2.5;
export const WALL_M = 3;

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
