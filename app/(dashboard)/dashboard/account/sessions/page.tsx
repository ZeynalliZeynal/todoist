import SessionsSection from '@/app/(dashboard)/dashboard/account/sessions/_sections/sessions-section';
import Skeleton from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sessions',
  description: 'Update your sessions here.',
};

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
