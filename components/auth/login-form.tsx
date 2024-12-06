"use client";

import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { LuMail } from "react-icons/lu";
import { FieldValues, useForm } from "react-hook-form";
import { useTransition } from "react";
import { login } from "@/actions/auth.actions";
import Spinner from "@/components/ui/spinner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string(),
});

export default function LoginForm() {
  const { handleSubmit, register } = useForm<z.infer<typeof schema>>({
    defaultValues: {
      email: "zzeynalli446@gmail.com",
      password: "zzeynalli",
    },
    resolver: zodResolver(schema),
  });
  const [isPending, startTransition] = useTransition();

  function onSubmit(formValues: FieldValues) {
    startTransition(async () => {
      await login(formValues);
    });
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        size="large"
        placeholder="Email"
        required
        autoFocus
        type="email"
        {...register("email")}
      />
      <Input
        size="large"
        placeholder="Password"
        required
        type="password"
        {...register("password")}
      />
      <Button
        type="submit"
        prefix={!isPending && <LuMail />}
        size="lg"
        className="w-full rounded-lg"
      >
        {isPending ? <Spinner size={24} /> : "Continue with Email"}
      </Button>
    </form>
  );
}