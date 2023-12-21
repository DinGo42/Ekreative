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
// w-full py-[10px] pl-12
// p-3 tabletS:pt-[10px] tabletS:pb-[10px] tabletS:px-[14px] max-tabletS:mb-2
// p-3 tabletS:pt-[10px] tabletS:pb-[10px] tabletS:px-[14px] max-tabletS:mb-2
// w-full py-[10px] pl-12
// px-[14px] py-[10px]

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
