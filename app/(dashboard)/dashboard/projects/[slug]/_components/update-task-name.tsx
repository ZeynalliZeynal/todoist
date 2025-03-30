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
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import LoadingDots from '@/components/ui/loading-dots';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function UpdateTaskName({ task }: { task: Task }) {
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      name: task.name || '',
    },
    resolver: zodResolver(
      z.object({
        name: z
          .string()
          .min(1, 'Name cannot be empty')
          .min(3, 'At least 3 characters required'),
      }),
    ),
  });

  return (
    <AnimatedPopper
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        form.reset();
      }}
    >
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
            className="rounded-md relative"
          >
            <h4 className="text-sm font-medium">{task.name}</h4>
          </AnimatedPopperTrigger>
        </TooltipTrigger>
        <TooltipContent>Click to update</TooltipContent>
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
        className="rounded-xl min-w-80 bg-background-200 p-3 border left-[calc(50%-(var(--content-width)/2))] top-[calc(50%-(var(--content-height)/2))]"
      >
        <AnimatedPopperOverlay className="backdrop-blur-sm" />
        <form
          onSubmit={form.handleSubmit((formData) =>
            startTransition(async () => {
              await updateTask({
                ...task,
                id: task.id,
                name: formData.name,
              });
              setOpen(false);
            }),
          )}
        >
          <Input
            {...form.register('name')}
            error={form.formState.errors?.name?.message}
            label="Name"
          />
          <Button
            type="submit"
            className="ml-auto mt-3"
            variant="secondary"
            disabled={isPending || form.watch('name')?.trim() === task.name}
          >
            {isPending ? <LoadingDots size="small" /> : 'Save'}
          </Button>
        </form>
      </AnimatedPopperContent>
    </AnimatedPopper>
  );
}
