import { FC, ReactNode } from 'react';

type FeatureCardProps = {
  text: string;
  title: string;
  icon: ReactNode;
};
export const FeatureCard: FC<FeatureCardProps> = ({ icon, text, title }) => (
  <div className="flex w-[100%] h-full text-xs flex-col bg-white-1000 p-12 gap-6">
    {icon}
    <div className="flex flex-col w-full gap-3">
      <span>{title}</span>
      <span className="text-bs-1">{text}</span>
    </div>
  </div>
);
