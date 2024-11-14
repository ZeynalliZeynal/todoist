import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/lib";
import { navItems } from "@/constants";
import React, { CSSProperties, forwardRef } from "react";
import { Direction } from "@/app/(landing)/_layout/header/nav-links";
import { createPortal } from "react-dom";
import Link from "next/link";

interface NavPanelsProps {
  triggerRect: DOMRect | null;
  currentTab: number | null;
  dir: Direction;
  menuStyle: CSSProperties;
  closePanel: () => void;
}

export default forwardRef<HTMLDivElement, NavPanelsProps>(
  function NavPanel(props, ref) {
    const { triggerRect, closePanel, currentTab, dir, menuStyle } = props;

    function handleMouseLeave(event: React.MouseEvent) {
      event.preventDefault();
      const relatedTarget = event.relatedTarget as HTMLElement;
      if (relatedTarget.closest("[panel-trigger]")) return;
      closePanel();
    }

    function handleMouseEnter(event: React.MouseEvent) {
      event.preventDefault();
    }

    return createPortal(
      <AnimatePresence>
        {triggerRect && (
          <div
            panel-wrapper=""
            ref={ref}
            className="container fixed z-50 left-0 right-0 w-full pt-8"
            style={{
              top: triggerRect.bottom,
            }}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            <motion.div
              className="fixed z-50 size-4 border bg-background-100 rotate-45 rounded -translate-x-1/2 transition-all duration-300"
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.15,
              }}
              style={{
                top: triggerRect.top + triggerRect.height + 26,
                clipPath: "polygon(0 0, 100% 0, 50% 50%, 0 100%)",
                left: triggerRect.left + triggerRect.width / 2,
              }}
            />
            <motion.div
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.15,
              }}
              aria-expanded={!!currentTab}
              className={cn(
                "absolute transition-all duration-300 overflow-hidden shadow-menu border rounded-xl bg-background-100",
                "aria-[expanded=true]:animate-in aria-[expanded=true]:fade-in aria-[expanded=true]:zoom-in-95",
              )}
              style={menuStyle}
            >
              {navItems.map(
                ({ children }, index) =>
                  children && (
                    <ul
                      key={index}
                      aria-selected={currentTab === index}
                      className={cn(
                        "absolute bg-background-100 flex gap-2 w-max p-2 transition-opacity duration-300",
                        currentTab === index
                          ? " z-[20]"
                          : " pointer-events-none z-[10]",
                        {
                          "animate-in zoom-in-95 fade-in slide-in-from-right duration-300":
                            dir === "ltr",
                          "animate-in zoom-in-95 fade-in slide-in-from-left duration-300":
                            dir === "rtl",
                          "animate-out zoom-out-95 fade-out slide-out-to-left duration-300":
                            dir === "ltr" && currentTab !== index,
                          "animate-out zoom-out-95 fade-out slide-out-to-right duration-300":
                            dir === "rtl" && currentTab !== index,
                        },
                      )}
                    >
                      {children.map(
                        ({ name, children }) =>
                          children && (
                            <li key={name} className="space-y-2">
                              <h5 className="text-gray-900 capitalize font-med  ium px-3 py-2">
                                {name}
                              </h5>
                              <ul>
                                {children.map(
                                  ({ name, href, description, icon }) => (
                                    <li key={name}>
                                      <Link
                                        href={href}
                                        className="flex gap-3 p-3 items-center group"
                                      >
                                        <div className="size-8 flex p-2 rounded-md border group-hover:text-background-100 group-hover:bg-foreground transition">
                                          {icon}
                                        </div>
                                        <div>
                                          <div className="text-foreground font-medium capitalize">
                                            {name}
                                          </div>
                                          <div className="text-gray-900 text-xs group-hover:text-foreground transition">
                                            {description}
                                          </div>
                                        </div>
                                      </Link>
                                    </li>
                                  ),
                                )}
                              </ul>
                            </li>
                          ),
                      )}
                    </ul>
                  ),
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>,
      document.body,
    );
  },
);
