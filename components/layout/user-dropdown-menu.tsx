import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';
import { dashboardRoute } from '@/routes';
import { Layout, SettingsGear } from 'vercel-geist-icons';
import ThemeSwitch from '@/components/ui/theme';
import DropdownLogout from '@/app/(landing)/_layout/header/dropdown-logout';
import React from 'react';

export default function UserDropdownMenu({ user }: { user: User }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="rounded-full overflow-hidden size-8 hover:bg-gray-200 center transition"
        title={user.name}
      >
        <Image
          src={user.avatar}
          alt={user.name}
          width={24}
          height={24}
          className="rounded-full"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex-col items-start">
            <span>{user.name}</span>
            <span className="text-gray-800">{user.email}</span>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="justify-between">
            <Link href={dashboardRoute}>
              Dashboard <Layout />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="justify-between">
            <Link href="/account/settings">
              Account Settings <SettingsGear />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="h-10 items-center justify-between">
            <span className="text-gray-900">Theme:</span>
            <ThemeSwitch />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownLogout />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
