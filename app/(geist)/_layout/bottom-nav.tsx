'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { geistLinks } from '@/constants';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import {
  EmojiAwful,
  EmojiBad,
  EmojiGreat,
  EmojiOk,
} from '@/components/ui/icons/geist';

export default function BottomNav() {
  const pathname = usePathname();

  const allLinks = useMemo(
    () => geistLinks.flatMap((value) => value.links),
    [],
  );
  const currentIndex = allLinks.findIndex((link) => link.href === pathname);
  const prevLink = currentIndex > 0 ? allLinks[currentIndex - 1] : undefined;
  const nextLink =
    currentIndex < allLinks.length - 1 ? allLinks[currentIndex + 1] : undefined;

  return (
    <div className="flex relative items-center justify-between px-12 py-8 border-t">
      {prevLink && (
        <Link
          href={prevLink.href}
          className="flex gap-2 items-center hover:text-foreground transition text-gray-900"
        >
          <FaChevronLeft size={16} />
          <span className="flex-col flex">
            Previous
            <div className="capitalize text-foreground text-base font-medium">
              {prevLink.label}
            </div>
          </span>
        </Link>
      )}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-4 h-12 text-gray-900 flex items-center gap-2 rounded-full border">
        <p className="text-sm">Give feedback</p>
        <div className="flex items-center gap-px">
          <button
            type="button"
            role="radio"
            className="size-8 transition grid place-content-center rounded-full hover:bg-blue-300 hover:text-blue-900 group active:scale-95 active:border-blue-900 border border-transparent"
          >
            <EmojiGreat />
          </button>
          <button
            type="button"
            role="radio"
            className="size-8 transition grid place-content-center rounded-full hover:bg-blue-300 hover:text-blue-900 group active:scale-95 active:border-blue-900 border border-transparent"
          >
            <EmojiOk />
          </button>
          <button
            type="button"
            role="radio"
            className="size-8 transition grid place-content-center rounded-full hover:bg-blue-300 hover:text-blue-900 group active:scale-95 active:border-blue-900 border border-transparent"
          >
            <EmojiBad />
          </button>
          <button
            type="button"
            role="radio"
            className="size-8 transition grid place-content-center rounded-full hover:bg-blue-300 hover:text-blue-900 group active:scale-95 active:border-blue-900 border border-transparent"
          >
            <EmojiAwful />
          </button>
        </div>
      </div>
      {nextLink && (
        <Link
          href={nextLink.href}
          className="flex gap-2 items-center hover:text-foreground transition text-gray-900"
        >
          <span className="flex-col flex">
            Previous
            <div className="capitalize text-foreground text-base font-medium">
              {nextLink.label}
            </div>
          </span>
          <FaChevronRight size={16} />
        </Link>
      )}
    </div>
  );
}
