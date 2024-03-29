import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import { twJoin, twMerge } from "tailwind-merge";
import { InputErrorStyleType, InputStyleTypes } from "../../constants";

type InputProps<T extends FieldValues> = {
  register?: UseFormRegister<T>;
  registerParams?: RegisterOptions<T>;
  name?: Path<T>;
  inputWrapperClassName?: string;
  children?: ReactNode;
  styleType?: InputStyleTypes;
  className?: string;
  errorStyleType?: InputErrorStyleType;
  isError?: FieldError;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = <T extends FieldValues>({
  children,
  inputWrapperClassName,
  styleType = InputStyleTypes.ROUNDED_DARK_BLUE,
  className,
  registerParams,
  isError,
  register,
  name,
  errorStyleType = InputErrorStyleType.RED_BORDER,
  ...props
}: InputProps<T>) => (
  <div className={twJoin("flex h-full w-full flex-col", inputWrapperClassName)}>
    <input
      {...(register &&
        name && {
          ...register(name, registerParams),
        })}
      {...props}
      className={twMerge(styleType, className, isError?.type && errorStyleType)}
    />
    {children}
  </div>
);
