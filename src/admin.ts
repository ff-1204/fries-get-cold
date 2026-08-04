// 관리자(디버그) 모드 — Ctrl + Space Space 로 켜고 끈다.
//
// 설계 원칙 하나: **이 파일 하나가 전부다.** 스타일·DOM·입력·비행·패널을 스스로 만들어 붙인다.
// index.html에도 hud.ts에도 관리자용 흔적이 없다 — 지우려면 이 파일과 main.ts의 다섯 줄이면 된다.
// (배포 빌드에도 들어가지만 조합키를 모르면 켜지지 않는다. 저장하지 않으므로 새로고침하면 꺼진다)
//
// 왜 좌표를 `-L*0.32` 꼴로도 찍는가: 월드 코드가 위치를 전부 그렇게 쓴다
// (`box(..., -L * 0.32, t4)`). 미터만 보여주면 소스에서 그 물건을 찾을 수 없다 —
// 화면에서 본 것을 **그대로 grep할 수 있는 형태**로 내주는 것이 이 도구의 핵심이다.

import * as THREE from 'three';

export interface AdminSnapshot {
  night: number;
  done: number;
  total: number;
  theme: number;
  depth: number;
  stretches: number;
  morning: boolean;
}

export interface AdminJump {
  night?: number;
  theme?: number;
  morning?: boolean;
  depth?: number;
  /** null = 강제 해제(정상 확률) · 'none' = 항상 정상 · 그 외 = 해당 effect 강제 */
  effect?: string | null;
}

export interface AdminHost {
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  segLength: number; // L
  corridorHalfWidth: number; // HW
  anomalies: Array<{ id: string; effect: string; segment: number; label: string }>;
  segments: number;
  snapshot(): AdminSnapshot;
  jump(j: AdminJump): void;
  /** 패널을 닫을 때 포인터락을 되돌린다 */
  relock(): void;
}

const CSS = `
#adm-hud, #adm-panel { position: fixed; z-index: 60; color: #cfe3ff;
  font: 12px/1.55 ui-monospace, "Cascadia Mono", Consolas, monospace; }
#adm-hud { left: 10px; top: 44px; max-width: 46ch; white-space: pre-wrap;
  background: #05070ccc; border: 1px solid #2b6cb055; border-radius: 6px;
  padding: 7px 9px; pointer-events: none; text-shadow: 0 1px 2px #000; }
#adm-hud .k { color: #7f9bbd; }
#adm-hud .v { color: #ffd48a; }
#adm-hud .o { color: #8ef0b4; }
#adm-badge { position: fixed; z-index: 61; right: 10px; top: 44px; padding: 3px 8px;
  border-radius: 4px; background: #7a1010; color: #ffe3e3; letter-spacing: .12em;
  font: 700 11px/1.4 ui-monospace, Consolas, monospace; pointer-events: none; }
#adm-panel { left: 50%; top: 50%; transform: translate(-50%, -50%); width: min(92vw, 430px);
  background: #070a12f2; border: 1px solid #2b6cb0aa; border-radius: 10px; padding: 14px 16px;
  box-shadow: 0 18px 60px #000c; }
#adm-panel h3 { margin: 0 0 10px; font-size: 13px; color: #ffd48a; letter-spacing: .06em; }
#adm-panel label { display: flex; align-items: center; gap: 8px; margin: 7px 0; }
#adm-panel label > span:first-child { flex: 0 0 6.5em; color: #7f9bbd; }
#adm-panel select, #adm-panel input[type=number] { flex: 1; background: #111826; color: #cfe3ff;
  border: 1px solid #2b6cb066; border-radius: 4px; padding: 4px 6px; font: inherit; }
#adm-panel input[type=range] { flex: 1; }
#adm-panel .row { display: flex; gap: 8px; margin-top: 12px; }
#adm-panel button { flex: 1; background: #16233a; color: #cfe3ff; border: 1px solid #2b6cb066;
  border-radius: 5px; padding: 7px; font: inherit; cursor: pointer; }
#adm-panel button:hover { background: #1e3050; }
#adm-panel button.warn { background: #3a1418; border-color: #7a101088; }
#adm-panel .help { margin-top: 11px; color: #6d84a3; font-size: 11px; line-height: 1.7; }
`;

