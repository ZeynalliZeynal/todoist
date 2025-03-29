import { getNotificationSettings } from '@/actions/notification-settings.action';
import UpdateNotificationsSection from './_sections/update-notifications-section';

export default async function NotificationsPage() {
  const data = await getNotificationSettings();

  const settings = data.settings;

  return (
    <>
      <UpdateNotificationsSection settings={settings} />
    </>
  );
}
