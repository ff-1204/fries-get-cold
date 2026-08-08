// 테마 2 — 상가 골목. 이 구간의 문법: **셔터는 닫혀 있다**.
// 닫힌 셔터가 '학습된 정상'을 강화할수록 세탁소 반열림(A-004)의 위반이 도드라진다.

import * as THREE from 'three';
import { type Build, type Theme2Refs } from '../refs';
import { box, boxOf, concrete, realtyTexture, handprintsTexture } from '../kit';
import { L, HW } from '../layout';

type E = 'laundry_open' | 'sign_lit' | 'realty_urgent' | 'handprints' | 'shutter_glow'
  | 'lone_shadow';

export function createTheme2(): Build<Theme2Refs, E> {
  const t2 = new THREE.Group();

  // 24시 세탁소 (오른쪽 벽면 파사드 — A-004: 셔터 반열림 + 내부 불)
  // 벽과 평행 — 왼쪽 셔터 가게들과 같은 문법. 통로에 수직으로 꽂힌 M0 슬랩은
  // 골목을 반쯤 막은 벽처럼 보였고 눈높이라 카메라가 관통했다 (2026-07-30 맵 구조 수정)
  const laundryInterior = box(0.08, 2.0, 2.6, 0x141824, HW - 0.06, 1.25, -L * 0.39, t2);
  const laundryMat = laundryInterior.material as THREE.MeshStandardMaterial;
  const laundryShutter = box(0.12, 2.2, 2.7, 0x2b3244, HW - 0.18, 1.25, -L * 0.39, t2);
  const laundryLight = new THREE.PointLight(0xcfe0e8, 0, 8, 1.8);
  laundryLight.position.set(HW - 0.9, 1.3, -L * 0.39);
  t2.add(laundryLight);

  // H-004 셔터의 손자국들 — 세탁소 셔터 앞면. 안쪽에서 찍힌 방향 (reveal이 말해준다)
  // ⚠⚠ **자국마다 메시로 쪼개 봤다가 되돌렸다** (v0.11.57): 대비 14.5 → **2.6 (FAIL)**.
  //
  // v0.11.49에 핏자국에서 배운 "부품마다 따로 낸다"를 그대로 적용한 것인데, 여기서는
  // 정반대로 작동했다. 차이는 **면의 방향**이다:
  //   · 바닥의 핏자국 — 흩어진 점들 사이의 아스팔트가 합집합 사각에 섞여 평균이 씻겼다 → 분할이 답
  //   · 벽의 손자국 — 벽과 나란해 늘 **비스듬히** 보인다. 쪼갤수록 각 사각이 몇 픽셀로 줄고
  //     그 안의 투명한 여백에 뒤의 셔터가 그대로 들어온다 → 한 장이 낫다
  // ⭐ **규칙은 "쪼개라"가 아니라 "사각이 대상으로 꽉 차게 하라"였다.**
  const handprints = new THREE.Mesh(
    new THREE.PlaneGeometry(2.4, 1.7),
    new THREE.MeshStandardMaterial({ map: handprintsTexture(), transparent: true, roughness: 1 }),
  );
  handprints.position.set(HW - 0.25, 1.25, -L * 0.39); // 셔터(x=HW-0.18, 두께 0.12) 바로 앞
  handprints.rotation.y = -Math.PI / 2;
  handprints.visible = false;
  t2.add(handprints);

  // 상가 간판들 (소등 상태가 정상 — A-006: 하나가 켜짐)
  // 타깃 간판은 가로등 옆(z=-L*0.5) — 걸으며 자연 시야에 들어오는 각도 (배치 규칙 1·2)
  const storeSign = box(1.7, 0.65, 0.14, 0x1e2434, HW - 0.1, 3.2, -L * 0.5, t2);
  const storeSignMat = storeSign.material as THREE.MeshStandardMaterial;
  box(1.5, 0.6, 0.14, 0x1c2130, HW - 0.1, 3.4, -L * 0.29, t2);
  box(1.9, 0.7, 0.14, 0x20263a, HW - 0.1, 3.1, -L * 0.62, t2);

  // 부동산 유리창 시세표 (왼쪽 벽, 가로등 사거리 안 — A-005: "월세 35" → "급구")
  const realtyTex: [THREE.CanvasTexture, THREE.CanvasTexture] = [
    realtyTexture(false),
    realtyTexture(true),
  ];
  const realtyMat = new THREE.MeshStandardMaterial({ map: realtyTex[0], roughness: 0.85 });
  const realty = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.1), realtyMat);
  realty.position.set(-HW + 0.01, 1.5, -L * 0.5);
  realty.rotation.y = Math.PI / 2;
  t2.add(realty);

  // 구조 차별화 — 닫힌 셔터 가게(슬랫 실루엣)·어닝·보도 단차 (상가의 문법: 셔터는 닫혀 있다)
  // ---------- 밀도 (v0.11.34) — 가로등을 지나면 아무것도 없는 복도였다 ----------
  // 셔터 가게를 **양쪽 전 구간으로** 늘린다. 상가 골목의 정상은 '닫혀 있음'이고,
  // 그 반복이 많을수록 세탁소 반열림(A-004) 하나가 도드라진다 (fear-cognition §1)
  // ---------- ⭐ 색 (v0.11.67 — 퇴근길4 원칙 ⑥) ----------
  // ⚠⚠ **전부 파란 기가 있었다** (`0x2a3143` `0x232134` `0x20263a` …). 골목 벽이 한색
  //   `0x232838`이라 같은 계열로 맞춘 값인데, 그러면 셔터도 어닝도 간판도 **벽과 한 덩어리**가
  //   된다 — `theme-seg2-mid` 실측 스크린샷에서 가로등을 지난 뒤 형태가 하나도 안 읽혔다.
  //   ⭐ 정류장 골조가 남색 `0x2a3142` → 중성 차콜 `0x1d2129`로 바뀐 그 교정과 같은 것이다:
  //     **파란 기를 빼면 벽에서 떨어져 나온다.**
  const M = {
    shutter: concrete(0x2c2f34), slat: concrete(0x1c1e22), awning: concrete(0x26282d),
    // ⭐ 어닝 **밑면** — 정류장 캐노피의 `CEIL`(0xb4bac2)과 같은 일을 한다: 밝은 밑판 한 장이
    //   '이 밑은 안쪽'을 만들고, 가로등 빛을 받아 어두운 골목에 가로 띠를 낸다
    awningUnder: concrete(0x8a8f98),
    curb: concrete(0x24262b), sign: concrete(0x212429), steel: concrete(0x35383f),
    prop: concrete(0x272a30),
    // ⚠ **휘도는 유지하고 색상만 돌린다** — 중성화의 목적은 파란 기를 빼는 것이지
    //   어둡게 하는 것이 아니다. `0x171c2a`(휘도 ≈28)에 맞춰 잡은 값이다.
    //   (지하 계단 어둠이 H-019의 배경을 낮추는 줄 알고 고친 것인데 **실측은 안 움직였다** —
    //    6.9 → 6.8. 가설은 틀렸고 값만 원칙에 맞게 남는다)
    dark: concrete(0x1a1b1f),
  };

  // ---------- 셔터 가게 (v0.11.34 밀도 · v0.11.67 형태) ----------
  // ⭐ **치수를 셔터에서 파생시킨다** (퇴근길4 원칙 ⑤ — 연석 길이를 `BOOTH_Z + 1.6`으로
  //   뽑은 그것). 하드코딩이면 셔터 폭을 바꾸는 순간 어닝·간판·단차가 따로 논다
  const SH_D = 2.3;                       // 셔터 깊이(z) — 이 구간의 기준 치수
  const SHUTTERS: Array<[number, number]> = [
    [-1, -L * 0.3], [-1, -L * 0.68], [-1, -L * 0.86], [1, -L * 0.19], [1, -L * 0.76],
  ];
  for (const [s, sz] of SHUTTERS) {
    const x = s * (HW - 0.1);
    boxOf(M.shutter, 0.12, 2.1, SH_D, x, 1.15, sz, t2);
    for (let i = 0; i < 4; i++) boxOf(M.slat, 0.13, 0.05, SH_D, x, 0.45 + i * 0.5, sz, t2);
    // 어닝 — **밑면과 앞단을 따로 준다.** 판 한 장은 비스듬한 선일 뿐이라 실루엣이 없었다
    const awning = boxOf(M.awning, 0.85, 0.07, SH_D + 0.2, s * (HW - 0.5), 2.65, sz, t2);
    awning.rotation.z = s * 0.3;                                   // 벽에서 내려오는 처마
    const under = boxOf(M.awningUnder, 0.78, 0.03, SH_D + 0.12, s * (HW - 0.5), 2.61, sz, t2);
    under.rotation.z = s * 0.3;
    // 앞단(파시아) — 정류장에서 실루엣의 정체를 만든 그 한 줄
    boxOf(M.awning, 0.06, 0.18, SH_D + 0.2, s * (HW - 0.88), 2.5, sz, t2);
    // 지지 파이프 둘 — 어닝이 '천막'이 되려면 매달린 근거가 보여야 한다
    for (const d of [-1, 1]) {
      boxOf(M.steel, 0.04, 0.62, 0.04, s * (HW - 0.86), 2.92, sz + d * (SH_D / 2 - 0.1), t2);
    }
    boxOf(M.sign, 0.14, 0.5, SH_D - 0.3, s * (HW - 0.12), 3.05, sz, t2);  // 가게 간판 (소등)
  }
  // ---------- H-011 셔터 밑으로 새는 빛 (밤 3, 직시 — 새 분류 LGT) ----------
  // 이 구간의 정상은 **닫혀 있음**이다. 닫힌 셔터 다섯이 그 정상을 학습시키고,
  // 그중 하나의 **밑에서만** 빛이 샌다 — 형체도 사물도 아닌, 안에 무언가 켜져 있다는 사실.
  // 왼쪽 -L*0.68 셔터. 가로등(-L*0.45) 사거리 밖이라 자체 발광이 곧 실루엣 대비다
  // ⚠ **판정 대상은 바닥에 깔린 빛이다.** 셔터면·보도 단차 사이에 얇은 띠를 끼우려다 두 번
  // 파묻혔다 (가림 검사 0/5 ×2). 벽 쪽 좁은 틈은 프롭이 이미 꽉 차 있어 새 물건이 들어갈
  // 자리가 아니다 — **통행부 바닥은 언제나 비어 있고**, 새어 나온 빛이 거기 퍼지는 것이
  // 그림으로도 맞다. 어두운 바닥에 뜬 웜 패치라 실루엣 대비도 최대다
  const glowZ = -L * 0.68;
  const shutterGlowMat = new THREE.MeshStandardMaterial({ color: 0x11141c, roughness: 1 });
  const shutterGlow = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 2.0), shutterGlowMat);
  shutterGlow.rotation.x = -Math.PI / 2;
  shutterGlow.position.set(-(HW - 1.55), 0.02, glowZ);  // 단차 바깥 = 통행부 바닥
  t2.add(shutterGlow);
  // 셔터 밑의 틈 자체 — **여기만 발광한다.** 빛의 출처가 보여야 바닥의 밝음이 설명된다
  const shutterGlowSlitMat = new THREE.MeshStandardMaterial({ color: 0x11141c });
  const shutterGlowSlit = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.1, 2.1), shutterGlowSlitMat);
  shutterGlowSlit.position.set(-(HW - 0.3), 0.18, glowZ);
  t2.add(shutterGlowSlit);
  const shutterGlowLight = new THREE.PointLight(0xffe0a8, 0, 6.5, 2);
  shutterGlowLight.position.set(-(HW - 0.9), 0.5, glowZ);
  t2.add(shutterGlowLight);

  // ---------- ⭐ 보도 단차 — **가게 앞에만** (v0.11.67, 퇴근길4 원칙 ③ 국소화) ----------
  // ⚠⚠ `L * 0.92`(33m)로 **구간 전체를 달리고** 있었다. 정류장 연석이 정확히 같은 상태였고
  //   (v0.11.61에 `L*0.9` → 부스 앞으로), 걷어낸 이유도 그대로 적용된다:
  //   ① 가게와 무관한 곳까지 턱이 이어져 **'여기가 가게 앞'이라는 신호가 묽어진다**
  //   ② 가로로 긴 띠 둘이 화면 하단을 끝까지 갈라 **구간을 반으로 자른다**
  //   ⭐ 가게마다 그 앞에만 깔면 신호도 서고 **36m에 리듬도 생긴다** (원칙 ②).
  // ⚠ H-011의 바닥 빛(x −1.45)은 단차(x −2.72, 폭 0.55) **바깥**이라 이 변경에 안 걸린다 —
  //   −L*0.68 셔터 앞 단차는 그대로 남으므로 "단차 바깥 = 통행부 바닥"도 그대로다
  // ⚠⚠ **단차 길이는 그 가게의 깊이에서 파생시킨다** (원칙 ⑤). 셔터 폭(2.3)으로 통일했더니
  //   세탁소(파사드 깊이 2.7) 앞 단차가 z −15.94에서 끝나 **가로등(−16.2)에 0.26m 모자랐고**,
  //   H-019(주인 없는 그림자)의 배경이 되던 밝은 면이 그만큼 빠져 실측이 7.3 → 6.7로 내려갔다.
  //   ⭐ 가게 깊이에서 뽑으면 세탁소 단차가 −18.24까지 가서 가로등을 품는다 — 물리적으로도
  //     맞다(큰 가게 앞은 인도도 길다). **국소화는 '짧게'가 아니라 '그 물건에 맞게'다.**
  const curbAt = (s: number, cz: number, depth: number) =>
    boxOf(M.curb, 0.55, 0.14, depth + 1.5, s * (HW - 0.28), 0.07, cz, t2);
  for (const [s, cz] of SHUTTERS) curbAt(s, cz, SH_D);
  curbAt(1, -L * 0.39, 2.7);          // 세탁소도 가게다 — 깊이는 파사드(2.7)를 따른다

  // ---------- ⭐⭐ 자판기 — **이 장소가 갖는 제 빛** (v0.11.67, 퇴근길4 원칙 ⑦) ----------
  // ⚠⚠ 이 구간은 **공용 가로등 하나에 전부를 걸고 있었다.** `theme-seg2-mid` 실측
  //   스크린샷(가로등을 지난 뒤)이 거의 완전한 암흑이다 — v0.11.34가 "가로등을 지나면
  //   아무것도 없는 복도"라며 셔터 다섯을 넣었는데, **넣어도 비출 것이 없어 안 보였다.**
  //   정류장은 부스 형광등을, 놀이터는 보안등을 갖는데 여기만 없었다.
  //
  // ⭐ **왜 자판기인가**: ① 셔터가 다 내려간 골목에서 24시간 켜져 있는 것이 자연스럽다
  //   ② 한색(형광)이라 웜=안전·목표 규칙을 안 건드린다 ③ **밝은 면**이라 원칙 ⑥의
  //   "밝기는 안쪽 면이 낸다"도 같이 채운다 ④ 간판을 켜는 것은 A-006(하나만 켜짐)의 몫이라 못 쓴다
  //
  // ⚠⚠ **자리는 이상현상이 정한다.** H-011(셔터 밑 빛, 왼쪽 −L*0.68)은 "가로등 사거리 밖이라
  //   자체 발광이 곧 실루엣 대비"인 배치다 — 그 근처에 광원을 두면 그 이상현상이 죽는다.
  //   그래서 **구간 끝(−L*0.91)**에 둔다: H-011에서 8.6m, 광원 사거리 5.5m라 안 닿고,
  //   가장 어두웠던 구간 후반이 밝아지며, 걸어가는 내내 "저 끝에 하나 켜져 있다"가 된다.
  // ⚠ 깊이는 0.38뿐이다 — 실물보다 얇지만 **지면 여유가 0.4m**다(벽 3.0 · 한계 2.6).
  //   정류장 라이트박스가 판을 돌려 6cm만 쓴 것과 같은 타협이고, 정면에서 보면 자판기다
  const VEND_Z = -L * 0.91;
  const VEND_X = HW - 0.19;
  boxOf(M.shutter, 0.38, 1.9, 1.05, VEND_X, 0.95, VEND_Z, t2);          // 몸체
  boxOf(M.steel, 0.4, 0.06, 1.11, VEND_X, 1.93, VEND_Z, t2);            // 윗단
  // 앞면 — **여기만 발광한다.** 넓은 면에 발광을 걸면 칠한 사각형이 되므로(workflow.md)
  // 발광면은 진열창 한 칸으로 좁히고, 골목이 밝아지는 것은 아래 광원이 맡는다
  const vendFace = new THREE.MeshStandardMaterial({ color: 0x6e7a86, roughness: 0.5 });
  vendFace.emissive.setHex(0x7d8ea0);
  boxOf(vendFace, 0.05, 0.92, 0.86, VEND_X - 0.2, 1.24, VEND_Z, t2);
  for (let i = 0; i < 3; i++) {          // 진열 상품 — 밝은 면 위의 실루엣이 '자판기'를 만든다
    for (let k = 0; k < 2; k++) {
      boxOf(M.dark, 0.03, 0.2, 0.16, VEND_X - 0.23, 1.5 - k * 0.44, VEND_Z - 0.26 + i * 0.26, t2);
    }
  }
  boxOf(M.dark, 0.06, 0.22, 0.66, VEND_X - 0.19, 0.42, VEND_Z, t2);     // 반출구
  // ⚠ 한색·근거리. 세면 이 구간의 어둠 자체가 없어지고, 깊이 사다리(가로등)가 게이지 노릇을
  //   못 한다 — 자판기는 **자기 앞만** 밝히면 된다
  const vendLight = new THREE.PointLight(0xa8c0d8, 3.4, 5.5, 2);
  vendLight.position.set(VEND_X - 0.75, 1.3, VEND_Z);
  t2.add(vendLight);

  // 지하 계단 입구 — 상가 골목에만 있는 구멍. 난간 + 파인 어둠
  boxOf(M.dark, 0.9, 0.3, 1.8, -HW + 0.55, 0.02, -L * 0.44, t2);
  for (const rz of [-L * 0.41, -L * 0.47]) {
    boxOf(M.steel, 0.06, 0.9, 0.06, -HW + 1.0, 0.45, rz, t2);
  }
  boxOf(M.steel, 0.06, 0.06, 1.3, -HW + 1.0, 0.88, -L * 0.44, t2);

  // 실외기 열 · 배관 · 기대둔 입간판 · 폐지 묶음 (전부 통행 한계 ±2.6 밖)
  for (const [s, az] of [[1, -L * 0.42], [1, -L * 0.58], [-1, -L * 0.55]] as Array<[number, number]>) {
    boxOf(M.prop, 0.5, 0.42, 0.8, s * (HW - 0.28), 1.9, az, t2);
  }
  boxOf(M.steel, 0.16, 4.6, 0.16, HW - 0.2, 2.3, -L * 0.35, t2);      // 세로 배관
  boxOf(M.steel, 0.12, 0.12, L * 0.4, HW - 0.2, 2.55, -L * 0.55, t2); // 가로 배관
  const board = boxOf(M.prop, 0.16, 1.0, 0.7, -HW + 0.32, 0.5, -L * 0.24, t2);
  board.rotation.z = -0.12;                                           // 벽에 기대둔 입간판
  for (const [pz, h] of [[-L * 0.63, 0.34], [-L * 0.66, 0.28]] as Array<[number, number]>) {
    boxOf(M.prop, 0.42, h, 0.6, -HW + 0.34, h / 2, pz, t2);           // 묶어둔 폐지
  }

  // ---------- H-019 주인 없는 그림자 (밤 2, 직시) ----------
  // ⭐ **가장 밝은 자리를 배경으로 쓴다.** 실측이 알려준 것: 이 게임에서 대비가 나오는 곳은
  // 가로등이 만든 바닥 웅덩이 하나뿐이다. 거기에 **어두운 형상**을 놓으면 대비가 최대가 된다
  // (검은 형체를 어둠에 세워 0.6이 나오던 것과 정확히 반대의 수법).
  //
  // 무엇인가: 가로등 아래에 **사람 그림자만** 늘어져 있다. 그림자를 드리울 것이 아무것도 없다.
  // 이 게임에는 그림자 렌더링이 자체가 없으므로(castShadow 0) **그림자가 있다는 사실 자체가
  // 이 골목의 규칙 위반**이다 — 플레이어가 그걸 의식할 필요는 없다. 그냥 잘못돼 보인다.
  // 정물성 그대로: 움직이지 않는다. 늘어난 방향이 광원과 맞지 않는 것이 두 번째 단서다
  const loneShadow = new THREE.Group();
  // ⚠ 불투명도를 1로 올린다 (v0.11.57). 0.92면 밝은 바닥이 8% 비쳐 올라와,
  //   가장 어두워야 할 것이 배경을 향해 한 걸음 다가간다 — 대비가 딱 그만큼 준다
  const shadowMat = new THREE.MeshBasicMaterial({
    color: 0x04060b, // 빛을 안 받는다 = 언제나 검다
  });
  // ⚠ 처음에는 골목 방향(z축)으로 눕혔더니 원근에 눌려 검은 얼룩이 됐다 (실측 대비 4).
  //   **빛을 가로질러(x축) 눕힌다** — 걸어오는 내내 전신이 그대로 보이고,
  //   광원이 오른쪽 벽에 붙어 있으므로 그림자가 왼쪽으로 뻗는 것이 물리적으로도 맞다
  // ⚠ 바닥 도형은 원근에 눌린다 — 크게 두지 않으면 멀리서 몇 픽셀로 뭉개져 평균이 씻긴다
  const shBody = new THREE.Mesh(new THREE.PlaneGeometry(2.7, 0.98), shadowMat);
  shBody.rotation.x = -Math.PI / 2;
  shBody.position.set(0.75, 0.02, -L * 0.45);
  const shHead = new THREE.Mesh(new THREE.CircleGeometry(0.42, 16), shadowMat);
  shHead.rotation.x = -Math.PI / 2;
  shHead.position.set(-0.78, 0.02, -L * 0.45);
  const shArm = new THREE.Mesh(new THREE.PlaneGeometry(1.25, 0.34), shadowMat);
  shArm.rotation.x = -Math.PI / 2;
  shArm.rotation.z = -0.55;
  shArm.position.set(0.7, 0.02, -L * 0.417);
  loneShadow.add(shBody, shHead, shArm);
  loneShadow.visible = false;
  t2.add(loneShadow);

  return {
    group: t2,
    refs: {
      laundryShutter, laundryMat, laundryLight, storeSignMat, realtyMat, realtyTex, handprints,
      shutterGlowMat, shutterGlowSlitMat, shutterGlowLight, loneShadow,
    },
    hit: {
      laundry_open: [laundryShutter, laundryInterior],
      sign_lit: [storeSign],
      realty_urgent: [realty],
      handprints: [handprints],
      shutter_glow: [shutterGlow, shutterGlowSlit],
      lone_shadow: [loneShadow],
    },
  };
}
