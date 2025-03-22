import TasksSection from '@/app/(dashboard)/dashboard/projects/[slug]/_sections/tasks-section';
import { getTasks } from '@/actions/task.action';
import { getTaskTags } from '@/actions/task-tag.action';
import { getProjects } from '@/actions/project.action';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tasks = await getTasks({ project: slug });

  const taskTags = await getTaskTags();

  const project = await getProjects({ slug });

  return (
    <div>
      <section className="border-b h-[120px]">
        <div className="max-w-screen-dashboard mx-auto px-6 flex items-center h-full">
          <h1 className="text-3xl font-medium">
            {project.projects?.at(0)?.name}
          </h1>
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
