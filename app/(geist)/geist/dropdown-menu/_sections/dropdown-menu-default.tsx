'use client';

import { Popper } from '@/components/ui/primitives/popper';
import { PopperTrigger } from '@/components/ui/primitives/popper/popper-trigger';
import { PopperContent } from '@/components/ui/primitives/popper/popper-content';
import { PopperItem } from '@/components/ui/primitives/popper/popper-item';

export default function DropdownMenuDefault() {
  return (
    <section className="p-12">
      <div className="flex items-center justify-between p-6 bg-background-100">
        <Popper>
          <PopperTrigger>Open</PopperTrigger>
          <PopperContent>
            <PopperItem>One</PopperItem>
            <PopperItem>Two</PopperItem>
            <PopperItem>One</PopperItem>
            <PopperItem>Two</PopperItem>
            <PopperItem>One</PopperItem>
            <PopperItem>Two</PopperItem>
          </PopperContent>
        </Popper>
      </div>
    </section>
  );
}
