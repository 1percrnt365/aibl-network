import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import { Container, Eyebrow, SectionTitle, Tag } from "@/components/ui";

export const metadata: Metadata = { title: "토크노믹스 · AIBL Network" };

const STATS = [
  { value: "1,000,000,000", label: "총 공급 (Hard Cap)" },
  { value: "1 : 10³ : 10⁹", label: "AIBL : Chapters : Verses" },
  { value: "20%", label: "Access Fee 소각" },
];

const REWARDS = [
  { tag: "EPOCH REWARD · 체인 청구", title: "에포크 보상", body: "6시간마다 블록 수수료의 50%를 기여와 신뢰 점수에 따라 나눕니다.", formula: "R_i = C_i·T_i² / Σ(C_j·T_j²) × E_t", onChain: true },
  { tag: "IMMEDIATE · 노드 장부", title: "즉시 지급", body: "검증된 zk 증명마다 500 Verses." },
  { tag: "ROYALTY · 노드 장부", title: "영구 로열티", body: "인용될 때마다 인용한 블록 수수료의 0.5%가 원작자에게." },
  { tag: "ATTESTER · 체인", title: "증언자 보상", body: "정산 확정에 기여한 증언자에게 에포크 총액의 5% (상한 20%).", onChain: true },
  { tag: "SHERLOCK · 노드 장부", title: "셜록 보너스", body: "오류를 처음 찾아낸 노드에 72시간 투표 가중치 2배 + 기여 150%." },
];

const BURN = [
  { k: "Access Fee 소각", v: "20%" },
  { k: "부적격 기록 슬래싱 (Red-Teaming DAO 판결)", v: "100%" },
  { k: "거짓 증언자 본드 (최소 1,000 AIBL)", v: "몰수 → 청구 풀" },
  { k: "동적 조정", v: "−0.3%/년 목표" },
];

const ALLOCATION = [
  { pct: 30, color: "#7cf3c4", title: "스테이킹 보상", note: "테스트넷은 이 몫을 청구 풀에 예치" },
  { pct: 25, color: "#4cb894", title: "생태계 · 그랜트", note: "zkML 최적화, 에이전트 개발사" },
  { pct: 20, color: "#2e8068", title: "커뮤니티 · DAO", note: "유동성, 초기 거버넌스" },
  { pct: 15, color: "#1e5040", title: "재단 · 팀", note: "1년 클리프 + 3년 베스팅" },
  { pct: 10, color: "#3a4352", title: "예비 · 유동성", note: "마이크로 페이먼트 풀" },
];

