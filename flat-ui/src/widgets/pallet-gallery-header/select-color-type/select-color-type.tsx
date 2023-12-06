'use client';
import {
  AnimationsTimingKeys,
  CopyFormats,
  useOptionalStyle,
  useUIContext,
} from '@flat-ui/shared';
import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const CopyFormatsText = {
  [CopyFormats.HEX]: 'Hex (#AA1923)',
  [CopyFormats.RGB]: 'RGB - (1,2,3)',
  [CopyFormats.RGBA]: 'RGBA - (1,2,3,0.4)',
};

export const ColorTypeSelector: FC = () => {
  const { className, disableStyle, enableStyle } = useOptionalStyle({
    onDisable: () => setOpen(false),
    style: (isOpen: boolean) =>
      isOpen ? 'animate-scaleShow' : 'scale-50 opacity-0',
    timing: AnimationsTimingKeys.LONG,
  });
  const { colorType, setColorType } = useUIContext();
  const [isOpen, setOpen] = useState(false);

  const selectHandler = (type: CopyFormats) => {
    setOpen(() => false);
    setColorType(type);
  };
  return (
    <div className="h-full phoneM:w-[300px] w-[200px] bg-black text-white flex flex-col relative rounded-md animate-scale ">
      <button
        className="w-full pl-9 pr-9 pt-1 pb-1"
        onClick={() => {
          isOpen ? disableStyle() : enableStyle();
          setOpen(true);
        }}
      >
        Copy Format: {CopyFormatsText[colorType]}
      </button>
      {isOpen && (
        <div
          className={twMerge(
            className,
            'flex flex-col absolute top-12 bg-black z-10 w-full left-0 rounded-md transition-all duration-700'
          )}
        >
          <button
            onClick={() => selectHandler(CopyFormats.HEX)}
            className="p-3 hover:bg-black bg-white text-black hover:text-white border-b-[1.5px] rounded-t-md"
          >
            {CopyFormatsText[CopyFormats.HEX]}
          </button>
          <button
            onClick={() => selectHandler(CopyFormats.RGB)}
            className="p-3 hover:bg-black bg-white text-black  hover:text-white border-b-[1.5px]"
          >
            {CopyFormatsText[CopyFormats.RGB]}
          </button>
          <button
            onClick={() => selectHandler(CopyFormats.RGBA)}
            className="p-3 hover:bg-black bg-white text-black hover:text-white rounded-b-md"
          >
            {CopyFormatsText[CopyFormats.RGBA]}
          </button>
        </div>
      )}
    </div>
  );
};
