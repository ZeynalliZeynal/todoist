'use client';

import { cn } from '@/utils/lib';
import Link from 'next/link';
import {
  ComponentProps,
  forwardRef,
  MutableRefObject,
  ReactNode,
  useState,
} from 'react';

interface ButtonProps extends Omit<ComponentProps<'button'>, 'prefix'> {
  children?: ReactNode;
  href?: string;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  suffix?: ReactNode;
  prefix?: ReactNode;
  iconOnly?: boolean;
}

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, 'prefix'> {
  children?: ReactNode;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  className?: string;
  suffix?: ReactNode;
  prefix?: ReactNode;
  iconOnly?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = 'sm',
      variant = 'primary',
      disabled,
      type = 'button',
      className,
      suffix,
      prefix,
      iconOnly,
      ...etc
    },
    ref,
  ) => {
    const [hovering, setHovering] = useState(false);

    return (
      <button
        ref={ref as MutableRefObject<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        data-hover={hovering ? '' : null}
        // data-variant={variant}
        className={cn(
          `flex items-center justify-center transition duration-200 font-medium border select-none rounded-lg`,
          {
            'text-foreground border bg-background-200': variant === 'primary',
            'text-background-200 border-gray-200 bg-gray-1000':
              variant === 'secondary',
            'text-foreground border-transparent data-[hover]:bg-gray-alpha-200':
              variant === 'tertiary',
            'px-2.5 h-10 text-sm': size === 'md' && !iconOnly,
            'px-3.5 h-12 text-base': size === 'lg' && !iconOnly,
            'text-sm h-8 px-1.5': size === 'sm' && !iconOnly,
            'size-12 text-lg': size === 'lg' && iconOnly,
            'size-10 text-sm': size === 'md' && iconOnly,
            'size-8 text-sm': size === 'sm' && iconOnly,
            'size-6 text-xs': size === 'xs' && iconOnly,
            'data-[hover]:text-foreground data-[hover]:bg-gray-alpha-200 data-[hover]:border-gray-alpha-200':
              variant === 'primary' && hovering,
            'disabled:text-gray-700 disabled:bg-gray-100 disabled:border-gray-400':
              variant === 'primary' || (variant === 'secondary' && disabled),
            'data-[hover]:text-background-200 data-[hover]:bg-button-invert-hover':
              variant === 'secondary' && hovering,
            // disabled:bg-button-invert-disabled disabled:text-gray-700 disabled:border-gray-400
            'text-gray-900 data-[hover]:text-foreground border-none':
              variant === 'ghost',
          },
          className,
        )}
        {...etc}
        onMouseEnter={() => !disabled && setHovering(true)}
        onMouseLeave={() => !disabled && setHovering(false)}
      >
        {prefix}
        {children && (
          <span
            className={cn(
              iconOnly ? 'inline-flex items-center justify-center' : 'px-1.5',
            )}
          >
            {children}
          </span>
        )}
        {suffix}
      </button>
    );
  },
);

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      children,
      size = 'sm',
      variant = 'primary',
      className,
      suffix,
      prefix,
      iconOnly,
      ...etc
    },
    ref,
  ) => {
    const [hovering, setHovering] = useState(false);

    return (
      <Link
        ref={ref}
        data-hover={hovering ? '' : null}
        className={cn(
          `flex items-center justify-center transition duration-200 font-medium border select-none w-fit rounded-lg`,
          {
            'text-foreground border bg-background-200': variant === 'primary',
            'text-background-200 border-gray-200 bg-gray-1000':
              variant === 'secondary',
            'text-foreground border-transparent data-[hover]:bg-gray-alpha-200':
              variant === 'tertiary',
            'px-2.5 h-10 text-sm': size === 'md' && !iconOnly,
            'px-3.5 h-12 text-base': size === 'lg' && !iconOnly,
            'text-sm h-8 px-1.5': size === 'sm' && !iconOnly,
            'size-12 text-lg': size === 'lg' && iconOnly,
            'size-10 text-sm': size === 'md' && iconOnly,
            'size-8 text-sm': size === 'sm' && iconOnly,
            'size-6 text-xs': size === 'xs' && iconOnly,
            'data-[hover]:text-foreground data-[hover]:bg-gray-200 data-[hover]:border-gray-alpha-200':
              variant === 'primary' && hovering,
            'disabled:text-gray-700 disabled:bg-gray-100 disabled:border-gray-400':
              variant === 'primary',
            'data-[hover]:text-background-200 data-[hover]:bg-button-invert-hover':
              variant === 'secondary' && hovering,
            'text-gray-900 data-[hover]:text-foreground border-none':
              variant === 'ghost',
          },
          className,
        )}
        {...etc}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {prefix}
        {children && (
          <span
            className={cn(
              iconOnly ? 'inline-flex items-center justify-center' : 'px-1.5',
            )}
          >
            {children}
          </span>
        )}
        {suffix}
      </Link>
    );
  },
);

Button.displayName = 'Button';
ButtonLink.displayName = 'Link';
