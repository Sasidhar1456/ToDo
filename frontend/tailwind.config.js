/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EDC7B7',
        secondary: '#123C69',
        third: '#EEE2DC',
        forth: '#AC3B61', // ❗ remove space before hex
      },
      fontFamily: {
        lucky: ['"Luckiest Guy"', 'sans-serif'], // quotes for multi-word font names
        love: ['"Love Ya Like A Sister"', 'cursive'],
        san: ['sans-serif'],
      },
      width: {
        85: '22rem',
        100: '29rem',
      },
    },
  },
  plugins: [],
}
