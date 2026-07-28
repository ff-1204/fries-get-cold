// DOM 오버레이 HUD — docs/development.md (텍스처보다 가독성 우선)

export class Hud {
  private status = document.getElementById('status')!;
  private tempWrap = document.getElementById('temp-wrap')!;
  private tempFill = document.getElementById('temp-fill')! as HTMLElement;
  private msg = document.getElementById('msg')!;
  private fade = document.getElementById('fade')! as HTMLElement;
  private touchHint = document.getElementById('touch-hint')! as HTMLElement;
  private msgTimer = 0;

  setStatus(text: string) {
    this.status.textContent = text;
  }

  showTemp(show: boolean) {
    this.tempWrap.style.display = show ? 'block' : 'none';
  }

  setTemp(ratio: number) {
    this.tempFill.style.width = `${Math.max(0, Math.min(1, ratio)) * 100}%`;
  }

  showTouchHint() {
    this.touchHint.style.display = 'block';
    setTimeout(() => (this.touchHint.style.display = 'none'), 6000);
  }

  say(text: string, holdMs = 2600) {
    this.msg.textContent = text;
    this.msg.style.opacity = '1';
    window.clearTimeout(this.msgTimer);
    this.msgTimer = window.setTimeout(() => {
      this.msg.style.opacity = '0';
    }, holdMs);
  }

  async fadeOut(ms = 1200): Promise<void> {
    this.fade.style.transitionDuration = `${ms}ms`;
    this.fade.style.opacity = '1';
    await new Promise((r) => setTimeout(r, ms + 60));
  }

  async fadeIn(ms = 1200): Promise<void> {
    this.fade.style.transitionDuration = `${ms}ms`;
    this.fade.style.opacity = '0';
    await new Promise((r) => setTimeout(r, ms + 60));
  }

  /** 암전 상태에서 여러 줄 텍스트를 오버레이로 보여주고 버튼 대기 */
  async blackScreen(lines: string, buttonLabel: string): Promise<void> {
    document.exitPointerLock?.(); // 오버레이 버튼 클릭을 위해 커서 복원
    const el = document.createElement('div');
    el.className = 'overlay';
    el.style.opacity = '0';
    el.style.background = '#000';
    const p = document.createElement('div');
    p.className = 'quote';
    p.style.whiteSpace = 'pre-line';
    p.style.lineHeight = '2';
    p.textContent = lines;
    const btn = document.createElement('button');
    btn.textContent = buttonLabel;
    el.append(p, btn);
    document.body.append(el);
    requestAnimationFrame(() => (el.style.opacity = '1'));
    await new Promise<void>((resolve) => {
      btn.addEventListener('click', () => resolve(), { once: true });
    });
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 900);
  }
}
