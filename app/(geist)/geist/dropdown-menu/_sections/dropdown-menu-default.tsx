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
import { TbMailCog } from 'react-icons/tb';
import {
  IoGridOutline,
  IoPeopleOutline,
  IoStatsChartOutline,
} from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';

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
              className="justify-between"
            >
              <span className="flex items-center gap-2">
                <TbMailCog />
                Update Email
              </span>
              {isPending && <Spinner />}
            </PopperItem>
            <PopperItem disabled>
              <span className="flex items-center gap-2">
                <IoGridOutline />
                Grid View
              </span>
            </PopperItem>
            <PopperItem>
              <span className="flex items-center gap-2">
                <IoPeopleOutline />
                New Organization
              </span>
            </PopperItem>
            <PopperSub>
              <PopperSubTrigger>
                <span className="flex items-center gap-2">
                  <IoStatsChartOutline />
                  Stats
                </span>
              </PopperSubTrigger>
              <PopperSubContent>
                <PopperItem>test</PopperItem>
                <PopperItem>test</PopperItem>
                <PopperItem>test</PopperItem>
              </PopperSubContent>
            </PopperSub>
            <PopperSub>
              <PopperSubTrigger>
                <span className="flex items-center gap-2">
                  <IoStatsChartOutline />
                  Stats
                </span>
              </PopperSubTrigger>
              <PopperSubContent>
                <PopperItem>test</PopperItem>
                <PopperItem>test</PopperItem>
                <PopperItem>test</PopperItem>
              </PopperSubContent>
            </PopperSub>
            <PopperItem>
              <span className="flex items-center gap-2">
                <LuLayoutDashboard />
                Dashboard
              </span>
            </PopperItem>
            <PopperSeparator />
            <PopperGroup>
              <PopperItem className="focus:bg-amber-100/75 focus:ring-1 ring-amber-500">
                <span className="flex items-center gap-2">
                  <PiShootingStar className="text-amber-900" />
                  Upgrade
                </span>
              </PopperItem>
            </PopperGroup>
          </PopperContent>
        </Popper>
      </div>
    </section>
  );
}
