import { getProfile } from '@/actions/profile.action';
import Badge from '@/components/ui/badge';
import { Logo } from '@/components/ui/icons/logo';
import Image from 'next/image';
import Link from 'next/link';

export default async function DashboardHeader() {
  const data = await getProfile({
    plan: true,
  });

  const user: User = data.user;
  console.log(user);

  return (
    <header className="px-6 max-w-full flex items-center h-16 bg-background-100 border-b">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Logo />
          </Link>
          <div className="w-0.5 h-5 rounded bg-gray-alpha-400 rotate-[15deg]" />
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
        <div className="flex items-center gap-4"></div>
      </div>
    </header>
  );
}
