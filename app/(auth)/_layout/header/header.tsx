import { Logo, LogoFull } from '@/components/ui/icons/logo';
import Link from 'next/link';
import { DefaultLink } from '@/components/ui/button';

export function HeaderLogin() {
  return (
    <header className="max-w-full">
      <div className="h-16 mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-3">
          <DefaultLink href="/contact" variant="outline">
            Contact
          </DefaultLink>
          <DefaultLink href="/auth/signup" className="bg-transparent">
            Sign up
          </DefaultLink>
        </div>
      </div>
    </header>
  );
}

export function HeaderSignup() {
  return (
    <header className="max-w-screen-full w-full mx-auto sticky top-0">
      <div className="h-16 mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <LogoFull />
        </Link>
        <div className="flex items-center gap-3">
          <DefaultLink href="/contact" variant="secondary">
            Contact
          </DefaultLink>
          <DefaultLink href="/auth/login" className="bg-transparent">
            Log in
          </DefaultLink>
        </div>
      </div>
    </header>
  );
}
