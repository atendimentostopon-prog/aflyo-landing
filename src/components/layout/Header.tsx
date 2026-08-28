import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface-0/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 18L12 4L20 18" stroke="#3dd98f" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="14.5" r="1.6" fill="#3dd98f" />
          </svg>
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.loginUrl}
            className="hidden text-sm font-semibold text-ink-secondary transition-colors hover:text-ink sm:block"
          >
            Entrar
          </a>
          <a
            href={SITE.signupUrl}
            className="btn-gradient rounded-xl px-4 py-2 text-sm font-bold shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Começar grátis
          </a>
        </div>
      </div>
    </header>
  );
}
