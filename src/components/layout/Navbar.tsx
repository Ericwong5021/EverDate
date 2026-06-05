import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-cream-50)]/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-xl font-[var(--font-title)] font-semibold tracking-wide text-[var(--color-primary)]">
            EverDate
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-[var(--font-ui)] text-[var(--color-cream-700)] no-underline transition-colors hover:text-[var(--color-primary)]"
          >
            首页
          </Link>
          <Link
            to="/create"
            className="text-sm font-[var(--font-ui)] text-[var(--color-cream-700)] no-underline transition-colors hover:text-[var(--color-primary)]"
          >
            创建纪念日
          </Link>
          <Button size="sm" variant="primary">
            开始准备惊喜
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="p-2 text-[var(--color-primary)] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 8h16M4 16h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="animate-fade-in space-y-3 border-t border-[var(--color-border)] bg-[var(--color-cream-50)] px-4 py-4 md:hidden">
          <Link
            to="/"
            className="block py-2 text-sm font-[var(--font-ui)] text-[var(--color-cream-700)] no-underline"
            onClick={() => setMenuOpen(false)}
          >
            首页
          </Link>
          <Link
            to="/create"
            className="block py-2 text-sm font-[var(--font-ui)] text-[var(--color-cream-700)] no-underline"
            onClick={() => setMenuOpen(false)}
          >
            创建纪念日
          </Link>
          <Button size="sm" variant="primary" className="w-full">
            开始准备惊喜
          </Button>
        </div>
      )}
    </nav>
  );
}
