'use client';

import { Tab, Tabs } from '@/components/ui/tabs';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { projectSlug } from '@/app/(dashboard)/dashboard/_utils/slugs';
import { dashboardLinks } from '@/app/(dashboard)/_constants/links';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { Logo } from '@/components/ui/icons/logo';
import { AnimatedLink } from '@/app/(dashboard)/_layout/header/dashboard-animated-header';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'vercel-geist-icons';

const DEFAULT_HEADER_SIZE = 44;

const AnimatedButton = motion(Button);

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
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollY } = useScroll();

  const logoY = useTransform(scrollY, [0, 64], [-54, 0]);
  const logoScale = useTransform(scrollY, [0, 64], [1, 16 / 24]);

  const bottomHeaderX = useTransform(scrollY, [0, 64], [-48, 0]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShowScrollTop(latest > 224);
  });

  const links =
    pathname.includes('/projects') && projectSlug(pathname)
      ? project_header_links(projectSlug(pathname))
      : dashboardLinks;

  return (
    <motion.nav className="px-6 max-w-full border-b bg-background-100 sticky top-0 z-50">
      <div className="flex gap-2 items-center">
        <AnimatedLink
          style={{
            y: logoY,
            scale: logoScale,
          }}
          href="/dashboard"
          className=""
        >
          <Logo />
        </AnimatedLink>
        <motion.div
          style={{
            x: bottomHeaderX,
            height: DEFAULT_HEADER_SIZE + 'px',
          }}
          className="flex items-center gap-2"
        >
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
        </motion.div>
        <AnimatePresence>
          {showScrollTop && (
            <AnimatedButton
              initial={{
                scale: 0,
                opacity: 0,
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              aria-label="Scroll to top"
              title="Scroll to top"
              className="ml-auto rounded-full"
              iconOnly
              variant="tertiary"
              onClick={() => scrollTo({ behavior: 'smooth', top: 0 })}
            >
              <ArrowUp />
            </AnimatedButton>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
