import { FC } from "react";
import { Link } from "../link";
type PalletProps = {
  colors: { name: string; color: string }[];
  name: string;
  id: string;
  emoji: string;
};

export const Pallet: FC<PalletProps> = ({ colors, name, emoji, id }) => {
  return (
    <Link href={"/" + id} className="group flex h-[200px] w-full flex-col rounded-md bg-white p-2" id={id}>
      <div className="flex h-full w-full flex-wrap">
        {colors.map(({ color }, index) => (
          <div className="h-1/4 w-1/5" style={{ background: color }} key={index} />
        ))}
      </div>
      <div className="flex w-full items-center justify-between text-black">
        <span>{name}</span>
        <span className="opacity-0 group-hover:opacity-100">{emoji}</span>
        <span className="group-hover:hidden">
          {name.split(" ").map(char => {
            if (char === "UI" || char === "Colors" || char === char.toLowerCase()) return "";
            return char[0];
          })}
        </span>
      </div>
    </Link>
  );
};
