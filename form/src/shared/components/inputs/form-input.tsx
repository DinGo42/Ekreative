import { UseControllerProps, Path, useController } from 'react-hook-form';
import { PhoneInput, PhoneInputProps } from './phone-input';
import { Input, InputProps } from './input';
import { twJoin } from 'tailwind-merge';
import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { z } from 'zod';

type PhoneFormInputProps<T extends z.Schema> = {
  phoneInput: true;
  className?: string;
} & PhoneInputProps &
  UseControllerProps<z.infer<T>, Path<z.infer<T>>>;

export type FormInputProps<T extends z.Schema> = {
  phoneInput?: false;
  className?: string;
} & UseControllerProps<z.infer<T>, Path<z.infer<T>>> &
  InputProps;

type FormInputComponentProps<T extends z.Schema> = {
  children?: ReactNode;
} & (
  | Omit<FormInputProps<z.infer<T>>, 'children'>
  | Omit<PhoneFormInputProps<z.infer<T>>, 'children'>
);

export const FormInput = forwardRef(
  <T extends z.Schema>(
    { children, className, ...props }: FormInputComponentProps<T>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { field, fieldState } = useController<z.infer<T>>(props);
    return (
      <>
        {props.phoneInput ? (
          <PhoneInput
            className={twJoin(fieldState.error && 'border-red', className)}
            {...field}
            {...props}
            ref={ref}
          >
            {children}
          </PhoneInput>
        ) : (
          <Input
            {...field}
            className={twJoin(fieldState.error && 'border-red', className)}
            {...props}
            ref={ref}
          >
            {children}
          </Input>
        )}
      </>
    );
  }
);
