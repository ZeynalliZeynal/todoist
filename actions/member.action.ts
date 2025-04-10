'use server';

import apiClient from '@/lib/api-client';
import { membershipRoute } from '@/routes';
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

    return response.data;
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

export async function activateMembershipProfile() {
  try {
    const response = await apiClient.post(`/members/profile/activate`);

    revalidatePath(membershipRoute);

    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function deactivateMembershipProfile() {
  try {
    const response = await apiClient.post(`/members/profile/deactivate`);

    revalidatePath(membershipRoute);

    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function approveMembershipInvitation(id: string) {
  try {
    const response = await apiClient.post(`/members/${id}/approve`);

    revalidatePath(membershipRoute);

    return response.data.data;
  } catch (error) {
    return error;
  }
}

export async function rejectMembershipInvitation(id: string) {
  try {
    const response = await apiClient.post(`/members/${id}/reject`);

    revalidatePath(membershipRoute);

    return response.data.data;
  } catch (error) {
    return error;
  }
}
