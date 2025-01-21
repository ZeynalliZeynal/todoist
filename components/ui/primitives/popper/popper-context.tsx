'use client';

import React, { useState } from 'react';
import { PopperContextProps } from './popper.types';
import { useRestrict } from '@/hooks/use-ui';
import {
  POPPER_CONTENT_SELECTOR,
  POPPER_ITEM_SELECTOR,
  POPPER_SUB_CONTENT_SELECTOR,
} from '@/components/ui/primitives/selectors';

const PopperContext = React.createContext<PopperContextProps | null>(null);

export function usePopper() {
  const context = React.useContext(PopperContext);
  if (!context)
    throw new Error('usePopper must be used within a Popper context');
  return context;
}

export function PopperProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [triggerPosition, setTriggerPosition] = useState<DOMRect | null>(null);
  const [highlightedIndex, setHighlightedIndex] = React.useState<
    number | undefined
  >(undefined);
  const [highlightedItem, setHighlightedItem] =
    React.useState<HTMLElement | null>(null);

  const activeTrigger = React.useRef<HTMLElement | null>(null);

  const uiId = React.useId();

  const id = `geist-${uiId}`;

  function highlight(element: HTMLElement | null) {
    if (element) {
      const rootElement =
        element.closest(POPPER_CONTENT_SELECTOR) ||
        (element.closest(POPPER_SUB_CONTENT_SELECTOR) as HTMLElement);
      const items = Array.from(
        rootElement.querySelectorAll(POPPER_ITEM_SELECTOR)
      );
      setHighlightedItem(element);
      element?.focus();
      setHighlightedIndex(items.indexOf(element));
    } else {
      setHighlightedItem(null);
      (document.querySelector(POPPER_CONTENT_SELECTOR) as HTMLElement).focus();
    }
  }

  function openPopper(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setTriggerPosition(rect);

    setIsOpen((prevState) => !prevState);

    activeTrigger.current = event.currentTarget;
    (document.querySelector(POPPER_CONTENT_SELECTOR) as HTMLElement)?.focus();
  }

  function closePopper() {
    activeTrigger.current?.focus();
    setIsOpen(false);
    setHighlightedItem(null);
    setHighlightedIndex(undefined);
  }

  useRestrict({ condition: isOpen });
  return (
    <PopperContext.Provider
      value={{
        isOpen,
        openPopper,
        closePopper,
        triggerPosition,
        id,
        highlightedItem,
        highlightedIndex,
        highlight,
        setHighlightedIndex,
        activeTrigger: activeTrigger.current,
        setTriggerPosition,
      }}
    >
      {children}
    </PopperContext.Provider>
  );
}
