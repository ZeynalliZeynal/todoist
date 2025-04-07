import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/theme';
import { Toaster } from '@/components/ui/sonner';
import { UserProvider } from '@/lib/providers/user-provider';
import { getCachedProfile } from '@/actions/profile.action';
import { getAuthCookies } from '@/utils/cookies';
import CheckInternetConnection from '@/components/check-internet-connection';
import FeedbackPopper from '@/components/feedback-popper';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    template: '%s / Todoist Next',
    default: 'Welcome to Todoist Next',
  },
  description: 'TodoistNext | Organize your work and life',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialProfile = await getCachedProfile().catch(() => null);
  const { accessToken } = await getAuthCookies();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} font-geist-sans antialiased`}
      >
        <ThemeProvider defaultTheme="device">
          <UserProvider
            initialProfile={{ ...initialProfile?.user }}
            token={accessToken}
          >
            {children}
            {accessToken && <FeedbackPopper />}
          </UserProvider>
        </ThemeProvider>
        <Toaster />
        <CheckInternetConnection />
      </body>
    </html>
  );
}
