'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';
import Spinner from '@/components/ui/spinner';

export default function SubmitButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="secondary"
      size="md"
      {...props}
      disabled={pending}
      type="submit"
      prefix={pending ? <Spinner size={16} /> : props.prefix}
    >
      {children}
    </Button>
  );
}
