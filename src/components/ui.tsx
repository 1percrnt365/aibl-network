import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1200px] px-4 md:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="font-mono text-xs tracking-[0.08em] text-accent md:text-sm">{children}</div>;
}

export function SectionTitle({ children, as: Tag = "h2" }: { children: ReactNode; as?: "h1" | "h2" }) {
  const size =
    Tag === "h1"
      ? "text-[40px] leading-[1.08] md:text-[clamp(44px,6vw,76px)]"
      : "text-[30px] leading-[1.2] md:text-[40px] md:leading-[1.15]";
  return <Tag className={`m-0 font-display font-bold tracking-[-0.01em] ${size}`}>{children}</Tag>;
}

const buttonBase = "inline-block rounded-md px-6 py-3.5 text-center text-base font-medium transition-colors";

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={`${buttonBase} bg-accent text-ink hover:bg-accent-hover`}>
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={`${buttonBase} border border-edge text-fg hover:border-muted`}>
      {children}
    </Link>
  );
}

export function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="m-0 overflow-x-auto rounded-[10px] border border-edge bg-well p-5 font-mono text-[13px] leading-[1.8] text-soft md:p-7 md:text-[15px]">
      {children}
    </pre>
  );
}

export function Tag({ tone = "muted", children }: { tone?: "accent" | "muted" | "warn"; children: ReactNode }) {
  const styles = {
    accent: "bg-accent text-ink",
    muted: "border border-edge text-muted",
    warn: "border border-dispute text-dispute",
  }[tone];
  return <span className={`self-start rounded px-2 py-1 font-mono text-xs ${styles}`}>{children}</span>;
}
