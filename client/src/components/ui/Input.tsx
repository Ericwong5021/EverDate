import { cn } from '@/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export function Input({ label, error, helperText, className, id, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-warm-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          'w-full px-4 py-3 rounded-xl border bg-white text-warm-900 placeholder-warm-400',
          'focus:outline-none focus:ring-2 focus:ring-wine-500 focus:border-transparent',
          'transition-all duration-200',
          error ? 'border-red-500' : 'border-warm-200',
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      {helperText && !error && <p className="text-sm text-warm-500">{helperText}</p>}
    </div>
  )
}
