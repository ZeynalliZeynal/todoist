"use client";

import Button from "@/components/ui/button";

export default function NavRight() {
  return (
    <div className="flex items-center gap-3">
      <Button primary size="sm" href="/auth/login">
        Log In
      </Button>
      <Button primary size="sm" href="/contact">
        Contact
      </Button>
      <Button primary size="sm" href="/auth/signup">
        Sign up
      </Button>
    </div>
  );
}
