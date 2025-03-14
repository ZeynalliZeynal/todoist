'use server';

import { cache } from 'react';
import apiClient from '@/lib/api-client';
import { getAuthCookies } from '@/utils/cookies';

export const getProfile = cache(async () => {
  try {
    const res = await apiClient.get(`/profile`);

    return res.data.data;
  } catch (err) {
    return err;
  }
});

export const getCachedProfile = async () => {
  try {
    const { accessToken } = await getAuthCookies();

    const response = await fetch('/profile', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      next: { revalidate: 300 },
    });

    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};
