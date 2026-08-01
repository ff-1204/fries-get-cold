// 입력 추상화 레이어 — docs/responsive-design.md §1
// PC: Pointer Lock + WASD / 모바일: 화면 반분할 터치 (좌=이동, 우=시점)
// 기기 고정 감지 대신 pointerType으로 런타임 전환

export class Input {
  yaw = 0;
  pitch = 0;

  /** 지적 콜백 — 화면 좌표(px). PC(포인터락)는 화면 중앙, 모바일은 탭 지점 (main.ts tryPoint) */
  onPoint: ((x: number, y: number) => void) | null = null;

  private keys = new Set<string>();
  private canvas: HTMLCanvasElement;
  private locked = false;

  // 터치 상태
  private moveTouch: { id: number; x0: number; y0: number; dx: number; dy: number } | null = null;
  private lookTouch: { id: number; x: number; y: number } | null = null;
  private tapCandidate: { id: number; x: number; y: number; t: number } | null = null;
  usesTouch = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    window.addEventListener('keydown', (e) => this.keys.add(e.code));
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());

    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
    });
    document.addEventListener('mousemove', (e) => {
      if (!this.locked) return;
      this.applyLook(e.movementX, e.movementY);
    });

    canvas.addEventListener('pointerdown', (e) => this.onPointerDown(e));
    canvas.addEventListener('pointermove', (e) => this.onPointerMove(e));
    canvas.addEventListener('pointerup', (e) => this.onPointerEnd(e));
    canvas.addEventListener('pointercancel', (e) => this.onPointerEnd(e));
  }

  /** 시작 게이트의 사용자 제스처에서 호출 (오디오/포인터락 활성화 지점) */
  activate() {
    if (!this.usesTouch) this.canvas.requestPointerLock?.();
  }

  private applyLook(dx: number, dy: number) {
    const s = 0.0024;
    this.yaw -= dx * s;
    this.pitch -= dy * s;
    const lim = Math.PI / 2 - 0.05;
    this.pitch = Math.max(-lim, Math.min(lim, this.pitch));
  }

  private onPointerDown(e: PointerEvent) {
    if (e.pointerType === 'mouse') {
      if (!this.locked) {
        this.canvas.requestPointerLock?.();
        return;
      }
      // 포인터락 중 클릭 = 화면 중앙(크로스헤어)을 짚는다
      this.onPoint?.(window.innerWidth / 2, window.innerHeight / 2);
      return;
    }
    this.usesTouch = true;
    this.tapCandidate = { id: e.pointerId, x: e.clientX, y: e.clientY, t: performance.now() };
    const half = window.innerWidth / 2;
    if (e.clientX < half && !this.moveTouch) {
      this.moveTouch = { id: e.pointerId, x0: e.clientX, y0: e.clientY, dx: 0, dy: 0 };
    } else if (!this.lookTouch) {
      this.lookTouch = { id: e.pointerId, x: e.clientX, y: e.clientY };
    }
  }

  private onPointerMove(e: PointerEvent) {
    if (this.moveTouch && e.pointerId === this.moveTouch.id) {
      this.moveTouch.dx = e.clientX - this.moveTouch.x0;
      this.moveTouch.dy = e.clientY - this.moveTouch.y0;
    } else if (this.lookTouch && e.pointerId === this.lookTouch.id) {
      this.applyLook((e.clientX - this.lookTouch.x) * 2.4, (e.clientY - this.lookTouch.y) * 2.4);
      this.lookTouch.x = e.clientX;
      this.lookTouch.y = e.clientY;
    }
  }

  private onPointerEnd(e: PointerEvent) {
    // 짧게, 거의 안 움직인 터치 = 탭 = 지적 (드래그 이동/시점과 자연 구분)
    if (this.tapCandidate && e.pointerId === this.tapCandidate.id) {
      const c = this.tapCandidate;
      const quick = performance.now() - c.t < 350;
      const still = Math.hypot(e.clientX - c.x, e.clientY - c.y) < 14;
      if (quick && still) this.onPoint?.(e.clientX, e.clientY);
      this.tapCandidate = null;
    }
    if (this.moveTouch && e.pointerId === this.moveTouch.id) this.moveTouch = null;
    if (this.lookTouch && e.pointerId === this.lookTouch.id) this.lookTouch = null;
  }

  /** forward: +1 전진 / strafe: +1 오른쪽 / run: 달리기 */
  getMove(): { forward: number; strafe: number; run: boolean } {
    let forward = 0;
    let strafe = 0;
    let run = false;

    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) forward += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) forward -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) strafe += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) strafe -= 1;
    if (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')) run = true;

    if (this.moveTouch) {
      const dead = 12;
      const range = 70;
      const fy = -this.moveTouch.dy;
      const fx = this.moveTouch.dx;
      if (Math.abs(fy) > dead) forward += Math.max(-1, Math.min(1, fy / range));
      if (Math.abs(fx) > dead) strafe += Math.max(-1, Math.min(1, fx / range));
      if (fy > range * 1.6) run = true; // 조이스틱 바깥으로 밀기 = 달리기
    }

    return {
      forward: Math.max(-1, Math.min(1, forward)),
      strafe: Math.max(-1, Math.min(1, strafe)),
      run,
    };
  }
}
