'use client';
import { CopyFormats } from '@flat-ui/shared';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const CopyFormatsText = {
  [CopyFormats.HEX]: 'Hex (#AA1923)',
  [CopyFormats.RGB]: 'RGB - (1,2,3)',
  [CopyFormats.RGBA]: 'RGBA - (1,2,3,0.4)',
};

export const ColorTypeSelector = () => {
  const [format, setFromat] = useState(CopyFormats.HEX);
  const [isOpen, setOpen] = useState(false);
  useEffect(
    () => localStorage.setItem('colorFormat', format.toString()),
    [format]
  );
  return (
    <div className="h-full w-[300px] bg-black text-white flex flex-col relative rounded-md">
      <button
        className="w-full pl-9 pr-9 pt-1 pb-1"
        onClick={() => setOpen((prev) => !prev)}
      >
        Copy Format: {CopyFormatsText[format]}
      </button>
      {isOpen && (
        <div
          className={twMerge(
            'flex flex-col absolute top-12 bg-black z-10 w-full left-0 rounded-md transition-all duration-700',
            isOpen ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          <button
            onClick={() => {
              setOpen(() => false);
              setFromat(CopyFormats.HEX);
            }}
            className="p-3 hover:bg-black bg-white text-black hover:text-white border-b-[1.5px] rounded-t-md"
          >
            {CopyFormatsText[CopyFormats.HEX]}
          </button>
          <button
            onClick={() => {
              setOpen(() => false);
              setFromat(CopyFormats.RGB);
            }}
            className="p-3 hover:bg-black bg-white text-black  hover:text-white border-b-[1.5px]"
          >
            {CopyFormatsText[CopyFormats.RGB]}
          </button>
          <button
            onClick={() => {
              setOpen(() => false);
              setFromat(CopyFormats.RGBA);
            }}
            className="p-3 hover:bg-black bg-white text-black hover:text-white rounded-b-md"
          >
            {CopyFormatsText[CopyFormats.RGBA]}
          </button>
        </div>
      )}
    </div>
  );
};
