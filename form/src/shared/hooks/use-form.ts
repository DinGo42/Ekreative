import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

export const useCustomForm = <T extends z.Schema, C = any>({
  schema,
  ...props
}: Omit<UseFormProps<z.infer<T>, C>, 'resolver'> & {
  schema: T;
}): UseFormReturn<z.infer<T>, C> => {
  return useForm<z.infer<T>, C>({
    mode: 'onBlur',
    ...props,
    resolver: zodResolver(schema),
  });
};
