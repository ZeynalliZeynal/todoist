import Navbar from "@/app/(landing)/_layout/header/navbar";
import NavRight from "@/app/(landing)/_layout/header/nav-right";

export default function Header() {
  return (
    <header className="h-16 max-w-full w-full">
      <div className="max-w-[1448px] mx-auto px-6 h-full flex items-center justify-between">
        <Navbar />
        <NavRight />
      </div>
    </header>
  );
}
