'use client';

import {
  CollapseContentProps,
  CollapseProps,
  CollapseTriggerProps,
  Collapse as PrimitiveCollapse,
  CollapseContent as PrimitiveCollapseContent,
  CollapseTrigger as PrimitiveCollapseTrigger,
} from '@everest-ui/react-collapse';
import { cn } from '@/utils/lib';
import { FaChevronRight } from 'react-icons/fa6';

export function Collapse(props: CollapseProps) {
  return (
    <PrimitiveCollapse
      {...props}
      className={cn('border rounded-xl', props.className)}
    />
  );
}

export function CollapseTrigger(props: CollapseTriggerProps) {
  return (
    <PrimitiveCollapseTrigger
      {...props}
      className={cn(
        'group h-12 px-4 gap-3 text-gray-900 border-t rounded-b-xl hover:bg-background-100 transition',
        props.className
      )}
    >
      {({ state }) => (
        <>
          <FaChevronRight className="size-3 group-data-[state=open]:rotate-90 transition duration-300" />
          {state === 'open' ? 'Hide ' : 'Show '}
          {props.children}
        </>
      )}
    </PrimitiveCollapseTrigger>
  );
}

export function CollapseContent(props: CollapseContentProps) {
  return (
    <PrimitiveCollapseContent
      {...props}
      className={cn('border-t rounded-b-xl overflow-hidden', props.className)}
    />
  );
}
