'use client';

import React from 'react';
import { cn } from '@/utils/lib';
import { PopperGroupProps } from '@/components/ui/primitives/popper/popper.types';

export const PopperGroup = React.forwardRef<HTMLDivElement, PopperGroupProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        aria-orientation="horizontal"
        className={cn(props.className)}
        {...props}
      />
    );
  },
);
PopperGroup.displayName = 'PopperGroup';
