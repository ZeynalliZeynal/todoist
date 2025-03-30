'use client';

import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/ui/badge';
import NotificationsPopover from '@/app/(dashboard)/_layout/header/notification/notifications-popover';
import UserDropdownMenu from '@/components/layout/user-dropdown-menu';
import { motion, useScroll, useTransform } from 'framer-motion';

const DEFAULT_HEADER_SIZE = 64;

export const AnimatedLink = motion(Link);

export default function DashboardAnimatedHeader({
  user,
  notifications,
}: {
  user: User;
  notifications: Notification[];
}) {
  const { scrollY } = useScroll();

  const topHeaderY = useTransform(
    scrollY,
    [0, DEFAULT_HEADER_SIZE * 3],
    [0, -DEFAULT_HEADER_SIZE],
  );

  return (
    <header className="px-6 max-w-full bg-background-100">
      <motion.div
        style={{
          y: topHeaderY,
        }}
      >
        <div
          className="flex items-center"
          style={{
            height: DEFAULT_HEADER_SIZE + 'px',
          }}
        >
          <div className="flex justify-between w-full pl-8">
            <div className="flex items-center gap-2">
              <svg
                className="text-gray-alpha-400"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width={22}
                height={22}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.01526 15.3939L4.3107 14.7046L10.3107 0.704556L10.6061 0.0151978L11.9849 0.606077L11.6894 1.29544L5.68942 15.2954L5.39398 15.9848L4.01526 15.3939Z"
                  fill="currentColor"
                />
              </svg>
              <div className="h-10 flex items-center gap-2">
                <Link href="/dashboard" className="flex gap-2 items-center">
                  <Image
                    src={user.avatar}
                    alt="Profile photo"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  {`${user.name.split(' ')[0]}'s projects`}
                  <Badge size="sm" variant="gray-subtle">
                    {user.plan.name}
                  </Badge>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <NotificationsPopover notifications={notifications} />
              <UserDropdownMenu user={user} />
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
