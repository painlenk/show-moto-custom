import { z } from "zod";

export const schema = z
  .object({
    username: z.string().min(4, "require minimun 4 caracters"),
    email: z.string().email("insert valid email"),
    password: z.string().min(4, "require minimun 4 caracters"),
    confirmPassword: z.string().min(4, "require minimun 4 caracters"),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords dont match",
    path: ["confirmPassword"],
  });
