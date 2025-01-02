'use client';

import Link from 'next/link';
import { cn } from '@/utils/lib';
import { usePathname } from 'next/navigation';
import { geistLinks } from '@/constants';

export default function GeistSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[260px] border-r shrink-0 h-[calc(100vh-var(--header-height))] sticky top-[var(--header-height)]">
      <div className="relative h-full">
        <div className="absolute top-0 w-full h-4 bg-gradient-to-b from-background-100 left-0" />
        <div className="h-full space-y-4 px-3 pt-4 pb-3.5 overflow-y-auto">
          {geistLinks.map((link, index) => (
            <div key={index}>
              <p className="font-medium text-foreground text-sm px-3 h-10 flex items-center mb-0.5 capitalize">
                {link.title}
              </p>
              <ul className="flex flex-col gap-1">
                {link.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={cn(
                        'h-10 px-3 rounded-md hover:bg-gray-100 transition flex items-center gap-2 text-gray-900 capitalize',
                        link.href === pathname && '!bg-gray-alpha-100',
                      )}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
