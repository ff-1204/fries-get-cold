// 튀김이 식기 전에 — 접히는 골목 (docs/game.md 판정)
// 직진 + 확인(무섭지만 다가가서 짚어야 한다) + 접힘(지나침=연장+증식) + 깊이(가로등 소등·soft fail)

import * as THREE from 'three';
import { ANOMALIES, CONFIG, TEXT, STAGE_COUNT, stageOf, type AnomalyDef } from './data';
import { tasteFromFolds, activeCount } from './balance';
import { Input } from './input';
import { Hud } from './hud';
import { AudioEngine } from './audio';
import {
  createWorld, applyAnomalies, applyDepth, setFoldMark, setShopNear, setSegmentTheme,
  setMorning, updateWorld, startCar, carInCorridor, isGreen, TRAFFIC_CYCLE,
  setTunnelDark, stopCar, TUNNEL_LEN, TUNNEL_SWAP_Z, TUNNEL_IN_HALF,
  ROAD_Z, ROAD_HALF, STOP_LINE_Z, MAIN_GAP_HALF, SPAWN_ANCHORS, CAR_SEC,
} from './world';
import { save, persist, resetSave, hasProgress, type TasteResult } from './save';

type Phase = 'gate' | 'walk' | 'transition';
/** 걷기 모드 (v0.11.0) — 첫날 아침 편도(튜토리얼) / 귀갓길(본게임: 모든 밤).
 *  가는 길은 컷이다. 게임은 언제나 "괴담의 존재들을 피해 집에 도착하는 것" */
type WalkMode = 'tutorial' | 'return';

const app = document.getElementById('app')!;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // responsive-design §2
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping; // 밝기 슬라이더용 노출 제어
app.appendChild(renderer.domElement);

// 밝기 슬라이더 (visual-polish §4 — "골목이 겨우 보일 정도" 패턴). 설정은 기기 내 저장.
// 조절하는 동안 시작 화면을 걷어(peek) 실제 골목을 보면서 맞춘다 — 결과가 보여야 조절할 수 있다.
// EXPOSURE_BASE (2026-08-02 밝기 재조정): 저장값 의미(1.0 = 기본)를 유지한 채 전체 노출을
// 배율로 상향 — 기존 저장 사용자도 마이그레이션 없이 함께 밝아진다. 분위기는 노출이 아니라
// 팔레트·안개·감광 사다리가 담당 (visual-polish §3·§4)
const EXPOSURE_BASE = 1.35;
const brightEl = document.getElementById('bright') as HTMLInputElement | null;
const startOverlay = document.getElementById('start')!;
let peekTimer = 0;
function peekOn() {
  window.clearTimeout(peekTimer);
  startOverlay.classList.add('peek');
}
function peekOff() {
  startOverlay.classList.remove('peek');
}
if (brightEl) {
  brightEl.value = String(save.brightness);
  renderer.toneMappingExposure = save.brightness * EXPOSURE_BASE;
  brightEl.addEventListener('pointerdown', peekOn);
  window.addEventListener('pointerup', peekOff);
  window.addEventListener('pointercancel', peekOff);
  brightEl.addEventListener('input', () => {
    renderer.toneMappingExposure = parseFloat(brightEl.value) * EXPOSURE_BASE;
    save.brightness = parseFloat(brightEl.value);
    persist();
    peekOn(); // 키보드(방향키) 조절도 미리보기 — 잠시 후 자동 복귀
    peekTimer = window.setTimeout(peekOff, 1000);
  });
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.1, 120);
const refs = createWorld(scene);

const input = new Input(renderer.domElement);
const hud = new Hud();
const audio = new AudioEngine();
const clock = new THREE.Clock();

// 홀림 비네트 — 깊이(골목이 나를 붙잡은 정도)의 신체 감각화. 저채도 적 (팔레트: 어긋남 전용색).
// 가로등 감광(다이제틱 게이지)의 보조 — 시야 가장자리가 조여드는 압박감
const painEl = document.getElementById('pain');
function applyPain(d: number) {
  if (!painEl) return;
  painEl.style.opacity = String(Math.min(0.55, d * 0.09));
  painEl.classList.toggle('acute', d >= 4); // 한계 직전 — 느린 맥동
}

// ---------- 사운드 토글 (우상단 버튼 · M 키) — 설정은 기기 내 저장 ----------
const soundBtn = document.getElementById('sound-btn') as HTMLButtonElement | null;
function applyMute() {
  audio.setMuted(save.muted);
  if (soundBtn) {
    soundBtn.textContent = save.muted ? '🔇' : '🔊';
    soundBtn.setAttribute('aria-label', save.muted ? '소리 켜기' : '소리 끄기');
  }
}
function toggleMute() {
  save.muted = !save.muted;
  persist();
  applyMute();
}
soundBtn?.addEventListener('click', toggleMute);
window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyM') toggleMute(); // PC 포인터락 중에는 버튼 클릭 불가 — 키로 대체
});
applyMute();

// ---------- 게임 상태 ----------
let phase: Phase = 'gate';
let walkMode: WalkMode = 'return';
let started = false;
let pausing = false;
let night = save.night; // 이어하기 — 기기 내 저장에서 복원 (docs/privacy.md)
let done = 0;               // 이 밤에 지나온 걸음(구간) 수 — 접힘도 걸음은 소비한다
let total = CONFIG.segments; // 이 밤의 총 구간 수 — 접힐 때마다 +1 (카운터는 정직하다)
let theme = 1;              // 현재 걷는 구간 테마 1..5 — 접힘은 테마를 반복시킨다
let depth = 0;              // 골목이 나를 붙잡은 정도 — 가로등이 게이지 (config.depthLimit)
let folds = 0;              // 이 밤의 접힘 횟수 — 시식 서사·노미스 추적
let foldRepeat = false;     // 지금 구간이 접힘 반복인가 (분필 자국 표시)
let swarm = 0;              // 증식 — 확인 없이 지나칠 때마다 +1, 동시 이상 = 1+swarm (balance.ts)
let spotCooldown = 0;       // 지적 연타 방지 (config.spotCooldownSec)
let stare = 0;              // avert — 사람 형태를 화면에 담고 있는 누적 시간 (붙잡힘까지)
let stareWarned = false;    // 경고 자막 1회 (눈을 뗄 시간을 준다 — 공정성)
let carCycle = -1;          // 차를 보낸 신호 주기 번호 — 빨간불마다 정확히 한 대
let tutBeat = 0;            // 튜토리얼 자막 진행 — 걸음이 지점을 지날 때마다 하나씩
let elapsed = 0;            // 이 밤의 경과 시간(초) — 새벽이 깊을수록 위험
let anomalies: AnomalyDef[] = [];        // 이 구간의 활성 이상 (0~1+swarm)
const checked = new Set<string>();       // 이 구간에서 확인을 마친 이상 id
let lastIds = new Set<string>();         // 직전 구간의 이상 id — 연속 등장 방지
let tripAnomalies = 0; // 이 밤에 등장한 이상 수 (밤 1 온보딩 보장용)

