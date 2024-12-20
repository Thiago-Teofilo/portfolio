/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      primary: ['Poppins', 'serif'],
    },
    colors: {
      // Cores para o tema escuro
      primary: '#141816',
      secondary: '#29312D',
      'primary-alt': '#1f382b',
      tertiary: '#13ab45',
      white: '#e5e5e5',
      'pure-white': '#ffff',
      // Cores para o tema claro (light)
      lightPrimary: '#e5e5e5',
      lightSecondary: '#d3d3d3',
      lightSecondaryAlt: '#b5b5b5',
    },
  },
  plugins: [],
};
