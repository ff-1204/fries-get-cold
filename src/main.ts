// 튀김이 식기 전에 — 접히는 골목 (docs/game.md 판정)
// 직진 + 확인(무섭지만 다가가서 짚어야 한다) + 접힘(지나침=연장+증식) + 깊이(가로등 소등·soft fail)

import * as THREE from 'three';
import { ANOMALIES, CONFIG, TEXT, type AnomalyDef } from './data';
import { tasteFromFolds, activeCount } from './balance';
import { Input } from './input';
import { Hud } from './hud';
import { AudioEngine } from './audio';
import {
  createWorld, applyAnomalies, applyDepth, setFoldMark, setShopNear, setSegmentTheme,
  updateWorld, MAIN_GAP_HALF, SPAWN_ANCHORS,
} from './world';
import { save, persist, resetSave, hasProgress, type TasteResult } from './save';

type Phase = 'gate' | 'walk' | 'transition';

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
const DEBUG_ANOMALY = new URLSearchParams(location.search).get('a');

function rollSegment(foldStatus = false) {
  setSegmentTheme(refs, theme); // 구간 테마 (원룸/상가/놀이터/정류장/먹자골목)

  // 이 테마·이 밤에 가능한 풀 — 테마 사물 고정형 + 스폰 포인트 랜덤형(segment 0)
  // 같은 이상현상 연속 등장 방지 (공정성 — 접힘 반복 구간에서 특히 중요)
  const pool = ANOMALIES.filter(
    (a) => (a.segment === theme || a.segment === 0) && a.night <= night && !lastIds.has(a.id),
  );

  // 온보딩 보장 (game-design-theory §6): 밤 1 첫 구간은 반드시 정상 —
  // "정상 상태의 학습"이 먼저 (fear-cognition §1: 이상현상 = 학습된 정상의 위반)
  const forceNormal = !DEBUG_ANOMALY && night === 1 && done === 0;
  // 밤 1 막바지까지 이상이 한 번도 없었다면 강제 등장 (문법 학습 보장)
  const forceAnomaly = night === 1 && theme >= CONFIG.segments - 1 && tripAnomalies === 0;

  if (DEBUG_ANOMALY) {
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
      DEBUG_ANOMALY ? 2 : Math.floor(Math.random() * SPAWN_ANCHORS.length);
  }
  applyDepth(refs, depth);            // 꺼져가는 빛 — 이상 리셋보다 먼저 (lampBase 기준 제공)
  applyAnomalies(refs, anomalies.map((a) => a.effect));
  setFoldMark(refs, foldRepeat);      // 접힘 반복 구간 — 바닥 분필 자국 (인지 4요소 ④)
  // '정적' — 이상 구간에서 환경음이 잦아든다 (fear-cognition §8, 시각 단서의 청각 병행)
  audio.duck(anomalies.length > 0);
  setShopNear(refs, done === total - 1); // 마지막 걸음에서만 버거집 간판·불빛

  player.x = 0;
  player.z = 0;
  input.yaw = 0;
  input.pitch = 0;

  const label = `${TEXT.nightLabel(night)} — ${TEXT.segLabel(done + 1, total, theme)}`;
  if (foldStatus) hud.setStatusFold(label); // 접힘 — 카운터 강조 교체 (인지 4요소 ①)
  else hud.setStatus(label);
}

async function startNight() {
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
  rollSegment();
  phase = 'walk';
  hud.say(TEXT.intros[Math.min(night - 1, TEXT.intros.length - 1)]);
}

/** 깊이 한계 — 죽음이 아니라 골목 입구 리셋 (soft fail 설계: 실패조차 암전, design-principles §1) */
async function softFail() {
  phase = 'transition';
  await hud.fadeOut(1400);
  await hud.blackScreen(TEXT.softFail, TEXT.softFailBtn);
  input.activate(); // 포인터락 재획득
  await startNight(); // 같은 밤을 처음부터 — 배운 채로 다시 걷는다 (theory §9 자비 설계)
  await hud.fadeIn(900);
}

