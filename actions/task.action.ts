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

export async function getTasks(data?: { project?: string }) {
  try {
    const response = await apiClient(`/tasks?project=${data?.project || ''}`);

    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function addTaskToCompleted(id: string) {
  try {
    const response = await apiClient.post(`/tasks/${id}/completed`);

    revalidatePath('/dashboard/projects');
    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function removeTaskFromCompleted(id: string) {
  try {
    const response = await apiClient.delete(`/tasks/${id}/completed`);

    revalidatePath('/dashboard/projects');
    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function deleteTask(id: string) {
  try {
    const response = await apiClient.delete(`/tasks/${id}`);

    revalidatePath('/dashboard/projects');
    return response.data.data;
  } catch (error) {
    return error;
  }
}
