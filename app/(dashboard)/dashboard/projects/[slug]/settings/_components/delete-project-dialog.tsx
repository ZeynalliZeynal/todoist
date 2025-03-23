'use client';

import Note from '@/components/ui/note';
import DeleteAlert from '@/components/delete-alert';
import { Input } from '@/components/ui/input';
import { deleteProject } from '@/actions/project.action';
import { redirect } from 'next/navigation';

export default function DeleteProjectDialog({ project }: { project: Project }) {
  // const {
  //   register,
  //   formState: { errors },
  // } = useFormContext();

  return (
    <DeleteAlert
      title="Delete Project"
      description="This project will be deleted, along with all of its Tasks."
      note={
        <Note label="Warning" variant="red" fill>
          This action is not reversible. Please be certain.
        </Note>
      }
      action={async () => {
        await deleteProject(project.id);
        redirect('/dashboard');
      }}
    >
      {({ register, formState: { errors } }) => (
        <div className="flex flex-col gap-6">
          <Input
            size="medium"
            error={
              errors.name &&
              ((errors.name?.message ||
                (errors.name.type === 'validate' &&
                  'The project name must match')) as string)
            }
            label={
              <>
                Enter the project name{' '}
                <b className="inline-block mx-1">{project.slug}</b> to continue:
              </>
            }
            {...register('name', {
              required: {
                value: true,
                message: 'The project name is required',
              },
              validate: (value) => value === project.slug,
            })}
          />
          <Input
            size="medium"
            error={
              errors.verification &&
              ((errors.verification?.message ||
                (errors.verification.type === 'validate' &&
                  'The verification text must match')) as string)
            }
            label={
              <>
                To verify, type{' '}
                <b className="inline-block mx-1">delete my project</b> below:
              </>
            }
            {...register('verification', {
              required: {
                value: true,
                message: 'The verification text is required',
              },
              validate: (value) => value === 'delete my project',
            })}
          />
        </div>
      )}
    </DeleteAlert>
  );
}
