import { ReactNode } from 'react';
import Header from '@/app/(landing)/_layout/header/header';
import Footer from '@/app/(landing)/_layout/footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-full px-5">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
