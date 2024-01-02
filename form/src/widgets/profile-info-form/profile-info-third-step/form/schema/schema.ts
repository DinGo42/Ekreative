import { addressSchema, optionalSchema } from '../../../schema';
import { z } from 'zod';

export const formSchema = z.object({
  address: addressSchema,
  optional: optionalSchema,
});

export type FormSchema = z.infer<typeof formSchema>;
