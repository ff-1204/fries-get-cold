// 콘텐츠 데이터 파사드 — 이상현상 콘텐츠는 data/anomalies.json (docs/anomalies.md 스키마).
// 원칙: 콘텐츠는 데이터, 로직은 시스템 — 이상현상 추가에 코드 수정이 필요하면 설계 실패
// (단, 새 '시각 효과'가 필요한 경우만 world.ts에 effect 핸들러 추가)

import anomaliesJson from './data/anomalies.json';

export type AnomalyEffect =
  // ---- 환각 (2026-08-02 컨셉 전환: 이상현상 = 약 기운이 떨어질 때 보이는 것들) ----
  | 'blood_trail' | 'skull' | 'face_window'                    // 구간 1 원룸 골목
  | 'handprints'                                               // 구간 2 상가 골목
  | 'swing_figure' | 'eyes'                                    // 구간 3 놀이터 옆길
  | 'bus_figure'                                               // 구간 4 정류장 앞
  | 'drag_mark'                                                // 구간 5 먹자골목 입구
  | 'figure'                                                   // 전 구간 — 스폰 포인트 랜덤 (HUM)
  // ---- 퇴역 (구 일상 어긋남 문법 — 풀에서 제외, 핸들러는 유지) ----
  | 'umbrella' | 'sensor_on' | 'window_red' | 'flyer_digits'
  | 'laundry_open' | 'sign_lit' | 'realty_urgent'
  | 'swing' | 'lamp_flicker' | 'ball_out'
  | 'traffic_red'
  | 'sign_turn' | 'shop_typo';

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
  /** 밤 = 처방 일차 (FF-1204 5일분 — 하루 한 알, 매일 밤 받으러 간다) */
  nightLabel: (n: number) => `${n}일차`,
  /** 구간 이름 (story.md §4 무대) — HUD에 표기해 "어디를 걷는지"를 학습시킨다 */
  segNames: ['원룸 골목', '상가 골목', '놀이터 옆길', '정류장 앞', '먹자골목 입구'],
  /** cur/total — 접히면 total이 늘어난다. 카운터는 절대 거짓말하지 않는다 (game.md 정직한 판정) */
  segLabel: (cur: number, total: number, theme: number) =>
    `${cur}/${total} — ${TEXT.segNames[theme - 1]}`,
  /** 일차별 인트로 모놀로그 — 병세의 아치: 통증(1–2) → 환각 심화(3–4) → 마지막 한 알(5) */
  intros: [
    '약이 떨어졌다. 새벽 한 시.\n약국은, 처음 가보는 골목 끝에 있다.',
    '이틀째. 몸이 무겁다.\n어제 본 길인데, 어제 같지가 않다.',
    '열이 있다. 손끝이 저리다.\n…보이는 걸 다 믿으면 안 된다.',
    '걷는 게 힘들다.\n안 보여야 할 것들이, 점점 선명해진다.',
    '오늘이 마지막 한 알이다.\n다녀오면, 이 골목은 끝이다.',
  ],
  /** 확인 성공 — 환각은 직시하면 걷힌다 (약 기운 서사: 똑바로 보면 사라진다) */
  spotOk: '…똑바로 봤다. 사라졌다.\n원래, 없던 것이다.',
  /** 원거리 지적 — 확인은 다가가야 성립한다 (비용 없음, 무서운 쪽으로 걸어가게 만드는 설계) */
  tooFar: '…여기서는 확신이 안 선다.\n더 가까이 가서, 봐야 한다.',
  /** 빈 지적 — 과잉 의심의 비용 (즉각 인과: 통증 + 가로등 감광) */
  spotWaste: '아무것도 없다. 머리가 지끈거린다.\n…가로등이 하나, 어두워졌다.',
  /** 접힘 — reveal(무엇을 지나쳤는지) 뒤에 이어 붙는 자각 문구 (인지 보장 4요소 ②) */
  foldNotice: '…같은 골목이다. 약 기운이, 그만큼 더 떨어졌다.',
  softFail:
    '…쓰러졌던 모양이다.\n\n정신을 차려 보니, 골목 입구다.\n주머니에, 약봉투는 없다. 아직.',
  softFailBtn: '…다시 걷는다',
  shopArrive: '새벽약국. 형광등이 눈부시다.\n"FF-1204 처방이시죠."',
  shopBuy: '"오늘 치 한 알입니다.\n…내일 또 오셔야 해요. 하루치씩만 나가요."',
  homeArrive: '현관문을 잠근다. 방 안은, 나갈 때 그대로다.\n물을 뜨는 손이 떨린다.',
  homeOpen: '불도 안 켜고 약을 삼킨다',
  /** 복약 상태 — 접힘 횟수(늦어진 만큼)를 비추는 서사 (balance.ts tasteFromFolds) */
  tasteGauge: { crispy: '💊 늦지 않았다', lukewarm: '💊 조금 늦었다', soggy: '💊 많이 늦었다' },
  resultCrispy: '삼켰다. 통증이 가라앉는다.\n오늘 밤은, 이걸로 됐다.',
  resultLukewarm: '삼켰다. 약효가 도는 데, 한참 걸린다.\n…길이 좀, 길었으니까.',
  resultSoggy: '삼켰다. 한동안 웅크리고 있었다.\n오늘 골목은, 유난히 길었다.',
  /** 복약 마지막 — 일차별 마무리 모놀로그 (story.md §5 각 밤의 '마지막 컷'. Peak-End의 End) */
  epilogues: [
    '괜찮아진다. 신기할 정도로.\n…이 약, 뭘로 만든 거지.',
    '약사가 "또 오셨네요" 했다.\n처방전에, 내 필체가 아닌 메모가 있다.',
    '3일차 칸에 체크가 두 개다.\n…내가, 두 번 갔었나.',
    '봉투 안에 알약이 두 개다.\n처방은 분명, 하루 한 알이다.',
    '다 먹었다. 처방이 끝났다.\n…내일부터, 안 아픈 거지. 그렇지.',
  ],
  tasteEnd: '불을 끄고 눕는다',
  /** 처방 카드 6일차+ — 칸 밖 체크 (5일분 처방: 다섯 밤의 디제틱 명분, story.md §2) */
  couponOverflow: '…6일차 칸은, 처방전에 없다.',
};
