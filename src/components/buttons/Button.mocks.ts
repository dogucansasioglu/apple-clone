import { IButton } from './Button';

const base: IButton = {
  className:
    'transition-all duration-300 ease-in bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg px-6 py-3 text-lg font-semibold text-white hover:opacity-90 md:px-8 md:py-4 xl:text-xl',
  children: 'Button',
  onClick: () => {
    console.log('Button clicked');
  },
};

export const mockButtonProps = {
  base,
};
