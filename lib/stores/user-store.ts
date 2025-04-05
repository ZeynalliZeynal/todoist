import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStore {
  profile: User | null;
  isPending: boolean;
  error: string | null;
  lastFetched: number | null;

  isOnline: (userId: string) => boolean;
  onlineUsers: Set<string>;
  setOnline: (userId: string) => void;
  setOffline: (userId: string) => void;

  setProfile: (user: User | null) => void;
  setPending: (isPending: boolean) => void;
  setError: (error: string | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      profile: null,
      isPending: false,
      error: null,
      lastFetched: null,

      isOnline: (userId: string) =>
        Array.from(get().onlineUsers).includes(userId),
      onlineUsers: new Set<string>([]),
      setOnline: (userId: string) =>
        set((state) => {
          const updated = new Set(Array.from(state.onlineUsers));
          updated.add(userId);
          return { onlineUsers: updated };
        }),
      setOffline: (userId: string) =>
        set((state) => {
          const updated = new Set(Array.from(state.onlineUsers));
          updated.delete(userId);
          return { onlineUsers: updated };
        }),

      setProfile: (profile) => set({ profile, lastFetched: Date.now() }),
      setPending: (isPending) => set({ isPending }),
      setError: (error) => set({ error }),
      clearUser: () => set({ profile: null, lastFetched: null }),
    }),
    {
      name: 'user-storage',
    },
  ),
);
