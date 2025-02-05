'use client';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { LuLogOut } from 'react-icons/lu';
import { useState } from 'react';
import Spinner from '@/components/ui/spinner';
import { logout } from '@/actions/auth.actions';

export default function DropdownLogout() {
  const [isPending, setIsPending] = useState(false);

  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={async () => {
        setIsPending(true);
        await logout();
        setIsPending(false);
      }}
      suffix={isPending ? <Spinner /> : <LuLogOut />}
    >
      Log out
    </DropdownMenuItem>
  );
}
