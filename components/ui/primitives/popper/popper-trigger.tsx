'use client';

import { PopperTriggerProps } from '@/components/ui/primitives/popper/popper.types';
import { usePopper } from '@/components/ui/primitives/popper/popper-context';
import { Button } from '@/components/ui/button';

export function PopperTrigger(props: PopperTriggerProps) {
  const { children } = props;
  const { openPopper } = usePopper();

  function handleMouseDown(event: React.MouseEvent<HTMLButtonElement>) {
    openPopper(event);
  }

  return (
    <Button size="sm" onMouseDown={handleMouseDown}>
      {children}
    </Button>
  );
}
