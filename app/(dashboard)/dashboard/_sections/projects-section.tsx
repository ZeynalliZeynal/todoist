import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import ProjectCard from '../_components/project-card';
import { ChevronDown, ZeroConfig } from 'vercel-geist-icons';
import EmptyState from '@/components/ui/empty-state';

export default async function ProjectsSection({
  projects,
}: {
  projects: Project[];
}) {
  const favoriteProjects = projects?.length
    ? projects.filter((project) => project.favorite)
    : [];

  return (
    <div className="flex flex-col">
      <h2 className="text-sm font-medium leading-8 flex items-center justify-between">
        Projects{' '}
        <span className="text-xs text-gray-900">{projects?.length}</span>
      </h2>
      {favoriteProjects.length > 0 && (
        <Accordion>
          <AccordionItem value="favorite projects" className="border-none mt-4">
            <AccordionTrigger asChild>
              <Button
                variant="tertiary"
                className="group"
                prefix={
                  <ChevronDown className="group-data-[state=closed]:-rotate-90 transform transition" />
                }
              >
                Your favorites
              </Button>
            </AccordionTrigger>
            <AccordionContent className="w-full">
              <div className="py-4 border-b grid grid-cols-2 gap-6">
                {favoriteProjects?.map((p, i) => (
                  <ProjectCard key={i} project={p} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
      {projects?.length ? (
        <div className="grid grid-cols-2 gap-6 mt-4">
          {projects?.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<ZeroConfig />}
          title="No projects found."
          description='Create one from the "Add new..." dropdown button at the top.'
        />
      )}
    </div>
  );
}
