import type { Config } from 'tailwindcss';

enum FonstSizes {
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
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },

    fontSize: {
      [FonstSizes.MAIN]: '24px',
      [FonstSizes.SECONDARY]: '17px',
      [FonstSizes.SMALL_MAIN]: '15px',
      [FonstSizes.SMALL_SECONDARY]: '16px',
    },
  },
  plugins: [],
};
export default config;
