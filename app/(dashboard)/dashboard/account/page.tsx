import { getCachedProfile } from '@/actions/profile.action';
import UpdateNameSection from '@/app/(dashboard)/dashboard/account/_sections/update-name-section';
import UpdateAvatarSection from '@/app/(dashboard)/dashboard/account/_sections/update-avatar-section';

export default async function AccountPage() {
  const profile = await getCachedProfile();

  return (
    <>
      <UpdateNameSection user={profile.user} />
      <UpdateAvatarSection user={profile.user} />
    </>
  );
}
