'use client';

import {
  POPPER_ITEM_SELECTOR,
  POPPER_SUB_CONTENT_SELECTOR,
} from '@/components/ui/primitives/selectors';
import React, { useState } from 'react';
import { PopperProviderProps } from './popper.types';

export const PopperSubContext = React.createContext<PopperProviderProps | null>(
  null,
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

  const openPopper = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const rect = (
        event.currentTarget || event.target
      ).getBoundingClientRect();

      setTriggerPosition(rect);

      setIsOpen((prevState) => !prevState);

      activeTrigger.current = event.currentTarget || event.target;
    },
    [],
  );

  function closePopper() {
    setIsOpen(false);
  }

  React.useEffect(() => {
    if (isOpen) {
      (
        document
          .querySelector(
            `${POPPER_SUB_CONTENT_SELECTOR}[aria-labelledby='${id}']`,
          )
          ?.querySelector(POPPER_ITEM_SELECTOR) as HTMLElement
      )?.focus();
      setHighlightedIndex(0);
    }
  }, [id, isOpen]);

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
