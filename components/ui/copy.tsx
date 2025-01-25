'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/utils/lib';
import { Copy, CopyIndicator } from '@everest-ui/react-copy';
import { ComponentProps } from 'react';

interface CopyProps extends ComponentProps<typeof Button> {
  size?: 'sm' | 'md' | 'lg';
  text: string;
}

export default function CopyCustom(props: CopyProps) {
  const { text, size, className, ...etc } = props;

  return (
    <Copy text={text}>
      <Button
        size={size}
        className={cn('relative z-10', className)}
        iconOnly
        {...etc}
      >
        <CopyIndicator className="size-6" />
      </Button>
    </Copy>
  );
}
