'use client';

import { useInternetConnection } from '@/hooks/use-internet-connection';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function CheckInternetConnection() {
  const isOnline = useInternetConnection();

  useEffect(() => {
    if (!isOnline) {
      toast.error('You are offline. 😭');
    }
  }, [isOnline]);

  return null;
}
