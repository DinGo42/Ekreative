import { phoneNumberSchema } from '@form/widgets/regestration-form/schema';
import { z } from 'zod';

export const firstNameSchema = z.string();
export const secondNameSchema = z.string();
export const dataOfBirthSchema = z.string();
export const placeOfBirthSchema = z.string();
export const itinSchema = z.string();
export const emailSchema = z.string();
export const addressSchema = z.string();
export const citySchema = z.string();
export const countrySchema = z.string();
export const zidCodeSchema = z.number();
export const optionalSchema = z.string().optional();
export const socialNetworkSchema = z
  .array(
    z.object({
      socialNetwork: z.string(),
      profile: z.string(),
    })
  )
  .optional();

export const formSchema = z.object({
  firstName: firstNameSchema,
  secondName: secondNameSchema,
  dataOfBirth: dataOfBirthSchema,
  placeOfBirth: placeOfBirthSchema,
  itin: itinSchema,
  email: emailSchema,
  address: addressSchema,
  city: citySchema,
  country: countrySchema,
  zidCode: zidCodeSchema,
  optional: optionalSchema,
  phoneNumber: phoneNumberSchema,
  socialNetwork: socialNetworkSchema,
});

export type FormSchema = z.infer<typeof formSchema>;
