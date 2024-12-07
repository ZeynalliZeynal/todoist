"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu/dropdown-menu";
import { LuLogOut } from "react-icons/lu";
import { useTransition } from "react";
import { logout } from "@/actions/auth.actions";
import Spinner from "@/components/ui/spinner";

export default function DropdownLogout() {
  const [isPending, startTransition] = useTransition();
  const handleClick = () => {
    startTransition(async () => {
      await logout();
    });
  };
  return (
    <DropdownMenuItem
      suffix={isPending ? <Spinner /> : <LuLogOut />}
      disabled={isPending}
      onClick={handleClick}
    >
      Log out
    </DropdownMenuItem>
  );
}
