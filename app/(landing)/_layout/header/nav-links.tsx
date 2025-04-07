'use client';

import { navItems } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/lib';
import React from 'react';
import { Tab, Tabs } from '@/components/ui/tabs';

export type Direction = 'ltr' | 'rtl' | null;

export default function NavLinks() {
  const [activeTab, setActiveTab] = React.useState(-1);

  const pathname = usePathname();

  return (
    <Tabs className="flex md:hidden [&_[data-active-pill]]:rounded-full">
      {navItems.map(({ name, href }, index) => (
        <Tab
          key={index}
          isPillActive={activeTab === index}
          onMouseEnter={() => setActiveTab(index)}
          onMouseLeave={() => setActiveTab(-1)}
          className="px-0"
        >
          <Link
            href={href}
            data-value={name}
            className={cn(
              'relative z-[1] capitalize leading-[1] gap-1 px-3 py-2 text-gray-900 hover:text-foreground transition flex items-center rounded-full',
              pathname === href && 'text-foreground',
            )}
          >
            {name}
          </Link>
        </Tab>
      ))}
    </Tabs>
  );
}
