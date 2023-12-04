'use client';
import Link from 'next/link';
import { FC } from 'react';
type PalletProps = {
  colors: { name: string; color: string }[];
  name: string;
  id: string;
  emoji: string;
};

export const Pallet: FC<PalletProps> = ({ colors, name, emoji, id }) => {
  return (
    <Link
      href={'/' + id}
      className="p-2 bg-white flex flex-col w-full h-[200px] rounded-md group"
      id={id}
    >
      <div className="w-full h-full flex flex-wrap">
        {colors.map(({ color }, index) => (
          <div
            className="w-1/5 h-1/4"
            style={{ background: color }}
            key={index}
          />
        ))}
      </div>
      <div className="flex justify-between items-center text-black w-full">
        <span>{name}</span>
        <span className="group-hover:opacity-100 opacity-0">{emoji}</span>
        <span className="group-hover:hidden">
          {name.split(' ').map((char) => {
            if (
              char === 'UI' ||
              char === 'Colors' ||
              char === char.toLowerCase()
            )
              return '';
            return char[0];
          })}
        </span>
      </div>
    </Link>
  );
};
