import { ButtonLink } from '@/components/ui/button';
import { getProfile } from '@/actions/profile.action';
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

export default async function NavRight() {
  const profile = await getProfile();
  const user = profile.user;

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
                  <Link href={dashboardRoute}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/settings">Account Settings</Link>
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
}
