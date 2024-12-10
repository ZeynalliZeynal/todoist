"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu/dropdown-menu";
import { LuLogOut } from "react-icons/lu";
import { useTransition } from "react";
import Spinner from "@/components/ui/spinner";
import { logout } from "@/actions/auth.actions";

export default function DropdownLogout() {
  const [isPending, startTransition] = useTransition();

  return (
    <DropdownMenuItem
      suffix={isPending ? <Spinner /> : <LuLogOut />}
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await logout();
        })
      }
    >
      Log out
    </DropdownMenuItem>
  );
}
