import Link, { LinkProps } from 'next/link';
import { ComponentProps } from 'react';
import { cn } from '@/utils/lib';
import { PiLinkSimple } from 'react-icons/pi';

export default function ScrollToLink(props: LinkProps & ComponentProps<'a'>) {
  return (
    <Link
      {...props}
      className={cn('relative group', props.className)}
      style={{
        scrollMarginTop: '112px',
        ...props.style,
      }}
    >
      <PiLinkSimple className="absolute group-hover:opacity-100 opacity-0 top-1/2 -translate-y-1/2 right-full size-5 mr-1" />
      {props.children}
    </Link>
  );
}
