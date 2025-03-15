'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Trash } from 'vercel-geist-icons';
import { useState } from 'react';
import { deleteSession } from '@/actions/session.action';
import Spinner from '@/components/ui/spinner';

export default function SessionMenu({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button iconOnly variant="tertiary">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="justify-start gap-2 text-red-900 focus:bg-red-100"
            onClick={async (event) => {
              event.preventDefault();
              setIsPending(true);
              await deleteSession(id);
              setIsPending(true);
              setOpen(false);
            }}
            disabled={isPending}
          >
            {isPending ? <Spinner /> : <Trash />}
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
