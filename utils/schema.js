import { z } from "zod";

export const signInSchema = z.object({
  name: z.string()
    .min(1, { message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" })
    .trim(),

  email: z.string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address")
    .trim(),

  password: z.string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .trim(),

  confirmPassword: z.string()
    .min(1, { message: "Confirm Password is required" })
    .min(6, { message: "Confirm Password must be at least 6 characters" })
    .trim(),
})
.refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
});

export const loginSchema =z.object({
  email: z.string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address")
    .trim(),
    
    password: z.string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .trim(),
})