import {
  accountSettingsRoute,
  dashboardRoute,
  membershipRoute,
  notificationsRoute,
  sessionsRoute,
} from '@/routes';

export const dashboardLinks = [
  {
    label: 'Overview',
    href: dashboardRoute,
  },
  {
    label: 'Account',
    href: accountSettingsRoute,
    children: [
      { label: 'General', href: accountSettingsRoute },
      { label: 'Sessions', href: sessionsRoute },
      { label: 'Notifications', href: notificationsRoute },
      { label: 'Membership', href: membershipRoute },
    ],
  },
];
