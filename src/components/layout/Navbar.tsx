"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-cream-50)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="font-[var(--font-title)] text-xl font-semibold text-[var(--color-primary)] tracking-wide">
            EverDate
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-[var(--font-ui)] text-[var(--color-cream-700)] hover:text-[var(--color-primary)] transition-colors no-underline"
          >
            首页
          </Link>
          <Link
            href="/create"
            className="text-sm font-[var(--font-ui)] text-[var(--color-cream-700)] hover:text-[var(--color-primary)] transition-colors no-underline"
          >
            创建纪念日
          </Link>
          <Button size="sm" variant="primary">
            开始准备惊喜
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[var(--color-primary)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
        <div className="md:hidden bg-[var(--color-cream-50)] border-t border-[var(--color-border)] px-4 py-4 space-y-3 animate-fade-in">
          <Link
            href="/"
            className="block text-sm font-[var(--font-ui)] text-[var(--color-cream-700)] py-2 no-underline"
            onClick={() => setMenuOpen(false)}
          >
            首页
          </Link>
          <Link
            href="/create"
            className="block text-sm font-[var(--font-ui)] text-[var(--color-cream-700)] py-2 no-underline"
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
