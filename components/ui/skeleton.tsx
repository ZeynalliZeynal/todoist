import { cn } from '@/utils/lib';
import { ComponentProps } from 'react';

export default function Skeleton(props: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn(
        '[background-size:400%_100%] w-full bg-skeleton animate-skeleton',
        props.className
      )}
    />
  );
}
