import { ComponentMeta, ComponentStory } from '@storybook/react';
import LogoButton, { ILogoButton } from '../LogoButton';

export default {
  title: 'buttons/LogoButton',
  component: LogoButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LogoButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LogoButton> = (args) => (
  <LogoButton {...args} />
);

export const Header = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Header.args = {
  location: 'header',
} as ILogoButton;
