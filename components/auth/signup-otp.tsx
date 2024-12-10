import { Dispatch, SetStateAction } from "react";
import { Pages } from "@/components/auth/signup-form";
import { cn } from "@/utils/lib";
import Link from "next/link";
import { OtpInput } from "@/components/ui/input";

export default function SignupOtp({
  email,
  otp,
  onOtpChange,
  onPageChange,
}: {
  email: string;
  otp: string;
  onOtpChange: Dispatch<SetStateAction<string>>;
  onPageChange: Dispatch<SetStateAction<Pages>>;
}) {
  return (
    <form
      className="px-20 pt-16 pb-12"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <section className="h-full flex flex-col justify-center gap-8 w-full opacity-0 animate-fade-in delay-100">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl">Sign up for Todoist</h1>
        </div>
        <p className="text-gray-900 text-base text-center">
          If you don&#39;t have an account yet, we have sent a code to{" "}
          <span className="font-medium">{email}</span>. Enter it below.
        </p>
        <div className="text-gray-900 flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <OtpInput value={otp} onValueChange={onOtpChange} />
            <Link
              href="/auth/signup"
              className={cn(
                "text-base text-blue-900 font-medium mx-auto relative w-fit mt-4",
                "after:absolute after:w-full after:h-px after:bg-blue-900 after:-bottom-px after:left-0 after:opacity-0 hover:after:opacity-100 after:transition",
              )}
              onClick={() => onPageChange("form")}
            >
              ← Back
            </Link>
          </div>
        </div>
      </section>
    </form>
  );
}
