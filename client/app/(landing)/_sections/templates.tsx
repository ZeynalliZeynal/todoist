"use client";

import Tabs from "@/components/ui/tabs";
import { useState } from "react";

const values = [
  {
    value: "work",
    label: "Work",
  },
  {
    value: "education",
    label: "Education",
  },
  {
    value: "personal",
    label: "Personal",
  },
  {
    value: "management",
    label: "Management",
  },
  {
    value: "customer_support",
    label: "Customer Support",
  },
  {
    value: "marketing&sales",
    label: "Marketing & Sales",
  },
];

export default function Templates() {
  const [value, setValue] = useState(values[0].value);

  return (
    <section className="mt-4 border-t">
      <div className="w-full p-12 space-y-8">
        <div className="text-center">
          <h2>Kickstart your next project with Todoist Templates</h2>
          <p className="mt-6">
            No need to create projects or setups from scratch when we have 50+
            templates made for you.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Tabs defaultValue={value} onChange={setValue}>
            <Tabs.List>
              {values.map((item, index) => (
                <Tabs.Trigger
                  key={index}
                  value={item.value}
                  className="font-semibold"
                >
                  {item.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {values.map((item, index) => (
              <Tabs.Content
                key={index + 1}
                value={item.value}
                className="flex items-stretch"
              >
                <div className="flex flex-col border w-40 relative h-32">
                  <div
                    className="absolute [--size:33px] -top-px w-[var(--size)] h-[var(--size)] border-r-background-100 border-b-background-200 -right-px border-gray-400"
                    style={{
                      borderBottomWidth: "var(--size)",
                      borderRightWidth: "var(--size)",
                    }}
                  >
                    <div className="absolute size-[var(--size)] border-b border-l before:absolute before:top-0 before:-right-px before:w-px before:h-[var(--size)] before:bg-gray-400 before:-rotate-45 before:scale-[1.4] before:origin-bottom overflow-hidden" />
                  </div>
                </div>
              </Tabs.Content>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
