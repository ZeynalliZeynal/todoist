import TasksSection from '@/app/(dashboard)/dashboard/projects/[slug]/_sections/tasks-section';
import { getTasks } from '@/actions/task.action';
import { getTaskTags } from '@/actions/task-tag.action';
import { getProjects } from '@/actions/project.action';
import PageHeader from '@/app/(dashboard)/_layout/header/page-header';

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
      <PageHeader goToLink>{project.projects?.at(0)?.name}</PageHeader>
      <TasksSection
        tasks={tasks.tasks?.filter((task: Task) => !task.completed)}
        tags={taskTags.tags}
        project={project.projects?.at(0)}
      />
    </div>
  );
}
