import { cn } from '@/utils/lib';
import Image from 'next/image';

interface AvatarGroupProps {
  limit?: number;
  avatars: Record<string, string>[];
  size?: number;
  placeholder?: boolean;
  selectors: {
    name: string;
    url: string;
  };
}

export function AvatarGroup({
  limit,
  avatars,
  size,
  placeholder,
  selectors,
}: AvatarGroupProps) {
  if (limit === 0) return null;
  return (
    <div className="flex items-center">
      {avatars.map(
        (m, i) =>
          i < (limit || i + 1) && (
            <span
              key={i}
              className={cn(
                'inline-flex items-center justify-center rounded-full overflow-hidden border',
                {
                  '-ml-2.5': i !== 0,
                }
              )}
              style={{
                width: size,
                height: size,
              }}
            >
              {placeholder ? (
                <span className="size-full" />
              ) : (
                <Image src={m.avatar} alt={m.username} title={m.username} />
              )}
            </span>
          )
      )}
      {limit && limit < avatars.length && (
        <span
          className={cn(
            'rounded-full border bg-gray-100 -ml-2.5 inline-flex items-center justify-center text-xs select-none'
          )}
          style={{
            width: size,
            height: size,
          }}
        >
          +{avatars.length - limit}
        </span>
      )}
    </div>
  );
}
