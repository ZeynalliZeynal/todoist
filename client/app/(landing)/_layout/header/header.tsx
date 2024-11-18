import Navbar from "@/app/(landing)/_layout/header/navbar";
import NavRight from "@/app/(landing)/_layout/header/nav-right";

export default function Header() {
  return (
    <header className="max-w-full w-full border-b">
      <div className="max-w-[1448px] h-16 mx-auto px-6 flex items-center justify-between">
        <Navbar />
        <NavRight />
      </div>
    </header>
  );
}
