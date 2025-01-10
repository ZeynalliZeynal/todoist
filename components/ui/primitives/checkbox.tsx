'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/lib';
import { FaCheck } from 'react-icons/fa6';

interface CheckboxProps {
  children?: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Checkbox(props: CheckboxProps) {
  const { children, checked, onChange } = props;
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const id = React.useId();

  const checkboxId = `checkbox${id}`;

  return (
    <label
      htmlFor={checkboxId}
      className="inline-flex gap-2 items-center cursor-pointer"
    >
      <span
        className={cn(
          'inline-flex items-center justify-center shrink-0 size-4 rounded border border-foreground transition focus-within:ring-2 focus-within:ring-offset-2 ring-blue-900 ring-offset-background-100',
          checked ? 'bg-foreground' : 'bg-background-100',
        )}
      >
        <input
          ref={inputRef}
          type="checkbox"
          id={checkboxId}
          className="sr-only"
          checked={checked}
          onChange={() => {
            onChange(checked);
          }}
        />
        <AnimatePresence>
          {checked && (
            <motion.span
              aria-hidden={true}
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              className="inline-flex items-center justify-center size-3 rounded text-background-200"
            >
              <FaCheck />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      {children}
    </label>
  );
}
