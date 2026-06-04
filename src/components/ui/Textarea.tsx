import { TextareaHTMLAttributes, forwardRef } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className = '',
      label,
      error,
      helperText,
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`
            w-full px-4 py-2.5
            bg-white border rounded-lg
            text-[var(--color-foreground)] placeholder-[var(--color-cream-400)]
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-0
            min-h-[120px] resize-y
            ${
              error
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-[var(--color-cream-300)] focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]'
            }
            disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[var(--color-muted)]
            ${className}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${textareaId}-helper`} className="mt-1.5 text-sm text-[var(--color-muted-foreground)]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
