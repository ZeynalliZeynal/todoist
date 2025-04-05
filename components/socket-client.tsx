'use client';

import { useSocket } from '@/hooks/use-socket';
import { useEffect } from 'react';
import { useUserStore } from '@/lib/stores/user-store';

export function SocketClient({ userId }: { userId?: string }) {
  const socket = useSocket({ userId });

  const { setOffline, setOnline } = useUserStore();

  useEffect(() => {
    if (!socket) return;

    socket.on('onlineUsers', (ids: string[]) => {
      ids.forEach((id) => {
        setOnline(id);
      });
    });

    socket.on('user:status:change', ({ userId, online }) => {
      if (online) {
        setOnline(userId);
      } else {
        setOffline(userId);
      }
    });

    return () => {
      socket.off('user:status:change');
    };
  }, [setOffline, setOnline, socket]);
  return null;
}
