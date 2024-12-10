import Link from "next/link";
import LoginForm from "@/components/auth/login-form";
import { HeaderLogin } from "@/app/(auth)/_layout/header/header";
import Footer from "@/app/(auth)/_layout/footer/footer";

export default function Page() {
  return (
    <div className="bg-background-200">
      <div className="flex min-h-screen flex-col">
        <HeaderLogin />
        <main className="flex-1 max-w-full flex">
          <div className="pt-8 flex items-center flex-col flex-grow">
            <section className="w-80 mx-auto h-full flex flex-col justify-center">
              <div className="space-y-4 text-center">
                <LoginForm />
              </div>
            </section>
            <section className="w-full border-b border-t bg-background-100">
              <div className="flex items-center p-7 min-h-24 justify-center w-full">
                <Link
                  href="/auth/signup"
                  className="text-base text-blue-600 font-semibold hover:underline"
                >
                  Don&apos;t have an account? Sign Up
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
