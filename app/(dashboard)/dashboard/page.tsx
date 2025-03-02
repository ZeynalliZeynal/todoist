import ProjectsSection from '@/app/(dashboard)/dashboard/_sections/projects-section';
import RecentChangesSection from '@/app/(dashboard)/dashboard/_sections/recent-changes-section';
import ProjectsFormSection from './_sections/projects-form-section';
import { getProjects } from '@/actions/project.action';

export default async function DashboardPage() {
  const data = await getProjects();

  return (
    <div className="pt-6">
      <ProjectsFormSection projects={data.projects} />
      <section className="sm:mt-6 mt-4 grid grid-cols-[400px_1fr] lg:gap-8 sm:gap-6 gap-4">
        <RecentChangesSection />
        <ProjectsSection projects={data.projects} />
      </section>
    </div>
  );
}
