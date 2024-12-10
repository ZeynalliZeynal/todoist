import { sendLoginEmail } from "@/actions/auth.actions";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { LuMail } from "react-icons/lu";
import Spinner from "@/components/ui/spinner";
import { Dispatch, SetStateAction, useState, useTransition } from "react";
import { Pages } from "@/components/auth/login-form";
import ErrorCodes from "@/utils/error-codes";

export default function LoginSendEmail({
  email,
  onPageChange,
  onEmailChange,
}: {
  email: string;
  onPageChange: Dispatch<SetStateAction<Pages>>;
  onEmailChange: Dispatch<SetStateAction<string>>;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  return (
    <form
      className="space-y-3"
      onSubmit={(event) => {
        event.preventDefault();
        startTransition(async () => {
          const res = await sendLoginEmail({ email });
          if (res.errorCode === ErrorCodes.EMAIL_VERIFICATION_CONFLICT)
            setError(res.message);
          else onPageChange("otp");
        });
      }}
    >
      <h1 className="text-3xl mb-8">Log in to Todoist</h1>
      {error && (
        <div className="rounded-md bg-red-200 text-red-900 px-3 py-2 text-center">
          {error}
        </div>
      )}
      <Input
        size="large"
        placeholder="Email"
        required
        autoFocus
        type="email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
      />

      <Button
        variant="secondary"
        type="submit"
        prefix={!isPending && <LuMail />}
        disabled={isPending}
        size="lg"
        className="w-full rounded-lg"
      >
        {isPending ? <Spinner size={24} /> : "Continue with Email"}
      </Button>
    </form>
  );
}
