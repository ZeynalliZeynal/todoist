"use server";

import { getAuthCookies } from "@/utils/cookies";
import apiClient from "@/lib/api-client";

export async function getProfile() {
  try {
    const { accessToken } = await getAuthCookies();
    const res = await apiClient.get("/profile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.user;
  } catch (err) {
    console.log(err);
    return { error: "You are not logged in" };
  }
}
