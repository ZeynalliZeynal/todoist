'use client';

import { PopperTriggerProps } from '@/components/ui/primitives/popper/popper.types';
import { usePopper } from '@/components/ui/primitives/popper/popper-context';
import { Button } from '@/components/ui/button';
import { chain } from '@/utils/chain';

export function PopperTrigger(props: PopperTriggerProps) {
  const { children, onMouseDown, onClick, ...etc } = props;
  const { openPopper, id } = usePopper();

  function handleMouseDown(event: React.MouseEvent<HTMLButtonElement>) {
    openPopper(event);
  }

  return (
    <Button
      aria-controls={id}
      size="sm"
      onMouseDown={chain(handleMouseDown, onMouseDown)}
      onClick={chain(handleMouseDown, onClick)}
      {...etc}
    >
      {children}
    </Button>
  );
}