const player = { x: 0, z: 0 };

function anomalyChance(): number {
  return Math.min(0.8, CONFIG.baseAnomalyChance + (elapsed / 60) * CONFIG.chancePerMinute);
}

// 디버그: ?a=<effect>로 이상 고정 — 해당 이상현상의 배치 구간에 도달했을 때 등장
// (effect 목록은 src/data/anomalies.json — 플레이테스트·스크린샷 검증용)
// ?a=는 첫날 아침 튜토리얼을 생략한다 (E2E 결정성 — verify.mjs 케이스가 바로 밤을 검증)
const PARAMS = new URLSearchParams(location.search);
const DEBUG_ANOMALY = PARAMS.get('a');
const DEBUG_TUT = PARAMS.has('t');                      // ?t=1 — 튜토리얼 강제 재생
const DEBUG_NO_AVERT = PARAMS.get('avert') === 'off';   // ?avert=off — 응시 붙잡힘 정지
// ?anchor=0..5 — 스폰 앵커 고정 (그림자 사람의 가림 검사용. 기본 2 = 기존 스크린샷 호환)
const DEBUG_ANCHOR = Math.max(0, Math.min(5, Number(PARAMS.get('anchor') ?? 2) || 0));
// (스크린샷 검증 전용: 사람 형태를 정면에서 찍으려면 붙잡히지 않아야 한다)

function rollSegment(foldStatus = false) {
  setSegmentTheme(refs, theme); // 구간 테마 (원룸/상가/놀이터/정류장/먹자골목)
  const tutorial = walkMode === 'tutorial';

  // 이 테마·이 밤에 가능한 풀 — 테마 사물 고정형 + 스폰 포인트 랜덤형(segment 0)
  // 같은 이상현상 연속 등장 방지 (공정성 — 접힘 반복 구간에서 특히 중요)
  const pool = ANOMALIES.filter(
    (a) => (a.segment === theme || a.segment === 0) && a.night <= night && !lastIds.has(a.id),
  );

  // 온보딩 보장 (game-design-theory §6): 온보딩 밤의 첫 구간은 반드시 정상 —
  // "정상 상태의 학습"이 먼저 (fear-cognition §1: 이상현상 = 학습된 정상의 위반).
  // 어느 밤이 온보딩인지는 stages.json이 정한다 (v0.11.23)
  const onboardingNight = stageOf(night).onboarding;
  const forceNormal = !DEBUG_ANOMALY && onboardingNight && done === 0;
  // 막바지까지 이상이 한 번도 없었다면 강제 등장 (문법 학습 보장)
  const forceAnomaly = onboardingNight && tripAnomalies === 0 &&
    (walkMode === 'return' ? theme <= 2 : theme >= CONFIG.segments - 1);

  if (tutorial) {
    anomalies = []; // 첫날 아침 — 아무 일도 없다. 표지판만 말이 많다
  } else if (DEBUG_ANOMALY) {
    const forced = ANOMALIES.find(
      (x) => x.effect === DEBUG_ANOMALY && (x.segment === theme || x.segment === 0),
    );
    anomalies = forced ? [forced] : [];
  } else if (pool.length > 0 && !forceNormal && (forceAnomaly || Math.random() < anomalyChance())) {
    // 증식 — 지나칠수록 동시 이상이 늘어난다 (풀에서 서로 다른 것을 뽑는다)
    const n = Math.min(activeCount(swarm), pool.length);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    anomalies = shuffled.slice(0, n);
    tripAnomalies += n;
  } else {
    anomalies = [];
  }
  lastIds = new Set(anomalies.map((a) => a.id));
  checked.clear();
  // 스폰 포인트 랜덤형 — 이번 출현 지점을 고른다 (world의 figure 핸들러가 읽는다).
  // ?a= 디버그는 앵커 고정 — 스크린샷 검증의 결정성 (가로등 시야권 지점)
  if (anomalies.some((a) => a.effect === 'figure')) {
    refs.group.userData.figureAnchor =
      DEBUG_ANOMALY ? DEBUG_ANCHOR : Math.floor(Math.random() * SPAWN_ANCHORS.length);
  }
  stopCar(refs);                      // 주행 중이던 차는 구간과 함께 사라진다 (v0.11.19)
  carCycle = -1;                      // 구간이 바뀌면 다시 (접힘 반복에서도 새로 판정)
  applyDepth(refs, depth);            // 꺼져가는 빛 — 이상 리셋보다 먼저 (lampBase 기준 제공)
  applyPain(depth);                   // 통증 비네트 동기화
  applyAnomalies(refs, anomalies.map((a) => a.effect));
  // 접힘 반복 구간 — 바닥 분필 자국 (인지 4요소 ④). 낮에는 표시하지 않는다 (괴담 누출 방지)
  setFoldMark(refs, foldRepeat && !tutorial);
  // '정적' — 이상 구간에서 환경음이 잦아든다 (fear-cognition §8, 시각 단서의 청각 병행)
  audio.duck(anomalies.length > 0);
  // 마지막 걸음에서만 목적지 연출 — 편도: FF-1204 간판·불빛 / 귀갓길: 간판 없이 불빛만 (집)
  setShopNear(refs, done === total - 1, walkMode !== 'return');

  player.x = 0;
  // 뒤 갱구 바로 앞 — 지나온 터널에서 막 나온 자리. 0이 아니라 -0.5인 이유는
  // 뒤 끝벽(z 0~1)과 갱구 기둥에 카메라가 닿지 않게 하기 위함이고, 앞 끝벽 쪽
  // 통과 방지 거리(0.5m)와 대칭이다 — 시작하자마자 옆으로 걸어도 튀지 않는다 (v0.11.22)
  player.z = -0.5;
  input.yaw = 0;
  input.pitch = 0;

  const label = tutorial
    ? `퇴근길 — ${TEXT.segLabel(done + 1, total, theme)}`
    : walkMode === 'return'
      ? `${TEXT.nightLabel(night)} — 돌아가는 길 ${TEXT.segLabel(done + 1, total, theme)}`
      : `${TEXT.nightLabel(night)} — ${TEXT.segLabel(done + 1, total, theme)}`;
  if (foldStatus) hud.setStatusFold(label); // 접힘 — 카운터 강조 교체 (인지 4요소 ①)
  else hud.setStatus(label);
}

