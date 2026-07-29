// 콘텐츠 데이터 파사드 — 이상현상 콘텐츠는 data/anomalies.json (docs/anomalies.md 스키마).
// 원칙: 콘텐츠는 데이터, 로직은 시스템 — 이상현상 추가에 코드 수정이 필요하면 설계 실패
// (단, 새 '시각 효과'가 필요한 경우만 world.ts에 effect 핸들러 추가)

import anomaliesJson from './data/anomalies.json';

export type AnomalyEffect =
  | 'umbrella' | 'sensor_on' | 'window_red' | 'flyer_digits'   // 구간 1 원룸 골목
  | 'laundry_open' | 'sign_lit' | 'realty_urgent'              // 구간 2 상가 골목
  | 'swing' | 'lamp_flicker' | 'ball_out'                      // 구간 3 놀이터 옆길
  | 'traffic_red'                                              // 구간 4 정류장 앞
  | 'sign_turn' | 'shop_typo';                                 // 구간 5 먹자골목 입구

export interface AnomalyDef {
  id: string;
  night: number;      // 등장 시작 밤
  segment: number;    // 배치 구간 (1~5) — 구간 테마의 사물에만 걸 수 있다
  category: 'OBJ' | 'LGT' | 'TXT' | 'HUM' | 'SPC' | 'SND' | 'MTA';
  effect: AnomalyEffect;
  /** 실패 직후 암시 문구 (design-principles §3 — 공정성) */
  reveal: string;
  /** 가는 길 전용 — 귀갓길에는 보이지 않는 사물(버거집 간판 등)에 지정 (공정성) */
  outboundOnly?: boolean;
}

export const ANOMALIES = anomaliesJson as AnomalyDef[];

export const CONFIG = {
  segments: 5,             // 편도 구간 수
  segLength: 36,           // 구간 길이 (m)
  corridorHalfWidth: 3,    // 골목 절반 폭
  walkSpeed: 4.2,          // m/s
  runSpeed: 7.0,
  baseAnomalyChance: 0.4,  // 구간당 이상 발생 기본 확률 (docs/anomalies.md)
  chancePerMinute: 0.06,   // 새벽이 깊을수록 상승
  tempMax: 100,
  // 귀갓길 자연 하락 — 목표: 전 구간 보통 걸음 = 미지근 도착 (design-principles §4).
  // 헤드리스 실측(2026-07-30): 걷기 61%(미지근) · 질주 77%(바삭) · 걷기+과잉우회 2회 ≈27%(눅눅)
  tempDecayPerSec: 0.9,
  // 샛길 우회 1회당 온도 비용 — 정당 우회(이상 있음)는 ×0.5, 과잉 경계(정상)는 ×1.5.
  // 샛길이 거리상 본길과 비슷해 시간 비용이 미미하므로 이 값이 과잉 경계 억제의 전부다
  sidePathTempCost: 12,
  sidePathTimeCost: 12,    // (가는 길) 샛길 1회당 경과 시간 가산 초 → 위험 증가
  crispyThreshold: 62,     // 이상: 바삭
  lukewarmThreshold: 30,   // 이상: 미지근 / 미만: 눅눅
};

export const TEXT = {
  nightLabel: (n: number) => `밤 ${n}`,
  /** 구간 이름 (story.md §4 무대) — HUD에 표기해 "어디를 걷는지"를 학습시킨다 */
  segNames: ['원룸 골목', '상가 골목', '놀이터 옆길', '정류장 앞', '먹자골목 입구'],
  segLabel: (s: number, total: number, returning: boolean) =>
    returning
      ? `귀갓길 ${total - s + 1}/${total} — ${TEXT.segNames[s - 1]}`
      : `${s}/${total} — ${TEXT.segNames[s - 1]}`,
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
  homeArrive: '현관문을 잠근다. 방 안은, 나갈 때 그대로다.\n봉투에서 기름 냄새가 올라온다.',
  homeOpen: '불도 안 켜고 봉투를 뜯는다',
  resultCrispy: '바삭하다.\n오늘 밤은, 이걸로 됐다.',
  resultLukewarm: '미지근하다.\n…그래도 감자튀김은 감자튀김이다.',
  resultSoggy: '눅눅하다.\n신중함도 공짜가 아니구나.',
  /** 시식 마지막 — 밤별 마무리 모놀로그 (story.md §5 각 밤의 '마지막 컷'. Peak-End의 End) */
  epilogues: [
    '맛있다.\n근데 세탁소, 새벽 두 시에 왜 열려 있지.',
    '나만 이러고 사는 게 아니구나. 조금 안심된다.\n…안심할 일인가?',
    '그 알바, 내 이름을 부른 적이 있던가.\n내가 말해준 적이 없는데.',
    '봉투 안에 영수증이 두 장 들어 있다.\n한 장은 오늘 날짜. 한 장은, 내일 날짜.',
    '…내일은, 안 나가도 되면 좋겠다.',
  ],
  tasteEnd: '불을 끄고 눕는다',
};
