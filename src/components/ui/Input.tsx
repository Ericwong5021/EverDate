"use client";

import { type InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-[var(--font-ui)] font-medium text-[var(--color-primary)]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-cream-50)] px-4 py-3 font-[var(--font-body)] text-[var(--color-foreground)] transition-all duration-300 placeholder:text-[var(--color-cream-400)] focus:border-[var(--color-secondary)] focus:shadow-[var(--shadow-gold)] focus:outline-none ${
            error ? "border-[var(--color-wine-700)]" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm font-[var(--font-ui)] text-[var(--color-wine-700)]">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
