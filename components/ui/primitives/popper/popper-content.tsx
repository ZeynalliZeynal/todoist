'use client';

import { PopperContentProps } from '@/components/ui/primitives/popper/popper.types';
import { usePopper } from '@/components/ui/primitives/popper/popper-context';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-ui';

export function PopperContent(props: PopperContentProps) {
  const { children } = props;
  const { isOpen, popperStyle, closePopper } = usePopper();

  const ref = useOutsideClick({ action: closePopper });

  return createPortal(
    <AnimatePresence>
      {isOpen && popperStyle && (
        <motion.div
          data-popper-content=""
          ref={ref}
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
          className="fixed bg-background-100 top-0 p-2 rounded-xl border w-48 mt-2"
          style={{
            ...popperStyle,
            pointerEvents: 'auto',
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
