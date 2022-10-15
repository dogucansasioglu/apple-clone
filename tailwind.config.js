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
        backdrop: 'linear-gradient(90deg, #E5EAEE, #ECEDEC)',
        cta: "linear-gradient(rgba(26,26,27, 0.4), rgba(26,26,27,0.4)), url('/cta.jpg') ",
        primary:
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, #60a5fa, #a78bfa)',
        'primary-hover':
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, #60a5fa 10%, #a78bfa)',
        secondary:
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, #1f2937, #1f2937)',
        'secondary-hover':
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, #1f2937 10%, #1f2937)',
      },
      backgroundSize: {
        'size-primary': '0 100%, 100% 100%',
        'size-primary-hover': '100% 100%, 100% 100%',
      },
    },
  },
  plugins: [],
};
