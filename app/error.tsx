'use client';

import { ButtonLink } from '@/components/ui/button';
import { PiWarningOctagonFill } from 'react-icons/pi';
import { CornerDownLeft } from 'vercel-geist-icons';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.error(error);
  return (
    <div className="center fixed inset-0 z-50 bg-background-200 font-geist-mono rounded-xl p-6">
      <div className="space-y-4">
        <PiWarningOctagonFill className="mx-auto" size={64} />
        <div className="flex flex-col gap-10 items-center">
          <div className="text-3xl font-semibold">Something went wrong!</div>
          {/* <p className="text-gray-900">{message}</p> */}
        </div>
        <div className="flex items-center gap-3">
          <ButtonLink
            href="/dashboard"
            className="flex-1"
            size="lg"
            prefix={<CornerDownLeft />}
          >
            Go to home page
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
