import React, { useState } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-ui';
import { createPortal } from 'react-dom';
import ReactFocusLock from 'react-focus-lock';
import { mergeRefs } from '@/utils/ui/merge-refs';
import { cn } from '@/lib/utils';
import { useAnimatedPopper } from '@/components/ui/animated-popper/animated-popper';

const AnimatedPopperContent = React.forwardRef<
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

export default AnimatedPopperContent;
