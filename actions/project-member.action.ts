'use server';

import apiClient from '@/lib/api-client';

export async function getProjectMembers(id: string) {
  try {
    const response = await apiClient('/project-members/' + id);

    return response.data;
  } catch (error) {
    return error;
  }
}
