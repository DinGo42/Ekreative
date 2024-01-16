'use client';
import { FC, useState } from 'react';
import {
  AnimationsTimingKeys,
  animations,
  colorConvector,
  generateRandomPhrase,
  useOptionalStyle,
  useUIContext,
} from '@flat-ui/shared';
import { Notification } from './notification';
import useSound from 'use-sound';

type PalletGalleryProps = {
  colors: { color: string; name: string }[];
};

export const PaletteGallery: FC<PalletGalleryProps> = ({ colors }) => {
  const [text, setText] = useState(() => generateRandomPhrase());
  const [play] = useSound('/notify.mp3');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const { className, autoCloseEnable } = useOptionalStyle({
    onDisable: () => {
      setCopiedColor(null);
    },
    style: animations.opacity,
    timing: AnimationsTimingKeys.LONG,
  });
  const { colorType, isSoundPlay } = useUIContext();

  const handleSelect = (color: string) => {
    isSoundPlay && play();
    const newColorFormat = colorConvector(color, colorType);
    navigator.clipboard.writeText(newColorFormat);
    setCopiedColor(newColorFormat);
    setText(generateRandomPhrase());
    autoCloseEnable();
  };
  return (
    <>
      {colors.map(({ color, name }, index) => (
        <button
          key={index}
          onClick={() => handleSelect(color)}
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
        <Notification
          text={text}
          className={className}
          copiedColor={copiedColor}
        />
      )}
    </>
  );
};
