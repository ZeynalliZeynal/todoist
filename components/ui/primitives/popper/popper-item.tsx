'use client';

import { usePopper } from '@/components/ui/primitives/popper/popper-context';
import { chain } from '@/utils/chain';
import { cn } from '@/utils/lib';
import React from 'react';
import { mergeRefs } from '@/utils/ui/merge-refs';
import { PopperItemProps } from '@/components/ui/primitives/popper/popper.types';

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
      disabled,
      ...etc
    } = props;
    const { closePopper, highlightedItem, highlight } = usePopper();

    function handleMouseEnter(event: React.MouseEvent<HTMLDivElement>) {
      if (disabled) return;
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
        data-disabled={disabled ? '' : null}
        data-highlighted={highlightedItem === ref.current ? '' : null}
        className={cn(
          'flex items-center rounded-lg px-3 h-9 align-middle transition cursor-default focus:bg-gray-alpha-100 outline-none data-[disabled]:text-gray-500 data-[disabled]:pointer-events-none data-[disabled]:focus:bg-transparent',
          className,
        )}
        onClick={!disabled ? chain(onClick, closePopper) : undefined}
        onMouseEnter={
          !disabled ? chain(handleMouseEnter, onMouseEnter) : undefined
        }
        onMouseLeave={
          !disabled ? chain(handleMouseLeave, onMouseLeave) : undefined
        }
        onKeyDown={!disabled ? chain(handleKeyDown, onKeyDown) : undefined}
        {...etc}
      >
        {children}
      </div>
    );
  },
);

PopperItem.displayName = 'PopperItem';
