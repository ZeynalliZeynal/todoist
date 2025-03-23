import ProjectAsideLinks from '@/app/(dashboard)/dashboard/projects/[slug]/_layout/project-aside-links';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b">
        <div className="max-w-screen-dashboard-sub mx-auto px-6">
          <h1 className="text-3xl leading-[120px] font-medium">Settings</h1>
        </div>
      </header>
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
