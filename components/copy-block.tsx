import { cn } from '@/utils/lib';
import { ComponentProps, ReactNode } from 'react';
import Copy from '@/components/ui/copy';

interface CopyBlockProps extends ComponentProps<'div'> {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  text: string;
}

export default function CopyBlock({
  children,
  className,
  size = 'sm',
  text,
}: CopyBlockProps) {
  return (
    <div className={cn('relative w-full group', className)}>
      <Copy
        text={text}
        size={size}
        className="!absolute top-4 right-4 group-hover:opacity-100 focus-visible:opacity-100 opacity-0"
      />
      {children}
    </div>
  );
}
