import { usePopper } from '@/components/ui/primitives/popper/popper-context';
import { PopperItemProps } from '@/components/ui/primitives/popper/popper.types';
import { POPPER_ITEM_SELECTOR } from '@/components/ui/primitives/selectors';
import { mergeRefs } from '@/utils/ui/merge-refs';
import { chain } from '@/utils/chain';
import React, { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

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
        event.preventDefault();
        ref.current?.click();
      }
    }

    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
      const target = event.target as HTMLElement;
      if (target.closest(POPPER_ITEM_SELECTOR)?.hasAttribute('aria-controls'))
        return;
      event.preventDefault();
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
        className: clsx(
          className,
          (children.props as React.ComponentProps<'div'>).className,
        ),
      } as HTMLAttributes<HTMLElement>)
    ) : (
      <div {...attrs}>
        <span>
          {prefix}
          {children}
        </span>
        {suffix}
      </div>
    );
  },
);

PopperItem.displayName = 'PopperItem';
