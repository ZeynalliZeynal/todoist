'use server';

import { getAuthCookies } from '@/utils/cookies';
import apiClient from '@/lib/api-client';

interface GetProfileProps {
  plan?: boolean;
  tasks?: boolean;
}

export async function getProfile(options?: Partial<GetProfileProps>) {
  try {
    const { accessToken } = await getAuthCookies();

    // Construct query parameters dynamically
    const queryParams = new URLSearchParams();
    if (options?.plan) queryParams.append('plan', 'enable');
    if (options?.tasks) queryParams.append('tasks', 'enable');

    const res = await apiClient.get(
      `/profile${queryParams.toString() ? `?${queryParams.toString()}` : ''}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res.data.data;
  } catch (err) {
    return err;
  }
}
