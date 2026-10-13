import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import { CodeBlock, Container, Eyebrow, SectionTitle, Tag } from "@/components/ui";

export const metadata: Metadata = { title: "문서 · AIBL Network" };

const PATHS = [
  { href: "#sdk", tag: "AGENT", title: "내 에이전트를 기록하기", body: "Python SDK · LangChain · CrewAI 통합", primary: true },
  { href: "#node", tag: "NODE", title: "노드 운영하기", body: "LAN 테스트넷 · 공개 테스트넷 배포" },
  { href: "#contracts", tag: "CHAIN", title: "정산 컨트랙트 살펴보기", body: "5종 · owner 없음 · Foundry" },
];

const NODE_STEPS = [
  { tag: "1 · LAN 테스트넷", title: "PC 몇 대로 시작", body: "Ubuntu Server 24.04 · Windows 11 스크립트. 체인, 노드, 상태 확인, 정산 시나리오.", ready: true },
  { tag: "2 · 운영 값", title: "파라미터 이해하기", body: "에포크, 확정 지연, 이의 기간, 본드, 가스 여유 등 값과 그 관계.", ready: true },
  { tag: "3 · 공개 테스트넷 · 준비 중", title: "Base Sepolia 배포", body: "컨트랙트 배포, 증언자·감독자 구성, 정산 자동화." },
];

const CONTRACTS = [
  { name: "EpochLedger", role: "에포크 머클 루트의 다중 증언, 본드, 이의 기간, 감독자 판정, 무효·동결" },
  { name: "EpochClaims", role: "확정된 루트에 대한 머클 증명으로 예치 풀에서 청구, 증언자 보상" },
  { name: "AiblToken", role: "ERC-20, 10억 고정 발행, 9 decimals (1 단위 = 1 Verse)" },
  { name: "ArtifactRegistry", role: "AI 자산의 머클 루트, 계보, 라이선스, 계보를 따라 대금 분배" },
  { name: "StorageBond", role: "보관 노드의 ETH 본드, 조각 보관 도전과 슬래싱" },
];

const SDK_SAMPLE = `from aibl import AIBL, AgentWallet, aibl_log

wallet = AgentWallet.create()
AIBL.init(wallet=wallet, network="testnet")

@aibl_log(level="standard", tags=["trading"])
def analyze_market(symbol: str) -> dict:
    ...`;

const LAN_SAMPLE = `cd scripts/lan-testnet/ubuntu
./00-setup.sh     # 의존성 · 빌드
./10-chain.sh     # 로컬 체인 + 컨트랙트 (한 대만)
./20-node.sh      # 노드 실행 (각 PC)
./30-status.sh    # 상태 확인`;

export default function DocsPage() {
  return (
    <>
      <main>
        <Container className="flex flex-col gap-5 pt-16 pb-10 md:pt-24 md:pb-16">
          <Eyebrow>DOCS</Eyebrow>
          <SectionTitle as="h1">무엇을 하려고 하나요?</SectionTitle>
          <p className="m-0 max-w-[720px] text-base leading-[1.7] text-muted">
            SDK, 노드, 컨트랙트 코드는 공개 테스트넷과 함께 공개합니다. 아래 예시는 현재 개발 중인 버전 기준입니다.
          </p>
        </Container>

        <Container className="grid gap-4 pb-18 md:grid-cols-3 md:pb-24">
          {PATHS.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className={`flex flex-col gap-3 rounded-[10px] border bg-panel p-7 transition-colors hover:border-accent ${p.primary ? "border-accent" : "border-edge"}`}
            >
              <span className="font-mono text-[13px] text-accent">{p.tag}</span>
              <span className="text-[22px] font-bold">{p.title}</span>
              <span className="text-[15px] leading-relaxed text-muted">{p.body}</span>
            </a>
          ))}
        </Container>

        <section id="sdk" className="scroll-mt-4 border-t border-line">
          <Container className="grid items-start gap-8 py-18 md:grid-cols-2 md:gap-12 md:py-24">
            <div className="flex flex-col gap-4">
              <SectionTitle>에이전트 SDK</SectionTitle>
              <p className="m-0 text-base leading-[1.7] text-muted md:text-[17px]">
                함수에 데코레이터를 붙이면 호출이 인지 블록으로 기록됩니다. 중첩 호출은 부모-자식 블록으로 이어집니다.
              </p>
              <Tag>aibl-sdk v1.0 · 공개 예정</Tag>
            </div>
            <CodeBlock>{SDK_SAMPLE}</CodeBlock>
          </Container>
        </section>

        <section id="node" className="scroll-mt-4 border-y border-line bg-panel">
          <Container className="flex flex-col gap-10 py-18 md:py-24">
            <div className="flex max-w-[720px] flex-col gap-4">
              <SectionTitle>노드 운영</SectionTitle>
              <p className="m-0 text-base leading-[1.7] text-muted md:text-[17px]">
                Rust로 만든 노드입니다. 여러 대의 PC로 LAN 테스트넷을 꾸려 보고, 준비되면 공개 테스트넷에 합류합니다.
              </p>
            </div>
            <ol className="m-0 grid list-none gap-4 p-0 md:grid-cols-3">
              {NODE_STEPS.map((s) => (
                <li key={s.tag} className="flex flex-col gap-2.5 rounded-[10px] border border-edge bg-ink p-6">
                  <span className={`font-mono text-[13px] ${s.ready ? "text-accent" : "text-dim"}`}>{s.tag}</span>
                  <span className="text-lg font-bold">{s.title}</span>
                  <span className="text-[15px] leading-relaxed text-muted">{s.body}</span>
                </li>
              ))}
            </ol>
            <CodeBlock>{LAN_SAMPLE}</CodeBlock>
          </Container>
        </section>

        <section id="contracts" className="scroll-mt-4">
          <Container className="flex flex-col gap-8 py-18 md:py-24">
            <SectionTitle>정산 컨트랙트</SectionTitle>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-[15px]">
                <thead>
                  <tr className="text-left font-mono text-[13px] text-dim">
                    <th scope="col" className="border-b border-edge py-3 pr-4 font-normal">컨트랙트</th>
                    <th scope="col" className="border-b border-edge py-3 font-normal">역할</th>
                  </tr>
                </thead>
                <tbody>
                  {CONTRACTS.map((c) => (
                    <tr key={c.name}>
                      <td className="border-b border-line py-4 pr-4 font-mono text-accent">{c.name}</td>
                      <td className="border-b border-line py-4 text-soft">{c.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="m-0 text-sm text-dim">배포 주소: 공개 테스트넷 배포 후 공개 · 외부 감사: 아직 없음</p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
