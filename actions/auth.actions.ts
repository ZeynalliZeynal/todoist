"use server";

import { FieldValues } from "react-hook-form";
import {
  clearAuthCookies,
  getAuthCookies,
  getTokenFromCookieHeader,
  getVerifyCookie,
  setAuthCookies,
  setVerifyCookies,
} from "@/utils/cookies";
import { revalidatePath } from "next/cache";
import apiClient from "@/lib/api-client";

export async function login(formData: FieldValues) {
  const { otp, token } = formData;
  try {
    const res = await apiClient.post(`/auth/login?token=${token}`, {
      otp,
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

export async function signup({ plan, otp }: { plan: string; otp: string }) {
  try {
    const token = await getVerifyCookie();
    const res = await apiClient.post(`/auth/signup?token=${token}`, {
      plan,
      otp,
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

export async function sendLoginEmail({ email }: { email: string }) {
  try {
    const res = await apiClient.post(`/auth/login/email/send`, {
      email,
    });

    return res.data;
  } catch (err) {
    return err;
  }
}

export async function sendSignupEmail({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  try {
    const res = await apiClient.post(`/auth/signup/email/send`, {
      name,
      email,
    });

    const token = getTokenFromCookieHeader(res, "verifyToken");
    await setVerifyCookies(token);

    return res.data;
  } catch (err) {
    return err as ServerResponse;
  }
}
