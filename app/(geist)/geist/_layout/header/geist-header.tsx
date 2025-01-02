import Link from 'next/link';
import { Geist } from '@/components/ui/icons/geist';
import ThemeSwitch from '@/components/ui/theme';
import Kbd from '@/components/ui/kbd';

export default function GeistHeader() {
  return (
    <header className="grid grid-cols-[237px_1fr] px-[22px] bg-background-200 h-[var(--header-height)] border-b sticky top-0 z-10">
      <div className="flex items-center h-full">
        <Link href="/geist/introduction" className="flex gap-4 items-center">
          <Geist size={27} />
          <p className="text-foreground font-semibold text-base">
            Geist Design System
          </p>
        </Link>
      </div>
      <div className="border-l flex items-center justify-between px-4">
        <button className="h-8 rounded-md shadow-border flex items-center px-2 text-gray-900 w-56 justify-between transition hover:bg-background-100">
          Search Geist
          <Kbd>Ctrl K</Kbd>
        </button>
        <ThemeSwitch size={32} />
      </div>
    </header>
  );
}
