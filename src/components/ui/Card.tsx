import { HTMLAttributes, forwardRef } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className = '',
      variant = 'default',
      padding = 'md',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-xl transition-all duration-200';

    const variants = {
      default:
        'bg-white shadow-[var(--shadow-base)] border border-[var(--color-cream-200)]',
      elevated:
        'bg-white shadow-[var(--shadow-lg)] border border-[var(--color-cream-100)]',
      outlined:
        'bg-white border-2 border-[var(--color-cream-300)]',
    };

    const paddings = {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-4 sm:p-6',
      lg: 'p-6 sm:p-8',
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`mb-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className = '', as: Component = 'h3', children, ...props }, ref) => (
    <Component
      ref={ref}
      className={`font-[var(--font-serif)] text-xl font-semibold text-[var(--color-foreground)] ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
);

CardTitle.displayName = 'CardTitle';

export type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className = '', children, ...props }, ref) => (
    <p
      ref={ref}
      className={`text-sm text-[var(--color-muted-foreground)] ${className}`}
      {...props}
    >
      {children}
    </p>
  )
);

CardDescription.displayName = 'CardDescription';

export type CardContentProps = HTMLAttributes<HTMLDivElement>;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', children, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
);

CardContent.displayName = 'CardContent';

export type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`mt-4 pt-4 border-t border-[var(--color-cream-200)] flex items-center ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

CardFooter.displayName = 'CardFooter';
