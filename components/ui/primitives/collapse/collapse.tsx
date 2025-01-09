'use client';

import {
  CollapseContextProvider,
  useCollapseContext,
} from '@/components/ui/primitives/collapse/collapse-context';
import React, { ComponentProps } from 'react';
import { cn } from '@/utils/lib';

interface CollapseProps extends ComponentProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

interface CollapseTriggerProps extends ComponentProps<'button'> {
  children: React.ReactNode;
  className?: string;
}

interface CollapseContentProps extends ComponentProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

export function Collapse(props: CollapseProps) {
  const { children, className, ...etc } = props;
  return (
    <CollapseContextProvider>
      <div className={cn('flex flex-col', className)} {...etc}>
        {children}
      </div>
    </CollapseContextProvider>
  );
}

export function CollapseTrigger(props: CollapseTriggerProps) {
  const { children, className, onClick, ...etc } = props;
  const { collapse } = useCollapseContext();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    collapse();
    onClick?.(event);
  }

  return (
    <button
      onClick={handleClick}
      className={cn('w-full flex items-center justify-between', className)}
      {...etc}
    >
      {children}
    </button>
  );
}

export function CollapseContent(props: CollapseContentProps) {
  const { children, className, ...etc } = props;
  const { collapsed } = useCollapseContext();

  return (
    collapsed && (
      <div className={cn(className)} {...etc}>
        {children}
      </div>
    )
  );
}
