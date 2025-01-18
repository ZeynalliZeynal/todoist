import { ComponentProps, CSSProperties } from 'react';

export interface PopperContextProps {
  isOpen: boolean;
  popperStyle: CSSProperties;
  id: string;
  highlightedItem: HTMLElement | null;
  highlight(element: HTMLElement | null): void;
  openPopper(event: React.MouseEvent<HTMLElement>): void;
  closePopper(): void;
}

export interface PopperProps {
  children: React.ReactNode;
}

export interface PopperTriggerProps {
  children: React.ReactNode;
}

export interface PopperContentProps extends ComponentProps<'div'> {
  children: React.ReactNode;
}

export interface PopperItemProps extends ComponentProps<'div'> {
  children: React.ReactNode;
}
