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
          <label className="block text-sm font-medium text-[var(--color-primary)] mb-2 font-[var(--font-ui)]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-cream-50)] text-[var(--color-foreground)] font-[var(--font-body)] placeholder:text-[var(--color-cream-400)] transition-all duration-300 focus:outline-none focus:border-[var(--color-secondary)] focus:shadow-[var(--shadow-gold)] ${
            error ? "border-[var(--color-wine-700)]" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-[var(--color-wine-700)] font-[var(--font-ui)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
