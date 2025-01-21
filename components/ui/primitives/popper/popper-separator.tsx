'use client';

import React from 'react';
import { PopperSeparatorProps } from '@/components/ui/primitives/popper/popper.types';
import { cn } from '@/utils/lib';

export const PopperSeparator = React.forwardRef<
  HTMLDivElement,
  PopperSeparatorProps
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
