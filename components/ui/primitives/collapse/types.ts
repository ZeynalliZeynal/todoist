import React, { ComponentProps } from 'react';

type CollapseState = 'open' | 'closed';

export interface CollapseContextProps {
  collapsed: boolean;
  collapseId: string;
  state: CollapseState;
  collapse(): void;
}

export interface CollapseProps extends ComponentProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

export interface CollapseTriggerProps
  extends Omit<ComponentProps<'button'>, 'children'> {
  children:
    | (({ state }: { state: CollapseState }) => React.ReactNode)
    | React.ReactNode;
  className?: string;
}

export interface CollapseContentProps extends ComponentProps<'div'> {
  children: React.ReactNode;
  className?: string;
}
