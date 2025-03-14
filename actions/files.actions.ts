'use server';

import apiClient from '@/lib/api-client';

export async function uploadFile(file: File) {
  try {
    const formData = new FormData();

    formData.append('file', file);

    const res = await apiClient.post('/files/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
}
