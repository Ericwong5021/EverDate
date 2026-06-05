import { TextareaHTMLAttributes, forwardRef } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-1.5 block text-sm font-medium text-[var(--color-foreground)]"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`min-h-[120px] w-full resize-y rounded-lg border bg-white px-4 py-2.5 text-[var(--color-foreground)] placeholder-[var(--color-cream-400)] transition-all duration-200 focus:ring-2 focus:ring-offset-0 focus:outline-none ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-[var(--color-cream-300)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
          } disabled:cursor-not-allowed disabled:bg-[var(--color-muted)] disabled:opacity-50 ${className} `}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p
            id={`${textareaId}-helper`}
            className="mt-1.5 text-sm text-[var(--color-muted-foreground)]"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
