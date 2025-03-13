'use client';

import { createContext } from '@/utils/context';
import { useUserStore } from '@/lib/stores/user-store';
import React from 'react';
import axios from 'axios';

const USER_PROVIDER_NAME = 'ProfileProvider';

interface ProfileContextProps {
  profile?: User;
  isLoading: boolean;
}

const [ProfileProvider, useProfileContext] =
  createContext<ProfileContextProps>(USER_PROVIDER_NAME);

export const useProfile = () => useProfileContext('useProfile');

export function UserProvider({
  children,
  initialProfile,
  token,
}: {
  children: React.ReactNode;
  initialProfile?: User;
  token?: string;
}) {
  const { profile, lastFetched, setProfile } = useUserStore();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchProfile = async () => {
      if (initialProfile) {
        setProfile(initialProfile);
        return;
      }

      const isFresh = lastFetched && Date.now() - lastFetched < 5 * 60 * 1000;
      if (profile && isFresh) {
        return;
      }

      try {
        setIsLoading(true);
        const response = await axios('/profile', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data?.user);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [initialProfile, profile, lastFetched, setProfile, token]);

  return (
    <ProfileProvider profile={profile || initialProfile} isLoading={isLoading}>
      {children}
    </ProfileProvider>
  );
}
