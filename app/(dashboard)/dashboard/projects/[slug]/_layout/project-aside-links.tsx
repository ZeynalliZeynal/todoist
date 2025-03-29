'use client';

import { Input } from '@/components/ui/input';
import { MagnifyingGlass } from 'vercel-geist-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { projectSettingsRoute } from '@/routes';
import { projectSlug } from '@/app/(dashboard)/dashboard/_utils/slugs';
import DashboardAsideContainer from '@/app/(dashboard)/_layout/dashboard-aside-container';

export default function ProjectAsideLinks() {
  const pathname = usePathname();

  return (
    <DashboardAsideContainer>
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
      </div>
    </DashboardAsideContainer>
  );
}
