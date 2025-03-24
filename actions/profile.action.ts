'use server';

import apiClient from '@/lib/api-client';
import { getAuthCookies } from '@/utils/cookies';
import { api_url } from '@/utils/env';
import { revalidatePath, revalidateTag } from 'next/cache';
import { headers } from 'next/headers';
import { cache } from 'react';

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
    const userAgent = (await headers()).get('user-agent');

    const { accessToken } = await getAuthCookies();

    const response = await fetch(api_url + '/profile', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'User-Agent': userAgent || '',
      },
      next: { revalidate: 300, tags: ['profile'] },
    });

    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};

export async function updateProfile(data: { name?: string; avatar?: string }) {
  try {
    const res = await apiClient.patch('/profile/update', {
      name: data.name,
      avatar: data.avatar,
    });

    revalidatePath('/');
    revalidateTag('profile');
    return res.data;
  } catch (err) {
    return err;
  }
}
