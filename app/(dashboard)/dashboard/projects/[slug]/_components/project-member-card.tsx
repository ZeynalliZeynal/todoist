'use client';

import React from 'react';
import Image from 'next/image';
import { useUserStore } from '@/lib/stores/user-store';
import Badge from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  ArrowUpRight,
  CheckCircle,
  MenuAlt,
  Message,
  Shield,
  Trash,
} from 'vercel-geist-icons';

export default function ProjectMemberCard({ member }: { member: Member }) {
  const { isOnline } = useUserStore();

  const online = isOnline(member.user._id);

  return (
    <li className="border rounded-lg p-1 flex flex-col bg-background-100">
      <div className="flex items-center gap-3 pb-1">
        <Image
          src={member.user.avatar}
          alt={`${member.user.name}'s avatar`}
          width={64}
          height={64}
          className="rounded"
        />
        <div className="flex flex-col gap-2">
          <p className="text-foreground font-medium">{member.user.name}</p>
          <p className="text-gray-900 text-sm">{member.user.email}</p>
        </div>
        <div className="flex flex-col gap-1 ml-auto self-start">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-label="Options" variant="ghost" iconOnly>
                <MenuAlt />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="!p-1 !rounded-lg bg-background-200"
              side="right"
              align="start"
            >
              <DropdownMenuGroup>
                <DropdownMenuItem className="h-8 rounded justify-between">
                  Profile
                  <ArrowUpRight className="!size-3" />
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator className="-mx-1 my-1" />
              <DropdownMenuGroup>
                <DropdownMenuItem className="h-8 rounded justify-between">
                  Permissions <Shield className="!size-3" />
                </DropdownMenuItem>
                <DropdownMenuItem className="h-8 rounded justify-between">
                  Assigned Tasks <CheckCircle className="!size-3" />
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator className="-mx-1 my-1" />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  variant="destructive"
                  className="h-8 rounded justify-between"
                >
                  Remove <Trash className="!size-3" />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            aria-label={`Chat with ${member.user.name}`}
            variant="ghost"
            iconOnly
          >
            <Message />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-1 pt-1 border-t">
        <Badge variant={online ? 'green' : 'red'} className="rounded">
          {online
            ? 'Online'
            : member.user.lastOnline
              ? 'Last seen: ' +
                formatDistanceToNow(member.user.lastOnline, { addSuffix: true })
              : 'Offline'}
        </Badge>
        <Badge variant="teal-subtle" className="rounded capitalize">
          {member.memberships.at(0)?.role}
        </Badge>
      </div>
    </li>
  );
}
