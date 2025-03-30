import ProjectAsideLinks from '@/app/(dashboard)/dashboard/projects/[slug]/_layout/project-aside-links';
import PageHeader from '@/app/(dashboard)/_layout/header/page-header';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader sub>Settings</PageHeader>
      <div className="mt-12">
        <div className="max-w-screen-dashboard-sub mx-auto px-6">
          <div className="flex gap-12">
            <ProjectAsideLinks />
            <main className="space-y-8 *:w-full flex-1">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
