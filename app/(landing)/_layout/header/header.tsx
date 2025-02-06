import Navbar from '@/app/(landing)/_layout/header/navbar';
import NavRight from '@/app/(landing)/_layout/header/nav-right';
import { getProfile } from '@/actions/profile.action';

export default async function Header() {
  const profile = await getProfile();
  const user = profile.user;

  return (
    <header className="max-w-full w-full border-b sticky z-40 top-0 bg-background-200">
      <div className="max-w-screen-full h-16 mx-auto px-6 flex items-center justify-between">
        <Navbar />
        <NavRight user={user} />
      </div>
    </header>
  );
}
