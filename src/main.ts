// 튀김이 식기 전에 — M0 그레이박스 프로토타입
// 구간 프리팹 1개 재활용 + 본길/샛길 우회 판정 + 왕복 + 온도 게이지 (docs/game.md)

import * as THREE from 'three';
import { ANOMALIES, CONFIG, TEXT, type AnomalyDef } from './data';
import { Input } from './input';
import { Hud } from './hud';
import { AudioEngine } from './audio';
import { createWorld, applyAnomaly, setShopNear, updateLamp, SIDE_GAP, MAIN_GAP_HALF } from './world';
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
  renderer.toneMappingExposure = save.brightness;
  brightEl.addEventListener('pointerdown', peekOn);
  window.addEventListener('pointerup', peekOff);
  window.addEventListener('pointercancel', peekOff);
  brightEl.addEventListener('input', () => {
    renderer.toneMappingExposure = parseFloat(brightEl.value);
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
let segment = 1;            // 1..CONFIG.segments
let returning = false;
let temp = CONFIG.tempMax;
let elapsed = 0;            // 이 밤의 경과 시간(초) — 새벽이 깊을수록 위험
let anomaly: AnomalyDef | null = null;
let lastAnomalyId: string | null = null;
let tripAnomalies = 0; // 이번 편도에서 등장한 이상 수 (밤 1 온보딩 보장용)

const player = { x: 0, z: 0 };

function anomalyChance(): number {
  return Math.min(0.8, CONFIG.baseAnomalyChance + (elapsed / 60) * CONFIG.chancePerMinute);
}

function rollSegment() {
  // 온보딩 보장 (game-design-theory §6): 밤 1 첫 구간은 반드시 정상 —
  // "정상 상태의 학습"이 먼저 (fear-cognition §1: 이상현상 = 학습된 정상의 위반)
  const forceNormal = night === 1 && !returning && segment === 1;
  // 밤 1 편도 막바지까지 이상이 한 번도 없었다면 강제 등장 (문법 학습 보장)
  const forceAnomaly =
    night === 1 && !returning && segment >= CONFIG.segments - 1 && tripAnomalies === 0;

  if (!forceNormal && (forceAnomaly || Math.random() < anomalyChance())) {
    // 같은 이상현상 연속 등장 방지 (docs/anomalies.md 밸런싱)
    const pool = ANOMALIES.filter((a) => a.id !== lastAnomalyId);
    anomaly = pool[Math.floor(Math.random() * pool.length)];
    lastAnomalyId = anomaly.id;
    tripAnomalies += 1;
  } else {
    anomaly = null;
  }
  applyAnomaly(refs, anomaly ? anomaly.effect : null);
  // '정적' — 이상 구간에서 환경음이 잦아든다 (fear-cognition §8, 시각 단서의 청각 병행)
  audio.duck(!!anomaly);
  setShopNear(refs, !returning && segment === CONFIG.segments);

  player.x = 0;
  player.z = 0;
  input.yaw = 0;
  input.pitch = 0;

  hud.setStatus(`${TEXT.nightLabel(night)} — ${TEXT.segLabel(segment, CONFIG.segments, returning)}`);
}

async function startNight() {
  segment = 1;
  returning = false;
  temp = CONFIG.tempMax;
  elapsed = 0;
  lastAnomalyId = null;
  tripAnomalies = 0;
  hud.showTemp(false);
  rollSegment();
  phase = 'walk';
  hud.say(TEXT.intros[Math.min(night - 1, TEXT.intros.length - 1)]);
}

async function failNight() {
  phase = 'transition';
  save.misses += 1; // 노미스 히든 엔딩 판정용 (game.md 엔딩)
  persist();
  const reveal = anomaly ? anomaly.reveal : '';
  await hud.fadeOut(900);
  await hud.blackScreen(`${reveal}\n\n${TEXT.fail}`, '…다시 나간다');
  input.activate(); // 포인터락 재획득
  await startNight();
  await hud.fadeIn(900);
}

async function reachShop() {
  phase = 'transition';
  await hud.fadeOut(800);
  await hud.blackScreen(`${TEXT.shopArrive}\n\n${TEXT.shopBuy}`, '봉투를 받는다 (3,200원)');
  input.activate();
  returning = true;
  segment = CONFIG.segments;
  tripAnomalies = 0;
  hud.showTemp(true);
  hud.setTemp(1);
  rollSegment();
  hud.say(TEXT.returnStart);
  phase = 'walk';
  await hud.fadeIn(800);
}

async function reachHome() {
  phase = 'transition';
  await hud.fadeOut(1000);
  audio.crunch(temp / CONFIG.tempMax); // 시식 — Peak-End의 End (affective §1-4)
  const taste: TasteResult =
    temp >= CONFIG.crispyThreshold ? 'crispy' :
    temp >= CONFIG.lukewarmThreshold ? 'lukewarm' :
    'soggy';
  const result =
    taste === 'crispy' ? TEXT.resultCrispy :
    taste === 'lukewarm' ? TEXT.resultLukewarm :
    TEXT.resultSoggy;
  save.results[night - 1] = taste; // 밤별 시식 기록 — 기기 내 저장
  save.night = night + 1;
  persist();
  // "온도"가 아니라 "바삭함" — 손실 프레이밍, 게이지 라벨과 일관 (affective §1-4)
  await hud.blackScreen(`🍟 바삭함 ${Math.round(temp)}%\n\n${result}`, `밤 ${night + 1}로`);
  input.activate();
  night += 1;
  await startNight();
  await hud.fadeIn(900);
}

/** 구간 통과 처리. side=샛길 경유 여부 */
async function passSegment(side: boolean) {
  if (side) {
    if (anomaly) {
      hud.say(TEXT.sideSafe);
    } else {
      hud.say(returning ? TEXT.sideWasteReturn : TEXT.sideWaste);
      if (returning) temp -= CONFIG.sidePathTempCost;
      else elapsed += CONFIG.sidePathTimeCost;
    }
    if (returning) temp -= CONFIG.sidePathTempCost * 0.5; // 샛길은 기본적으로 느리다
  } else if (anomaly) {
    await failNight();
    return;
  }

  const last = returning ? segment <= 1 : segment >= CONFIG.segments;
  if (last) {
    if (returning) await reachHome();
    else await reachShop();
    return;
  }
  segment += returning ? -1 : 1;
  rollSegment();
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

  // 새벽의 깊이 — 경과 시간에 따라 안개가 짙어진다 (affective §2-1, 수치 없이 체감으로)
  (scene.fog as THREE.FogExp2).density = 0.052 + Math.min(0.018, (elapsed / 60) * 0.0035);

  const sin = Math.sin(input.yaw);
  const cos = Math.cos(input.yaw);
  // 전방 = -Z (yaw=0 기준)
  player.x += (sin * -move.forward + cos * move.strafe) * speed * dt;
  player.z += (-cos * move.forward - sin * move.strafe) * speed * dt;

  // 골목 경계 (샛길 개구부 구간에서는 왼쪽 초과 허용)
  const inSideGap = player.z < SIDE_GAP.zNear && player.z > SIDE_GAP.zFar;
  const minX = inSideGap ? -HW - 8 : -HW + 0.4;
  player.x = Math.max(minX, Math.min(HW - 0.4, player.x));
  player.z = Math.min(0.5, player.z);

  // 판정 트리거 (docs/development.md)
  if (player.x < -HW - 5) {
    void passSegment(true); // 샛길 통과
    return;
  }
  if (player.z < -L - 0.5 && Math.abs(player.x) < MAIN_GAP_HALF + 0.4) {
    void passSegment(false); // 본길 통과
    return;
  }
  // 끝벽 통과 방지 (개구부 밖)
  if (player.z < -L + 0.4 && Math.abs(player.x) >= MAIN_GAP_HALF) player.z = -L + 0.4;

  // 귀갓길 온도
  if (returning) {
    temp -= CONFIG.tempDecayPerSec * dt;
    hud.setTemp(temp / CONFIG.tempMax);
    if (temp <= 0) {
      temp = 0;
      void reachHome(); // 완전히 식으면 그냥 눅눅 엔딩으로
      return;
    }
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
  updateLamp(refs, time);
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
    const misses = save.misses > 0 ? ` 그동안 ${save.misses}번, 침대에서 눈을 떴다.` : '';
    continueEl.textContent = `이어하기 — 밤 ${save.night}.${misses}`;
  }
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
    renderer.toneMappingExposure = save.brightness;
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

camera.position.set(0, 1.65, 0);
tick();
