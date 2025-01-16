'use client';

import React, { ComponentProps } from 'react';
import { cn } from '@/utils/lib';
import Image from 'next/image';
import { LuUser } from 'react-icons/lu';
import Skeleton from '@/components/ui/skeleton';

export interface AvatarProps extends ComponentProps<'span'> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  size?: number;
}

export function Avatar(props: AvatarProps) {
  const { src, alt, className, fallback, size = 32 } = props;
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  function handleImageLoad() {
    setIsLoading(false);
  }

  function handleImageError() {
    setIsLoading(false);
    setError(true);
  }

  return (
    <span
      className={cn('relative rounded-full inline-flex', className)}
      style={{
        width: size,
        height: size,
      }}
    >
      {src && alt && !error ? (
        <Image
          src={src}
          alt={alt}
          title={alt}
          width={size}
          height={size}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={cn(
            'transition-opacity duration-300 rounded-full',
            isLoading ? 'opacity-0' : 'opacity-100'
          )}
          quality={100}
        />
      ) : null}
      {src && isLoading ? (
        <Skeleton className="size-full" />
      ) : (
        (error || !src) && (
          <div
            data-image-fallback=""
            className="absolute inset-0 flex items-center justify-center"
          >
            {fallback || <LuUser size={size * 0.6} className="text-gray-400" />}
          </div>
        )
      )}
    </span>
  );
}
