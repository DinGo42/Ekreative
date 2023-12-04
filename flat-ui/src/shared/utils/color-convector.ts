import { CopyFormats } from '../constants';

export const colorConvector = (color: string, fromat: CopyFormats) => {
  if (!color) return;
  const hexToRGB = (hex: string) => {
    const red = parseInt(hex.substring(1, 3), 16);
    const green = parseInt(hex.substring(3, 5), 16);
    const blue = parseInt(hex.substring(5, 7), 16);

    return [red, green, blue];
  };
  const rgb = hexToRGB(color);
  if (fromat === CopyFormats.RGB) return '#' + rgb.join(',');
  if (fromat === CopyFormats.RGBA) return '#' + [...rgb, 1].join(',');
  if (fromat === CopyFormats.HEX) return color;
};

// export const colorInTypes: Record<number, (color: string) => string> = {
//   [CopyFormats.HEX]: (color: string) => colorConvector(color).hex,
//   [CopyFormats.RGB]: (color: string) => colorConvector(color).rgb,
//   [CopyFormats.RGBA]: (color: string) => colorConvector(color).rgba,
// };
