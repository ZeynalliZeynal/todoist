import UpdateProjectSection from '@/app/(dashboard)/dashboard/projects/[slug]/settings/_sections/update-project-section';
import { getProjects } from '@/actions/project.action';
import DeleteProjectSection from '@/app/(dashboard)/dashboard/projects/[slug]/settings/_sections/delete-project-section';

export const metadata = {
  title: 'Settings',
  description: `Manage your project settings`,
};

export default async function SettingsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjects({ slug });

  return (
    <>
      <UpdateProjectSection project={project.projects?.at(0)} />
      <DeleteProjectSection project={project.projects?.at(0)} />
    </>
  );
}
