import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

export enum InputStyleTypes {
  ROUNDED_DARK_BLUE = 'placeholder:text-blue-50 outline-none border-2 w-full border-[#ffffff0d] bg-blue-900 rounded-lg focus:border-blue-200 transition-colors pl-8 pt-4 pb-4',
  NONE = '',
}

export enum InputErrorStyleType {
  RED_BORDER = 'border-red-800',
  NONE = '',
}

type InputProps = {
  children?: ReactNode;
  styleType?: InputStyleTypes;
  className?: string;
  errorStyleType?: InputErrorStyleType;
  isError?: FieldError;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input: FC<InputProps> = ({
  children,
  styleType = InputStyleTypes.ROUNDED_DARK_BLUE,
  className,
  isError,
  errorStyleType = InputErrorStyleType.RED_BORDER,
  ...props
}) => (
  <div className="flex flex-col w-full h-full">
    <input
      {...props}
      className={twMerge(styleType, className, isError?.type && errorStyleType)}
    />
    {children}
  </div>
);
