import { Input } from '@/components/ui/input';
import {
  ChevronDown,
  Command,
  GridSquare,
  ListUnordered,
  MagnifyingGlass,
} from 'vercel-geist-icons';
import Kbd from '@/components/ui/kbd';
import { Button } from '@/components/ui/button';
import RecentChangesSection from '@/app/(dashboard)/dashboard/_sections/recent-changes-section';
import ProjectsSection from '@/app/(dashboard)/dashboard/_sections/projects-section';

export default function DashboardPage() {
  return (
    <div className="pt-6">
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
        <Button
          suffix={<ChevronDown />}
          size="md"
          className="bg-background-100 gap-5"
        >
          Sort by activity
        </Button>
        <div className="h-10 p-1 rounded-lg border text-base flex items-center bg-background-100 text-gray-900">
          <button className="bg-gray-200 px-3 py-2 rounded center text-foreground">
            <GridSquare />
          </button>
          <button className="bg-transparent px-3 py-2 rounded center hover:text-foreground transition">
            <ListUnordered />
          </button>
        </div>
        <Button suffix={<ChevronDown />} size="md" variant="secondary">
          Add new...
        </Button>
      </section>
      <section className="sm:mt-6 mt-4 grid grid-cols-[400px_1fr] lg:gap-8 sm:gap-6 gap-4">
        <RecentChangesSection />
        <ProjectsSection />
      </section>
    </div>
  );
}
