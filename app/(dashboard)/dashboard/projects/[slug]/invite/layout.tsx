import PageHeader from '@/app/(dashboard)/_layout/header/page-header';

export default function ProjectMembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader sub>Members</PageHeader>
      <div className="mt-12">
        <div className="max-w-screen-dashboard-sub mx-auto px-6">
          <div className="flex gap-12">
            <main className="space-y-8 *:w-full flex-1">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
