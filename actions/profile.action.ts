"use server";

import { getAuthCookies } from "@/utils/cookies";
import apiClient from "@/lib/api-client";

export async function getProfile() {
  try {
    const { accessToken } = await getAuthCookies();
    const res = await apiClient.get(`/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data.data;
  } catch (err) {
    return err;
  }
}
