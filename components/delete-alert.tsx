'use client';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import React, { useTransition } from 'react';
import LoadingDots from '@/components/ui/loading-dots';
import {
  FieldValues,
  FormProvider,
  useForm,
  UseFormReturn,
} from 'react-hook-form';

export default function DeleteAlert({
  children,
  trigger,
  title,
  description,
  note,
  action,
}: {
  children?: ((methods: UseFormReturn) => React.ReactNode) | React.ReactNode;
  trigger?: React.ReactNode;
  title: string;
  description?: string;
  note?: React.ReactNode;
  action: (data: FieldValues) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();

  const form = useForm();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {trigger || (
          <Button variant="destructive" size="sm">
            Delete
          </Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit((data) =>
              startTransition(async () => {
                await action(data);
                form.reset();
              }),
            )}
          >
            <AlertDialogBody className="gap-6 p-0">
              <div className="p-6 flex flex-col gap-6">
                <AlertDialogTitle>{title}</AlertDialogTitle>
                {description && (
                  <AlertDialogDescription className="text-base">
                    {description}
                  </AlertDialogDescription>
                )}
                {note}
              </div>
              {children && (
                <div className="p-6 border-t bg-accent-100">
                  {typeof children === 'function'
                    ? children({ ...form })
                    : children}
                </div>
              )}
            </AlertDialogBody>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button size="md">Cancel</Button>
              </AlertDialogCancel>
              <Button
                type="submit"
                size="md"
                disabled={isPending}
                variant="destructive"
              >
                {isPending ? <LoadingDots /> : 'Delete'}
              </Button>
            </AlertDialogFooter>
          </form>
        </FormProvider>
      </AlertDialogContent>
    </AlertDialog>
  );
}
