'use client';

import {
  Popper,
  PopperContent,
  PopperItem,
  PopperTrigger,
} from '@/components/ui/primitives/popper';
import { PopperSeparator } from '@/components/ui/primitives/popper/popper-separator';
import { PopperGroup } from '@/components/ui/primitives/popper/popper-group';

export default function DropdownMenuDefault() {
  return (
    <section className="p-12">
      <div className="flex items-center justify-between p-6 bg-background-100">
        <Popper>
          <PopperTrigger>Open</PopperTrigger>
          <PopperContent className="mt-3">
            <PopperItem
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                console.log(true);
              }}
            >
              One
            </PopperItem>
            <PopperItem disabled>Two</PopperItem>
            <PopperItem>One</PopperItem>
            <PopperItem>Two</PopperItem>
            <PopperItem>One</PopperItem>
            <PopperSeparator />
            <PopperGroup>
              <PopperItem>Two</PopperItem>
            </PopperGroup>
          </PopperContent>
        </Popper>
      </div>
    </section>
  );
}
