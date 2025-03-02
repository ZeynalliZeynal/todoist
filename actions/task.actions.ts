'use server';

import apiClient from '@/lib/api-client';
import { revalidatePath } from 'next/cache';

export async function createTask(formData: FormData) {
  try {
    const data = Object.fromEntries(formData);

    const response = await apiClient.post('/tasks', {
      name: data.name,
      description: data.description,
    });
    revalidatePath('/dashboard');

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
