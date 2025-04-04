'use client';

import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useSocket } from '@/hooks/use-socket';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function MemberCard({ member }: { member: Member }) {
  const [isOnline, setIsOnline] = useState(false);
  const socket = useSocket({
    userId: member.user.online ? member.user._id : undefined,
  });

  useEffect(() => {
    if (socket) {
      socket.on('user:status:change', ({ userId, online }) => {
        if (userId === member.user._id) {
          setIsOnline(online);
        }
      });

      return () => {
        socket.off('user:status:change');
      };
    }
  }, [socket, member.user._id]);

  return (
    <TooltipProvider delayDuration={0}>
      <div className="p-4 flex gap-4 items-start rounded-lg border bg-background-100">
        <div className="relative size-fit">
          <Image
            src={member.user.avatar}
            alt={`${member.user.name} avatar`}
            width={64}
            height={64}
            className="rounded-full"
          />
          <Tooltip>
            <TooltipTrigger className="size-5 p-0.5 center absolute bottom-0 right-0 rounded-full bg-background-100">
              <span
                className={cn(
                  'rounded-full size-full',
                  isOnline ? 'bg-green-900' : 'bg-red-900',
                )}
              />
            </TooltipTrigger>
            <TooltipContent side="bottom">
              {isOnline ? 'Online' : 'Offline'}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
