'use server';

import apiClient from '@/lib/api-client';

export async function getPlans(enableFeatures: boolean = false) {
  try {
    const res = await apiClient.get(
      `/plans${enableFeatures && '?features=enable'}`,
    );

    return res.data.data;
  } catch (err) {
    return err;
  }
}
