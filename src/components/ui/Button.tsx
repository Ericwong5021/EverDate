"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-[var(--font-ui)] font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[var(--color-primary)] text-[var(--color-cream-50)] border-none shadow-[0_12px_32px_rgba(90,31,43,0.22)] hover:bg-[var(--color-primary-hover)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(90,31,43,0.28)] active:translate-y-0",
    secondary:
      "bg-transparent text-[var(--color-primary)] border border-[var(--color-border-hover)] hover:bg-[var(--color-muted)] hover:border-[var(--color-secondary)]",
    ghost:
      "bg-transparent text-[var(--color-primary)] border-none hover:bg-[var(--color-muted)]",
  };

  const sizes = {
    sm: "text-sm px-4 py-2 rounded-full",
    md: "text-base px-7 py-3.5 rounded-full",
    lg: "text-lg px-9 py-4 rounded-full",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
