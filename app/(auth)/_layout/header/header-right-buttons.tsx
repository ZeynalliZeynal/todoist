"use client";

import Button from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function HeaderRightButtons() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3">
      <Button href="/contact" primary className="bg-transparent">
        Contact
      </Button>
      <Button
        href={`/auth/${pathname.includes("login") ? "signup" : "login"}`}
        primary
        className="bg-transparent"
      >
        {pathname.includes("login") ? "Sign up" : "Log in"}
      </Button>
    </div>
  );
}
