"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu/dropdown-menu";
import { LuLogOut } from "react-icons/lu";
import { useState } from "react";
import { logout } from "@/actions/auth.actions";
import Spinner from "@/components/ui/spinner";
import LoadingScreen from "@/components/loading-screen";

export default function DropdownLogout() {
  const [isPending, setIsPending] = useState(false);

  if (isPending) return <LoadingScreen>Logging out</LoadingScreen>;
  return (
    <DropdownMenuItem
      suffix={isPending ? <Spinner /> : <LuLogOut />}
      disabled={isPending}
      onClick={async () => {
        setIsPending(true);
        await logout();
        setIsPending(false);
      }}
    >
      Log out
    </DropdownMenuItem>
  );
}
