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
import React, { useState } from 'react';
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { createTaskTag } from '@/actions/task-tag.action';
import Badge from '@/components/ui/badge';

export default function CreateTaskDialog({
  open,
  setOpen,
  projects,
  tags,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  projects: Project[];
  tags: TaskTag[];
}) {
  const [tagInputValue, setTagInputValue] = useState('');
  const [tagPopoverOpen, setTagPopoverOpen] = useState(false);
  const [isCreatingTag, setIsCreatingTag] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<{
    name: string;
    description: string;
    project: string;
    priority: string;
    dueDate: string;
    tags: Set<string | undefined>;
  }>({
    defaultValues: {
      name: '',
      description: '',
      project: '',
      priority: 'priority 1',
      dueDate: '',
      tags: new Set(),
    },
    resolver: zodResolver(
      z.object({
        name: z.string().min(1, 'A task requires a name'),
        description: z.string(),
        project: z.string().min(1, 'A task must belong to a project'),
        priority: z.enum(TASK_PRIORITIES),
        dueDate: z.string(),
        tags: z.set(z.string()),
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
            const response = await createTask({
              ...data,
              tags: Array.from(data.tags),
            });
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
                  placeholder="Search project"
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
                        className="justify-start bg-background-100 capitalize text-gray-900"
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
              <div className="flex flex-col gap-2 flex-1">
                <div className="text-gray-900 flex items-center justify-between gap-2 flex-wrap">
                  Tags
                </div>
                {watch('tags').size > 0 && (
                  <div className="flex items-center gap-2">
                    {Array.from(watch('tags')).map((t) => (
                      <Badge
                        key={t}
                        variant="pink-subtle"
                        className="rounded-md cursor-pointer"
                        onClick={() => {
                          const tagId = tags.find((tag) => tag.id === t)?.id;

                          if (watch('tags').has(tagId)) {
                            const updatedTags = new Set(watch('tags'));
                            updatedTags.delete(tagId);
                            setValue('tags', updatedTags, {
                              shouldValidate: true,
                            });
                          } else {
                            setValue('tags', watch('tags').add(tagId), {
                              shouldValidate: true,
                            });
                          }
                        }}
                      >
                        {tags.find((tag) => tag.id === t)?.name}
                      </Badge>
                    ))}
                  </div>
                )}
                <Popover open={tagPopoverOpen} onOpenChange={setTagPopoverOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      size="md"
                      className="justify-start bg-background-100 [&>span]:line-clamp-1 [&>span]:flex [&>span]:gap-2 text-gray-900"
                      suffix={<ChevronDown className="opacity-50 ml-auto" />}
                    >
                      {watch('tags').size > 0
                        ? Array.from(watch('tags')).map((t) => (
                            <span key={t}>
                              {tags.find((tag) => tag.id === t)?.name}
                            </span>
                          ))
                        : 'Select tag'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="!p-0 overflow-hidden min-w-[462px]">
                    <Command>
                      <CommandInput
                        placeholder="Search project"
                        value={tagInputValue}
                        onValueChange={(search) => setTagInputValue(search)}
                      />
                      <CommandList>
                        <CommandEmpty>No tag found.</CommandEmpty>
                        <CommandGroup>
                          {tags?.map((tag) => (
                            <CommandItem
                              key={tag.id}
                              value={tag.name}
                              onSelect={(currentValue) => {
                                const tagId = tags.find(
                                  (tag) => tag.name === currentValue,
                                )?.id;

                                if (watch('tags').has(tagId)) {
                                  const updatedTags = new Set(watch('tags'));
                                  updatedTags.delete(tagId);
                                  setValue('tags', updatedTags, {
                                    shouldValidate: true,
                                  });
                                } else {
                                  setValue('tags', watch('tags').add(tagId), {
                                    shouldValidate: true,
                                  });
                                }

                                setTagPopoverOpen(false);
                              }}
                            >
                              {tag.name}
                              <Check
                                className={cn(
                                  'ml-auto',
                                  watch('tags').has(tag.id)
                                    ? 'opacity-100'
                                    : 'opacity-0',
                                )}
                              />
                            </CommandItem>
                          ))}
                          {!tags?.find((tag) =>
                            tag.name.includes(tagInputValue),
                          ) &&
                            tagInputValue.trim() !== '' && (
                              <CommandItem
                                onSelect={async () => {
                                  setIsCreatingTag(true);
                                  const res = await createTaskTag({
                                    name: tagInputValue,
                                  });
                                  setValue(
                                    'tags',
                                    watch('tags').add(res.data.tag._id),
                                  );
                                  setTagPopoverOpen(false);
                                  setIsCreatingTag(false);
                                }}
                                disabled={isCreatingTag}
                                className="justify-start"
                              >
                                {isCreatingTag ? (
                                  <>
                                    <Spinner /> Creating &#34;{tagInputValue}
                                    &#34; tag
                                  </>
                                ) : (
                                  `Create "${tagInputValue}" tag`
                                )}
                              </CommandItem>
                            )}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
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
