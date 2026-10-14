import Link from "next/link";
import { NAV_ITEMS, WHITEPAPER_EN_PDF, WHITEPAPER_KR_PDF } from "./nav";

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-8 px-4 py-12 text-sm text-dim md:flex-row md:px-6">
        <div className="flex flex-col gap-2">
          <div className="font-display text-lg font-bold text-fg">AIBL</div>
          <p>Your AI&apos;s History, Immutable in AIBL.</p>
          <p>지능은 기록될 때 비로소 자산이 됩니다.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-1 sm:grid-cols-3">
          <div className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="py-2 text-muted hover:text-fg">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <a href={WHITEPAPER_KR_PDF} className="py-2 text-muted hover:text-fg">백서 v2.2.1 (KR)</a>
            <a href={WHITEPAPER_EN_PDF} className="py-2 text-muted hover:text-fg">Whitepaper (EN)</a>
          </div>
          <div className="flex flex-col">
            <a href="https://aibl.ai.kr" target="_blank" rel="noopener noreferrer" className="py-2 text-muted hover:text-fg">Dev Log (KR)</a>
            <a href="https://github.com/1percrnt365/aibl-network" target="_blank" rel="noopener noreferrer" className="py-2 text-muted hover:text-fg">GitHub</a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] border-t border-line px-4 py-8 text-xs leading-relaxed text-dim md:px-6">
        <p>
          이 사이트의 내용은 정보 제공 목적이며 투자 권유가 아닙니다. AIBL 네트워크와 기술 사양은 개발 상황에 따라 바뀔 수 있습니다.
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} AIBL Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
