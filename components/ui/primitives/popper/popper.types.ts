import { CSSProperties } from 'react';

export interface PopperContextProps {
  isOpen: boolean;
  popperStyle: CSSProperties;
  openPopper(event: React.MouseEvent<HTMLElement>): void;
  closePopper(): void;
}

export interface PopperProps {
  children: React.ReactNode;
}

export interface PopperTriggerProps {
  children: React.ReactNode;
}

export interface PopperContentProps {
  children: React.ReactNode;
}
