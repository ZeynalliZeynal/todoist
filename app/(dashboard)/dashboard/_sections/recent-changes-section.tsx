import { Button } from '@/components/ui/button';
import { MoreHorizontal, User } from 'vercel-geist-icons';

export default function RecentChangesSection() {
  return (
    <div className="flex flex-col">
      <div className="sticky top-16 space-y-3">
        <div className="h-8 px-1.5 center w-fit font-medium">
          Recent Changes
        </div>
        <div className="w-full p-4 border rounded-lg flex items-center gap-2 bg-background-100">
          <div className="flex flex-col gap-2 grow">
            <div className="flex gap-2 items-center">
              <p className="font-medium">Project Name</p>
              <span className="text-gray-900">Task name</span>
            </div>
            <div className="flex gap-2 text-xs text-gray-900">
              <span className="flex gap-2 items-center">
                <User /> Zeynal
              </span>
              {new Intl.DateTimeFormat('en-US', {
                timeStyle: 'medium',
              }).format(Date.now())}
            </div>
          </div>
          <Button iconOnly size="xs" variant="tertiary">
            <MoreHorizontal />
          </Button>
        </div>
      </div>
    </div>
  );
}