const num = (v: number, d = 2) => v.toFixed(d);

export class Admin {
  active = false;
  /** 안개·터널 암전을 걷을 것인가 — 구조를 보려면 어둠이 방해가 된다.
   *  매 프레임 main.ts가 읽는다 (관리자 모드에서는 걷기 갱신이 돌지 않으므로) */
  clearView = true;

  private host: AdminHost;
  private hud!: HTMLDivElement;
  private badge!: HTMLDivElement;
  private panel: HTMLDivElement | null = null;
  private ray = new THREE.Raycaster();
  private center = new THREE.Vector2(0, 0);
  private speed = 7;
  private lastTapAt = 0;
  private line = ''; // 복사용 원문

  constructor(host: AdminHost) {
    this.host = host;
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    this.hud = document.createElement('div');
    this.hud.id = 'adm-hud';
    this.badge = document.createElement('div');
    this.badge.id = 'adm-badge';
    this.badge.textContent = 'ADMIN';

    window.addEventListener('keydown', (e) => this.onKey(e));
    // 휠로 기본 비행 속도 — 포인터락 중에도 들어온다
    window.addEventListener('wheel', (e) => {
      if (!this.active || this.panel) return;
      this.speed = Math.max(0.5, Math.min(60, this.speed * (e.deltaY > 0 ? 0.85 : 1.18)));
    }, { passive: true });
  }

  // ---------- 입력 ----------
  private onKey(e: KeyboardEvent) {
    // 켜고 끄기 — Ctrl을 누른 채 Space **두 번** (0.6초 안에). 우연히 눌릴 조합이 아니다
    if (e.ctrlKey && e.code === 'Space') {
      e.preventDefault();
      const t = performance.now();
      if (t - this.lastTapAt < 600) {
        this.lastTapAt = 0;
        this.toggle();
      } else {
        this.lastTapAt = t;
      }
      return;
    }
    if (!this.active) return;

    if (e.code === 'Escape') {
      // 브라우저가 포인터락을 이미 풀었다 — 그 김에 패널을 연다/닫는다
      if (this.panel) this.closePanel();
      else this.openPanel();
      return;
    }
    if (e.code === 'KeyC' && !this.panel) {
      e.preventDefault();
      void navigator.clipboard?.writeText(this.line);
      this.flash('좌표 복사됨');
    }
  }

  toggle() {
    this.active = !this.active;
    if (this.active) {
      document.body.append(this.hud, this.badge);
    } else {
      this.closePanel();
      this.hud.remove();
      this.badge.remove();
    }
  }

  private flash(msg: string) {
    this.badge.textContent = msg;
    setTimeout(() => (this.badge.textContent = 'ADMIN'), 900);
  }

  // ---------- 비행 ----------
  /** 관리자 모드일 때 main.ts의 걷기 대신 이것이 돈다 — 충돌·경계·구간 전환이 전부 없다 */
  fly(dt: number, yaw: number, pitch: number, down: (code: string) => boolean) {
    if (this.panel) return; // 패널을 열어 둔 동안은 움직이지 않는다
    const mul = down('AltLeft') || down('AltRight') ? 4 : 1;
    const v = this.speed * mul * dt;
    let f = 0;
    let s = 0;
    let u = 0;
    if (down('KeyW') || down('ArrowUp')) f += 1;
    if (down('KeyS') || down('ArrowDown')) f -= 1;
    if (down('KeyD') || down('ArrowRight')) s += 1;
    if (down('KeyA') || down('ArrowLeft')) s -= 1;
    if (down('Space')) u += 1;
    if (down('ShiftLeft') || down('ShiftRight')) u -= 1;

    const cam = this.host.camera;
    // 전진은 **보는 방향** 그대로 (pitch 포함) — 천장·간판을 보러 올라갈 때 이게 편하다
    const cy = Math.cos(pitch);
    cam.position.x += (Math.sin(yaw) * -f * cy + Math.cos(yaw) * s) * v;
    cam.position.z += (-Math.cos(yaw) * f * cy - Math.sin(yaw) * s) * v;
    cam.position.y += (Math.sin(pitch) * f + u) * v;
  }

