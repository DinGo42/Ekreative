import validator from "validator";
import { z } from "zod";

export const passwordSchema = z.string().refine(data => {
  const length = data.length;

  if (length < 4) return false;

  if (length > 10 && /[a-zA-Z]/.test(data) && /\d/.test(data)) {
    return true;
  }

  if (/\d/.test(data) && /[a-zA-Z]/.test(data)) {
    return true;
  }
});
export const emailSchema = z.string().email().refine(validator.isEmail);
export const phoneNumberSchema = z.string().refine(validator.isMobilePhone);
export const tokenSchema = z.string().min(4);
export const formSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  phoneNumber: phoneNumberSchema,
  token: tokenSchema,
});

export type FormSchema = z.infer<typeof formSchema>;
