'use client';

import { useRestrict } from '@/hooks/use-ui';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Cross, Menu } from 'vercel-geist-icons';

interface ResponsiveNavMenuContextProps {
  isNavMenuOpen: boolean;
  closeMenu: () => void;
  toggleMenu: () => void;
}

const ResponsiveNavMenuContext =
  React.createContext<ResponsiveNavMenuContextProps | null>(null);

function useResponsiveNavMenu() {
  const context = React.useContext(ResponsiveNavMenuContext);
  if (!context)
    throw new Error(
      'useResponsiveNavMenu must be used within ResponsiveNavMenu'
    );
  return context;
}

export function ResponsiveNavMenu({ children }: { children: React.ReactNode }) {
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);
  const router = useRouter();

  useRestrict({
    condition: isNavMenuOpen,
  });

  function closeMenu() {
    setIsNavMenuOpen(false);
  }

  function toggleMenu() {
    setIsNavMenuOpen((prevState) => !prevState);
  }

  React.useEffect(() => {
    closeMenu();
  }, [router]);

  return (
    <ResponsiveNavMenuContext.Provider
      value={{
        isNavMenuOpen,
        closeMenu,
        toggleMenu,
      }}
    >
      {children}
    </ResponsiveNavMenuContext.Provider>
  );
}

export function ResponsiveNavMenuTrigger({
  className,
  ...props
}: React.ComponentProps<'button'>) {
  const { isNavMenuOpen, toggleMenu } = useResponsiveNavMenu();

  return (
    <button
      aria-label={isNavMenuOpen ? 'Close menu' : 'Open menu'}
      data-expanded={isNavMenuOpen}
      className={cn(
        'size-8 border bg-background-200 center lg:hidden rounded-full hover:bg-gray-100 transition',
        className
      )}
      {...props}
      onClick={toggleMenu}
    >
      {isNavMenuOpen ? (
        <Cross className="animate-in fade-in-0 zoom-in-0" />
      ) : (
        <Menu className="animate-in fade-in-0 zoom-in-0" />
      )}
    </button>
  );
}
