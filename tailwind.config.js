/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        promo: '#35383c',
        'promo-dark': '#1A1A1B',
      },
      backgroundImage: {
        cta: "linear-gradient(rgba(26,26,27, 0.5), rgba(26,26,27,0.5)), url('/cta.jpg') ",
      },
    },
  },
  plugins: [],
};
