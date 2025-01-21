'use client';

import React, { ComponentProps } from 'react';
import { cn } from '@/utils/lib';

export const PopperSeparator = React.forwardRef<
  HTMLDivElement,
  ComponentProps<'div'>
>((props, ref) => {
  return (
    <div
      ref={ref}
      role="separator"
      aria-orientation="horizontal"
      className={cn('-mx-2 my-2 h-px bg-gray-alpha-400', props.className)}
      {...props}
    />
  );
});
PopperSeparator.displayName = 'PopperSeparator';
