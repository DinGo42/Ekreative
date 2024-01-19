"use client";
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode, forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export enum InputStyleTypes {
  MAIN = "w-full outline-none focus:border-blue border-[#E2E4E5] border-b-[1px] disabled:bg-white transition-colors pl-4 py-2",
  NONE = "",
}

export type InputProps = {
  children?: ReactNode;
  styleType?: InputStyleTypes;
  inputWrapperClassName?: string;
  className?: string;
  phoneInput?: boolean;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, inputWrapperClassName, styleType, value, onChange, ...props }, ref) => {
    const [inputValue, setInputValue] = useState("");
    return (
      <>
        <div className={twMerge("relative flex h-fit w-full items-start gap-2", inputWrapperClassName)}>
          <input
            className={twMerge(styleType, "h-full w-full", className)}
            {...props}
            value={value || inputValue}
            onChange={e => {
              setInputValue(e.target.value);
              onChange?.(e);
            }}
            ref={ref}
          />
          {children}
        </div>
      </>
    );
  },
);
