'use client';

import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from 'react';
import { ChevronDown } from 'vercel-geist-icons';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TASK_PRIORITIES } from '@/lib/db-data';
import { createTask } from '@/actions/task.action';
import Spinner from '@/components/ui/spinner';
import { toast } from 'sonner';
import Combobox from '@/components/ui/combobox';

export default function CreateTaskDialog({
  open,
  setOpen,
  projects,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  projects: Project[];
}) {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      project: '',
      priority: 'priority 1',
      dueDate: '',
      tags: [],
    },
    resolver: zodResolver(
      z.object({
        name: z.string().min(1, 'A task requires a name'),
        description: z.string(),
        project: z.string().min(1, 'A task must belong to a project'),
        priority: z.enum(TASK_PRIORITIES),
        dueDate: z.string(),
        tags: z.array(z.string()),
      }),
    ),
  });

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        reset();
      }}
    >
      <DialogContent>
        <form
          onSubmit={handleSubmit(async (data: FieldValues) => {
            const response = await createTask(data);
            reset();
            if (response.status === 'success') {
              setOpen(false);
              toast.success(response.message);
            } else if (response.status === 'fail')
              toast.error(response.message);
          })}
        >
          <DialogBody>
            <DialogTitle className="text-xl">Create a new task</DialogTitle>
            <VisuallyHidden>
              <DialogDescription>
                Fill the inputs to create your task
              </DialogDescription>
            </VisuallyHidden>
            <div className="flex flex-col gap-3">
              <Input
                size="medium"
                placeholder="Name"
                {...register('name')}
                error={errors.name && errors.name?.message}
              />
              <Input
                size="medium"
                placeholder="Description"
                {...register('description')}
                error={errors.description && errors.description?.message}
              />
              <div className="flex items-start gap-3">
                <Combobox
                  label="Project"
                  triggerValue={
                    watch('project')
                      ? projects.find(
                          (project) => project.id === watch('project'),
                        )?.name
                      : 'Select project'
                  }
                  options={projects?.map((p) => ({
                    value: p.id,
                    label: p.name,
                  }))}
                  selected={watch('project')}
                  onSelect={(value) => {
                    setValue('project', value || '', { shouldValidate: true });
                  }}
                  error={errors?.project?.message}
                />
                <div className="flex flex-col gap-2 flex-1">
                  <div className="text-gray-900 flex items-center justify-between gap-2 flex-wrap">
                    Priority
                  </div>
                  <Select
                    value={watch('priority')}
                    onValueChange={(value) =>
                      setValue('priority', value, { shouldValidate: true })
                    }
                  >
                    <SelectTrigger asChild>
                      <Button
                        size="md"
                        className="justify-start bg-background-100 capitalize"
                        suffix={<ChevronDown className="opacity-50 ml-auto" />}
                      >
                        <SelectValue placeholder="Select priority" />
                      </Button>
                    </SelectTrigger>
                    <SelectContent>
                      {TASK_PRIORITIES.map((priority) => (
                        <SelectItem
                          value={priority}
                          key={priority}
                          className="capitalize"
                        >
                          {priority}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.priority && (
                    <span className="text-red-800">
                      {errors.priority?.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button size="md">Cancel</Button>
            </DialogClose>
            <Button
              size="md"
              type="submit"
              variant="secondary"
              disabled={isSubmitting}
              prefix={isSubmitting && <Spinner />}
            >
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
