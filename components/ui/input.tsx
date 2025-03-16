'use client';

import {
  ComponentProps,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { cn } from '@/utils/lib';

type InputProps = {
  prefix?: ReactNode;
  suffix?: ReactNode;
  prefixStyling?: boolean;
  suffixStyling?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  variant?: 'primary' | 'secondary';
  error?: string;
} & Omit<ComponentProps<'input'>, 'size' | 'prefix' | 'suffix'>;

export function Input({
  children,
  prefix,
  suffix,
  prefixStyling = true,
  suffixStyling = true,
  size = 'small',
  label,
  className,
  error,
  ...etc
}: InputProps) {
  const id = useId();

  return (
    <div className={cn('text-gray-900 flex flex-col gap-2', className)}>
      {label && (
        <label
          htmlFor={`input${id}`}
          className="flex items-center gap-2 justify-between"
        >
          {label}
          {error && <span className="text-red-800">{error}</span>}
        </label>
      )}
      <div
        className={cn(
          'flex items-center w-full bg-background-100 rounded-md focus-within:shadow-input transition text-foreground duration-200 overflow-hidden shadow-border hover:shadow-gray-500 font-medium',
          {
            '[--size:2rem]': size === 'small',
            '[--size:2.5rem]': size === 'medium',
            '[--size:3rem] rounded-lg': size === 'large',
          },
        )}
      >
        {prefix && (
          <label
            htmlFor={`input${id}`}
            className={cn('shrink-0 center h-[var(--size)] text-gray-800', {
              'px-3': typeof prefix === 'string',
              'w-[var(--size)]': typeof prefix !== 'string',
              'bg-background-200 border-r mr-3': prefixStyling,
            })}
          >
            {prefix}
          </label>
        )}
        <input
          id={`input${id}`}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className={cn(
            'w-full placeholder-gray-800 outline-none h-[var(--size)]',
            !prefix && 'pl-3',
            !suffix && 'pr-3',
          )}
          {...etc}
        />
        {children}
        {suffix && (
          <label
            htmlFor={`input${id}`}
            className={cn('shrink-0 center h-[var(--size)] text-gray-800', {
              'px-3': typeof suffix === 'string',
              'w-[var(--size)]': typeof suffix !== 'string',
              'bg-background-200 border-l ml-3': suffixStyling,
            })}
          >
            {suffix}
          </label>
        )}
      </div>
      {!label && error && <span className="text-red-800">{error}</span>}
    </div>
  );
}

const MAX_LENGTH = 6;

export function OtpInput({
  disabled,
  value,
  onValueChange,
  onComplete,
  variant = 'bar',
}: {
  disabled?: boolean;
  value: string;
  onValueChange: Dispatch<SetStateAction<string>>;
  variant?: 'cubes' | 'bar';
  onComplete(): Promise<void> | void;
}) {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const valueArr = value.split('');
  useEffect(() => {
    if (!ref.current) return;
    setIsFocused(document.activeElement === ref.current);
  }, []);

  useEffect(() => {
    if (valueArr.length === MAX_LENGTH) onComplete();
  }, [value]);

  return (
    <div
      className={cn('relative w-fit mx-auto text-foreground grid grid-cols-6', {
        'border rounded-md': variant === 'bar',
        'gap-2': variant === 'cubes',
      })}
    >
      {Array.from({ length: MAX_LENGTH }, (_, index) => (
        <div
          key={index}
          className={cn(
            'relative flex items-center justify-center text-xl transition',
            isFocused && index === valueArr.length && 'ring-2',
            {
              'border-r size-12 md:size-16 first:rounded-l-md [&:nth-child(6)]:rounded-r-md [&:nth-child(6)]:border-r-0 ring-blue-700':
                variant === 'bar',
              'border rounded-md size-10 ring-foreground': variant === 'cubes',
            },
          )}
        >
          {isFocused && index === valueArr.length ? (
            <span className="absolute w-px h-1/3 bg-foreground rounded-md animate-caret" />
          ) : (
            valueArr.at(index)?.slice(-1)
          )}
        </div>
      ))}
      <div className="absolute inset-0">
        <input
          ref={ref}
          inputMode="numeric"
          name="digits"
          pattern="^\d+$"
          maxLength={MAX_LENGTH}
          required
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          className="size-full focus-visible:outline-0 -tracking-[0.5em] text-transparent bg-transparent caret-transparent selection:text-transparent selection:bg-transparent"
          value={value}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={({ target }) => {
            if (!isNaN(Number(target.value))) {
              onValueChange(target.value);
            }
          }}
        />
      </div>
    </div>
  );
}
