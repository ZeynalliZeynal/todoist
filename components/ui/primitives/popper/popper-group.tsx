'use client';

import React from 'react';
import { cn } from '@/utils/lib';

export const PopperGroup = React.forwardRef<
  HTMLDivElement,
  ComponentProps<'div'>
>((props, ref) => {
  return (
    <div
      ref={ref}
      role="group"
      aria-orientation="horizontal"
      className={cn(props.className)}
      {...props}
    />
  );
});
PopperGroup.displayName = 'PopperGroup';
