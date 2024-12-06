"use server";

import { getAuthCookies } from "@/utils/cookies";
import apiClient from "@/lib/api-client";

export async function getProfile() {
  try {
    const { accessToken } = await getAuthCookies();
    console.log(accessToken);
    const res = await apiClient.get("/profile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    return { message: "Something went wrong" };
  }
}
