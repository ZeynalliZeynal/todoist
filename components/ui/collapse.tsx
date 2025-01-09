import {
  PrimitiveCollapse,
  PrimitiveCollapseContent,
  PrimitiveCollapseTrigger,
} from '@/components/ui/primitives/collapse/collapse';
import {
  CollapseContentProps,
  CollapseProps,
  CollapseTriggerProps,
} from '@/components/ui/primitives/collapse/types';
import { cn } from '@/utils/lib';
import { FaChevronRight } from 'react-icons/fa6';

export function Collapse(props: CollapseProps) {
  return (
    <PrimitiveCollapse
      {...props}
      className={cn('border rounded-xl overflow-hidden', props.className)}
    />
  );
}

export function CollapseTrigger(props: CollapseTriggerProps) {
  return (
    <PrimitiveCollapseTrigger
      {...props}
      className={cn(
        'group h-12 px-4 gap-3 text-gray-900 border-t hover:bg-background-100 transition',
        props.className,
      )}
    >
      <FaChevronRight className="size-3 group-data-[state=open]:rotate-90 transition duration-300" />
      {props.children}
    </PrimitiveCollapseTrigger>
  );
}

export function CollapseContent(props: CollapseContentProps) {
  return (
    <PrimitiveCollapseContent
      {...props}
      className={cn('border-t', props.className)}
    />
  );
}
