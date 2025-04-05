'use client';

import { SocketClient } from '@/components/socket-client';
import { useUserStore } from '@/lib/stores/user-store';
import { createContext } from '@/utils/context';
import React, { useMemo } from 'react';

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
}: {
  children: React.ReactNode;
  initialProfile?: User;
  token?: string;
}) {
  const { profile, setProfile } = useUserStore();
  const [isLoading] = React.useState(false);

  React.useEffect(() => {
    if (initialProfile) {
      setProfile(initialProfile);
    }
  }, [initialProfile, setProfile]);

  const memoizedProfile = useMemo(
    () => profile || initialProfile,
    [initialProfile, profile]
  );

  return (
    <ProfileProvider profile={memoizedProfile} isLoading={isLoading}>
      <SocketClient userId={memoizedProfile?._id} />
      {children}
    </ProfileProvider>
  );
}
