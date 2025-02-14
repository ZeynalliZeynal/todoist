import { ComponentProps } from 'react';
import { cn } from '@/utils/lib';

export default function Kbd({
  children,
  className,
  ...props
}: { children: React.ReactNode } & ComponentProps<'kbd'>) {
  return (
    <kbd
      className={cn(
        'text-gray-900 text-xs center h-5 rounded shadow-border px-1 gap-0.5 font-geist-mono',
        className,
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
