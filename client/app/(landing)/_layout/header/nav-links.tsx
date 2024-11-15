"use client";

import { navItems } from "@/constants";
import { LuChevronDown } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/lib";
import React from "react";
import DropdownMenu from "@/components/ui/dropdown-menu/dropdown-menu";

export type Direction = "ltr" | "rtl" | null;

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul role="list" className="flex items-center">
      {navItems.map(({ children, name, href }, index) => (
        <li key={index}>
          {href ? (
            <Link
              href={href}
              data-value={name}
              className={cn(
                "relative z-[1] capitalize leading-[1] gap-1 px-3 py-2 text-gray-900 hover:text-foreground transition flex items-center hover:bg-gray-200 rounded-full",
                pathname === href && "text-foreground",
              )}
            >
              {name}
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <button
                  role="listitem"
                  data-value={name}
                  className="relative z-[1] capitalize leading-[1] gap-1 px-3 py-2 text-gray-900 hover:text-foreground transition flex items-center group hover:bg-gray-200 rounded-full"
                >
                  {name}
                  {children && (
                    <LuChevronDown
                      size={12}
                      className="group-data-[state=open]:rotate-180"
                    />
                  )}
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="rounded-xl p-0">
                <DropdownMenu.Group className="p-2">
                  {children?.map(({ name, href, icon }) => (
                    <DropdownMenu.Item key={name} asChild>
                      <Link
                        href={href}
                        className="flex focus-visible:ring-0 items-center gap-3 px-3 py-2 group focus:bg-gray-200 rounded-lg transition"
                      >
                        <div className="size-8 p-2 [&>svg]:size-full rounded-md border group-focus:bg-foreground group-focus:text-background-100 transition">
                          {icon}
                        </div>
                        <div className="capitalize text-gray-900 group-focus:text-foreground transition">
                          {name}
                        </div>
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu>
          )}
        </li>
      ))}
    </ul>
  );
}
