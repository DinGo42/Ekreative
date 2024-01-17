"use client";

import { CopyFormats } from "../../../../constants";
import { useOptionalStyle, useUIContext } from "../../../../hooks";
import { AnimationsTimingKeys } from "../../../../utils";

import { FC, useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";

export const CopyFormatsText: Record<CopyFormats, string> = {
  [CopyFormats.HEX]: "Hex (#AA1923)",
  [CopyFormats.RGB]: "RGB - (1,2,3)",
  [CopyFormats.RGBA]: "RGBA - (1,2,3,0.4)",
};

const copyFormats = Object.keys(CopyFormatsText) as CopyFormats[];

export const ColorTypeSelector: FC = () => {
  const { colorType, setColorType } = useUIContext();
  const [isOpen, setOpen] = useState(false);

  const { className, disableStyle, enableStyle } = useOptionalStyle({
    onDisable: () => {
      setOpen(false);
    },
    onEnable: () => {
      setOpen(true);
    },
    style: (isOpen: boolean) => (isOpen ? "animate-upScaleBouncy" : "animate-downScaleBouncy"),
    timing: AnimationsTimingKeys.LONG,
  });

  const selectHandler = (type: CopyFormats) => {
    disableStyle();
    setColorType(type);
  };

  return (
    <div className="relative flex h-full w-[200px] flex-col rounded-md bg-black text-white phoneM:w-[300px]">
      <button className="w-full pb-1 pl-9 pr-9 pt-1" onClick={isOpen ? disableStyle : enableStyle}>
        Copy Format: {CopyFormatsText[colorType]}
      </button>
      {isOpen && (
        <div
          className={twMerge(
            "absolute left-0 top-12 z-10 flex w-full flex-col rounded-md bg-black transition-all",
            className,
          )}
        >
          {copyFormats.map((format, index) => (
            <button
              key={index}
              onClick={() => selectHandler(CopyFormats[format])}
              className={twJoin(
                "border-b-[1.5px] bg-white p-3 text-black hover:bg-black hover:text-white",
                index === 0 && "rounded-t-md",
                index + 1 === copyFormats.length && "rounded-b-md border-b-[0px]",
              )}
            >
              {CopyFormatsText[format]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
