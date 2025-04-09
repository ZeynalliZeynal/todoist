'use client';

import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

export function useSocket({ userId }: { userId?: string }): Socket | null {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (userId && !socketRef.current) {
      const socketInstance = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
        transports: ['websocket'],
        query: {
          userId,
        },
      });

      socketRef.current = socketInstance;

      return () => {
        socketInstance.disconnect();
      };
    }
  }, [userId, socketRef]);

  return socketRef.current;
}
