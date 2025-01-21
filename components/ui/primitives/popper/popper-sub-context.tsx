'use client';

import { POPPER_CONTENT_SELECTOR } from '@/components/ui/primitives/selectors';
import React, { useState } from 'react';
import { PopperProviderProps } from './popper.types';

export const PopperSubContext = React.createContext<PopperProviderProps | null>(
  null
);

export function usePopperSub() {
  const context = React.useContext(PopperSubContext);
  if (!context)
    throw new Error('usePopperSub must be used within a PopperSub context');
  return context;
}

export function PopperSub({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [triggerPosition, setTriggerPosition] = useState<DOMRect | null>(null);
  const [highlightedIndex, setHighlightedIndex] = React.useState<
    number | undefined
  >(undefined);

  const activeTrigger = React.useRef<HTMLElement | null>(null);

  const uiId = React.useId();

  const id = `geist-${uiId}`;

  function openPopper(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    setTriggerPosition(rect);

    setIsOpen((prevState) => !prevState);

    activeTrigger.current = event.currentTarget;
    (document.querySelector(POPPER_CONTENT_SELECTOR) as HTMLElement)?.focus();
  }

  function closePopper() {
    setIsOpen(false);
  }

  return (
    <PopperSubContext.Provider
      value={{
        isOpen,
        openPopper,
        closePopper,
        triggerPosition,
        id,
        highlightedIndex,
        setHighlightedIndex,
        activeTrigger: activeTrigger.current,
        setTriggerPosition,
      }}
    >
      {children}
    </PopperSubContext.Provider>
  );
}
