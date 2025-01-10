'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/lib';
import { FaCheck } from 'react-icons/fa6';

interface CheckboxProps extends React.ComponentProps<'input'> {
  children?: React.ReactNode;
  checked: boolean;
  onChange: React.ChangeEventHandler;
}

export function Checkbox(props: CheckboxProps) {
  const { children, checked, onChange, ...etc } = props;

  const id = React.useId();

  const checkboxId = `checkbox${id}`;

  return (
    <label
      htmlFor={checkboxId}
      className={cn(
        'inline-flex gap-2 items-center cursor-pointer',
        props.disabled && 'text-gray-500 cursor-not-allowed',
      )}
    >
      <span
        className={cn(
          'inline-flex items-center justify-center shrink-0 size-4 rounded border border-foreground transition focus-within:ring-2 focus-within:ring-offset-2 ring-blue-900 ring-offset-background-100',
          {
            'bg-foreground text-background-200': checked,
            'bg-background-100': !checked,
            'bg-gray-600': checked && props.disabled,
            'bg-gray-100': !checked && props.disabled,
            'border-gray-600': props.disabled,
          },
        )}
      >
        <input
          type="checkbox"
          id={checkboxId}
          className="sr-only"
          checked={checked}
          onChange={onChange}
          {...etc}
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
              className="inline-flex items-center justify-center text-xs rounded"
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
