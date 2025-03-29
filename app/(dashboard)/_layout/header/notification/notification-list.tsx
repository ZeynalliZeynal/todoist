import { Archive, Warning } from 'vercel-geist-icons';
import {
  generateNotificationLink,
  generateNotificationName,
} from '@/app/(dashboard)/_layout/header/notification/notification.util';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTransition } from 'react';
import { archiveNotification } from '@/actions/notification.action';

export default function NotificationList({
  notifications,
  handleArchive,
}: {
  notifications: Notification[];
  handleArchive?: (id: string) => void;
}) {
  const [isArchiving, startArchiveTransition] = useTransition();

  return (
    <div role="list" className="divide-y">
      {notifications.map((notification) => (
        <div
          role="listitem"
          key={notification.id}
          className="flex items-stretch hover:bg-accent-100 transition gap-4 p-4 pr-2 group relative"
        >
          <Link
            href={generateNotificationLink({
              value: notification.data.slug,
              type: notification.type.name,
            })}
            className="absolute inset-0"
          />
          <span className="shrink-0 size-9 rounded-full border border-[#411D06] center text-[#FDE68A] bg-[#241005]">
            <Warning fontSize={18} />
          </span>
          <div>
            {generateNotificationName({
              value: notification.data.name,
              type: notification.type.name,
            })}
            <p className="text-gray-900">
              {format(notification.createdAt, 'MMM dd, hh:mm:ss a')}
            </p>
          </div>
          {!notification.archived && handleArchive && (
            <Button
              size="sm"
              iconOnly
              variant="tertiary"
              className="rounded-full ml-auto group-hover:opacity-100 opacity-0 relative z-[1]"
              title="Archive"
              disabled={isArchiving}
              aria-label="Archive"
              onClick={() =>
                startArchiveTransition(async () => {
                  handleArchive(notification.id);
                  await archiveNotification(notification.id);
                })
              }
            >
              <Archive />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}
