'use server';

import apiClient from '@/lib/api-client';
import { revalidatePath } from 'next/cache';

export async function getProjects({
  search,
  sortBy,
  slug,
}: { search?: string; sortBy?: string; slug?: string } = {}) {
  try {
    const queryParams = new URLSearchParams();

    if (search && search.trim()) {
      queryParams.append('content', search.trim());
    }

    if (slug && slug.trim()) {
      queryParams.append('slug', slug.trim());
    }
    // if (sortBy && sortBy.trim()) {
    //   if (sortBy === 'activity') queryParams.append('sort', '-createdAt');
    //   else queryParams.append('sort', `-${sortBy}`);
    // }

    const res = await apiClient(
      `/projects?sort=-favorite${sortBy !== 'activity' && sortBy !== undefined ? `,-${sortBy}` : ''}&${queryParams.toString()}`,
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
    return error;
  }
}

export async function updateProject(formData: FormData) {
  try {
    const name = formData.get('name');
    const description = formData.get('description');
    const id = formData.get('id');

    const response = await apiClient.patch('/projects/' + id, {
      name,
      description,
    });

    revalidatePath('/dashboard');

    return response.data;
  } catch (error) {
    return error;
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
