import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
export enum ButtonStyleTypes {
  MAIN = 'p-3 pl-9 pr-9 bg-yellow-90 rounded-4xl text-lb-1 text-[#1B1C2A] hover:text-[#1B1C2B] hover:bg-[#FDE4A6]',
  SECONDARY = 'p-3 pl-9 pr-9 bg-blue-1000 rounded-4xl text-lb-1 text-white-1000 hover:bg-[#535460]',
  ROUNDED = 'p-3 pl-9 pr-9 border-blue-200 border-2 rounded-4xl',
  ROUND = 'w-10 h-10 flex justify-center items-center bg-white-1000 hover:bg-[#5239FA] rounded-full transition-colors text-md text-blue-1000 hover:text-white-1000',
  NONE = '',
}

type ButtonProps = {
  children: ReactNode;
  className?: string;
  styleType?: ButtonStyleTypes;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FC<ButtonProps> = ({
  children,
  className,
  styleType = ButtonStyleTypes.NONE,
  ...props
}) => (
  <button
    {...props}
    className={twMerge(className, styleType, 'transition-colors')}
  >
    {children}
  </button>
);
