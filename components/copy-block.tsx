'use client';

import { useCopy } from '@/hooks/useCopy';
import { cn } from '@/utils/lib';
import { ComponentProps, ReactNode } from 'react';
import { Button } from './ui/button';
import { FiCopy } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa6';

interface CopyBlockProps extends ComponentProps<'div'> {
  children: ReactNode;
  className?: string;
  text: string;
}

export default function CopyBlock({
  children,
  className,
  text,
}: CopyBlockProps) {
  const [copying, copy] = useCopy({ text });

  return (
    <div className={cn('relative w-full group', className)}>
      <Button
        size="sm"
        className="absolute top-4 right-4 group-hover:opacity-100 opacity-0"
        onClick={copy}
        prefix={
          <>
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
          </>
        }
      />
      {children}
    </div>
  );
}
