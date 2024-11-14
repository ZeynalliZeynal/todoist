import { ReactNode } from "react";
import Header from "@/app/(landing)/_layout/header/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
