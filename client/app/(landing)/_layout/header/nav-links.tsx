"use client";

import { navItems } from "@/constants";
import { LuChevronDown } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/lib";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import NavPanel from "@/app/(landing)/_layout/header/nav-panel";

export type Direction = "ltr" | "rtl" | null;

export default function NavLinks() {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState<number | null>(null);
  const [pillStyle, setPillStyle] = useState<CSSProperties>({});
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);
  const [menuStyle, setMenuStyle] = useState<CSSProperties>({});
  const [dir, setDir] = useState<Direction>(null);

  const previousTab = useRef<number | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);

  function openPanel(event: React.MouseEvent, index: number) {
    event.preventDefault();
    const element = event.currentTarget as HTMLElement;
    setCurrentTab(index);

    setPillStyle({
      width: element.offsetWidth,
      height: element.offsetHeight,
      left: element.offsetLeft,
      background: "hsla(var(--ds-gray-200))",
    });
  }

  function handleMouseEnter(event: React.MouseEvent, index: number) {
    openPanel(event, index);
  }

  function closePanel() {
    setCurrentTab(null);
    setPillStyle({});
    setDir(null);
    setTriggerRect(null);
  }

  function handleMouseLeave(event: React.MouseEvent) {
    event.preventDefault();
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (!relatedTarget.closest("[panel-wrapper]")) closePanel();
  }

  useEffect(() => {
    if (!ref.current) return;
    const activeElement = ref.current.querySelector(
      "[aria-selected=true]",
    ) as HTMLElement;

    if (activeElement)
      setMenuStyle({
        width: activeElement.offsetWidth,
        height: activeElement.offsetHeight,
      });

    if (previousTab.current !== null && currentTab !== null) {
      const direction =
        previousTab.current > currentTab
          ? "ltr"
          : previousTab.current < currentTab
            ? "rtl"
            : null;
      setDir(direction);
    }
    previousTab.current = currentTab;
  }, [currentTab]);

  return (
    <ul role="list" className="flex items-center">
      <div
        className={cn("absolute z-0 transition-all rounded-full duration-300")}
        style={{
          ...pillStyle,
        }}
      />
      {navItems.map(({ children, name, href }, index) =>
        href ? (
          <Link
            key={index}
            href={href}
            data-value={name}
            data-state={currentTab === index ? "active" : null}
            className={cn(
              "relative z-[1] capitalize leading-[1] gap-1 px-3 py-2 text-gray-900 hover:text-foreground transition flex items-center",
              pathname === href && "text-foreground",
            )}
            onMouseEnter={(event) => handleMouseEnter(event, index)}
            onMouseLeave={handleMouseLeave}
          >
            {name}
          </Link>
        ) : (
          <button
            key={index}
            panel-trigger=""
            role="listitem"
            data-value={name}
            data-state={currentTab === index ? "open" : "closed"}
            className="relative z-[1] capitalize leading-[1] gap-1 px-3 py-2 text-gray-900 hover:text-foreground transition flex items-center group"
            onClick={(event) => {
              if (currentTab === index) {
                closePanel();
              } else {
                openPanel(event, index);
                setTriggerRect(event.currentTarget.getBoundingClientRect());
              }
            }}
            onMouseEnter={(event) => {
              handleMouseEnter(event, index);
              setTriggerRect(event.currentTarget.getBoundingClientRect());
            }}
            onMouseLeave={handleMouseLeave}
          >
            {name}
            {children && (
              <LuChevronDown
                size={12}
                className="group-data-[state=open]:rotate-180 transition duration-300"
              />
            )}
          </button>
        ),
      )}
      <NavPanel
        ref={ref}
        triggerRect={triggerRect}
        currentTab={currentTab}
        dir={dir}
        menuStyle={menuStyle}
        closePanel={closePanel}
      />
    </ul>
  );
}
