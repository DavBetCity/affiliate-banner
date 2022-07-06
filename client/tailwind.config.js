/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        betcity: {
          light: '#00f4ff',
          dim: '#1a213f',
          dark: '#161c36',
        },
      },
      fontFamily: {
        comforter: ['Patrick Hand'],
        serif: ['ui-serif', 'Georgia'],
        garamond: ['EB Garamond', 'serif'],
        sans: ['ui-sans-serif', 'system-ui'],
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },

  plugins: [],
};
