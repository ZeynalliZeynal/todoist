import { OtpInput } from "@/components/ui/input";
import { Dispatch, SetStateAction, useState, useTransition } from "react";
import { login } from "@/actions/auth.actions";
import { useRouter } from "next/navigation";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import Link from "next/link";
import { cn } from "@/utils/lib";
import LoadingScreen from "@/components/loading-screen";

export default function LoginOtpForm({
  otp,
  email,
  onOtpChange,
  goBack,
}: {
  otp: string;
  email: string;
  onOtpChange: Dispatch<SetStateAction<string>>;
  goBack: () => void;
}) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  if (isPending) return <LoadingScreen>Redirecting</LoadingScreen>;
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl mb-4">Verification</h1>
      <div className="flex flex-col gap-5">
        <p className="text-sm">
          If you have an account, we have sent a code to <b>{email}</b>. Enter
          it below.
        </p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <OtpInput
            value={otp}
            variant="cubes"
            onValueChange={onOtpChange}
            onComplete={() =>
              startTransition(async () => {
                const res = await login({ otp });
                if (res.status === "fail")
                  setError(
                    "The entered code is incorrect. Please try again and check for typos.",
                  );
                else if (res.status === "success") router.push("/");
              })
            }
          />
        </form>
        {error && (
          <div className="flex text-red-900 items-start gap-2">
            <MdOutlineReportGmailerrorred size={24} />
            {error}
          </div>
        )}
        <Link
          href="/auth/login"
          className={cn(
            "text-base text-blue-900 font-medium mx-auto relative w-fit",
            "after:absolute after:w-full after:h-px after:bg-blue-900 after:-bottom-px after:left-0 after:opacity-0 hover:after:opacity-100 after:transition",
          )}
          onClick={goBack}
        >
          ← Back
        </Link>
      </div>
    </div>
  );
}
