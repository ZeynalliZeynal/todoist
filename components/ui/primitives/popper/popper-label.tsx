import React from 'react';
import { cn } from '@/utils/lib';

export const PopperLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>((props, ref) => {
  return (
    <div
      ref={ref}
      className={cn('h-10 px-2 flex items-center gap-2', props.className)}
      {...props}
    />
  );
});
PopperLabel.displayName = 'PopperLabel';
