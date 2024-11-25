import { Logo } from "@/components/ui/icons/logo";
import Link from "next/link";
import HeaderRightButtons from "@/app/(auth)/_layout/header/header-right-buttons";

export default function Header() {
  return (
    <header className="max-w-full">
      <div className="max-w-screen-full h-16 mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <HeaderRightButtons />
      </div>
    </header>
  );
}
