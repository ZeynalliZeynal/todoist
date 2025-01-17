import GeistSidebar from '@/app/(geist)/geist/_layout/sidebar/geist-sidebar';
import GeistHeader from '@/app/(geist)/geist/_layout/header/geist-header';
import BottomNav from '@/app/(geist)/_layout/bottom-nav';

export default function GeistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen max-w-screen-geist mx-auto [--header-height:4rem] border-x">
      <GeistHeader />
      <div className="flex flex-1">
        <GeistSidebar />
        <main className="overflow-auto flex-1">
          {children}
          <BottomNav />
        </main>
      </div>
    </div>
  );
}
