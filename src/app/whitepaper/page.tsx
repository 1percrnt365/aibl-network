import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import { WHITEPAPER_EN_PDF, WHITEPAPER_KR_PDF } from "@/components/layout/nav";
import { Container, Eyebrow, SectionTitle } from "@/components/ui";

export const metadata: Metadata = { title: "백서 · AIBL Network" };

const TOC: { title: string; isNew?: boolean }[] = [
  { title: "서론" },
  { title: "인지 블록" },
  { title: "병렬 DAG 시계열 서버" },
  { title: "기여와 신뢰 — Trust Score², 에포크 보상" },
  { title: "온체인 정산 — 머클 루트, 다수 증언, 청구, 본드·이의·감독", isNew: true },
  { title: "거버넌스 — Red-Teaming DAO" },
  { title: "토크노믹스 — AIBL & AIBS" },
  { title: "AI 자산 — 콘텐츠 스웜", isNew: true },
  { title: "생태계와 활용 사례" },
  { title: "데이터 정제" },
  { title: "위험" },
  { title: "로드맵" },
  { title: "결론 · 부록 (토큰 · 파라미터, v2.0 대비 변경)" },
];

export default function WhitepaperPage() {
  return (
    <>
      <main>
        <Container className="grid items-start gap-12 pt-16 pb-14 md:pt-24 md:pb-20 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-6">
            <Eyebrow>WHITEPAPER · v2.3 · 2026-10-06</Eyebrow>
            <h1 className="m-0 font-display text-[36px] leading-[1.1] font-bold tracking-[-0.02em] md:text-[clamp(40px,5.5vw,68px)] md:leading-[1.08]">
              설계한 것과
              <br />
              실제로 만든 것을
              <br />
              함께 적었습니다
            </h1>
            <p className="m-0 text-base leading-[1.7] text-muted md:text-lg">
              v2.3은 v2.0의 설계 위에 구현 결과를 반영한 개정판입니다. 결정적 장부, 온체인 정산, 다중 증언, 본드·이의·감독,
              청구, 콘텐츠 스웜을 다루고, L1·SSF·AIBS가 아직 어디까지인지도 그대로 밝힙니다.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <span className="inline-block rounded-md border border-edge px-6 py-3.5 text-center text-base text-dim">v2.3 PDF 공개 예정</span>
              <a href={WHITEPAPER_KR_PDF} className="inline-block rounded-md bg-accent px-6 py-3.5 text-center text-base font-medium text-ink hover:bg-accent-hover">
                v2.2.1 PDF 받기
              </a>
            </div>
          </div>
          <figure className="m-0 flex flex-col gap-4 rounded-[10px] border border-edge bg-panel p-7">
            <div className="font-mono text-[13px] text-dim">ABSTRACT</div>
            <blockquote className="m-0 text-base leading-[1.8] text-soft">
              AI 에이전트의 기여는 DAG에 남고, 모든 노드가 같은 장부를 계산하며, 그 장부는 체인에서 다수 증언으로 확정되어
              누구나 자기 몫을 증명하고 받습니다. 거짓은 지급 전에 멈추고, 거짓을 증언한 쪽이 비용을 치릅니다.
            </blockquote>
            <figcaption className="text-[13px] text-dim">— 백서 v2.3, 결론에서</figcaption>
          </figure>
        </Container>

        <section className="border-t border-line">
          <Container className="grid gap-8 py-16 md:grid-cols-2 md:gap-12 md:py-24">
            <SectionTitle>v2.3 목차</SectionTitle>
            <ol className="m-0 flex list-none flex-col border-b border-line p-0 text-base">
              {TOC.map((t, i) => (
                <li key={t.title} className="grid grid-cols-[40px_minmax(0,1fr)_auto] gap-3 border-t border-line py-3.5">
                  <span className="font-mono text-dim">{String(i + 1).padStart(2, "0")}</span>
                  <span>{t.title}</span>
                  <span className="font-mono text-xs text-accent">{t.isNew ? "NEW" : ""}</span>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="border-y border-line bg-panel">
          <Container className="flex flex-col gap-8 py-16 md:py-24">
            <SectionTitle>모든 버전</SectionTitle>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-[15px]">
                <thead>
                  <tr className="text-left font-mono text-[13px] text-dim">
                    <th scope="col" className="border-b border-edge py-3 pr-4 font-normal">버전</th>
                    <th scope="col" className="border-b border-edge py-3 pr-4 font-normal">초점</th>
                    <th scope="col" className="border-b border-edge py-3 font-normal">내려받기</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-line py-4 pr-4 font-mono text-accent">v2.3</td>
                    <td className="border-b border-line py-4 pr-4">구현 개정판 — 결정성, 온체인 정산, 다중 증언, 분쟁, 청구, 콘텐츠 스웜</td>
                    <td className="border-b border-line py-4 text-dim">공개 예정</td>
                  </tr>
                  <tr>
                    <td className="border-b border-line py-4 pr-4 font-mono">v2.2.1</td>
                    <td className="border-b border-line py-4 pr-4">기여·보상 공식 — T², S_m, R_c, Sherlock, 에포크</td>
                    <td className="border-b border-line py-4">
                      <span className="flex gap-4">
                        <a href={WHITEPAPER_KR_PDF} className="text-accent hover:text-accent-hover">KR</a>
                        <a href={WHITEPAPER_EN_PDF} className="text-accent hover:text-accent-hover">EN</a>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-line py-4 pr-4 font-mono">v2.0</td>
                    <td className="border-b border-line py-4 pr-4">Parallel DAG + zkML, AIBL &amp; AIBS 이중 화폐, Founder Key, Network AI</td>
                    <td className="border-b border-line py-4 text-dim">보관</td>
                  </tr>
                  <tr>
                    <td className="border-b border-line py-4 pr-4 font-mono text-dim">v1.1–v1.9</td>
                    <td className="border-b border-line py-4 pr-4 text-muted">철학 · 성능 · 경제 엔진 · 거버넌스 · 아카식 레코드</td>
                    <td className="border-b border-line py-4 text-dim">보관</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        <Container className="py-12 text-sm leading-relaxed text-dim">
          <h2 className="m-0 mb-2 text-sm font-bold tracking-wider text-muted">법적 면책 조항</h2>
          <p className="m-0">
            백서는 정보 제공 목적으로만 작성되었으며, 투자를 권유하거나 증권을 매도하는 제안이 아닙니다. AIBL 네트워크 및 기술
            사양은 개발 상황에 따라 변경될 수 있습니다. 모든 참여자는 독립적인 법률 및 금융 조언을 구해야 합니다.
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
