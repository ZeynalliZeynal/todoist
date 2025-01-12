import { cn } from '@/utils/lib';
import { PrimitiveTab, TabProps } from './primitives/tabs/tabs';

export function Tab(props: TabProps) {
  return (
    <PrimitiveTab
      {...props}
      className={cn(
        'h-8 rounded-md px-3 text-gray-900 hover:text-foreground [&_[data-active-pill]]:bg-gray-200 [&_[data-active-pill]]:rounded-md',
        props.className
      )}
    />
  );
}
