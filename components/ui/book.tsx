import { Stack } from '@/components/ui/stack';
import { cn } from '@/utils/lib';
import React from 'react';

interface BookProps {
  children: React.ReactNode;
  backgroundColor?: string;
  stripe?: string;
  texture?: boolean;
  depth?: number;
}

export default function Book(props: BookProps) {
  const { children, backgroundColor, depth, texture, stripe } = props;
  return (
    <div
      className={cn(
        'w-fit [perspective:900px] inline-block group',
        '[--book-width:196px]',
      )}
      style={
        {
          '--background-color': backgroundColor,
          '--book-depth': depth ? depth + 'cqw' : '5cqw',
        } as React.CSSProperties
      }
    >
      <div className="contain-inline-size aspect-[49/60] w-fit rotate-0 relative [transform-style:preserve-3d] min-w-[calc(var(--book-width))] transition-transform duration-500 ease-out group-hover:[transform:rotateY(-20deg)_scale(1.066)translateX(-8px)]">
        <Stack
          align="stretch"
          className="rounded-l-md rounded-r shadow-book bg-[var(--background-color)] book-bg size-full absolute overflow-hidden"
        >
          {stripe && (
            <Stack className={cn('min-w-[calc(var(--book-width))]', stripe)}>
              <div className="mix-blend-overlay opacity-100 min-w-[8.2%] bg-book-bind-bg h-full" />
            </Stack>
          )}
          <Stack grow direction="row" align="stretch" className="w-full">
            <div className="mix-blend-overlay opacity-100 min-w-[8.2%] bg-book-bind-bg h-full" />
            <div className="contain-inline-size w-full">{children}</div>
          </Stack>
          {texture && (
            <div
              aria-hidden={true}
              className="absolute bg-[url(https://assets.vercel.com/image/upload/v1720554484/front/design/book-texture.avif)] bg-no-repeat bg-cover inset-0 mix-blend-hard-light opacity-60"
            />
          )}
        </Stack>
        <div
          aria-hidden={true}
          className="absolute bg-book-pages w-[calc(var(--book-depth)-2px)] h-[calc(100%-2*6px)] top-[3px]"
          style={{
            transform:
              'translateX(calc(var(--book-width) - var(--book-depth) / 2 - 3px)) rotateY(90deg) translateX(calc(var(--book-depth) / 2))',
          }}
        />
        <div
          aria-hidden={true}
          className="rounded-l-md rounded-r bg-[var(--background-color)] book-bg absolute left-0 w-full h-full"
          style={{
            transform: 'translateZ(calc(-1 * var(--book-depth)))',
          }}
        />
      </div>
    </div>
  );
}
