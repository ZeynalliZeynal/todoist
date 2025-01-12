'use client';

import React from 'react';
import Framer from 'framer-motion';

interface TabTriggerProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  isActive?: boolean;
}

export function TabTrigger(props: TabTriggerProps) {
  const { children, isActive, ...etc } = props;

  return (
    <button
      className="relative h-8 rounded-md px-3 flex items-center justify-center text-gray-900 hover:text-foreground transition"
      {...etc}
    >
      {isActive && (
        <Framer.motion.button
          layoutId="active-pill"
          className="absolute inset-0 bg-gray-200 rounded-md"
          transition={{
            type: 'spring',
            bounce: 0.2,
            duration: 0.5,
          }}
        />
      )}
      {children}
    </button>
  );
}
