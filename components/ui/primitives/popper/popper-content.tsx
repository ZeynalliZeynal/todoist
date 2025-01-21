'use client';

import { usePopper } from '@/components/ui/primitives/popper/popper-context';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-ui';
import { cn } from '@/utils/lib';
import React, { HTMLAttributes, useCallback } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { POPPER_ITEM_SELECTOR } from '../selectors';
import { useResize } from '@/hooks/useResize';
import { chain } from '@/utils/chain';
import { PopperContentProps } from '@/components/ui/primitives/popper/popper.types';
import { mergeRefs } from '@/utils/ui/merge-refs';

export const PopperContent = React.forwardRef<
  HTMLDivElement,
  PopperContentProps
>((props, forwardRef) => {
  const {
    children,
    className,
    align = 'center',
    side = 'bottom',
    asChild,
    onKeyDown,
    ...etc
  } = props;
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
    const viewportWidth = window.innerWidth;

    let top: number | 'auto' = 'auto';
    let left: number | 'auto' = 'auto';
    let bottom: number | 'auto' = 'auto';
    let right: number | 'auto' = 'auto';

    if (side === 'bottom' || side === 'top') {
      if (side === 'bottom') {
        top = triggerPosition.top + triggerPosition.height;
        if (top + ref.current.offsetHeight > viewportHeight) {
          top = 'auto';
          bottom = viewportHeight - triggerPosition.top;
        }
      } else {
        bottom = viewportHeight - triggerPosition.top;
        if (triggerPosition.top - ref.current.offsetHeight < 0) {
          top = triggerPosition.top + triggerPosition.height;
          bottom = 'auto';
        }
      }
      if (align === 'start') {
        left = triggerPosition.left;
      } else if (align === 'end') {
        right = viewportWidth - (triggerPosition.left + triggerPosition.width);
      } else {
        left =
          triggerPosition.left +
          (triggerPosition.width - ref.current.offsetWidth) / 2;
      }
    } else {
      if (side === 'right') {
        left = triggerPosition.left + triggerPosition.width;
        if (left + ref.current.offsetWidth > viewportWidth) {
          left = 'auto';
          right = viewportWidth - triggerPosition.left;
        }
      } else {
        right = viewportWidth - triggerPosition.left;
        if (triggerPosition.left - ref.current.offsetWidth < 0) {
          left = triggerPosition.left + triggerPosition.width;
          right = 'auto';
        }
      }
      if (align === 'start') {
        top = triggerPosition.top;
      } else if (align === 'end') {
        bottom =
          viewportHeight - (triggerPosition.top + triggerPosition.height);
      } else {
        top =
          triggerPosition.top +
          (triggerPosition.height - ref.current.offsetHeight) / 2;
      }
    }

    setStyle({ top, left, bottom, right });
  }, [align, ref, side, triggerPosition]);

  useResize(isOpen, handleResize);

  const attrs = {
    'data-align': align,
    'data-side': side,
    tabIndex: -1,
    'data-state': isOpen ? 'open' : 'closed',
    'data-popper-content': '',
    'aria-orientation': 'vertical',
    ref: mergeRefs(ref, forwardRef),
    id,
    className,
    onKeyDown: chain(handleKeyDown, onKeyDown),
    ...etc,
  } as HTMLAttributes<HTMLDivElement>;

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
                  attrs.className,
                )}
              >
                {children}
              </div>
            )}
          </motion.div>
        </ReactFocusLock>
      )}
    </AnimatePresence>,
    document.body,
  );
});
PopperContent.displayName = 'PopperContent';
