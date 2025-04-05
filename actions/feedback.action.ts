'use server';

import apiClient from '@/lib/api-client';

export async function sendFeedback(data: {
  content: string;
  rating: number;
  page?: string;
}) {
  try {
    const response = await apiClient.post('/feedbacks', {
      content: data.content,
      rating: data.rating,
      page: data.page,
    });

    return response.data;
  } catch (error) {
    return error;
  }
}
