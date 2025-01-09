import React, { ComponentProps } from 'react';

export interface CollapseContextProps {
  collapsed: boolean;
  collapseId: string;
  state: 'open' | 'closed';
  collapse(): void;
}

export interface CollapseProps extends ComponentProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

export interface CollapseTriggerProps extends ComponentProps<'button'> {
  children: React.ReactNode;
  className?: string;
}

export interface CollapseContentProps extends ComponentProps<'div'> {
  children: React.ReactNode;
  className?: string;
}
