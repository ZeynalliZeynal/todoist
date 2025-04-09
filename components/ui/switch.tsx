'use client';

import { cn } from '@/utils/lib';
import { motion } from 'framer-motion';
import React, { CSSProperties } from 'react';

interface SwitchProps extends React.ComponentProps<'input'> {
  children?: React.ReactNode;
  checked: boolean;
  size?: number;
  checkedColor?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export function Switch(props: SwitchProps) {
  const {
    children,
    checked,
    size = 24,
    checkedColor = 'var(--ds-blue-600)',
    onChange,
    ...etc
  } = props;

  const id = React.useId();

  const switchId = `switch${id}`;

  return (
    <label
      htmlFor={switchId}
      className={cn(
        'inline-flex gap-2 items-center',
        props.disabled && 'text-gray-500 cursor-not-allowed'
      )}
    >
      <span
        className={cn(
          'inline-flex items-center cursor-pointer rounded-full justify-start p-px shrink-0 border transition focus-within:ring-1 ring-blue-900 w-[var(--size)] h-[calc(var(--size)/2)]',
          props.disabled && 'cursor-not-allowed',
          {
            'border-gray-600 !bg-gray-100 opacity-50': props.disabled,
          }
        )}
        style={
          {
            '--size': size + 'px',
            background: checked ? checkedColor : 'transparent',
          } as CSSProperties
        }
      >
        <input
          type="checkbox"
          id={switchId}
          className="sr-only"
          checked={checked}
          onChange={onChange}
          {...etc}
        />
        <motion.span
          aria-hidden={true}
          animate={checked ? { x: size / 2 } : { x: 0 }}
          className="aspect-square rounded-full h-full bg-foreground"
          transition={{
            duration: 0.2,
          }}
        />
      </span>
      {children}
    </label>
  );
}
