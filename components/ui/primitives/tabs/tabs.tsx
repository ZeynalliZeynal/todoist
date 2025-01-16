'use client';

import React, { ComponentProps, useId } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/lib';

export interface TabProps extends React.ComponentProps<'button'> {
  children?: React.ReactNode;
  isActive?: boolean;
}

interface TabsContextProps {
  id: string;
}

export interface TabsProviderProps extends ComponentProps<'div'> {
  children: React.ReactNode;
}

const TabsContext = React.createContext<TabsContextProps | null>(null);
export function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context)
    throw new Error(
      'useTabsContext cannot be used outside of the TabsProvider'
    );
  return context;
}

export function PrimitiveTabs({
  children,
  className,
  ...etc
}: TabsProviderProps) {
  const id = useId();
  const tabId = `active-tab${id}`;

  return (
    <TabsContext.Provider value={{ id: tabId }}>
      <div
        data-orientation={etc['aria-orientation']}
        className={cn(
          'flex',
          etc['aria-orientation'] === 'vertical' ? 'flex-col' : 'items-center',
          className
        )}
        {...etc}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function PrimitiveTab(props: TabProps) {
  const { id } = useTabsContext();
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
            layoutId={id}
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
