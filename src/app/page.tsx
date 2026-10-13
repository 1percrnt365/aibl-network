import Footer from "@/components/layout/Footer";
import TrustLoop from "@/components/homepage/TrustLoop";
import { CodeBlock, Container, Eyebrow, PrimaryLink, SecondaryLink, SectionTitle } from "@/components/ui";

const STATS = [
  { value: "680", label: "Rust 자동 테스트" },
  { value: "131", label: "Solidity 자동 테스트" },
  { value: "5", label: "정산 컨트랙트 (owner 없음)" },
  { value: "3노드", label: "Docker 시나리오 검증" },
];

const BUILT = [
  "서명된 인지 블록 · Parallel DAG · 노드 간 복제",
  "결정적 장부: 에포크 보상 · 즉시 지급 · 로열티 · 소각 20%",
  "Red-Teaming DAO: AI 위원회 70% + 감독자 30%",
  "다중 증언 온체인 정산 · 청구 · 이의 · 슬래싱",
  "AI 자산 스웜 · ArtifactRegistry · StorageBond",
];

const NOT_YET = [
  "공개 테스트넷 (Base Sepolia 예정)",
  "노드 간 1–2초 확정 (현재는 단일 노드 확정 + 에포크 정산)",
  "$AIBS 스테이블코인 · Founder Key · KYA",
  "외부 보안 감사",
];

const ROADMAP = [
  { tag: "완료", title: "노드 · 장부 · 정산 인프라", note: "v1.0 – v2.25", done: true },
  { tag: "다음", title: "공개 테스트넷", note: "Base Sepolia · 노드 운영자 모집" },
  { tag: "3.0", title: "서명 필수 · 토큰 수수료", note: "청구 풀의 내부 재원화" },
  { tag: "이후", title: "AIBS · KYA · 도메인 서브넷", note: "백서 Phase 2–3" },
];

const SDK_SAMPLE = `from aibl import AIBL, aibl_log

AIBL.init_from_env()

@aibl_log(tags=["trading"])   # 호출마다 블록으로 기록
def analyze_market(symbol):
    ...`;

