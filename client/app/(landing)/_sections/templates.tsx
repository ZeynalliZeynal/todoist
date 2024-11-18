"use client";

import Tabs from "@/components/ui/tabs";
import { useState } from "react";
import CardSheet from "@/components/ui/card-sheet";
import Button from "@/components/ui/button";
import { LuMoveRight } from "react-icons/lu";

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
    <section className="mt-4 border-t border-b">
      <div className="flex">
        <div className="border-r w-1/3 flex flex-col justify-center">
          <div className="p-12 space-y-6">
            <h2 className="text-4xl leading-[120%]">
              Kickstart your next project with Todoist Templates
            </h2>
            <p>
              No need to create projects or setups from scratch when we have 50+
              templates made for you.
            </p>
            <Button
              primary
              suffix={<LuMoveRight />}
              size="lg"
              className="rounded-full mx-auto"
            >
              See all
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <Tabs
            defaultValue={value}
            onChange={setValue}
            className="space-y-8 p-12"
          >
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
                key={index}
                value={item.value}
                className="flex items-stretch justify-center gap-8 flex-wrap"
              >
                <CardSheet
                  href="/"
                  img="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F1la3hgXN3C6hvQI6IulAKV%2F14b9e9e3675dea1a0d8b3e0c82559a52%2Faccounting-tasks.png%3Fw%3D270"
                  alt="Accounting Tasks"
                >
                  <div className="p-4 bg-background-100">Next.js Templates</div>
                </CardSheet>
                <CardSheet
                  href="/"
                  img="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F1la3hgXN3C6hvQI6IulAKV%2F14b9e9e3675dea1a0d8b3e0c82559a52%2Faccounting-tasks.png%3Fw%3D270"
                  alt="Accounting Tasks"
                >
                  <div className="p-4 bg-background-100">Next.js Templates</div>
                </CardSheet>
                <CardSheet
                  href="/"
                  img="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F1la3hgXN3C6hvQI6IulAKV%2F14b9e9e3675dea1a0d8b3e0c82559a52%2Faccounting-tasks.png%3Fw%3D270"
                  alt="Accounting Tasks"
                >
                  <div className="p-4 bg-background-100">Next.js Templates</div>
                </CardSheet>
                <CardSheet
                  href="/"
                  img="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F1la3hgXN3C6hvQI6IulAKV%2F14b9e9e3675dea1a0d8b3e0c82559a52%2Faccounting-tasks.png%3Fw%3D270"
                  alt="Accounting Tasks"
                >
                  <div className="p-4 bg-background-100">Next.js Templates</div>
                </CardSheet>
              </Tabs.Content>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
