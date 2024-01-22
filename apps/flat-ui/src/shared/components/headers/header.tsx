import { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="text-secondary flex w-full justify-between pb-10 pt-10 text-white ">
      <button className="text-main text-white">Flat UI COLORS 2</button>
      <span className="max-phoneSPlus:hidden">Subscribe</span>
    </div>
  );
};
