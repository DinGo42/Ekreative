import { CopyFormats } from '../constants';

export const colorConvector = (color: string, fromat: CopyFormats) => {
  const hexToRGB = (hex: string) => {
    const red = parseInt(hex.substring(1, 3), 16);
    const green = parseInt(hex.substring(3, 5), 16);
    const blue = parseInt(hex.substring(5, 7), 16);

    return [red, green, blue];
  };
  const rgb = hexToRGB(color);
  if (fromat === CopyFormats.RGB) return '#rgb(' +rgb.join(',') + ')';
  if (fromat === CopyFormats.RGBA) return '#rgba(' +[...rgb, 1].join(',') + ')';
  return color;
};