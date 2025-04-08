import { Metadata } from 'next';
import { getCachedProjects, getProjects } from '@/actions/project.action';
import StoreProject from '@/app/(dashboard)/dashboard/projects/[slug]/_components/store-project';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjects({ slug });

  return {
    title: {
      template: `%s / ${project.projects?.at(0)?.name}`,
      default: project.projects?.at(0)?.name,
    },
    description: 'Manage your tasks here.',
  };
}

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getCachedProjects({ slug });

  return (
    <>
      <StoreProject project={data.projects?.at(0)} />
      {children}
    </>
  );
}
