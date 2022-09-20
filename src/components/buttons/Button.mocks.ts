import { IButton } from './Button';

const base: IButton = {
  classes: 'primaryButton',
  children: 'Button',
  onClick: () => {
    console.log('Button clicked');
  },
};

export const mockButtonProps = {
  base,
};
