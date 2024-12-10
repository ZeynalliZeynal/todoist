import { z } from "zod";

export const emailSchema = z.string().email().min(1).max(255).trim();

export const loginSchema = z.object({
  email: emailSchema,
});

export const signupSchema = loginSchema.extend({
  name: z.string().min(1).max(50).trim(),
});
