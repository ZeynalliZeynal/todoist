"use client";

import { useState } from "react";
import { GoCheckCircleFill, GoCircle } from "react-icons/go";
import Badge from "@/components/ui/badge";

export default function SignupForm({ plans }: { plans: Plan[] }) {
  const [selected, setSelected] = useState("");

  return (
    <div className="space-y-2 text-gray-900">
      <p className="text-[0.8125rem]">Plan type</p>
      <ul className="flex-col border rounded-md overflow-hidden divide-y">
        {plans.map((plan) => (
          <li key={plan._id}>
            <button
              aria-label={plan.name}
              aria-selected={selected === plan.name}
              data-selected={plan.name === selected ? "" : null}
              className="p-2 w-full flex items-center gap-1.5 hover:bg-background-100 transition-colors data-[selected]:text-foreground"
              onClick={() =>
                selected === plan.name
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
        ))}
      </ul>
    </div>
  );
}
