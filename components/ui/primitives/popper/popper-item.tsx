'use client';

import { PopperItemProps } from '@/types/ui/popper';
import { usePopper } from '@/components/ui/primitives/popper/popper-context';
import { chain } from '@/utils/chain';
import { cn } from '@/utils/lib';
import React from 'react';
import { mergeRefs } from '@/utils/ui/merge-refs';

export const PopperItem = React.forwardRef<HTMLDivElement, PopperItemProps>(
  (props, forwardRef) => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const { children, onClick, className, onMouseEnter, onMouseLeave, ...etc } =
      props;
    const { closePopper, highlightedItem, highlight } = usePopper();

    function handleMouseEnter(event: React.MouseEvent<HTMLDivElement>) {
      event.currentTarget.tabIndex = 0;
      highlight(event.currentTarget);
    }

    function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>) {
      event.currentTarget.tabIndex = -1;
      highlight(null);
    }

    return (
      <div
        ref={mergeRefs(ref, forwardRef)}
        tabIndex={-1}
        data-popper-item=""
        data-highlighted={highlightedItem === ref.current ? '' : null}
        className={cn(
          'flex items-center rounded-lg px-3 h-9 align-middle transition cursor-default focus:bg-gray-alpha-100',
          className,
        )}
        onClick={chain(closePopper, onClick)}
        onMouseEnter={chain(handleMouseEnter, onMouseEnter)}
        onMouseLeave={chain(handleMouseLeave, onMouseLeave)}
        {...etc}
      >
        {children}
      </div>
    );
  },
);

PopperItem.displayName = 'PopperItem';
