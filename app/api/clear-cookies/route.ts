import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookieStore = await cookies();
  cookieStore
    .delete('accessToken')
    .delete('refreshToken')
    .delete('verifyToken');

  return NextResponse.json({ message: 'Cookies cleared' });
}
