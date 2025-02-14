'use client';

import React, { ComponentProps, useId } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/lib';

interface TabProps<T extends React.ElementType = 'div'>
  extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  isPillActive?: boolean;
  isIndicatorActive?: boolean;
  as?: T;
}

export type TabPropsWithAs<T extends React.ElementType> = TabProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TabProps<T>>;

interface TabsContextProps {
  activeIndicatorId: string;
  activePillId: string;
}

export interface TabsProviderProps extends ComponentProps<'div'> {
  children: React.ReactNode;
}

const TabsContext = React.createContext<TabsContextProps | null>(null);
export function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context)
    throw new Error(
      'useTabsContext cannot be used outside of the TabsProvider',
    );
  return context;
}

export function Tabs({ children, className, ...etc }: TabsProviderProps) {
  const id = useId();
  const activeIndicatorId = `indicated-tab${id}`;
  const activePillId = `active-tab${id}`;

  return (
    <TabsContext.Provider value={{ activeIndicatorId, activePillId }}>
      <div
        role="tablist"
        data-orientation={etc['aria-orientation']}
        className={cn(
          'flex',
          etc['aria-orientation'] === 'vertical' ? 'flex-col' : 'items-center',
          className,
        )}
        {...etc}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}
export function Tab<T extends React.ElementType = 'div'>({
  children,
  isPillActive,
  className,
  isIndicatorActive,
  as,
  ...props
}: TabPropsWithAs<T>) {
  const Component = as || 'div';
  const { activePillId, activeIndicatorId } = useTabsContext();

  const active = isPillActive ? 'pill' : isIndicatorActive ? 'indicator' : null;

  return (
    <Component
      role="tab"
      data-active={active}
      className={cn(
        'relative flex items-center justify-center transition cursor-pointer',
        className,
      )}
      {...props}
    >
      <AnimatePresence presenceAffectsLayout={true}>
        {isPillActive && (
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
            layoutId={activePillId}
            data-active-pill=""
            className="absolute inset-0"
            transition={{
              duration: 0.15,
            }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-[1]">{children}</div>
      <AnimatePresence>
        {isIndicatorActive && (
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
            layoutId={activeIndicatorId}
            data-active-indicator=""
            className="absolute"
            transition={{
              duration: 0.15,
            }}
          />
        )}
      </AnimatePresence>
    </Component>
  );
}
