'use client';

import { Input } from '@/components/ui/input';
import { MagnifyingGlass } from 'vercel-geist-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { accountRoute, notificationsRoute, sessionsRoute } from '@/routes';

export default function AccountAsideLinks() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col gap-10 shrink-0">
      <Input
        prefix={<MagnifyingGlass className="size-5" />}
        prefixStyling={false}
        suffixStyling={false}
        placeholder="Search..."
        size="medium"
      />
      <div className="flex flex-col">
        <Link
          href={accountRoute}
          className={cn(
            'flex items-center rounded-md hover:bg-gray-alpha-100 text-gray-900 py-2.5 px-3 transition',
            pathname === accountRoute && 'text-foreground font-medium',
          )}
        >
          General
        </Link>
        <Link
          href={sessionsRoute}
          className={cn(
            'flex items-center rounded-md hover:bg-gray-alpha-100 text-gray-900 py-2.5 px-3 transition',
            pathname === sessionsRoute && 'text-foreground font-medium',
          )}
        >
          Sessions
        </Link>
        <Link
          href={notificationsRoute}
          className={cn(
            'flex items-center rounded-md hover:bg-gray-alpha-100 text-gray-900 py-2.5 px-3 transition',
            pathname === notificationsRoute && 'text-foreground font-medium',
          )}
        >
          Notifications
        </Link>
      </div>
    </aside>
  );
}
