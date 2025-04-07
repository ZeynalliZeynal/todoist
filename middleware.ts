import { NextRequest, NextResponse } from 'next/server';
import { clearAuthCookies, getAuthCookies } from '@/utils/cookies';
import { authRoutes, DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { getCachedProfile } from '@/actions/profile.action';

export default async function middleware(request: NextRequest) {
  const { accessToken } = await getAuthCookies();

  const profile = await getCachedProfile().catch(async (error) => {
    if (error?.status === 'fail') {
      await clearAuthCookies();
    }
  });

  if (profile?.status === 'fail') {
    await clearAuthCookies();
  }

  const isProtectedRoute = request.nextUrl.pathname.startsWith(
    DEFAULT_LOGIN_REDIRECT
  );
  const isAuthRoute = authRoutes.includes(request.nextUrl.pathname);

  if (isProtectedRoute && !accessToken)
    return NextResponse.redirect(new URL('/auth/login', request.nextUrl));

  if (isAuthRoute && accessToken)
    return NextResponse.redirect(
      new URL(DEFAULT_LOGIN_REDIRECT, request.nextUrl)
    );
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
