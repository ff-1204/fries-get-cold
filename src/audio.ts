// 프로시저럴 사운드 엔진 — 에셋 없이 WebAudio로 생성
// 근거: affective-design §2-3 (환경음 상시 → 정적 성립), fear-cognition §8 (정적 = 청각 예측 오류)
// 시작 게이트의 사용자 제스처에서 start() 호출 (모바일 자동재생 정책 — responsive-design §4)

const MASTER_VOLUME = 0.9;

export class AudioEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private ambGain: GainNode | null = null;
  private stepTimer = 0;
  private muted = false;

  start() {
    if (this.ctx) {
      void this.ctx.resume();
      return;
    }
    const ctx = new AudioContext();
    this.ctx = ctx;

    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : MASTER_VOLUME;
    this.master.connect(ctx.destination);

    // --- 환경음: 바람 (루프 노이즈 + 로우패스 + 느린 흔들림) ---
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer(4);
    src.loop = true;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 320;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 140;
    lfo.connect(lfoGain).connect(lp.frequency);
    this.ambGain = ctx.createGain();
    this.ambGain.gain.value = 0.05;
    src.connect(lp).connect(this.ambGain).connect(this.master);
    src.start();
    lfo.start();
  }

  suspend() {
    void this.ctx?.suspend();
  }
  resume() {
    void this.ctx?.resume();
  }

  /** 마스터 음소거 — 클릭 노이즈 방지를 위해 짧은 램프로 전환. start() 전에 불러도 안전 */
  setMuted(muted: boolean) {
    this.muted = muted;
    if (!this.ctx || !this.master) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setValueAtTime(this.master.gain.value, t);
    this.master.gain.linearRampToValueAtTime(muted ? 0 : MASTER_VOLUME, t + 0.15);
  }

  /** 이상 구간에서 환경음이 잦아든다 — '정적'이 곧 청각 단서 (시각 단서 병행 원칙) */
  duck(quiet: boolean) {
    if (!this.ctx || !this.ambGain) return;
    const t = this.ctx.currentTime;
    this.ambGain.gain.cancelScheduledValues(t);
    this.ambGain.gain.setValueAtTime(this.ambGain.gain.value, t);
    this.ambGain.gain.linearRampToValueAtTime(quiet ? 0.006 : 0.05, t + 2.2);
  }

  /** 이동 중 호출 — 걸음 간격으로 발소리 (즉각 피드백, design-principles §0) */
  update(dt: number, moving: boolean) {
    if (!this.ctx) return;
    if (!moving) {
      this.stepTimer = 0.12;
      return;
    }
    this.stepTimer -= dt;
    if (this.stepTimer <= 0) {
      this.footstep();
      this.stepTimer = 0.6; // 느린 걸음에 맞춘 보폭 간격 (v0.11.3 walkSpeed 3.2 기준)
    }
  }

  private footstep() {
    const ctx = this.ctx;
    if (!ctx || !this.master) return;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer(0.08);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 170 + Math.random() * 60;
    bp.Q.value = 1.2;
    const g = ctx.createGain();
    const t = ctx.currentTime;
    g.gain.setValueAtTime(0.1, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
    src.connect(bp).connect(g).connect(this.master);
    src.start();
    src.stop(t + 0.1);
  }

  /** 시식 연출 — Peak-End의 End (affective §1-4). quality 0~1: 바삭할수록 밝고 경쾌한 크런치 */
  crunch(quality: number) {
    const ctx = this.ctx;
    if (!ctx || !this.master) return;
    const q = Math.max(0, Math.min(1, quality));
    const bites = q > 0.6 ? 3 : q > 0.3 ? 2 : 1;
    for (let b = 0; b < bites; b++) {
      const when = ctx.currentTime + b * 0.5;
      const crackles = 5 + Math.floor(q * 7);
      for (let i = 0; i < crackles; i++) {
        const src = ctx.createBufferSource();
        src.buffer = this.noiseBuffer(0.03);
        const hp = ctx.createBiquadFilter();
        hp.type = 'highpass';
        hp.frequency.value = 1200 + q * 2500 + Math.random() * 800; // 눅눅하면 둔탁하게
        const g = ctx.createGain();
        const t = when + i * (0.028 + Math.random() * 0.02);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.07 + q * 0.06, t + 0.006);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.03);
        src.connect(hp).connect(g).connect(this.master);
        src.start(t);
        src.stop(t + 0.05);
      }
    }
  }

  /** 차가 지나간다 — 다가왔다 멀어지는 저역 럼블 (v0.11.9).
   *  시각(헤드라이트)의 청각 병행: 화면을 안 보고 있어도 차가 오는 걸 안다 (fear-cognition §8) */
  carPass(seconds: number) {
    const ctx = this.ctx;
    if (!ctx || !this.master) return;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer(seconds + 0.2);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(240, t);              // 멀리서는 둔탁하게
    lp.frequency.linearRampToValueAtTime(900, t + seconds * 0.45); // 가까울수록 열린다
    lp.frequency.linearRampToValueAtTime(220, t + seconds);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.16, t + seconds * 0.45); // 도플러 없이 음량만으로
    g.gain.exponentialRampToValueAtTime(0.0008, t + seconds);
    src.connect(lp).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + seconds + 0.2);
  }

  private noiseBuffer(seconds: number): AudioBuffer {
    const ctx = this.ctx!;
    const len = Math.max(1, Math.floor(ctx.sampleRate * seconds));
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const ch = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      // 브라운 노이즈 근사 (백색보다 부드러운 저역 질감)
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      ch[i] = last * 3.2;
    }
    return buf;
  }
}
