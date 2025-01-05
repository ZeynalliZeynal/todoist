'use client';

import { useState } from 'react';
import SignupSelectPlans from '@/components/auth/signup-select-plans';
import SignupSendEmail from '@/components/auth/signup-send-email';
import SignupOtp from '@/components/auth/signup-otp';

export type Pages = 'plans' | 'form' | 'otp';

export default function SignupForm({ plans }: { plans: Plan[] }) {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [page, setPage] = useState<Pages>('plans');
  const [otp, setOtp] = useState('');

  return (
    <main className="max-w-[550px] w-full mx-auto flex rounded-xl flex-col justify-center border bg-background-100">
      {page === 'plans' ? (
        <SignupSelectPlans
          plans={plans}
          selected={selectedPlan}
          onPlanSelect={setSelectedPlan}
          name={name}
          onNameChange={setName}
          onPageChange={setPage}
        />
      ) : page === 'form' ? (
        <SignupSendEmail
          name={name}
          email={email}
          onEmailChange={setEmail}
          onPageChange={setPage}
        />
      ) : (
        <SignupOtp
          plan={selectedPlan}
          otp={otp}
          onOtpChange={setOtp}
          onPageChange={setPage}
          email={email}
        />
      )}
    </main>
  );
}
