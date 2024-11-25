import Header from "@/app/(auth)/_layout/header/header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background-200">
      <Header />
      <main className="flex-1 max-w-full flex items-center">
        <div className="max-w-5xl mx-auto pt-8">{children}</div>
      </main>
      {/*<Footer />*/}
    </div>
  );
}
