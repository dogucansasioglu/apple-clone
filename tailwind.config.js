/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        promo: '#35383c',
        'promo-dark': '#1A1A1B',
        ws: '#e7ecee',
      },
      backgroundImage: {
        cta: "linear-gradient(rgba(26,26,27, 0.4), rgba(26,26,27,0.4)), url('/cta.jpg') ",
        logo: 'linear-gradient(90deg, #3b82f6, #6366f1), linear-gradient(90deg, #60a5fa, #818cf8)',
        'logo-hover':
          'linear-gradient(90deg, #3b82f6, #6366f1), linear-gradient(90deg, #60a5fa 10%, #818cf8)',
      },
      backgroundSize: {
        'size-logo': '0 100%, 100% 100%',
        'size-logo-hover': '100% 100%, 100% 100%',
      },
    },
  },
  plugins: [],
};
