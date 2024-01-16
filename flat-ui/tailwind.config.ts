import type { Config } from 'tailwindcss';

enum FontsSizes {
  LARGE_MAIN = 'large-main',
  LARGE_SECONDARY = 'large-secondary',
  MEDIUM_MAIN = 'medium-main',
  MEDIUM_SECONDARY = 'medium-secondary',
  MAIN = 'main',
  SECONDARY = 'secondary',
  SMALL_MAIN = 'small-main',
  SMALL_SECONDARY = 'small-secondary',
}

enum COLORS {
  MAIN = 'main',
  SECONDARY = 'secondary',
  WHITE = 'white',
  BLACK = 'black',
}

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      [COLORS.MAIN]: '#3c40c6',
      [COLORS.SECONDARY]: '#0c2461',
      [COLORS.WHITE]: '#ffffff',
      [COLORS.BLACK]: '#000000',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        left_center: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        right_center: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleBouncy: {
          '0%': { scale: '0.5', opacity: '0' },
          '75%': { scale: '1.1', opacity: '1' },
          '100%': { scale: '1', opacity: '1' },
        },
        reverseScaleBouncy: {
          '0%': { scale: '1', opacity: '1' },
          '75%': { scale: '1.1', opacity: '1' },
          '100%': { scale: '0.5', opacity: '0' },
        },
        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      animation: {
        mainTransition: 'left_center 1s  ease-in-out',
        secondaryTransition: 'right_center 1s  ease-in-out',
        upScaleBouncy: 'scaleBouncy 0.7s ease-in-out',
        downScaleBouncy: 'reverseScaleBouncy 0.71s ease-in-out',
        opacity: 'opacity 0.7s ease-in-out',
      },
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

    fontSize: {
      [FontsSizes.LARGE_MAIN]: '140px',
      [FontsSizes.LARGE_SECONDARY]: '52px',
      [FontsSizes.MEDIUM_MAIN]: '72px',
      [FontsSizes.MEDIUM_SECONDARY]: '36px',
      [FontsSizes.MAIN]: '24px',
      [FontsSizes.SECONDARY]: '17px',
      [FontsSizes.SMALL_MAIN]: '15px',
      [FontsSizes.SMALL_SECONDARY]: '16px',
    },
  },
  plugins: [],
};
export default config;
