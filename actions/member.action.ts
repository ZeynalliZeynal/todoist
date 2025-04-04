'use server';

import apiClient from '@/lib/api-client';

export async function getMembers() {
  try {
    const response = await apiClient('/members');

    return response.data.data;
  } catch (error) {
    return error;
  }
}
