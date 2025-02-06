'use client';
import { ButtonLink } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import ThemeSwitch from '@/components/ui/theme';
import Link from 'next/link';
import { dashboardRoute } from '@/routes';
import DropdownLogout from '@/app/(landing)/_layout/header/dropdown-logout';
import SpecialButton from '@/components/ui/special-button';
import { Geist } from '@/components/ui/icons/geist';
import { Cross, Layout, Menu, SettingsGear } from 'vercel-geist-icons';
import { useMediaQuery } from 'react-responsive';
import React from 'react';
import ResponsiveNavMenu from '@/app/(landing)/_layout/header/responsive-nav-menu';
import { useRestrict } from '@/hooks/use-ui';

export default function NavRight({ user }: { user: User }) {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);

  useRestrict({
    condition: isNavMenuOpen,
  });

  if (isDesktop)
    return (
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <SpecialButton
              href="/geist/introduction"
              className="h-8 rounded-md w-32 [&_span]:rounded-md font-geist-mono"
            >
              <Geist className="mr-2 group-hover:rotate-180 origin-center transition duration-300" />
              Geist UI
            </SpecialButton>
            <ButtonLink size="sm" href="/contact">
              Contact
            </ButtonLink>
            <ButtonLink size="sm" href={dashboardRoute}>
              Dashboard
            </ButtonLink>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full overflow-hidden">
                  <Image
                    src={`https://avatar.vercel.sh/${user.name}`}
                    alt={user.name}
                    width={30}
                    height={30}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuGroup className="pb-2 pt-3 space-y-1">
                  <DropdownMenuLabel className="flex-col items-start">
                    <span>{user.name}</span>
                    <span className="text-gray-800">{user.email}</span>
                  </DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href={dashboardRoute}>
                      Dashboard <Layout />
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/account/settings">
                      Account Settings <SettingsGear />
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="h-10 justify-between">
                    <span className="text-gray-900">Theme:</span>
                    <ThemeSwitch />
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownLogout />
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <SpecialButton
              href="/geist/introduction"
              className="h-8 rounded-md w-32 [&_span]:rounded-md font-geist-mono"
            >
              <Geist className="mr-2 group-hover:rotate-180 origin-center transition duration-300" />
              Geist UI
            </SpecialButton>
            <ButtonLink size="sm" href="/auth/login">
              Log In
            </ButtonLink>
            <ButtonLink size="sm" href="/contact">
              Contact
            </ButtonLink>
            <ButtonLink size="sm" href="/auth/signup">
              Sign up
            </ButtonLink>
          </>
        )}
      </div>
    );

  return (
    <>
      <button
        aria-label={isNavMenuOpen ? 'Close menu' : 'Open menu'}
        data-expanded={isNavMenuOpen}
        className="size-8 border bg-background-200 center rounded-full hover:bg-gray-100 transition"
        onClick={() => setIsNavMenuOpen((prevState) => !prevState)}
      >
        {isNavMenuOpen ? (
          <Cross className="animate-in fade-in-0 zoom-in-0" />
        ) : (
          <Menu className="animate-in fade-in-0 zoom-in-0" />
        )}
      </button>
      {isNavMenuOpen && <ResponsiveNavMenu user={user} />}
    </>
  );
}
