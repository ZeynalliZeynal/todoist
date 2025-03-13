'use server';

import apiClient from '@/lib/api-client';
import { revalidatePath } from 'next/cache';

export async function getProjects({ search }: { search?: string } = {}) {
  try {
    const queryParams = new URLSearchParams();

    if (search && search.trim()) {
      queryParams.append('search', search.trim());
    }
    const res = await apiClient(
      `/projects?sort=-favorite${queryParams.toString()}`,
    );

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
