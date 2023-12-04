'use client';

import { CopyFormats, colorConvector } from '@flat-ui/shared';
import { FC } from 'react';

type PaleetGalaryProps = {
  colors: { color: string; name: string }[];
};

export const PaleetGalary: FC<PaleetGalaryProps> = ({ colors }) => {
  const colorFormat = localStorage.getItem('colorFormat');
  return (
    <>
      {colors.map(({ color, name }, index) => (
        <button
          key={index}
          onClick={() => {
            const a = colorConvector(color, CopyFormats.HEX);
            navigator.clipboard.writeText('');
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
