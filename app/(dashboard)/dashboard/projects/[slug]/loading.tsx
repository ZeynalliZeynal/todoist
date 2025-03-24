import Skeleton from '@/components/ui/skeleton';
import { dashboardRoute } from '@/routes';
import Link from 'next/link';
import { CornerDownLeft } from 'vercel-geist-icons';

export default function ProjectLoading() {
  return (
    <div>
      <section className="border-b h-[120px]">
        <div className="max-w-screen-dashboard mx-auto justify-center px-6 flex flex-col gap-4 h-full">
          <Skeleton className="h-12" />
          <Link
            href={dashboardRoute}
            className="flex w-fit items-center gap-2 text-gray-900 hover:text-foreground transition"
          >
            <CornerDownLeft /> Go to Projects
          </Link>
        </div>
      </section>
      <section className="max-w-screen-dashboard mx-auto px-6">
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pr-3">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-28" />
            </div>
            <div className="flex flex-col-reverse gap-3 max-h-dvh overflow-auto pr-3">
              <Skeleton className="h-48" />
              <Skeleton className="h-48" />
              <Skeleton className="h-48" />
              <Skeleton className="h-48" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pr-3">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-28" />
            </div>
            <div className="flex flex-col-reverse gap-3 max-h-dvh overflow-auto pr-3">
              <Skeleton className="h-48" />
              <Skeleton className="h-48" />
              <Skeleton className="h-48" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pr-3">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-28" />
            </div>
            <div className="flex flex-col-reverse gap-3 max-h-dvh overflow-auto pr-3">
              <Skeleton className="h-48" />
              <Skeleton className="h-48" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pr-3">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-28" />
            </div>
            <div className="flex flex-col-reverse gap-3 max-h-dvh overflow-auto pr-3">
              <Skeleton className="h-48" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
