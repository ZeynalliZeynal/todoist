import React, { ComponentProps } from 'react';

export interface PopperContextProps {
  isOpen: boolean;
  triggerPosition: DOMRect | null;
  id: string;
  highlightedItem: HTMLElement | null;
  activeTrigger: HTMLElement | null;
  highlightedIndex?: number;

  setTriggerPosition(style: DOMRect | null): void;
  setHighlightedIndex(value?: number): void;
  highlight(element: HTMLElement | null): void;
  openPopper(event: React.MouseEvent<HTMLElement>): void;
  closePopper(): void;
}

export interface PopperProps {
  children: React.ReactNode;
}

export interface PopperTriggerProps extends ComponentProps<'button'> {
  children: React.ReactNode;
}

export interface PopperContentProps extends ComponentProps<'div'> {
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export interface PopperItemProps extends ComponentProps<'div'> {
  disabled?: boolean;
}
