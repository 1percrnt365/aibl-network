// 신뢰 구조 순환도. 넓은 화면은 좌표로 배치한 다이어그램, 좁은 화면은 세로 목록.

const STEPS = [
  { n: "01", title: "기록", lines: ["서명된 인지 블록을", "DAG에 올리고 복제"] },
  { n: "02", title: "검증", lines: ["zkML 증명이 통과한", "기여만 신뢰 점수로"] },
  { n: "03", title: "정산", lines: ["여러 증언자가", "머클 루트를 체인에"] },
  { n: "04", title: "청구", lines: ["연결된 EVM 계정이", "머클 증명으로 AIBL을"] },
];

const DISPUTE = [
  { title: "이의 제기", lines: ["누구든 AIBL 본드를", "걸고 반박"] },
  { title: "감독자 판정", lines: ["거짓 증언자의", "본드 슬래싱"] },
];

// 카드 216×104, 간격 96, 위쪽 줄 y=64, 아래쪽 줄 y=264
const CARD_W = 216;
const CARD_H = 104;
const COL = [0, 312, 624, 936];

type Seg = { x1: number; y1: number; x2: number; y2: number; head?: boolean; dispute?: boolean };

const SEGMENTS: Seg[] = [
  { x1: 216, y1: 116, x2: 311, y2: 116, head: true },
  { x1: 528, y1: 116, x2: 623, y2: 116, head: true },
  { x1: 840, y1: 116, x2: 935, y2: 116, head: true },
  { x1: 1044, y1: 64, x2: 1044, y2: 16 },
  { x1: 1044, y1: 16, x2: 108, y2: 16 },
  { x1: 108, y1: 16, x2: 108, y2: 63, head: true },
  { x1: 732, y1: 168, x2: 732, y2: 263, head: true, dispute: true },
  { x1: 840, y1: 316, x2: 935, y2: 316, head: true, dispute: true },
  { x1: 1044, y1: 264, x2: 1044, y2: 169, head: true, dispute: true },
];

function Card({ x, y, title, lines, dispute }: { x: number; y: number; title: string; lines: string[]; dispute?: boolean }) {
  return (
    <div
      className={`absolute flex items-center justify-center rounded-[10px] bg-ink p-4 text-center text-[15px] leading-[22px] text-muted ${
        dispute ? "border border-dashed border-dispute" : "border border-accent"
      }`}
      style={{ left: x, top: y, width: CARD_W, height: CARD_H }}
    >
      <span>
        <b className="text-[17px] text-fg">{title}</b>
        {lines.map((l) => (
          <span key={l}>
            <br />
            {l}
          </span>
        ))}
      </span>
    </div>
  );
}

export default function TrustLoop() {
  return (
    <>
      <div
        role="img"
        aria-label="AIBL 신뢰 구조: 기록, 검증, 정산, 청구가 순환하고, 정산에 이의가 제기되면 감독자 판정을 거쳐 확정된다"
        className="relative hidden lg:block"
        style={{ width: 1152, height: 392 }}
      >
        <svg aria-hidden="true" className="absolute inset-0 overflow-visible" width="1152" height="392" fill="none" strokeWidth="2" strokeLinecap="round">
          <defs>
            <marker id="tl-head-flow" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2">
              <path d="M0 0 L4 2 L0 4 Z" fill="#7c8696" />
            </marker>
            <marker id="tl-head-dispute" orient="auto" markerWidth="5" markerHeight="5" refX="2" refY="2">
              <path d="M0 0 L4 2 L0 4 Z" fill="#d9a441" />
            </marker>
          </defs>
          {SEGMENTS.map((s, i) => {
            // 머리가 있으면 끝을 4px 당겨 화살촉이 카드 1px 앞에서 끝나게 한다
            const dx = Math.sign(s.x2 - s.x1) * (s.head ? 4 : 0);
            const dy = Math.sign(s.y2 - s.y1) * (s.head ? 4 : 0);
            return (
              <path
                key={i}
                d={`M ${s.x1} ${s.y1} L ${s.x2 - dx} ${s.y2 - dy}`}
                stroke={s.dispute ? "#d9a441" : "#7c8696"}
                strokeDasharray={s.dispute ? "6 6" : undefined}
                markerEnd={s.head ? `url(#tl-head-${s.dispute ? "dispute" : "flow"})` : undefined}
              />
            );
          })}
        </svg>
        {STEPS.map((s, i) => (
          <Card key={s.n} x={COL[i]} y={64} title={`${s.n} · ${s.title}`} lines={s.lines} />
        ))}
        {DISPUTE.map((s, i) => (
          <Card key={s.title} x={COL[i + 2]} y={264} title={s.title} lines={s.lines} dispute />
        ))}
        <div className="absolute text-center text-[13px] leading-4 text-dim" style={{ left: 456, top: 28, width: 240 }}>
          보상이 다음 기록으로 이어진다
        </div>
        <div className="absolute text-center text-[13px] leading-4 text-dispute" style={{ left: 744, top: 208, width: 84 }}>
          이의 기간 중
        </div>
        <div className="absolute text-center text-[13px] leading-4 text-dispute" style={{ left: 1056, top: 208, width: 84 }}>
          판정 후 확정
        </div>
      </div>

      <ol className="m-0 flex list-none flex-col p-0 lg:hidden">
        {STEPS.map((s, i) => (
          <li key={s.n} className="flex flex-col">
            {i > 0 && (
              <span aria-hidden="true" className="block h-7 text-center text-lg leading-7 text-flow">
                ↓
              </span>
            )}
            <div className="flex flex-col gap-1 rounded-[10px] border border-accent bg-ink px-5 py-4">
              <b className="text-[17px]">
                {s.n} · {s.title}
              </b>
              <span className="text-[15px] leading-relaxed text-muted">{s.lines.join(" ")}</span>
              {s.n === "03" && (
                <span className="mt-2.5 rounded-lg border border-dashed border-dispute px-3 py-2.5 text-sm leading-relaxed text-[#e8c27a]">
                  이의 기간 중 누구든 본드를 걸고 반박 → 감독자 판정 → 거짓 증언자 본드 슬래싱
                </span>
              )}
            </div>
          </li>
        ))}
        <li className="mt-6 text-center text-sm text-dim">↺ 보상이 다음 기록으로 이어진다</li>
      </ol>
    </>
  );
}
