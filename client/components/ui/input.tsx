"use client";

import { ComponentProps, ReactNode, useId } from "react";
import { cn } from "@/utils/lib";

type InputProps = {
  prefix?: ReactNode;
  suffix?: ReactNode;
  prefixStyling?: boolean;
  suffixStyling?: boolean;
  size?: "small" | "medium" | "large";
} & Omit<ComponentProps<"input">, "size" | "prefix" | "suffix">;

export default function Input({
  prefix,
  suffix,
  prefixStyling = true,
  suffixStyling = true,
  size = "small",
  ...etc
}: InputProps) {
  const id = useId();

  return (
    <div
      className={cn(
        "flex items-center w-full bg-background-200 rounded-md focus-within:shadow-input transition text-foreground duration-200 overflow-hidden shadow-border",
        {
          "[--size:2rem]": size === "small",
          "[--size:2.5rem]": size === "medium",
          "[--size:3rem]": size === "large",
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
        className={cn(
          "w-full placeholder-gray-800 outline-none h-[var(--size)]",
          {
            "border-l px-3": prefix && prefixStyling,
            "border-r px-3": suffix && suffixStyling,
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
  );
}
