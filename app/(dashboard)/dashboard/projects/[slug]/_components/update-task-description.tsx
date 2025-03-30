import {
  AnimatedPopper,
  AnimatedPopperContent,
  AnimatedPopperOverlay,
  AnimatedPopperTrigger,
} from '@/components/ui/animated-popper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import React, { useState, useTransition } from 'react';
import { updateTask } from '@/actions/task.action';
import { Textarea } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import LoadingDots from '@/components/ui/loading-dots';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { AlignmentLeft } from 'vercel-geist-icons';

export default function UpdateTaskDescription({ task }: { task: Task }) {
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      description: task.description || '',
    },
    resolver: zodResolver(
      z.object({
        description: z.string(),
      }),
    ),
  });

  return (
    <AnimatedPopper open={open} onOpenChange={setOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <AnimatedPopperTrigger
            initial={{
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="rounded-md"
          >
            <p className="text-gray-900 line-clamp-2">
              {task.description || (
                <span className="flex text-gray-900 items-center gap-2 hover:text-foreground transition">
                  <AlignmentLeft />
                  Description
                </span>
              )}
            </p>
          </AnimatedPopperTrigger>
        </TooltipTrigger>
        <TooltipContent>
          {task.description ? 'Click to update' : 'Click to add'}
        </TooltipContent>
      </Tooltip>
      <AnimatedPopperContent
        initial={{
          opacity: 0,
        }}
        exit={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="rounded-xl min-w-96 bg-background-200 p-4 border left-[calc(50%-(var(--content-width)/2))] top-[calc(50%-(var(--content-height)/2))]"
      >
        <AnimatedPopperOverlay className="backdrop-blur-sm" />
        <form
          onSubmit={form.handleSubmit((formData) =>
            startTransition(async () => {
              await updateTask({
                ...task,
                id: task.id,
                description: formData.description,
              });
              setOpen(false);
            }),
          )}
        >
          <Textarea
            {...form.register('description')}
            error={form.formState.errors?.description?.message}
            label="Description"
          />
          <Button
            type="submit"
            className="ml-auto mt-3"
            variant="secondary"
            disabled={
              isPending || form.watch('description').trim() === task.description
            }
          >
            {isPending ? <LoadingDots size="small" /> : 'Save'}
          </Button>
        </form>
      </AnimatedPopperContent>
    </AnimatedPopper>
  );
}
