import Spinner from '@/components/ui/spinner';

export default function LoadingDashboard() {
  return (
    <div className="w-screen h-screen fixed inset-0 overflow-hidden center bg-background-100">
      <div className="flex flex-col justify-center items-center gap-3 text-2xl">
        Loading your data...
        <Spinner size={32} />
      </div>
    </div>
  );
}
