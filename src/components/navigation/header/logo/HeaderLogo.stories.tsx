import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderLogo from './HeaderLogo';

export default {
  title: 'navigation/Header/HeaderLogo',
  component: HeaderLogo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeaderLogo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderLogo> = () => <HeaderLogo />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
