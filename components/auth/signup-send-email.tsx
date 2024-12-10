import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import { Pages } from "@/components/auth/signup-form";

export default function SignupSendEmail({
  email,
  onEmailChange,
  onPageChange,
}: {
  email: string;
  onEmailChange: Dispatch<SetStateAction<string>>;
  onPageChange: Dispatch<SetStateAction<Pages>>;
}) {
  return (
    <form
      className="px-20 pt-16 pb-12"
      onSubmit={(event) => {
        event.preventDefault();
        onPageChange("otp");
      }}
    >
      <section className="h-full flex flex-col justify-center gap-8 w-full opacity-0 animate-fade-in delay-100">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl">Sign up for Todoist</h1>
        </div>
        <div className="text-gray-900 flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <Input
              type="email"
              name="email"
              size="large"
              placeholder="Your Email"
              autoFocus
              required
              value={email}
              onChange={({ target }) => onEmailChange(target.value)}
            />
            <Button
              type="submit"
              size="md"
              disabled={!email}
              variant="secondary"
              className="w-full"
            >
              Continue
            </Button>
          </div>
        </div>
      </section>
    </form>
  );
}
