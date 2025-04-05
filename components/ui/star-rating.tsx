'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Star, StarFill } from 'vercel-geist-icons';

interface StarRatingProps extends React.ComponentProps<'div'> {
  size?: number;
  length?: number;
  value: number | null;
  onValueChange: (value: number | null) => void;
  disabled?: boolean;
}

export default function StarRating({
  className,
  length = 5,
  value,
  onValueChange,
  disabled,
  ...props
}: StarRatingProps) {
  const [hovered, setHovered] = React.useState<number | null>(null);

  const ref = React.useRef<HTMLDivElement | null>(null);
  const starRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const handleClick = (index: number) => {
    if (disabled) return;

    if (value === index) {
      onValueChange(null);
    } else {
      onValueChange(index);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (disabled) return;

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const newIndex = Math.min(index + 1, length);
      onValueChange(newIndex);
      starRefs.current[newIndex - 1]?.focus();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const newIndex = Math.max(index - 1, 1);
      onValueChange(newIndex);
      starRefs.current[newIndex - 1]?.focus();
    }
  };

  return (
    <div
      ref={ref}
      className={cn('flex items-center gap-1', className)}
      {...props}
    >
      {Array.from({ length }, (_, i) => {
        const index = i + 1;
        const isFilled = hovered
          ? index <= hovered
          : value
          ? index <= value
          : false;

        const shouldBeFocusable = value === index || (!value && index === 1);
        return (
          <button
            type="button"
            ref={(el) => {
              starRefs.current[i] = el;
            }}
            key={i}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="active:scale-90"
            onKeyDown={(e) => handleKeyDown(e, index)}
            disabled={disabled}
            tabIndex={shouldBeFocusable ? 0 : -1}
          >
            {isFilled ? (
              <StarFill className="text-amber-900 animate-in zoom-in-90" />
            ) : (
              <Star className="text-amber-900 animate-in zoom-in-90" />
            )}
          </button>
        );
      })}
    </div>
  );
}