// ---------- 온보딩 — 조작은 타이틀이 아니라 골목 안에서 배운다 (v0.9.1) ----------
// 걷기 힌트: 시작 직후 표시, 실제로 몇 걸음 걸으면 사라진다 (해보면 배운 것).
// 직시 힌트: 첫 흔적에 다가가는 순간 한 번만. 규칙 학습은 첫날 아침 표지판이 담당.
// 온보딩 힌트 1회 표시 상태. hintZ = 걷기 힌트를 띄운 지점 —
// **해제는 절대 좌표가 아니라 '그 지점에서 얼마나 걸었는가'로 판정한다** (v0.11.27).
// 절대 좌표(z < -6)로 재던 시절, 퇴근길 튜토리얼은 z=-8.64에서 시작하는 탓에
// 첫 프레임에 조건이 이미 참이라 **힌트가 뜨자마자 사라졌다** — 가르쳐야 할 구간에서만 안 보였다
const onboard = { move: false, gaze: false, avert: false, hintZ: 0 };
const usesTouch = () => input.usesTouch || 'ontouchstart' in window;

function resetTrip() {
  done = 0;
  total = CONFIG.segments;
  theme = 1;
  depth = 0;
  folds = 0;
  swarm = 0;
  foldRepeat = false;
  elapsed = 0;
  lastIds = new Set();
  tripAnomalies = 0;
  stare = 0;
  stareWarned = false;
  carCycle = -1;
}

/** 첫날 퇴근길 — 튜토리얼 (v0.11.5): 정류장(4/5)에서 시작해 먹자골목 입구(5/5)까지 두 구간만.
 *  밝고 안전하다. 목적은 정상 상태의 학습 + 조작 익히기 — 길게 끌 이유가 없다 */
async function startTutorial() {
  walkMode = 'tutorial';
  resetTrip();
  // 하루의 끝, 정류장에서 현수막을 보고 걸음을 돌린 지점부터 (전체 5구간 중 4번째)
  done = CONFIG.segments - 2;
  theme = CONFIG.segments - 1;
  setMorning(refs, true);
  rollSegment();
  // 정류장 앞에서 시작한다 — 부스(z=-L*0.32) 곁. 걸어온 게 아니라 서 있다가 걸음을 돌리는 것.
  // rollSegment가 z를 0으로 되돌리므로 그 뒤에 놓는다 (v0.11.6)
  player.z = -CONFIG.segLength * 0.24; // 부스(z=-L*0.32)가 2~3m 앞 오른쪽에 들어오는 자리
  phase = 'walk';
  tutBeat = 0; // 자막은 걸음에 맞춰 하나씩 (updateWalk가 위치로 터뜨린다)
  if (!onboard.move) {
    onboard.hintZ = player.z; // 여기서부터 6m를 걸으면 해제한다 (절대 좌표로 재지 않는다)
    hud.showHint(usesTouch() ? TEXT.hintMoveTouch : TEXT.hintMovePc);
  }
}

/** 귀갓길 — 본게임 (v0.11.0: 모든 밤). 상회를 나와 테마 역순으로 집까지.
 *  가는 길은 컷이다 — 목적은 하나, 괴담의 존재들을 피해서 집에 도착하는 것 */
async function startNight() {
  walkMode = 'return';
  resetTrip();
  theme = CONFIG.segments; // 먹자골목 입구(가게 앞) → 원룸 골목(집) 역순
  setMorning(refs, false);
  rollSegment();
  phase = 'walk';
  hud.say(stageOf(night).intro, 4200);
  if (stageOf(night).onboarding && !onboard.move) {
    onboard.hintZ = player.z;
    hud.showHint(usesTouch() ? TEXT.hintMoveTouch : TEXT.hintMovePc);
  }
}

/** 시작/재개 분기 — 첫날 아침(미완료 시)만 튜토리얼, 그 외에는 곧장 귀갓길.
 *  ?a= 디버그는 튜토리얼을 생략한다 (verify.mjs E2E 결정성) */
async function startDay() {
  if (stageOf(night).onboarding && !DEBUG_ANOMALY && (DEBUG_TUT || !save.tut)) await startTutorial();
  else await startNight();
}

/** 깊이 한계 — 죽음이 아니라 골목 입구 리셋 (soft fail 설계: 실패조차 암전, design-principles §1) */
async function softFail() {
  phase = 'transition';
  await hud.fadeOut(1400);
  await hud.blackScreen(TEXT.softFail, TEXT.softFailBtn);
  input.activate(); // 포인터락 재획득
  await startDay();  // 같은 밤을 처음부터 — 배운 채로 다시 걷는다 (theory §9 자비 설계)
  await hud.fadeIn(900);
}

/** 첫날 아침 — 상회 도착. 시식·첫 도장은 컷으로, 하루가 흐르고 밤 귀갓길이 시작된다 (v0.10.0) */
async function reachTutorialShop() {
  phase = 'transition';
  await hud.fadeOut(800);
  await hud.blackScreen(TEXT.tutShopArrive, TEXT.tutShopBtn);
  save.tut = true; // 튜토리얼 완료 — 중도 이탈해도 밤 1 귀갓길부터 재개
  persist();
  await hud.blackScreen(TEXT.tutDusk, TEXT.tutDuskBtn);
  input.activate();
  await startNight();
  await hud.fadeIn(1100);
}

/** 집 도착 = 밤의 끝 (v0.11.0). 등급은 접힘 횟수 — 얼마나 붙잡혔는가 (balance.ts 재사용) */
async function reachHome() {
  phase = 'transition';
  await hud.fadeOut(800);
  const taste: TasteResult = tasteFromFolds(folds);
  const result =
    taste === 'crispy' ? TEXT.homeCrispy :
    taste === 'lukewarm' ? TEXT.homeLukewarm :
    TEXT.homeSoggy;
  save.results[night - 1] = taste; // 밤별 기록 — 기기 내 저장 (연출 도중 이탈 대비, 먼저 저장)
  save.night = night + 1;
  persist();
  // 귀가 — 매 밤의 End이므로 가장 정성스러운 순간이어야 한다 (affective §1-4 Peak-End)
  await hud.blackScreen(TEXT.homeArrive, TEXT.homeOpen);
  // 도장 진행 — 상단 한 줄. 칸 수 = 기획된 밤 수(stages.json)이고, 그걸 넘기면
  // 찍을 칸이 없다 — 조용한 어긋남 (story.md §2)
  const stampLine =
    night > STAGE_COUNT
      ? '…도장 찍을 칸이, 이제 없다'
      : `도장 ${'●'.repeat(night)}${'○'.repeat(STAGE_COUNT - night)}`;
  await hud.arrivalScene({
    gauge: `${TEXT.homeGauge[taste]} · ${stampLine}`,
    result,
    epilogue: stageOf(night).epilogue,
    steps: [TEXT.homeSit, TEXT.homeEnd],
    endLabel: TEXT.homeEnd,
    // 무사 귀가 = 긍정·저각성 → 웜 틴트, 헤맸으면 한랭 (affective §1-2)
    bg: taste === 'crispy' ? '#181008' : taste === 'lukewarm' ? '#100e12' : '#0a0d16',
    onBite: () => {},
  });
  input.activate();
  night += 1;
  // 가는 길은 컷 — 다음 밤도 "또 갔다 왔다"에서 시작한다
  await hud.blackScreen(TEXT.nightOpen(night), TEXT.nightOpenBtn);
  input.activate();
  await startNight();
  await hud.fadeIn(900);
}

