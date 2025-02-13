'use client';
import ResponsiveNavMenu from '@/components/layout/responsive-nav-menu';
import { useRestrict } from '@/hooks/use-ui';
import React from 'react';
import { Cross, Menu } from 'vercel-geist-icons';
import NavRightDropdown from '@/app/(landing)/_layout/header/nav-right-dropdown';
import { useRouter } from 'next/navigation';

export default function NavRight({ user }: { user: User }) {
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);
  const router = useRouter();

  useRestrict({
    condition: isNavMenuOpen,
  });

  React.useEffect(() => {
    setIsNavMenuOpen(false);
  }, [router]);

  return (
    <div>
      <NavRightDropdown user={user} />
      <div className="lg:hidden">
        <button
          aria-label={isNavMenuOpen ? 'Close menu' : 'Open menu'}
          data-expanded={isNavMenuOpen}
          className="size-8 border bg-background-200 center lg:hidden rounded-full hover:bg-gray-100 transition"
          onClick={() => setIsNavMenuOpen((prevState) => !prevState)}
        >
          {isNavMenuOpen ? (
            <Cross className="animate-in fade-in-0 zoom-in-0" />
          ) : (
            <Menu className="animate-in fade-in-0 zoom-in-0" />
          )}
        </button>
        {isNavMenuOpen && (
          <ResponsiveNavMenu
            user={user}
            closeMenu={() => setIsNavMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
