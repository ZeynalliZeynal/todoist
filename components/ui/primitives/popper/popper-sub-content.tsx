'use client';

import { usePopper } from '@/components/ui/primitives/popper/popper-context';
import { PopperSubContentProps } from '@/components/ui/primitives/popper/popper.types';
import { useOutsideClick } from '@/hooks/use-ui';
import { useResize } from '@/hooks/useResize';
import { chain } from '@/utils/chain';
import { cn } from '@/utils/lib';
import { keyboardArrowNavigation } from '@/utils/ui/keyboard-navigation';
import { mergeRefs } from '@/utils/ui/merge-refs';
import { AnimatePresence, motion } from 'framer-motion';
import React, { HTMLAttributes, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { POPPER_ITEM_SELECTOR } from '../selectors';
import { usePopperSub } from './popper-sub-context';

export const PopperSubContent = React.forwardRef<
  HTMLDivElement,
  PopperSubContentProps
>((props, forwardRef) => {
  const { children, className, asChild, onKeyDown, ...etc } = props;
  const { highlight, isOpen: isParentOpen } = usePopper();
  const {
    isOpen,
    triggerPosition,
    closePopper,
    highlightedIndex,
    setHighlightedIndex,
    id,
  } = usePopperSub();
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  const ref = useOutsideClick({ action: closePopper });

  function handleKeyDown(event: React.KeyboardEvent) {
    if (!ref.current) return;
    if (event.key === 'Escape') {
      closePopper();
    }
    const obj = keyboardArrowNavigation({
      event,
      highlightedIndex,
      itemSelector: POPPER_ITEM_SELECTOR,
    });
    setHighlightedIndex(obj?.nextIndex);
    highlight(obj?.menuItems[obj?.nextIndex] as HTMLElement);
  }

  const handleResize = useCallback(() => {
    if (!ref.current || !triggerPosition) return;
    setStyle({
      top: triggerPosition.top,
      left: triggerPosition.left + triggerPosition.width,
    });
  }, [ref, triggerPosition]);

  useResize(isOpen, handleResize);

  const attrs = {
    tabIndex: -1,
    'data-state': isOpen ? 'open' : 'closed',
    'data-popper-sub-content': '',
    'aria-orientation': 'vertical',
    'aria-labelledby': id,
    ref: mergeRefs(ref, forwardRef),
    id,
    className,
    onKeyDown: chain(handleKeyDown, onKeyDown),
    ...etc,
  } as HTMLAttributes<HTMLDivElement>;

  return createPortal(
    <AnimatePresence>
      {isParentOpen && isOpen && triggerPosition && (
        <motion.div
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          initial={{
            opacity: 0,
            x: 16,
          }}
          exit={{
            opacity: 0,
            x: 16,
          }}
          style={{
            position: 'fixed',
            pointerEvents: 'auto',
            left: triggerPosition.left,
            ...style,
          }}
        >
          {asChild && React.isValidElement(children) ? (
            React.cloneElement(children, {
              ...attrs,
              className: cn(className, children.props.className),
            } as HTMLAttributes<HTMLElement>)
          ) : (
            <div
              {...attrs}
              className={cn(
                'bg-background-100 p-2 rounded-xl border w-48 focus:outline-0',
                attrs.className
              )}
            >
              {children}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
});
PopperSubContent.displayName = 'PopperSubContent';
