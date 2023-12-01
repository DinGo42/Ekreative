import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ComponentWrapperProps = {
  children: ReactNode;
  className?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const ComponentWrapper: FC<ComponentWrapperProps> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={twMerge(
      'flex dectopM:pl-40 dectopM:pr-40 pr-5 pl-5 items-center text-blue-1000 pb-32 pt-32 text-bs-1 relative',
      className
    )}
    {...props}
  >
    {children}
  </div>
);
