import {
  AvatarProps,
  PrimitiveAvatar,
} from '@/components/ui/primitives/avatar/avatar';
import { cn } from '@/utils/lib';
import Image from 'next/image';

interface AvatarGroupProps {
  size?: number;
  avatars: {
    src: string;
    alt: string;
  }[];
  limit?: number;
}

export default function Avatar(props: AvatarProps) {
  return (
    <PrimitiveAvatar
      {...props}
      className={cn('bg-gray-100', props.className)}
    />
  );
}

export function AvatarGroup(props: AvatarGroupProps) {
  const { limit, size = 32, avatars } = props;
  return (
    <div className="flex items-center">
      {avatars.map(
        (avatar, index) =>
          index < (limit || index + 1) && (
            <span
              key={index}
              className="[&:nth-child(n+2)]:-ml-2.5 rounded-full overflow-hidden border"
            >
              <Image
                src={avatar.src}
                alt={avatar.alt}
                title={avatar.alt}
                width={size}
                height={size}
              />
            </span>
          ),
      )}
      {limit && limit < avatars.length && (
        <span
          className={cn(
            'rounded-full border bg-gray-100 -ml-2.5 inline-flex items-center justify-center text-xs',
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
