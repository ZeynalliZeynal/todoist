'use client';

import { Tab, Tabs } from '@/components/ui/tabs';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const project_header_links = (slug: string) => [
  {
    link: `/dashboard/projects/${slug}`,
    label: 'Project',
  },
  {
    link: '/dashboard/projects/${slug}/settings',
    label: 'Settings',
  },
];

const header_links = [
  {
    link: '/dashboard',
    label: 'Overview',
  },
  {
    link: '/dashboard/settings',
    label: 'Settings',
  },
  {
    link: '/dashboard/account',
    label: 'Account',
  },
  {
    link: '/dashboard/activity',
    label: 'Activity',
  },
];

export default function HeaderBottomLinks() {
  const [activePill, setActivePill] = useState(-1);
  const pathname = usePathname();

  const projectSlug =
    pathname.includes('/projects') && pathname.split('/')?.at(3);

  const links =
    pathname.includes('/projects') && projectSlug
      ? project_header_links(projectSlug)
      : header_links;

  return (
    <div className="h-11">
      <Tabs className="h-10">
        {links.map((link, index) => (
          <Tab
            as={Link}
            href={link.link}
            onMouseEnter={() => setActivePill(index)}
            onMouseLeave={() => setActivePill(-1)}
            isPillActive={activePill === index}
            isIndicatorActive={pathname === link.link}
            key={index}
            className={cn('h-8', pathname === link.link && 'text-foreground')}
          >
            {link.label}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
