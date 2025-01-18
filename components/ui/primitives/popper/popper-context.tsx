'use client';

import React, { CSSProperties, useState } from 'react';
import { PopperContextProps } from './popper.types';
import { useRestrict } from '@/hooks/use-ui';

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
  const activeTrigger = React.useRef<HTMLElement | null>(null);

  function openPopper(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const top = rect.top + rect.height;
    const left = rect.left;
    setPopperStyle({ top, left });

    setIsOpen((prevState) => !prevState);

    activeTrigger.current = event.currentTarget;
  }

  function closePopper() {
    setIsOpen(false);
    activeTrigger.current?.focus();
  }

  useRestrict({ condition: isOpen });

  return (
    <PopperContext.Provider
      value={{ isOpen, openPopper, closePopper, popperStyle }}
    >
      {children}
    </PopperContext.Provider>
  );
}
