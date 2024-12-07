import Button from "@/components/ui/button";
import { getProfile } from "@/actions/profile.action";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu/dropdown-menu";
import Image from "next/image";
import ThemeSwitch from "@/components/ui/theme";
import Link from "next/link";
import { dashboardRoute } from "@/routes";
import DropdownLogout from "@/app/(landing)/_layout/header/dropdown-logout";

export default async function NavRight() {
  const profile = await getProfile();
  return (
    <div className="flex items-center gap-3">
      {!profile.error ? (
        <>
          <Button primary size="sm" href="/contact">
            Contact
          </Button>
          <Button primary size="sm" href={dashboardRoute}>
            Dashboard
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full overflow-hidden">
                <Image
                  src={`https://avatar.vercel.sh/${profile.name}`}
                  alt={profile.name}
                  width={30}
                  height={30}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="horizontal-right-bottom">
              <DropdownMenuGroup className="pb-2 pt-3 space-y-1">
                <DropdownMenuLabel>{profile.name}</DropdownMenuLabel>
                <DropdownMenuLabel className="text-gray-800">
                  {profile.email}
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
                <DropdownMenuLabel className="h-10 flex items-center justify-between">
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
          <Button primary size="sm" href="/auth/login">
            Log In
          </Button>
          <Button primary size="sm" href="/contact">
            Contact
          </Button>
          <Button primary size="sm" href="/auth/signup">
            Sign up
          </Button>
        </>
      )}
    </div>
  );
}
