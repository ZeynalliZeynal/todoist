import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signup to Todoist Next',
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="flex flex-col min-h-dvh">{children}</div>;
}
