'use client';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Archive, Bell, Inbox } from 'vercel-geist-icons';
import NotificationPopoverHeader from '@/app/(dashboard)/_layout/header/notification/notification-popover-header';
import { useOptimistic, useState, useTransition } from 'react';
import NotificationList from '@/app/(dashboard)/_layout/header/notification/notification-list';
import { cn } from '@/lib/utils';
import { archiveAllNotifications } from '@/actions/notification.action';

export default function NotificationsPopover({
  notifications,
}: {
  notifications: Notification[];
}) {
  const [activeTab, setActiveTab] = useState<'inbox' | 'archive'>('inbox');
  const [isArchiving, startArchiveAllTransition] = useTransition();

  const inboxNotifications = notifications.filter(
    (notification) => !notification.archived,
  );

  const [optimisticInboxNotifications, optimisticArchiveInboxNotification] =
    useOptimistic(inboxNotifications, (state, id?: string) =>
      id ? state.filter((item) => item.id !== id) : [],
    );

  const archivedNotifications = notifications.filter(
    (notification) => notification.archived,
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          aria-label="Notifications"
          title="Notifications"
          iconOnly
          className="rounded-full relative"
        >
          <Bell />
          {optimisticInboxNotifications.length > 0 && (
            <span
              className={cn(
                'absolute size-2.5 rounded-full -top-0.5 -right-0.5 bg-blue-600',
                // 'before:absolute before:inset-0 before:rounded-full before:bg-blue-600 before:animate-ping',
              )}
            />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="!rounded-lg bg-background-200 flex flex-col max-w-[400px] !p-0 max-h-[80vh] min-h-[500px]"
      >
        <NotificationPopoverHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          archiveLength={archivedNotifications.length}
          inboxLength={optimisticInboxNotifications.length}
        />
        <div className="overflow-auto h-full flex-1 flex flex-col">
          {activeTab === 'inbox' ? (
            optimisticInboxNotifications.length > 0 ? (
              <NotificationList
                handleArchive={optimisticArchiveInboxNotification}
                notifications={optimisticInboxNotifications}
              />
            ) : (
              <div className="size-full center flex-1">
                <div className="flex flex-col text-gray-900 justify-center gap-3 items-center">
                  <span className="rounded-3xl bg-accent-100 center size-12">
                    <Inbox fontSize={20} />
                  </span>
                  <p>No new notifications</p>
                </div>
              </div>
            )
          ) : activeTab === 'archive' ? (
            archivedNotifications.length > 0 ? (
              <NotificationList notifications={archivedNotifications} />
            ) : (
              <div className="size-full center flex-1">
                <div className="flex flex-col text-gray-900 justify-center gap-3 items-center">
                  <span className="rounded-3xl bg-accent-100 center size-12">
                    <Archive fontSize={20} />
                  </span>
                  <p>No archived notifications</p>
                </div>
              </div>
            )
          ) : null}
        </div>
        {activeTab === 'inbox' && optimisticInboxNotifications.length > 0 && (
          <div className="overflow-hidden w-full rounded-b-lg shrink-0 border-t">
            <Button
              disabled={isArchiving}
              aria-description="Archive all notifications"
              className="w-full rounded-none text-sm data-[hover]:bg-accent-100"
              size="lg"
              variant="tertiary"
              onClick={() =>
                startArchiveAllTransition(async () => {
                  optimisticArchiveInboxNotification('');
                  await archiveAllNotifications();
                })
              }
            >
              Archive all
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
