import { cloneElement, ReactElement, ReactNode } from "react";
import { cn } from "@/utils/lib";

type Variants =
  | "gray"
  | "gray-subtle"
  | "blue"
  | "blue-subtle"
  | "purple"
  | "purple-subtle"
  | "amber"
  | "amber-subtle"
  | "red"
  | "red-subtle"
  | "pink"
  | "pink-subtle"
  | "green"
  | "green-subtle"
  | "teal"
  | "teal-subtle";

export default function Badge({
  size = "sm",
  icon,
  variant = "gray-subtle",
  children,
  className,
}: {
  size?: "sm" | "md" | "lg";
  icon?: ReactElement;
  variant?: Variants;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-full inline-flex items-center w-max justify-center gap-1.5 select-none font-medium",
        {
          "h-5 px-1.5 text-[10px]": size === "sm",
          "h-6 px-2.5 text-xs": size === "md",
          "h-8 px-3 text-sm": size === "lg",
          "bg-gray-700 text-gray-50": variant === "gray",
          "bg-gray-200 text-foreground": variant === "gray-subtle",
          "bg-blue-700 text-blue-50": variant === "blue",
          "bg-blue-200 text-blue-900": variant === "blue-subtle",
          "bg-purple-700 text-purple-50": variant === "purple",
          "bg-purple-200 text-purple-900": variant === "purple-subtle",
          "bg-amber-700 text-background-100": variant === "amber",
          "bg-amber-200 text-amber-900": variant === "amber-subtle",
          "bg-red-700 text-red-50": variant === "red",
          "bg-red-200 text-red-900": variant === "red-subtle",
          "bg-pink-700 text-pink-50": variant === "pink",
          "bg-pink-200 text-pink-900": variant === "pink-subtle",
          "bg-green-700 text-green-50": variant === "green",
          "bg-green-200 text-green-900": variant === "green-subtle",
          "bg-teal-700 text-teal-50": variant === "teal",
          "bg-teal-200 text-teal-900": variant === "teal-subtle",
        },
        className,
      )}
    >
      {icon &&
        cloneElement(icon, {
          className: cn({
            "size-4": size === "lg",
            "size-3.5": size === "md",
            "size-3": size === "sm",
          }),
        })}
      {children}
    </span>
  );
}
