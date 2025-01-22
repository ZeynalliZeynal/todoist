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
      suffix,
      prefix,
      inset,
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

    function handleClick(event: React.MouseEvent<HTMLElement>) {
      const target = event.target as HTMLElement;
      if (target.hasAttribute('aria-controls')) return;
      closePopper();
    }

    const attrs = {
      ref: mergeRefs(ref, forwardRef),
      tabIndex: -1,
      'data-popper-item': '',
      role: 'menuitem',
      'data-disabled': disabled ? '' : null,
      'data-highlighted': highlightedItem === ref.current ? '' : null,
      className,
      onClick: !disabled ? chain(onClick, handleClick) : undefined,
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
          'flex items-center justify-between px-2 rounded-md cursor-pointer h-10 align-middle transition focus:bg-gray-alpha-100 outline-none data-[disabled]:text-gray-500 data-[disabled]:pointer-events-none data-[disabled]:focus:bg-transparent',
          attrs.className,
        )}
      >
        <span
          className={cn('flex items-center gap-2', inset && !prefix && 'pl-3')}
        >
          {prefix}
          {children}
        </span>
        {suffix}
      </div>
    );
  },
);

PopperItem.displayName = 'PopperItem';
