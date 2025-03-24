import Skeleton from '@/components/ui/skeleton';

export default function SettingsPageLoading() {
  return (
    <div className="space-y-8">
      <div className="rounded-xl border p-6 space-y-3">
        <Skeleton className="h-7 w-1/3" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-14 mt-3" />
      </div>
      <div className="rounded-xl border p-6 space-y-3">
        <Skeleton className="h-7 w-1/3" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-14 mt-3" />
      </div>
    </div>
  );
}
