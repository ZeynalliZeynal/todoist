import { Logo } from '@/components/ui/icons/logo';
import Link from 'next/link';
import ThemeSwitch from '@/components/ui/theme';
import { IoLogoGithub } from 'react-icons/io5';
import { footerLinks } from '@/constants';
import { appConfig } from '@/config/app.config';

export default function Footer() {
  return (
    <footer className="px-6 pt-7 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hover:!text-foreground text-gray-900 transition"
              title="Home"
              aria-label="Home"
            >
              <Logo className="size-5 text-inherit" />
            </Link>
            <nav className="flex items-center justify-between text-gray-900">
              <ul className="flex items-center justify-between flex-1 gap-2">
                <li className="flex items-center">
                  <Link
                    href={appConfig.links.github}
                    className="hover:text-foreground transition"
                    aria-label="Github repo"
                    title="Github repo"
                  >
                    <IoLogoGithub size={20} />
                  </Link>
                </li>
                {footerLinks.map((item, index) => (
                  <li key={index} className="px-2 leading-5 capitalize">
                    <Link
                      href={item.href}
                      className="hover:text-foreground transition-colors"
                    >
                      {item.label}
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
            @ {new Date().getFullYear()}, {appConfig.author}.
          </span>
        </div>
      </div>
    </footer>
  );
}
