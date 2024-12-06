"use server";

import { FieldValues } from "react-hook-form";
import { setAuthCookies } from "@/utils/cookies";
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
    return { message: "Login is failed. Try again." };
  }
}
