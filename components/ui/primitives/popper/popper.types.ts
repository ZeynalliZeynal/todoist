import React, { ComponentProps } from 'react';

export interface PopperProviderProps {
  isOpen: boolean;
  triggerPosition: DOMRect | null;
  id: string;
  activeTrigger: HTMLElement | null;
  highlightedIndex?: number;

  setTriggerPosition(style: DOMRect | null): void;
  setHighlightedIndex(value?: number): void;
  openPopper(event: React.MouseEvent<HTMLElement>): void;
  closePopper(): void;
}

export interface PopperContextProps extends PopperProviderProps {
  highlightedItem: HTMLElement | null;
  highlight(element: HTMLElement | null): void;
}

export interface PopperProps {
  children: React.ReactNode;
}

export interface PopperTriggerProps extends ComponentProps<'button'> {
  asChild?: boolean;
}

export type PopperContentSideProps = 'top' | 'right' | 'bottom' | 'left';
export type PopperContentAlignProps = 'start' | 'center' | 'end';

export interface PopperContentProps extends ComponentProps<'div'> {
  align?: PopperContentAlignProps;
  side?: PopperContentSideProps;
  asChild?: boolean;
}

export interface PopperSubContentProps extends ComponentProps<'div'> {
  asChild?: boolean;
}

export interface PopperItemProps extends ComponentProps<'div'> {
  disabled?: boolean;
  asChild?: boolean;
}
