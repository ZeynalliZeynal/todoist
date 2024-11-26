import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { LuMail } from "react-icons/lu";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="w-80 mx-auto h-full flex flex-col justify-center">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl">Log in to Todoist</h1>
          <form className="space-y-3">
            <Input size="large" placeholder="Email" required type="email" />
            <Input
              size="large"
              placeholder="Password"
              required
              type="password"
            />
            <Button
              type="submit"
              prefix={<LuMail />}
              size="lg"
              className="w-full rounded-lg"
            >
              Continue with Email
            </Button>
          </form>
        </div>
      </section>
      <section className="w-full border-b border-t bg-background-100">
        <div className="flex items-center p-7 min-h-24 justify-center w-full">
          <Link
            href="/auth/sign-up"
            className="text-base text-blue-600 font-semibold hover:underline"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </div>
      </section>
    </>
  );
}
