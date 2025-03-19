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


export const SaveStorySchema = z
  .object({
    storyName: z
      .string()
      .min(1, { message: "Story Name is required" })
      .min(3, { message: "Story Name be at least 3 characters" })
      .trim(),

    query: z
      .string()
      .min(1, { message: "Query is required" })
      .trim(),

    resultType: z.
      enum(["Line Chart", "Bar Chart", "Report"], {
        errorMap: () => ({ message: "Invalid type selected" })
      }),
  })


export const AddStoryBoardSchema = z
  .object({
    storyBoardName: z
      .string()
      .min(1, { message: "Story Board Name is required" })
      .min(3, { message: "Story Board Name be at least 3 characters" })
      .trim(),
  })

export const AddStoryBoardForUserSchema = z
  .object({
    storyBoardId: z
      .string()
      .min(1, { message: "Story Board ID is required" }),
  })

export const editemployeeSchema = z.
  object({
    employeeName: z.
      string()
      .min(1, { message: "Employee Name is required" })
      .min(3, { message: "Employee Name be at least 3 characters" }),
    level: z.coerce.
      number().int()
      .min(1, { message: "Level is required" })
      .max(5, { message: "Level must be between 1 and 5" }),
    quota: z.coerce.
      number().int().optional()
  });

export const employeeSchema = z.
  object({
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

    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters" })
      .trim(),

    level: z
      .string()
      .min(1, { message: "Please select a level" })
      .refine((val) => ["2", "3", "4", "5"].includes(val), {
        message: "Invalid database type selected",
      }),
  });
