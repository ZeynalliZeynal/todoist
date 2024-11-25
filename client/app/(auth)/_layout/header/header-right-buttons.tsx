"use client";

import Button from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function HeaderRightButtons() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3">
      <Button href="/contact" primary className="bg-background-200">
        Contact
      </Button>
      <Button
        href={`/auth/${pathname.includes("log-in") ? "sign-up" : "log-in"}`}
        primary
        className="bg-background-200"
      >
        {pathname.includes("log-in") ? "Sign up" : "Log in"}
      </Button>
    </div>
  );
}
