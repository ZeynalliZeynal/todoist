'use client';

import { Button, ButtonLink } from '@/components/ui/button';
import { Layout, RefreshClockwise } from 'vercel-geist-icons';
import { PiWarningOctagonFill } from 'react-icons/pi';

export default function ProjectSettingsError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const message = error.message.includes(
    "Cannot read properties of undefined (reading 'id')",
  )
    ? 'Current project just updated. It has been either deleted or updated.'
    : 'This might be a development error. Going to the dashboard might solve it.';

  return (
    <div className="center h-full m-6 bg-background-100 font-geist-mono rounded-xl border p-6">
      <div className="space-y-4">
        <PiWarningOctagonFill className="mx-auto" size={64} />
        <div className="flex flex-col gap-10 items-center">
          <div className="text-3xl font-semibold">Something went wrong!</div>
          <p className="text-gray-900">{message}</p>
        </div>
        <div className="flex items-center gap-3">
          <ButtonLink
            href="/dashboard"
            className="flex-1"
            size="lg"
            prefix={<Layout />}
          >
            Go to dashboard
          </ButtonLink>
          {!error.message.includes(
            "Cannot read properties of undefined (reading 'id')",
          ) && (
            <Button size="lg" iconOnly className="shrink-0">
              <RefreshClockwise />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