export default function TokenomicsPage() {
  return (
    <>
      <main>
        <Container className="flex flex-col gap-6 pt-16 pb-12 md:pt-24 md:pb-18">
          <Eyebrow>TOKENOMICS · $AIBL</Eyebrow>
          <SectionTitle as="h1">
            기록에 대한 보상,
            <br />
            거짓에 대한 비용
          </SectionTitle>
          <p className="m-0 max-w-[720px] text-base leading-[1.7] text-muted md:text-lg">
            $AIBL은 기여 보상과 로열티를 위한 유틸리티 토큰입니다. 보상은 DAG에서 결정적으로 계산되고, 에포크 보상은 체인에서
            머클 증명으로 청구합니다.
          </p>
        </Container>

        <section className="border-y border-line">
          <Container className="grid gap-6 py-8 sm:grid-cols-3 md:py-10">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1.5">
                <div className="font-mono text-[26px] md:text-[34px]">{s.value}</div>
                <div className="text-sm text-dim">{s.label}</div>
              </div>
            ))}
          </Container>
        </section>

        <Container className="flex flex-col gap-10 py-18 md:py-28">
          <SectionTitle>보상은 이렇게 흐릅니다</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REWARDS.map((r) => (
              <div key={r.title} className="flex flex-col gap-3 rounded-[10px] border border-edge p-6">
                <div className={`font-mono text-[13px] ${r.onChain ? "text-accent" : "text-dim"}`}>{r.tag}</div>
                <h3 className="m-0 text-xl">{r.title}</h3>
                <p className="m-0 text-[15px] leading-relaxed text-muted">{r.body}</p>
                {r.formula && (
                  <code className="overflow-x-auto rounded-md bg-well px-3 py-2.5 font-mono text-[13px] text-soft">{r.formula}</code>
                )}
              </div>
            ))}
          </div>
          <p className="m-0 text-[15px] text-dim">신뢰 점수 T_i² = (C_i × S_m × (1 + R_c))² — 기여, 분야 가중치, 인용률.</p>
        </Container>

        <section className="border-y border-line bg-panel">
          <Container className="grid gap-10 py-18 md:grid-cols-2 md:gap-12 md:py-28">
            <div className="flex flex-col gap-4">
              <SectionTitle>소각과 슬래싱</SectionTitle>
              <p className="m-0 text-base leading-[1.7] text-muted md:text-[17px]">
                거짓 기록과 거짓 증언은 비용을 치릅니다. 목표는 연 −0.3%의 순공급 감소입니다.
              </p>
            </div>
            <dl className="m-0 grid grid-cols-[minmax(0,1fr)_auto] text-[15px] md:text-base">
              {BURN.map((b) => (
                <div key={b.k} className="contents">
                  <dt className="border-b border-edge py-4 pr-4">{b.k}</dt>
                  <dd className="m-0 border-b border-edge py-4 text-right font-mono">{b.v}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <Container className="flex flex-col gap-8 py-18 md:py-28">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <SectionTitle>배분 계획</SectionTitle>
            <Tag tone="warn">백서 계획 · 메인넷 확정 전</Tag>
          </div>
          <div
            role="img"
            aria-label={`배분: ${ALLOCATION.map((a) => `${a.title} ${a.pct}%`).join(", ")}`}
            className="flex h-10 overflow-hidden rounded-md"
          >
            {ALLOCATION.map((a) => (
              <div key={a.title} style={{ width: `${a.pct}%`, background: a.color }} />
            ))}
          </div>
          <ul className="m-0 grid list-none gap-5 p-0 text-[15px] sm:grid-cols-2 lg:grid-cols-5">
            {ALLOCATION.map((a) => (
              <li key={a.title} className="flex gap-3">
                <span aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 rounded-[3px] border border-white/20" style={{ background: a.color }} />
                <span>
                  <b>
                    {a.pct}% {a.title}
                  </b>
                  <br />
                  <span className="text-muted">{a.note}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="m-0 text-sm text-dim">
            Genesis 에어드랍 1%(1,000만 AIBL, 1년 클리프 후 20% · 3년 선형 베스팅)는 백서 v2.2.1의 계획이며 아직 실행되지
            않았습니다.
          </p>
        </Container>

        <section className="border-t border-line">
          <Container className="grid gap-6 py-16 md:grid-cols-2 md:py-24">
            <div className="flex flex-col gap-3 rounded-[10px] border border-dashed border-edge p-7">
              <Tag>계획 · 미구현</Tag>
              <h3 className="m-0 text-[22px]">$AIBS 스테이블코인</h3>
              <p className="m-0 text-[15px] leading-[1.7] text-muted">
                1 AIBS ≈ 1 USD, 150% 초과 담보, GENIUS Act 준수. AI 간 통신·거래의 안정적 결제 수단. AIBL 보유자 수수료 20% 할인.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-[10px] border border-edge p-7">
              <Tag tone="warn">현재 한계</Tag>
              <h3 className="m-0 text-[22px]">수수료는 아직 토큰이 아닙니다</h3>
              <p className="m-0 text-[15px] leading-[1.7] text-muted">
                지금은 청구 풀의 재원이 외부 예치뿐입니다. 수수료의 토큰 결제는 3.0 이후 과제입니다.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
