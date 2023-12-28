import validator from 'validator';
import { ZodError, z } from 'zod';

export const passwordSchema = z.string().refine(
  (data) => {
    const length = data.length;

    if (length < 4) {
      throw new ZodError([
        {
          code: 'custom',
          message: 'Bad password',
          path: [],
        },
      ]);
    }

    if (length > 10 && /[a-zA-Z]/.test(data) && /\d/.test(data)) {
      return true;
    }

    if (/\d/.test(data) && /[a-zA-Z]/.test(data)) {
      return true;
    }

    throw new ZodError([
      {
        code: 'custom',
        message: 'Пароль не відповідає вимогам.',
        path: [],
      },
    ]);
  },
  {
    message: 'Помилка валідації паролю',
  }
);
export const emailSchema = z.string().email();
export const phoneNumberSchema = z.string().refine(validator.isMobilePhone);

export const formSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  phoneNumber: phoneNumberSchema,
});

export type FormSchema = z.infer<typeof formSchema>;