/** 되돌아가려 터널 깊숙이 들어가면 — 골목이 돌려세운다 (v0.11.18).
 *  보이지 않는 벽 대신 연출로 막는다. 이미 안개가 완전히 검은 지점이라 전환이 보이지 않고,
 *  정신을 차리면 다시 골목 쪽을 보고 있다 — "돌아갈 수 없다"가 규칙이 아니라 사건이 된다 */
async function turnedAround() {
  if (phase !== 'walk') return;
  phase = 'transition';
  setTunnelDark(refs, 1, walkMode === 'tutorial' ? 0.008 : 0.044); // 완전한 암흑으로 고정
  audio.duck(true);
  await new Promise((r) => setTimeout(r, 900));
  input.yaw = 0;              // 골목 쪽(-Z)을 향한다
  input.pitch = 0;
  player.z = TUNNEL_LEN * 0.42; // 돌아 나오기 시작하는 지점 (걸으면 어둠이 풀린다)
  hud.say(TEXT.turnedBack, 3400);
  phase = 'walk';
}

/** 차에 치임 — 죽음 묘사 없음. 암전 뒤 접힘과 같은 결과 (v0.11.7).
 *  새벽 한 시에 차가 어디서 왔는지는 설명하지 않는다 */
async function hitByCar() {
  if (phase !== 'walk') return;
  // 낮은 자연스럽게(정신을 차려 보니 정류장), 밤은 설명되지 않게(차도 자국도 없다)
  await grabbed(walkMode === 'tutorial' ? TEXT.carHitDay : TEXT.carHit);
}

/** avert — 눈이 마주쳤다. 결과는 접힘과 같다: 골목이 나를 놓아주지 않는다 (v0.11.0) */
async function grabbed(reason: string) {
  if (phase !== 'walk') return;
  phase = 'transition';
  stare = 0;
  stareWarned = false;
  folds += 1;
  total += 1;
  depth += CONFIG.foldDepthCost;
  swarm = Math.min(CONFIG.swarmMax, swarm + 1);
  save.misses += 1;
  persist();
  audio.duck(true); // 정적 — 사운드 드랍
  await hud.fadeOut(700);
  done += 1;
  if (depth >= CONFIG.depthLimit) {
    await softFail();
    return;
  }
  foldRepeat = true;      // 같은 구간을 다시 (분필 자국 — 인지 4요소 ④)
  rollSegment(true);
  // 낮에는 '골목이 접혔다'는 자각 문구를 붙이지 않는다 — 튜토리얼에 괴담을 새지 않게
  hud.say(walkMode === 'tutorial' ? reason : `${reason}\n${TEXT.foldNotice}`, 3800);
  phase = 'walk';
  await hud.fadeIn(700);
}

/** 구간 통과 처리 — 출구는 하나뿐. 판정은 이미 걷는 동안 끝났다(전부 확인했는가) */
async function passSegment() {
  let repeat = false;
  // avert(사람 형태)는 지나치는 것이 정답 — 접힘 대상이 아니다. 흔적(gaze)만 확인 의무 (v0.11.0)
  const missed = anomalies.filter((a) => a.rule === 'gaze' && !checked.has(a.id));

  if (missed.length > 0) {
    // 접힘 — 확인 없이 지나침은 죽음이 아니라 연장 + 증식 (game.md 판정)
    folds += 1;
    total += 1;
    depth += CONFIG.foldDepthCost;
    swarm = Math.min(CONFIG.swarmMax, swarm + 1); // 지나칠수록 골목의 어긋남이 늘어난다
    save.misses += 1; // 노미스(히든 엔딩) 추적 — 접힘 = 미스
    persist();
    repeat = true;
    hud.say(`${missed[0].reveal}\n${TEXT.foldNotice}`, 3800); // reveal 암시 (인지 4요소 ②)
    audio.duck(true); // 정적 — 사운드 드랍 (인지 4요소 ③, rollSegment가 이어받는다)
  }

  done += 1;
  if (depth >= CONFIG.depthLimit) {
    await softFail();
    return;
  }
  if (done >= total) {
    if (walkMode === 'tutorial') await reachTutorialShop();
    else await reachHome();
    return;
  }
  foldRepeat = repeat;
  // 접힘은 같은 테마를 반복. 귀갓길은 테마 역순 (먹자골목 → 원룸), 아침 편도는 정순
  if (!repeat) {
    theme = walkMode === 'return'
      ? Math.max(theme - 1, 1)
      : Math.min(theme + 1, CONFIG.segments);
  }
  // 전환은 **터널 한가운데의 암흑 속에서** 일어난다 (v0.11.15) — 화면 페이드 없음.
  // 들어간 만큼(앞 터널 절반) 나온다(뒤 터널 절반): 걸음이 끊기지 않는다
  rollSegment(repeat);
  player.z = TUNNEL_LEN / 2;   // 지나온 터널의 한가운데 — 여기서 계속 걸어 나온다
}

// ---------- 확인 — 무섭지만, 다가가서 직접 짚어야 한다 (판정의 동사, game.md 2026-08-02) ----------
const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
const projPos = new THREE.Vector3();

function hitAnomaly(targets: THREE.Object3D[]): boolean {
  raycaster.setFromCamera(ndc, camera);
  if (raycaster.intersectObjects(targets, true).length > 0) return true;
  // 관용 판정 — 가는 사물(그네 줄·전단지)도 근처를 짚으면 인정 (모바일 손가락 오차 포함)
  for (const t of targets) {
    t.getWorldPosition(projPos);
    if (projPos.distanceTo(camera.position) > 45) continue;
    projPos.project(camera);
    if (projPos.z < 1 && Math.hypot(projPos.x - ndc.x, projPos.y - ndc.y) < 0.12) return true;
  }
  return false;
}

function targetDistance(targets: THREE.Object3D[]): number {
  let min = Infinity;
  for (const t of targets) {
    t.getWorldPosition(projPos);
    min = Math.min(min, projPos.distanceTo(camera.position));
  }
  return min;
}

