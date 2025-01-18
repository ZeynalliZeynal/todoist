'use client';

import { PopperContentProps } from '@/components/ui/primitives/popper/popper.types';
import { usePopper } from '@/components/ui/primitives/popper/popper-context';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-ui';
import { cn } from '@/utils/lib';
import React from 'react';
import ReactFocusLock from 'react-focus-lock';
import { POPPER_ITEM_SELECTOR } from '../selectors';

export function PopperContent(props: PopperContentProps) {
  const { children, className, ...etc } = props;
  const {
    isOpen,
    popperStyle,
    closePopper,
    activeTrigger,
    highlightedIndex,
    setHighlightedIndex,
    highlight,
    id,
  } = usePopper();

  const ref = useOutsideClick({ action: closePopper });

  function handleKeyDown(event: React.KeyboardEvent) {
    if (!ref.current) return;
    if (event.key === 'Escape') {
      closePopper();
    }
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      const direction: 'next' | 'previous' =
        event.code === 'ArrowUp' ? 'previous' : 'next';

      const menuItems = Array.from(
        ref.current.querySelectorAll(POPPER_ITEM_SELECTOR),
      );

      let nextIndex;
      switch (direction) {
        case 'next':
          nextIndex =
            highlightedIndex === undefined ||
            highlightedIndex === menuItems.length - 1
              ? menuItems.indexOf(menuItems[menuItems.length - 1])
              : highlightedIndex + 1;
          break;
        default:
          nextIndex =
            highlightedIndex === undefined || highlightedIndex === 0
              ? 0
              : highlightedIndex - 1;
          break;
      }
      console.log(highlightedIndex);
      setHighlightedIndex(nextIndex);
      highlight(menuItems[nextIndex] as HTMLElement);
    }
  }

  return createPortal(
    <AnimatePresence onExitComplete={() => activeTrigger?.focus()}>
      {isOpen && popperStyle && (
        <ReactFocusLock
          disabled={!isOpen}
          onDeactivation={() => activeTrigger?.focus()}
        >
          <motion.div
            animate={{
              opacity: 1,
              scale: 1,
            }}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            style={{
              position: 'fixed',
              pointerEvents: 'auto',
              ...popperStyle,
            }}
          >
            <div
              tabIndex={-1}
              data-state={isOpen ? 'open' : 'closed'}
              data-popper-content=""
              aria-orientation="vertical"
              ref={ref}
              id={id}
              className={cn(
                'bg-background-100 p-2 rounded-xl border w-48 mt-2 focus:outline-0',
                className,
              )}
              onKeyDown={handleKeyDown}
              {...etc}
            >
              {children}
            </div>
          </motion.div>
        </ReactFocusLock>
      )}
    </AnimatePresence>,
    document.body,
  );
}
