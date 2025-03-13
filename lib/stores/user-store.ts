import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStore {
  profile: User | null;
  isPending: boolean;
  error: string | null;
  lastFetched: number | null;
  setProfile: (user: User | null) => void;
  setPending: (isPending: boolean) => void;
  setError: (error: string | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (setState) => ({
      profile: null,
      isPending: false,
      error: null,
      lastFetched: null,
      setProfile: (profile) => setState({ profile, lastFetched: Date.now() }),
      setPending: (isPending) => setState({ isPending }),
      setError: (error) => setState({ error }),
      clearUser: () => setState({ profile: null, lastFetched: null }),
    }),
    {
      name: 'user-storage',
    },
  ),
);
