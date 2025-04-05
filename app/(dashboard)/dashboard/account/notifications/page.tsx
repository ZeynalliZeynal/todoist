import { getNotificationSettings } from '@/actions/notification-settings.action';
import UpdateNotificationsSection from './_sections/update-notifications-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notifications',
  description: 'Update your notifications here.',
};

export default async function NotificationsPage() {
  const data = await getNotificationSettings();

  const settings = data.settings;

  return (
    <>
      <UpdateNotificationsSection settings={settings} />
    </>
  );
}
