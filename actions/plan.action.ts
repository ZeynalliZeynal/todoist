"use server";

import apiClient from "@/lib/api-client";

export async function getPlans() {
  try {
    const res = await apiClient.get("/plans");
    console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    return err;
  }
}
