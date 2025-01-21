'use client';

import { usePopper } from '@/components/ui/primitives/popper/popper-context';
import { chain } from '@/utils/chain';
import { cn } from '@/utils/lib';
import React, { HTMLAttributes } from 'react';
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
      asChild,
      disabled,
      ...etc
    } = props;
    const { closePopper, highlightedItem, highlight } = usePopper();

    function handleMouseEnter(event: React.MouseEvent<HTMLDivElement>) {
      if (disabled) return;
      event.currentTarget.tabIndex = 0;
      highlight(event.currentTarget);
      onMouseEnter?.(event);
    }

    function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>) {
      event.currentTarget.tabIndex = -1;
      highlight(null);
      onMouseLeave?.(event);
    }

    function handleKeyDown(event: React.KeyboardEvent) {
      if (event.key === 'Enter' || event.key === ' ') {
        ref.current?.click();
      }
    }

    const attrs = {
      ref: mergeRefs(ref, forwardRef),
      tabIndex: -1,
      'data-popper-item': '',
      role: 'menuitem',
      'data-disabled': disabled ? '' : null,
      'data-highlighted': highlightedItem === ref.current ? '' : null,
      className,
      onClick: !disabled ? chain(onClick, closePopper) : undefined,
      onMouseEnter: !disabled ? handleMouseEnter : undefined,
      onMouseLeave: !disabled ? handleMouseLeave : undefined,
      onKeyDown: !disabled ? chain(handleKeyDown, onKeyDown) : undefined,
      ...etc,
    } as HTMLAttributes<HTMLElement>;

    return asChild && React.isValidElement(children) ? (
      React.cloneElement(children, {
        ...attrs,
        className: cn(className, children.props.className),
      } as HTMLAttributes<HTMLElement>)
    ) : (
      <div
        {...attrs}
        className={cn(
          'flex items-center rounded-md px-2 cursor-pointer h-10 align-middle transition focus:bg-gray-alpha-100 outline-none data-[disabled]:text-gray-500 data-[disabled]:pointer-events-none data-[disabled]:focus:bg-transparent',
          attrs.className
        )}
      >
        {children}
      </div>
    );
  }
);

PopperItem.displayName = 'PopperItem';
