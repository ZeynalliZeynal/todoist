'use server';

import apiClient from '@/lib/api-client';
import { getAuthCookies } from '@/utils/cookies';

export async function getCachedNotifications() {
  try {
    const { accessToken } = await getAuthCookies();

    const response = await fetch('/notifications', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      next: { revalidate: 300, tags: ['notifications'] },
    });

    return (await response.json()).data;
  } catch (error) {
    return error;
  }
}

export async function getNotifications() {
  try {
    const response = await apiClient('/notifications');

    return response.data;
  } catch (error) {
    return error;
  }
}
