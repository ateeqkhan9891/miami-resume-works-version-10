

import {z} from "zod";

export const loginSchema = z.object({
    email: z.string().min(1,"Email is required").email("required valid email address"),

    password: z.string().min(1,"Password is required"),
});


export type LoginFormData = z.infer<typeof loginSchema>;



export const signupSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(80, "Name is too long"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignupFormData = z.infer<typeof signupSchema>;