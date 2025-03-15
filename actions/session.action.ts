'use server';

import apiClient from '@/lib/api-client';
import { revalidatePath } from 'next/cache';

export async function getSessions() {
  try {
    const res = await apiClient('/profile/sessions');

    return res.data.data;
  } catch (error) {
    return error;
  }
}

export async function deleteSession(sessionId: string) {
  try {
    const res = await apiClient.delete(`/profile/sessions/${sessionId}`);

    revalidatePath('/dashboard/account/sessions');
    return res.data;
  } catch (error) {
    return error;
  }
}
