import React from 'react';
import { usePopper } from './popper-context';
import { PopperTriggerProps } from './popper.types';
import { chain } from '@/utils/chain';
import { useResize } from '@/hooks/useResize';
import { cn } from '@/lib/utils';

export function PopperTrigger(props: PopperTriggerProps) {
  const {
    children,
    asChild,
    disabled,
    onMouseDown,
    className,
    onClick,
    ...etc
  } = props;
  const { openPopper, id, setTriggerPosition, isOpen } = usePopper();

  const ref = React.useRef<HTMLButtonElement | null>(null);

  function handleMouseDown(event: React.MouseEvent<HTMLButtonElement>) {
    openPopper(event);
  }

  const handleResize = React.useCallback(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setTriggerPosition(rect);
  }, [setTriggerPosition]);

  useResize(isOpen, handleResize);

  const attrs = {
    ref,
    role: 'button',
    'aria-controls': id,
    'aria-expanded': isOpen,
    'data-disabled': disabled,
    'data-state': isOpen ? 'open' : 'closed',
    onMouseDown: chain(handleMouseDown, onMouseDown),
    onClick: chain(handleMouseDown, onClick),
    className,
    ...etc,
  } as React.HTMLAttributes<HTMLButtonElement>;

  return asChild && React.isValidElement(children) ? (
    React.cloneElement(children, {
      ...attrs,
      className: cn(
        className,
        (children.props as React.ComponentProps<'button'>).className,
      ),
    } as React.HTMLAttributes<HTMLElement>)
  ) : (
    <button {...attrs}>{children}</button>
  );
}
