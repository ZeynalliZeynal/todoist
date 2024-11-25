import { Logo } from "@/components/ui/icons/logo";

export default function Header() {
  return (
    <header className="max-w-full">
      <div className="max-w-screen-full h-16 mx-auto px-6 flex items-center justify-between">
        <div>
          <Logo />
        </div>
      </div>
    </header>
  );
}
