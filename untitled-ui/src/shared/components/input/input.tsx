import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

export enum InputStyleTypes {
  GRAY_ROUNDED = 'text-medium-regular outline-none border-[1.5px] border-gray-200 rounded-lg p-3',
  NONE = '',
}

type InputProps = {
  children?: ReactNode;
  styleType?: InputStyleTypes;
  className?: string;
  wrapperClassName?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ styleType, wrapperClassName, children, className, ...props }, ref) => (
    <div className={twMerge('flex relative w-fit h-fit', wrapperClassName)}>
      <input ref={ref} {...props} className={twMerge(styleType, className)} />
      {children}
    </div>
  )
);
