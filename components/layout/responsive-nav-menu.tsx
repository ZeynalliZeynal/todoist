'use client';

import { useRestrict } from '@/hooks/use-ui';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  Cross,
  Layout,
  LogoGeist,
  Logout,
  Menu,
  SettingsGear,
} from 'vercel-geist-icons';
import { Button, ButtonLink } from '@/components/ui/button';
import {
  accountSettingsRoute,
  dashboardRoute,
  geistRoute,
  loginRoute,
  signupRoute,
} from '@/routes';
import Image from 'next/image';
import ThemeSwitch from '@/components/ui/theme';
import Spinner from '@/components/ui/spinner';
import { logout } from '@/actions/auth.action';
import { useProfile } from '@/lib/providers/user-provider';

export default function ResponsiveNavMenu({
  children,
}: {
  children?: ((closeMenu: () => void) => React.ReactNode) | React.ReactNode;
}) {
  const { profile } = useProfile();
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);
  const [isPending, setIsPending] = React.useState(false);
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
    <div className="hidden lg:block">
      <button
        aria-label={isNavMenuOpen ? 'Close menu' : 'Open menu'}
        data-expanded={isNavMenuOpen}
        className={cn(
          'size-8 border bg-background-200 hidden lg:center rounded-full hover:bg-gray-100 transition',
        )}
        onClick={toggleMenu}
      >
        {isNavMenuOpen ? (
          <Cross className="animate-in fade-in-0 zoom-in-0" />
        ) : (
          <Menu className="animate-in fade-in-0 zoom-in-0" />
        )}
      </button>
      {isNavMenuOpen && (
        <div className="fixed inset-0 z-50 top-16 max-h-screen bg-background-200 size-full">
          <div className="px-3 overflow-y-auto size-full">
            <section className="mx-3 flex flex-col gap-4 py-3 [&>a]:w-full">
              {profile?.name ? (
                <>
                  <Button size="md" variant="secondary">
                    Upgrade to Pro
                  </Button>
                  <ButtonLink
                    href="/contact"
                    size="md"
                    className="bg-background-100"
                    onClick={closeMenu}
                  >
                    Contact
                  </ButtonLink>
                </>
              ) : (
                <>
                  <ButtonLink
                    href={loginRoute}
                    size="md"
                    variant="secondary"
                    onClick={closeMenu}
                  >
                    Log In
                  </ButtonLink>
                  <ButtonLink
                    href={signupRoute}
                    size="md"
                    variant="secondary"
                    onClick={closeMenu}
                  >
                    Sign Up
                  </ButtonLink>
                  <ButtonLink
                    href="/contact"
                    size="md"
                    className="bg-background-100"
                    onClick={closeMenu}
                  >
                    Contact
                  </ButtonLink>
                </>
              )}
            </section>
            <ul className="py-3 text-base overflow-y-auto">
              {profile?.name && (
                <>
                  <li className="p-3 flex items-center justify-between">
                    <div className="flex flex-col gap-1 items-start">
                      <span className="text-base">{profile.name}</span>
                      <span className="text-gray-900">{profile.email}</span>
                    </div>
                    <Image
                      src={profile.avatar}
                      alt="Profile photo"
                      width={28}
                      height={28}
                      className="rounded-full size-7"
                    />
                  </li>
                  <li>
                    <ButtonLink
                      variant="tertiary"
                      size="lg"
                      suffix={<Layout />}
                      href={dashboardRoute}
                      className="px-1.5 pr-3 w-full justify-between"
                      onClick={closeMenu}
                    >
                      Dashboard
                    </ButtonLink>
                  </li>
                  <li>
                    <ButtonLink
                      variant="tertiary"
                      size="lg"
                      suffix={<SettingsGear />}
                      href={accountSettingsRoute}
                      className="px-1.5 pr-3 w-full justify-between"
                      onClick={closeMenu}
                    >
                      Account Settings
                    </ButtonLink>
                  </li>
                </>
              )}
              <li className="flex h-12 text-gray-900 hover:text-foreground transition justify-between items-center px-3">
                Theme
                <ThemeSwitch size={32} />
              </li>
              {profile?.name && (
                <li>
                  <Button
                    variant="tertiary"
                    size="lg"
                    suffix={isPending ? <Spinner /> : <Logout />}
                    disabled={isPending}
                    href={accountSettingsRoute}
                    className="px-1.5 pr-3 w-full justify-between text-gray-900 hover:text-foreground"
                    onClick={async () => {
                      setIsPending(true);
                      await logout();
                      setIsPending(false);
                      closeMenu();
                    }}
                  >
                    Log Out
                  </Button>
                </li>
              )}
            </ul>
            <div className="w-full h-px bg-gray-alpha-400" />
            {typeof children === 'function' ? children(closeMenu) : children}
            <ul className="py-3">
              <li>
                <ButtonLink
                  variant="tertiary"
                  size="lg"
                  suffix={<LogoGeist />}
                  href={geistRoute}
                  className="px-1.5 pr-3 w-full justify-between"
                  onClick={closeMenu}
                >
                  Geist Design System
                </ButtonLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
