// 입력 추상화 레이어 — docs/responsive-design.md §1
// PC: Pointer Lock + WASD / 모바일: 걷기 버튼 홀드(전진, **쥔 채로 끈 방향으로 게걸음·뒷걸음**) +
//     화면 어디든 드래그(시점)
// ⭐ **동사는 걷기 하나다** (v0.11.50) — 짚는 입력(클릭·탭 → onPoint)이 통째로 사라졌다.
// 마우스 클릭에 남은 일은 포인터락 재획득뿐이고, 터치의 탭에는 아무 일도 일어나지 않는다
// 달리기 없음 (v0.11.2) — 이 게임의 속도는 하나뿐이다
// 길이 직진뿐이라 조향이 필요 없다 — 조이스틱·반분할 폐지 (v0.7.0)
// 기기 고정 감지 대신 pointerType으로 런타임 전환

/** 터치 드래그 → 시점 배율 (화면 드래그 = 시점, 걷기 버튼 드래그 = 걸음 방향) */
const TOUCH_LOOK = 2.4;

export class Input {
  yaw = 0;
  pitch = 0;

  /** 걷기 버튼 (모바일 #walk-btn) — main.ts가 홀드/끈 방향을 넣는다. 키보드와 같은 −1/0/+1 */
  touchForward = 0;
  touchStrafe = 0;

  private keys = new Set<string>();
  private canvas: HTMLCanvasElement;
  private locked = false;

  // 터치 상태 — 시점 드래그는 화면 어디서든 (첫 손가락)
  private lookTouch: { id: number; x: number; y: number } | null = null;
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
      // 클릭에 남은 일은 포인터락 재획득뿐이다 (v0.11.50 — 짚는 동사 제거).
      // 락이 걸린 상태의 클릭은 **아무 일도 하지 않는다**
      if (!this.locked) this.canvas.requestPointerLock?.();
      return;
    }
    this.usesTouch = true;
    if (!this.lookTouch) {
      this.lookTouch = { id: e.pointerId, x: e.clientX, y: e.clientY };
    }
  }

  private onPointerMove(e: PointerEvent) {
    if (this.lookTouch && e.pointerId === this.lookTouch.id) {
      this.applyLook((e.clientX - this.lookTouch.x) * TOUCH_LOOK, (e.clientY - this.lookTouch.y) * TOUCH_LOOK);
      this.lookTouch.x = e.clientX;
      this.lookTouch.y = e.clientY;
    }
  }

  private onPointerEnd(e: PointerEvent) {
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
    // 걷기 버튼 (모바일) — 누르는 동안 전진, 끈 방향이 있으면 그쪽으로
    forward += this.touchForward;
    strafe += this.touchStrafe;

    return {
      forward: Math.max(-1, Math.min(1, forward)),
      strafe: Math.max(-1, Math.min(1, strafe)),
    };
  }
}
