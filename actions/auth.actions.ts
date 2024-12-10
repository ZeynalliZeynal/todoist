"use server";

import { FieldValues } from "react-hook-form";
import {
  clearAuthCookies,
  getAuthCookies,
  getTokenFromCookieHeader,
  setAuthCookies,
} from "@/utils/cookies";
import { revalidatePath } from "next/cache";
import apiClient from "@/lib/api-client";

interface AuthResponse {
  status: "success" | "error" | "fail";
  message: string;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export async function login(formData: FieldValues) {
  const { email, password } = formData;
  try {
    // const response = await fetch(`${api_url}/auth/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include",
    //   body: JSON.stringify({ email, password }),
    // });

    const res = await apiClient.post("/auth/login", {
      email,
      password,
    });

    const accessToken = getTokenFromCookieHeader(res, "accessToken");
    const refreshToken = getTokenFromCookieHeader(res, "refreshToken");

    await setAuthCookies({
      accessToken,
      refreshToken,
    });

    revalidatePath("/");

    return res.data;
  } catch (err) {
    return err;
  }
}

export async function logout() {
  try {
    const { accessToken } = await getAuthCookies();

    const res = await apiClient.post(
      "/auth/logout",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    await clearAuthCookies();
    revalidatePath("/");
    return res;
  } catch (err) {
    return err;
  }
}
