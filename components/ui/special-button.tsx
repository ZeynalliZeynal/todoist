import { ComponentProps, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/lib';
import Link from 'next/link';

export default function SpecialButton({
  children,
  href,
  className,
  ...etc
}: { children: ReactNode; href?: string } & ComponentProps<'button' | 'a'>) {
  return href ? (
    <Link
      data-button=""
      href={href}
      className={cn(
        'relative flex items-center shadow-border group',
        className,
      )}
      {...(etc as HTMLAttributes<HTMLAnchorElement>)}
    >
      <span
        data-gradient=""
        className="absolute inset-0 [background-size:400%_100%] bg-gradient-button after:absolute after:[animation:inherit] after:[background-size:inherit] after:[background-image:inherit] after:inset-0 after:filter after:blur-sm animate-special-button group-hover:after:blur-md after:transition-all after:duration-300"
      />
      <span className="absolute flex inset-0 items-center justify-center z-[1] bg-background-100 group-hover:bg-gray-100 transition">
        {children}
      </span>
    </Link>
  ) : (
    <button
      data-button=""
      className={cn(
        'relative flex items-center shadow-border group',
        className,
      )}
      {...(etc as HTMLAttributes<HTMLButtonElement>)}
    >
      <span
        data-gradient=""
        className="absolute inset-0 [background-size:400%_100%] bg-gradient-button after:absolute after:[animation:inherit] after:[background-size:inherit] after:[background-image:inherit] after:inset-0 after:filter after:blur-sm animate-special-button group-hover:after:blur-md after:transition-all after:duration-300"
      />
      <span className="absolute flex inset-0 items-center justify-center z-[1] bg-background-100 group-hover:bg-gray-100 transition">
        {children}
      </span>
    </button>
  );
}
