import { cloneElement, ComponentProps, ReactElement, ReactNode } from 'react';
import { cn } from '@/utils/lib';
import { BadgeVariants } from '@/types/ui/variants';

interface BadgeProps extends ComponentProps<'span'> {
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactElement;
  variant?: BadgeVariants;
  children: ReactNode;
  className?: string;
  outline?: boolean;
}

export default function Badge({
  children,
  size = 'md',
  icon,
  variant = 'gray-subtle',
  className,
  outline,
  ...etc
}: BadgeProps) {
  return (
    <span
      className={cn(
        'rounded-md border border-transparent inline-flex cursor-default items-center w-max justify-center gap-1.5 font-medium',
        {
          'h-5 px-1.5 text-[10px]': size === 'sm',
          'h-6 px-2.5 text-xs': size === 'md',
          'h-8 px-3 text-sm': size === 'lg',
          'bg-gray-700 text-gray-50': variant === 'gray',
          'bg-gray-200 text-foreground [--border-color:var(--ds-gray-500)]':
            variant === 'gray-subtle',
          'bg-blue-700 text-blue-50': variant === 'blue',
          'bg-blue-200 text-blue-900 [--border-color:var(--ds-blue-500)]':
            variant === 'blue-subtle',
          'bg-purple-700 text-purple-50': variant === 'purple',
          'bg-purple-200 text-purple-900 [--border-color:var(--ds-purple-500)]':
            variant === 'purple-subtle',
          'bg-amber-700 text-background-200': variant === 'amber',
          'bg-amber-200 text-amber-900 [--border-color:var(--ds-amber-500)]':
            variant === 'amber-subtle',
          'bg-red-700 text-red-50': variant === 'red',
          'bg-red-200 text-red-900 [--border-color:var(--ds-red-500)]':
            variant === 'red-subtle',
          'bg-pink-700 text-pink-50': variant === 'pink',
          'bg-pink-200 text-pink-900 [--border-color:var(--ds-pink-500)]':
            variant === 'pink-subtle',
          'bg-green-700 text-green-50': variant === 'green',
          'bg-green-200 text-green-900 [--border-color:var(--ds-green-500)]':
            variant === 'green-subtle',
          'bg-teal-700 text-teal-50': variant === 'teal',
          'bg-teal-200 text-teal-900 [--border-color:var(--ds-teal-500)]':
            variant === 'teal-subtle',
          'bg-trial text-foreground': variant === 'trial',
          'text-gray-100 bg-foreground': variant === 'inverted',

          'border-[var(--border-color)]': outline,
        },
        className,
      )}
      {...etc}
    >
      {icon &&
        cloneElement(icon, {
          className: cn({
            'size-4': size === 'lg',
            'size-3.5': size === 'md',
            'size-3': size === 'sm',
          }),
        })}
      {children}
    </span>
  );
}
