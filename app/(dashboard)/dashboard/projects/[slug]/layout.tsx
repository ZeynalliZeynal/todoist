import { Metadata } from 'next';
import { getProjects } from '@/actions/project.action';

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

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
