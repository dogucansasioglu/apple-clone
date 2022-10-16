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
        primary:
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, #60a5fa, #a78bfa)',
        'primary-hover':
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, #60a5fa 10%, #a78bfa)',
        secondary:
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, #1f2937, #1f2937)',
        'secondary-hover':
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, #1f2937 10%, #1f2937)',
        'gradient-promo':
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, #35383c, #35383c)',
        'gradient-promo-hover':
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, #35383c 10%, #1f2937)',
        'learn-more':
          'linear-gradient(90deg, #3b82f6 10%, #8b5cf6 50%), linear-gradient(90deg, #1f2937 10%, #1f2937 50%)',
        'footer-link':
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, rgba(156, 163, 175, 1), rgba(156, 163, 175, 1))',
        'footer-link-hover':
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, rgba(156, 163, 175, 1) 10%, rgba(156, 163, 175, 1))',
        'footer-social':
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, rgba(156, 163, 175, 0.3), rgba(156, 163, 175, 0.3))',
        'footer-social-hover':
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, rgba(156, 163, 175, 0.3) 10%, rgba(156, 163, 175, 0.3))',
        basket:
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, #d1d5db, #d1d5db)',
        'basket-hover':
          'linear-gradient(90deg, #3b82f6, #8b5cf6), linear-gradient(90deg, #d1d5db 10%, #d1d5db)',
      },
      backgroundSize: {
        'size-gradient-bg': '0 100%, 100% 100%',
        'size-gradient-bg-hover': '100% 100%, 100% 100%',
        'size-border': '0 2px, 100% 2px',
        'size-border-hover': '100% 2px, 100% 2px',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
