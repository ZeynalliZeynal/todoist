import { ComponentProps } from 'react';
import { cn } from '@/utils/lib';

export default function GeistContentWrapper(props: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn(
        'flex items-start justify-between p-6 bg-background-100 rounded-xl',
        props.className,
      )}
    />
  );
}
