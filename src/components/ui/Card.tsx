import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "elevated";
}

export function Card({ children, className = "", variant = "default" }: CardProps) {
  const variants = {
    default:
      "bg-[var(--color-cream-50)]/80 border border-[var(--color-border)] shadow-[var(--shadow-card)] backdrop-blur-sm",
    glass:
      "bg-[var(--color-cream-50)]/60 border border-[var(--color-border)] shadow-[var(--shadow-soft)] backdrop-blur-md",
    elevated:
      "bg-[var(--color-cream-50)] border border-[var(--color-border)] shadow-[var(--shadow-elevated)]",
  };

  return (
    <div className={`rounded-[var(--radius-xl)] p-6 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`text-xl font-[var(--font-title)] font-medium text-[var(--color-primary)] ${className}`}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mt-1 text-sm font-[var(--font-body)] text-[var(--color-muted-foreground)] ${className}`}
    >
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${className}`}>{children}</div>;
}

export function CardFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mt-4 border-t border-[var(--color-border)] pt-4 ${className}`}>{children}</div>
  );
}
