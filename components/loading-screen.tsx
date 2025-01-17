'use client';

import { ReactNode, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Spinner } from '@everest-ui/react';

export default function LoadingScreen({
  children,
  isPending,
}: {
  children: ReactNode;
  isPending?: boolean;
}) {
  useEffect(() => {
    if (isPending) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isPending]);
  return (
    <AnimatePresence>
      {isPending && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed z-50 inset-0 w-screen overflow-hidden h-screen bg-background-100 text-foreground flex items-center justify-center"
        >
          <div className="flex flex-col justify-center items-center gap-3 text-2xl">
            {children}
            <Spinner size={32} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
