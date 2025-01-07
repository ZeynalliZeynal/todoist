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
  size?: 'lg' | 'md' | 'sm';
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  suffix?: ReactNode;
  prefix?: ReactNode;
}

interface DefaultLinkProps extends Omit<ComponentProps<typeof Link>, 'prefix'> {
  children?: ReactNode;
  size?: 'lg' | 'md' | 'sm';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  suffix?: ReactNode;
  prefix?: ReactNode;
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
      ...etc
    },
    ref
  ) => {
    const [hovering, setHovering] = useState(false);

    return (
      <button
        ref={ref as MutableRefObject<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        data-hover={hovering ? '' : null}
        className={cn(
          `flex items-center justify-center transition duration-200 font-medium border select-none rounded-lg`,
          {
            'text-foreground border bg-background-200': variant === 'primary',
            'text-background-200 border-gray-200 bg-gray-1000':
              variant === 'secondary',
            'px-2.5 h-10 text-sm': size === 'md',
            'px-3.5 h-12 text-base': size === 'lg',
            'text-sm h-8 px-1.5': size === 'sm',
            'size-10 text-sm': size === 'md' && !children,
            'size-12 text-base': size === 'lg' && !children,
            'text-sm size-8': size === 'sm' && !children,
            'data-[hover]:text-foreground data-[hover]:bg-gray-200 data-[hover]:border-gray-alpha-200':
              variant === 'primary' && hovering,
            'disabled:text-gray-700 disabled:bg-gray-100 disabled:border-gray-400':
              variant === 'primary' || (variant === 'secondary' && disabled),
            'data-[hover]:text-background-200 data-[hover]:bg-button-invert-hover':
              variant === 'secondary' && hovering,
            // disabled:bg-button-invert-disabled disabled:text-gray-700 disabled:border-gray-400
            'text-gray-900 data-[hover]:text-foreground border-none':
              variant === 'outline',
          },
          className
        )}
        {...etc}
        onMouseEnter={() => !disabled && setHovering(true)}
        onMouseLeave={() => !disabled && setHovering(false)}
      >
        {prefix}
        {children && <span className="px-1.5">{children}</span>}
        {suffix}
      </button>
    );
  }
);

export const DefaultLink = forwardRef<HTMLAnchorElement, DefaultLinkProps>(
  (
    {
      children,
      size = 'sm',
      variant = 'primary',
      className,
      suffix,
      prefix,
      ...etc
    },
    ref
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
            'px-2.5 h-10 text-sm': size === 'md',
            'px-3.5 h-12 text-base': size === 'lg',
            'text-sm h-8 px-1.5': size === 'sm',
            'size-10 text-sm': size === 'md' && !children,
            'size-12 text-base': size === 'lg' && !children,
            'text-sm size-8': size === 'sm' && !children,
            'data-[hover]:text-foreground data-[hover]:bg-gray-200 data-[hover]:border-gray-alpha-200':
              variant === 'primary' && hovering,
            'disabled:text-gray-700 disabled:bg-gray-100 disabled:border-gray-400':
              variant === 'primary',
            'data-[hover]:text-background-200 data-[hover]:bg-button-invert-hover':
              variant === 'secondary' && hovering,
            'text-gray-900 data-[hover]:text-foreground border-none':
              variant === 'outline',
          },
          className
        )}
        {...etc}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {prefix}
        {children && <span className="px-1.5">{children}</span>}
        {suffix}
      </Link>
    );
  }
);

Button.displayName = 'Button';
DefaultLink.displayName = 'Link';
