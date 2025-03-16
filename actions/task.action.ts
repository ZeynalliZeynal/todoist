'use server';

import apiClient from '@/lib/api-client';
import { revalidatePath } from 'next/cache';
import { FieldValues } from 'react-hook-form';

export async function createTask(data: FieldValues) {
  try {
    const response = await apiClient.post('/tasks', {
      name: data.name,
      description: data.description,
      priority: data.priority,
      dueDate: data.dueDate,
      tags: data.tags,
      project: data.project,
    });
    revalidatePath('/dashboard');

    return response.data;
  } catch (error) {
    return error;
  }
}
