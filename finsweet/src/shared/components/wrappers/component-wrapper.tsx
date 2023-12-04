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
      'flex dectopM:pl-40 dectopM:pr-40 dectopM:pb-32 dectopM:pt-32 tabletS:pt-16 tabletS:pb-16 tabletS:pr-20 tabletS:pl-20 pr-10 pl-10 pt-8 pb-8 items-center text-blue-1000 text-bs-1 relative',
      className
    )}
    {...props}
  >
    {children}
  </div>
);
