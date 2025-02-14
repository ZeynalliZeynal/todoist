import { getProfile } from '@/actions/profile.action';
import Badge from '@/components/ui/badge';
import { Logo } from '@/components/ui/icons/logo';
import Image from 'next/image';
import Link from 'next/link';
import UserDropdownMenu from '@/components/layout/user-dropdown-menu';
import HeaderBottomLinks from '@/app/(dashboard)/dashboard/_layout/header/header-bottom-links';

export default async function DashboardHeader() {
  const data = await getProfile({
    plan: true,
  });

  const user: User = data.user;

  return (
    <header className="px-6 max-w-full border-b bg-background-100">
      <div className="flex items-center h-16">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-4">
            <Link href="/app/(dashboard)/dashboard">
              <Logo />
            </Link>
            <div className="w-0.5 h-5 rounded bg-gray-alpha-400 rotate-[15deg]" />
            <div className="h-10 flex items-center gap-2">
              <Link
                href="/app/(dashboard)/dashboard"
                className="flex gap-2 items-center"
              >
                <Image
                  src={`https://avatar.vercel.sh/${user.name}`}
                  alt="Profile photo"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                {`${user.name.split(' ')[0]}'s projects`}
                <Badge size="sm" variant="gray-subtle">
                  {user.plan[0].name}
                </Badge>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <UserDropdownMenu user={user} />
          </div>
        </div>
      </div>
      <HeaderBottomLinks />
    </header>
  );
}
