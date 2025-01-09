'use client';

import {
  CollapseContextProvider,
  useCollapseContext,
} from '@/components/ui/primitives/collapse/collapse-context';
import React from 'react';
import { cn } from '@/utils/lib';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CollapseContentProps,
  CollapseProps,
  CollapseTriggerProps,
} from '@/components/ui/primitives/collapse/types';

export function PrimitiveCollapse(props: CollapseProps) {
  const { children, className, ...etc } = props;
  return (
    <CollapseContextProvider>
      <div className={cn('flex flex-col', className)} {...etc}>
        {children}
      </div>
    </CollapseContextProvider>
  );
}

export function PrimitiveCollapseTrigger(props: CollapseTriggerProps) {
  const { children, className, onClick, ...etc } = props;
  const { collapse, collapseId, collapsed, state } = useCollapseContext();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    collapse();
    onClick?.(event);
  }

  return (
    <button
      aria-controls={collapseId}
      aria-expanded={collapsed}
      data-state={state}
      type="button"
      onClick={handleClick}
      className={cn('w-full flex items-center', className)}
      {...etc}
    >
      {children}
    </button>
  );
}

export function PrimitiveCollapseContent(props: CollapseContentProps) {
  const { children, className, ...etc } = props;
  const { collapsed, collapseId } = useCollapseContext();

  return (
    <AnimatePresence>
      {collapsed && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          exit={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div
            id={collapseId}
            data-state={collapsed ? 'open' : 'closed'}
            className={cn(className)}
            {...etc}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
