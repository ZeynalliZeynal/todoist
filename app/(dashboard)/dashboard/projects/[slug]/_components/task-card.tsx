import { addTaskToCompleted, deleteTask } from '@/actions/task.action';
import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { usePlayAudio } from '@/hooks/usePlayAudio';
import { cn } from '@/lib/utils';
import { format, formatDistance } from 'date-fns';
import { useTransition } from 'react';
import { Check, Clock, MoreHorizontal, Trash } from 'vercel-geist-icons';
import TaskUpdatePriority from './task-update-priority';
import UpdateTaskName from '@/app/(dashboard)/dashboard/projects/[slug]/_components/update-task-name';
import UpdateTaskDescription from '@/app/(dashboard)/dashboard/projects/[slug]/_components/update-task-description';

export default function TaskCard({
  task,
  onComplete,
  onDelete,
}: {
  task: Task;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const [isPending, startTransition] = useTransition();

  const { isPlayingAudio, playAudio } = usePlayAudio({
    src: '/assets/sounds/complete-task-sound.mp3',
  });

  return (
    <TooltipProvider>
      <div
        className={cn(
          'rounded-lg relative border p-3 bg-background-100 transition-colors',
          {
            'border-red-500 hover:border-red-700':
              task.priority === 'priority 1',
            'border-amber-500 hover:border-amber-700':
              task.priority === 'priority 2',
            'border-blue-500 hover:border-blue-700':
              task.priority === 'priority 3',
            'border-gray-500 hover:border-gray-700':
              task.priority === 'priority 4',
          },
        )}
      >
        <div className="space-y-3">
          <div className={cn('flex items-center gap-3')}>
            <Tooltip>
              <TooltipTrigger
                disabled={isPending || isPlayingAudio}
                onClick={() =>
                  startTransition(async () => {
                    playAudio();
                    onComplete(task.id);
                    await addTaskToCompleted(task.id);
                  })
                }
                className={cn(
                  'group center size-6 complete-task-button rounded-full transition shrink-0 border',
                  {
                    'border-red-500 text-red-900 hover:border-red-700':
                      task.priority === 'priority 1',
                    'border-amber-500 text-amber-900 hover:border-amber-700':
                      task.priority === 'priority 2',
                    'border-blue-500 text-blue-900 hover:border-blue-700':
                      task.priority === 'priority 3',
                    'border-gray-500 text-gray-900 hover:border-gray-700':
                      task.priority === 'priority 4',
                  },
                )}
              >
                <Check className="group-hover:opacity-100 opacity-0 transition-opacity" />
              </TooltipTrigger>
              <TooltipContent side="top" className="flex items-center gap-1">
                Complete this task <Check />
              </TooltipContent>
            </Tooltip>
            <div
              className={cn('space-y-1 pl-3 border-l transition grow', {
                'border-red-500': task.priority === 'priority 1',
                'border-amber-500': task.priority === 'priority 2',
                'border-blue-500': task.priority === 'priority 3',
                'border-gray-500': task.priority === 'priority 4',
              })}
            >
              <UpdateTaskName task={task} />
              {task.description && <UpdateTaskDescription task={task} />}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  iconOnly
                  size="xs"
                  className="ml-auto"
                  variant="tertiary"
                >
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    disabled={isPending}
                    variant="destructive"
                    onClick={() =>
                      startTransition(async () => {
                        onDelete(task.id);
                        await deleteTask(task.id);
                      })
                    }
                  >
                    <Trash /> Delete
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div
            className={cn('flex flex-col gap-1 border-t pt-3 transition', {
              'border-red-500': task.priority === 'priority 1',
              'border-amber-500': task.priority === 'priority 2',
              'border-blue-500': task.priority === 'priority 3',
              'border-gray-500': task.priority === 'priority 4',
            })}
          >
            {task.dueDate && (
              <div className="flex items-center gap-1">
                <div className="text-xs text-gray-900">Due date:</div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="pink-subtle">
                      {formatDistance(task.dueDate || '', new Date(), {
                        addSuffix: true,
                        includeSeconds: true,
                      })}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent className="flex items-center gap-1">
                    <Clock />
                    {format(task.dueDate, 'MMMM dd, yyyy hh a')}
                  </TooltipContent>
                </Tooltip>
              </div>
            )}
            {task.tags.length > 0 && (
              <div className="flex items-center gap-1">
                <div className="text-xs text-gray-900">Tags:</div>
                {task.tags.map((tag) => (
                  <Badge variant="purple-subtle" key={tag.id}>
                    {tag.name}
                  </Badge>
                ))}
              </div>
            )}
            <TaskUpdatePriority task={task} />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