// avert 조준 판정 — 형체의 '몸통 중심'을 기준으로 한다. 그룹 원점은 발치라서
// 원점으로 재면 얼굴을 정면으로 보고 있어도 안 걸린다 (판정이 거짓말하면 안 된다, §0)
const aimBox = new THREE.Box3();
const aimCenter = new THREE.Vector3();
const camFwd = new THREE.Vector3();
const toTarget = new THREE.Vector3();

/** 시선축에서 벗어난 각도(도)와 카메라와의 거리 — 둘 다 최솟값 */
function aimState(targets: THREE.Object3D[]): { dist: number; deg: number } {
  camera.getWorldDirection(camFwd);
  let dist = Infinity;
  let deg = Infinity;
  for (const t of targets) {
    if (!t.visible) continue;
    aimBox.setFromObject(t);
    if (aimBox.isEmpty()) continue;
    aimBox.getCenter(aimCenter);
    toTarget.subVectors(aimCenter, camera.position);
    const d = toTarget.length();
    if (d < 0.01) continue;
    dist = Math.min(dist, d);
    toTarget.divideScalar(d);
    const dot = Math.max(-1, Math.min(1, toTarget.dot(camFwd)));
    deg = Math.min(deg, (Math.acos(dot) * 180) / Math.PI);
  }
  return { dist, deg };
}

// 가림 검사 (?a= 디버그 한정 검증 훅) — 배치 3원칙 ②'관찰 시간 확보'를 숫자로 확인한다.
// 카메라에서 대상 중심으로 레이를 쏴, 첫 충돌이 대상 자신이 아니면 무언가가 가린 것
const occlRay = new THREE.Raycaster();
function isDescendant(obj: THREE.Object3D | null, root: THREE.Object3D): boolean {
  for (let o = obj; o; o = o.parent) if (o === root) return true;
  return false;
}
/** 실제로 화면에 그려지는가 — 조상까지 확인한다. 숨긴 테마 그룹의 자식은 visible=true라서
 *  자기 플래그만 보면 다른 구간의 프롭이 차단물로 잡힌다 (5개 테마가 같은 좌표를 공유) */
function shown(obj: THREE.Object3D): boolean {
  for (let o: THREE.Object3D | null = obj; o; o = o.parent) if (!o.visible) return false;
  return true;
}
function occlusionReport() {
  return anomalies.map((a) => {
    const targets = refs.hit[a.effect];
    // 그룹 중심이 아니라 **개별 메시**마다 쏜다 — 눈(구 2개)·핏자국(점점이)처럼 부품이
    // 흩어진 대상은 바운딩박스 중심이 빈 공간이라 레이가 사이로 빠져나간다 (거짓 가림)
    const parts: THREE.Object3D[] = [];
    for (const t of targets) t.traverse((o) => { if ((o as THREE.Mesh).isMesh) parts.push(o); });
    let anyClear = false;
    let nearest = Infinity;
    let blockedAt: number | null = null;
    for (const p of parts) {
      aimBox.setFromObject(p);
      if (aimBox.isEmpty()) continue;
      aimBox.getCenter(aimCenter);
      nearest = Math.min(nearest, aimCenter.distanceTo(camera.position));
      occlRay.set(camera.position, aimCenter.clone().sub(camera.position).normalize());
      const hit = occlRay.intersectObject(scene, true).find((h) => shown(h.object));
      if (hit && targets.some((t) => isDescendant(hit.object, t))) anyClear = true;
      else if (blockedAt === null && hit) blockedAt = Math.round(hit.distance * 10) / 10;
    }
    return { id: a.id, rule: a.rule, parts: parts.length,
      dist: Math.round(nearest * 10) / 10, clear: anyClear,
      blockedAt: anyClear ? null : blockedAt };
  });
}

/** 확인 시도. force는 검증 훅 전용(?a= 디버그 한정) — 히트·거리 테스트를 생략한다 */
function tryPoint(px: number, py: number, force = false) {
  if (phase !== 'walk' || spotCooldown > 0) return;
  spotCooldown = CONFIG.spotCooldownSec;
  ndc.set((px / window.innerWidth) * 2 - 1, -(py / window.innerHeight) * 2 + 1);

  // 첫날 아침 — 무엇을 짚어도 무비용 (안전한 연습장. 어긋난 것은 밤에만 있다)
  if (walkMode === 'tutorial') {
    hud.say(TEXT.spotMorning, 2600);
    return;
  }

  // 직시 = 소멸 — 남은(미확인) 것만 다시 적용해 방금 본 것을 지운다
  // ("똑바로 보면 걷힌다" — 직시의 즉각 보상. avert 부류는 checked에 들어가지 않아 그대로 남는다)
  const dispel = () => {
    applyAnomalies(refs, anomalies.filter((x) => !checked.has(x.id)).map((x) => x.effect));
  };

  // 사람 형태를 짚는 것 = 손가락질. 최악의 대응이다 — 즉시 붙잡힌다 (avert 규칙)
  const avertHere = anomalies.find((a) => a.rule === 'avert');
  if (avertHere && (force || hitAnomaly(refs.hit[avertHere.effect]))) {
    void grabbed(TEXT.avertPoint); // force = 검증 훅 (?a= 한정) — 조준 없이 결정적으로 재현
    return;
  }

  const unchecked = anomalies.filter((a) => a.rule === 'gaze' && !checked.has(a.id));
  if (force && unchecked.length > 0) {
    checked.add(unchecked[0].id);
    dispel();
    hud.say(TEXT.spotOk, 3000);
    return;
  }
  for (const a of unchecked) {
    if (!hitAnomaly(refs.hit[a.effect])) continue;
    // 확인은 근접해야 성립 — 무서운 쪽으로 걸어가는 것이 이 게임의 공포 코어
    if (targetDistance(refs.hit[a.effect]) > CONFIG.checkDistance) {
      hud.say(TEXT.tooFar, 2200); // 비용 없음 — 다가가라는 지시일 뿐
      return;
    }
    checked.add(a.id);
    dispel(); // 트윈 없이 그냥 없어져 있다 — "원래 없던 것이다"
    hud.say(TEXT.spotOk, 3000);
    return;
  }
  // 흔적을 전부 직시한 뒤의 재지적은 무반응 (avert만 남은 구간에서는 빈 지적 비용이 그대로)
  if (anomalies.some((a) => a.rule === 'gaze') && unchecked.length === 0) return;
  // 빈 지적 — 과잉 의심의 비용. 통증과 함께 가로등이 어두워진다 (즉각 인과, theory §9)
  depth += CONFIG.wasteDepthCost;
  applyDepth(refs, depth);
  applyPain(depth);
  hud.say(TEXT.spotWaste, 3000);
  if (depth >= CONFIG.depthLimit) void softFail();
}

input.onPoint = (x, y) => tryPoint(x, y);

