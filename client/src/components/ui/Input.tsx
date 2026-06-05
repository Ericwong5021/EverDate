import { cn } from "@/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({ label, error, helperText, className, id, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="text-warm-700 block text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "text-warm-900 placeholder-warm-400 w-full rounded-xl border bg-white px-4 py-3",
          "focus:ring-wine-500 focus:border-transparent focus:ring-2 focus:outline-none",
          "transition-all duration-200",
          error ? "border-red-500" : "border-warm-200",
          className,
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      {helperText && !error && <p className="text-warm-500 text-sm">{helperText}</p>}
    </div>
  );
}
