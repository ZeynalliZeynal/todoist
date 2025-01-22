'use client';

import { useState } from 'react';
import Spinner from '@/components/ui/spinner';
import { PiShootingStar } from 'react-icons/pi';
import {
  IoGridOutline,
  IoPeopleOutline,
  IoStatsChartOutline,
} from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';
import { TbMailCog } from 'react-icons/tb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/primitives/dropdown-menu';

export default function DropdownMenuDefault() {
  const [isPending, setIsPending] = useState(false);

  return (
    <section className="p-12">
      <div className="flex items-center justify-between p-6 bg-background-100">
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent className="mt-3" align="start">
            <DropdownMenuItem
              disabled={isPending}
              onClick={async () => {
                setIsPending(true);
                await new Promise((resolve) => setTimeout(resolve, 2000));
                setIsPending(false);
              }}
              prefix={<TbMailCog />}
              suffix={isPending && <Spinner />}
              className="justify-between"
            >
              Update Email
            </DropdownMenuItem>
            <DropdownMenuItem disabled prefix={<IoGridOutline />}>
              Grid View
            </DropdownMenuItem>
            <DropdownMenuItem prefix={<IoPeopleOutline />}>
              New Organization
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger prefix={<IoStatsChartOutline />}>
                Stats
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>test</DropdownMenuItem>
                <DropdownMenuItem>test</DropdownMenuItem>
                <DropdownMenuItem>test</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuItem prefix={<LuLayoutDashboard />}>
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="focus:bg-amber-100/75 focus:ring-1 ring-amber-500"
                prefix={<PiShootingStar className="text-amber-900" />}
              >
                Upgrade
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
}
