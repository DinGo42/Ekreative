import { FC } from 'react';

export const Header: FC = () => {
  return (
    <div className="w-full text-secondary text-white flex justify-between pt-10 pb-10 ">
      <button className="text-main text-white">Flat UI COLORS 2</button>
      <span className="max-phoneSPlus:hidden">Subscribe</span>
    </div>
  );
};