/** 버거집 도착 = 밤의 끝. 귀가는 컷으로 (귀갓길 실주행은 밤 5 세트피스에 아껴둔다 — M3) */
async function reachShop() {
  phase = 'transition';
  await hud.fadeOut(800);
  await hud.blackScreen(`${TEXT.shopArrive}\n\n${TEXT.shopBuy}`, '봉투를 받는다 (3,200원)');
  const taste: TasteResult = tasteFromFolds(folds); // 감자튀김은 접힘 횟수를 비추는 서사 (balance.ts)
  const result =
    taste === 'crispy' ? TEXT.resultCrispy :
    taste === 'lukewarm' ? TEXT.resultLukewarm :
    TEXT.resultSoggy;
  save.results[night - 1] = taste; // 밤별 기록 — 기기 내 저장 (연출 도중 이탈 대비, 먼저 저장)
  save.night = night + 1;
  persist();
  // 시식 — 매 밤의 End이므로 가장 정성스러운 순간이어야 한다 (affective §1-4 Peak-End)
  // 귀가 컷 → 결과별 틴트에서 한 입씩(입마다 크런치) → 밤별 마무리 모놀로그
  await hud.blackScreen(TEXT.homeArrive, TEXT.homeOpen);
  const q = taste === 'crispy' ? 0.95 : taste === 'lukewarm' ? 0.55 : 0.25;
  // 도장 진행 — 시식 화면 상단 한 줄 (개업 이벤트. 밤 6+는 칸이 없다 — 조용한 어긋남)
  const stampLine =
    night > 5
      ? '…도장 찍을 칸이, 이제 없다'
      : `도장 ${'●'.repeat(night)}${'○'.repeat(5 - night)}`;
  await hud.tasteScene({
    gauge: `${TEXT.tasteGauge[taste]} · ${stampLine}`,
    result,
    epilogue: TEXT.epilogues[Math.min(night - 1, TEXT.epilogues.length - 1)],
    endLabel: TEXT.tasteEnd,
    // 시식(성공)의 감정 좌표 = 긍정·저각성 → 웜 틴트, 식었으면 한랭 (affective §1-2)
    bg: taste === 'crispy' ? '#181008' : taste === 'lukewarm' ? '#100e12' : '#0a0d16',
    onBite: (bite) => audio.crunch(Math.max(0.05, q * (1 - bite * 0.18))),
  });
  input.activate();
  night += 1;
  await startNight();
  await hud.fadeIn(900);
}

/** 구간 통과 처리 — 출구는 하나뿐. 판정은 이미 걷는 동안 끝났다(전부 확인했는가) */
async function passSegment() {
  let repeat = false;
  const missed = anomalies.filter((a) => !checked.has(a.id));

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
    await reachShop();
    return;
  }
  foldRepeat = repeat;
  if (!repeat) theme = Math.min(theme + 1, CONFIG.segments); // 접힘은 같은 테마를 반복
  rollSegment(repeat);
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

/** 확인 시도. force는 검증 훅 전용(?a= 디버그 한정) — 히트·거리 테스트를 생략한다 */
function tryPoint(px: number, py: number, force = false) {
  if (phase !== 'walk' || spotCooldown > 0) return;
  spotCooldown = CONFIG.spotCooldownSec;
  ndc.set((px / window.innerWidth) * 2 - 1, -(py / window.innerHeight) * 2 + 1);

  const unchecked = anomalies.filter((a) => !checked.has(a.id));
  if (force && unchecked.length > 0) {
    checked.add(unchecked[0].id);
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
    checked.add(a.id); // 이상은 사라지지 않는다 — 확인했다는 사실만 남는다 (트윈 금지)
    hud.say(TEXT.spotOk, 3000);
    return;
  }
  if (anomalies.length > 0 && unchecked.length === 0) return; // 전부 확인됨 — 재지적 무반응
  // 빈 지적 — 과잉 의심의 비용. 가로등이 그 자리에서 어두워진다 (즉각 인과, theory §9)
  depth += CONFIG.wasteDepthCost;
  applyDepth(refs, depth);
  hud.say(TEXT.spotWaste, 3000);
  if (depth >= CONFIG.depthLimit) void softFail();
}

