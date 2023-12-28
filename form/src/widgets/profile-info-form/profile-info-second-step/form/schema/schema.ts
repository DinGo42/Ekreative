import { z } from 'zod';
import { socialNetworkSchema } from '../../../schema';

export const formSchema = z.object({
  socialNetwork: socialNetworkSchema,
});
export type FormSchema = z.infer<typeof formSchema>;