// ---------- 걷기 버튼 (모바일 #walk-btn) — 누르는 동안 전진 ----------
// 길이 직진뿐이라 조향이 필요 없다: 홀드 = 걷기, 손을 떼면 그 자리에서 관찰 (responsive-design §1)
// 달리기 없음 (v0.11.2) — 밀기 제스처도 함께 폐지, 조작은 홀드 하나뿐
const walkBtn = document.getElementById('walk-btn') as HTMLButtonElement | null;
if (walkBtn) {
  let walkPointer: number | null = null;
  const endWalk = (e: PointerEvent) => {
    if (e.pointerId !== walkPointer) return;
    walkPointer = null;
    input.touchForward = 0;
    walkBtn.classList.remove('held');
  };
  walkBtn.addEventListener('pointerdown', (e) => {
    walkPointer = e.pointerId;
    input.usesTouch = true;
    input.touchForward = 1;
    walkBtn.classList.add('held');
    walkBtn.setPointerCapture(e.pointerId);
  });
  walkBtn.addEventListener('pointerup', endWalk);
  walkBtn.addEventListener('pointercancel', endWalk);
}

// ---------- 이동/판정 ----------
const HW = CONFIG.corridorHalfWidth;
const L = CONFIG.segLength;

function updateWalk(dt: number) {
  elapsed += dt;
  const move = input.getMove();
  const moving = Math.abs(move.forward) + Math.abs(move.strafe) > 0.1;
  audio.update(dt, moving);

  // 새벽의 깊이 — 경과 시간 + 깊이에 따라 안개가 짙어진다 (affective §2-1, 수치 없이 체감으로).
  // 첫날 퇴근길은 옅은 낮 안개 고정 (setMorning 값)
  const baseFog = walkMode === 'tutorial'
    ? 0.008
    : 0.044 + Math.min(0.018, (elapsed / 60) * 0.0035) + Math.min(0.02, depth * 0.0035);
  // 터널 어둠 — 골목 끝(0)에서 터널 한가운데(1)로 갈수록 안개가 검게 차오른다 (v0.11.15).
  // 앞 터널(진입)과 뒤 터널(빠져나옴) 양쪽에서 같은 곡선을 쓰므로, 한가운데의 암흑을 사이에 두고
  // 들어간 만큼 나온다 — 전환은 그 암흑 속에서 일어나고 화면 컷은 없다
  const intoFront = Math.max(0, (-L - player.z) / TUNNEL_LEN);
  const intoBack = Math.max(0, player.z / TUNNEL_LEN);
  setTunnelDark(refs, Math.min(1, Math.max(intoFront, intoBack) * 2), baseFog);

  const sin = Math.sin(input.yaw);
  const cos = Math.cos(input.yaw);
  // 축마다 속도가 다르다 (v0.11.3): 전진 < 뒷걸음 < 좌우 순으로 굼뜨다 —
  // 앞으로 걷는 것 말고는 전부 답답해야 "도망칠 수 없는 길"이 된다
  const fwd = move.forward * CONFIG.walkSpeed * (move.forward < 0 ? CONFIG.backFactor : 1);
  const str = move.strafe * CONFIG.walkSpeed * CONFIG.strafeFactor;
  // 전방 = -Z (yaw=0 기준)
  player.x += (sin * -fwd + cos * str) * dt;
  player.z += (-cos * fwd - sin * str) * dt;

  // 골목 경계 — 양쪽 벽 사이 (샛길 없음)
  player.x = Math.max(-HW + 0.4, Math.min(HW - 0.4, player.x));
  // 뒤로는 갈 수 있다 — 다만 터널 깊숙이 들어가면 골목이 돌려세운다 (아래 turnedAround).
  // 안전망으로 막힌 끝 앞에서만 멈춘다 (연출이 안 걸리는 예외 상황 대비)
  player.z = Math.min(TUNNEL_LEN - 0.7, player.z);

  // 지적 쿨다운
  spotCooldown = Math.max(0, spotCooldown - dt);

  // ---------- 튜토리얼 자막 — 본 것을 본 자리에서 (v0.11.11) ----------
  // 한꺼번에 쏟지 않는다: 정류장에서 "힘든 하루였다", 신호등 앞에서 "현수막이 보인다",
  // 건너고 나서 "감자튀김이다". 걸음이 문장을 끌고 간다
  if (walkMode === 'tutorial') {
    while (tutBeat < TEXT.tutBeats.length && TEXT.tutBeats[tutBeat].theme < theme) tutBeat += 1;
    const beat = TEXT.tutBeats[tutBeat];
    if (beat && beat.theme === theme && player.z <= beat.z) {
      hud.say(beat.text, 3600);
      tutBeat += 1;
    }
  }

  // ---------- 차도 — 신호를 어기고 건너면 차가 지나간다 (v0.11.7) ----------
  // 기다리는 데 드는 시간이 이 게임 최초의 '자원'이다: 서 있으면 사람 형체에 취약해진다
  if (theme === 4) {
    const inRoad = player.z < STOP_LINE_Z && player.z > ROAD_Z - ROAD_HALF - 1;
    // 규칙은 세계의 것이다: **빨간불이 되면 차가 지나간다** — 내가 어겨서 부르는 게 아니라
    // 원래 그렇게 돈다 (v0.11.9). 그래서 서서 기다리는 동안 배울 수 있고, 길 위에 있으면 치인다.
    // 공정성: 초록에 출발하면 점멸 여유(2.5초 ≥ 횡단 2.1초) 덕에 반드시 건넌다 (§0).
    // 점멸에 늦게 출발하거나 길 위에서 멈춰 서면 걸린다 — 관찰과 통행이 부딪히는 지점
    const cycle = Math.floor(time / TRAFFIC_CYCLE);
    if (!isGreen(time) && carCycle !== cycle) {
      carCycle = cycle;
      startCar(refs, time, cycle % 2 === 0 ? 1 : -1); // 방향은 주기마다 번갈아
      audio.carPass(CAR_SEC); // 소리는 주행 시간과 같이 — 상수를 손대면 함께 따라온다
      if (walkMode !== 'tutorial' && inRoad) hud.say(TEXT.carComing, 2000);
    }
    // 치임 — 차가 통행부를 지나는데 아직 길 위에 있으면. **낮에도 접힌다** (v0.11.10):
    // 튜토리얼이 안전지대인 것은 '괴담'에 한해서고, 차는 낮에도 차다
    if (inRoad && carInCorridor(refs) && Math.abs(player.z - refs.car.position.z) < 2.4) {
      void hitByCar();
      return;
    }
  }

  // ---------- avert — 사람 형태를 화면에 담고 있으면 붙잡힌다 (v0.11.0 괴담 규칙) ----------
  // 공정성: ① 가까이(15m) + 화면 중앙(NDC 0.3) 안에서만 누적 ② 경고 자막이 먼저 뜬다
  // ③ 눈을 떼면 2배속으로 회복된다. 즉 "실수로 스쳐 본 것"으로는 걸리지 않는다
  let meeting = false;
  for (const a of DEBUG_NO_AVERT ? [] : anomalies) {
    if (a.rule !== 'avert') continue;
    const { dist, deg } = aimState(refs.hit[a.effect]);
    if (dist <= CONFIG.avertDistance && deg <= CONFIG.avertAngleDeg) {
      meeting = true;
      break;
    }
  }
  if (meeting) {
    stare += dt;
    if (!stareWarned && stare >= CONFIG.avertWarnSec) {
      stareWarned = true;
      hud.say(TEXT.avertWarn, 2400);
      audio.duck(true); // 정적 — 시각 단서의 청각 병행 (fear-cognition §8)
    }
    applyPain(depth + (stare / CONFIG.avertGrabSec) * 3); // 시야가 조여든다 (즉각 피드백)
    if (stare >= CONFIG.avertGrabSec) {
      void grabbed(TEXT.avertGrab);
      return;
    }
  } else if (stare > 0) {
    stare = Math.max(0, stare - dt * CONFIG.avertRecoverMul);
    applyPain(depth + (stare / CONFIG.avertGrabSec) * 3);
    if (stare === 0) {
      stareWarned = false;
      audio.duck(anomalies.length > 0);
    }
  }

  // 온보딩 힌트 — 걷기 힌트는 몇 걸음 걸으면 해제, 직시 힌트는 첫 흔적 접근 시 한 번
  if (stageOf(night).onboarding) {
    if (!onboard.move && onboard.hintZ - player.z > 6) {
      onboard.move = true;   // 6m를 직접 걸어보면 조작을 익힌 것으로 본다
      hud.hideHint();
    }
    if (onboard.move && !onboard.gaze) {
      const near = anomalies.some(
        (a) => a.rule === 'gaze' && !checked.has(a.id) &&
          targetDistance(refs.hit[a.effect]) < 12,
      );
      if (near) {
        onboard.gaze = true;
        hud.showHint(usesTouch() ? TEXT.hintGazeTouch : TEXT.hintGazePc, 5600);
      }
    }
    // 사람 형태 첫 조우 — 붙잡히기 전에(응시 누적 거리 11m보다 멀리서) 규칙을 알려준다
    if (onboard.move && !onboard.avert) {
      const near = anomalies.some(
        (a) => a.rule === 'avert' && targetDistance(refs.hit[a.effect]) < 18,
      );
      if (near) {
        onboard.avert = true;
        hud.showHint(TEXT.hintAvert, 6000);
      }
    }
  }

  // 뒤 터널 깊숙이 — 골목이 돌려세운다 (전환 직후 나오는 지점 0.5T보다 깊은 0.62T에서만)
  if (player.z >= TUNNEL_LEN * 0.62) {
    void turnedAround();
    return;
  }

  // 구간 통과 — 개구부를 지나 **다리 밑 터널**로 들어가고, 그 한가운데서 넘어간다 (v0.11.14).
  // 순간이동 대신 실제로 지나가는 공간을 둔다: 좁고 낮고 어두운 터널이 두 골목을 잇는다
  if (player.z < TUNNEL_SWAP_Z && Math.abs(player.x) < MAIN_GAP_HALF + 0.4) {
    void passSegment();
    return;
  }
  // 끝벽 통과 방지 (개구부 밖) — 0.5m 앞에서 멈춘다: 갱구 기둥이 끝벽보다 0.3m 나와 있다
  if (player.z < -L + 0.5 && Math.abs(player.x) >= MAIN_GAP_HALF) player.z = -L + 0.5;
  // 뒤 끝벽도 **같은 규칙·같은 거리** — 앞뒤 갱구가 대칭이므로 판정도 대칭이다 (v0.11.22)
  if (player.z > -0.5 && Math.abs(player.x) >= MAIN_GAP_HALF) player.z = -0.5;
  // 터널 안에서는 폭이 옹벽 안쪽면(TUNNEL_IN_HALF)보다 좁아야 한다 —
  // 기존 한계(1.65)는 옹벽 안쪽면(1.5)보다 넓어서 카메라가 콘크리트에 0.15m 박혔다 (v0.11.21).
  // 개구부(1.4)로만 들어올 수 있으므로 여기서 좁혀도 튀는 이동이 없다
  if (player.z < -L || player.z > 0) {
    const half = TUNNEL_IN_HALF - 0.25;
    player.x = Math.max(-half, Math.min(half, player.x));
  }

  camera.position.set(player.x, 1.65, player.z);
  camera.rotation.set(0, 0, 0);
  camera.rotateY(input.yaw);
  camera.rotateX(input.pitch);
}

