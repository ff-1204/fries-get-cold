// 콘텐츠 데이터 — M1에서 src/data/*.json으로 이전 예정 (docs/anomalies.md 스키마)

export type AnomalyEffect = 'window_light' | 'lamp_flicker' | 'umbrella' | 'sign_tilt';

export interface AnomalyDef {
  id: string;
  effect: AnomalyEffect;
  /** 실패 직후 암시 문구 (design-principles §3 — 공정성) */
  reveal: string;
}

export const ANOMALIES: AnomalyDef[] = [
  { id: 'A-002', effect: 'window_light',  reveal: '…그 창문, 원래 불이 꺼져 있었는데.' },
  { id: 'A-008', effect: 'lamp_flicker',  reveal: '…가로등이 두 번씩 깜빡이고 있었다.' },
  { id: 'A-001', effect: 'umbrella',      reveal: '…아무도 안 버린 우산이 놓여 있었다.' },
  { id: 'A-013', effect: 'sign_tilt',     reveal: '…입간판이 나를 향해 돌아가 있었다.' },
];

export const CONFIG = {
  segments: 5,             // 편도 구간 수
  segLength: 36,           // 구간 길이 (m)
  corridorHalfWidth: 3,    // 골목 절반 폭
  walkSpeed: 4.2,          // m/s
  runSpeed: 7.0,
  baseAnomalyChance: 0.4,  // 구간당 이상 발생 기본 확률 (docs/anomalies.md)
  chancePerMinute: 0.06,   // 새벽이 깊을수록 상승
  tempMax: 100,
  // 귀갓길 자연 하락 — 목표: 전 구간 보통 걸음(~50초) = 미지근 도착 (design-principles §4).
  // 걷기 ≈ 55%(미지근), 전력 질주 ≈ 73%(바삭), 걷기+우회 2회 ≈ 23%(눅눅) — 플레이테스트로 재조정
  tempDecayPerSec: 0.9,
  sidePathTempCost: 9,     // 샛길 우회 1회당 온도 비용
  sidePathTimeCost: 12,    // (가는 길) 샛길 1회당 경과 시간 가산 초 → 위험 증가
  crispyThreshold: 62,     // 이상: 바삭
  lukewarmThreshold: 30,   // 이상: 미지근 / 미만: 눅눅
};

export const TEXT = {
  nightLabel: (n: number) => `밤 ${n}`,
  segLabel: (s: number, total: number, returning: boolean) =>
    returning ? `귀갓길 ${total - s + 1}/${total}` : `${s}/${total} 구간`,
  /** 밤별 인트로 모놀로그 — 담담한 톤 유지 (story.md 톤 가이드) */
  intros: [
    '새벽 한 시. 감자튀김이 먹고 싶다.',
    '또 새벽 한 시. 또, 감자튀김이 먹고 싶다.',
    '이 동네, 좀 이상하다. 근데 감자튀김이 더 급하다.',
    '오늘은 나가지 말까 했다. 신발을 신으며 생각했다.',
    '…오늘은 별로 먹고 싶지도 않은데. 근데 왜 나와 있지.',
  ],
  sideSafe: '샛길로 우회했다. …본길 쪽에서 무언가 지나가는 소리.',
  sideWaste: '괜한 걱정이었다. 시간만 흘렀다.',
  sideWasteReturn: '괜한 걱정이었다. …감자튀김이 식는다.',
  shopArrive: '버거버거 24시. 형광등이 눈부시다.',
  shopBuy: '"감자튀김 엘 사이즈, 삼천이백 원입니다."',
  returnStart: '봉투가 따뜻하다. 식기 전에 돌아가자.',
  fail: '…침대에서 눈을 뜬다.\n손에는 아무것도 없다.\n그리고, 여전히 감자튀김이 먹고 싶다.',
  resultCrispy: '바삭하다.\n오늘 밤은, 이걸로 됐다.',
  resultLukewarm: '미지근하다.\n…그래도 감자튀김은 감자튀김이다.',
  resultSoggy: '눅눅하다.\n신중함도 공짜가 아니구나.',
};
