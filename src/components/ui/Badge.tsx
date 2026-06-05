import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "gold" | "wine";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default:
      "bg-[var(--color-muted)] text-[var(--color-muted-foreground)] border border-[var(--color-border)]",
    gold:
      "bg-[var(--color-gold-100)] text-[var(--color-gold-700)] border border-[var(--color-gold-200)]",
    wine:
      "bg-[var(--color-wine-100)] text-[var(--color-wine-800)] border border-[var(--color-wine-200)]",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-[var(--font-ui)] ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
