import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  Country,
  DefaultInputComponentProps,
  Value,
} from 'react-phone-number-input';
import LibPhoneInput from 'react-phone-number-input/input';
import { InputStyleTypes } from './input';

export type PhoneInputProps = {
  children?: React.ReactNode;
  styleType?: InputStyleTypes;
  inputWrapperClassName?: string;
  className?: string;
  onChange?: (value?: Value) => void;
  selcedCountry?: Country;
  international?: boolean;
} & DefaultInputComponentProps;

export const PhoneInput: FC<PhoneInputProps> = ({
  children,
  className,
  inputWrapperClassName,
  styleType,
  onChange = () => {},
  type,
  selcedCountry = 'UA',
  international = true,
  ...props
}) => (
  <>
    <div className={twMerge('relative w-fit h-fit', inputWrapperClassName)}>
      <LibPhoneInput
        {...props}
        onChange={onChange}
        international={international}
        className={twMerge(styleType, className)}
        defaultCountry={selcedCountry}
      />
      {children}
    </div>
  </>
);
