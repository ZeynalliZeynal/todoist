'use client';

import { Tab, Tabs } from '@/components/ui/tabs';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { projectSlug } from '@/app/(dashboard)/dashboard/_utils/slugs';
import { dashboardLinks } from '@/app/(dashboard)/_constants/links';

const project_header_links = (slug: string) => [
  {
    href: `/dashboard/projects/${slug}`,
    label: 'Project',
    children: [],
  },
  {
    href: `/dashboard/projects/${slug}/settings`,
    label: 'Settings',
    children: [],
  },
];

export default function HeaderBottomLinks() {
  const [activePill, setActivePill] = useState(-1);
  const pathname = usePathname();

  const links =
    pathname.includes('/projects') && projectSlug(pathname)
      ? project_header_links(projectSlug(pathname))
      : dashboardLinks;

  return (
    <div className="h-11">
      <Tabs className="h-10">
        {links.map((link, index) => (
          <Tab
            as={Link}
            href={link.href}
            onMouseEnter={() => setActivePill(index)}
            onMouseLeave={() => setActivePill(-1)}
            isPillActive={activePill === index}
            isIndicatorActive={
              pathname === link.href ||
              link?.children?.some((item) => pathname === item.href)
            }
            key={index}
            className={cn(
              'h-8',
              pathname === link.href ||
                (link?.children?.some((item) => pathname === item.href) &&
                  'text-foreground'),
            )}
          >
            {link.label}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
