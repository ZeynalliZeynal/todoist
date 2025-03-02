'use server';

import { getAuthCookies } from '@/utils/cookies';
import apiClient from '@/lib/api-client';
import { revalidatePath } from 'next/cache';

export async function getProjects() {
  try {
    const { accessToken } = await getAuthCookies();

    const res = await apiClient.get('/projects?sort=-favorite', {
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
    const name = formData.get('name');
    const description = formData.get('description');

    const response = await apiClient.post('/projects', {
      name,
      description,
    });

    revalidatePath('/dashboard');

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function addFavoriteProject(projectId: string) {
  try {
    const response = await apiClient.post(`/projects/${projectId}/favorites`);

    revalidatePath('/dashboard');

    return response.data;
  } catch (error) {
    return error;
  }
}

export async function removeFavoriteProject(projectId: string) {
  try {
    const response = await apiClient.delete(`/projects/${projectId}/favorites`);

    revalidatePath('/dashboard');

    return response.data;
  } catch (error) {
    return error;
  }
}
