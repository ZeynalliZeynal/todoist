import { cn } from '@/lib/utils';
import Badge from '@/components/ui/badge';
import { SettingsGear } from 'vercel-geist-icons';
import { ButtonLink } from '@/components/ui/button';
import { PopoverClose } from '@radix-ui/react-popover';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function NotificationPopoverHeader({
  activeTab,
  setActiveTab,
  inboxLength,
  archiveLength,
}: {
  activeTab: 'inbox' | 'archive';
  setActiveTab: (activeTab: 'inbox' | 'archive') => void;
  inboxLength: number;
  archiveLength: number;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="pl-4 pr-2 h-12 border-b shrink-0">
        <div className="flex items-stretch size-full *:size-full justify-between">
          <div className="flex gap-6 items-stretch">
            <button
              className={cn(
                'px-2 border-b-2 border-transparent transition hover:text-foreground',
                activeTab === 'inbox'
                  ? 'text-foreground border-foreground'
                  : 'text-gray-900',
              )}
              onClick={() => setActiveTab('inbox')}
            >
              Inbox{' '}
              {inboxLength > 0 && (
                <Badge
                  size="sm"
                  className="rounded-full cursor-pointer"
                  variant="gray-subtle"
                >
                  {inboxLength}
                </Badge>
              )}
            </button>
            <button
              className={cn(
                'px-2 border-b-2 border-transparent transition hover:text-foreground',
                activeTab === 'archive'
                  ? 'text-foreground border-foreground'
                  : 'text-gray-900',
              )}
              onClick={() => setActiveTab('archive')}
            >
              Archive{' '}
              {archiveLength > 0 && (
                <Badge
                  size="sm"
                  className="rounded-full cursor-pointer"
                  variant="gray-subtle"
                >
                  {archiveLength}
                </Badge>
              )}
            </button>
          </div>
          <PopoverClose asChild>
            <Tooltip>
              <TooltipTrigger asChild>
                <ButtonLink
                  aria-disabled={true}
                  aria-label="Notification settings"
                  title="Notification settings"
                  href="#"
                  iconOnly
                  variant="tertiary"
                  className="rounded-full place-self-center data-[hover]:bg-accent-100"
                >
                  <SettingsGear />
                </ButtonLink>
              </TooltipTrigger>
              <TooltipContent>Not available yet</TooltipContent>
            </Tooltip>
          </PopoverClose>
        </div>
      </div>
    </TooltipProvider>
  );
}
