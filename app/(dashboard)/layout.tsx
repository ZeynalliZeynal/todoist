import DashboardFooter from '@/app/(dashboard)/_layout/footer';
import DashboardHeader from '@/app/(dashboard)/_layout/header';
import DashboardHeaderBottom from '@/app/(dashboard)/_layout/header/dashboard-header-bottom';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s / Dashboard',
    default: 'Dashboard',
  },
  description: 'Manage your account, projects, settings, and more',
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex-col flex justify-between">
      <DashboardHeader />
      <main className="flex-1">
        <DashboardHeaderBottom />
        {children}
      </main>
      <DashboardFooter />
    </div>
  );
}
