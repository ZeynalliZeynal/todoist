import TasksSection from '@/app/(dashboard)/dashboard/projects/[slug]/_sections/tasks-section';
import { getTasks } from '@/actions/task.action';
import { getTaskTags } from '@/actions/task-tag.action';
import { getProjects } from '@/actions/project.action';
import { CornerDownLeft } from 'vercel-geist-icons';
import Link from 'next/link';
import { dashboardRoute } from '@/routes';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [tasks, taskTags, project] = await Promise.all([
    getTasks({ project: slug }),
    getTaskTags(),
    getProjects({ slug }),
  ]);

  return (
    <div>
      <section className="border-b h-[120px]">
        <div className="max-w-screen-dashboard mx-auto justify-center px-6 flex flex-col gap-4 h-full">
          <h1 className="text-3xl font-medium">
            {project.projects?.at(0)?.name}
          </h1>
          <Link
            href={dashboardRoute}
            className="flex w-fit items-center gap-2 text-gray-900 hover:text-foreground transition"
          >
            <CornerDownLeft /> Go to Projects
          </Link>
        </div>
      </section>
      <TasksSection
        tasks={tasks.tasks?.filter((task: Task) => !task.completed)}
        tags={taskTags.tags}
        project={project.projects?.at(0)}
      />
    </div>
  );
}
