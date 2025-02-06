'use client';

import { navItems } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/lib';
import React from 'react';

export type Direction = 'ltr' | 'rtl' | null;

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul role="list" className="lg:flex items-center hidden">
      {navItems.map(({ name, href }, index) => (
        <li key={index}>
          <Link
            href={href}
            data-value={name}
            className={cn(
              'relative z-[1] capitalize leading-[1] gap-1 px-3 py-2 text-gray-900 hover:text-foreground transition flex items-center hover:bg-gray-200 rounded-full',
              pathname === href && 'text-foreground',
            )}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
