'use client';
import ResponsiveNavMenu from '@/components/layout/responsive-nav-menu';
import { useRestrict } from '@/hooks/use-ui';
import React from 'react';
import NavRightDropdown from '@/app/(landing)/_layout/header/nav-right-dropdown';
import { useRouter } from 'next/navigation';

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
      <ResponsiveNavMenu />
    </div>
  );
}
