'use client';

import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useTransition } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { inviteMember } from '@/actions/member.action';
import Spinner from '@/components/ui/spinner';
import { toast } from 'sonner';
import { useUserStore } from '@/lib/stores/user-store';
import { useProjectStore } from '@/lib/stores/project-store';

export default function MemberCard({ member }: { member: Member }) {
  const [isPending, startTransition] = useTransition();

  const { isOnline } = useUserStore();

  const { project } = useProjectStore();
  if (!project) return null;

  return (
    <TooltipProvider delayDuration={0}>
      <div className="p-4 rounded-lg space-y-2 border bg-background-100">
        <div className="flex gap-4 items-start">
          <div className="relative size-fit shrink-0">
            <Image
              src={member.user.avatar}
              alt={`${member.user.name} avatar`}
              width={64}
              height={64}
              className="rounded-full size-16 object-cover object-center"
            />
            <Tooltip>
              <TooltipTrigger className="size-5 p-0.5 center absolute bottom-0 right-0 rounded-full bg-background-100">
                <span
                  className={cn(
                    'rounded-full size-full',
                    isOnline(member.user._id) ? 'bg-green-900' : 'bg-red-900',
                  )}
                />
              </TooltipTrigger>
              <TooltipContent side="bottom">
                {isOnline(member.user._id) ? 'Online' : 'Offline'}
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex flex-col gap-1 self-center">
            {member.user.name}
            <p className="text-gray-900">{member.user.email}</p>
          </div>
          <Button
            variant="secondary"
            className="ml-auto self-center"
            onClick={() =>
              startTransition(async () => {
                const res = await inviteMember({
                  id: member.id,
                  entity: project,
                  entityType: 'project',
                });
                if (res.status === 'fail') toast.error(res.message);
              })
            }
            disabled={isPending}
          >
            {isPending ? <Spinner /> : 'Invite'}
          </Button>
        </div>
        {member.description && (
          <p className="text-foreground">{member.description}</p>
        )}
      </div>
    </TooltipProvider>
  );
}
