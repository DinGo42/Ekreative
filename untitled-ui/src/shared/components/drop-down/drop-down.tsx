'use client';
import {
  FC,
  ForwardRefExoticComponent,
  ForwardedRef,
  ReactNode,
  RefAttributes,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import { Button, ButtonProps } from '../button';
import { twMerge } from 'tailwind-merge';
import { ArrowDownIcon } from '@untitled/icons';

export type DropDownUIProps = {
  isExpanded: boolean;
  children: ReactNode;
  buttonTitle?: string;
  titleclassName?: string;
  buttonContent?: ReactNode;
  contentContainerClassName?: string;
  contentClassName?: string;
  buttonProps?: Omit<ButtonProps, 'onClick'>;
  dropDownOnClick?: () => void;
  onClick: () => void;
  DropDownWrapperClassName?: string;
};

type DefaultDropdownButtonContentProps = {
  title?: string;
  isExpanded: boolean;
  titleclassName?: string;
};
const DefaultDropdownButtonContent: FC<DefaultDropdownButtonContentProps> = ({
  title,
  isExpanded,
  titleclassName,
}) => {
  return (
    <>
      <span className={titleclassName}>{title}</span>
      <ArrowDownIcon className={isExpanded ? 'rotate-180' : ''} />
    </>
  );
};

export const DropDownUI: FC<DropDownUIProps> = ({
  contentContainerClassName,
  contentClassName,
  children,
  buttonProps,
  buttonContent,
  buttonTitle,
  isExpanded,
  onClick,
  DropDownWrapperClassName,
  titleclassName,
}) => {
  return (
    <div className={twMerge('relative', DropDownWrapperClassName)}>
      <Button {...buttonProps} onClick={() => onClick()}>
        {buttonContent ? (
          buttonContent
        ) : (
          <DefaultDropdownButtonContent
            isExpanded={isExpanded}
            title={buttonTitle}
            titleclassName={titleclassName}
          />
        )}
      </Button>
      <div
        className={twMerge(
          'w-full grid transition-all duration-500',
          isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          contentContainerClassName
        )}
      >
        <div className="w-full overflow-hidden">
          <div className={twMerge('flex flex-col', contentClassName)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

type DropDownProps = {
  isInitialOpened?: boolean;
} & Omit<DropDownUIProps, 'onClick' | 'isExpanded'>;

export type DropDownHandle = {
  onClick: (isOpen?: boolean) => void;
};
export const DropDown = forwardRef<DropDownHandle, DropDownProps>(
  ({ isInitialOpened = false, ...props }, ref) => {
    const [isOpened, setOpened] = useState(isInitialOpened);
    const handleOpen = useCallback(
      (isOpen?: boolean) => {
        console.log(isOpened);
        setOpened((prev) => isOpen ?? !prev);
      },
      [isOpened]
    );
    useImperativeHandle(
      ref as ForwardedRef<DropDownHandle>,
      () => {
        return {
          onClick: handleOpen,
        };
      },
      [handleOpen]
    );
    return <DropDownUI isExpanded={isOpened} onClick={handleOpen} {...props} />;
  }
);
