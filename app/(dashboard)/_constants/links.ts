import {
  accountRoute,
  dashboardRoute,
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
    href: accountRoute,
    children: [
      { label: 'General', href: accountRoute },
      { label: 'Sessions', href: sessionsRoute },
      { label: 'Notifications', href: notificationsRoute },
    ],
  },
];
