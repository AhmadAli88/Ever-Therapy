/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          //Color shades kit - #FF6060
          // Primary Peach
          peach: {
            DEFAULT: '#FF6060', // Your main primary-peach color
            light_50: '#660000', // Lighter shade
            light_100: '#FFCCCC',
            light_200: '#FF9999',
            light_300: '#FF6666',
            light_400: '#FF3333',
            dark_600: '#CC0000',
            dark_700: '#990000',
            dark_800: '#660000',
            dark_900: '#330000',
            dark_950: '#1A0000', // Darker shade
          },

          //Color shades kit - #FBBE84
          // Primary Yellow
          yellow: {
            DEFAULT: '#FBBE84', // Your main primary-yellow color
            light_50: '#FFE469',
            light_100: '#FDE5CE',
            light_200: '#FCCA9C',
            light_300: '#FAB06B',
            light_400: '#F99639',
            dark_600: '#C66306',
            dark_700: '#944A05',
            dark_800: '#633103',
            dark_900: '#311902',
            dark_950: '#1B0009', // Darker shade
          },

          //Color shades kit - #FF9696
          //Primary Pink
          pink: {
            DEFAULT: '#FF9696', // Your main pink color
            light_50: '#FFE5E5',
            light_100: '#FFCCCC',
            light_200: '#FF9999',
            light_300: '#FF6666',
            light_400: '#FF3333',
            dark_600: '#CC0000',
            dark_700: '#990000',
            dark_800: '#660000',
            dark_900: '#330000',
            dark_950: '#1A0000', // Darker shade
          },
        },

        secondary: {
          //Color shades kit - Dark Gray #FF9696
          darkgray: {
            DEFAULT: '#595959', // Your main secondary color
            light_50: '#F2F2F2', // Lighter shade
            light_100: '#E6E6E6',
            light_200: '#CCCCCC',
            light_300: '#B3B3B3',
            light_400: '#999999',
            dark_600: '#666666',
            dark_700: '#4D4D4D',
            dark_800: '#333333',
            dark_900: '#1A1A1A',
            dark_950: '#0D0D0D', // Darker shade
          },
          //Color shades kit - Bright Gray #E0E4EA
          brightgray: {
            DEFAULT: '#E0E4EA', // Your main secondary color
            light_50: '#F2F2F2',
            light_100: '#E6E6E6',
            light_200: '#CCCCCC',
            light_300: '#B3B3B3',
            light_400: '#999999',
            dark_600: '#666666',
            dark_700: '#4D4D4D',
            dark_800: '#333333',
            dark_900: '#1A1A1A',
            dark_950: '#0D0D0D', // Darker shade
          },
          //Color shades kit - Light Yellow #FFF2CC
          lightyellow: {
            DEFAULT: '#FFF2CC',
            light_50: '#FFF9E5',
            light_100: '#FFF2CC',
            light_200: '#FFE699',
            light_300: '#FFD966',
            light_400: '#FFCC33',
            dark_600: '#CC9900',
            dark_700: '#997300',
            dark_800: '#664D00',
            dark_900: '#332600',
            dark_950: '#1A1300', // Darker shade
          },
          //Color shades kit - Royal Gold #EEC8C0
          rosegold: {
            DEFAULT: '#EEC8C0', // Your main rosegold color
            light_50: '#EEC8C0',
            light_100: '#EEC8C0',
            light_200: '#EEC8C0',
            light_300: '#DE9587',
            light_400: '#D4725E',
            dark_600: '#A13F2B',
            dark_700: '#782F21',
            dark_800: '#501F16',
            dark_900: '#28100B',
            dark_950: '#140805', // Darker shade
          },
        },

        white_color: {
          DEFAULT: '#FFFFFF', // Your main white color
        },
        black_color: {
          DEFAULT: '#000000', // Your main black color
        },
      },
      padding: {
        '5xs': '0.125rem', // Custom small padding
        '4xs': '0.25rem',
        '3xs': '0.375rem',
        '2xs': '0.5rem',
        '1xs': '0.625rem', // Tiny padding
        xs: '0.75rem', // Extra small padding
        sm: '1rem', // Small padding
        md: '1.25rem', // Medium padding
        lg: '1.5rem', // Large padding
        xl: '2rem', // Extra large padding
        '2xl': '2.5rem',
        '3xl': '3rem',
        '4xl': '4rem', // Huge padding
      },
      fontSize: {
        '3xs': '0.5rem', // Very small (8px)
        '2xs': '0.625rem', // Extra small (10px)
        xs: '0.75rem', // Small (12px)
        sm: '0.875rem', // Smallish (14px)
        base: '1rem', // Default body text (16px)
        lg: '1.125rem', // Large body text (18px)
        xl: '1.25rem', // Small heading (20px)
        '2xl': '1.5rem', // Medium heading (24px)
        '3xl': '1.875rem', // Large heading (30px)
        '4xl': '2.25rem', // Extra-large heading (36px)
        '5xl': '3rem', // Huge heading (48px)
        '6xl': '3.75rem', // Giant heading (60px)
        '7xl': '4.5rem', // Extra giant heading (72px)
        '8xl': '6rem', // Massive (96px)
        '9xl': '8rem', // Ultra massive (128px)
      },
      fontWeight: {
        hairline: '100', // Extra thin
        thin: '200', // Thin
        light: '300', // Light
        normal: '400', // Normal
        medium: '500', // Medium
        semibold: '600', // Semi-bold
        bold: '700', // Bold
        extrabold: '800', // Extra bold
        black: '900', // Black
        extrablack: '950', // Extra black
      },
    },
  },
  plugins: [],
};
