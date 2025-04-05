'use client';

import { Input } from '@/components/ui/input';
import { MagnifyingGlass } from 'vercel-geist-icons';
import { usePathname } from 'next/navigation';
import { accountSettingsRoute } from '@/routes';
import DashboardAsideContainer from '@/app/(dashboard)/_layout/dashboard-aside-container';
import { dashboardLinks } from '@/app/(dashboard)/_constants/links';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function AccountAsideLinks() {
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
        {dashboardLinks
          .find((l) => l.href === accountSettingsRoute)
          ?.children?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center rounded-md hover:bg-gray-alpha-100 text-gray-900 py-2.5 px-3 transition',
                pathname === link.href && 'text-foreground font-medium',
              )}
            >
              {link.label}
            </Link>
          ))}
      </div>
    </DashboardAsideContainer>
  );
}
