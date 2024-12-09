import { cookies } from "next/headers";
import { node_env } from "@/utils/env";
import { addDays } from "date-fns";
import { AxiosResponse } from "axios";

export type CookieOptions = {
  path?: string;
  expires?: Date;
  httpOnly?: boolean;
  sameSite?: "strict" | "lax" | "none";
  secure?: boolean;
};

function getTokenFromCookieHeader(res: AxiosResponse, name: string) {
  const setCookieHeader = res.headers["set-cookie"];
  if (!setCookieHeader) throw new Error("Cookie not found");

  const cookie = setCookieHeader.find((value) => value.includes(name));

  const fullToken = cookie?.split(";").find((value) => value.includes(name));
  const token = fullToken?.slice(fullToken.indexOf("=") + 1);

  if (!token) throw new Error("Token not found");

  return token;
}

async function setAuthCookies({
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

async function getAuthCookies() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;
  // if (!accessToken) throw new Error("You are not logged in.");

  return {
    accessToken,
    refreshToken,
  };
}

async function clearAuthCookies() {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken").delete("refreshToken");
}

export {
  setAuthCookies,
  clearAuthCookies,
  getAuthCookies,
  getTokenFromCookieHeader,
};
