"use client";

import { ReactNode } from "react";
import Spinner from "@/components/ui/spinner";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence>
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
        className="fixed z-50 inset-0 w-screen overflow-hidden h-screen bg-background-200 text-foreground flex items-center justify-center"
      >
        <div className="flex flex-col justify-center items-center gap-3 text-2xl">
          {children}
          <Spinner size={32} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
