'use server';

import apiClient from '@/lib/api-client';
import { revalidatePath } from 'next/cache';

export async function getNotificationSettings() {
  try {
    const response = await apiClient('/notification-settings');

    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function enableNotification(id: string) {
  try {
    const response = await apiClient.post(
      '/notification-settings/' + id + '/enable'
    );

    revalidatePath('/dashboard/account/notifications');
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function disableNotification(id: string) {
  try {
    const response = await apiClient.post(
      '/notification-settings/' + id + '/disable'
    );

    revalidatePath('/dashboard/account/notifications');
    return response.data;
  } catch (error) {
    return error;
  }
}
