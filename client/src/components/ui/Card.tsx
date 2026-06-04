import { cn } from '@/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated'
}

export function Card({ children, className, variant = 'default' }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-warm-100',
        variant === 'default' && 'shadow-sm p-6',
        variant === 'elevated' && 'shadow-lg p-8',
        className
      )}
    >
      {children}
    </div>
  )
}
