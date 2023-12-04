'use client';

import { FC } from 'react';
import useSound from 'use-sound'
import { CopyFormats, colorConvector } from '@flat-ui/shared';

type PaleetGalaryProps = {
  colors: { color: string; name: string }[];
};

export const PaleetGalary: FC<PaleetGalaryProps> = ({ colors }) => {
  const colorFormat = Number(localStorage.getItem('colorFormat')) as CopyFormats;
  const isSoundPlay = !!localStorage.getItem('isSoundPlay')
  const [play] = useSound('/notify.mp3');
  return (
    <>
      {colors.map(({ color, name }, index) => (
        <button
          key={index}
          onClick={() => {
            isSoundPlay&&play()
            navigator.clipboard.writeText(colorConvector(color, colorFormat));
          }}
          className="flex items-center justify-center group relative"
          style={{ background: color }}
        >
          <span className="border-2 border-opacity-20 p-2 pl-8 pr-8 rounded-md group-hover:opacity-100 opacity-0 transition-all">
            Copy
          </span>
          <span className="absolute right-2 bottom-2">
            {name.toUpperCase()}
          </span>
        </button>
      ))}
    </>
  );
};
