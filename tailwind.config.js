/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          50: '#fdfbf7',
          100: '#f7f2e9',
          200: '#eee3cf',
          300: '#e1cca9',
          400: '#d0ad7c',
          500: '#b98c53',
          600: '#9e6e3f',
          700: '#7e5233',
          800: '#67432d',
          900: '#543727',
          950: '#2f1c13',
        },
        warmAmber: {
          500: '#d97706',
          600: '#b45309',
        },
        olive: {
          500: '#6b7a5a',
          600: '#546244',
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out',
        scaleUp: 'scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        'warm': '0 10px 25px -5px rgba(126, 82, 51, 0.1), 0 8px 10px -6px rgba(126, 82, 51, 0.05)',
        'warm-lg': '0 20px 30px -10px rgba(126, 82, 51, 0.15), 0 10px 15px -5px rgba(126, 82, 51, 0.08)',
      }
    },
  },
  plugins: [],
};
