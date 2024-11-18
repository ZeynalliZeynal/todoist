import { ReactNode } from "react";
import Header from "@/app/(landing)/_layout/header/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 max-w-full">
        <div className="max-w-5xl mx-auto pt-8 pb-24 border border-t-0">
          {children}
        </div>
      </main>
    </div>
  );
}
