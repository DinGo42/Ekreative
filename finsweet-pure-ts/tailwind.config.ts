import type { Config } from 'tailwindcss';

enum ColorsName {
  BLACK_1000 = 'black-1000',
  BLUE_1000 = 'blue-1000',
  BLUE_950 = 'blue-950',
  BLUE_900 = 'blue-900',
  BLUE_700 = 'blue-700',
  BLUE_350 = 'blue-350',
  BLUE_200 = 'blue-200',
  BLUE_300 = 'blue-300',
  BLUE_400 = 'blue-400',
  BLUE_50 = 'blue-50',
  YELLOW_50 = 'yellow-50',
  YELLOW_90 = 'yellow-90',
  YELLOW_200 = 'yellow-200',
  AZURE_1000 = 'azure-1000',
  WHITE_1000 = 'white-1000',
  RED_800 = 'red-800',
}

export const Colors = {
  [ColorsName.BLACK_1000]: '#000',
  [ColorsName.BLUE_1000]: '#282938',
  [ColorsName.BLUE_950]: '#1B1C2B',
  [ColorsName.BLUE_900]: '#1C1E53',
  [ColorsName.BLUE_700]: '#2405F2',
  [ColorsName.BLUE_400]: '#1B1C2A',
  [ColorsName.BLUE_350]: '#BBBBCB',
  [ColorsName.BLUE_300]: '#535460',
  [ColorsName.BLUE_200]: '#F4F6FC33',
  [ColorsName.BLUE_50]: '#F4F6FC',
  [ColorsName.YELLOW_90]: '#FCD980',
  [ColorsName.YELLOW_200]: '#FDE4A6',
  [ColorsName.YELLOW_50]: '#FAF6E5',
  [ColorsName.AZURE_1000]: '#EEF4FA',
  [ColorsName.WHITE_1000]: '#fff',
  [ColorsName.RED_800]: '#990000',
} as const;

enum FontSizes {
  XXL = 'h1',
  XL = 'h2',
  LARGE = 'h3',
  MEDIUM = 'h4',
  SMALL = 'h5',
  XS = 'h6',
  XXS = 'h7',
  BASE_1 = 'body-main',
  BASE_2 = 'body-secondary',
  LABEL_1 = 'label-main',
  LABEL_2 = 'label-secondary',
}

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  safelist: ['*'],
  theme: {
    fontSize: {
      [FontSizes.XXL]: [
        '3.375rem', /// 54 px in rem
        {
          fontWeight: 600,
          lineHeight: '4.625rem', /// 74px in rem
        },
      ],
      [FontSizes.XL]: [
        '3rem', /// 48px in rem
        {
          fontWeight: 600,
          lineHeight: '4rem', /// 64px in rem,
        },
      ],
      [FontSizes.LARGE]: [
        '2.375rem', /// 38px in rem
        {
          fontWeight: 600,
          lineHeight: '3.5rem', // 56px in rem
        },
      ],
      [FontSizes.MEDIUM]: [
        '2.25rem', /// 36px in rem
        {
          fontWeight: 500,
          lineHeight: '3.5rem', /// 56px in rem
        },
      ],
      [FontSizes.SMALL]: [
        '2rem', /// 32px in rem
        {
          fontWeight: 500,
          lineHeight: '3rem', /// 48px in rem
        },
      ],
      [FontSizes.XS]: [
        '1.5rem', /// 24px in rem
        {
          fontWeight: 500,
          lineHeight: '2.25rem', /// 36px in rem
        },
      ],
      [FontSizes.BASE_1]: [
        '1rem', /// 16px in rem
        {
          fontWeight: 400,
          lineHeight: '1.75rem', /// 28px in rem
        },
      ],
      [FontSizes.BASE_2]: [
        '1rem', /// 16px in rem
        {
          fontWeight: 500,
          lineHeight: '1.75rem', /// 28px in rem
        },
      ],
      [FontSizes.LABEL_1]: [
        '1.125rem', /// 18px in rem
        {
          fontWeight: 500,
          lineHeight: '2rem', /// 32px in rem
        },
      ],
      [FontSizes.LABEL_2]: [
        '1rem', /// 16px in rem
        {
          fontWeight: 500,
          lineHeight: '1.75rem', /// 28px in rem
        },
      ],
      [FontSizes.XXS]: [
        '0.75rem', /// 12px in rem
        {
          fontWeight: 500,
          lineHeight: '1.75rem', /// 28px in rem
        },
      ],
    },
    colors: Colors,
    extend: {
      height: {
        'visible-screen': '92vh',
      },
      borderRadius: {
        '4xl': '41px',
      },
      backgroundColor: {
        gradient:
          'linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)',
      },
      screens: {
        phoneS: '320px',
        phoneSPlus: '385px',
        phoneM: '480px',
        tabletS: '768px',
        tabletS_Plus: '860px',
        tabletM: '1024px',
        desktopS: '1280px',
        desktopM: '1440px',
        desktopL: '1920px',
      },
      transitionProperty: {
        height: 'height',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
