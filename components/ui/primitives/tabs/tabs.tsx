'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/lib';

interface TabTriggerProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  isActive?: boolean;
}

export function TabTrigger(props: TabTriggerProps) {
  const { children, isActive, className, ...etc } = props;

  return (
    <button
      className={cn(
        'relative h-8 rounded-md px-3 flex items-center justify-center text-gray-900 hover:text-foreground transition',
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
            className="absolute inset-0 bg-gray-200 rounded-md"
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
