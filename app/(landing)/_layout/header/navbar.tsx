import { LogoFull } from "@/components/ui/icons/logo";
import Link from "next/link";
import NavLinks from "@/app/(landing)/_layout/header/nav-links";

export default function Navbar() {
  return (
    <nav className="h-full flex items-center gap-8">
      <Link href="/public">
        <LogoFull height={22} />
      </Link>
      <NavLinks />
    </nav>
  );
}