input.onPoint = (x, y) => tryPoint(x, y);

// ---------- 걷기 버튼 (모바일 #walk-btn) — 누르는 동안 전진, 위로 밀면 달리기 ----------
// 길이 직진뿐이라 조향이 필요 없다: 홀드 = 걷기, 손을 떼면 그 자리에서 관찰 (responsive-design §1)
const walkBtn = document.getElementById('walk-btn') as HTMLButtonElement | null;
if (walkBtn) {
  let walkPointer: number | null = null;
  let walkY0 = 0;
  const endWalk = (e: PointerEvent) => {
    if (e.pointerId !== walkPointer) return;
    walkPointer = null;
    input.touchForward = 0;
    input.touchRun = false;
    walkBtn.classList.remove('held', 'run');
    walkBtn.textContent = '걷는다';
  };
  walkBtn.addEventListener('pointerdown', (e) => {
    walkPointer = e.pointerId;
    walkY0 = e.clientY;
    input.usesTouch = true;
    input.touchForward = 1;
    walkBtn.classList.add('held');
    walkBtn.setPointerCapture(e.pointerId);
  });
  walkBtn.addEventListener('pointermove', (e) => {
    if (e.pointerId !== walkPointer) return;
    const run = walkY0 - e.clientY > 48; // 위로 밀기 = 달리기
    if (run !== input.touchRun) {
      input.touchRun = run;
      walkBtn.classList.toggle('run', run);
      walkBtn.textContent = run ? '달린다' : '걷는다';
    }
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
  const speed = move.run ? CONFIG.runSpeed : CONFIG.walkSpeed;
  const moving = Math.abs(move.forward) + Math.abs(move.strafe) > 0.1;
  audio.update(dt, moving, move.run);

  // 새벽의 깊이 — 경과 시간 + 깊이에 따라 안개가 짙어진다 (affective §2-1, 수치 없이 체감으로)
  (scene.fog as THREE.FogExp2).density =
    0.044 + Math.min(0.018, (elapsed / 60) * 0.0035) + Math.min(0.02, depth * 0.0035);

  const sin = Math.sin(input.yaw);
  const cos = Math.cos(input.yaw);
  // 전방 = -Z (yaw=0 기준)
  player.x += (sin * -move.forward + cos * move.strafe) * speed * dt;
  player.z += (-cos * move.forward - sin * move.strafe) * speed * dt;

  // 골목 경계 — 양쪽 벽 사이 (샛길 없음)
  player.x = Math.max(-HW + 0.4, Math.min(HW - 0.4, player.x));
  player.z = Math.min(0.5, player.z);

  // 지적 쿨다운
  spotCooldown = Math.max(0, spotCooldown - dt);

  // 구간 통과 트리거 — 끝 벽 개구부
  if (player.z < -L - 0.5 && Math.abs(player.x) < MAIN_GAP_HALF + 0.4) {
    void passSegment();
    return;
  }
  // 끝벽 통과 방지 (개구부 밖)
  if (player.z < -L + 0.4 && Math.abs(player.x) >= MAIN_GAP_HALF) player.z = -L + 0.4;

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

// ---------- 프롤로그 (story.md §2 — 이불 속 배달 앱. 첫 시작에만) ----------
// 감정 좌표: 나른한 욕구, 긍정·저각성 (affective §1-2) — 느린 페이드만, 팝 금지
const wakeEl = document.getElementById('wake')!;
const prologueEl = document.getElementById('prologue')!;
const phoneEl = document.getElementById('phone')!;
const prologueMsg = document.getElementById('prologue-msg')!;
const prologueBtn = document.getElementById('prologue-btn') as HTMLButtonElement;

function showTitleGate() {
  startOverlay.classList.remove('hidden'); // 문이 열리면 — 타이틀 (story.md)
}

if (hasProgress()) {
  showTitleGate(); // 이어하기 — 프롤로그 생략
} else {
  wakeEl.classList.remove('hidden');
}

document.getElementById('wake-btn')!.addEventListener('click', () => {
  wakeEl.classList.add('hidden');
  prologueEl.classList.remove('hidden');
  setTimeout(() => phoneEl.classList.add('on'), 500);
});

let prologueStage = 0;
prologueBtn.addEventListener('click', () => {
  if (prologueStage === 0) {
    // 화면을 끈다 → 정적 → (참지 못하고) 다시 켠다
    prologueStage = 1;
    phoneEl.classList.remove('on');
    prologueBtn.style.visibility = 'hidden';
    setTimeout(() => {
      phoneEl.classList.add('on');
      prologueBtn.textContent = '…다시 끈다';
      prologueBtn.style.visibility = 'visible';
    }, 2600);
  } else if (prologueStage === 1) {
    prologueStage = 2;
    phoneEl.classList.remove('on');
    prologueBtn.style.visibility = 'hidden';
    setTimeout(() => {
      prologueMsg.textContent = '"배달이 안 되는 24시 튀김집이라니. 좀 아니지."';
      prologueMsg.style.opacity = '1';
      prologueBtn.textContent = '이불을 걷는다';
      prologueBtn.style.visibility = 'visible';
    }, 1100);
  } else {
    prologueEl.classList.add('hidden');
    showTitleGate();
  }
});

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
    continueEl.textContent = `이어하기 — 밤 ${save.night}.${misses}`;
  }
  refreshCoupon();
}

/** 쿠폰 도장 카드 — 지난 밤 수만큼 도장. 6개째부터는 칸 밖 (밤 6+ 무한 모드의 조용한 어긋남) */
function refreshCoupon() {
  const stampsEl = document.querySelector('#coupon .c-stamps');
  const noteEl = document.querySelector('#coupon .c-note');
  if (!stampsEl || !noteEl) return;
  const got = save.night - 1;
  const filled = Math.min(got, 5);
  stampsEl.innerHTML =
    '●'.repeat(filled) +
    `<span class="empty">${'○'.repeat(5 - filled)}</span>` +
    (got > 5 ? ' ●' : ''); // 여섯 번째 — 칸 밖
  noteEl.textContent = got > 5 ? TEXT.couponOverflow : '도장 5개 — L 사이즈 무료';
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
  const overlay = document.getElementById('start')!;
  overlay.classList.add('hidden');
  started = true;
  audio.start(); // 사용자 제스처에서 오디오 활성화 (responsive-design §4)
  input.activate();
  requestWakeLock(); // 플레이 중 화면 꺼짐 방지 (지원 브라우저 한정, 실패 무시)
  // 뒤로가기 트랩: 상태를 하나 쌓아두고, popstate가 오면 다시 쌓으며 일시정지로 전환
  history.pushState({ fries: 1 }, '');
  if (input.usesTouch || 'ontouchstart' in window) hud.showTouchHint();
  await startNight();
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
    phase, night, done, total, theme, depth, folds, swarm,
    active: anomalies.length, checked: checked.size,
    elapsed: Math.round(elapsed * 10) / 10,
    x: Math.round(player.x * 100) / 100, z: Math.round(player.z * 100) / 100,
  }),
  // verify.mjs가 좌표·목표치를 여기서 파생시킨다 — 게임 상수를 스크립트에 손으로 복사하지 않기 위함
  config: () => ({ ...CONFIG }),
  ...(DEBUG_ANOMALY !== null
    ? { debugSpot: () => tryPoint(window.innerWidth / 2, window.innerHeight / 2, true) }
    : {}),
};

camera.position.set(0, 1.65, 0);
tick();
