import { getCachedProfile } from '@/actions/profile.action';
import { getNotifications } from '@/actions/notification.action';
import DashboardAnimatedHeader from '@/app/(dashboard)/_layout/header/dashboard-animated-header';

export default async function DashboardHeader() {
  const [profile, notifications] = await Promise.all([
    getCachedProfile(),
    getNotifications(),
  ]);

  const user: User = profile.user;

  if (!user) return null;

  return (
    <DashboardAnimatedHeader
      notifications={notifications.notifications}
      user={user}
    />
  );
}
