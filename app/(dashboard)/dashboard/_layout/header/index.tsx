import { getProfile } from '@/actions/profile.action';
import { Logo } from '@/components/ui/icons/logo';
import Link from 'next/link';
import HeaderBottomLinks from '@/app/(dashboard)/dashboard/_layout/header/header-bottom-links';
import Image from 'next/image';
import Badge from '@/components/ui/badge';

export default async function DashboardHeader() {
  const profile = await getProfile({
    plan: true,
  });

  const user: User = profile.user;

  if (!user) return null;

  return (
    <header className="px-6 z-40 max-w-full border-b bg-background-100">
      <div className="flex items-center h-16">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <Link href="/dashboard">
              <Logo />
            </Link>
            <svg
              className="text-gray-alpha-400"
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={22}
              height={22}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.01526 15.3939L4.3107 14.7046L10.3107 0.704556L10.6061 0.0151978L11.9849 0.606077L11.6894 1.29544L5.68942 15.2954L5.39398 15.9848L4.01526 15.3939Z"
                fill="currentColor"
              />
            </svg>
            <div className="h-10 flex items-center gap-2">
              <Link href="/dashboard" className="flex gap-2 items-center">
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
            {/*<UserDropdownMenu user={user} />*/}
          </div>
        </div>
      </div>
      <HeaderBottomLinks />
    </header>
  );
}
