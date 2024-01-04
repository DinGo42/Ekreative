import type { Config } from 'tailwindcss';

enum FonstSizes {
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

        scale: {
          '0%': { scale: '0.5', opacity: '0' },
          '100%': { scale: '1', opacity: '1' },
        },
        scaleBouncy: {
          '0%': { scale: '0.5', opacity: '0' },
          '75%': { scale: '1.1', opacity: '1' },
          '100%': { scale: '1', opacity: '1' },
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
        mainTrnasition: 'left_center 1s  ease-in-out',
        secondaryTrnasition: 'right_center 1s  ease-in-out',
        scaleShow: 'scale 0.3s ease-in-out',
        scaleBouncy: 'scaleBouncy 0.3s ease-in-out',
        scaleHide: 'reverse scale 0.3s ease-in-out',
        opacity: 'opacity 0.3s ease-in-out',
      },
    },
    screens: {
      phoneS: '320px',
      phoneSPlus: '385px',
      phoneM: '480px',
      tabletS: '768px',
      tabletS_Plus: '860px',
      tabletM: '1024px',
      dectopS: '1280px',
      dectopM: '1440px',
      dectopL: '1920px',
    },

    fontSize: {
      [FonstSizes.LARGE_MAIN]: '140px',
      [FonstSizes.LARGE_SECONDARY]: '52px',
      [FonstSizes.MEDIUM_MAIN]: '72px',
      [FonstSizes.MEDIUM_SECONDARY]: '36px',
      [FonstSizes.MAIN]: '24px',
      [FonstSizes.SECONDARY]: '17px',
      [FonstSizes.SMALL_MAIN]: '15px',
      [FonstSizes.SMALL_SECONDARY]: '16px',
    },
  },
  plugins: [],
};
export default config;
