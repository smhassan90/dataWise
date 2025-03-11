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

export const IntegrationSchema = z
  .object({
    integrationName: z
      .string()
      .min(1, { message: "Integration Name is required" })
      .min(3, { message: "Integration Name be at least 3 characters" })
      .trim(),

    platformName: z.
      enum(["mysql", "acuity"], {
        errorMap: () => ({ message: "Invalid database type selected" })
      }),

    url: z.string().url("Invalid URL format"),

    username: z
      .string()
      .min(1, { message: "User Name is required" })
      .trim(),

    password: z
      .string()
      .min(1, { message: "Password is required" })
      .trim(),
  })


// export const MetaIntegrationSchema = z.
//   object({
//     tableName: z.
//       string()
//       .min(1, { message: "Name is required" }),
//     // checked: z.boolean(),
//   //   description: z.
//   //     string()
//   //     .min(1, { message: "Description are required" }).optional()
//   // }).refine(item => !item.checked || (item.checked && item.description), {
//   //   message: 'Description are required',
//   //   path: ['description']
//   });

export const MetaIntegrationSchema = z.object({
  tables: z.array(
    z.object({
      tableName: z.string().min(1, { message: "Table name is required" }),
      checked: z.boolean(),
      description: z.string().optional()
    })
  ).superRefine((items, ctx) => {
    items.forEach((item, index) => {
      if (item.checked && !item.description) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [index, "description"],
          message: "Description is required"
        });
      }
    });
  })
}); 
