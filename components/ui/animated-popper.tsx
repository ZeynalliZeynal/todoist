'use client';

import React, { MutableRefObject, useState } from 'react';
import { createContext } from '@everest-ui/react-context';
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  MotionConfig,
  MotionConfigProps,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';
import { useOutsideClick, useRestrict } from '@/hooks/use-ui';
import { mergeRefs } from '@/utils/ui/merge-refs';
import ReactFocusLock from 'react-focus-lock';

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

const [AnimatedPopperProvider, useAnimatedPopper] =
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
    <div className="overflow-hidden">
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
        className={cn('*:size-full', className)}
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
    </div>
  );
});
AnimatedPopperTrigger.displayName = 'AnimatedPopperTrigger';

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

// content
export const AnimatedPopperContent = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'>
>(({ children, className, ...props }, ref) => {
  const {
    open,
    id,
    handleClose,
    setExiting,
    triggerPosition,
    exiting,
    activeTrigger,
  } = useAnimatedPopper();

  const [contentPosition, setContentPosition] = useState<DOMRect | undefined>(
    undefined,
  );

  const innerRef = useOutsideClick({
    action: handleClose,
  });

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!innerRef.current || !open) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        handleClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClose, innerRef, open]);

  React.useLayoutEffect(() => {
    if (!open) return;
    setContentPosition(innerRef.current?.getBoundingClientRect());
  }, [innerRef, open]);

  return createPortal(
    <AnimatePresence
      initial={false}
      onExitComplete={() => {
        setExiting(false);
        activeTrigger.current?.focus();
      }}
    >
      {open && triggerPosition && (
        <>
          <ReactFocusLock
            onDeactivation={() => {
              activeTrigger.current?.focus();
            }}
          >
            <motion.div
              ref={mergeRefs(innerRef, ref)}
              role="dialog"
              data-exiting={exiting ? '' : null}
              data-state={open ? 'open' : 'closed'}
              id={id}
              layoutId={id}
              className={cn('fixed z-50', className)}
              {...props}
              style={
                {
                  '--trigger-x': triggerPosition.x + 'px',
                  '--trigger-y': triggerPosition.y + 'px',
                  '--trigger-width': triggerPosition.width + 'px',
                  '--trigger-height': triggerPosition.height + 'px',
                  '--trigger-left': triggerPosition.left + 'px',
                  '--trigger-top': triggerPosition.top + 'px',
                  '--trigger-bottom': triggerPosition.bottom + 'px',

                  '--content-x': contentPosition?.x + 'px',
                  '--content-y': contentPosition?.y + 'px',
                  '--content-width': contentPosition?.width + 'px',
                  '--content-height': contentPosition?.height + 'px',
                  '--content-left': contentPosition?.left + 'px',
                  '--content-top': contentPosition?.top + 'px',
                  '--content-bottom': contentPosition?.bottom + 'px',
                  ...props.style,
                } as React.CSSProperties
              }
            >
              {children}
            </motion.div>
          </ReactFocusLock>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
});
AnimatedPopperContent.displayName = 'AnimatedPopperContent';
