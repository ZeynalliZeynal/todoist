import { getSessions } from '@/actions/session.action';
import {
  BrowserSafari,
  Clock,
  DesktopDevice,
  DeviceAlternate,
} from 'vercel-geist-icons';
import SessionTableRow from '@/app/(dashboard)/dashboard/account/sessions/_components/session-table-row';

export default async function SessionsSection() {
  const data = await getSessions();

  const sessions = data?.sessions;

  return (
    <section className="bg-background-100 rounded-md border">
      <div className="flex flex-col divide-y">
        <div className="flex items-stretch bg-background-200 rounded-md divide-x">
          <div className="grid grid-cols-4 flex-1 text-gray-900 text-center divide-x">
            <div className="px-4 py-2 flex items-center justify-center gap-2">
              <Clock />
              Date
            </div>
            <div className="px-4 py-2 flex items-center justify-center gap-2">
              <BrowserSafari />
              Browser
            </div>
            <div className="px-4 py-2 flex items-center justify-center gap-2">
              <DeviceAlternate />
              OS
            </div>
            <div className="px-4 py-2 flex items-center justify-center gap-2">
              <DesktopDevice />
              Device
            </div>
          </div>
          <div className="px-4 py-2">
            <div className="size-8" />
          </div>
        </div>
        {sessions?.map((session: Session) => (
          <SessionTableRow key={session._id} session={session} />
        ))}
      </div>
    </section>
  );
}
