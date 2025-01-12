'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/lib';

export interface TabProps extends React.ComponentProps<'button'> {
  children?: React.ReactNode;
  isActive?: boolean;
}

export function PrimitiveTab(props: TabProps) {
  const { children, isActive, className, ...etc } = props;

  return (
    <button
      role="tab"
      data-active={isActive ? '' : null}
      className={cn(
        'relative flex items-center justify-center transition',
        className
      )}
      {...etc}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            layoutId="active-pill"
            data-active-pill=""
            className="absolute inset-0"
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.5,
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-[1]">{children}</span>
    </button>
  );
}
