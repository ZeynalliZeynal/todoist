'use server';

import apiClient from '@/lib/api-client';
import { revalidatePath } from 'next/cache';

export async function createTaskTag(data: Partial<TaskTag>) {
  try {
    const res = await apiClient.post('/task-tags', {
      name: data.name,
      description: data?.description,
    });

    revalidatePath('/dashboard');
    return res.data;
  } catch (err) {
    return err;
  }
}

export async function getTaskTags() {
  try {
    const res = await apiClient('/task-tags');

    return res.data.data;
  } catch (err) {
    return err;
  }
}

export async function updateTaskTag(data: TaskTag) {
  try {
    const res = await apiClient.patch(`/task-tags/${data.id}`, {
      name: data.name,
      description: data?.description,
    });

    return res.data;
  } catch (err) {
    return err;
  }
}

export async function deleteTaskTag(data: TaskTag) {
  try {
    const res = await apiClient.delete(`/task-tags/${data.id}`);

    return res.data;
  } catch (err) {
    return err;
  }
}
