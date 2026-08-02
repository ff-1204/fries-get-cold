// DOM 오버레이 HUD — docs/development.md (텍스처보다 가독성 우선)

export class Hud {
  private status = document.getElementById('status')! as HTMLElement;
  private msg = document.getElementById('msg')!;
  private fade = document.getElementById('fade')! as HTMLElement;
  private touchHint = document.getElementById('touch-hint')! as HTMLElement;
  private reticle = document.getElementById('reticle')! as HTMLElement;
  private reticleShown = false;
  private msgTimer = 0;
  private hintTimer = 0;

  /** 지적 크로스헤어 — 걷는 동안만. 매 프레임 호출돼도 DOM 쓰기는 변화 시에만 */
  setReticle(show: boolean) {
    if (show === this.reticleShown) return;
    this.reticleShown = show;
    this.reticle.style.opacity = show ? '0.5' : '0';
  }

  setStatus(text: string) {
    this.status.textContent = text;
  }

  /** 접힘 — 카운터 교체를 놓칠 수 없게 (팝 금지: 페이드 아웃 → 교체 → 페이드 인, visual-polish §7) */
  setStatusFold(text: string) {
    this.status.style.opacity = '0';
    setTimeout(() => {
      this.status.textContent = text;
      this.status.style.opacity = '1';
    }, 320);
  }

  /** 상단 조작 힌트 — 온보딩 (조작은 타이틀이 아니라 골목 안에서 배운다).
   *  holdMs 생략 시 hideHint() 호출까지 유지 — "해보면 사라진다" 해제용 */
  showHint(text: string, holdMs?: number) {
    this.touchHint.textContent = text;
    this.touchHint.style.display = 'block';
    window.clearTimeout(this.hintTimer);
    if (holdMs) this.hintTimer = window.setTimeout(() => this.hideHint(), holdMs);
  }

  hideHint() {
    this.touchHint.style.display = 'none';
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

  /** 귀가 연출 — 등급별 틴트 배경, 두 박자(박자마다 콜백), 마무리 모놀로그로 느린 전환.
   *  Peak-End의 End (affective §1-4) — 팝 금지, 느린 페이드만 (visual-polish §2·§7) */
  async arrivalScene(o: {
    gauge: string;
    result: string;
    epilogue: string;
    steps: [string, string];
    endLabel: string;
    bg: string;
    onBite: (bite: number) => void;
  }): Promise<void> {
    document.exitPointerLock?.();
    const el = document.createElement('div');
    el.className = 'overlay';
    el.style.opacity = '0';
    el.style.background = o.bg;
    el.style.transitionDuration = '1.4s';
    const gauge = document.createElement('div');
    gauge.className = 'sub';
    gauge.textContent = o.gauge;
    const p = document.createElement('div');
    p.className = 'quote';
    p.style.whiteSpace = 'pre-line';
    p.style.lineHeight = '2';
    p.style.transition = 'opacity 1.1s';
    p.textContent = o.result;
    const btn = document.createElement('button');
    btn.textContent = o.steps[0];
    el.append(gauge, p, btn);
    document.body.append(el);
    requestAnimationFrame(() => (el.style.opacity = '1'));
    let bites = 0;
    await new Promise<void>((resolve) => {
      btn.addEventListener('click', () => {
        if (bites >= 2) {
          resolve();
          return;
        }
        o.onBite(bites); // 삼킴 — 입력에 즉각 반응하되 반응은 조용하게 (visual-polish §2)
        bites += 1;
        if (bites < 2) {
          btn.textContent = o.steps[1];
          return;
        }
        // 마지막 박자 → 여운 → 밤별 마무리 모놀로그 (그 밤의 마지막 기억)
        btn.disabled = true;
        btn.style.opacity = '0.4';
        setTimeout(() => {
          p.style.opacity = '0';
          setTimeout(() => {
            p.textContent = o.epilogue;
            p.style.opacity = '1';
            btn.textContent = o.endLabel;
            btn.disabled = false;
            btn.style.opacity = '';
          }, 1150);
        }, 1400);
      });
    });
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 1500);
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
