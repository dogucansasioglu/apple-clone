import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroButtons from '../HeroButtons';

export default {
  title: 'features/Hero/HeroButtons',
  component: HeroButtons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeroButtons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroButtons> = (args) => <HeroButtons />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
