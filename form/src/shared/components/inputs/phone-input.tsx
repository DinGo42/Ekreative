import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Country, Value } from 'react-phone-number-input';
import LibPhoneInput from 'react-phone-number-input/input';
import { InputStyleTypes } from './input';

export type PhoneInputProps = {
  value?: string;
  children: ReactNode;
  styleType?: InputStyleTypes;
  inputWrapperClassName?: string;
  className?: string;
  onChange?: (value?: Value) => void;
  selcedCountry?: Country;
  international?: boolean;
  phoneInput?: boolean;
};

export const PhoneInput = forwardRef(
  (
    {
      children,
      className,
      inputWrapperClassName,
      styleType,
      onChange = () => {},
      selcedCountry,
      international = true,
      phoneInput,
      value,
      ...props
    }: PhoneInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <>
      <div className={twMerge('relative w-fit h-fit', inputWrapperClassName)}>
        <LibPhoneInput
          {...props}
          ref={ref}
          value={value}
          onChange={onChange}
          international={international}
          className={twMerge(styleType, className)}
          defaultCountry={selcedCountry}
        />
        {children}
      </div>
    </>
  )
);
