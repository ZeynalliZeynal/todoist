'use server';

import apiClient from '@/lib/api-client';
import { revalidatePath } from 'next/cache';

export async function getMembers() {
  try {
    const response = await apiClient('/members');

    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function getMembershipProfile() {
  try {
    const response = await apiClient('/members/profile');

    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function inviteMember({
  id,
  entity,
  entityType,
}: {
  id: string;
  entity: object;
  entityType: string;
}) {
  try {
    const response = await apiClient.post(`/members/${id}/invite`, {
      entity,
      entityType,
    });

    revalidatePath('/dashboard/projects');

    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function createMembershipProfile() {
  try {
    const response = await apiClient.post(`/members/create`);

    revalidatePath('/dashboard');

    return response.data.data;
  } catch (error) {
    return error;
  }
}
