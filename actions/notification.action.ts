'use server';

import apiClient from '@/lib/api-client';
import { getAuthCookies } from '@/utils/cookies';
import { revalidatePath } from 'next/cache';

export async function getCachedNotifications() {
  try {
    const { accessToken } = await getAuthCookies();

    const response = await fetch('/notifications', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      next: { revalidate: 300, tags: ['notifications'] },
    });

    return (await response.json()).data;
  } catch (error) {
    return error;
  }
}

export async function getNotifications() {
  try {
    const response = await apiClient('/notifications');

    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function deleteNotification(id: string) {
  try {
    await apiClient.delete('/notifications' + id);
  } catch (error) {
    return error;
  }
}

export async function clearNotifications() {
  try {
    await apiClient.delete('/notifications');
  } catch (error) {
    return error;
  }
}

export async function archiveNotification(id: string) {
  try {
    const response = await apiClient.post(`/notifications/${id}/archive`);

    revalidatePath('/dashboard');
    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function archiveAllNotifications() {
  try {
    const response = await apiClient.post('/notifications/archive');

    revalidatePath('/dashboard');
    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function unarchiveNotification(id: string) {
  try {
    const response = await apiClient.post(`/notifications/${id}/unarchive`);

    revalidatePath('/dashboard');
    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function readNotification(id: string) {
  try {
    const response = await apiClient.post(`/notifications/${id}/read`);

    revalidatePath('/dashboard');
    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function unreadNotification(id: string) {
  try {
    const response = await apiClient.post(`/notifications/${id}/unread`);

    revalidatePath('/dashboard');
    return response.data.data;
  } catch (error) {
    return error;
  }
}
