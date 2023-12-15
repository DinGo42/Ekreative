import type { Config } from 'tailwindcss';

enum TextSizes {
  REGULAR_MAIN = 'regular-main',
  MEDIUM_REGULAR = 'medium-regular',
  MEDIUM_SEMIBOLD_MAIN = 'medium-semibold-main',
  MEDIUM_SEMIBOLD_SECONDARY = 'medium-semibold-secondary',
  SEMIBOLD = 'semibold',
  LARGE_SEMIBOLD = 'large-semidold',
  MAIN_SEMIBOLD = 'main-semibold',
  SMAll_SECONDARY = 'small-secondary',
  SMALL_MAIN = 'small-main',
  SMALL_SEMIBOLD = 'small-semibold',
  SMALL_REGULAR = 'small-regular',
}

enum Colors {
  WHITE = 'white',
  BLACK_900 = 'black-900',
  BLACK_800 = 'black-800',
  BLACK_880 = 'black-880',
  PURPLE_900 = 'purple-900',
  PURPLE_800 = 'purple-800',
  PURPLE_200 = 'purple-200',
  PURPLE_50 = 'purple-50',
  BLUE_700 = 'blue-700',
  BLUE_200 = 'blue-200',
  BLUE_50 = 'blue-50',
  PINK_700 = 'pink-700',
  PINK_200 = 'pink-200',
  PINK_50 = 'pink-50',
  GREEN_700 = 'green-700',
  GREEN_200 = 'green-200',
  GREEN_50 = 'green-50',
  ORANGE_700 = 'orange-700',
  ORANGE_200 = 'orange-200',
  ORANGE_50 = 'orange-50',
  GRAY_BLUE_700 = 'gray-blue-700',
  GRAY_BLUE_200 = 'gray-blue-200',
  GRAY_BLUE_50 = 'gray-blue-50',
  GRAY_600 = 'gray-600',
  GRAY_400 = 'gray-400',
}

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      keyframes: {
        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        opacity: 'opacity 0.5s ease in out',
      },
    },
    colors: {
      [Colors.WHITE]: '#ffffff',
      [Colors.BLACK_900]: '#101828',
      [Colors.BLACK_800]: '#0C111D',
      [Colors.BLACK_880]: '#161B26',
      [Colors.PURPLE_900]: '#53389E',
      [Colors.PURPLE_800]: '#6941C6',
      [Colors.PURPLE_200]: '#E9D7FE',
      [Colors.PURPLE_50]: '#F9F5FF',
      [Colors.BLUE_700]: '#3538CD',
      [Colors.BLUE_200]: '#C7D7FE',
      [Colors.BLUE_50]: '#EEF4FF',
      [Colors.PINK_700]: '#C11574',
      [Colors.PINK_200]: '#FCCEEE',
      [Colors.PINK_50]: '#FDF2FA',
      [Colors.GREEN_700]: '#067647',
      [Colors.GREEN_200]: '#ABEFC6',
      [Colors.GREEN_50]: '#ECFDF3',
      [Colors.ORANGE_700]: '#B93815',
      [Colors.ORANGE_200]: '#F9DBAF',
      [Colors.ORANGE_50]: '#FEF6EE',
      [Colors.GRAY_BLUE_700]: '#363F72',
      [Colors.GRAY_BLUE_200]: '#D5D9EB',
      [Colors.GRAY_BLUE_50]: '#F8F9FC',
      [Colors.GRAY_600]: '#475467',
      [Colors.GRAY_400]: '#667085',
    },
    screens: {
      phoneS: '320px',
      phoneSPlus: '385px',
      phoneM: '480px',
      tabletS: '768px',
      tabletSPlus: '860px',
      tabletM: '1024px',
      dectopS: '1280px',
      dectopM: '1440px',
      dectopL: '1920px',
    },
    fontSize: {
      [TextSizes.LARGE_SEMIBOLD]: [
        '48px',
        {
          fontWeight: 600,
          lineHeight: '60px',
        },
      ],
      [TextSizes.SEMIBOLD]: [
        '20px',
        {
          fontWeight: 600,
          lineHeight: '30px',
        },
      ],
      [TextSizes.SMALL_MAIN]: [
        '17px',
        {
          fontWeight: 400,
          lineHeight: '24px',
        },
      ],
      [TextSizes.MAIN_SEMIBOLD]: [
        '24px',
        {
          fontWeight: 600,
          lineHeight: '32px',
        },
      ],
      [TextSizes.SMALL_SEMIBOLD]: [
        '14px',
        {
          fontWeight: 600,
          lineHeight: '20px',
        },
      ],
      [TextSizes.SMALL_REGULAR]: [
        '14px',
        {
          fontWeight: 400,
          lineHeight: '20px',
        },
      ],
      [TextSizes.SMAll_SECONDARY]: [
        '14px',
        {
          fontWeight: 500,
          lineHeight: '20px',
        },
      ],
      [TextSizes.REGULAR_MAIN]: [
        '20px',
        {
          fontWeight: 400,
          lineHeight: '30px',
        },
      ],
      [TextSizes.MEDIUM_REGULAR]: [
        '16px',
        {
          fontWeight: 400,
          lineHeight: '24px',
        },
      ],
      [TextSizes.MEDIUM_SEMIBOLD_MAIN]: [
        '36px',
        {
          fontWeight: 600,
          lineHeight: '44px',
        },
      ],
      [TextSizes.MEDIUM_SEMIBOLD_SECONDARY]: [
        '16px',
        {
          fontWeight: 600,
          lineHeight: '24px',
        },
      ],
    },
  },
  plugins: [],
};
export default config;
