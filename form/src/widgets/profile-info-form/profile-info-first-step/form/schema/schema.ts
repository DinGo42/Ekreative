import {
  dataOfBirthSchema,
  firstNameSchema,
  placeOfBirthSchema,
  secondNameSchema,
} from '../../../schema';
import { z } from 'zod';

export const formSchema = z.object({
  firstName: firstNameSchema,
  secondName: secondNameSchema,
  dataOfBirth: dataOfBirthSchema,
  placeOfBirth: placeOfBirthSchema,
});

export type FormSchema = z.infer<typeof formSchema>;
