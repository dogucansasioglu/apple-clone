import { ComponentMeta, ComponentStory } from '@storybook/react';
import PrimaryButton, { IPrimaryButton } from '../PrimaryButton';

export default {
  title: 'buttons/PrimaryButton',
  component: PrimaryButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PrimaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Header = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Header.args = {
  loading: false,
  children: 'Click me',
  className: 'p-5',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
  disabled: false,
} as IPrimaryButton;
