'use client';
import { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';
import { Button, ButtonProps } from '../button';
import { twMerge } from 'tailwind-merge';

type DropDownProps = {
  children: ReactNode;
  className?: string;
  secondOnClick?: () => void;
  controls?: { isOpen: boolean; setOpen: Dispatch<SetStateAction<boolean>> };
  buttonSettings?: Omit<ButtonProps, 'onClick'>;
  buttonChildren: ReactNode | string;
  isOpenButtonChildren?: ReactNode | string;
  childrenClassName?: string;
};

export const DropDown: FC<DropDownProps> = ({
  children,
  className,
  childrenClassName,
  secondOnClick,
  buttonSettings,
  buttonChildren,
  isOpenButtonChildren,
  controls,
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button
        {...buttonSettings}
        onClick={() => {
          if (controls) {
            controls.setOpen((prev) => !prev);
            secondOnClick?.();
          } else {
            setOpen((prev) => !prev);
            secondOnClick?.();
          }
        }}
      >
        {(controls?.isOpen || isOpen) && isOpenButtonChildren
          ? isOpenButtonChildren
          : buttonChildren}
      </Button>
      <div
        className={twMerge(
          'w-full grid transition-all duration-500',
          controls?.isOpen || isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          className
        )}
      >
        <div className="w-full overflow-hidden">
          <div className={twMerge('flex flex-col', childrenClassName)}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
