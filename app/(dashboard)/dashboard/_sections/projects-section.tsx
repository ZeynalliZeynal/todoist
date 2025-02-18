import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import ProjectCard from '../_components/project-card';
import { ChevronDown, ZeroConfig } from 'vercel-geist-icons';
import { getProjects } from '@/actions/project.action';
import EmptyState from '@/components/ui/empty-state';

export default async function ProjectsSection() {
  const data = await getProjects();
  const projects: Project[] = data.projects;

  return (
    <div className="flex flex-col">
      <Accordion>
        <AccordionItem value="favorite projects" className="border-none">
          <AccordionTrigger asChild>
            <Button
              variant="tertiary"
              className="group"
              prefix={
                <ChevronDown className="group-data-[state=open]:-rotate-90 transform transition" />
              }
            >
              Your favorites
            </Button>
          </AccordionTrigger>
          <AccordionContent className="w-full">
            <div className="py-4 border-b grid grid-cols-2 gap-6">
              {projects.length ? (
                projects.map((p, i) => <ProjectCard key={i} project={p} />)
              ) : (
                <EmptyState
                  icon={<ZeroConfig />}
                  title="No projects found in your favorites."
                />
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="grid grid-cols-2 gap-6 mt-4">
        {projects.length ? (
          projects.map((p, i) => <ProjectCard key={i} project={p} />)
        ) : (
          <EmptyState
            icon={<ZeroConfig />}
            title="No projects found."
            description='Create one from the "Add new..." dropdown button at the top.'
          />
        )}
      </div>
    </div>
  );
}
