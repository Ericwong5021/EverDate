"use client";

import { type SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--color-primary)] mb-2 font-[var(--font-ui)]">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`w-full px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-cream-50)] text-[var(--color-foreground)] font-[var(--font-body)] transition-all duration-300 focus:outline-none focus:border-[var(--color-secondary)] focus:shadow-[var(--shadow-gold)] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2393745c%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10 ${
            error ? "border-[var(--color-wine-700)]" : ""
          } ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1.5 text-sm text-[var(--color-wine-700)] font-[var(--font-ui)]">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
