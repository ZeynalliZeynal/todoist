import { Input } from '@/components/ui/input';
import SubmitButton from '@/components/submit-button';
import { updateProject } from '@/actions/project.action';
import { redirect } from 'next/navigation';

export default function UpdateProjectSection({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="rounded-md bg-background-100 border overflow-hidden">
      <form
        action={async (formData) => {
          'use server';
          await updateProject(formData);
          redirect('/dashboard');
        }}
      >
        <div className="p-6 border-b">
          <h4 className="text-xl font-semibold capitalize">
            Project name & description
          </h4>
          <p className="my-3">
            Name and description of your project. After saving, you are going to
            be redirected to the dashboard.
          </p>
          <div className="flex flex-col gap-3">
            <input type="hidden" name="id" hidden defaultValue={project.id} />
            <Input
              name="name"
              defaultValue={project.name}
              className="*:bg-background-200 *:rounded-md w-1/2"
            />
            <Input
              name="description"
              defaultValue={project.description}
              className="*:bg-background-200 *:rounded-md w-1/2"
            />
          </div>
        </div>
        <footer className="flex items-center justify-end p-3">
          <SubmitButton size="sm">Save</SubmitButton>
        </footer>
      </form>
    </section>
  );
}
