import AccountAsideLinks from '@/app/(dashboard)/dashboard/account/_layout/account-aside-links';
import PageHeader from '@/app/(dashboard)/_layout/header/page-header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { template: '%s / Account', default: 'Account' },
  description:
    'Update your notifications, memberships, sessions, and your profile here.',
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader sub>Account</PageHeader>
      <div className="mt-12">
        <div className="max-w-screen-dashboard-sub mx-auto px-6">
          <div className="flex gap-12">
            <AccountAsideLinks />
            <main className="space-y-8 *:w-full flex-1">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
