import { format } from 'date-fns';
import SessionMenu from '@/app/(dashboard)/dashboard/account/sessions/_components/session-menu';
import React from 'react';
import MouseTooltip from '@/components/ui/mouse-tooltip';

export default function SessionTableRow({ session }: { session: Session }) {
  console.log(session);
  return (
    <MouseTooltip
      tooltipContent="Current session"
      condition={session.current}
      className="flex items-stretch divide-x hover:bg-gray-alpha-100 transition"
    >
      <div className="grid flex-1 grid-cols-4 text-center divide-x">
        <div className="p-4 flex items-center justify-center">
          {format(session.createdAt, 'dd, MMMM yyyy')}
        </div>
        <div className="p-4 flex items-center justify-center">
          {session.userAgent.client?.name || 'unknown'}
        </div>
        <div className="p-4 flex items-center justify-center">
          {session.userAgent.os
            ? `${session.userAgent.os.name + ' | ' + session.userAgent.os.platform}`
            : 'unknown'}
        </div>
        <div className="p-4 flex items-center justify-center">
          {session.userAgent.device
            ? `${session.userAgent.device?.type} | ${session.userAgent.device?.brand}`
            : 'unknown'}
        </div>
      </div>
      <div className="p-4 flex items-center justify-center">
        {!session.current ? (
          <SessionMenu id={session._id} />
        ) : (
          <div className="size-8" />
        )}
      </div>
    </MouseTooltip>
  );
}
