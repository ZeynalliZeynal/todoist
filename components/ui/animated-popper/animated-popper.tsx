'use client';

import React, { HTMLAttributes, MutableRefObject } from 'react';
import { createContext } from '@everest-ui/react-context';
import {
  HTMLMotionProps,
  motion,
  MotionConfig,
  MotionConfigProps,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';
import { useRestrict } from '@/hooks/use-ui';

const ANIMATED_POPPER_NAME = 'AnimatedPopper';

interface AnimatedPopperContextProps {
  id: string;
  open: boolean;
  exiting: boolean;
  triggerPosition: DOMRect | null;
  setExiting: (prevState: boolean) => void;
  handleOpen: (element: HTMLDivElement) => void;
  handleClose: () => void;
  activeTrigger: MutableRefObject<HTMLDivElement | null>;
}

export const [AnimatedPopperProvider, useAnimatedPopper] =
  createContext<AnimatedPopperContextProps>(ANIMATED_POPPER_NAME);

export function AnimatedPopper({
  children,
  open: controlledOpen,
  onOpenChange: controlledSetOpen,
  ...props
}: {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
} & MotionConfigProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = controlledSetOpen ?? setInternalOpen;

  const [exiting, setExiting] = React.useState(false);
  const [triggerPosition, setTriggerPosition] = React.useState<DOMRect | null>(
    null,
  );
  const activeTrigger = React.useRef<HTMLDivElement | null>(null);
  const id = React.useId();

  const handleClose = React.useCallback(() => {
    setExiting(true);
    setOpen(false);
    activeTrigger.current?.focus();
  }, [setOpen]);

  const handleOpen = React.useCallback(
    (element: HTMLDivElement) => {
      if (open) {
        handleClose();
      } else {
        setTriggerPosition(element.getBoundingClientRect());
        setOpen(true);
        setExiting(false);
        activeTrigger.current = element;
      }
    },
    [handleClose, open, setOpen],
  );

  useRestrict({ condition: open });

  return (
    <AnimatedPopperProvider
      exiting={exiting}
      triggerPosition={triggerPosition}
      setExiting={setExiting}
      id={`Popper-${id}`}
      handleOpen={handleOpen}
      open={open}
      handleClose={handleClose}
      activeTrigger={activeTrigger}
    >
      <MotionConfig {...props}>{children}</MotionConfig>
    </AnimatedPopperProvider>
  );
}

// trigger
export const AnimatedPopperTrigger = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'>
>(({ children, className, onClick, ...props }, ref) => {
  const { open, exiting, id, handleOpen } = useAnimatedPopper();

  return (
    <motion.div
      layoutId={id}
      ref={ref}
      tabIndex={0}
      onClick={(event) => {
        handleOpen(event.currentTarget);
        onClick?.(event);
      }}
      role="button"
      data-exiting={exiting ? '' : null}
      aria-expanded={open}
      aria-haspopup={true}
      data-state={open ? 'open' : 'closed'}
      className={cn(
        '*:size-full focus-within:ring-2 focus-within:ring-offset-2 ring-offset-background-200 ring-blue-900 outline-none',
        className,
      )}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleOpen(event.currentTarget);
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
});
AnimatedPopperTrigger.displayName = 'AnimatedPopperTrigger';

// close
export const AnimatedPopperClose = React.forwardRef<
  HTMLButtonElement,
  { asChild?: boolean } & HTMLAttributes<HTMLElement>
>(({ children, asChild, onClick, ...props }, ref) => {
  const { handleClose } = useAnimatedPopper();

  const attributes = {
    role: 'button',
    ref: ref,
    onClick: (event) => {
      handleClose();
      onClick?.(event);
    },
    ...props,
  } satisfies React.ComponentProps<'button'>;

  return asChild && React.isValidElement(children) ? (
    React.cloneElement(children, { ...attributes })
  ) : (
    <button type="button" {...attributes}>
      {children}
    </button>
  );
});
AnimatedPopperClose.displayName = 'AnimatedPopperClose';

// overlay
export const AnimatedPopperOverlay = React.forwardRef<
  HTMLDivElement,
  Omit<HTMLMotionProps<'div'>, 'children'>
>(({ className, ...props }, ref) => {
  const { open, exiting } = useAnimatedPopper();

  return createPortal(
    <motion.div
      ref={ref}
      data-exiting={exiting ? '' : null}
      data-state={open ? 'open' : 'closed'}
      className={cn('fixed inset-0 z-50 bg-black/50', className)}
      initial={{
        opacity: 0,
      }}
      exit={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      {...props}
    />,
    document.body,
  );
});
AnimatedPopperOverlay.displayName = 'AnimatedPopperOverlay';
