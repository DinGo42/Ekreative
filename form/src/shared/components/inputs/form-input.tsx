import {
  FieldValues,
  UseControllerProps,
  Path,
  useController,
} from 'react-hook-form';
import { PhoneInput, PhoneInputProps } from './phone-input';
import { Input, InputProps } from './input';
import { twJoin } from 'tailwind-merge';

type PhoneFormInputProps<T extends FieldValues> = {
  phoneInput: true;
  className?: string;
} & PhoneInputProps &
  UseControllerProps<T, Path<T>>;

type FormInputProps<T extends FieldValues> = {
  phoneInput?: false;
  className?: string;
} & UseControllerProps<T, Path<T>> &
  InputProps;

type FormInputComponentProps<T extends FieldValues> =
  | FormInputProps<T>
  | PhoneFormInputProps<T>;

export const FormInput = <T extends FieldValues>({
  children,
  className,
  ...props
}: FormInputComponentProps<T>) => {
  const { field, fieldState } = useController<T>(props);

  return (
    <>
      {props.phoneInput ? (
        <PhoneInput
          className={twJoin(fieldState.error && 'border-red', className)}
          {...field}
          {...props}
        >
          {children}
        </PhoneInput>
      ) : (
        <Input
          {...field}
          className={twJoin(fieldState.error && 'border-red', className)}
          {...props}
        >
          {children}
        </Input>
      )}
    </>
  );
};
