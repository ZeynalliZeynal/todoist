'use client';

import React, {
  forwardRef,
  MutableRefObject,
  ReactNode,
  useState,
} from 'react';
import { cn } from '@/utils/lib';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  size?: 'lg' | 'md' | 'sm';
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void | Promise<void>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  suffix?: ReactNode;
  prefix?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      size = 'sm',
      href,
      variant = 'primary',
      onClick,
      disabled,
      type = 'button',
      className,
      suffix,
      prefix,
      ...etc
    },
    ref,
  ) => {
    const [hovering, setHovering] = useState(false);
    const cl = cn(
      `flex items-center justify-center transition duration-200 font-medium border select-none rounded-lg`,
      {
        'text-foreground border bg-background-100': variant === 'primary',
        'text-background-100 border-gray-200 bg-gray-1000':
          variant === 'secondary',
        'px-2.5 h-10 text-sm': size === 'md',
        'px-3.5 h-12 text-base': size === 'lg',
        'text-sm h-8 px-1.5': size === 'sm',
        'data-[hover]:text-foreground data-[hover]:bg-gray-200 data-[hover]:border-gray-alpha-200':
          variant === 'primary' && hovering,
        'disabled:text-gray-700 disabled:bg-gray-100 disabled:border-gray-400':
          variant === 'primary' || (variant === 'secondary' && disabled),
        'data-[hover]:text-background-100 data-[hover]:bg-button-invert-hover':
          variant === 'secondary' && hovering,
        // disabled:bg-button-invert-disabled disabled:text-gray-700 disabled:border-gray-400
        'text-gray-900 data-[hover]:text-foreground border-none':
          variant === 'outline',
        'border-none bg-background-100 shadow-border data-[hover]:bg-gray-200':
          variant === 'gradient',
      },
      className,
    );
    const commonAttributed = {
      'data-hover': !disabled && hovering ? true : null,
      className: cl,
      onMouseEnter: () => !disabled && setHovering(true),
      onMouseLeave: () => !disabled && setHovering(false),
    };

    if (href)
      return (
        <Link
          ref={ref as MutableRefObject<HTMLAnchorElement>}
          href={href}
          {...commonAttributed}
          {...etc}
        >
          {prefix}
          <span className="px-1.5">{children}</span>
          {suffix}
        </Link>
      );
    else
      return (
        <button
          ref={ref as MutableRefObject<HTMLButtonElement>}
          type={type}
          onClick={onClick}
          disabled={disabled}
          {...commonAttributed}
          {...etc}
        >
          {prefix}
          <span className="px-1.5">{children}</span>
          {suffix}
        </button>
      );
  },
);

Button.displayName = 'Button';
export default Button;
