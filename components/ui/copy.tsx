'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/utils/lib';
import { ComponentProps } from 'react';
import { FiCopy } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa6';
import { useCopy } from '@/hooks/useCopy';

interface CopyProps extends ComponentProps<typeof Button> {
  size?: 'sm' | 'md' | 'lg';
  text: string;
}

export default function CopyCustom(props: CopyProps) {
  const { text, size, className, ...etc } = props;
  const [copying, copy] = useCopy({ text });

  return (
    <Button
      size={size}
      className={cn('relative z-10', copying && 'cursor-default', className)}
      onClick={copy}
      iconOnly
      {...etc}
    >
      <span
        aria-hidden={true}
        className="absolute top-1/2 size-6 translate-y-[-50%] flex items-center justify-center"
      >
        <FiCopy
          className={cn('transition-all absolute', {
            'scale-100': !copying,
            'scale-0': copying,
          })}
        />
      </span>
      <span
        aria-hidden={true}
        className="absolute top-1/2 size-6 translate-y-[-50%] flex items-center justify-center"
      >
        <FaCheck
          className={cn('transition-all absolute', {
            'scale-100': copying,
            'scale-0': !copying,
          })}
        />
      </span>
    </Button>
  );
}
