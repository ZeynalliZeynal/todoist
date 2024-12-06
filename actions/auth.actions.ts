"use server";

import { FieldValues } from "react-hook-form";
import apiClient from "@/lib/api-client";
import { cookies } from "next/headers";

export async function login(formData: FieldValues) {
  const { email, password } = formData;
  try {
    const response = await apiClient.post("/auth/login", {
      email,
      password,
    });
    const token = await cookies();
    console.log(token.set("token", "token"));
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
