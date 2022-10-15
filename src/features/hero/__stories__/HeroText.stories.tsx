import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroText from '../HeroText';

export default {
  title: 'features/Hero/HeroText',
  component: HeroText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeroText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroText> = (args) => <HeroText />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
