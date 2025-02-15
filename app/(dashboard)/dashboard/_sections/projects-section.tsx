import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import ProjectCard from '../_components/project-card';
import { ChevronDown } from 'vercel-geist-icons';

export default function ProjectsSection() {
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
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="grid grid-cols-2 gap-6 mt-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
