import { Logo } from "@/components/ui/icons/logo";
import Link from "next/link";
import ThemeSwitch from "@/components/ui/theme";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
import { authFooterLinks } from "@/constants";

export default function Footer() {
  return (
    <footer className="px-6 pt-7 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link href="/">
              <Logo />
            </Link>
            <nav className="flex items-center justify-between text-gray-900">
              <ul className="flex items-center justify-between flex-1">
                <li className="flex items-center gap-5">
                  <Link href="#" className="hover:text-foreground transition">
                    <IoLogoGithub size={20} />
                  </Link>
                  <Link href="#" className="hover:text-foreground transition">
                    <IoLogoTwitter size={20} />
                  </Link>
                </li>
                {authFooterLinks.map((item, index) => (
                  <li key={index} className="px-2 leading-5 capitalize">
                    <Link
                      href={item.href}
                      className="hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="p-2 inline-flex items-center gap-1.5 hover:bg-gray-300 transition-colors rounded-md"
            >
              <span className="size-2 rounded-full bg-blue-600" />
              <span className="text-blue-600">All systems normal</span>
            </Link>
            <ThemeSwitch />
          </div>
        </div>
        <div className="mt-8">
          <span className="text-gray-900 text-xs">
            @ {new Date().getFullYear()}, Todoist NEXT Inc.
          </span>
        </div>
      </div>
    </footer>
  );
}
