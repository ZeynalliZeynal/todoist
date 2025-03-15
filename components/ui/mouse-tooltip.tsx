'use client';

import React from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { cn } from '@/lib/utils';

const tooltipVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: -8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 25,
      mass: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: -8,
    transition: {
      duration: 0.15,
    },
  },
};

export default function MouseTooltip({
  children,
  condition = true,
  tooltipContent,
  tooltipClassName,
  ...props
}: {
  condition?: boolean;
  tooltipContent: React.ReactNode;
  tooltipClassName?: string;
} & React.ComponentProps<'div'>) {
  const [hovering, setHovering] = React.useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 1000, damping: 80 });
  const springY = useSpring(mouseY, { stiffness: 800, damping: 60 });

  const tooltipY = useTransform(springY, (y) => y + 24);

  // function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
  //   mouseX.set(event.clientX);
  //   mouseY.set(event.clientY);
  // }

  React.useLayoutEffect(() => {
    // if (mouseX.get() > 0 || mouseY.get() > 0) return;

    function handleInitialMouseMove(event: MouseEvent) {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    }

    document.addEventListener('mousemove', handleInitialMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleInitialMouseMove);
    };
  });
  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      // onMouseMove={handleMouseMove}
      {...props}
    >
      <AnimatePresence>
        {condition && hovering && (
          <motion.div
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              left: springX,
              top: tooltipY,
              x: '-50%',
            }}
            className={cn(
              'fixed z-50 px-3 py-1 rounded-md bg-background-100 pointer-events-none',
              tooltipClassName,
            )}
          >
            {tooltipContent}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}
