// 입력 추상화 레이어 — docs/responsive-design.md §1
// PC: Pointer Lock + WASD / 모바일: 걷기 버튼 홀드(전진) + 화면 어디든 드래그(시점) + 탭(지적)
// 달리기 없음 (v0.11.2) — 이 게임의 속도는 하나뿐이다
// 길이 직진뿐이라 조향이 필요 없다 — 조이스틱·반분할 폐지 (v0.7.0)
// 기기 고정 감지 대신 pointerType으로 런타임 전환

export class Input {
  yaw = 0;
  pitch = 0;

  /** 지적 콜백 — 화면 좌표(px). PC(포인터락)는 화면 중앙, 모바일은 탭 지점 (main.ts tryPoint) */
  onPoint: ((x: number, y: number) => void) | null = null;

  /** 걷기 버튼 (모바일 #walk-btn) — main.ts가 홀드 상태를 넣는다 */
  touchForward = 0;

  private keys = new Set<string>();
  private canvas: HTMLCanvasElement;
  private locked = false;

  // 터치 상태 — 시점 드래그는 화면 어디서든 (첫 손가락), 탭은 지적 후보
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
    if (!this.lookTouch) {
      this.lookTouch = { id: e.pointerId, x: e.clientX, y: e.clientY };
    }
  }

  private onPointerMove(e: PointerEvent) {
    if (this.lookTouch && e.pointerId === this.lookTouch.id) {
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
    if (this.lookTouch && e.pointerId === this.lookTouch.id) this.lookTouch = null;
  }

  /** 눌려 있는가 — 관리자 모드 비행이 자기 키 조합을 직접 읽는다 (admin.ts) */
  isDown(code: string): boolean {
    return this.keys.has(code);
  }

  /** forward: +1 전진 / strafe: +1 오른쪽 (달리기 없음 — v0.11.2) */
  getMove(): { forward: number; strafe: number } {
    let forward = 0;
    let strafe = 0;

    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) forward += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) forward -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) strafe += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) strafe -= 1;
    // 걷기 버튼 (모바일) — 누르는 동안 전진
    forward += this.touchForward;

    return {
      forward: Math.max(-1, Math.min(1, forward)),
      strafe: Math.max(-1, Math.min(1, strafe)),
    };
  }
}
