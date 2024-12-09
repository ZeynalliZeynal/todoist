"use client";

import { useState } from "react";
import { GoCheckCircleFill, GoCircle } from "react-icons/go";
import Badge from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

export default function SignupForm({ plans }: { plans: Plan[] }) {
  const [selected, setSelected] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="text-gray-900 flex flex-col gap-2">
      <p className="text-paragraph">Plan type</p>
      <ul className="flex-col border rounded-md overflow-hidden divide-y">
        {plans.map((plan) => (
          <Tooltip key={plan._id}>
            <TooltipTrigger disabled={plan.status === "active"}>
              <li>
                <button
                  type="button"
                  aria-label={plan.name}
                  aria-selected={selected === plan.name}
                  aria-disabled={plan.status !== "active"}
                  disabled={plan.status !== "active"}
                  data-selected={plan.name === selected ? "" : null}
                  className="p-2 w-full flex items-center gap-1.5 hover:bg-background-100 transition-colors data-[selected]:text-foreground disabled:cursor-not-allowed disabled:text-gray-400 disabled:bg-transparent"
                  onClick={() =>
                    selected === plan.name && plan.status === "active"
                      ? setSelected("")
                      : setSelected(plan.name)
                  }
                >
                  {selected === plan.name ? (
                    <GoCheckCircleFill size={16} className="text-blue-900" />
                  ) : (
                    <GoCircle size={16} />
                  )}
                  {plan.name === "Beginner"
                    ? "I need to organize my life"
                    : plan.name === "Pro"
                      ? "I need to organize my work and life"
                      : "I need to manage my teamwork as well"}

                  <Badge
                    variant={
                      plan.name === "Beginner"
                        ? "gray"
                        : plan.name === "Pro"
                          ? "blue"
                          : "amber"
                    }
                    className="ml-auto"
                  >
                    {plan.name}
                  </Badge>
                </button>
              </li>
            </TooltipTrigger>
            <TooltipContent
              align="vertical-right-center"
              variant={
                plan.status === "disabled" ? "gray-subtle" : "amber-subtle"
              }
            >
              {plan.status}
            </TooltipContent>
          </Tooltip>
        ))}
      </ul>
      <div className="pt-8 flex flex-col gap-4">
        {selected && (
          <Input
            label="Your Name"
            size="medium"
            autoFocus
            onChange={({ target }) => setInputValue(target.value)}
          />
        )}
        <Button
          type="submit"
          size="md"
          disabled={!inputValue}
          variant="secondary"
          className="w-full"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
