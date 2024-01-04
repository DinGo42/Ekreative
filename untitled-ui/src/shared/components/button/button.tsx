import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export enum ButtonStyleTypes {
  PURPLE_WITH_BORDER_BOTTOM = 'border-purple-800 text-purple-800 border-b-2 pb-3 px-[5px] whitespace-nowrap',
  ROUNDED_GRAY = 'border-[1px] border-gray-200 hover:border-purple-800 w-full rounded-lg py-3 p-2 flex items-center',
  ROUNDED_PURPLE = 'w-full text-center bg-purple-800 p-3 rounded-lg text-white',
  ROUNDED_SQUARE = 'max-tabletS:h-10 max-tabletS:w-10 max-tabletS:border-[1px] border-gray-200 items-center justify-center flex rounded-lg gap-3 flex items-center',
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
