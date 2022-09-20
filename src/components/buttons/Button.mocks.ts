import { IButton } from './Button';

const base: IButton = {
  className: 'primaryButton',
  children: 'Button',
  onClick: () => {
    console.log('Button clicked');
  },
};

export const mockButtonProps = {
  base,
};
