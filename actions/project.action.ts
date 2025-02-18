'use server';

import { getAuthCookies } from '@/utils/cookies';
import apiClient from '@/lib/api-client';

export async function getProjects() {
  try {
    const { accessToken } = await getAuthCookies();

    const res = await apiClient.get('/projects', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data.data;
  } catch (err) {
    return err;
  }
}

export async function createProject(formData: FormData) {
  try {
    console.log(formData);
    const { accessToken } = await getAuthCookies();
  } catch (err) {
    return err;
  }
}
