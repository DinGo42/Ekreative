import {
  phoneNumberSchema,
  tokenSchema,
} from '@form/widgets/regestration-form/schema';
import { z } from 'zod';

export const formSchema = z
  .object({
    token: tokenSchema,
    confirmCode: z.string().min(4).max(4),
    phoneNumber: phoneNumberSchema.optional(),
  })
  .refine((data) => data.confirmCode === data.token, {
    message: 'Wrong token',
    path: ['confirmCode'],
  });
export type FormSchema = z.infer<typeof formSchema>;