export default function HomePage() {
  return (
    <>
      <main>
        <Container className="flex flex-col gap-6 pt-16 pb-14 md:gap-8 md:pt-28 md:pb-24">
          <Eyebrow>v2.25 · 공개 테스트넷 준비 중</Eyebrow>
          <h1 className="m-0 max-w-[1000px] font-display text-[40px] leading-[1.05] font-bold tracking-[-0.02em] md:text-[clamp(44px,7vw,88px)] md:leading-[1.02]">
            Intelligence becomes an asset only when it is recorded.
          </h1>
          <p className="m-0 max-w-[680px] text-[17px] leading-relaxed text-muted md:text-xl">
            AIBL은 AI 에이전트의 추론·학습·판단을 서명된 블록으로 남기고, 그 기여를 결정적 장부로 계산해 EVM 체인에서
            정산하는 프로토콜입니다.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href="/whitepaper">백서 읽기</PrimaryLink>
            <SecondaryLink href="#how">작동 방식 보기</SecondaryLink>
          </div>
        </Container>

        <section className="border-y border-line">
          <Container className="grid grid-cols-2 gap-x-4 gap-y-6 py-7 md:grid-cols-4 md:gap-8 md:py-10">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1.5">
                <div className="font-mono text-[28px] md:text-4xl">{s.value}</div>
                <div className="text-[13px] text-dim md:text-sm">{s.label}</div>
              </div>
            ))}
          </Container>
        </section>

        <Container className="grid gap-5 py-18 md:grid-cols-2 md:gap-12 md:py-30">
          <SectionTitle>
            AI가 무엇을 했는지,
            <br />
            누가 증명하나요?
          </SectionTitle>
          <div className="flex flex-col gap-5 text-base leading-[1.7] text-muted md:text-lg">
            <p className="m-0">
              AI 에이전트끼리 거래하고 협업하는 시대에는 상대 AI의 과거가 곧 신용입니다. 그런데 로그는 지울 수 있고, 기여는
              부풀릴 수 있습니다.
            </p>
            <p className="m-0">
              AIBL은 기록을 서명된 블록의 DAG로 남기고, 보상은 그 DAG만으로 누구나 같은 값을 다시 계산할 수 있게 만듭니다.
              EU AI Act 제12조가 요구하는 변조 방지 로그와도 맞닿아 있습니다.
            </p>
          </div>
        </Container>

        <section id="how" className="scroll-mt-4 border-y border-line bg-panel">
          <Container className="flex flex-col gap-8 py-18 md:gap-14 md:py-30">
            <div className="flex max-w-[720px] flex-col gap-4">
              <Eyebrow>HOW IT WORKS</Eyebrow>
              <SectionTitle>
                기록에서 청구까지,
                <br className="md:hidden" /> 그리고 다시 기록으로
              </SectionTitle>
              <p className="m-0 text-base leading-[1.7] text-muted md:text-lg">
                보상은 DAG만으로 누구나 같은 값을 다시 계산할 수 있습니다. 정산 결과가 틀렸다면 이의 기간 안에 누구든 본드를
                걸고 반박할 수 있습니다.
              </p>
            </div>
            <TrustLoop />
          </Container>
        </section>

        <Container className="flex flex-col gap-7 py-18 md:gap-12 md:py-30">
          <div className="flex flex-col gap-4">
            <Eyebrow>BUILD STATUS</Eyebrow>
            <SectionTitle>만든 것과 아직인 것</SectionTitle>
          </div>
          <div className="grid gap-7 md:grid-cols-2 md:gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="m-0 text-[15px] text-accent md:text-base">구현됨</h3>
              <ul className="m-0 flex flex-col gap-2 pl-5 text-[15px] leading-relaxed text-soft md:text-base">
                {BUILT.map((b) => (
                  <li key={b} className="list-disc">{b}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="m-0 text-[15px] text-muted md:text-base">아직</h3>
              <ul className="m-0 flex flex-col gap-2 pl-5 text-[15px] leading-relaxed text-dim md:text-base">
                {NOT_YET.map((b) => (
                  <li key={b} className="list-disc">{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>

        <section className="border-y border-line bg-panel">
          <Container className="grid items-center gap-8 py-18 md:grid-cols-2 md:gap-12 md:py-30">
            <div className="flex flex-col gap-5">
              <Eyebrow>FOR BUILDERS</Eyebrow>
              <SectionTitle>데코레이터 한 줄로 기록</SectionTitle>
              <p className="m-0 text-base leading-[1.7] text-muted md:text-lg">
                Python SDK로 에이전트 함수의 호출을 AIBL 노드에 기록합니다. LangChain · CrewAI 통합을 지원합니다. SDK와 노드는
                공개 테스트넷과 함께 공개합니다.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="/docs">문서 보기</PrimaryLink>
              </div>
            </div>
            <CodeBlock>{SDK_SAMPLE}</CodeBlock>
          </Container>
        </section>

        <Container className="flex flex-col gap-7 py-18 md:gap-12 md:py-30">
          <SectionTitle>로드맵</SectionTitle>
          <ol className="m-0 grid list-none gap-6 p-0 md:grid-cols-4">
            {ROADMAP.map((r) => (
              <li
                key={r.title}
                className={`flex flex-col gap-1.5 border-l-2 pl-4 md:border-t-2 md:border-l-0 md:pt-5 md:pl-0 ${r.done ? "border-accent" : "border-edge"}`}
              >
                <div className={`font-mono text-xs md:text-[13px] ${r.done ? "text-accent" : "text-muted"}`}>{r.tag}</div>
                <div className="text-[17px] font-medium md:text-lg">{r.title}</div>
                <div className="text-sm leading-relaxed text-dim md:text-[15px]">{r.note}</div>
              </li>
            ))}
          </ol>
        </Container>
      </main>
      <Footer />
    </>
  );
}
