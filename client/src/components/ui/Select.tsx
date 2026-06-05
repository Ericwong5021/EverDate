import { cn } from "@/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function Select({ label, error, options, className, id, ...props }: SelectProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="text-warm-700 block text-sm font-medium">
          {label}
        </label>
      )}
      <select
        id={id}
        className={cn(
          "text-warm-900 w-full rounded-xl border bg-white px-4 py-3",
          "focus:ring-wine-500 focus:border-transparent focus:ring-2 focus:outline-none",
          "transition-all duration-200",
          error ? "border-red-500" : "border-warm-200",
          className,
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
