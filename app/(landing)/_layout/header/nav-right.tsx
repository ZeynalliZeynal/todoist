'use client';
import ResponsiveNavMenu from '@/components/layout/responsive-nav-menu';
import { useRestrict } from '@/hooks/use-ui';
import React from 'react';
import NavRightDropdown from '@/app/(landing)/_layout/header/nav-right-dropdown';
import { useRouter } from 'next/navigation';
import { ButtonLink } from '@/components/ui/button';
import { contactRoute } from '@/routes';
import { navItems } from '@/constants';

export default function NavRight() {
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
      <NavRightDropdown />
      <ResponsiveNavMenu>
        {(closeMenu) => (
          <ul className="py-3 border-b">
            {navItems.map((item) => (
              <li key={item.name}>
                <ButtonLink
                  variant="tertiary"
                  size="lg"
                  href={item.href}
                  className="px-1.5 pr-3 w-full justify-between"
                  onClick={closeMenu}
                >
                  {item.name}
                </ButtonLink>
              </li>
            ))}
            <li>
              <ButtonLink
                variant="tertiary"
                size="lg"
                href={contactRoute}
                className="px-1.5 pr-3 w-full justify-between"
                onClick={closeMenu}
              >
                Contact me
              </ButtonLink>
            </li>
          </ul>
        )}
      </ResponsiveNavMenu>
    </div>
  );
}