  // ---------- 읽기 ----------
  update() {
    if (!this.active) return;
    const cam = this.host.camera;
    const s = this.host.snapshot();
    const p = cam.position;
    const L = this.host.segLength;

    const zL = p.z < 0.5 && p.z > -L * 1.4 ? `  (-L*${num(-p.z / L, 3)})` : '';
    const dir = new THREE.Vector3();
    cam.getWorldDirection(dir);
    const yawDeg = ((Math.atan2(-dir.x, -dir.z) * 180) / Math.PI + 360) % 360;
    const pitchDeg = (Math.asin(Math.max(-1, Math.min(1, dir.y))) * 180) / Math.PI;

    this.line = `x ${num(p.x)}  y ${num(p.y)}  z ${num(p.z)}${zL}`;
    const look = this.pick();

    this.hud.innerHTML =
      `<span class="k">좌표</span> <span class="v">x ${num(p.x)}  y ${num(p.y)}  z ${num(p.z)}</span>` +
      `<span class="k">${zL}</span>\n` +
      `<span class="k">시선</span> yaw ${num(yawDeg, 1)}°  pitch ${num(pitchDeg, 1)}°` +
      `   <span class="k">속도</span> ${num(this.speed, 1)}\n` +
      `<span class="k">상태</span> ${s.morning ? '아침(퇴근길)' : `밤 ${s.night}`}` +
      `  구간 ${s.done + 1}/${s.total}  테마 ${s.theme}  깊이 ${s.depth}  늘어남 ${s.stretches}\n` +
      `<span class="k">조준</span> ${look}`;
  }

  /** 화면 중앙이 무엇을 보고 있는가. 조상까지 visible을 확인한다 —
   *  three의 레이캐스터는 안 보이는 객체도 맞히고, 이 게임은 테마 5개가 같은 좌표를 공유한다 */
  private pick(): string {
    this.ray.setFromCamera(this.center, this.host.camera);
    const hits = this.ray.intersectObjects(this.host.scene.children, true);
    const hit = hits.find((h) => {
      if (!(h.object as THREE.Mesh).isMesh) return false;
      for (let o: THREE.Object3D | null = h.object; o; o = o.parent) if (!o.visible) return false;
      return true;
    });
    if (!hit) return '<span class="k">(없음)</span>';

    const o = hit.object as THREE.Mesh;
    const path: string[] = [];
    for (let q: THREE.Object3D | null = o; q; q = q.parent) if (q.name) path.unshift(q.name);

    const g = o.geometry as THREE.BufferGeometry & { parameters?: Record<string, number> };
    const gp = g.parameters;
    let shape = g.type ?? '?';
    if (gp) {
      if (g.type === 'BoxGeometry') shape = `Box ${num(gp.width)}×${num(gp.height)}×${num(gp.depth)}`;
      else if (g.type === 'PlaneGeometry') shape = `Plane ${num(gp.width)}×${num(gp.height)}`;
      else if (g.type === 'SphereGeometry') shape = `Sphere r${num(gp.radius)}`;
      else if (g.type === 'CylinderGeometry') shape = `Cyl r${num(gp.radiusTop)} h${num(gp.height)}`;
    }
    const m = o.material;
    const color = Array.isArray(m)
      ? '(면별 재질)'
      : '#' + ((m as THREE.MeshStandardMaterial).color?.getHexString() ?? '??????');

    const w = o.getWorldPosition(new THREE.Vector3());
    const L = this.host.segLength;
    const zL = w.z < 0.5 && w.z > -L * 1.4 ? ` = -L*${num(-w.z / L, 3)}` : '';
    // 복사용 원문에도 조준 대상을 담는다 — 이 한 줄이면 코드에서 찾을 수 있다
    this.line += `\n${path.join(' › ')} | ${shape} ${color} | x ${num(w.x)} y ${num(w.y)} z ${num(w.z)}${zL}`;

    return (
      `<span class="o">${path.join(' › ') || '(이름 없음)'}</span>\n` +
      `     ${shape}  ${color}  <span class="k">${num(hit.distance, 1)}m</span>\n` +
      `     <span class="v">x ${num(w.x)}  y ${num(w.y)}  z ${num(w.z)}</span>` +
      `<span class="k">${zL}</span>`
    );
  }

