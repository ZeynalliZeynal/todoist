import Link from 'next/link';
import { Logo } from '@/components/ui/icons/logo';
import ThemeSwitch from '@/components/ui/theme';
import { footerLinks } from '@/constants';

export default function Footer() {
  return (
    <footer className="border-t bg-background-200 mt-12">
      <div className="max-w-screen-dashboard-sub mx-auto p-6 pt-5">
        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center sm:flex-col sm:items-start">
              <Link href="/">
                <Logo className="size-4 sm:size-6" />
              </Link>
              <div className="flex items-center gap-4 sm:*:w-1/2 flex-wrap">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-accent-500 hover:text-foreground transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <ThemeSwitch />
          </div>
          <p className="text-xs text-accent-500">© 2025, Zeynalli Zeynal.</p>
        </div>
      </div>
    </footer>
  );
}
