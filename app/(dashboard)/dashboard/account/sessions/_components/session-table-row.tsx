import { format } from 'date-fns';
import SessionMenu from '@/app/(dashboard)/dashboard/account/sessions/_components/session-menu';
import React from 'react';
import MouseTooltip from '@/components/ui/mouse-tooltip';

export default function SessionTableRow({ session }: { session: Session }) {
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
          {session.userAgent.browser}
        </div>
        <div className="p-4 flex items-center justify-center">
          {session.userAgent.os}
        </div>
        <div className="p-4 flex items-center justify-center">
          {session.userAgent.device}
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
