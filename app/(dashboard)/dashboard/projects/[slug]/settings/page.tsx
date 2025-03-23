import UpdateProjectSection from '@/app/(dashboard)/dashboard/projects/[slug]/settings/_sections/update-project-section';
import { getProjects } from '@/actions/project.action';

export default async function SettingsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjects({ slug });
  console.log(project);

  return (
    <>
      <UpdateProjectSection project={project.projects?.at(0)} />
    </>
  );
}
