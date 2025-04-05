import SpecialButton from '@/components/ui/special-button';
import { Geist } from '@/components/ui/icons/geist';
import { ButtonLink } from '@/components/ui/button';
import { dashboardRoute } from '@/routes';
import React from 'react';
import UserDropdownMenu from '@/components/layout/user-dropdown-menu';
import { useProfile } from '@/lib/providers/user-provider';

export default function NavRightDropdown() {
  const { profile } = useProfile();
  if (profile?.name)
    return (
      <div className="lg:flex items-center gap-3 hidden">
        <SpecialButton
          href="/geist/introduction"
          className="h-8 rounded-md w-32 [&_span]:rounded-md font-geist-mono"
        >
          <Geist className="mr-2 group-hover:scale-125 origin-center transition duration-300" />
          Geist UI
        </SpecialButton>
        <ButtonLink size="sm" href="/contact">
          Contact
        </ButtonLink>
        <ButtonLink size="sm" href={dashboardRoute}>
          Dashboard
        </ButtonLink>
        <UserDropdownMenu user={profile} />
      </div>
    );
  return (
    <div className="lg:flex hidden items-center gap-3">
      <SpecialButton
        href="/geist/introduction"
        className="h-8 rounded-md w-32 [&_span]:rounded-md font-geist-mono"
      >
        <Geist className="mr-2 group-hover:scale-125 origin-center transition duration-300" />
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
