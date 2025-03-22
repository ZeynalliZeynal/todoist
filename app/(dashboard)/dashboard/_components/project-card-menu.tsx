'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Star, StarFill } from 'vercel-geist-icons';
import { useState } from 'react';
import {
  addFavoriteProject,
  removeFavoriteProject,
} from '@/actions/project.action';
import Spinner from '@/components/ui/spinner';

export default function ProjectCardMenu({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const isFavorite = project.favorite;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          iconOnly
          size="xs"
          variant="tertiary"
          className="relative z-[2]"
        >
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="capitalize">
        <DropdownMenuItem
          onClick={async (event) => {
            event.preventDefault();
            setIsPending(true);
            if (isFavorite) await removeFavoriteProject(project.id);
            else await addFavoriteProject(project.id);
            setIsPending(false);
            setOpen(false);
          }}
          disabled={isPending}
        >
          <span className="flex items-center gap-2">
            {isFavorite ? (
              <>
                {isPending ? (
                  <Spinner />
                ) : (
                  <StarFill className="text-amber-900 text-base" />
                )}
                Remove favorite
              </>
            ) : (
              <>
                {isPending ? (
                  <Spinner />
                ) : (
                  <Star className="text-amber-900 text-base" />
                )}
                Add favorite
              </>
            )}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
