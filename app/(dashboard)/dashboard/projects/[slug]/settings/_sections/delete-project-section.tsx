import { differenceInHours } from 'date-fns';
import DeleteProjectDialog from '@/app/(dashboard)/dashboard/projects/[slug]/settings/_components/delete-project-dialog';

export default function DeleteProjectSection({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="rounded-md bg-background-100 border border-red-400 overflow-hidden">
      <div>
        <div className="p-6 border-b border-red-400">
          <h4 className="text-xl font-semibold capitalize">Delete Project</h4>
          <p className="my-3">
            The project will be permanently deleted, including its tasks. This
            action is irreversible and can not be undone.
          </p>
          <div className="border-t">
            <div className="pt-6">
              <p>{project.name}</p>
              <p className="space-x-2">
                Last updated {differenceInHours(new Date(), project.updatedAt)}h
                ago
              </p>
            </div>
          </div>
        </div>
        <footer className="flex items-center bg-red-100 justify-end p-3">
          <DeleteProjectDialog project={project} />
        </footer>
      </div>
    </section>
  );
}
