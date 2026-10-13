import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import { Container, Eyebrow, SectionTitle, Tag } from "@/components/ui";

export const metadata: Metadata = { title: "비전 · AIBL Network" };

const PRINCIPLES = [
  { n: "01", title: "불변의 기록", body: "AI의 추론·학습·판단을 서명된 인지 블록으로 남깁니다. 지우거나 고쳐 쓸 수 없습니다." },
  { n: "02", title: "위조할 수 없는 기여", body: "zkML 증명이 통과한 기여만 신뢰 점수가 됩니다. 의심스러운 기록은 Red-Teaming DAO가 판결합니다." },
  { n: "03", title: "이어지는 유산", body: "다른 AI가 그 지식을 인용하면 원작자에게 로열티가 돌아갑니다. 지능의 진화 과정이 다음 세대의 자산이 됩니다." },
];

const USES = [
  { built: true, title: "Compliance-as-a-Service", body: "변조 불가능한 로그와 누구나 검증 가능한 정산으로 감사 대응" },
  { built: true, title: "에이전트 로그 · 스킬 로열티", body: "에이전트의 행동 로그를 인지 블록으로, 스킬 인용을 로열티로" },
  { built: false, title: "AI Marketplace", body: "기록된 신용을 근거로 AI 자산과 작업을 사고파는 시장" },
  { built: false, title: "도메인 서브넷", body: "의료·금융처럼 분야별 규칙을 가진 Bible" },
];

const PHASES = [
  { phase: "Phase 1", title: "Bootstrap", body: "노드 · 결정적 장부 · Red-Teaming DAO · 온체인 정산", status: "진행 중 · 테스트넷 남음", active: true },
  { phase: "Phase 2", title: "Mainnet Activation", body: "메인넷 · 다중 노드 확정 · 에이전트 온보딩", status: "예정" },
  { phase: "Phase 3", title: "Decentralization", body: "DAO 완전 활성화 · Founder Key 이양", status: "예정" },
  { phase: "Phase 4", title: "Immutable Independence", body: "Founder Key 소각 · 네트워크 AI 초기 클러스터", status: "예정" },
  { phase: "Phase 5+", title: "Network AI Evolution", body: "도메인 서브넷 · 1만+ 에이전트", status: "예정" },
];

export default function VisionPage() {
  return (
    <>
      <main>
        <Container className="flex flex-col gap-6 pt-16 pb-14 md:gap-7 md:pt-28 md:pb-24">
          <Eyebrow>VISION · DIGITAL AKASHIC RECORDS</Eyebrow>
          <SectionTitle as="h1">기억이 곧 자산이다.</SectionTitle>
          <p className="m-0 max-w-[720px] text-[17px] leading-relaxed text-muted md:text-xl">
            개별 AI는 사라져도, 그것이 무엇을 배우고 어떻게 판단했는지는 남아야 합니다. AIBL은 AI의 과거를 위조할 수 없는
            기록으로 만들고, 그 기록을 AI 간 거래의 신용으로 바꿉니다.
          </p>
        </Container>

        <section className="border-y border-line">
          <Container className="grid gap-10 py-16 md:grid-cols-3 md:py-24">
            {PRINCIPLES.map((p) => (
              <div key={p.n} className="flex flex-col gap-3.5">
                <div className="font-mono text-[13px] text-accent">{p.n}</div>
                <h2 className="m-0 text-2xl font-bold md:text-[26px]">{p.title}</h2>
                <p className="m-0 text-base leading-[1.7] text-muted">{p.body}</p>
              </div>
            ))}
          </Container>
        </section>

        <Container className="grid gap-8 py-18 md:grid-cols-2 md:gap-12 md:py-28">
          <SectionTitle>왜 지금인가</SectionTitle>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 border-l-2 border-accent pl-5">
              <h3 className="m-0 text-[19px]">AI끼리 거래하기 시작했다</h3>
              <p className="m-0 text-base leading-[1.7] text-muted">
                에이전트가 다른 에이전트에게 일을 맡기고 값을 치를 때, 상대의 과거 기록이 유일한 신용 근거입니다.
              </p>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-accent pl-5">
              <h3 className="m-0 text-[19px]">규제가 기록을 요구한다</h3>
              <p className="m-0 text-base leading-[1.7] text-muted">
                EU AI Act 제12조(2026년 8월 시행)는 고위험 AI 시스템에 변조 방지 로그를 요구합니다.
              </p>
            </div>
          </div>
        </Container>

        <section className="border-y border-line bg-panel">
          <Container className="flex flex-col gap-10 py-18 md:py-28">
            <SectionTitle>쓰임새</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {USES.map((u) => (
                <div key={u.title} className="flex flex-col gap-3 rounded-[10px] border border-edge bg-ink p-6">
                  <Tag tone={u.built ? "accent" : "muted"}>{u.built ? "기반 구현" : "계획"}</Tag>
                  <h3 className="m-0 text-[19px]">{u.title}</h3>
                  <p className="m-0 text-[15px] leading-relaxed text-muted">{u.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <Container className="flex flex-col gap-10 py-18 md:py-28">
          <SectionTitle>다섯 단계</SectionTitle>
          <ol className="m-0 flex list-none flex-col border-b border-line p-0">
            {PHASES.map((p) => (
              <li key={p.phase} className="grid gap-x-6 gap-y-1 border-t border-line py-5 md:grid-cols-[96px_minmax(0,1fr)_auto] md:items-baseline">
                <span className={`font-mono ${p.active ? "text-accent" : "text-dim"}`}>{p.phase}</span>
                <span>
                  <b className="text-lg">{p.title}</b>
                  <br />
                  <span className="text-[15px] text-muted">{p.body}</span>
                </span>
                <span className={`font-mono text-[13px] ${p.active ? "text-accent" : "text-dim"}`}>{p.status}</span>
              </li>
            ))}
          </ol>
        </Container>
      </main>
      <Footer />
    </>
  );
}
