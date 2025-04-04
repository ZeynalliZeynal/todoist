import { cookies } from 'next/headers';
import { node_env } from '@/utils/env';
import { addDays, addMinutes } from 'date-fns';
import { AxiosResponse } from 'axios';

export type CookieOptions = {
  path?: string;
  expires?: Date;
  httpOnly?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
  secure?: boolean;
};

const secure = node_env !== 'development';

const defaultOptions: CookieOptions = {
  sameSite: node_env === 'production' ? 'strict' : 'lax',
  httpOnly: true,
  secure,
};

function getTokenFromCookieHeader(res: AxiosResponse, name: string) {
  const setCookieHeader = res.headers['set-cookie'];
  if (!setCookieHeader) throw new Error('Cookie not found');

  const cookie = setCookieHeader.find((value) => value.includes(name));

  const fullToken = cookie?.split(';').find((value) => value.includes(name));
  const token = fullToken?.slice(fullToken.indexOf('=') + 1);

  if (!token) throw new Error('Token not found');

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

  cookieStore
    .set('accessToken', accessToken, {
      ...defaultOptions,
      expires: addDays(Date.now(), 30),
    })
    .set('refreshToken', refreshToken, {
      ...defaultOptions,
      expires: addDays(Date.now(), 30),
    });
}

async function setVerifyCookies(token: string) {
  const cookieStore = await cookies();

  cookieStore.set('verifyToken', token, {
    ...defaultOptions,
    expires: addMinutes(Date.now(), 5),
  });
}

async function getAuthCookies() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;
  // if (!accessToken) throw new Error("You are not logged in.");

  return {
    accessToken,
    refreshToken,
  };
}

async function getVerifyCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get('verifyToken')?.value;
  // if (!accessToken) throw new Error("You are not logged in.");

  return token;
}

async function clearAuthCookies() {
  const cookieStore = await cookies();
  cookieStore.delete('accessToken').delete('refreshToken');
}

export {
  setAuthCookies,
  clearAuthCookies,
  getAuthCookies,
  getTokenFromCookieHeader,
  setVerifyCookies,
  getVerifyCookie,
};
