'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import Kbd from '@/components/ui/kbd';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';
import { GoProject, GoTasklist } from 'react-icons/go';
import {
  ChevronDown,
  Command,
  GridSquare,
  ListUnordered,
  MagnifyingGlass,
} from 'vercel-geist-icons';
import CreateProjectDialog from '@/app/(dashboard)/dashboard/_components/create-project-dialog';
import CreateTaskDialog from '@/app/(dashboard)/dashboard/_components/create-task-dialog';

const sort_projects_by = [
  {
    label: 'Sort by activity',
    value: 'activity',
  },
  {
    label: 'Sort by name',
    value: 'name',
  },
];

export default function ProjectsFormSection() {
  const [createProjectOpen, setCreateProjectOpen] = React.useState(false);
  const [createTaskOpen, setCreateTaskOpen] = React.useState(false);
  const [sortBy, setSortBy] = React.useState(sort_projects_by[0].value);

  return (
    <section className="flex items-center gap-3">
      <form method="GET" className="grow">
        <Input
          type="text"
          name="projectName"
          placeholder="Search projects..."
          size="medium"
          prefixStyling={false}
          suffixStyling={false}
          prefix={<MagnifyingGlass />}
          className="relative"
        >
          <div className="absolute top-1/2 -translate-y-1/2 right-3 flex items-center gap-2">
            <Kbd>
              <Command />
            </Kbd>
            <Kbd className="w-5">K</Kbd>
          </div>
        </Input>
      </form>
      <Select defaultValue={sortBy} value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger asChild>
          <Button
            suffix={<ChevronDown />}
            size="md"
            className="bg-background-100 gap-5"
          >
            <SelectValue>
              {sort_projects_by.find((value) => value.value === sortBy)?.label}
            </SelectValue>
          </Button>
        </SelectTrigger>
        <SelectContent>
          {sort_projects_by.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="h-10 p-1 rounded-lg border text-base flex items-center bg-background-100 text-gray-900">
        <button className="bg-gray-200 px-3 py-2 rounded center text-foreground">
          <GridSquare />
        </button>
        <button className="bg-transparent px-3 py-2 rounded center hover:text-foreground transition">
          <ListUnordered />
        </button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button suffix={<ChevronDown />} size="md" variant="secondary">
            Add new...
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setCreateProjectOpen(true)}>
              Project <GoProject />
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCreateTaskOpen(true)}>
              Task <GoTasklist />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <CreateProjectDialog
        open={createProjectOpen}
        setOpen={setCreateProjectOpen}
      />
      <CreateTaskDialog open={createTaskOpen} setOpen={setCreateTaskOpen} />
    </section>
  );
}
