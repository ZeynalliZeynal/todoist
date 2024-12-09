import Footer from "@/app/(auth)/_layout/footer/footer";
import { HeaderSignup } from "@/app/(auth)/_layout/header/header";
import { getPlans } from "@/actions/plan.action";
import SignupForm from "@/components/auth/signup-select-plan";
import Link from "next/link";
import { FiArrowRightCircle } from "react-icons/fi";

export default async function Page() {
  const data = await getPlans();

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <HeaderSignup />
        <div className="flex flex-col justify-center flex-1">
          <main className="max-w-[550px] w-full mx-auto flex rounded-xl flex-col justify-center border bg-background-200">
            <form className="px-20 pt-16 pb-12">
              <section className="h-full flex flex-col justify-center gap-8 w-full opacity-0 animate-fade-in delay-100">
                <div className="space-y-4 text-center">
                  <h1 className="text-3xl">
                    Your first step to staying organized is just a sign-up away.
                  </h1>
                </div>
                <SignupForm plans={data.plans} />
              </section>
            </form>
            <div className="text-center text-gray-900 text-paragraph gap-1 px-4 py-2 m-3 h-12 flex items-center justify-center opacity-0 animate-fade-in delay-500">
              By joining, you agree to our
              <Link href="#" className="text-foreground">
                <strong className="font-normal">Terms of Service</strong>
              </Link>
              and
              <Link href="#" className="text-foreground">
                <strong className="font-normal">Privacy Policy</strong>
              </Link>
            </div>
            <Link
              href="/"
              className="text-center rounded-md text-purple-900 bg-purple-200 gap-1.5 px-4 py-2 m-3 h-12 flex items-center justify-center opacity-0 animate-fade-in delay-500"
            >
              Have a complex company use case? Get Enterprise grade assistance
              <FiArrowRightCircle size={16} />
            </Link>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
