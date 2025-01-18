'use client';

import React, { CSSProperties, useState } from 'react';
import { PopperContextProps } from './popper.types';
import { useRestrict } from '@/hooks/use-ui';
import { POPPER_CONTENT_SELECTOR } from '@/components/ui/primitives/selectors';
import { createPortal } from 'react-dom';
import { span } from 'framer-motion/m';

const PopperContext = React.createContext<PopperContextProps | null>(null);

export function usePopper() {
  const context = React.useContext(PopperContext);
  if (!context)
    throw new Error('usePopper must be used within a Popper context');
  return context;
}

export function PopperProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [popperStyle, setPopperStyle] = useState<CSSProperties>({});
  const [highlightedIndex, setHighlightedIndex] = React.useState(-1);
  const [highlightedItem, setHighlightedItem] =
    React.useState<HTMLElement | null>(null);

  const activeTrigger = React.useRef<HTMLElement | null>(null);

  const uiId = React.useId();

  const id = `geist-${uiId}`;

  function highlight(element: HTMLElement | null) {
    if (element) {
      setHighlightedItem(element);
      element?.focus();
    } else {
      setHighlightedItem(null);
      (document.querySelector(POPPER_CONTENT_SELECTOR) as HTMLElement).focus();
    }
  }

  function openPopper(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const top = rect.top + rect.height;
    const left = rect.left;
    setPopperStyle({ top, left });

    setIsOpen((prevState) => !prevState);

    activeTrigger.current = event.currentTarget;

    (document.querySelector(POPPER_CONTENT_SELECTOR) as HTMLElement)?.focus();
  }

  function closePopper() {
    setIsOpen(false);
    activeTrigger.current?.focus();
  }

  useRestrict({ condition: isOpen });

  return (
    <PopperContext.Provider
      value={{
        isOpen,
        openPopper,
        closePopper,
        popperStyle,
        id,
        highlightedItem,
        highlight,
      }}
    >
      {isOpen &&
        createPortal(
          <span
            tabIndex={0}
            data-focus-guard=""
            style={{
              outline: 'none',
              opacity: '0',
              position: 'fixed',
              pointerEvents: 'none',
            }}
          />,
          document.body,
        )}
      {children}
    </PopperContext.Provider>
  );
}
