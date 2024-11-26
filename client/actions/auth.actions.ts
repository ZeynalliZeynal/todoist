"use server";

import { FieldValues } from "react-hook-form";
import apiClient from "@/lib/api-client";

export async function login(formData: FieldValues) {
  const { email, password } = formData;
  try {
    const response = await apiClient.post("/auth/login", {
      email,
      password,
    });
    console.log(response.data.token);
  } catch (err) {
    console.log(err);
  }
}
