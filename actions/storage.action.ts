'use server';

import apiClient from '@/lib/api-client';
import { revalidatePath } from 'next/cache';

export async function uploadFile({
  file,
  prefix,
}: {
  file: File;
  prefix: string;
}) {
  try {
    const formData = new FormData();

    formData.append('file', file);

    const res = await apiClient.post(`/storage/${prefix}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

export async function deleteFile({
  filename,
  prefix,
}: {
  filename: string;
  prefix: string;
}) {
  try {
    const res = await apiClient.delete(`/storage/${prefix}/${filename}`);

    revalidatePath('/dashboard/projects');
    return res.data;
  } catch (err) {
    return err;
  }
}
