'use client';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import Spinner from '@/components/ui/spinner';
import { logout } from '@/actions/auth.action';
import { Logout } from 'vercel-geist-icons';
import { redirect } from 'next/navigation';
import { loginRoute } from '@/routes';

export default function DropdownLogout() {
  const [isPending, setIsPending] = useState(false);

  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={async () => {
        setIsPending(true);
        await logout();
        setIsPending(false);
        redirect(loginRoute);
      }}
      className="justify-between"
    >
      Log out {isPending ? <Spinner /> : <Logout />}
    </DropdownMenuItem>
  );
}
