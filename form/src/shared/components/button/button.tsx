import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes, FC } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

export enum ButtonStyleTypes {
  MAIN = 'px-6 py-3 border-[1px] w-fit border-[#E2E4E5] rounded-md max-phoneM:self-center',
  SECONDARY = 'flex px-8 pr-6 py-3 border-[1px] w-fit border-[#E2E4E5] rounded-md max-phoneM:self-center',
  NONE = '',
}

type ButtonProps = {
  children: ReactNode;
  styleType?: ButtonStyleTypes;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FC<ButtonProps> = ({
  children,
  styleType,
  className,
  ...props
}) => (
  <button className={twJoin(className, styleType)} {...props}>
    {children}
  </button>
);