// ---------- 루프 ----------
let time = 0;
function tick() {
  const dt = Math.min(clock.getDelta(), 0.1); // 백그라운드 복귀 시 델타 클램프 (responsive-design §4)
  time += dt;
  if (phase === 'walk') updateWalk(dt);
  hud.setReticle(phase === 'walk'); // 지적 크로스헤어 — 걷는 동안만
  updateWorld(refs, time);
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

// ---------- 일시정지 (뒤로가기·복귀 처리) ----------
async function pauseGame() {
  if (phase !== 'walk' || pausing) return;
  pausing = true;
  phase = 'transition';
  audio.suspend();
  await hud.blackScreen('…잠깐 골목 구석에서 숨을 골랐다.', '계속 걷는다');
  audio.resume();
  input.activate();
  phase = 'walk';
  pausing = false;
}

// ---------- 타이틀 게이트 (2026-08-02 컨셉 전환: 프롤로그 폰 시퀀스 제거 — 타이틀 단일 화면) ----------
// 전제 전달은 타이틀 한 줄(FF-1204 도장 이벤트)과 첫날 퇴근길 튜토리얼이 담당 (story.md §2)
startOverlay.classList.remove('hidden');

// ---------- 설정 패널 접기/펼치기 (시작 화면) ----------
const settingsPanel = document.getElementById('settings-panel');
document.getElementById('settings-btn')?.addEventListener('click', () => {
  settingsPanel?.classList.toggle('open');
});

// ---------- 이어하기 안내 · 기록 삭제 (시작 화면) ----------
const continueEl = document.getElementById('continue-info');
const resetBtn = document.getElementById('reset-btn') as HTMLButtonElement | null;
const RESET_LABEL = '기록 삭제 · 처음부터';

function refreshContinueUi() {
  if (!continueEl || !resetBtn) return;
  const show = hasProgress();
  continueEl.style.display = show ? 'block' : 'none';
  resetBtn.style.display = show ? 'inline-block' : 'none';
  if (show) {
    const misses = save.misses > 0 ? ` 그동안 ${save.misses}번, 골목 입구로 돌아왔다.` : '';
    continueEl.textContent = `이어하기 — ${TEXT.nightLabel(save.night)}.${misses}`;
  }
  // 시작 지점이 다르다: 첫 방문은 퇴근길 정류장 / 이어하기는 가게 앞 (v0.11.5)
  const startBtn = document.getElementById('start-btn');
  if (startBtn) startBtn.textContent = save.tut ? TEXT.startBtnResume : TEXT.startBtnFirst;
  refreshCoupon();
}

/** 쿠폰 도장 카드 — 지난 밤 수만큼 도장. 6개째부터는 칸 밖 (밤 6+ 무한 모드의 조용한 어긋남).
 *  재방문(진행 있음)에만 표시 — 첫 방문 타이틀은 전제 한 줄만 (v0.9.1 타이틀 다이어트) */
function refreshCoupon() {
  const couponEl = document.getElementById('coupon');
  const stampsEl = document.querySelector('#coupon .c-stamps');
  const noteEl = document.querySelector('#coupon .c-note');
  if (!couponEl || !stampsEl || !noteEl) return;
  couponEl.style.display = save.night > 1 ? 'flex' : 'none';
  const got = save.night - 1;
  const filled = Math.min(got, STAGE_COUNT);
  stampsEl.innerHTML =
    '●'.repeat(filled) +
    `<span class="empty">${'○'.repeat(STAGE_COUNT - filled)}</span>` +
    (got > STAGE_COUNT ? ' ●' : ''); // 칸 밖 도장
  noteEl.textContent = got > STAGE_COUNT ? TEXT.couponOverflow : '밤마다 하나씩';
}

let resetArmed = false;
resetBtn?.addEventListener('click', () => {
  if (!resetArmed) {
    // 실수 방지 이중 확인 — confirm() 대신 버튼 자체가 되묻는다
    resetArmed = true;
    resetBtn.textContent = '정말 삭제할까요? (한 번 더 누르면 삭제)';
    return;
  }
  resetSave();
  resetArmed = false;
  resetBtn.textContent = RESET_LABEL;
  night = save.night;
  if (brightEl) {
    brightEl.value = String(save.brightness);
    renderer.toneMappingExposure = save.brightness * EXPOSURE_BASE;
  }
  applyMute(); // 음소거 설정도 기본값으로 되돌아감
  refreshContinueUi();
});
refreshContinueUi();

// ---------- 시작 게이트 (오디오/포인터락용 사용자 제스처) ----------
document.getElementById('start-btn')!.addEventListener('click', async () => {
  // 재실행 차단: 숨긴 타이틀 버튼이 키보드 포커스를 쥔 채 남아 있으면 게임 중 Space·Enter가
  // 이 핸들러를 다시 부른다 (pointer-events:none은 마우스만 막는다 — 걷던 중 구간이 리셋됨)
  if (started) return;
  const overlay = document.getElementById('start')!;
  overlay.classList.add('hidden');
  started = true;
  (document.activeElement as HTMLElement | null)?.blur(); // 포커스 해제 — 오발 입력의 근본 차단
  audio.start(); // 사용자 제스처에서 오디오 활성화 (responsive-design §4)
  input.activate();
  requestWakeLock(); // 플레이 중 화면 꺼짐 방지 (지원 브라우저 한정, 실패 무시)
  // 뒤로가기 트랩: 상태를 하나 쌓아두고, popstate가 오면 다시 쌓으며 일시정지로 전환
  history.pushState({ fries: 1 }, '');
  await startDay(); // 첫날 아침(튜토리얼) → 밤 1 귀갓길 → 이후 밤 편도 (v0.10.0)
});

// Android 뒤로가기 / 브라우저 백버튼 → 게임 이탈 대신 일시정지
window.addEventListener('popstate', () => {
  if (!started) return;
  history.pushState({ fries: 1 }, '');
  void pauseGame();
});

// 진행 중 새로고침·탭 닫기 실수 방지 (걷는 중일 때만 — 오버레이 화면에서는 방해하지 않음)
window.addEventListener('beforeunload', (e) => {
  if (started && phase === 'walk') e.preventDefault();
});

// 화면 꺼짐 방지 (Wake Lock — responsive-design §4)
// 백그라운드 진입 시 브라우저가 자동 해제하므로 참조 보관 불필요 — 복귀 시 재요청만 한다
function requestWakeLock() {
  const nav = navigator as Navigator & { wakeLock?: { request(type: 'screen'): Promise<unknown> } };
  nav.wakeLock?.request('screen').catch(() => {}); // 미지원/거부 — 조용히 무시
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clock.stop();
    audio.suspend();
  } else {
    clock.start();
    audio.resume();
    if (started) requestWakeLock();
  }
});

