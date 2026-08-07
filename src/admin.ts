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
  /** 조명만 강제한다 (디버깅용) — 생략하면 스테이지 기본값(퇴근길=낮 / 밤=밤).
   *  `morning`이 규칙(이상현상·깊이 유무)까지 바꾸는 것과 달리 이것은 **보이는 것만** 바꾼다 */
  daylight?: boolean;
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
  /** 밤의 수 (stages.json 길이) — 이동 목록을 플레이 순서대로 세우는 데 쓴다 */
  nights: number;
  snapshot(): AdminSnapshot;
  jump(j: AdminJump): void;
  /** 패널을 닫을 때 포인터락을 되돌린다 */
  relock(): void;
}

const CSS = `
#adm-hud, #adm-panel { position: fixed; z-index: 60; color: #cfe3ff;
  font: 12px/1.55 ui-monospace, "Cascadia Mono", Consolas, monospace; }
/* ⚠ body가 user-select: none이라(index.html) 상속을 끊지 않으면 좌표를 드래그로 못 집는다.
   HUD는 **읽어서 가져가라고** 있는 것이므로 여기서만 되돌린다 — pointer-events도 함께다
   (none이면 애초에 선택이 시작되지 않는다). 게임 화면 쪽 금지는 그대로 둔다. */
#adm-hud { left: 10px; top: 44px; max-width: 46ch; white-space: pre-wrap;
  background: #05070ccc; border: 1px solid #2b6cb055; border-radius: 6px;
  padding: 7px 9px; text-shadow: 0 1px 2px #000;
  pointer-events: auto; user-select: text; -webkit-user-select: text; cursor: text; }
#adm-hud .k { color: #7f9bbd; }
#adm-hud .v { color: #ffd48a; }
#adm-hud .o { color: #8ef0b4; }
/* ⭐ 정중앙 조준점 (v0.11.61) — 아래 '조준' 줄이 **무엇을 겨눈 것인지** 화면에서 보이게.
   레이캐스트는 화면 정중앙에서 쏘는데(this.center = (0,0)) 그 지점에 표시가 없어서,
   좌표를 뜨려면 감으로 겨눠야 했다.
   ⚠ 게임 화면에는 십자선을 두지 않는다 — 짚는 동사가 없어진 뒤(v0.11.50) 십자선은
     '조준할 것이 있다'는 거짓말이 되기 때문이다 (hud.ts 주석). 그래서 **관리자 모드 전용**이고
     이 요소는 모드를 켤 때만 붙는다.
   ⚠ 가는 십자 + 가운데 점. 점만 두면 어두운 배경에서 사라지고, 십자만 두면 정확한 한 픽셀이
     어디인지 모른다. mix-blend-mode: difference 로 밝은 벽에서도 어두운 골목에서도 남는다.
   ⚠⚠ 이 CSS는 템플릿 리터럴이다 — 주석에 백틱을 쓰면 문자열이 거기서 끊긴다 (실제로 겪었다) */
#adm-cross { position: fixed; z-index: 61; left: 50%; top: 50%; width: 21px; height: 21px;
  transform: translate(-50%, -50%); pointer-events: none; mix-blend-mode: difference; }
#adm-cross i { position: absolute; background: #fff; }
#adm-cross .h { left: 0; top: 10px; width: 21px; height: 1px; }
#adm-cross .v { left: 10px; top: 0; width: 1px; height: 21px; }
#adm-cross .d { left: 9px; top: 9px; width: 3px; height: 3px; }
#adm-badge { position: fixed; z-index: 61; right: 10px; top: 44px; padding: 3px 8px;
  border-radius: 4px; background: #7a1010; color: #ffe3e3; letter-spacing: .12em;
  font: 700 11px/1.4 ui-monospace, Consolas, monospace; pointer-events: none; }
#adm-panel { left: 50%; top: 50%; transform: translate(-50%, -50%); width: min(92vw, 430px);
  background: #070a12f2; border: 1px solid #2b6cb0aa; border-radius: 10px; padding: 14px 16px;
  box-shadow: 0 18px 60px #000c;
  user-select: text; -webkit-user-select: text; }
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
  /** 조명 강제 — 패널을 다시 열어도 고른 값이 남는다 (같은 자리를 낮↔밤으로 번갈아 보게) */
  lit: 'auto' | 'day' | 'night' = 'auto';

  private host: AdminHost;
  private hud!: HTMLDivElement;
  private badge!: HTMLDivElement;
  /** 정중앙 조준점 — 관리자 모드에서만 붙는다 (게임 화면에 십자선을 두지 않는 이유는 CSS 주석) */
  private cross!: HTMLDivElement;
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
    // 정중앙 조준점 — 레이캐스트를 쏘는 그 지점(this.center)을 화면에 표시한다 (CSS 주석 참조)
    this.cross = document.createElement('div');
    this.cross.id = 'adm-cross';
    this.cross.innerHTML = '<i class="h"></i><i class="v"></i><i class="d"></i>';

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
    // ⚠ Ctrl/⌘를 뺀다 — 빼지 않으면 **브라우저의 Ctrl+C를 이 분기가 가로채** preventDefault로
    //   죽인다. 관리자 모드를 켠 채로는 무엇을 선택해도 복사가 안 되던 원인이었다
    if (e.code === 'KeyC' && !this.panel && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      void this.copyLine();
    }
  }

  /** 조준 줄을 클립보드로. ⚠ 성공을 가정하지 않는다 — writeText는 문서가 포커스를 잃었거나
   *  비보안 컨텍스트(http)면 조용히 거절한다. 예전에는 실패해도 '복사됨'이 떴다 */
  private async copyLine() {
    try {
      if (!navigator.clipboard) throw new Error('no clipboard api');
      await navigator.clipboard.writeText(this.line);
      this.flash('좌표 복사됨');
    } catch {
      // 포인터락 중 포커스 문제·비보안 컨텍스트 대비 — 화면 밖 textarea + execCommand
      const ta = document.createElement('textarea');
      ta.value = this.line;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:-9999px;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      this.flash(ok ? '좌표 복사됨' : '복사 실패 — HUD에서 직접 선택');
    }
  }

  toggle() {
    this.active = !this.active;
    if (this.active) {
      document.body.append(this.hud, this.badge, this.cross);
    } else {
      this.closePanel();
      this.hud.remove();
      this.badge.remove();
      this.cross.remove();
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
      // ⚠ 스테이지 이동 패널의 여는 법을 **패널 안에만** 적어 뒀었다 — 열어야 볼 수 있는
      //   안내라 아무 소용이 없었다. 상시 HUD에 한 줄로 올린다
      `<span class="k">이동</span> <span class="o">Esc</span> — 밤·테마·이상현상·깊이 골라서 점프` +
      `   <span class="k">C</span> 좌표 복사\n` +
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
    // 고유키 — box()/boxOf()가 붙인 **소스 위치**(`theme4.ts:99`)라 그대로 grep하면 그 줄이다.
    // 이름 없는 프롭이 대부분이라 예전에는 `골목 › 테마4`까지밖에 안 나왔다 (kit.ts tagSrc)
    const src = typeof o.userData.src === 'string' ? o.userData.src : '';
    // 복사용 원문에도 조준 대상을 담는다 — 이 한 줄이면 코드에서 찾을 수 있다
    this.line += `\n${path.join(' › ')} | ${src} | ${shape} ${color} | x ${num(w.x)} y ${num(w.y)} z ${num(w.z)}${zL}`;

    return (
      `<span class="o">${path.join(' › ') || '(이름 없음)'}</span>\n` +
      (src ? `     <span class="o">${src}</span>\n` : '') +
      `     ${shape}  ${color}  <span class="k">${num(hit.distance, 1)}m</span>\n` +
      `     <span class="v">x ${num(w.x)}  y ${num(w.y)}  z ${num(w.z)}</span>` +
      `<span class="k">${zL}</span>`
    );
  }

  // ---------- 패널 (Esc) ----------
  private openPanel() {
    document.exitPointerLock?.();
    // 패널은 화면 정중앙에 뜬다 — 조준점을 켜 둔 채로 열면 패널 위에 십자가 겹친다
    this.cross.style.display = 'none';
    const s = this.host.snapshot();
    const el = document.createElement('div');
    el.id = 'adm-panel';
    // 이상현상은 **제 구간에서만** 뜬다 (main.ts rollSegment가 segment로 거른다).
    // 그래서 라벨에 갈 구간을 적어 두고, 아래 '이동'이 테마를 거기로 맞춰 준다 —
    // 예전에는 구간이 안 맞으면 조용히 아무것도 안 나와서 "선택이 안 먹는다"로 보였다
    const opts = this.host.anomalies
      .map((a) => `<option value="${a.effect}">${
        a.segment ? `구간 ${a.segment}` : '전 구간'} · ${a.label}</option>`)
      .join('');
    const stops = stageStops(this.host.nights, this.host.segments);
    el.innerHTML = `
      <h3>관리자 — 콘솔</h3>
      <label><span>스테이지</span><select id="adm-stop">${
        stops
          .map((st, i) => {
            // 지금 서 있는 자리를 기본 선택으로 — 열자마자 "여기가 몇 번인지"가 읽힌다
            const here = st.morning === s.morning && st.theme === s.theme
              && (st.morning || st.night === s.night);
            return `<option value="${i}"${here ? ' selected' : ''}>${i + 1}. ${st.label}</option>`;
          })
          .join('')
      }</select></label>
      <label><span>이상현상</span><select id="adm-eff">
        <option value="">강제 안 함 (확률대로)</option>
        <option value="none">항상 정상</option>
        ${opts}
      </select></label>
      <label><span>깊이</span><input id="adm-depth" type="range" min="0" max="5" step="1" value="${s.depth}">
        <span id="adm-depth-v" class="v">${s.depth}</span></label>
      <label><span>조명</span><select id="adm-lit">
        <option value="auto"${this.lit === 'auto' ? ' selected' : ''}>스테이지 기본 (퇴근길=낮 / 밤=밤)</option>
        <option value="day"${this.lit === 'day' ? ' selected' : ''}>낮 강제 — 어느 밤이든 대낮으로</option>
        <option value="night"${this.lit === 'night' ? ' selected' : ''}>밤 강제 — 퇴근길도 밤으로</option>
      </select></label>
      <label><span>시야</span><select id="adm-view">
        <option value="clear"${this.clearView ? ' selected' : ''}>안개·터널 암전 끔 (구조 확인용)</option>
        <option value="game"${this.clearView ? '' : ' selected'}>게임 그대로</option>
      </select></label>
      <div class="row"><button id="adm-go">이동</button><button id="adm-close">닫기</button></div>
      <div class="row"><button id="adm-off" class="warn">관리자 모드 끄기</button></div>
      <div class="help">비행 WASD · Space 상승 · Shift 하강 · Alt 가속 · 휠 속도<br>
        C 좌표+조준 대상 복사 · Esc 이 창 · Ctrl+Space Space 모드 전환<br>
        관리자 모드에서는 머무름·치임·늘어남·구간 전환이 전부 멈춘다</div>`;
    document.body.appendChild(el);
    this.panel = el;

    const depth = el.querySelector<HTMLInputElement>('#adm-depth')!;
    const depthV = el.querySelector<HTMLElement>('#adm-depth-v')!;
    depth.addEventListener('input', () => (depthV.textContent = depth.value));

    el.querySelector('#adm-go')?.addEventListener('click', () => {
      const eff = el.querySelector<HTMLSelectElement>('#adm-eff')!.value;
      this.clearView = el.querySelector<HTMLSelectElement>('#adm-view')!.value === 'clear';
      const stop = stops[Number(el.querySelector<HTMLSelectElement>('#adm-stop')!.value)] ?? stops[0];
      this.lit = el.querySelector<HTMLSelectElement>('#adm-lit')!.value as typeof this.lit;
      // ⭐ 고른 이상현상이 특정 구간의 것이면 **테마를 그 구간으로 맞춘다.**
      // 안 그러면 rollSegment의 segment 필터에 걸려 아무것도 안 뜬다 — 고른 것이 안 보이면
      // 도구를 못 믿게 된다. '전 구간'(segment 0)과 정상/해제는 스테이지를 그대로 둔다
      const pick = this.host.anomalies.find((a) => a.effect === eff);
      const theme = pick && pick.segment ? pick.segment : stop.theme;
      this.host.jump({
        night: stop.night,
        morning: stop.morning,
        theme,
        daylight: this.lit === 'auto' ? undefined : this.lit === 'day',
        depth: Number(depth.value),
        effect: eff === '' ? null : eff,
      });
      if (theme !== stop.theme) this.flash(`이상현상에 맞춰 구간 테마 ${theme}로 이동`);
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
    this.cross.style.display = '';   // 패널을 닫으면 조준점을 되돌린다
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

interface StageStop {
  night: number;
  morning: boolean;
  theme: number;
  label: string;
}

/**
 * 이동할 수 있는 자리를 **플레이어가 실제로 지나는 순서대로** 편다.
 *
 * 예전 패널은 밤·시간대·테마를 따로 골라야 했다. 셋의 조합이 곧 위치인데
 * **그 조합 규칙(귀갓길은 테마 역순 5→1, 퇴근길만 첫날 4→5)을 아는 사람만** 원하는 데로 갈 수 있었다.
 * 순번 하나로 합치면 "3번 다음이 4번"이라는 것만 알면 된다.
 *
 * 첫날 퇴근길 2구간 + (밤 × 구간 5). 늘어남으로 구간이 늘어나는 것은 여기 안 넣는다 —
 * 그건 플레이 중에 생기는 것이지 갈 수 있는 자리가 아니다.
 */
function stageStops(nights: number, segments: number): StageStop[] {
  const out: StageStop[] = [];
  for (let i = 1; i <= 2; i++) {
    const theme = segments - 2 + i;               // 퇴근길은 정순: 테마 4 → 5
    out.push({ night: 1, morning: true, theme, label: `퇴근길 ${i}/2 · ${THEME_NAME[theme]}` });
  }
  for (let n = 1; n <= nights; n++) {
    for (let seg = 1; seg <= segments; seg++) {
      const theme = segments + 1 - seg;           // 귀갓길은 역순: 테마 5 → 1
      out.push({ night: n, morning: false, theme, label: `밤 ${n} — ${seg}/${segments} · ${THEME_NAME[theme]}` });
    }
  }
  return out;
}
