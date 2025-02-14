import { cn } from '@/utils/lib';
import {
  Tab as PrimitiveTab,
  TabPropsWithAs,
  Tabs as PrimitiveTabs,
} from './primitives/tabs';
import React from 'react';

export function Tab<T extends React.ElementType = 'div'>(
  props: TabPropsWithAs<T>,
) {
  return (
    <PrimitiveTab
      {...props}
      className={cn(
        'rounded-md center px-3 text-gray-900 hover:text-foreground [&_[data-active-pill]]:bg-gray-200 [&_[data-active-pill]]:rounded',
        '[&_[data-active-indicator]]:bg-foreground [&_[data-active-indicator]]:inset-x-0 [&_[data-active-indicator]]:-bottom-1.5 [&_[data-active-indicator]]:rounded-md [&_[data-active-indicator]]:h-0.5',
        props.className,
      )}
    />
  );
}

export const Tabs = PrimitiveTabs;
