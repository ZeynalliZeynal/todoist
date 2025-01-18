'use client';

import { PopperItemProps } from '@/types/ui/popper';
import { usePopper } from '@/components/ui/primitives/popper/popper-context';
import { chain } from '@/utils/chain';

export function PopperItem(props: PopperItemProps) {
  const { children, onClick } = props;
  const { closePopper } = usePopper();

  return (
    <div
      data-popper-item=""
      className="flex items-center rounded-lg px-3 h-9 align-middle hover:bg-gray-100 transition cursor-default"
      onClick={chain(closePopper, onClick)}
    >
      {children}
    </div>
  );
}
