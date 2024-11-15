import Navbar from "@/app/(landing)/_layout/header/navbar";
import NavRight from "@/app/(landing)/_layout/header/nav-right";

export default function Header() {
  return (
    <header className="h-16">
      <div className="container h-full flex items-center justify-between">
        <Navbar />
        <NavRight />
      </div>
    </header>
  );
}
