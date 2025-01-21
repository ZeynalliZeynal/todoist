'use client';

import { PopperTriggerProps } from '@/components/ui/primitives/popper/popper.types';
import { usePopper } from '@/components/ui/primitives/popper/popper-context';
import { Button } from '@/components/ui/button';
import { chain } from '@/utils/chain';
import React, { useCallback } from 'react';
import { useResize } from '@/hooks/useResize';

export function PopperTrigger(props: PopperTriggerProps) {
  const { children, onMouseDown, onClick, ...etc } = props;
  const { openPopper, id, setTriggerPosition, isOpen } = usePopper();

  const ref = React.useRef<HTMLButtonElement | null>(null);

  function handleMouseDown(event: React.MouseEvent<HTMLButtonElement>) {
    openPopper(event);
  }

  const handleResize = useCallback(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setTriggerPosition(rect);
  }, [setTriggerPosition]);

  useResize(isOpen, handleResize);

  return (
    <Button
      ref={ref}
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
