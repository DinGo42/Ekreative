'use client';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import { ButtonStyleTypes } from '../constants';

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
    className={twMerge(styleType, className, 'transition-colors')}
  >
    {children}
  </button>
);
