import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-primary': '#000000',
        'dark-secondary': '#0d0d0d',
        'light-primary': '#ffffff',
        'light-secondary': '#7e7e7e',
        'dark-background': '#181818',
        'color-primary': '#1b202c',
        'color-secondary': '#161923',
        'header-bg': 'rgba(27, 27, 27, .26)',
        'header-border': 'rgba(255, 255, 255, .1)',
        'footer-divider': '#2b2b2b',
        'btn-primary': '#0266ff',
        'btn-secondary': '#3898ec',
      },
      animation: {
        fade: 'fadeIn 350ms ease-in-out',
        'scroll-text': 'scrollUp 2.5s ease-in-out',
      },
      keyframes: (theme) => ({
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollUp: {
          '0%': { marginTop: '100px', opacity: '0' },
          '10%': { marginTop: '85px', opacity: '0.5' },
          '20%': { marginTop: '70px', opacity: '1' },
          '100%': { marginTop: '0px', opacity: '1' },
        },
      }),
    },
  },
  plugins: [],
}
export default config
