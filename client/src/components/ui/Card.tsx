import { cn } from "@/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated";
}

export function Card({ children, className, variant = "default" }: CardProps) {
  return (
    <div
      className={cn(
        "border-warm-100 rounded-2xl border bg-white",
        variant === "default" && "p-6 shadow-sm",
        variant === "elevated" && "p-8 shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
