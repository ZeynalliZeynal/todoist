import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Gauge } from '@/components/ui/gauge';
import Image from 'next/image';
import Link from 'next/link';
import { Layout, MoreHorizontal, Percentage } from 'vercel-geist-icons';

export default function ProjectCard({ project }: { project: Project }) {
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
              <Link href="/dashboard" className="font-semibold hover:underline">
                {project.name}
              </Link>
              {project.description && (
                <p className="text-gray-900">{project.description}</p>
              )}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative size-8">
              <Gauge value={0} equal />
              <Percentage className="pos-center" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  iconOnly
                  size="xs"
                  variant="tertiary"
                  className="relative z-[2]"
                >
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Toggle Favorite</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <Link href="/dashboard" className="absolute inset-0 z-[1]" />
    </div>
  );
}
