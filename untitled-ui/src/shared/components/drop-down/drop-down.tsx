import { FC, ReactNode } from 'react';
import { Button, ButtonProps } from '../button';
import { twMerge } from 'tailwind-merge';
import { ArrowDownIcon } from '@untitled/icons';

type DropDownProps = {
  isExpanded: boolean;
  dropdownContent: ReactNode;
  buttonTitle: string;
  buttonContent?: ReactNode;
  contentContainerClassName?: string;
  contentClassName?: string;
  buttonProps?: Omit<ButtonProps, 'onClick'>;
  dropDownOnClick?: () => void;
  onClick: () => void;
};

type DefaultDropdownButtonContentProps = {
  title: string;
  isExpanded: boolean;
};
const DefaultDropdownButtonContent: FC<DefaultDropdownButtonContentProps> = ({
  title,
  isExpanded,
}) => {
  return (
    <>
      <p>{title}</p>
      <ArrowDownIcon className={isExpanded ? 'rotate-180' : ''} />
    </>
  );
};

export const DropDown: FC<DropDownProps> = ({
  contentContainerClassName,
  contentClassName,
  dropdownContent,
  buttonProps,
  buttonContent,
  buttonTitle,
  isExpanded,
  onClick,
}) => {
  return (
    <>
      <Button {...buttonProps} onClick={onClick}>
        {buttonContent ? (
          buttonContent
        ) : (
          <DefaultDropdownButtonContent
            isExpanded={isExpanded}
            title={buttonTitle}
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
            {dropdownContent}
          </div>
        </div>
      </div>
    </>
  );
};
