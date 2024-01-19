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
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  H7 = 'h7',
  BODY_MAIN = 'body-main',
  BODY_SECONDARY = 'body-secondary',
  LABEL_MAIN = 'label-main',
  LABEL_SECONDARY = 'label-secondary',
}

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontSize: {
      [FontSizes.H1]: [
        '3.375rem', /// 54 px in rem
        {
          fontWeight: 600,
          lineHeight: '4.625rem', /// 74px in rem
        },
      ],
      [FontSizes.H2]: [
        '3rem', /// 48px in rem
        {
          fontWeight: 600,
          lineHeight: '4rem', /// 64px in rem,
        },
      ],
      [FontSizes.H3]: [
        '2.375rem', /// 38px in rem
        {
          fontWeight: 600,
          lineHeight: '3.5rem', // 56px in rem
        },
      ],
      [FontSizes.H4]: [
        '2.25rem', /// 36px in rem
        {
          fontWeight: 500,
          lineHeight: '3.5rem', /// 56px in rem
        },
      ],
      [FontSizes.H5]: [
        '2rem', /// 32px in rem
        {
          fontWeight: 500,
          lineHeight: '3rem', /// 48px in rem
        },
      ],
      [FontSizes.H6]: [
        '1.5rem', /// 24px in rem
        {
          fontWeight: 500,
          lineHeight: '2.25rem', /// 36px in rem
        },
      ],
      [FontSizes.BODY_MAIN]: [
        '1rem', /// 16px in rem
        {
          fontWeight: 400,
          lineHeight: '1.75rem', /// 28px in rem
        },
      ],
      [FontSizes.BODY_SECONDARY]: [
        '1rem', /// 16px in rem
        {
          fontWeight: 500,
          lineHeight: '1.75rem', /// 28px in rem
        },
      ],
      [FontSizes.LABEL_MAIN]: [
        '1.125rem', /// 18px in rem
        {
          fontWeight: 500,
          lineHeight: '2rem', /// 32px in rem
        },
      ],
      [FontSizes.LABEL_SECONDARY]: [
        '1rem', /// 16px in rem
        {
          fontWeight: 500,
          lineHeight: '1.75rem', /// 28px in rem
        },
      ],
      [FontSizes.H7]: [
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
        tabletSPlus: '860px',
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
