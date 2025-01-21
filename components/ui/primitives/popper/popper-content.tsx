'use client';

import { PopperContentProps } from '@/components/ui/primitives/popper/popper.types';
import { usePopper } from '@/components/ui/primitives/popper/popper-context';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-ui';
import { cn } from '@/utils/lib';
import React, { useCallback } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { POPPER_ITEM_SELECTOR } from '../selectors';
import { useResize } from '@/hooks/useResize';

export function PopperContent(props: PopperContentProps) {
  const { children, className, ...etc } = props;
  const {
    isOpen,
    triggerPosition,
    closePopper,
    activeTrigger,
    highlightedIndex,
    setHighlightedIndex,
    highlight,
    id,
  } = usePopper();
  const [style, setStyle] = React.useState<React.CSSProperties>({});

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
            highlightedIndex === undefined
              ? 0
              : highlightedIndex === menuItems.length - 1
                ? menuItems.length - 1
                : highlightedIndex + 1;
          break;
        default:
          nextIndex =
            highlightedIndex === undefined
              ? menuItems.length - 1
              : highlightedIndex === 0
                ? 0
                : highlightedIndex - 1;
          break;
      }
      setHighlightedIndex(nextIndex);
      highlight(menuItems[nextIndex] as HTMLElement);
    }
  }

  const handleResize = useCallback(() => {
    if (!ref.current || !triggerPosition) return;

    const viewportHeight = window.innerHeight;
    const spaceBelow =
      viewportHeight - triggerPosition.top - triggerPosition.height;
    const spaceAbove = triggerPosition.top;
    const canFitBelow = spaceBelow >= ref.current.offsetHeight;
    const canFitAbove = spaceAbove >= ref.current.offsetHeight;

    if (canFitBelow) {
      setStyle({
        top: triggerPosition.top + triggerPosition.height,
        bottom: 'auto',
      });
    } else if (canFitAbove) {
      setStyle({
        bottom: viewportHeight - triggerPosition.top,
        top: 'auto',
      });
    } else {
      setStyle({
        bottom: 0,
        top: 'auto',
      });
    }
  }, [ref, triggerPosition]);

  useResize(isOpen, handleResize);

  return createPortal(
    <AnimatePresence onExitComplete={() => activeTrigger?.focus()}>
      {isOpen && triggerPosition && (
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
              left: triggerPosition.left,
              ...style,
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
                'bg-background-100 p-2 rounded-xl border w-48 my-2 focus:outline-0',
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
