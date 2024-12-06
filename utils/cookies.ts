import { cookies } from "next/headers";
import { node_env } from "@/utils/env";
import { addDays } from "date-fns";

export type CookieOptions = {
  path?: string;
  expires?: Date;
  httpOnly?: boolean;
  sameSite?: "strict" | "lax" | "none";
  secure?: boolean;
};

export async function setAuthCookies({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) {
  const cookieStore = await cookies();

  const secure = node_env !== "development";

  const defaultOptions: CookieOptions = {
    sameSite: node_env === "production" ? "strict" : "lax",
    httpOnly: true,
    secure,
    expires: addDays(Date.now(), 30),
  };

  cookieStore.set("accessToken", accessToken, {
    ...defaultOptions,
  });

  cookieStore.set("refreshToken", refreshToken, {
    ...defaultOptions,
  });
}

export async function getAuthCookies() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;
  // if (!accessToken) throw new Error("You are not logged in.");

  return {
    accessToken,
    refreshToken,
  };
}
