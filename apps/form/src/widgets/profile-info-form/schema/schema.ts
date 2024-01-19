import { z } from "zod";

export const firstNameSchema = z.string().trim().min(1);
export const secondNameSchema = z.string().trim().min(1);
export const dataOfBirthSchema = z.string().trim().min(1);
export const placeOfBirthSchema = z.string().trim().min(1);
export const itinSchema = z.string().min(8);
export const addressSchema = z.string();
export const citySchema = z.string();
export const countrySchema = z.string();
export const optionalSchema = z.string().trim().min(1).optional();
export const zipCodeSchema = z.string();

export const socialNetworkSchema = z
  .array(
    z.object({
      socialNetwork: z.string(),
      profile: z.string(),
    }),
  )
  .optional();

export const formSchema = z.object({
  firstName: firstNameSchema,
  secondName: secondNameSchema,
  dataOfBirth: dataOfBirthSchema,
  placeOfBirth: placeOfBirthSchema,
  itin: itinSchema,
  city: citySchema,
  zipCode: zipCodeSchema,
  country: countrySchema,
  address: addressSchema,
  optional: optionalSchema,
  socialNetwork: socialNetworkSchema,
});

export type FormSchema = z.infer<typeof formSchema>;
