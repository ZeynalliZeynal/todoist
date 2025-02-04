'use client';

import { useResize } from '@/hooks/useResize';
import { cn } from '@/utils/lib';
import React, { useCallback } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { usePopper } from './popper-context';
import { PopperItem } from './popper-item';
import { usePopperSub } from './popper-sub-context';
import { PopperItemProps } from '@/components/ui/primitives/popper/popper.types';

export function PopperSubTrigger(props: PopperItemProps) {
  const { children, className, ...etc } = props;
  const { highlight } = usePopper();
  const { openPopper, id, setTriggerPosition, isOpen, closePopper } =
    usePopperSub();

  const ref = React.useRef<HTMLDivElement | null>(null);

  function handleMouseEnter(event: React.MouseEvent<HTMLDivElement>) {
    openPopper(event);
    highlight(event.currentTarget);
  }

  function handleMouseLeave(event: React.MouseEvent<HTMLElement>) {
    // const relatedTarget = document.elementFromPoint(
    //   event.clientX,
    //   event.clientY
    // );
    const popperSubContent =
      event.relatedTarget &&
      (event.relatedTarget as HTMLElement).closest(`[aria-labelledby='${id}']`);
    if (!popperSubContent) {
      closePopper();
      highlight(null);
    }
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>
  ) {
    if ((event as React.KeyboardEvent).key === 'ArrowRight') {
      openPopper(event as React.MouseEvent<HTMLElement>);
    }
  }

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    return;
  }

  const handleResize = useCallback(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setTriggerPosition(rect);
  }, [setTriggerPosition]);

  useResize(isOpen, handleResize);

  return (
    <PopperItem
      {...etc}
      ref={ref}
      aria-controls={id}
      aria-expanded={isOpen}
      data-state={isOpen ? 'open' : 'closed'}
      className={cn(
        'justify-between data-[state=open]:bg-gray-alpha-100',
        className
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      suffix={<FaAngleRight />}
    >
      {children}
    </PopperItem>
  );
}
