'use client';

import { useSocket } from '@/hooks/use-socket';

export function SocketClient({ userId }: { userId: string }) {
  useSocket({ userId });
  return null;
}
