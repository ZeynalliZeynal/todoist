import Button from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { Pages } from "@/components/auth/signup-form";
import { cn } from "@/utils/lib";

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
  const [currentIndex, setCurrentIndex] = useState(-1);
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
            <div className="relative w-fit grid grid-cols-6 border mx-auto rounded-md text-foreground">
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative size-16 border-r first:rounded-l-md [&:nth-child(6)]:rounded-r-md [&:nth-child(6)]:border-r-0 flex items-center justify-center text-xl",
                    index === otp.split("").length && "ring-blue-700 ring-2",
                  )}
                >
                  {index === otp.split("").length ? (
                    <span className="absolute w-px h-1/3 bg-foreground rounded-md animate-caret" />
                  ) : (
                    otp.split("").at(index)?.slice(-1)
                  )}
                </div>
              ))}
              <div className="absolute inset-0">
                <input
                  inputMode="numeric"
                  name="digits"
                  pattern="^\d+$"
                  maxLength={6}
                  required
                  className="size-full focus-visible:outline-0 -tracking-[0.5em] text-transparent bg-transparent caret-transparent selection:text-transparent selection:bg-transparent"
                  value={otp}
                  onChange={({ target }) => {
                    if (!isNaN(Number(target.value))) {
                      onOtpChange(target.value);
                    }
                  }}
                />
              </div>
            </div>
            <Button
              type="submit"
              size="md"
              disabled={!otp}
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
