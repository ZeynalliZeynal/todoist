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
import { useDebouncedCallback } from '@everest-ui/react-hooks';
import { useRouter, useSearchParams } from 'next/navigation';

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

export default function ProjectsFormSection({
  projects,
  tags,
}: {
  projects: Project[];
  tags: TaskTag[];
}) {
  // const setSearch = useProjectsSearchStore((state) => state.setSearch);
  // const setDebouncedSearch = useProjectsSearchStore(
  //   (state) => state.setDebouncedSearch,
  // );
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = React.useState('');
  const [sortBy, setSortBy] = React.useState(sort_projects_by[0].value);
  const [createProjectOpen, setCreateProjectOpen] = React.useState(false);
  const [createTaskOpen, setCreateTaskOpen] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const { callback: updateSearch } = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    router.push(`?${params.toString()}`, { scroll: false });
  });

  const updateSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('sortBy', value);
    } else {
      params.delete('sortBy');
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  React.useEffect(() => {
    const handleFocusOnKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleFocusOnKeyDown);
    return () => {
      document.removeEventListener('keydown', handleFocusOnKeyDown);
    };
  }, []);

  React.useEffect(() => {
    setSearch(searchParams.get('search') || '');
    setSortBy(searchParams.get('sortBy') || sort_projects_by[0].value);
  }, [searchParams]);

  return (
    <section className="flex items-center gap-3">
      <form className="grow">
        <Input
          ref={inputRef}
          type="text"
          name="projectName"
          placeholder="Search projects..."
          size="medium"
          prefixStyling={false}
          suffixStyling={false}
          value={search}
          prefix={<MagnifyingGlass />}
          className="relative"
          onChange={({ target: { value } }) => {
            setSearch(value);
            updateSearch(value);
          }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 right-3 flex items-center gap-2">
            <Kbd>
              <Command />
            </Kbd>
            <Kbd className="w-5">K</Kbd>
          </div>
        </Input>
      </form>
      <Select
        value={sortBy}
        onValueChange={(value) => {
          setSortBy(value);
          updateSort(value);
        }}
      >
        <SelectTrigger asChild>
          <Button
            suffix={<ChevronDown />}
            size="md"
            className="bg-background-100 gap-5"
          >
            <SelectValue />
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
      <CreateTaskDialog
        tags={tags}
        projects={projects}
        open={createTaskOpen}
        setOpen={setCreateTaskOpen}
      />
    </section>
  );
}
