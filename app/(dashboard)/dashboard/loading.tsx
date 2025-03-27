import Spinner from '@/components/ui/spinner';

export default function LoadingDashboard() {
  return (
    <div className="min-w-screen min-h-screen fixed inset-0 overflow-hidden animate-in fade-in z-50 center bg-background-100">
      <div className="flex flex-col justify-center items-center gap-3 text-2xl">
        Loading your data...
        <Spinner size={32} />
      </div>
    </div>
  );
}
