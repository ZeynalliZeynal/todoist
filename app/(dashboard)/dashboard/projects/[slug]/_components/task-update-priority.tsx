'use client';

import { TASK_PRIORITIES } from '@/lib/db-data';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import Badge from '@/components/ui/badge';
import { Flag } from 'vercel-geist-icons';
import { useState, useTransition } from 'react';
import { updateTask } from '@/actions/task.action';
import Spinner from '@/components/ui/spinner';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function TaskUpdatePriority({ task }: { task: Task }) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-1">
      <div className="text-xs text-gray-900">Priority:</div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger
              disabled={isPending}
              className={cn('transition rounded-md', {
                'focus:ring-1 focus:ring-offset-2 ring-offset-background-100 focus:ring-red-500':
                  task.priority === 'priority 1',
                'focus:ring-1 focus:ring-offset-2 ring-offset-background-100 focus:ring-amber-500':
                  task.priority === 'priority 2',
                'focus:ring-1 focus:ring-offset-2 ring-offset-background-100 focus:ring-blue-500':
                  task.priority === 'priority 3',
                'focus:ring-1 focus:ring-offset-2 ring-offset-background-100 focus:ring-gray-500':
                  task.priority === 'priority 4',
              })}
            >
              <Badge
                className="capitalize cursor-pointer"
                variant={
                  task.priority === 'priority 1'
                    ? 'red-subtle'
                    : task.priority === 'priority 2'
                    ? 'amber-subtle'
                    : task.priority === 'priority 3'
                    ? 'blue-subtle'
                    : 'gray-subtle'
                }
              >
                {isPending ? <Spinner size={12} /> : <Flag />}
                {task.priority}
              </Badge>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>Click to update</TooltipContent>
        </Tooltip>
        <DropdownMenuContent className="!p-1.5">
          <DropdownMenuLabel className="h-8">Priorities</DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1.5 -mx-1.5" />
          <DropdownMenuGroup className="">
            {TASK_PRIORITIES.map((priority) => (
              <DropdownMenuItem
                onClick={() => {
                  startTransition(async () => {
                    await updateTask({
                      ...task,
                      id: task.id,
                      priority,
                    });
                  });
                }}
                disabled={isPending}
                className={cn('capitalize h-8 rounded-md', {
                  '!text-red-900 focus:bg-red-200': priority === 'priority 1',
                  '!text-amber-900 focus:bg-amber-200':
                    priority === 'priority 2',
                  '!text-blue-900 focus:bg-blue-200': priority === 'priority 3',
                  '!text-gray-900 focus:bg-gray-200': priority === 'priority 4',
                })}
                key={priority}
              >
                <Flag />
                {priority}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
