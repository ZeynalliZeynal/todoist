import ProjectsSection from '@/app/(dashboard)/dashboard/_sections/projects-section';
import RecentChangesSection from '@/app/(dashboard)/dashboard/_sections/recent-changes-section';
import ProjectsFormSection from './_sections/projects-form-section';
import { getProjects } from '@/actions/project.action';
import { getTaskTags } from '@/actions/task-tag.action';

export default async function DashboardPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const data = await getProjects({
    search: searchParams?.search as string | undefined,
    sortBy: searchParams?.sortBy as string | undefined,
  });

  const taskTags = await getTaskTags();

  return (
    <div className="max-w-screen-dashboard mx-auto px-6">
      <div className="pt-6">
        <ProjectsFormSection projects={data.projects} tags={taskTags.tags} />
        <section className="sm:mt-6 mt-4 grid grid-cols-[400px_1fr] lg:gap-8 sm:gap-6 gap-4">
          <RecentChangesSection />
          <ProjectsSection projects={data.projects} />
        </section>
      </div>
    </div>
  );
}
