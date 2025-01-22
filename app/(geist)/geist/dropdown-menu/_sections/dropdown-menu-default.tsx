'use client';

import {
  Popper,
  PopperContent,
  PopperGroup,
  PopperItem,
  PopperSeparator,
  PopperSub,
  PopperSubContent,
  PopperSubTrigger,
  PopperTrigger,
} from '@/components/ui/primitives/popper';
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

export default function DropdownMenuDefault() {
  const [isPending, setIsPending] = useState(false);

  return (
    <section className="p-12">
      <div className="flex items-center justify-between p-6 bg-background-100">
        <Popper>
          <PopperTrigger>Open</PopperTrigger>
          <PopperContent className="mt-3" align="start">
            <PopperItem
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
            </PopperItem>
            <PopperItem disabled prefix={<IoGridOutline />}>
              Grid View
            </PopperItem>
            <PopperItem prefix={<IoPeopleOutline />}>
              New Organization
            </PopperItem>
            <PopperSub>
              <PopperSubTrigger prefix={<IoStatsChartOutline />}>
                Stats
              </PopperSubTrigger>
              <PopperSubContent>
                <PopperItem>test</PopperItem>
                <PopperItem>test</PopperItem>
                <PopperItem>test</PopperItem>
              </PopperSubContent>
            </PopperSub>
            <PopperItem prefix={<LuLayoutDashboard />}>Dashboard</PopperItem>
            <PopperSeparator />
            <PopperGroup>
              <PopperItem
                className="focus:bg-amber-100/75 focus:ring-1 ring-amber-500"
                prefix={<PiShootingStar className="text-amber-900" />}
              >
                Upgrade
              </PopperItem>
            </PopperGroup>
          </PopperContent>
        </Popper>
      </div>
    </section>
  );
}
