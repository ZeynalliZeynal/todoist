'use client';

import { PopperContentProps } from '@/components/ui/primitives/popper/popper.types';
import { usePopper } from '@/components/ui/primitives/popper/popper-context';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-ui';
import { cn } from '@/utils/lib';

export function PopperContent(props: PopperContentProps) {
  const { children, className, ...etc } = props;
  const { isOpen, popperStyle, closePopper, id } = usePopper();

  const ref = useOutsideClick({ action: closePopper });

  return createPortal(
    <AnimatePresence>
      {isOpen && popperStyle && (
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
              'bg-background-100 p-2 rounded-xl border w-48 mt-2',
              className,
            )}
            {...etc}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
