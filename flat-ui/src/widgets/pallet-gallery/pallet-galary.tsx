'use client';
import useSound from 'use-sound';
import { FC, useState } from 'react';
import {
  AnimationsTimingKeys,
  animations,
  animationsTimings,
  colorConvector,
  useOptionalStyle,
  useUIContext,
} from '@flat-ui/shared';
import { Notification } from './notification';

type PaleetGalaryProps = {
  colors: { color: string; name: string }[];
};

export const PaleetGalary: FC<PaleetGalaryProps> = ({ colors }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const { className, disableStyle, enableStyle } = useOptionalStyle({
    style: animations.opacity,
    timing: AnimationsTimingKeys.LONG,
  });
  const { colorType, isSoundPlay } = useUIContext();
  const [play] = useSound('/notify.mp3');

  return (
    <>
      {colors.map(({ color, name }, index) => (
        <button
          key={index}
          onClick={() => {
            isSoundPlay && play();
            const newColorFormat = colorConvector(color, colorType);
            navigator.clipboard.writeText(newColorFormat);
            setCopiedColor(newColorFormat);
            enableStyle();
            const timer = setTimeout(() => {
              setCopiedColor(null);
              disableStyle();
              clearTimeout(timer);
            }, animationsTimings[AnimationsTimingKeys.LONG].ms + 1000);
          }}
          className="flex items-center justify-center group relative"
          style={{ background: color }}
        >
          <span className="border-2 border-opacity-20 phoneM:p-2 phoneM:pl-8 phoneM:pr-8 pl-2 pr-2 p-1 rounded-md group-hover:opacity-100 opacity-0 transition-all">
            Copy
          </span>
          <span className="absolute right-2 bottom-2">
            {name.toUpperCase()}
          </span>
        </button>
      ))}
      {copiedColor && (
        <Notification className={className} copiedColor={copiedColor} />
      )}
    </>
  );
};
