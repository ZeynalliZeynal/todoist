"use client";

import Button from "@/components/ui/button";
import Tooltip from "@/components/ui/tooltip";

export default function NavRight() {
  return (
    <div className="flex items-center gap-3">
      <Tooltip>
        <Tooltip.Trigger>
          <Button primary size="sm" href="/auth/login">
            Log In
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Log in</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Button primary size="sm" href="/contact">
            Contact
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Contact</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Button primary size="sm" href="/auth/signup">
            Sign up
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Sign up</Tooltip.Content>
      </Tooltip>
    </div>
  );
}
