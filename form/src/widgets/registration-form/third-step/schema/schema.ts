import { z } from "zod";
import { passwordSchema, emailSchema } from "../../schema";

export const formSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type FormSchema = z.infer<typeof formSchema>;
