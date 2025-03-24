import SessionsSection from '@/app/(dashboard)/dashboard/account/sessions/_sectins/sessions-section';
import Skeleton from '@/components/ui/skeleton';
import { Suspense } from 'react';

export default async function SessionsPage() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex flex-col gap-3">
            <Skeleton className="h-12 rounded-md" />
            <div className="flex gap-3">
              <Skeleton className="h-16 flex-1 rounded-md" />
              <Skeleton className="size-16 rounded-md" />
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-16 flex-1 rounded-md" />
              <Skeleton className="size-16 rounded-md" />
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-16 flex-1 rounded-md" />
              <Skeleton className="size-16 rounded-md" />
            </div>
          </div>
        }
      >
        <SessionsSection />
      </Suspense>
    </>
  );
}
