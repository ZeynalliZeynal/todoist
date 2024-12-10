"use client";

import { ComponentProps, ReactNode, useId } from "react";
import { cn } from "@/utils/lib";

type InputProps = {
  prefix?: ReactNode;
  suffix?: ReactNode;
  prefixStyling?: boolean;
  suffixStyling?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
} & Omit<ComponentProps<"input">, "size" | "prefix" | "suffix">;

export default function Input({
  prefix,
  suffix,
  prefixStyling = true,
  suffixStyling = true,
  size = "small",
  label,
  ...etc
}: InputProps) {
  const id = useId();

  return (
    <label htmlFor={`input${id}`} className="text-gray-900 flex flex-col gap-2">
      {label}
      <div
        className={cn(
          "flex items-center w-full bg-background-200 rounded-md focus-within:shadow-input transition text-foreground duration-200 overflow-hidden shadow-border font-medium",
          {
            "[--size:2rem]": size === "small",
            "[--size:2.5rem]": size === "medium",
            "[--size:3rem] rounded-lg": size === "large",
          },
        )}
      >
        {prefix && (
          <label
            htmlFor={`input${id}`}
            className={cn(
              "shrink-0 inline-flex justify-center items-center h-[var(--size)] text-gray-800",
              {
                "px-3": typeof prefix === "string",
                "w-[var(--size)]": typeof prefix !== "string",
                "bg-background-100": prefixStyling,
              },
            )}
          >
            {prefix}
          </label>
        )}
        <input
          id={`input${id}`}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className={cn(
            "w-full px-3 placeholder-gray-800 outline-none h-[var(--size)]",
            {
              "border-l": prefix,
              "border-r": suffix,
            },
          )}
          {...etc}
        />
        {suffix && (
          <label
            htmlFor={`input${id}`}
            className={cn(
              "shrink-0 inline-flex justify-center items-center h-[var(--size)] text-gray-800",
              {
                "px-3": typeof suffix === "string",
                "w-[var(--size)]": typeof suffix !== "string",
                "bg-background-100": suffixStyling,
              },
            )}
          >
            {suffix}
          </label>
        )}
      </div>
    </label>
  );
}
