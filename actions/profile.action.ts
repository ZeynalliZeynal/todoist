"use server";

import { getAuthCookies } from "@/utils/cookies";
import { api_url } from "@/utils/env";

export async function getProfile() {
  try {
    const { accessToken } = await getAuthCookies();
    const res = await fetch(`${api_url}/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await res.json();
    return data.data.user;
  } catch (err) {
    const error = err as Error;
    return { error: error.message };
  }
}
