import {
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

export enum InputStyleTypes {
  MAIN = 'w-full outline-none focus:border-blue border-[#E2E4E5] border-b-[1px] disabled:bg-white transition-colors pl-4 py-2',
  NONE = '',
}

export type InputProps = {
  children?: ReactNode;
  styleType?: InputStyleTypes;
  inputWrapperClassName?: string;
  className?: string;
  phoneInput?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = forwardRef(
  (
    {
      children,
      className,
      inputWrapperClassName,
      styleType,
      phoneInput,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <>
      <div
        className={twMerge(
          'relative w-full h-fit gap-2 flex items-start',
          inputWrapperClassName
        )}
      >
        <input
          className={twMerge(styleType, 'w-full h-full', className)}
          {...props}
          ref={ref}
        />
        {children}
      </div>
    </>
  )
);
