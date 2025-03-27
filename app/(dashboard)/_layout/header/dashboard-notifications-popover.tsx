import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Bell } from 'vercel-geist-icons';

export default function DashboardNotificationsPopover({
  notifications,
}: {
  notifications: Notification[];
}) {
  console.log(notifications);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button iconOnly className="rounded-full">
          <Bell />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="!rounded-lg bg-background-200">
        test
      </PopoverContent>
    </Popover>
  );
}
