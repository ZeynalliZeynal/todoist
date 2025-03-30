'use client';

import { cn } from '@/lib/utils';

interface LoadingDotsProps {
  className?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function LoadingDots({
  className,
  color = 'bg-current',
  size = 'medium',
}: LoadingDotsProps) {
  const sizeClasses = {
    small: 'h-1 w-1',
    medium: 'h-1.5 w-1.5',
    large: 'h-2 w-2',
  };

  const gapClasses = {
    small: 'gap-1',
    medium: 'gap-1.5',
    large: 'gap-2',
  };

  return (
    <span
      className={cn(
        'flex items-center h-full *:shrink-0',
        gapClasses[size],
        className,
      )}
    >
      <span
        className={cn(
          'animate-loading-dot rounded-full',
          color,
          sizeClasses[size],
        )}
      />
      <span
        className={cn(
          'animate-loading-dot rounded-full',
          color,
          sizeClasses[size],
        )}
        style={{
          animationDelay: '200ms',
        }}
      />
      <span
        className={cn(
          'animate-loading-dot rounded-full',
          color,
          sizeClasses[size],
        )}
        style={{
          animationDelay: '400ms',
        }}
      />
    </span>
  );
}
