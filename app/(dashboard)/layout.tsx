import DashboardHeader from './_layout/header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <DashboardHeader />
      <main className="max-w-screen-dashboard mx-auto px-6">{children}</main>
    </div>
  );
}
