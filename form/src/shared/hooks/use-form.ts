import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { ZodObject } from 'zod';

type FormProps = ZodObject<any, any, any, any, any>;

export const useCustomForm = <FormSchema extends FieldValues>(
  formSchema: FormProps
) =>
  useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
