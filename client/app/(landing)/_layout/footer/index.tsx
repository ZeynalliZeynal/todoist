import { footerLinks } from "@/constants";
import Link from "next/link";
import { LogoFull } from "@/components/ui/icons/logo";
import ThemeSwitch from "@/components/ui/theme";

export default function Footer() {
  return (
    <footer className="max-w-full border-t py-12">
      <div className="max-w-5xl mx-auto flex">
        <div className="grid grid-cols-3 flex-1">
          {footerLinks.map(({ title, children }, index) => (
            <div key={index} className="">
              <h2 className="text-sm my-3 text-foreground font-semibold">
                {title}
              </h2>
              <ul>
                {children.map(({ name, href }, index) => (
                  <li className="py-1.5 h-8" key={index}>
                    <Link
                      href={href}
                      className="text-gray-900 hover:text-foreground transition"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between items-end">
          <Link href="/">
            <LogoFull className="h-8" />
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}
