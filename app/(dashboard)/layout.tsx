import DashboardFooter from '@/app/(dashboard)/_layout/footer';
import DashboardHeader from '@/app/(dashboard)/_layout/header';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex-col flex justify-between">
      <DashboardHeader />
      <main className="flex-1">{children}</main>
      <DashboardFooter />
    </div>
  );
}
