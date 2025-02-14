import SpecialButton from '@/components/ui/special-button';
import { Geist } from '@/components/ui/icons/geist';
import { ButtonLink } from '@/components/ui/button';
import { dashboardRoute } from '@/routes';
import React from 'react';
import UserDropdownMenu from '@/components/layout/user-dropdown-menu';

export default function NavRightDropdown({ user }: { user: User }) {
  if (user)
    return (
      <div className="lg:flex items-center gap-3 hidden">
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
        <UserDropdownMenu user={user} />
      </div>
    );
  return (
    <div className="lg:flex hidden items-center gap-3">
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
    </div>
  );
}
