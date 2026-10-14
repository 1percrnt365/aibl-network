"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "./nav";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="flex items-center gap-2 py-2" onClick={() => setOpen(false)}>
          <img src="/AIBL.png" alt="" className="h-8 w-auto" />
          <span className="font-display text-xl font-bold tracking-wide">AIBL</span>
        </Link>

        <nav aria-label="주요 메뉴" className="hidden gap-7 text-[15px] md:flex">
          {NAV_ITEMS.map((item) => {
            const current = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`py-3 transition-colors ${current ? "text-accent" : "text-muted hover:text-fg"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/docs"
          className="hidden rounded-md bg-accent px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-accent-hover md:inline-block"
        >
          문서 보기
        </Link>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-edge md:hidden"
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="주요 메뉴" className="flex flex-col border-t border-line bg-panel px-4 pb-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`border-b border-line py-3.5 text-[17px] last:border-b-0 ${pathname === item.href ? "text-accent" : "text-fg"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