// iOS 스와이프로 떠났다가 bfcache로 복귀한 경우 (visibilitychange가 안 올 수 있음)
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    clock.start();
    audio.resume();
    if (started) requestWakeLock();
  }
});

// 핀치 줌(iOS)·길게 눌러 컨텍스트 메뉴 차단
document.addEventListener('gesturestart', (e) => e.preventDefault());
renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// 헤드리스 플레이테스트 훅 — 상태 읽기 전용 (development.md '검증 방법', 밸런싱 실측용)
// 예외: debugSpot은 ?a= 디버그 모드 한정의 검증용 조작 훅 (지적을 결정적으로 재현)
(window as unknown as Record<string, unknown>).__fries = {
  state: () => ({
    phase, mode: walkMode, night, done, total, theme, depth, folds, swarm,
    active: anomalies.length, checked: checked.size,
    avert: anomalies.filter((a) => a.rule === 'avert').length,
    stare: Math.round(stare * 100) / 100,
    green: isGreen(time),                                        // 보행 신호 (차도 검증용)
    carX: refs.car.visible ? Math.round(refs.car.position.x * 10) / 10 : null,
    elapsed: Math.round(elapsed * 10) / 10,
    x: Math.round(player.x * 100) / 100, z: Math.round(player.z * 100) / 100,
  }),
  // verify.mjs가 좌표·목표치를 여기서 파생시킨다 — 게임 상수를 스크립트에 손으로 복사하지 않기 위함
  config: () => ({ ...CONFIG }),
  ...(DEBUG_ANOMALY !== null
    ? {
        debugSpot: () => tryPoint(window.innerWidth / 2, window.innerHeight / 2, true),
        occlusion: () => occlusionReport(), // 가림 검사 (배치 3원칙 ② 검증)
      }
    : {}),
};

camera.position.set(0, 1.65, 0);
tick();
