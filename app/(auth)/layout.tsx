import Header from "@/app/(auth)/_layout/header/header";
import { ReactNode } from "react";
import Footer from "@/app/(auth)/_layout/footer/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background-200">
      <Header />
      <main className="flex-1 max-w-full flex">
        <div className="pt-8 flex items-center flex-col flex-grow">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