  // ---------- 패널 (Esc) ----------
  private openPanel() {
    document.exitPointerLock?.();
    const s = this.host.snapshot();
    const el = document.createElement('div');
    el.id = 'adm-panel';
    const opts = this.host.anomalies
      .map((a) => `<option value="${a.effect}">${a.segment || '전'} · ${a.label}</option>`)
      .join('');
    el.innerHTML = `
      <h3>관리자 — 스테이지 이동</h3>
      <label><span>밤</span><input id="adm-night" type="number" min="1" max="99" value="${s.night}"></label>
      <label><span>시간대</span><select id="adm-when">
        <option value="night"${s.morning ? '' : ' selected'}>밤 — 귀갓길 (테마 5→1)</option>
        <option value="morning"${s.morning ? ' selected' : ''}>아침 — 퇴근길 (테마 4→5)</option>
      </select></label>
      <label><span>구간 테마</span><select id="adm-theme">${
        Array.from({ length: this.host.segments }, (_, i) => i + 1)
          .map((t) => `<option value="${t}"${t === s.theme ? ' selected' : ''}>${t} — ${THEME_NAME[t] ?? ''}</option>`)
          .join('')
      }</select></label>
      <label><span>이상현상</span><select id="adm-eff">
        <option value="">강제 안 함 (확률대로)</option>
        <option value="none">항상 정상</option>
        ${opts}
      </select></label>
      <label><span>깊이</span><input id="adm-depth" type="range" min="0" max="5" step="1" value="${s.depth}">
        <span id="adm-depth-v" class="v">${s.depth}</span></label>
      <label><span>시야</span><select id="adm-view">
        <option value="clear"${this.clearView ? ' selected' : ''}>안개·터널 암전 끔 (구조 확인용)</option>
        <option value="game"${this.clearView ? '' : ' selected'}>게임 그대로</option>
      </select></label>
      <div class="row"><button id="adm-go">이동</button><button id="adm-close">닫기</button></div>
      <div class="row"><button id="adm-off" class="warn">관리자 모드 끄기</button></div>
      <div class="help">비행 WASD · Space 상승 · Shift 하강 · Alt 가속 · 휠 속도<br>
        C 좌표+조준 대상 복사 · Esc 이 창 · Ctrl+Space Space 모드 전환<br>
        관리자 모드에서는 붙잡힘·치임·늘어남·구간 전환이 전부 멈춘다</div>`;
    document.body.appendChild(el);
    this.panel = el;

    const depth = el.querySelector<HTMLInputElement>('#adm-depth')!;
    const depthV = el.querySelector<HTMLElement>('#adm-depth-v')!;
    depth.addEventListener('input', () => (depthV.textContent = depth.value));

    el.querySelector('#adm-go')?.addEventListener('click', () => {
      const eff = el.querySelector<HTMLSelectElement>('#adm-eff')!.value;
      this.clearView = el.querySelector<HTMLSelectElement>('#adm-view')!.value === 'clear';
      this.host.jump({
        night: Number(el.querySelector<HTMLInputElement>('#adm-night')!.value) || 1,
        morning: el.querySelector<HTMLSelectElement>('#adm-when')!.value === 'morning',
        theme: Number(el.querySelector<HTMLSelectElement>('#adm-theme')!.value),
        depth: Number(depth.value),
        effect: eff === '' ? null : eff,
      });
      this.closePanel();
    });
    el.querySelector('#adm-close')?.addEventListener('click', () => this.closePanel());
    el.querySelector('#adm-off')?.addEventListener('click', () => {
      this.closePanel();
      this.toggle();
    });
  }

  private closePanel() {
    this.panel?.remove();
    this.panel = null;
    if (this.active) this.host.relock();
  }
}

const THEME_NAME: Record<number, string> = {
  1: '원룸 골목 (집)',
  2: '상가 골목',
  3: '놀이터 옆길',
  4: '정류장 앞 (차도)',
  5: '먹자골목 입구 (가게)',
};
