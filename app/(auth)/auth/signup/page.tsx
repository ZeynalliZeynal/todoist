import Footer from '@/app/(auth)/_layout/footer/footer';
import { HeaderSignup } from '@/app/(auth)/_layout/header/header';
import { getPlans } from '@/actions/plan.action';
import SignupForm from '@/components/auth/signup-form';

export default async function Page() {
  const data = await getPlans();

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <HeaderSignup />
        <div className="flex flex-col justify-center flex-1">
          <SignupForm plans={data?.plans} />
        </div>
      </div>
      <Footer />
    </>
  );
}
