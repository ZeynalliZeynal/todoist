import Link from 'next/link';
import { Logo } from '@/components/ui/icons/logo';
import ThemeSwitch from '@/components/ui/theme';

export default function DashboardFooter() {
  return (
    <footer className="border-t bg-background-100 mt-12">
      <div className="max-w-screen-dashboard-sub mx-auto p-6 pt-5">
        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <Link href="/dashboard">
                <Logo className="size-4" />
              </Link>
              <Link
                href="/"
                className="text-accent-500 hover:text-foreground transition"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="text-accent-500 hover:text-foreground transition"
              >
                Contact
              </Link>
              <Link
                href="/dashboard"
                className="text-accent-500 hover:text-foreground transition"
              >
                Dashboard
              </Link>
            </div>
            <ThemeSwitch />
          </div>
          <p className="text-xs text-accent-500">© 2025, Zeynalli Zeynal.</p>
        </div>
      </div>
    </footer>
  );
}
