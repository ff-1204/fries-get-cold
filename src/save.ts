// 기기 내 저장 (localStorage) — 모든 기록은 이 브라우저 안에만 남는다 (docs/privacy.md)
// 서버 전송 없음. 스키마가 바뀌면 KEY의 버전을 올리고 sanitize에서 마이그레이션한다.

export type TasteResult = 'crispy' | 'lukewarm' | 'soggy';

export interface SaveData {
  night: number;                    // 다음에 시작할 밤 (1부터)
  misses: number;                   // 누적 실패 횟수 — 히든 엔딩 '노미스' 판정용 (game.md 엔딩)
  results: (TasteResult | null)[];  // 밤별 마지막 시식 결과 (인덱스 = 밤 - 1)
  brightness: number;               // 밝기 슬라이더 (톤 매핑 노출)
  muted: boolean;                   // 사운드 끔 여부
}

const KEY = 'fries.save.v1';
const DEFAULTS: SaveData = { night: 1, misses: 0, results: [], brightness: 1.0, muted: false };

/** 외부 데이터 방어 — 손상·조작된 값이 게임 상태를 깨지 않게 기본값으로 되돌린다 */
function sanitize(raw: unknown): SaveData {
  const d: SaveData = { ...DEFAULTS, results: [] };
  if (typeof raw !== 'object' || raw === null) return d;
  const r = raw as Record<string, unknown>;
  if (typeof r.night === 'number' && Number.isInteger(r.night) && r.night >= 1 && r.night <= 99)
    d.night = r.night;
  if (typeof r.misses === 'number' && Number.isInteger(r.misses) && r.misses >= 0)
    d.misses = r.misses;
  if (Array.isArray(r.results))
    d.results = r.results
      .slice(0, 99)
      .map((v) => (v === 'crispy' || v === 'lukewarm' || v === 'soggy' ? v : null));
  if (typeof r.brightness === 'number' && r.brightness >= 0.6 && r.brightness <= 1.9)
    d.brightness = r.brightness;
  if (typeof r.muted === 'boolean') d.muted = r.muted;
  return d;
}

function load(): SaveData {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? sanitize(JSON.parse(raw)) : { ...DEFAULTS, results: [] };
  } catch {
    // 파싱 실패·프라이빗 모드 등 — 저장 없이도 플레이는 가능해야 한다
    return { ...DEFAULTS, results: [] };
  }
}

/** 현재 세이브 상태. 필드를 고친 뒤 persist()를 부른다. */
export const save: SaveData = load();

export function persist(): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(save));
  } catch {
    // 저장 불가(용량 초과·프라이빗 모드) — 조용히 무시, 게임 진행에는 지장 없음
  }
}

export function resetSave(): void {
  Object.assign(save, DEFAULTS, { results: [] });
  try {
    localStorage.removeItem(KEY);
  } catch {
    // 접근 불가 환경 — 메모리상 초기화만으로 충분
  }
}

export function hasProgress(): boolean {
  return save.night > 1 || save.misses > 0;
}
