import { CopyFormats } from '../constants';

export const colorConvector = (
  color: string,
  format: CopyFormats,
  customAlpha?: number
) => {
  const hexToRGB = (hex: string) => {
    const red = parseInt(hex.substring(1, 3), 16);
    const green = parseInt(hex.substring(3, 5), 16);
    const blue = parseInt(hex.substring(5, 7), 16);

    return [red, green, blue];
  };
  const rgb = hexToRGB(color);

  switch (format) {
    case CopyFormats.RGB:
      return 'rgb(' + rgb.join(',') + ')';
    case CopyFormats.RGBA:
      return 'rgba(' + [...rgb, customAlpha ? customAlpha : 1].join(',') + ')';
    case CopyFormats.HEX:
      return color;
  }
};
