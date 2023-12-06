'use client';
import { createContext, ReactNode, FC, useState, useContext } from 'react';
import { CopyFormats } from '../constants';

type UIContextType = {
  colorType: CopyFormats;
  setColorType: (type: CopyFormats) => void;
  isSoundPlay: boolean;
  setSoundPlay: (state: boolean) => void;
};

export const UIContext = createContext<UIContextType>({
  colorType: CopyFormats.HEX,
  setColorType: () => {},
  isSoundPlay: true,
  setSoundPlay: () => {},
});

type ColorTypeProviderProps = {
  children: ReactNode;
};

export const UIProvider: FC<ColorTypeProviderProps> = ({ children }) => {
  const [colorType, setColorType] = useState<CopyFormats>(CopyFormats.HEX);
  const [isSoundPlay, setSoundPlay] = useState(true);
  return (
    <UIContext.Provider
      value={{
        colorType,
        setColorType,
        isSoundPlay,
        setSoundPlay,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => ({ ...useContext(UIContext) });
