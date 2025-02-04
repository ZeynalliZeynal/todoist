import React, { useState } from 'react';
import { PopperContextProps } from './popper.types';
import {
  POPPER_CONTENT_SELECTOR,
  POPPER_ITEM_SELECTOR,
  POPPER_SUB_CONTENT_SELECTOR,
} from '../selectors';
import { useRestrict } from '@/hooks/use-ui';

const PopperContext = React.createContext<PopperContextProps | null>(null);

export function usePopper() {
  const context = React.useContext(PopperContext);
  if (!context)
    throw new Error('usePopper must be used within a Popper context');
  return context;
}

export function Popper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState(false);
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
      (
        (document.querySelector(POPPER_SUB_CONTENT_SELECTOR) ||
          document.querySelector(POPPER_CONTENT_SELECTOR)) as HTMLElement
      ).focus();
    }
  }

  function openPopper(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setTriggerPosition(rect);

    setIsOpen((prevState) => !prevState);
    setIsMounted(false);

    activeTrigger.current = event.currentTarget;
    (document.querySelector(POPPER_CONTENT_SELECTOR) as HTMLElement)?.focus();
  }

  function closePopper() {
    setIsMounted(true);

    const popperContent = document.querySelector(
      POPPER_CONTENT_SELECTOR
    ) as HTMLElement;

    if (!popperContent) {
      setIsMounted(false);
      setIsOpen(false);
      return;
    }

    const hasAnimation =
      window.getComputedStyle(popperContent).animationDuration !== '0s' ||
      window.getComputedStyle(popperContent).transitionDuration !== '0s';

    const duration = Number(
      window.getComputedStyle(popperContent).animationDuration.split('s')[0] ||
        window.getComputedStyle(popperContent).transitionDuration.split('s')[0]
    );

    if (hasAnimation) {
      setTimeout(() => {
        setIsMounted(false);
        setIsOpen(false);
      }, duration * 1000); // convert to ms

      /* This approach has a limitation. it doesn't apply the delay on click of the popper item and i couldn't figure it out yet.
      function handleAnimateEnd() {
        setIsMounted(false);
        setIsOpen(false);
        
        popperContent.removeEventListener("animationend", handleAnimateEnd);
        popperContent.removeEventListener("transitionend", handleAnimateEnd);
      }
      popperContent.addEventListener("animationend", handleAnimateEnd);
      popperContent.addEventListener("transitionend", handleAnimateEnd);
      */
    } else {
      setIsMounted(true);
      setIsOpen(false);
    }

    activeTrigger.current?.focus();
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
        isMounted,
        setTriggerPosition,
      }}
    >
      {children}
    </PopperContext.Provider>
  );
}
