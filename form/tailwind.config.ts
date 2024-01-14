import type { Config } from 'tailwindcss';

enum FontSizes {
  LARGE_MAIN = 'large-main',
  LARGE_SECONDARY = 'large-secondary',
  MEDIUM_MAIN = 'medium-main',
  MEDIUM_SECONDARY = 'medium-secondary',
  SMALL_MAIN = 'small-main',
  SMALL_SECONDARY = 'small-secondary',
  MEDIUM_MAIN_SECONDARY = 'medium-main-secondary',
  LARGE_MAIN_SECONDARY = 'large-main-secondary',
}

enum Colors {
  RED = 'red',
  WHITE = 'white',
  BLACK = 'black',
  GRAY_800 = 'gray-800',
  GRAY_600 = 'gray-600',
  GRAY_400 = 'gray-400',
  GRAY_500 = 'gray-500',
  BLUE = 'blue',
  GREEN = 'green',
}

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      [Colors.RED]: '#BA0F30',
      [Colors.WHITE]: '#ffffff',
      [Colors.BLACK]: '#242731',
      [Colors.GRAY_800]: '#575F6E',
      [Colors.GRAY_600]: '#D4D4D4',
      [Colors.GRAY_500]: '#F0F2F4',
      [Colors.GRAY_400]: '#EFF7FF',
      [Colors.BLUE]: '#007AFF',
      [Colors.GREEN]: '#34C759',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      [FontSizes.LARGE_MAIN]: ['32px', { fontWeight: 700, lineHeight: '36px' }],
      [FontSizes.LARGE_SECONDARY]: [
        '16px',
        { fontWeight: 700, lineHeight: '18px' },
      ],
      [FontSizes.MEDIUM_SECONDARY]: [
        '16px',
        { fontWeight: 300, lineHeight: '22px' },
      ],
      [FontSizes.MEDIUM_MAIN]: [
        '13px',
        { fontWeight: 400, lineHeight: '18px' },
      ],
      [FontSizes.SMALL_SECONDARY]: [
        '12px',
        { fontWeight: 300, lineHeight: '16px' },
      ],
      [FontSizes.MEDIUM_MAIN_SECONDARY]: [
        '14px',
        { fontWeight: 400, lineHeight: '20px' },
      ],
      [FontSizes.LARGE_MAIN_SECONDARY]: [
        '18px',
        { fontWeight: 400, lineHeight: '28px' },
      ],
      [FontSizes.SMALL_MAIN]: ['16px', { fontWeight: 500, lineHeight: '24px' }],
    },
    screens: {
      phoneS: '320px',
      phoneSPlus: '385px',
      phoneM: '480px',
      tabletS: '768px',
      tabletSPlus: '860px',
      tabletM: '1024px',
      desktopS: '1280px',
      desktopM: '1440px',
      desktopL: '1920px',
    },
  },
  plugins: [],
};
export default config;
