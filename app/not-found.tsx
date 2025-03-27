'use client';

import { LogoFull } from '@/components/ui/icons/logo';
import { usePathname } from 'next/navigation';
import { ButtonLink } from '@/components/ui/button';
import { Layout } from 'vercel-geist-icons';

export default function NotFoundPage() {
  const pathname = usePathname();

  return (
    <div className="center w-screen h-screen bg-background-100">
      <div className="flex flex-col xl:gap-12 py-24 lg:gap-12 md:gap-10 sm:gap-6 max-w-5xl mx-auto rounded-md items-center border-dashed border w-full border-gray-400">
        <LogoFull className="h-16" />
        <h1 className="lg:text-7xl lg:font-semibold md:text-7xl md:font-semibold text-5xl font-semibold">
          404
        </h1>
        <div className="space-y-4">
          <p className="leading-6 text-foreground font-geist-mono">
            <code>{pathname}</code> page cannot be found. This page is either
            still under construction or doesn&#39;t exist.
          </p>
          <ButtonLink
            href="/dashboard"
            size="lg"
            variant="secondary"
            className="rounded-full mx-auto"
            prefix={<Layout />}
          >
            Go to dashboard
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
