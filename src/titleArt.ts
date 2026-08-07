// 타이틀 일러스트 — **캔버스로 그린다. 이미지 파일은 늘지 않는다** (에셋 0 원칙 유지).
//
// 왜 그리는가: 타이틀이 어두운 배경 위 글자뿐이라, 게임이 무엇인지 첫 화면이 말해주지 않았다.
// 이 그림 한 장이 규칙을 설명하지 않고 전제를 전달한다 (무설명 학습) —
// **끝이 안 보이는 골목 · 하나뿐인 웜 광원 · 그 앞에 서 있는 무언가.**
//
// 팔레트는 게임과 같은 규칙을 따른다 (visual-polish §3):
//   어둠 = 아주 어두운 남색(OLED에서 순수 검정은 부자연스럽다) ·
//   **웜은 안전·목표 전용**(가로등 하나) · 한색 = 불안 · 저채도 적 = 이상 신호(아껴 쓴다)
//
// 정물성(설계 원칙 2)은 그림에도 적용한다 — 애니메이션 없음. 이미 그렇게 있는 장면이다.

const SKY_TOP = '#05070e';
const SKY_LOW = '#0d1424';
// ⚠ 건물은 **하늘보다 어두워야** 실루엣이 선다. 첫 시안은 벽(#0a0e18)과 하늘(#0d1424)의
// 명도가 거의 같아 원근이 통째로 안 읽혔다 — 밤 스카이라인은 '검은 건물 + 밝은 하늘'이다
const WALL_L = '#04060c';
const WALL_R = '#03050a';
const GROUND = '#090d16';
const WARM = '#ffb23e';
const COLD = '#8fa4c8';

/** 결정적 난수 — 새로고침마다 창문 배치가 바뀌면 '같은 골목'이 아니게 된다 */
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

