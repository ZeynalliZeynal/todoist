'use client';

import { Input } from '@/components/ui/input';
import { MagnifyingGlass } from 'vercel-geist-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { projectSettingsRoute, sessionsRoute } from '@/routes';
import { projectSlug } from '@/app/(dashboard)/dashboard/_utils/slugs';

export default function ProjectAsideLinks() {
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
          href={projectSettingsRoute(projectSlug(pathname))}
          className={cn(
            'flex items-center rounded-md hover:bg-gray-alpha-100 text-gray-900 py-2.5 px-3 transition',
            pathname === projectSettingsRoute(projectSlug(pathname)) &&
              'text-foreground font-medium',
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
      </div>
    </aside>
  );
}
