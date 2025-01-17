import { Dispatch, SetStateAction, useState, useTransition } from 'react';
import { Pages } from '@/components/auth/signup-form';
import { cn } from '@/utils/lib';
import Link from 'next/link';
import { OtpInput } from '@/components/ui/input';
import { signup } from '@/actions/auth.actions';
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { Spinner } from '@everest-ui/react';

export default function SignupOtp({
  plan,
  email,
  otp,
  onOtpChange,
  onPageChange,
}: {
  plan: string;
  email: string;
  otp: string;
  onOtpChange: Dispatch<SetStateAction<string>>;
  onPageChange: Dispatch<SetStateAction<Pages>>;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState('');
  const router = useRouter();

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
          If you don&#39;t have an account yet, we have sent a code to{' '}
          <span className="font-medium">{email}</span>. Enter it below.
        </p>
        <div className="text-gray-900 flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <OtpInput
              value={otp}
              onValueChange={onOtpChange}
              disabled={isPending}
              onComplete={async () => {
                const res = await signup({ plan, otp });
                startTransition(() => {
                  if (res.status === 'fail')
                    setError(
                      'The entered code is incorrect. Please try again and check for typos.'
                    );
                  else if (res.status === 'success') router.push('/');
                });
              }}
            />
            {error && (
              <div className="flex text-red-900 items-start gap-2">
                <MdOutlineReportGmailerrorred size={24} />
                {error}
              </div>
            )}
            {isPending && (
              <p className="text-gray-700 font-medium text-base flex justify-center items-center gap-3 mt-2">
                <Spinner /> Verifying
              </p>
            )}
            <Link
              href="/auth/signup"
              className={cn(
                'text-base text-blue-900 font-medium mx-auto relative w-fit mt-4',
                'after:absolute after:w-full after:h-px after:bg-blue-900 after:-bottom-px after:left-0 after:opacity-0 hover:after:opacity-100 after:transition'
              )}
              onClick={() => onPageChange('form')}
            >
              ← Back
            </Link>
          </div>
        </div>
      </section>
    </form>
  );
}