function draw(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const rand = rng(12040);
  ctx.clearRect(0, 0, w, h);

  // ⚠ **소실점은 글자 아래로 내린다.** 처음엔 화면 중앙(0.58)에 뒀는데, 제목·버튼이
  // 정확히 그 자리를 덮어 원근이 하나도 안 읽히고 가로등 불빛이 글자를 씻어냈다.
  // 타이틀 일러스트는 **주변부에서 분위기만** 만들어야 한다 — 읽혀야 하는 것은 글자다
  const vx = w * 0.5;
  // 세로 화면에서는 소실점을 올린다 — 안 그러면 건물이 화면을 꽉 채워 골목이 아니라
  // 우물처럼 보인다. 가로/세로 한 벌로 커버해야 하므로(responsive-design §0) 비율로 잡는다
  const portrait = h > w;
  const vy = h * (portrait ? 0.62 : 0.76);
  // 원근의 기준 길이 — 세로에서 w만 쓰면 골목이 실오라기처럼 좁아진다
  const S = portrait ? Math.max(w, h * 0.52) : w;

  // ---------- 하늘 ----------
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, SKY_TOP);
  sky.addColorStop(0.62, SKY_LOW);
  sky.addColorStop(1, '#070a12');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  // 도시 광공해 — 지평선 근처가 밝다. **이것이 건물을 실루엣으로 만든다.**
  // 한색(불안)으로 깐다: 웜은 가로등이 독점한다 (visual-polish §3)
  const haze = ctx.createRadialGradient(vx, vy, 0, vx, vy, w * 0.62);
  haze.addColorStop(0, 'rgba(58,78,120,0.36)');
  haze.addColorStop(0.45, 'rgba(38,52,86,0.16)');
  haze.addColorStop(1, 'rgba(20,28,48,0)');
  ctx.fillStyle = haze;
  ctx.fillRect(0, 0, w, h);

  // ---------- 바닥 ----------
  ctx.fillStyle = GROUND;
  ctx.beginPath();
  ctx.moveTo(0, h);
  ctx.lineTo(vx - w * 0.055, vy);
  ctx.lineTo(vx + w * 0.055, vy);
  ctx.lineTo(w, h);
  ctx.closePath();
  ctx.fill();

  // ---------- 양쪽 건물 — **세로 스트립**으로 세운다 ----------
  // 통짜 사다리꼴로 칠했더니 벽이 아니라 어두운 얼룩으로만 보였다. 골목은
  // **건물이 늘어선 것**이므로, 스트립마다 지붕 높이를 달리해 소실점으로 내려보낸다.
  // 지붕선의 계단이 곧 원근 단서다 (에셋 0 — 사각형만으로 깊이를 만든다)
  const STRIPS = 9;
  for (const side of [-1, 1] as const) {
    for (let i = 0; i < STRIPS; i++) {
      const t0 = i / STRIPS;              // 0 = 화면 끝(가까이) → 1 = 소실점
      const t1 = (i + 1) / STRIPS;
      const xAt = (t: number) => vx + side * (w * 0.05 + (S * 0.62) * Math.pow(1 - t, 1.7));
      const x0 = xAt(t0);
      const x1 = xAt(t1);
      // 지붕 — 멀수록 소실점 높이에 붙는다. 건물마다 조금씩 다른 높이 (같으면 담장이 된다)
      const roof = (t: number) => vy - h * (0.62 * Math.pow(1 - t, 1.25) + 0.02);
      // ⚠ **지붕은 스트립 안에서 평평해야 건물로 읽힌다.** 양 끝을 각각 다른 높이로
      // 이으면 지붕선이 하나의 매끄러운 사선이 되어 **건물이 아니라 산맥**으로 보였다.
      // 평평한 윗변 + 스트립마다의 단차 = 늘어선 건물. 계단이 곧 원근이다
      const jitter = (0.5 - rand()) * h * 0.10 * (1 - t0);
      const top = roof(t0) + jitter;
      ctx.fillStyle = side < 0 ? WALL_L : WALL_R;
      ctx.fillRect(Math.min(x0, x1), top, Math.abs(x1 - x0) + 1, h - top);

      // 창문 — **거의 다 꺼져 있다.** 부재가 이 게임의 공포 수단이다
      const cols = Math.max(1, Math.round(2 * (1 - t0) + 1));
      const bw = Math.max(1.5, (x1 - x0) * side * 0.16);
      for (let c = 0; c < cols; c++) {
        const px = x0 + (x1 - x0) * ((c + 0.5) / cols);
        for (let r = 0; r < 4; r++) {
          const py = top + (h - top) * (0.12 + r * 0.15);
          if (py > h * 0.95) break;
          const lit = rand();
          // 스물에 두어 개만 켜져 있다. 켜진 것도 **한색** — 웜은 가로등이 독점한다.
          // 꺼진 창도 아주 옅게 그린다: 완전히 안 그리면 건물이 그냥 검은 판이 된다
          ctx.fillStyle = lit > 0.9 ? 'rgba(150,172,208,0.30)' : 'rgba(120,140,178,0.075)';
          ctx.fillRect(px - bw / 2, py, Math.abs(bw), Math.abs(bw) * 1.3);
        }
      }
    }
  }

  // ---------- 전봇대와 전선 — 한국 밤골목의 가장 싼 실루엣 ----------
  // 하늘을 가로지르는 검은 선 몇 개가 '어느 나라 골목인지'를 즉시 말한다.
  // 순수 검정으로 그린다: 하늘 광공해와의 대비가 곧 이 그림의 원근이다
  ctx.strokeStyle = 'rgba(2,3,7,0.92)';
  ctx.lineCap = 'butt';
  for (const side of [-1, 1] as const) {
    for (let i = 0; i < 4; i++) {
      const t = 0.06 + i * 0.21;
      const px = vx + side * (w * 0.05 + S * 0.58 * Math.pow(1 - t, 1.7));
      const top = vy - h * (0.60 * Math.pow(1 - t, 1.15) + 0.05);
      ctx.lineWidth = Math.max(1, w * 0.0045 * (1 - t) + 0.8);
      ctx.beginPath();                       // 기둥
      ctx.moveTo(px, top);
      ctx.lineTo(px, h);
      ctx.stroke();
      ctx.lineWidth = Math.max(0.8, w * 0.003 * (1 - t) + 0.6);
      ctx.beginPath();                       // 완목 (가로대)
      ctx.moveTo(px - w * 0.022 * (1 - t) - 2, top + h * 0.018);
      ctx.lineTo(px + w * 0.022 * (1 - t) + 2, top + h * 0.018);
      ctx.stroke();
    }
    // 전선 — 처지는 곡선 세 가닥. 소실점 쪽으로 수렴하며 가늘어진다
    for (let k = 0; k < 3; k++) {
      const yOff = h * (0.012 + k * 0.016);
      ctx.lineWidth = Math.max(0.6, w * 0.0012);
      ctx.beginPath();
      const x0 = vx + side * (w * 0.05 + S * 0.58);
      const y0 = vy - h * 0.60 + yOff;
      const x1 = vx + side * w * 0.05;
      const y1 = vy - h * 0.09 + yOff * 0.3;
      ctx.moveTo(x0, y0);
      ctx.quadraticCurveTo((x0 + x1) / 2, (y0 + y1) / 2 + h * 0.05, x1, y1);
      ctx.stroke();
    }
  }

  // ---------- 가로등 하나 — 이 그림에서 유일한 웜, 유일한 목표 ----------
  // 글자를 씻지 않도록 **오른쪽으로 밀고 약하게** 쓴다 (첫 시안은 정중앙이라 제목이 흐려졌다)
  const lx = vx + w * 0.20;
  const ly = vy - h * 0.10;
  const glow = ctx.createRadialGradient(lx, ly, 0, lx, ly, w * 0.16);
  glow.addColorStop(0, 'rgba(255,178,62,0.26)');
  glow.addColorStop(0.35, 'rgba(255,150,60,0.08)');
  glow.addColorStop(1, 'rgba(255,140,60,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(lx - w * 0.17, ly - w * 0.17, w * 0.34, w * 0.34);

  ctx.fillStyle = WARM;
  ctx.globalAlpha = 0.8;
  ctx.fillRect(lx - w * 0.0035, ly - h * 0.010, w * 0.007, h * 0.020);
  ctx.globalAlpha = 1;
  // 기둥 — 빛보다 어둡다. 광원 아래가 가장 검은 것이 밤 골목의 문법이다
  ctx.fillStyle = '#0b0f18';
  ctx.fillRect(lx - w * 0.0013, ly, w * 0.0026, h);

  // 바닥에 떨어진 빛 웅덩이 — 걸어가야 할 곳
  const pool = ctx.createRadialGradient(lx, vy + h * 0.12, 0, lx, vy + h * 0.12, w * 0.11);
  pool.addColorStop(0, 'rgba(255,170,70,0.11)');
  pool.addColorStop(1, 'rgba(255,170,70,0)');
  ctx.fillStyle = pool;
  ctx.fillRect(lx - w * 0.12, vy, w * 0.24, h * 0.3);

  // ---------- 그리고, 저 끝에 서 있는 것 ----------
  // **설명하지 않는다.** 등을 돌리고 있고 움직이지 않는다 (정물성).
  // ⚠ 첫 시안은 화면 중앙에 크게 서서 사람 아이콘처럼 읽혔다 — **작게, 멀리**.
  // 빛 웅덩이 **가장자리**에 세워 실루엣 대비만 얻는다 (배치 3원칙 ③을 그림에도)
  const fh = h * 0.075;
  const fx = lx - w * 0.075;
  const fy = vy + h * 0.055;
  ctx.fillStyle = '#03050a';
  ctx.beginPath();
  ctx.ellipse(fx, fy - fh * 0.88, fh * 0.13, fh * 0.15, 0, 0, Math.PI * 2); // 머리
  ctx.fill();
  ctx.beginPath();                                                          // 어깨에서 좁아지는 몸
  ctx.moveTo(fx - fh * 0.19, fy);
  ctx.lineTo(fx - fh * 0.15, fy - fh * 0.72);
  ctx.lineTo(fx + fh * 0.15, fy - fh * 0.72);
  ctx.lineTo(fx + fh * 0.19, fy);
  ctx.closePath();
  ctx.fill();

  // ---------- 소실점의 어둠 — 골목은 끝이 안 보인다 ----------
  const deep = ctx.createRadialGradient(vx, vy - h * 0.02, 0, vx, vy - h * 0.02, w * 0.14);
  deep.addColorStop(0, 'rgba(2,3,6,0.97)');
  deep.addColorStop(1, 'rgba(2,3,6,0)');
  ctx.fillStyle = deep;
  ctx.fillRect(vx - w * 0.16, vy - h * 0.18, w * 0.32, h * 0.3);

  // ---------- 글자 자리를 비운다 ----------
  // 타이틀 텍스트는 화면 중상단에 모여 있다. 그 띠를 어둠으로 눌러 **대비를 확보**한다 —
  // 일러스트가 아무리 예뻐도 제목이 안 읽히면 실패다 (어포던스 우선)
  // ⚠ 너무 세게 누르면 건물·전선이 통째로 사라진다 (첫 시안 0.86에서 그랬다).
  // 글자가 있는 위쪽만 적당히, 아래는 그림에 양보한다
  const band = ctx.createLinearGradient(0, 0, 0, h * 0.66);
  band.addColorStop(0, 'rgba(4,6,12,0.62)');
  band.addColorStop(0.5, 'rgba(4,6,12,0.44)');
  band.addColorStop(1, 'rgba(4,6,12,0)');
  ctx.fillStyle = band;
  ctx.fillRect(0, 0, w, h * 0.66);

  // ---------- 비네트 — 게임의 깊이 연출과 같은 문법 ----------
  const vig = ctx.createRadialGradient(vx, vy * 0.92, h * 0.16, vx, vy * 0.92, Math.max(w, h) * 0.78);
  vig.addColorStop(0, 'rgba(0,0,0,0)');
  vig.addColorStop(1, 'rgba(0,0,0,0.84)');
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, w, h);

  // 한색 미광 한 겹 — 새벽 한 시의 공기 (불안색, visual-polish §3)
  ctx.globalCompositeOperation = 'lighter';
  ctx.fillStyle = 'rgba(30,44,74,0.10)';
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'source-over';
  void COLD;
}

/** #start 안쪽 맨 뒤에 캔버스를 깔고 그린다. 리사이즈·회전에 따라 다시 그린다 */
export function mountTitleArt(): void {
  const host = document.getElementById('start');
  if (!host) return;
  const cv = document.createElement('canvas');
  cv.id = 'title-art';
  host.insertBefore(cv, host.firstChild);

  const render = () => {
    // 배경 장식이므로 해상도를 아낀다 (모바일 발열 — responsive-design §3 DPR 캡)
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const w = host.clientWidth || window.innerWidth;
    const h = host.clientHeight || window.innerHeight;
    cv.width = Math.max(1, Math.round(w * dpr));
    cv.height = Math.max(1, Math.round(h * dpr));
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(ctx, w, h);
  };
  render();

  let t: number | undefined;
  const schedule = () => {
    window.clearTimeout(t);
    t = window.setTimeout(render, 120); // 리사이즈 폭주 방지 (주소창 여닫힘 포함)
  };
  window.addEventListener('resize', schedule);
  window.addEventListener('orientationchange', schedule);
}
