import Link from 'next/link';
import { dashboardRoute } from '@/routes';
import { CornerDownLeft } from 'vercel-geist-icons';
import { cn } from '@/lib/utils';

export default function PageHeader({
  children,
  sub,
  href,
  hrefLabel,
  goToLink,
}: {
  children: React.ReactNode;
  sub?: boolean;
  href?: string;
  hrefLabel?: string;
  goToLink?: boolean;
}) {
  return (
    <section className="border-b h-[120px]">
      <div
        className={cn(
          'mx-auto justify-center px-6 flex flex-col gap-4 h-full',
          sub ? 'max-w-screen-dashboard-sub' : 'max-w-screen-dashboard',
        )}
      >
        <h1 className="text-3xl font-medium">{children}</h1>
        {goToLink && (
          <Link
            href={href && hrefLabel ? href : dashboardRoute}
            className="flex w-fit items-center gap-2 text-gray-900 hover:text-foreground transition"
          >
            <CornerDownLeft />
            {href && hrefLabel ? hrefLabel : 'Go to Projects'}
          </Link>
        )}
      </div>
    </section>
  );
}
