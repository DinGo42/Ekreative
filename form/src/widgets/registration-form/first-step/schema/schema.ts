import { z } from "zod";
import { phoneNumberSchema } from "../../schema";

export const formSchema = z.object({
  phoneNumber: phoneNumberSchema,
});

export type FormSchema = z.infer<typeof formSchema>;
