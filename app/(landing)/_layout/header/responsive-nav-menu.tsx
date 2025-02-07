'use client';

import { Button, ButtonLink } from '@/components/ui/button';
import React from 'react';
import Image from 'next/image';
import { accountSettingsRoute, dashboardRoute, geistRoute } from '@/routes';
import { Layout, LogoGeist, Logout, SettingsGear } from 'vercel-geist-icons';
import ThemeSwitch from '@/components/ui/theme';
import Spinner from '@/components/ui/spinner';
import { logout } from '@/actions/auth.actions';

export default function ResponsiveNavMenu({ user }: { user: User }) {
  const [isPending, setIsPending] = React.useState(false);

  return (
    <div className="fixed inset-0 top-16 max-h-screen bg-background-200 size-full">
      <div className="px-3 overflow-y-auto">
        <section className="mx-3 flex flex-col gap-4 py-3">
          {user ? (
            <>
              <Button size="md" variant="secondary">
                Upgrade to Pro
              </Button>
              <Button size="md" className="bg-background-100">
                Contact
              </Button>
            </>
          ) : (
            <>
              <Button size="md" variant="secondary">
                Log In
              </Button>
              <Button size="md" variant="secondary">
                Sign Up
              </Button>
              <Button size="md" className="bg-background-100">
                Contact
              </Button>
            </>
          )}
        </section>
        <ul className="py-3 text-base overflow-y-auto">
          <li className="p-3 flex items-center justify-between">
            <div className="flex flex-col gap-1 items-start">
              <span className="text-base">{user.name}</span>
              <span className="text-gray-900">{user.email}</span>
            </div>
            <Image
              src={`https://avatar.vercel.sh/${user.name}`}
              alt="Profile photo"
              width={18}
              height={18}
              className="rounded-full"
            />
          </li>
          <li>
            <ButtonLink
              variant="tertiary"
              size="lg"
              suffix={<Layout />}
              href={dashboardRoute}
              className="px-1.5 pr-3 w-full justify-between"
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
            >
              Account Settings
            </ButtonLink>
          </li>
          <li className="flex h-12 text-gray-900 hover:text-foreground transition justify-between items-center px-3">
            Theme
            <ThemeSwitch size={32} />
          </li>
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
              }}
            >
              Log Out
            </Button>
          </li>
        </ul>
        <div className="w-full h-px bg-gray-alpha-400" />
        <ul className="py-3">
          <li>
            <ButtonLink
              variant="tertiary"
              size="lg"
              suffix={<LogoGeist />}
              href={geistRoute}
              className="px-1.5 pr-3 w-full justify-between"
            >
              Geist Design System
            </ButtonLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
