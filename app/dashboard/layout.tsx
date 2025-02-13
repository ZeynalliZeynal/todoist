import DashboardHeader from './_layout/header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <DashboardHeader />
      {children}
    </div>
  );
}
