'use client';

import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SubmitButton from '@/components/submit-button';
import React from 'react';
import { createTask } from '@/actions/task.actions';

export default function CreateTaskDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <form
          action={async (formData) => {
            await createTask(formData);
            setOpen(false);
          }}
        >
          <DialogBody>
            <DialogTitle>Create a new task</DialogTitle>
            <div className="flex flex-col gap-3">
              <Input size="medium" label="Name" name="name" required />
              <Input size="medium" label="Description" name="description" />
            </div>
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button size="md">Cancel</Button>
            </DialogClose>
            <SubmitButton>Create</SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
