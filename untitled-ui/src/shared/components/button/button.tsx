import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export enum ButtonStyleTypes {
  PURPLE_WITH_BORDER_BOTTOM = 'border-purple-800 text-purple-800 border-b-2 pb-3 pl-[5px] pr-[5px] whitespace-nowrap',
  ROUNDED_GRAY = 'border-[1px] border-[#D0D5DD] hover:border-purple-800 w-full rounded-lg pl-3 pr-3 p-2 flex items-center',
  ROUNDED_PURPLE = 'w-full text-center bg-purple-800 p-3 rounded-lg text-white',
  ROUNDED_SQUARE = 'h-10 w-10 border-[1px] border-[#D0D5DD] items-center justify-center flex rounded-lg',
  NONE = '',
}

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  styleType?: ButtonStyleTypes;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FC<ButtonProps> = ({
  children,
  className,
  styleType,
  ...props
}) => (
  <button {...props} className={twMerge(styleType, className)}>
    {children}
  </button>
);
