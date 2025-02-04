import React, { useCallback } from 'react';
import { usePopper } from './popper-context';
import { PopperItem } from './popper-item';
import { usePopperSub } from './popper-sub-context';
import { PopperItemProps } from './popper.types';
import { useResize } from '@/hooks/useResize';

export function PopperSubTrigger(props: PopperItemProps) {
  const { children, ...etc } = props;
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
    event: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>,
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
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      {children}
    </PopperItem>
  );
}
