import { ComponentMeta, ComponentStory } from '@storybook/react';
import SecondaryButton, { ISecondaryButton } from '../SecondaryButton';

export default {
  title: 'buttons/SecondaryButton',
  component: SecondaryButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SecondaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecondaryButton> = (args) => (
  <SecondaryButton {...args} />
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
  borderClassName: '',
  withBorder: true,
} as ISecondaryButton;
