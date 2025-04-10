'use server';

import apiClient from '@/lib/api-client';
import { revalidatePath, revalidateTag } from 'next/cache';
import { getAuthCookies } from '@/utils/cookies';
import { api_url } from '@/utils/env';

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
      `/projects?${queryParams.toString()}&sort=${sortBy !== 'activity' && sortBy !== undefined ? `-${sortBy},-favorite` : ''}`,
    );

    return res.data.data;
  } catch (err) {
    return err;
  }
}

export async function getCachedProjects({
  search,
  sortBy,
  slug,
}: { search?: string; sortBy?: string; slug?: string } = {}) {
  try {
    const { accessToken } = await getAuthCookies();
    const queryParams = new URLSearchParams();

    if (search && search.trim()) {
      queryParams.append('content', search.trim());
    }

    if (slug && slug.trim()) {
      queryParams.append('slug', slug.trim());
    }

    const res = await fetch(
      api_url +
        '/api/v1' +
        `/projects?${queryParams.toString()}&sort=${sortBy !== 'activity' && sortBy !== undefined ? `-${sortBy},-favorite` : ''}`,
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          'ngrok-skip-browser-warning': 'ngrok',
        },
        next: { tags: ['projects'], revalidate: 300 },
      },
    );

    const data = await res.json();

    return data.data;
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

    revalidateTag('projects');

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

    revalidateTag('projects');

    return response.data;
  } catch (error) {
    return error;
  }
}

export async function addFavoriteProject(projectId: string) {
  try {
    const response = await apiClient.post(`/projects/${projectId}/favorites`);

    revalidatePath('/dashboard');

    revalidateTag('projects');

    return response.data;
  } catch (error) {
    return error;
  }
}

export async function removeFavoriteProject(projectId: string) {
  try {
    const response = await apiClient.delete(`/projects/${projectId}/favorites`);

    revalidatePath('/dashboard');

    revalidateTag('projects');

    return response.data;
  } catch (error) {
    return error;
  }
}

export async function deleteProject(id: string) {
  try {
    // const id = formData.get('id');

    const response = await apiClient.delete(`/projects/${id}`);

    revalidatePath('/dashboard');

    revalidateTag('projects');
    return response.data;
  } catch (error) {
    return error;
  }
}
