import { z } from "zod";

export const signInSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First Name is required" })
      .min(3, { message: "First Name must be at least 3 characters" })
      .trim(),

    lastName: z
      .string()
      .min(1, { message: "Last Name is required" })
      .min(3, { message: "Last Name must be at least 3 characters" })
      .trim(),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email address")
      .trim(),

    company: z
      .string()
      .min(1, { message: "Company Name is required" })
      .min(3, { message: "Company Name must be at least 4 characters" })
      .trim(),

    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters" })
      .trim(),

    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" })
      .min(6, { message: "Confirm Password must be at least 6 characters" })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address")
    .trim(),

  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .trim(),
});
