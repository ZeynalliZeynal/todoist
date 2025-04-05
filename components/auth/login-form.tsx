'use client';

import { useEffect, useState } from 'react';
import LoginSendEmail from '@/components/auth/login-send-email';
import LoginOtpForm from '@/components/auth/login-otp-form';
import { useSearchParams } from 'next/navigation';

export type Pages = 'form' | 'otp';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [page, setPage] = useState<Pages>('form');
  const [otp, setOtp] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('token')) setPage('otp');
  }, [searchParams]);

  return page === 'form' ? (
    <LoginSendEmail
      email={email}
      onPageChange={setPage}
      onEmailChange={setEmail}
    />
  ) : page === 'otp' ? (
    <LoginOtpForm
      otp={otp}
      onOtpChange={setOtp}
      email={email}
      goBack={() => setPage('form')}
    />
  ) : null;
}
