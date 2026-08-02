// 콘텐츠 데이터 파사드 — 이상현상 콘텐츠는 data/anomalies.json (docs/anomalies.md 스키마).
// 원칙: 콘텐츠는 데이터, 로직은 시스템 — 이상현상 추가에 코드 수정이 필요하면 설계 실패
// (단, 새 '시각 효과'가 필요한 경우만 world.ts에 effect 핸들러 추가)

import anomaliesJson from './data/anomalies.json';

export type AnomalyEffect =
  | 'umbrella' | 'sensor_on' | 'window_red' | 'flyer_digits'   // 구간 1 원룸 골목
  | 'laundry_open' | 'sign_lit' | 'realty_urgent'              // 구간 2 상가 골목
  | 'swing' | 'lamp_flicker' | 'ball_out'                      // 구간 3 놀이터 옆길
  | 'traffic_red'                                              // 구간 4 정류장 앞
  | 'sign_turn' | 'shop_typo'                                  // 구간 5 먹자골목 입구
  | 'figure';                                                  // 전 구간 — 스폰 포인트 랜덤 (HUM)

export interface AnomalyDef {
  id: string;
  night: number;      // 등장 시작 밤
  /** 배치 구간 1~5 — 구간 테마의 사물에만. 0 = 전 구간 (스폰 포인트 랜덤 출현형) */
  segment: number;
  category: 'OBJ' | 'LGT' | 'TXT' | 'HUM' | 'SPC' | 'SND' | 'MTA';
  effect: AnomalyEffect;
  /** 접힘 직후 암시 문구 (design-principles §3 — 공정성) */
  reveal: string;
  /** 가는 길 전용 — 귀갓길에는 보이지 않는 사물(버거집 간판 등)에 지정 (공정성) */
  outboundOnly?: boolean;
}

export const ANOMALIES = anomaliesJson as AnomalyDef[];

// 수치 상수는 config.ts로 분리 (JSON 의존이 없어 Node 시뮬레이션 테스트가 직접 읽는다)
// — 기존 import 경로 유지를 위한 파사드 재수출
export { CONFIG } from './config';

export const TEXT = {
  nightLabel: (n: number) => `밤 ${n}`,
  /** 구간 이름 (story.md §4 무대) — HUD에 표기해 "어디를 걷는지"를 학습시킨다 */
  segNames: ['원룸 골목', '상가 골목', '놀이터 옆길', '정류장 앞', '먹자골목 입구'],
  /** cur/total — 접히면 total이 늘어난다. 카운터는 절대 거짓말하지 않는다 (game.md 정직한 판정) */
  segLabel: (cur: number, total: number, theme: number) =>
    `${cur}/${total} — ${TEXT.segNames[theme - 1]}`,
  /** 밤별 인트로 모놀로그 — 3막 아치: 낯섦(1–2) → 홀림(3–4) → 목적 전도(5) (story.md §5) */
  intros: [
    '처음 가보는 길이다.\n낯선 건지, 이상한 건지 아직 모르겠다.',
    '두 번째라서 알겠다.\n어제랑 다른 데가 있으면, 그건 낯선 게 아니다.',
    '오는 길에 생각했다.\n…나 지금, 도장 때문에 가는 거 맞지?',
    '골목이 나를 기다린 것 같다.\n기분 탓이면 좋겠다.',
    '먹고 싶지 않다. 근데 신발을 신고 있다.\n오늘은 가는 게 아니라, 돌아오는 게 목표다.',
  ],
  /** 확인 성공 — 이상은 사라지지 않는다. 확인했다는 사실만 남는다 (대면 확인) */
  spotOk: '…확인했다.\n아직, 그 자리에 있다.',
  /** 원거리 지적 — 확인은 다가가야 성립한다 (비용 없음, 무서운 쪽으로 걸어가게 만드는 설계) */
  tooFar: '…여기서는 잘 안 보인다.\n더 가까이 가야 한다.',
  /** 빈 지적 — 과잉 의심의 비용 (즉각 인과: 가로등 감광과 동시) */
  spotWaste: '아무것도 아니다.\n…가로등이 하나, 어두워졌다.',
  /** 접힘 — reveal(무엇이 어긋났었는지) 뒤에 이어 붙는 자각 문구 (인지 보장 4요소 ②) */
  foldNotice: '…같은 골목이다. 걸어온 만큼, 늘어나 있다.',
  softFail:
    '…여기가 어디지.\n\n정신을 차려 보니, 골목 입구다.\n그리고, 여전히 감자튀김이 먹고 싶다.',
  softFailBtn: '…다시 걷는다',
  shopArrive: '감자상회. 새 가게 냄새와 기름 냄새.\n형광등이 눈부시다.',
  shopBuy: '"감자튀김 엘 사이즈, 삼천이백 원입니다.\n…도장 찍어 드릴게요."',
  homeArrive: '현관문을 잠근다. 방 안은, 나갈 때 그대로다.\n봉투에서 기름 냄새가 올라온다.',
  homeOpen: '불도 안 켜고 봉투를 뜯는다',
  /** 시식 게이지 자리 — 온도 시스템 퇴역, 감자튀김은 접힘 횟수를 비추는 서사로만 (balance.ts) */
  tasteGauge: { crispy: '🍟 아직 따뜻하다', lukewarm: '🍟 조금 식었다', soggy: '🍟 다 식었다' },
  resultCrispy: '바삭하다.\n오늘 밤은, 이걸로 됐다.',
  resultLukewarm: '미지근하다.\n…길이 좀, 길었으니까.',
  resultSoggy: '눅눅하다.\n오늘 골목은, 유난히 길었다.',
  /** 시식 마지막 — 밤별 마무리 모놀로그 (story.md §5 각 밤의 '마지막 컷'. Peak-End의 End) */
  epilogues: [
    '맛있다. 진짜 맛있다.\n…새로 생긴 가게가, 왜 24시간을 하지.',
    '사장님이 "또 오셨네요" 했다.\n두 번째인데, "또"라니.',
    '도장 세 개.\n…내가 안 간 날짜에, 하나 더 찍혀 있는 것 같다.',
    '봉투 안에 영수증이 두 장 들어 있다.\n한 장은 오늘 날짜. 한 장은, 내일 날짜.',
    '다 모았다. 무료 쿠폰이 생겼다.\n…당분간, 안 쓸 거다.',
  ],
  tasteEnd: '불을 끄고 눕는다',
  /** 쿠폰 도장 카드 밤 6+ — 칸 밖 도장 (개업 이벤트: 다섯 밤의 디제틱 명분, story.md §2) */
  couponOverflow: '…여섯 번째 도장은, 칸 밖에 찍혀 있다.',
};
