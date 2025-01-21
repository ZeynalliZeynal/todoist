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
    const {
      children,
      onClick,
      className,
      onMouseEnter,
      onMouseLeave,
      onKeyDown,
      ...etc
    } = props;
    const { closePopper, highlightedItem, highlight } = usePopper();

    function handleMouseEnter(event: React.MouseEvent<HTMLDivElement>) {
      event.stopPropagation();
      event.currentTarget.tabIndex = 0;
      highlight(event.currentTarget);
    }

    function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>) {
      event.currentTarget.tabIndex = -1;
      highlight(null);
    }

    function handleKeyDown(event: React.KeyboardEvent) {
      if (event.key === 'Enter' || event.key === ' ') {
        ref.current?.click();
      }
    }

    return (
      <div
        ref={mergeRefs(ref, forwardRef)}
        tabIndex={-1}
        data-popper-item=""
        role="menuitem"
        data-highlighted={highlightedItem === ref.current ? '' : null}
        className={cn(
          'flex items-center rounded-lg px-3 h-9 align-middle transition cursor-default focus:bg-gray-alpha-100 outline-none',
          className,
        )}
        onClick={chain(onClick, closePopper)}
        onMouseEnter={chain(handleMouseEnter, onMouseEnter)}
        onMouseLeave={chain(handleMouseLeave, onMouseLeave)}
        onKeyDown={chain(handleKeyDown, onKeyDown)}
        {...etc}
      >
        {children}
      </div>
    );
  },
);

PopperItem.displayName = 'PopperItem';
