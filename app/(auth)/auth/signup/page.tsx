import Footer from "@/app/(auth)/_layout/footer/footer";
import { HeaderSignup } from "@/app/(auth)/_layout/header/header";
import { getPlans } from "@/actions/plan.action";
import SignupForm from "@/components/auth/signup-select-plan";

export default async function Page() {
  const data = await getPlans();

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <HeaderSignup />
        <div className="flex flex-col justify-center flex-1">
          <main className="max-w-xl w-full mx-auto px-20 pt-16 pb-12 flex rounded-xl justify-center border bg-background-200">
            <section className="h-full flex flex-col justify-center gap-8 w-full">
              <div className="space-y-4 text-center">
                <h1 className="text-3xl">Sign up to Todoist</h1>
              </div>
              <SignupForm plans={data.plans} />
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
