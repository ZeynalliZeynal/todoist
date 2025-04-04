import DashboardFooter from '@/app/(dashboard)/_layout/footer';
import DashboardHeader from '@/app/(dashboard)/_layout/header';
import DashboardHeaderBottom from '@/app/(dashboard)/_layout/header/dashboard-header-bottom';

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
