import { FC } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

export enum InputStyleTypes {
  MAIN = 'w-full outline-none focus:border-blue border-[#E2E4E5] border-b-[1px] disabled:bg-white transition-colors pl-4 py-2',
  NONE = '',
}

export type InputProps = {
  children?: React.ReactNode;
  styleType?: InputStyleTypes;
  inputWrapperClassName?: string;
  className?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: FC<InputProps> = ({
  children,
  className,
  inputWrapperClassName,
  styleType,
  ...props
}) => (
  <>
    <div
      className={twMerge(
        'relative w-full h-fit gap-2 flex items-start',
        inputWrapperClassName
      )}
    >
      <input
        className={twJoin(className, styleType, 'w-full h-full')}
        {...props}
      />
      {children}
    </div>
  </>
);
