import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Information, Stop, Warning } from 'vercel-geist-icons';

interface BannerProps extends React.ComponentProps<'div'> {
  icon?: React.ReactNode | 'success' | 'warning' | 'info' | 'error';
  fill?: boolean;
  label?: string;
  variant?:
    | 'gray'
    | 'blue'
    | 'purple'
    | 'amber'
    | 'red'
    | 'pink'
    | 'green'
    | 'teal';
}

export default function Banner({
  children,
  variant = 'gray',
  icon,
  className,
  fill,
  label,
  ...props
}: BannerProps) {
  return (
    <section
      className={cn(
        'border-y flex items-center [&>svg]:size-4 h-10 gap-2 justify-center',
        {
          // variants
          'bg-transparent text-gray-900 border-gray-400': variant === 'gray',
          'bg-gray-200': variant === 'gray' && fill,

          'bg-transparent text-blue-900 border-blue-400': variant === 'blue',
          'bg-blue-200': variant === 'blue' && fill,

          'bg-transparent text-red-900 border-red-400': variant === 'red',
          'bg-red-200': variant === 'red' && fill,

          'bg-transparent text-purple-900 border-purple-400':
            variant === 'purple',
          'bg-purple-200': variant === 'purple' && fill,

          'bg-transparent text-pink-900 border-pink-400': variant === 'pink',
          'bg-pink-200': variant === 'pink' && fill,

          'bg-transparent text-amber-900 border-amber-400': variant === 'amber',
          'bg-amber-200': variant === 'amber' && fill,

          'bg-transparent text-green-900 border-green-400': variant === 'green',
          'bg-green-200': variant === 'green' && fill,

          'bg-transparent text-teal-900 border-teal-400': variant === 'teal',
          'bg-teal-200': variant === 'teal' && fill,
        },
        className,
      )}
      {...props}
    >
      {typeof icon === 'string' ? (
        icon === 'success' ? (
          <CheckCircle />
        ) : icon === 'info' ? (
          <Information />
        ) : icon === 'error' ? (
          <Stop />
        ) : icon === 'warning' ? (
          <Warning />
        ) : null
      ) : (
        icon
      )}
      <p className="flex items-center gap-1">
        {label && <span className="font-medium">{label}:</span>}
        {children}
      </p>
    </section>
  );
}
