'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'vercel-geist-icons';
import { useState } from 'react';
import CreateTaskDialog from '@/app/(dashboard)/dashboard/_components/create-task-dialog';

export default function AddTaskButton({
  project,
  tags,
}: {
  project: Project;
  tags: TaskTag[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CreateTaskDialog
        trigger={
          <Button
            onClick={() => setOpen((prevState) => !prevState)}
            variant="tertiary"
            suffix={<Plus />}
          >
            Add task
          </Button>
        }
        open={open}
        setOpen={setOpen}
        projects={project}
        tags={tags}
      />
    </>
  );
}
