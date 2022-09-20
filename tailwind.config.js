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
      },
      backgroundImage: {
        cta: "linear-gradient(rgba(17, 24, 39, 0.5), rgba(17, 24, 39,0.5)), url('/cta.jpg') ",
      },
    },
  },
  plugins: [],
};
