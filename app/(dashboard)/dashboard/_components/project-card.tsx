import { Gauge } from '@/components/ui/gauge';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from 'vercel-geist-icons';
import ProjectCardMenu from '@/app/(dashboard)/dashboard/_components/project-card-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function ProjectCard({ project }: { project: Project }) {
  const completedTasksLength =
    project.tasks?.filter((task) => task.completed)?.length || 0;

  return (
    <div className="rounded-lg relative border py-5 pl-6 pr-4 bg-background-100 hover:border-gray-500 transition-colors">
      <div className="flex flex-col">
        <div className="flex item-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.logo ? (
              <Image
                src={project.logo}
                width={32}
                height={32}
                alt={`Logo of ${project.name}`}
              />
            ) : (
              <Layout className="size-8" />
            )}
            <div className="flex flex-col">
              <h4 className="font-semibold hover:underline">{project.name}</h4>
              {project.description && (
                <p className="text-gray-900 line-clamp-1">
                  {project.description}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative size-8">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="relative z-[2] rounded-full">
                    <Gauge
                      showValue
                      value={
                        (completedTasksLength / project.tasks.length) * 100
                      }
                      max={project.tasks?.length}
                      equal
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    Completed tasks:{' '}
                    <b>
                      {completedTasksLength} / {project.tasks?.length || 0}
                    </b>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {/*<CheckCircleFill className="pos-center" />*/}
            </div>
            <ProjectCardMenu project={project} />
          </div>
        </div>
      </div>
      <Link
        href={'/dashboard/projects/' + project.slug}
        className="absolute inset-0 z-[1]"
      />
    </div>
  );
}
