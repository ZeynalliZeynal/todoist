"use server";

import { FieldValues } from "react-hook-form";
import {
  clearAuthCookies,
  getAuthCookies,
  setAuthCookies,
} from "@/utils/cookies";
import { revalidatePath } from "next/cache";
import { api_url } from "@/utils/env";

export async function login(formData: FieldValues) {
  const { email, password } = formData;
  try {
    const response = await fetch(`${api_url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    const { accessToken, refreshToken } = data.tokens;

    await setAuthCookies({
      accessToken,
      refreshToken,
    });

    revalidatePath("/");

    return { message: "Login is successful. Welcome back!" };
  } catch (err) {
    console.log(err);
    return { error: (err as Error).message };
  }
}

export async function logout() {
  try {
    const { accessToken } = await getAuthCookies();

    const response = await fetch(`${api_url}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    await clearAuthCookies();
    revalidatePath("/");
    return data;
  } catch (err) {
    const error = err as Error;
    console.log(error.name, error.message);
    return { error: error.message };
  }
}
