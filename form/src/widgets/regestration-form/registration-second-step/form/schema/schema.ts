import { z } from 'zod';
export const formSchema = z
  .object({
    token: z.string(),
    confirmCode: z.string().min(4).max(4),
    phoneNumber: z.string().optional(),
  })
  .refine((data) => data.confirmCode === data.token, {
    message: 'Wrong token',
    path: ['confirmCode'],
  });
export type FormSchema = z.infer<typeof formSchema>;
